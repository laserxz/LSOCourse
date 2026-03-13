"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function BeamParameterCalculator() {
  const [power, setPower] = useState(2000);
  const [divergence, setDivergence] = useState(1.2);
  const [beamDiam, setBeamDiam] = useState(3);
  const [distance, setDistance] = useState(10);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const diamAtDist = beamDiam + divergence * distance;
  const radiusM = diamAtDist / 2 / 1000;
  const area = Math.PI * radiusM * radiusM;
  const irradiance = (power / 1000) / area;

  let powerThrough7mm: number;
  if (diamAtDist <= 7) {
    powerThrough7mm = power;
  } else {
    powerThrough7mm = power * (Math.PI * 3.5 * 3.5) / (Math.PI * (diamAtDist / 2) * (diamAtDist / 2));
  }

  const irColor = irradiance > 25.4 ? "#EF4444" : irradiance > 10 ? "#EAB308" : "#22C55E";
  const p7Color = powerThrough7mm > 1 ? "#EF4444" : powerThrough7mm > 0.4 ? "#EAB308" : "#22C55E";

  const drawBeam = useCallback(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, 680, 80);

    const s = Math.min(2, 30 / Math.max(diamAtDist, 1));
    const st = 40 - (beamDiam / 2) * 2;
    const sb = 40 + (beamDiam / 2) * 2;
    const et = 40 - (diamAtDist / 2) * s;
    const eb = 40 + (diamAtDist / 2) * s;

    ctx.beginPath();
    ctx.moveTo(15, st);
    ctx.lineTo(665, et);
    ctx.lineTo(665, eb);
    ctx.lineTo(15, sb);
    ctx.closePath();
    ctx.fillStyle = "rgba(239,68,68,0.08)";
    ctx.fill();

    ctx.strokeStyle = "#EF4444";
    ctx.lineWidth = 1.2;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.moveTo(15, st);
    ctx.lineTo(665, et);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(15, sb);
    ctx.lineTo(665, eb);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }, [beamDiam, diamAtDist]);

  useEffect(() => {
    drawBeam();
  }, [drawBeam]);

  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#161619] p-5">
      <p className="text-sm font-medium text-[#E8E6E0] mb-1">
        Beam parameter explorer
      </p>
      <p className="text-xs text-[#6B6963] mb-4">
        Adjust parameters to see beam diameter and irradiance change with distance
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div className="space-y-3">
          <Slider label="Power (mW)" min={10} max={10000} step={10} value={power} onChange={setPower} display={Math.round(power)} />
          <Slider label="Divergence (mrad)" min={0.3} max={5} step={0.1} value={divergence} onChange={setDivergence} display={divergence.toFixed(1)} />
          <Slider label="Beam \u2300 source (mm)" min={0.5} max={8} step={0.1} value={beamDiam} onChange={setBeamDiam} display={beamDiam.toFixed(1)} />
          <Slider label="Distance (m)" min={1} max={200} step={1} value={distance} onChange={setDistance} display={Math.round(distance)} />
        </div>

        <div className="flex flex-col gap-2">
          <ResultCard label="Beam \u2300 at distance" value={`${diamAtDist.toFixed(1)} mm`} />
          <ResultCard
            label="Irradiance"
            value={`${irradiance >= 1000 ? Math.round(irradiance).toLocaleString() : irradiance.toFixed(1)} W/m\u00b2`}
            color={irColor}
          />
          <ResultCard
            label="Power through 7 mm aperture"
            value={`${powerThrough7mm >= 1 ? powerThrough7mm.toFixed(1) : powerThrough7mm.toFixed(3)} mW`}
            color={p7Color}
          />
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={680}
        height={80}
        className="w-full h-[80px] rounded-lg border border-[rgba(255,255,255,0.07)]"
      />
      <div className="flex justify-between text-[11px] text-[#6B6963] mt-0.5">
        <span>Source</span>
        <span>{Math.round(distance)} m</span>
      </div>
    </div>
  );
}

function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
  display,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  display: string | number;
}) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-[13px] text-[#9C9A92] min-w-[110px]">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="flex-1 h-1 bg-[rgba(255,255,255,0.07)] rounded appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#E8E6E0] [&::-webkit-slider-thumb]:cursor-pointer"
      />
      <span className="text-[13px] font-medium text-[#E8E6E0] min-w-[50px] text-right">
        {display}
      </span>
    </div>
  );
}

function ResultCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="bg-[#1E1E22] rounded-lg px-3.5 py-2.5">
      <p className="text-[11px] text-[#6B6963]">{label}</p>
      <p className="text-xl font-medium" style={{ color: color || "#E8E6E0" }}>
        {value}
      </p>
    </div>
  );
}
