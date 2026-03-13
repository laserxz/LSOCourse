"use client";

import { useState } from "react";

const modes = {
  thermal: {
    title: "Thermal injury",
    description:
      "Most common in entertainment. Laser energy heats retinal pigment epithelium, causing localised microscopic burn. Occurs in microseconds to milliseconds. Painless \u2014 retina has no pain receptors. Relevant for all visible wavelengths.",
    beamColor: "#EF4444",
    retinalOpacity: 0.5,
  },
  photochem: {
    title: "Photochemical injury (blue-light)",
    description:
      "Cumulative chemical reaction from wavelengths < 500 nm \u2014 especially 445 nm blue. Damage accumulates over time at sub-thermal levels. Photochemical MPE is more restrictive at longer durations for blue wavelengths.",
    beamColor: "#3B82F6",
    retinalOpacity: 0.35,
  },
  thermo: {
    title: "Thermomechanical injury",
    description:
      "Rapid heating from short Q-switched pulses causes explosive expansion and shockwaves. Uncommon in entertainment (most lasers are CW). Damage more extensive than thermal alone due to mechanical propagation.",
    beamColor: "#EAB308",
    retinalOpacity: 0.4,
  },
} as const;

type Mode = keyof typeof modes;

export default function EyeAnatomy() {
  const [mode, setMode] = useState<Mode>("thermal");
  const m = modes[mode];

  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#161619] p-5">
      <p className="text-sm font-medium text-[#E8E6E0] mb-1">
        Laser injury mechanisms — the human eye
      </p>
      <p className="text-xs text-[#6B6963] mb-3">
        Select an injury type to see how it affects the eye
      </p>

      <div className="flex gap-2 flex-wrap mb-4">
        {(Object.keys(modes) as Mode[]).map((key) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              mode === key
                ? "bg-[#1E1E22] border-[rgba(255,255,255,0.15)] text-[#E8E6E0]"
                : "border-[rgba(255,255,255,0.07)] text-[#9C9A92] hover:bg-[#1E1E22]"
            }`}
          >
            {modes[key].title.split(" (")[0]}
          </button>
        ))}
      </div>

      <svg
        width="100%"
        viewBox="0 0 680 300"
        className="block"
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
      >
        {/* Eye outline */}
        <ellipse cx="260" cy="150" rx="140" ry="110" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <ellipse cx="260" cy="150" rx="138" ry="108" fill="rgba(255,255,255,0.06)" opacity="0.4" />

        {/* Cornea */}
        <path d="M125 100 Q88 150 125 200" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />

        {/* Lens */}
        <ellipse cx="160" cy="150" rx="16" ry="36" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" opacity="0.5" />

        {/* Retina */}
        <path
          d="M290 60 Q400 150 290 240"
          fill="none"
          stroke={m.beamColor}
          strokeWidth="2.5"
          opacity={m.retinalOpacity}
        />

        {/* Macula */}
        <circle cx="386" cy="150" r="10" fill={m.beamColor} opacity="0.2" stroke={m.beamColor} strokeWidth="0.8" />

        {/* Optic nerve */}
        <path d="M396 132 Q428 115 455 105" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M396 168 Q428 185 455 195" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3.5" strokeLinecap="round" />

        {/* Beam entry */}
        <line x1="10" y1="138" x2="92" y2="143" stroke={m.beamColor} strokeWidth="2.5" opacity="0.7" />
        <line x1="10" y1="162" x2="92" y2="157" stroke={m.beamColor} strokeWidth="2.5" opacity="0.7" />

        {/* Beam focusing */}
        <line x1="176" y1="138" x2="386" y2="148" stroke={m.beamColor} strokeWidth="1.2" opacity="0.5" />
        <line x1="176" y1="162" x2="386" y2="152" stroke={m.beamColor} strokeWidth="1.2" opacity="0.5" />

        {/* Impact point */}
        <circle cx="386" cy="150" r="4" fill={m.beamColor} opacity="0.8">
          <animate attributeName="r" values="3;6;3" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Gain label */}
        <text x="280" y="182" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.5)" opacity="0.6">
          ~100,000× irradiance gain
        </text>

        {/* Beam label */}
        <text x="10" y="128" fontSize="12" fill={m.beamColor}>
          Laser beam
        </text>

        {/* Leader lines and labels */}
        <line x1="100" y1="115" x2="490" y2="45" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" strokeDasharray="3 3" />
        <text x="496" y="49" fontSize="12" fill="#9C9A92">Cornea</text>

        <line x1="160" y1="110" x2="490" y2="75" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" strokeDasharray="3 3" />
        <text x="496" y="79" fontSize="12" fill="#9C9A92">Lens</text>

        <line x1="386" y1="136" x2="490" y2="120" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" strokeDasharray="3 3" />
        <text x="496" y="124" fontSize="12" fill="#9C9A92">Macula</text>

        <line x1="350" y1="85" x2="490" y2="150" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" strokeDasharray="3 3" />
        <text x="496" y="154" fontSize="12" fill="#9C9A92">Retina</text>

        <line x1="435" y1="105" x2="490" y2="190" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" strokeDasharray="3 3" />
        <text x="496" y="194" fontSize="12" fill="#9C9A92">Optic nerve</text>
      </svg>

      <div className="bg-[#1E1E22] rounded-lg p-3.5 mt-1">
        <p className="text-sm font-medium text-[#E8E6E0] mb-1.5">{m.title}</p>
        <p className="text-[13px] text-[#9C9A92] leading-relaxed">
          {m.description}
        </p>
      </div>
    </div>
  );
}
