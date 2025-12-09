import type { FC } from 'react';
import type { RocketInputs } from '../hooks/useRocketCalculator';

interface InputPanelProps {
  inputs: RocketInputs;
  onInputChange: (name: string, value: number) => void;
}

export const InputPanel: FC<InputPanelProps> = ({ inputs, onInputChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onInputChange(name, parseFloat(value));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-slate-700">Input Parameters</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Chamber Pressure P<sub>c</sub> (bar)
          </label>
          <input
            type="number"
            name="chamberPressure"
            value={inputs.chamberPressure}
            onChange={handleChange}
            step="5"
            min="10"
            max="200"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Nozzle Expansion Ratio (ε = A<sub>e</sub>/A<sub>t</sub>)
          </label>
          <input
            type="number"
            name="expansionRatio"
            value={inputs.expansionRatio}
            onChange={handleChange}
            step="0.5"
            min="1"
            max="100"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Specific Heat Ratio (γ)
          </label>
          <input
            type="number"
            name="gamma"
            value={inputs.gamma}
            onChange={handleChange}
            step="0.01"
            min="1.1"
            max="1.67"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Altitude (m)
          </label>
          <input
            type="number"
            name="altitude"
            value={inputs.altitude}
            onChange={handleChange}
            step="100"
            min="0"
            max="100000"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};
