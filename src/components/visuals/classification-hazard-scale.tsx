"use client";

import { useState } from "react";

const classes = [
  {
    label: "Class 1",
    power: "Enclosed",
    color: "#22C55E",
    level: 1,
    title: "Inherently safe",
    hazards: [] as string[],
    entertainment: "Not used in entertainment.",
  },
  {
    label: "Class 1M",
    power: "Safe unaided eye",
    color: "#22C55E",
    level: 2,
    title: "Safe unless optics used",
    hazards: ["Eye (optics)"],
    entertainment: "Not typical in entertainment.",
  },
  {
    label: "Class 2",
    power: "\u2264 1 mW",
    color: "#84CC16",
    level: 3,
    title: "Aversion response protects",
    hazards: ["Eye (staring)"],
    entertainment: "Barcode scanners, pointers.",
  },
  {
    label: "Class 2M",
    power: "\u2264 1 mW",
    color: "#84CC16",
    level: 4,
    title: "Low power + optics hazard",
    hazards: ["Eye (optics)", "Eye (staring)"],
    entertainment: "Rarely encountered.",
  },
  {
    label: "Class 3R",
    power: "\u2264 5 mW",
    color: "#EAB308",
    level: 5,
    title: "Reduced requirements",
    hazards: ["Eye (direct)"],
    entertainment: "Visible 3R may be used in unsupervised display per standard.",
  },
  {
    label: "Class 3B",
    power: "\u2264 500 mW",
    color: "#EF4444",
    level: 6,
    title: "Direct beam eye hazard",
    hazards: ["Eye (immediate)", "Skin (close range)"],
    entertainment: "Entry-level entertainment. Full LSO required.",
  },
  {
    label: "Class 4",
    power: "> 500 mW",
    color: "#991B1B",
    level: 7,
    title: "Eye, skin, fire hazard",
    hazards: ["Eye (immediate)", "Eye (diffuse)", "Skin", "Fire"],
    entertainment: "Standard for professional shows. Highest risk.",
  },
];

export default function ClassificationHazardScale() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? classes[selected] : null;

  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#161619] p-5">
      <p className="text-sm font-medium text-[#E8E6E0] mb-4">
        Laser classification — hazard scale (IEC 60825-1)
      </p>

      <div className="space-y-1">
        {classes.map((c, i) => (
          <button
            key={c.label}
            onClick={() => setSelected(selected === i ? null : i)}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all cursor-pointer ${
              selected === i
                ? "bg-[#1E1E22] border border-[rgba(255,255,255,0.1)]"
                : "border border-transparent hover:bg-[#1E1E22]"
            }`}
          >
            <span
              className="text-[13px] font-medium min-w-[65px] text-left"
              style={{ color: c.color }}
            >
              {c.label}
            </span>
            <div className="flex-1 h-1.5 rounded-full bg-[rgba(255,255,255,0.04)] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(c.level / 7) * 100}%`,
                  background: c.color,
                  opacity: 0.6,
                }}
              />
            </div>
            <span className="text-[11px] text-[#6B6963] min-w-[90px] text-right">
              {c.power}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div className="mt-4 bg-[#1E1E22] rounded-lg p-4">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span
              className="text-[13px] font-medium px-3 py-1 rounded-lg"
              style={{
                background: active.color + "20",
                color: active.color,
              }}
            >
              {active.label}
            </span>
            <span className="text-[15px] font-medium text-[#E8E6E0]">
              {active.title}
            </span>
          </div>

          <div className="flex gap-2 flex-wrap mb-2.5">
            {active.hazards.length > 0 ? (
              active.hazards.map((h) => (
                <span
                  key={h}
                  className="text-[11px] px-2 py-1 rounded-lg bg-[rgba(239,68,68,0.1)] text-[#EF4444]"
                >
                  {h}
                </span>
              ))
            ) : (
              <span className="text-[11px] px-2 py-1 rounded-lg bg-[rgba(34,197,94,0.1)] text-[#22C55E]">
                No hazards
              </span>
            )}
          </div>

          <p className="text-xs text-[#6B6963] border-t border-[rgba(255,255,255,0.07)] pt-2">
            {active.entertainment}
          </p>
        </div>
      )}
    </div>
  );
}
