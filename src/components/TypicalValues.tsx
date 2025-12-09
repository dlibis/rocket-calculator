import type { FC } from 'react';

export const TypicalValues: FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-sm text-slate-600">
      <h3 className="font-semibold text-slate-700 mb-2">Typical Values:</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>γ: 1.2 (solid propellants), 1.25 (liquid propellants), 1.4 (air)</li>
        <li>Expansion ratio: 4-12 (sea level), 50-100 (vacuum)</li>
        <li>Chamber pressure: 50-100 bar (typical), up to 200 bar (high performance)</li>
      </ul>
    </div>
  );
};
