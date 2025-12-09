import type { FC } from 'react';

export const PhysicsSummary: FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-400 p-5 rounded-lg shadow-lg mt-4">
      <h3 className="font-bold text-slate-900 mb-4 flex items-center text-xl">
        <span className="text-2xl mr-2">📚</span>
        Complete Physics Summary: Temperature, Pressure, and Rocket Efficiency
      </h3>
      <div className="text-sm text-slate-800 space-y-4">
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
          <p className="font-bold text-blue-900 mb-2">1. What Temperature Measures: The Dual Perspective</p>

          <p className="font-semibold text-blue-800 mt-3 mb-1">General Thermodynamic Definition (Includes All Modes) 🌡️</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>
              Temperature (T) measures the <strong>average thermal kinetic energy</strong> of particles in a substance
            </li>
            <li>This thermal energy is stored across ALL degrees of freedom:</li>
            <li className="ml-4">
              <strong>Translational:</strong> Movement of entire particle through space (present in all substances)
            </li>
            <li className="ml-4">
              <strong>Rotational:</strong> Spinning around center of mass (molecules with multiple atoms)
            </li>
            <li className="ml-4">
              <strong>Vibrational:</strong> Oscillation of atoms within molecule (polyatomic molecules, active at
              higher T)
            </li>
            <li>
              By the <strong>equipartition theorem</strong>: energy distributes equally among all active degrees of
              freedom
            </li>
            <li>Increasing total thermal energy → increases energy in all modes → higher temperature</li>
          </ul>

          <p className="font-semibold text-blue-800 mt-3 mb-1">
            Kinetic Theory Definition (Focuses on Translational Mode) ⚛️
          </p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>
              Kinetic theory defines temperature specifically through <strong>translational kinetic energy</strong>: T =
              (2/3)(KE_trans/k)
            </li>
            <li>
              <strong>Why focus on translation?</strong>
            </li>
            <li className="ml-4">Translational motion is present in ALL states of matter (solid, liquid, gas)</li>
            <li className="ml-4">It's the primary energy mode for monoatomic gases (He, Ne, Ar)</li>
            <li className="ml-4">Direct mechanism for pressure (particle collisions with walls)</li>
            <li className="ml-4">Primary mechanism for heat transfer between systems</li>
            <li className="ml-4">Translational and rotational levels are closely spaced → equilibrate quickly</li>
            <li className="ml-4">Vibrational levels are widely spaced → can be "frozen out" at lower temperatures</li>
            <li className="ml-4">
              <strong>Non-equilibrium systems:</strong> Each mode can have different "temperatures" (T_trans, T_rot,
              T_vib) before equilibration
            </li>
          </ul>

          <p className="font-semibold text-blue-800 mt-3 mb-1">Reconciling the Two Perspectives</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>
              Both perspectives are consistent for systems in <strong>thermal equilibrium</strong>
            </li>
            <li>Translational KE sets the temperature scale and provides the mathematical definition: KE_avg ∝ T</li>
            <li>Total thermal energy includes all modes, and since they're coupled, they all increase together</li>
            <li>Temperature fundamentally tracks the translational energy, but reflects the total energy distribution</li>
            <li>
              <strong>Bottom line:</strong> T is defined by translation but, in equilibrium, represents energy across
              all active modes
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <p className="font-bold text-green-900 mb-2">2. What Pressure Measures</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>
              Pressure is determined <strong>only by translational motion</strong>: P = (1/3)ρv̄²
            </li>
            <li>It results from molecules colliding with walls - a purely translational phenomenon</li>
            <li>Rotational and vibrational energy do NOT directly contribute to pressure</li>
            <li>However, T = (3/2)(P/ρ)(m/k) connects pressure to temperature, which includes all modes</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-500">
          <p className="font-bold text-amber-900 mb-2">3. Why γ Affects Thermal Efficiency</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>
              γ = Cp/Cv reflects molecular complexity: high γ (~1.4) = simple molecules, low γ (~1.2) = complex molecules
            </li>
            <li>Complex molecules have MORE internal energy storage modes (rotational, vibrational)</li>
            <li>
              During nozzle expansion, energy in these internal modes is LESS available for conversion to directed thrust
            </li>
            <li>
              Simple molecules (high γ) convert thermal energy more efficiently: ηth = 1 - (Pe/Pc)^((γ-1)/γ)
            </li>
            <li>Higher γ → larger exponent → lower Te → higher thermal efficiency</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
          <p className="font-bold text-purple-900 mb-2">4. Thermal Efficiency vs. Rocket Performance (Isp)</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>
              <strong>Critical distinction:</strong> Thermal efficiency ≠ Rocket performance!
            </li>
            <li>Rocket performance (Isp) depends on THREE factors: ve ∝ √(γ/(γ-1) × Tc/MW)</li>
            <li>
              <strong>1. Combustion Temperature (Tc):</strong> Higher temperature → more energy available
            </li>
            <li>
              <strong>2. Molecular Weight (MW):</strong> Lighter molecules → higher exit velocity for same energy
            </li>
            <li>
              <strong>3. γ (heat capacity ratio):</strong> Higher γ → better thermal efficiency
            </li>
            <li className="font-semibold mt-2">Real-World Examples Showing Tc/MW Trade-offs:</li>
            <li className="ml-4">H₂/O₂: Tc=3500K, MW=12, γ=1.24 → Isp=450s (low MW dominates)</li>
            <li className="ml-4">
              Aluminized solid: Tc=3600K, MW=28.8, γ=1.26 → Isp=265s (high Tc compensates heavy MW)
            </li>
            <li className="ml-4">RP-1/O₂: Tc=3600K, MW=23, γ=1.24 → Isp=350s (balanced Tc and MW)</li>
            <li className="ml-4">
              <strong>Key insight:</strong> High combustion temperature can overcome heavy molecular weight, or low
              molecular weight can overcome moderate temperature
            </li>
            <li>γ has the smallest effect (~10-15% variation), while Tc and MW have dominant effects</li>
            <li>
              <strong>Bottom line:</strong> Don't judge propellants by thermal efficiency alone - the Tc/MW ratio
              matters most!
            </li>
          </ul>
        </div>

        <div className="bg-rose-50 p-3 rounded-lg border-l-4 border-rose-500">
          <p className="font-bold text-rose-900 mb-2">5. Isentropic Stagnation Process (Reversible)</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>When flow decelerates isentropically: organized bulk velocity → random translational motion</li>
            <li>
              The kinetic energy (1/2)v² converts to increased temperature: h₀ = CpT = h + (1/2)v² = constant
            </li>
            <li>This temperature rise distributes energy across ALL molecular modes via equipartition</li>
            <li>Pressure increases because random translational speeds increase (P ∝ translational KE)</li>
            <li>Entropy remains constant (reversible process) - you can fully recover the original flow state</li>
            <li>Stagnation pressure P₀ is conserved throughout the flow</li>
          </ul>
        </div>

        <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
          <p className="font-bold text-red-900 mb-2">6. The Energy Conversion Process During Expansion</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>
              <strong>As gas expands and accelerates:</strong> Static temperature T drops as energy extracts from random
              thermal motion
            </li>
            <li>
              <strong>Energy source:</strong> Comes from ALL modes that can equilibrate during expansion timescale
            </li>
            <li>Translational modes: equilibrate essentially instantaneously</li>
            <li>Rotational modes: equilibrate very quickly for most molecules</li>
            <li>
              Vibrational modes: may or may not fully equilibrate (depends on temperature and expansion rate)
            </li>
            <li>
              <strong>High-temperature rocket exhaust:</strong> Significant thermal energy stored in vibrational modes
            </li>
            <li>
              During expansion, vibrational energy relaxes toward equilibrium → transfers to translation → organizes
              into bulk flow
            </li>
            <li>
              <strong>Vibrational freeze-out:</strong> If relaxation is too slow, that energy doesn't fully convert to
              directed kinetic energy (performance loss)
            </li>
            <li>
              <strong>Key principle:</strong> Organized flow energy comes from reduction in total random thermal energy
              (all modes), not just translation
            </li>
            <li>
              <strong>Enthalpy conversion:</strong> h = Σ(all energy modes), and during expansion Δh converts to
              organized kinetic energy ½V²
            </li>
          </ul>
        </div>

        <div className="bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-500">
          <p className="font-bold text-indigo-900 mb-2">7. Non-Isentropic Processes (Irreversible Losses)</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>Irreversibilities drop P₀: shocks, friction, flow separation, mixing, turbulence</li>
            <li>All convert organized kinetic energy → random thermal motion IRREVERSIBLY</li>
            <li>Total energy (h₀) is conserved, but the energy becomes disorganized - entropy increases</li>
            <li>You CANNOT fully recover this energy back into useful thrust</li>
            <li>The loss is about organization/reversibility, NOT about which molecular mode stores the energy</li>
          </ul>
        </div>

        <div className="bg-cyan-50 p-3 rounded-lg border-l-4 border-cyan-500">
          <p className="font-bold text-cyan-900 mb-2">8. This Calculator's Assumptions</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>
              Assumes <strong>ideal, isentropic expansion</strong> through the nozzle (no losses)
            </li>
            <li>All processes are reversible: P₀ = constant throughout</li>
            <li>Thermal efficiency calculated represents the theoretical maximum</li>
            <li>Real rockets have 2-5% stagnation pressure losses (friction, boundary layers, non-uniform flow)</li>
            <li>Actual performance will be lower than these ideal predictions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
