"use client";

export default function EyeVsSkinThresholds() {
  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#161619] p-5">
      <p className="text-sm font-medium text-[#E8E6E0] mb-1">
        Eye vs skin — injury thresholds
      </p>
      <p className="text-xs text-[#6B6963] mb-5">
        The eye is ~1,000× more vulnerable due to optical focusing
      </p>

      <div className="flex gap-6 items-end justify-center mb-6 px-5">
        {/* Eye bar */}
        <div className="flex-1 text-center">
          <p className="text-xs font-medium text-[#9C9A92] mb-2">
            Retinal injury (eye)
          </p>
          <div className="relative h-[200px] w-[80px] mx-auto rounded-t-lg overflow-hidden"
            style={{ background: "linear-gradient(to top, #DC2626, #F87171)", opacity: 0.7 }}
          >
            <div className="absolute top-2 inset-x-0 text-center text-lg font-medium text-white">
              ~1 mW
            </div>
            <div className="absolute top-8 inset-x-0 text-center text-[10px] text-white/80">
              through 7 mm
            </div>
          </div>
          <div className="mt-2 text-[11px] text-[#6B6963] leading-snug">
            100,000× optical gain
            <br />
            <span className="text-[#EF4444]">Painless. Permanent.</span>
          </div>
        </div>

        {/* Multiplier */}
        <div className="flex flex-col items-center pb-[50px]">
          <span className="text-xl font-medium text-[#E8E6E0]">×1,000</span>
          <span className="text-[11px] text-[#6B6963]">difference</span>
        </div>

        {/* Skin bar */}
        <div className="flex-1 text-center">
          <p className="text-xs font-medium text-[#9C9A92] mb-2">Skin burn</p>
          <div className="h-[200px] w-[80px] mx-auto flex flex-col justify-end">
            <div
              className="h-[20px] rounded-t-lg"
              style={{
                background: "linear-gradient(to top, #CA8A04, #EAB308)",
                opacity: 0.7,
              }}
            />
          </div>
          <div className="mt-2 text-lg font-medium text-[#E8E6E0]">~1 W</div>
          <div className="text-[11px] text-[#6B6963]">No focusing optics</div>
        </div>
      </div>
    </div>
  );
}
