"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type Mode = "mono" | "coher" | "collim";

const modeInfo: Record<Mode, { title: string; description: string }> = {
  mono: {
    title: "Monochromaticity \u2014 single wavelength",
    description:
      "Ordinary light emits many wavelengths mixed together. A laser emits at a single precise wavelength, enabling exact hazard evaluation against wavelength-specific MPE limits.",
  },
  coher: {
    title: "Coherence \u2014 synchronised wave fronts",
    description:
      "Ordinary light has random phase relationships. Laser waves are phase-locked, enabling extreme focusing \u2014 the eye concentrates laser light to a ~20 \u00b5m retinal spot, amplifying irradiance by up to 100,000\u00d7.",
  },
  collim: {
    title: "Collimation \u2014 directional beam",
    description:
      "Ordinary light radiates in all directions, losing intensity rapidly. A laser beam travels near-parallel with minimal divergence (0.5\u20133 mrad), remaining hazardous at hundreds of metres.",
  },
};

export default function OrdinaryVsLaser() {
  const [mode, setMode] = useState<Mode>("mono");
  const ordinaryRef = useRef<HTMLCanvasElement>(null);
  const laserRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const animRef = useRef<number>(0);

  const draw = useCallback(() => {
    const oCtx = ordinaryRef.current?.getContext("2d");
    const lCtx = laserRef.current?.getContext("2d");
    if (!oCtx || !lCtx) return;

    const W = 300, H = 180;
    frameRef.current++;
    const f = frameRef.current;

    oCtx.clearRect(0, 0, W, H);
    lCtx.clearRect(0, 0, W, H);

    if (mode === "mono") {
      const colors = ["#DC2626", "#EA580C", "#CA8A04", "#16A34A", "#2563EB", "#7C3AED"];
      colors.forEach((c, i) => {
        oCtx.beginPath();
        oCtx.strokeStyle = c;
        oCtx.lineWidth = 1.5;
        oCtx.globalAlpha = 0.5;
        for (let x = 0; x < W; x++) {
          const y = 90 + Math.sin((x + f * 2) / (20 + i * 5) + i * 1.3) * (25 - i * 2.5);
          x === 0 ? oCtx.moveTo(x, y) : oCtx.lineTo(x, y);
        }
        oCtx.stroke();
        oCtx.globalAlpha = 1;
      });

      lCtx.beginPath();
      lCtx.strokeStyle = "#EF4444";
      lCtx.lineWidth = 2.5;
      for (let x = 0; x < W; x++) {
        const y = 90 + Math.sin((x + f * 2) / 25) * 30;
        x === 0 ? lCtx.moveTo(x, y) : lCtx.lineTo(x, y);
      }
      lCtx.stroke();
    }

    if (mode === "coher") {
      for (let i = 0; i < 6; i++) {
        oCtx.beginPath();
        oCtx.strokeStyle = "rgba(255,255,255,0.4)";
        oCtx.lineWidth = 1.2;
        for (let x = 0; x < W; x++) {
          const y = 90 + Math.sin((x + f * 1.5 + i * 47) / (22 + i * 3)) * (20 + Math.sin(i + f * 0.01) * 8);
          x === 0 ? oCtx.moveTo(x, y) : oCtx.lineTo(x, y);
        }
        oCtx.stroke();
      }

      for (let i = 0; i < 6; i++) {
        lCtx.beginPath();
        lCtx.strokeStyle = "#EF4444";
        lCtx.lineWidth = 1.2;
        lCtx.globalAlpha = 0.5;
        for (let x = 0; x < W; x++) {
          const y = (60 + i * 10) + Math.sin((x + f * 2) / 25) * 8;
          x === 0 ? lCtx.moveTo(x, y) : lCtx.lineTo(x, y);
        }
        lCtx.stroke();
        lCtx.globalAlpha = 1;
      }
    }

    if (mode === "collim") {
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        const w = Math.sin(f * 0.03 + i) * 0.12;
        oCtx.beginPath();
        oCtx.strokeStyle = "rgba(255,255,255,0.25)";
        oCtx.lineWidth = 1;
        oCtx.moveTo(25, 90);
        oCtx.lineTo(25 + Math.cos(a + w) * 260, 90 + Math.sin(a + w) * 80);
        oCtx.stroke();
      }
      oCtx.beginPath();
      oCtx.arc(25, 90, 6, 0, Math.PI * 2);
      oCtx.fillStyle = "#EAB308";
      oCtx.globalAlpha = 0.5;
      oCtx.fill();
      oCtx.globalAlpha = 1;

      lCtx.fillStyle = "#EF4444";
      lCtx.globalAlpha = 0.12;
      lCtx.fillRect(25, 86, 260, 8);
      lCtx.globalAlpha = 1;
      lCtx.strokeStyle = "#EF4444";
      lCtx.lineWidth = 1.5;
      lCtx.beginPath();
      lCtx.moveTo(25, 86);
      lCtx.lineTo(285, 85.5);
      lCtx.stroke();
      lCtx.beginPath();
      lCtx.moveTo(25, 94);
      lCtx.lineTo(285, 94.5);
      lCtx.stroke();
      lCtx.beginPath();
      lCtx.arc(18, 90, 5, 0, Math.PI * 2);
      lCtx.fillStyle = "#EF4444";
      lCtx.globalAlpha = 0.5;
      lCtx.fill();
      lCtx.globalAlpha = 1;
    }

    animRef.current = requestAnimationFrame(draw);
  }, [mode]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  const info = modeInfo[mode];

  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#161619] p-5">
      <p className="text-sm font-medium text-[#E8E6E0] mb-1">
        What makes laser light different
      </p>
      <p className="text-xs text-[#6B6963] mb-4">
        Three properties that create both the visual impact and the hazard
      </p>

      <div className="flex gap-2 flex-wrap mb-4">
        {(["mono", "coher", "collim"] as Mode[]).map((key) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              mode === key
                ? "bg-[#1E1E22] border-[rgba(255,255,255,0.15)] text-[#E8E6E0]"
                : "border-[rgba(255,255,255,0.07)] text-[#9C9A92] hover:bg-[#1E1E22]"
            }`}
          >
            {key === "mono" ? "Monochromaticity" : key === "coher" ? "Coherence" : "Collimation"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <p className="text-xs font-medium text-[#9C9A92] mb-2">Ordinary light</p>
          <canvas
            ref={ordinaryRef}
            width={300}
            height={180}
            className="w-full rounded-lg border border-[rgba(255,255,255,0.07)]"
          />
        </div>
        <div className="text-center">
          <p className="text-xs font-medium text-[#9C9A92] mb-2">Laser</p>
          <canvas
            ref={laserRef}
            width={300}
            height={180}
            className="w-full rounded-lg border border-[rgba(255,255,255,0.07)]"
          />
        </div>
      </div>

      <div className="bg-[#1E1E22] rounded-lg p-3.5">
        <p className="text-sm font-medium text-[#E8E6E0] mb-1.5">{info.title}</p>
        <p className="text-[13px] text-[#9C9A92] leading-relaxed">
          {info.description}
        </p>
      </div>
    </div>
  );
}
