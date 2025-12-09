import { useState, useEffect } from 'react';
import { useRocketCalculator } from './hooks/useRocketCalculator';
import { InputPanel } from './components/InputPanel';
import { ResultsPanel } from './components/ResultsPanel';
import { CodeDisplay } from './components/CodeDisplay';
import { RocketVisualizer } from './components/RocketVisualizer';
import { PhysicsSummary } from './components/PhysicsSummary';
import { TypicalValues } from './components/TypicalValues';

const RocketThermalCalculator = () => {
  const { inputs, results, updateInput, calculate } = useRocketCalculator();
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    calculate();
  }, [inputs, calculate]);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-lg">
      <div className="text-center mb-4">
        <div className="flex justify-center items-center gap-4 mb-3">
          <h1 className="text-4xl font-bold text-red-600">RPC</h1>
          <CodeDisplay isVisible={showCode} onToggle={() => setShowCode(!showCode)} />
        </div>
        <RocketVisualizer />
        <h2 className="text-2xl font-bold text-slate-800">
          Ideal Rocket Motor Thermal Efficiency Calculator
        </h2>
      </div>

      <p className="text-center text-slate-600 mb-6 text-sm">
        η<sub>th</sub> = 1 - (P<sub>e</sub>/P<sub>c</sub>)<sup>(γ-1)/γ</sup>
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <InputPanel inputs={inputs} onInputChange={updateInput} />
        <ResultsPanel results={results} />
      </div>

      <TypicalValues />
      <PhysicsSummary />
    </div>
  );
};

export default RocketThermalCalculator;