import { useState, useCallback } from 'react';

export interface RocketInputs {
  chamberPressure: number;
  expansionRatio: number;
  gamma: number;
  altitude: number;
}

export interface RocketResults {
  Pe: string;
  Pa: string;
  eta_th: string;
  pressureRatio: string;
  inversePressureRatio: string;
  exitMach: string;
  expansionStatus: string;
  peOverPa: string;
  flowSeparation: boolean;
}

export const useRocketCalculator = () => {
  const [inputs, setInputs] = useState<RocketInputs>({
    chamberPressure: 70,
    expansionRatio: 10,
    gamma: 1.24,
    altitude: 0
  });

  const [results, setResults] = useState<RocketResults | null>(null);

  const getAtmosphericPressure = useCallback((altitude: number): number => {
    const P0 = 101.325; // kPa at sea level
    const H = 8500; // scale height in meters
    return P0 * Math.exp(-altitude / H);
  }, []);

  const calculate = useCallback(() => {
    const { expansionRatio, gamma, altitude, chamberPressure } = inputs;
    
    const PaKpa = getAtmosphericPressure(altitude);
    const PaBar = PaKpa / 100;

    const Pe = chamberPressure / Math.pow(expansionRatio, gamma);
    const pressureRatio = Pe / chamberPressure;
    const inversePressureRatio = chamberPressure / Pe;

    const eta_th = 1 - Math.pow(pressureRatio, (gamma - 1) / gamma);

    const exponent = (gamma - 1) / gamma;
    const term = Math.pow(inversePressureRatio, exponent);
    const Me = Math.sqrt((2 / (gamma - 1)) * (term - 1));

    const ratio = Pe / PaBar;

    let expansionStatus = '';
    let flowSeparation = false;

    if (Math.abs(ratio - 1) < 0.1) {
      expansionStatus = 'Optimally Expanded';
    } else if (ratio > 1) {
      expansionStatus = 'Under-Expanded';
    } else {
      expansionStatus = 'Over-Expanded';
      if (ratio < 0.4) {
        flowSeparation = true;
      }
    }

    setResults({
      Pe: Pe.toFixed(3),
      Pa: PaBar.toFixed(3),
      eta_th: (eta_th * 100).toFixed(2),
      pressureRatio: pressureRatio.toFixed(4),
      inversePressureRatio: inversePressureRatio.toFixed(2),
      exitMach: Me.toFixed(3),
      expansionStatus,
      peOverPa: ratio.toFixed(3),
      flowSeparation
    });
  }, [inputs, getAtmosphericPressure]);

  const updateInput = useCallback((name: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  return {
    inputs,
    results,
    updateInput,
    calculate
  };
};
