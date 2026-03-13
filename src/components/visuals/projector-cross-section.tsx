"use client";

import { useState } from "react";

const components = [
  {
    id: "source",
    label: "Laser Source",
    x: 60,
    y: 120,
    w: 80,
    h: 60,
    color: "#EF4444",
    description:
      "The gain medium (semiconductor diode or DPSS crystal) produces laser light at a specific wavelength. RGB projectors combine red (638 nm), green (520/532 nm), and blue (445 nm) sources.",
    safety:
      "Source wavelength determines MPE values and biological hazard type. DPSS sources produce invisible IR residual beams.",
  },
  {
    id: "combiner",
    label: "Colour Combiner",
    x: 180,
    y: 120,
    w: 70,
    h: 60,
    color: "#A855F7",
    description:
      "Dichroic mirrors merge individual R, G, B beams into a single coaxial beam path. Independent modulation of each colour enables full-spectrum output.",
    safety:
      "Each wavelength contributes independently to total exposure hazard. Combined power is the sum of all sources.",
  },
  {
    id: "galvos",
    label: "Galvo Scanners",
    x: 300,
    y: 110,
    w: 90,
    h: 80,
    color: "#EAB308",
    description:
      "Two small mirrors on fast motors (X and Y axis). Coordinated movement traces patterns, text, and effects at high speed. Scan speed directly determines exposure duration.",
    safety:
      "Most safety-critical component. If galvos stop or slow, a stationary beam results \u2014 the highest-probability hazard event in entertainment laser operation.",
  },
  {
    id: "safeguard",
    label: "Scan-Fail Safeguard",
    x: 300,
    y: 210,
    w: 90,
    h: 45,
    color: "#22C55E",
    description:
      "Monitors galvo position and velocity. If scanners stop or slow below threshold, the safeguard terminates or reduces laser output to prevent stationary beam exposure.",
    safety:
      "Response time typically 5\u201350 ms. Covered in detail in Module 5. Critical to MPE compliance for audience scanning.",
  },
  {
    id: "estop",
    label: "E-Stop",
    x: 440,
    y: 220,
    w: 50,
    h: 50,
    color: "#DC2626",
    description:
      "Emergency stop switch. Immediately terminates all laser output when activated. Must be accessible to the LSO at all times during operation.",
    safety:
      "Required engineering control for all Class 3B/4 entertainment installations. Physical disconnect, not software-only.",
  },
  {
    id: "aperture",
    label: "Output Aperture",
    x: 440,
    y: 120,
    w: 60,
    h: 60,
    color: "#3B82F6",
    description:
      "The beam exits the projector through this opening. Beam diameter at the aperture is typically 2\u20136 mm. This is where beam parameters are measured.",
    safety:
      "All safety calculations start from the beam parameters at this point: power, divergence, and initial diameter.",
  },
];

export default function ProjectorCrossSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = components.find((c) => c.id === selected);

  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#161619] p-5">
      <p className="text-sm font-medium text-[#E8E6E0] mb-1">
        Inside a laser projector
      </p>
      <p className="text-xs text-[#6B6963] mb-4">
        Click any component to see its function and safety relevance
      </p>

      <svg
        width="100%"
        viewBox="0 0 560 300"
        className="block mb-4"
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
      >
        {/* Projector housing */}
        <rect
          x="30"
          y="80"
          width="490"
          height="200"
          rx="12"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
        />
        <text x="40" y="72" fontSize="11" fill="#6B6963">
          Laser Projector
        </text>

        {/* Beam path */}
        <line x1="140" y1="150" x2="180" y2="150" stroke="#EF4444" strokeWidth="2" opacity="0.3" />
        <line x1="250" y1="150" x2="300" y2="150" stroke="#EF4444" strokeWidth="2" opacity="0.3" />
        <line x1="390" y1="150" x2="440" y2="150" stroke="#EF4444" strokeWidth="2" opacity="0.3" />
        <line x1="500" y1="150" x2="545" y2="150" stroke="#EF4444" strokeWidth="2.5" opacity="0.5" />

        {/* Scanning beam output */}
        <line x1="530" y1="140" x2="555" y2="120" stroke="#EF4444" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
        <line x1="530" y1="160" x2="555" y2="180" stroke="#EF4444" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />

        {/* RGB source indicators */}
        <circle cx="70" cy="130" r="4" fill="#EF4444" opacity="0.6" />
        <circle cx="70" cy="150" r="4" fill="#22C55E" opacity="0.6" />
        <circle cx="70" cy="170" r="4" fill="#3B82F6" opacity="0.6" />

        {/* Component boxes */}
        {components.map((c) => (
          <g
            key={c.id}
            onClick={() => setSelected(selected === c.id ? null : c.id)}
            className="cursor-pointer"
          >
            <rect
              x={c.x}
              y={c.y}
              width={c.w}
              height={c.h}
              rx="6"
              fill={selected === c.id ? c.color + "20" : "rgba(255,255,255,0.04)"}
              stroke={selected === c.id ? c.color : "rgba(255,255,255,0.12)"}
              strokeWidth={selected === c.id ? 1.5 : 1}
            />
            <text
              x={c.x + c.w / 2}
              y={c.y + c.h / 2 - 4}
              textAnchor="middle"
              fontSize="10"
              fill={selected === c.id ? c.color : "#9C9A92"}
              fontWeight="500"
            >
              {c.label.split(" ")[0]}
            </text>
            <text
              x={c.x + c.w / 2}
              y={c.y + c.h / 2 + 10}
              textAnchor="middle"
              fontSize="10"
              fill={selected === c.id ? c.color : "#9C9A92"}
              fontWeight="500"
            >
              {c.label.split(" ").slice(1).join(" ")}
            </text>
          </g>
        ))}

        {/* Connection: safeguard to galvos */}
        <line
          x1="345"
          y1="210"
          x2="345"
          y2="190"
          stroke="rgba(34,197,94,0.3)"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
      </svg>

      {active && (
        <div className="bg-[#1E1E22] rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: active.color }}
            />
            <p className="text-sm font-medium text-[#E8E6E0]">
              {active.label}
            </p>
          </div>
          <p className="text-[13px] text-[#9C9A92] leading-relaxed mb-2">
            {active.description}
          </p>
          <div className="text-xs text-[#EAB308] bg-[rgba(234,179,8,0.06)] rounded-lg px-3 py-2">
            <span className="font-medium">Safety: </span>
            {active.safety}
          </div>
        </div>
      )}
    </div>
  );
}
