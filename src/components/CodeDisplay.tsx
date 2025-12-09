import type { FC } from 'react';

interface CodeDisplayProps {
  isVisible: boolean;
  onToggle: () => void;
}

const CODE_STRING = `// Thermal Efficiency Calculation
const calculate = () => {
// Exit pressure from expansion ratio:
// Pe = Pc / ε^γ
const Pe = chamberPressure / Math.pow(expansionRatio, gamma);

// Pressure ratio
const pressureRatio = Pe / chamberPressure;

// Thermal efficiency directly from pressure ratio:
// η_th = 1 - (Pe/Pc)^((γ-1)/γ)
const eta_th = 1 - Math.pow(pressureRatio, (gamma - 1) / gamma);
}`;

export const CodeDisplay: FC<CodeDisplayProps> = ({ isVisible, onToggle }) => {
  return (
    <>
      <button
        onClick={onToggle}
        className="px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-colors"
      >
        {isVisible ? 'Hide Code' : 'Show Code'}
      </button>

      {isVisible && (
        <div className="mb-6 bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="text-xs font-mono whitespace-pre">{CODE_STRING}</pre>
        </div>
      )}
    </>
  );
};
