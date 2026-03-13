"use client";

import { useState } from "react";

const wavelengths = [
  {
    nm: 445,
    color: "Blue",
    css: "#3B82F6",
    type: "Direct diode (GaN)",
    tech: "GaN diodes at 445 nm. High power (2\u201310 W), low cost, fast modulation.",
    safety:
      "Photochemical hazard below 500 nm. Cumulative exposure concern for operators and audience scanning.",
    safetyBg: "rgba(239,68,68,0.08)",
    safetyCss: "#EF4444",
  },
  {
    nm: 520,
    color: "Green",
    css: "#22C55E",
    type: "Direct diode (InGaN)",
    tech: "InGaN diodes. Replaced DPSS. No IR residual. Better stability and modulation.",
    safety:
      "Appears brightest to the eye (~555 nm peak sensitivity). Do not judge hazard by perceived brightness \u2014 a dimmer red beam can carry more energy.",
    safetyBg: "rgba(234,179,8,0.08)",
    safetyCss: "#EAB308",
  },
  {
    nm: 532,
    color: "Green (DPSS)",
    css: "#4ADE80",
    type: "Diode Pumped Solid State",
    tech: "808 nm \u2192 Nd:YVO\u2084 (1064 nm) \u2192 KTP (532 nm). Legacy green. Temperature-sensitive, complex.",
    safety:
      "IR residual hazard: invisible 1064 nm beam emitted if IR filter fails. No aversion response trigger for invisible beams. Assess filter integrity in risk assessments.",
    safetyBg: "rgba(239,68,68,0.08)",
    safetyCss: "#EF4444",
  },
  {
    nm: 638,
    color: "Red",
    css: "#EF4444",
    type: "Direct diode (AlGaInP)",
    tech: "AlGaInP diodes at 638 nm. Mature, reliable. Typical 1\u20135 W entertainment.",
    safety:
      "Perceived dimmer than green at equal power. Can deliver more energy than appearance suggests. Do not underestimate red component contribution in mixed-colour content.",
    safetyBg: "rgba(234,179,8,0.08)",
    safetyCss: "#EAB308",
  },
];

export default function EntertainmentWavelengths() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? wavelengths[selected] : null;

  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#161619] p-5">
      <p className="text-sm font-medium text-[#E8E6E0] mb-1">
        Common entertainment laser wavelengths
      </p>
      <p className="text-xs text-[#6B6963] mb-4">
        Click any wavelength for details
      </p>

      <div className="space-y-1">
        {wavelengths.map((w, i) => (
          <button
            key={w.nm}
            onClick={() => setSelected(selected === i ? null : i)}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-left transition-all cursor-pointer ${
              selected === i
                ? "bg-[#1E1E22] border border-[rgba(255,255,255,0.1)]"
                : "border border-transparent hover:bg-[#1E1E22] hover:border-[rgba(255,255,255,0.07)]"
            }`}
          >
            <div
              className="w-3.5 h-3.5 rounded-full shrink-0"
              style={{ background: w.css }}
            />
            <span className="text-sm font-medium text-[#E8E6E0] min-w-[55px]">
              {w.nm} nm
            </span>
            <span className="text-[13px] text-[#9C9A92]">{w.color}</span>
            <span className="flex-1" />
            <span className="text-xs text-[#6B6963]">{w.type}</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="mt-4 bg-[#1E1E22] rounded-lg p-4">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div
              className="w-5 h-5 rounded-full"
              style={{ background: active.css }}
            />
            <div>
              <p className="text-[15px] font-medium text-[#E8E6E0]">
                {active.nm} nm — {active.color}
              </p>
              <p className="text-xs text-[#6B6963]">{active.type}</p>
            </div>
          </div>
          <p className="text-[13px] text-[#9C9A92] leading-relaxed mb-2.5">
            {active.tech}
          </p>
          <div
            className="text-xs leading-relaxed p-2.5 rounded-lg"
            style={{ background: active.safetyBg, color: active.safetyCss }}
          >
            {active.safety}
          </div>
        </div>
      )}
    </div>
  );
}
