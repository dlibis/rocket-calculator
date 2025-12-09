import type { FC } from 'react';
import type { RocketResults } from '../hooks/useRocketCalculator';

interface ResultsPanelProps {
  results: RocketResults | null;
}

export const ResultsPanel: FC<ResultsPanelProps> = ({ results }) => {
  if (!results) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-slate-700">Results</h2>

      <div className="space-y-3">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <div className="text-sm text-slate-600">Thermal Efficiency</div>
          <div className="text-3xl font-bold text-blue-600">{results.eta_th}%</div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 p-3 rounded">
            <div className="text-xs text-slate-600">Exit Pressure P<sub>e</sub></div>
            <div className="text-lg font-semibold text-slate-800">{results.Pe} bar</div>
          </div>

          <div className="bg-slate-50 p-3 rounded">
            <div className="text-xs text-slate-600">Ambient P<sub>a</sub></div>
            <div className="text-lg font-semibold text-slate-800">{results.Pa} bar</div>
          </div>

          <div className="bg-slate-50 p-3 rounded">
            <div className="text-xs text-slate-600">P<sub>c</sub>/P<sub>e</sub></div>
            <div className="text-lg font-semibold text-slate-800">{results.inversePressureRatio}</div>
          </div>

          <div className="bg-slate-50 p-3 rounded">
            <div className="text-xs text-slate-600">Exit Mach M<sub>e</sub></div>
            <div className="text-lg font-semibold text-slate-800">{results.exitMach}</div>
          </div>

          <div className="bg-slate-50 p-3 rounded col-span-2">
            <div className="text-xs text-slate-600">P<sub>e</sub>/P<sub>a</sub></div>
            <div className="text-lg font-semibold text-slate-800">{results.peOverPa}</div>
          </div>
        </div>

        <div
          className={`p-3 rounded font-medium text-center ${
            results.expansionStatus === 'Optimally Expanded'
              ? 'bg-green-100 text-green-800'
              : results.expansionStatus === 'Under-Expanded'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-orange-100 text-orange-800'
          }`}
        >
          {results.expansionStatus}
        </div>

        {results.flowSeparation && (
          <div className="p-3 rounded font-medium text-center bg-red-100 text-red-800 border-2 border-red-500">
            ⚠️ FLOW SEPARATION WARNING ⚠️
            <div className="text-sm mt-1">
              Summerfield criterion violated (P<sub>e</sub>/P<sub>a</sub> &lt; 0.4)
            </div>
            <div className="text-xs mt-1">
              Nozzle flow will likely separate from walls, causing instability and thrust loss
            </div>
          </div>
        )}

        <div className="text-xs text-slate-500 mt-4 p-2 bg-slate-50 rounded">
          <strong>Note:</strong> Thermal efficiency calculated purely from pressure ratio
        </div>
      </div>
    </div>
  );
};
