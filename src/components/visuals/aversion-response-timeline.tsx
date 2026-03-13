"use client";

export default function AversionResponseTimeline() {
  const timeMarks = [
    { label: "1 \u00b5s", top: 0 },
    { label: "10 \u00b5s", top: 33 },
    { label: "100 \u00b5s", top: 66 },
    { label: "1 ms", top: 100 },
    { label: "10 ms", top: 133 },
    { label: "100 ms", top: 166 },
    { label: "250 ms", top: 195, bold: true },
  ];

  const bars = [
    {
      label: "Class 4 stationary",
      detail: "~1\u201310 \u00b5s",
      left: 10,
      top: 0,
      width: 100,
      height: 12,
      color: "#991B1B",
      bg: "rgba(220,38,38,0.12)",
      textColor: "#EF4444",
    },
    {
      label: "Scanner fault",
      detail: "~100 \u00b5s\u20131 ms",
      left: 150,
      top: 66,
      width: 100,
      height: 40,
      color: "#DC2626",
      bg: "rgba(220,38,38,0.08)",
      textColor: "#EF4444",
    },
    {
      label: "Safeguard",
      detail: "5\u201350 ms typical",
      left: 150,
      top: 120,
      width: 100,
      height: 50,
      color: "#EAB308",
      bg: "rgba(234,179,8,0.08)",
      textColor: "#EAB308",
    },
    {
      label: "Class 3B direct",
      detail: "10 \u00b5s\u20131 ms",
      left: 290,
      top: 33,
      width: 100,
      height: 60,
      color: "#F87171",
      bg: "rgba(220,38,38,0.06)",
      textColor: "#EF4444",
    },
  ];

  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.07)] bg-[#161619] p-5">
      <p className="text-sm font-medium text-[#E8E6E0] mb-1">
        Why the aversion response fails at Class 3B / 4
      </p>
      <p className="text-xs text-[#6B6963] mb-4">
        The blink reflex takes ~250 ms. Retinal damage occurs in microseconds.
      </p>

      <div className="relative h-[230px] ml-[76px] border-l border-[rgba(255,255,255,0.07)]">
        {/* Time axis labels */}
        {timeMarks.map((t, i) => (
          <div key={i}>
            <div
              className="absolute -left-[76px] text-[11px]"
              style={{
                top: t.top,
                color: t.bold ? "#9C9A92" : "#6B6963",
                fontWeight: t.bold ? 500 : 400,
              }}
            >
              {t.label}
            </div>
            <div
              className="absolute left-0 w-full"
              style={{
                top: t.top,
                height: t.bold ? 1.5 : 0.5,
                background: t.bold
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(255,255,255,0.04)",
              }}
            />
          </div>
        ))}

        {/* Blink bar */}
        <div
          className="absolute rounded-b-lg"
          style={{
            left: 10,
            top: 0,
            width: 55,
            height: 195,
            background: "rgba(34,197,94,0.08)",
            borderBottom: "2px solid #22C55E",
          }}
        >
          <div
            className="absolute text-center text-[10px] font-medium"
            style={{
              bottom: -18,
              left: 0,
              width: 55,
              color: "#22C55E",
            }}
          >
            Blink
          </div>
        </div>

        {/* Hazard bars */}
        {bars.map((bar, i) => (
          <div
            key={i}
            className="absolute rounded-lg"
            style={{
              left: bar.left,
              top: bar.top,
              width: bar.width,
              height: bar.height,
              background: bar.bg,
              borderLeft: `3px solid ${bar.color}`,
            }}
          >
            <div
              className="absolute text-[11px]"
              style={{ top: 4, left: 8, color: bar.textColor }}
            >
              {bar.label}
            </div>
            <div
              className="absolute text-[10px]"
              style={{ top: 20, left: 8, color: "#6B6963" }}
            >
              {bar.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
