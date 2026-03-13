"use client";

import { useState, useRef, useEffect } from "react";

function nmToRGB(nm: number): string {
  let r = 0, g = 0, b = 0;
  if (nm >= 380 && nm < 440) { r = -(nm - 440) / (440 - 380); b = 1; }
  else if (nm >= 440 && nm < 490) { g = (nm - 440) / (490 - 440); b = 1; }
  else if (nm >= 490 && nm < 510) { g = 1; b = -(nm - 510) / (510 - 490); }
  else if (nm >= 510 && nm < 580) { r = (nm - 510) / (580 - 510); g = 1; }
  else if (nm >= 580 && nm < 645) { r = 1; g = -(nm - 645) / (645 - 580); }
  else if (nm >= 645 && nm <= 780) { r = 1; }

  let f = 1;
  if (nm >= 380 && nm < 420) f = 0.3 + 0.7 * (nm - 380) / (420 - 380);
  else if (nm > 700) f = 0.3 + 0.7 * (780 - nm) / (780 - 700);

  return `rgb(${Math.round(255 * Math.pow(r * f, 0.8))},${Math.round(255 * Math.pow(g * f, 0.8))},${Math.round(255 * Math.pow(b * f, 0.8))})`;
}

function colorName(nm: number): [string, string] {
  if (nm < 450) return ["Violet", "#7B2FBE"];
  if (nm < 495) return ["Blue", "#2563EB"];
  if (nm < 570) return ["Green", "#16A34A"];
  if (nm < 590) return ["Yellow", "#CA8A04"];
  if (nm < 620) return ["Orange", "#EA580C"];
  return ["Red", "#DC2626"];
}

function useNote(nm: number): string {
  if (nm >= 440 && nm <= 450) return "445 nm blue diode \u2014 photochemical hazard concern";
  if (nm >= 515 && nm <= 525) return "520 nm direct green diode \u2014 modern standard";
  if (nm >= 528 && nm <= 536) return "532 nm DPSS green \u2014 IR residual risk";
  if (nm >= 633 && nm <= 643) return "638 nm red diode \u2014 standard red source";
  if (nm < 420) return "Near-UV \u2014 outside typical entertainment use";
  if (nm > 700) return "Deep red \u2014 limited entertainment applications";
  if (nm < 450) return "Violet range \u2014 niche entertainment use";
  if (nm < 500) return "Blue range \u2014 photochemical MPE applies below 500 nm";
  if (nm < 570) return "Green range \u2014 peak visual sensitivity near 555 nm";
  if (nm < 620) return "Yellow-orange \u2014 typically achieved by RGB mixing";
  return "Red range \u2014 direct diode sources common";
}

export default function ElectromagneticSpectrum() {
  const [wavelength, setWavelength] = useState(550);
  const spectrumRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  // Build spectrum strip
  useEffect(() => {
    const el = stripRef.current;
    if (!el || el.children.length > 0) return;
    for (let nm = 380; nm <= 780; nm++) {
      const s = document.createElement("div");
      s.style.flex = "1";
      s.style.height = "100%";
      s.style.background = nmToRGB(nm);
      el.appendChild(s);
    }
  }, []);

  const handleSpectrumInteraction = (clientX: number) => {
    const el = spectrumRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = (clientX - rect.left) / rect.width;
    const nm = Math.round(380 + p * 400);
    if (nm >= 380 && nm <= 780) setWavelength(nm);
  };

  const [name, css] = colorName(wavelength);
  const markerPos = ((wavelength - 380) / 400) * 100;

  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#161619] p-5">
      <p className="text-sm font-medium text-[#E8E6E0] mb-3">
        The electromagnetic spectrum — visible window
      </p>

      <div
        ref={spectrumRef}
        className="relative h-[60px] rounded-lg overflow-hidden border border-[rgba(255,255,255,0.07)] cursor-crosshair"
        onMouseMove={(e) => handleSpectrumInteraction(e.clientX)}
        onClick={(e) => handleSpectrumInteraction(e.clientX)}
        onTouchMove={(e) => handleSpectrumInteraction(e.touches[0].clientX)}
      >
        <div ref={stripRef} className="h-full flex" />
        <div
          className="absolute top-0 h-full w-0.5 bg-[#E8E6E0] pointer-events-none transition-[left] duration-100"
          style={{ left: `${markerPos}%` }}
        >
          <div className="absolute -top-[22px] left-1/2 -translate-x-1/2 text-xs font-medium text-[#E8E6E0] whitespace-nowrap">
            {wavelength} nm
          </div>
        </div>
      </div>

      <div className="flex justify-between text-[11px] text-[#6B6963] mt-1 px-0.5">
        <span>380 nm</span>
        <span>780 nm</span>
      </div>

      <div className="mt-4 flex gap-3 flex-wrap">
        <div className="flex-1 min-w-[130px] bg-[#1E1E22] rounded-lg p-3">
          <p className="text-[11px] text-[#6B6963] mb-1">Wavelength</p>
          <p className="text-xl font-medium text-[#E8E6E0]">{wavelength} nm</p>
        </div>
        <div className="flex-1 min-w-[130px] bg-[#1E1E22] rounded-lg p-3">
          <p className="text-[11px] text-[#6B6963] mb-1">Colour</p>
          <p className="text-xl font-medium" style={{ color: css }}>
            {name}
          </p>
        </div>
        <div className="flex-1 min-w-[130px] bg-[#1E1E22] rounded-lg p-3">
          <p className="text-[11px] text-[#6B6963] mb-1">Entertainment use</p>
          <p className="text-[13px] text-[#9C9A92]">{useNote(wavelength)}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        {[
          [445, "445 nm blue"],
          [520, "520 nm green"],
          [532, "532 nm DPSS"],
          [638, "638 nm red"],
        ].map(([nm, label]) => (
          <button
            key={nm}
            onClick={() => setWavelength(nm as number)}
            className="text-xs px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.1)] text-[#9C9A92] hover:bg-[#1E1E22] hover:text-[#E8E6E0] transition-all cursor-pointer"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
