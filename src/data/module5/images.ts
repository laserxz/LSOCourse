import { ParaImage } from "@/data/module1/images";

export const module5Images: Record<string, ParaImage> = {
  // --- 5.1 Why Scan Speed Matters ---
  "5.1-0": {
    alt: "Laser beam scanning rapidly across a venue",
    placeholder: "Long-exposure photo showing laser beams fanning out as streaks of light across a dark venue",
    icon: "💫",
  },
  "5.1-2": {
    alt: "Static laser beam hitting a surface",
    placeholder: "Close-up of a single static laser beam point burning into a surface, showing concentrated energy",
    icon: "🔴",
  },
  "5.1-4": {
    alt: "LSO assessing scanner operation",
    placeholder: "Laser safety officer inspecting a projector's scanning system with test equipment",
    icon: "🔍",
  },

  // --- 5.2 Effective Exposure Duration ---
  "5.2-0": {
    alt: "Diagram showing beam diameter and scan velocity formula",
    placeholder: "Technical diagram: beam circle moving across a point, labelled d (diameter) and v (velocity), formula t_eff = d/v",
    icon: "📐",
  },
  "5.2-1": {
    alt: "Beam divergence over distance",
    placeholder: "Side-view diagram showing a laser beam expanding from aperture to distant wall, diameter increasing with distance",
    icon: "📏",
  },
  "5.2-4": {
    alt: "Scan pattern showing slow points at vertices",
    placeholder: "Scan pattern overlay highlighting edges and vertices where beam velocity drops to minimum",
    icon: "⚠️",
  },

  // --- 5.3 Scanner Failure Modes ---
  "5.3-1": {
    alt: "Galvanometer scanner assembly close-up",
    placeholder: "Close-up photograph of galvanometer mirror assembly showing mirror, shaft, and motor coil",
    icon: "⚙️",
  },
  "5.3-2": {
    alt: "Scanner driver electronics board",
    placeholder: "Circuit board of a galvo driver showing amplifier ICs, capacitors, and connector to scanner",
    icon: "🔌",
  },
  "5.3-4": {
    alt: "Broken cable connector",
    placeholder: "Damaged or disconnected ribbon cable between controller and scanner, showing failure point",
    icon: "🔗",
  },

  // --- 5.4 Scan-Fail Safeguard Requirements ---
  "5.4-0": {
    alt: "SFS hardware module",
    placeholder: "Dedicated scan-fail safeguard hardware unit mounted inside a laser projector chassis",
    icon: "🛡️",
  },
  "5.4-1": {
    alt: "Timing diagram of SFS response",
    placeholder: "Timing diagram: failure event → detection delay → processing → beam extinction, total response time annotated",
    icon: "⏱️",
  },
  "5.4-3": {
    alt: "Independent SFS system diagram",
    placeholder: "Block diagram showing main control system and separate independent SFS monitoring circuit with no shared components",
    icon: "🔀",
  },

  // --- 5.5 SFS Detection Methods ---
  "5.5-0": {
    alt: "Galvo position sensor feedback loop",
    placeholder: "Schematic of closed-loop galvo system: command signal → driver → motor → mirror → position sensor → feedback",
    icon: "🔄",
  },
  "5.5-2": {
    alt: "External photodetector monitoring setup",
    placeholder: "Photodetector sensor mounted at edge of scan zone, detecting beam sweep pulses",
    icon: "📡",
  },
  "5.5-4": {
    alt: "Comparison table of SFS detection methods",
    placeholder: "Table comparing position feedback, velocity, and photodetector methods with pros and cons columns",
    icon: "📊",
  },

  // --- 5.6 Calculating Safe Scan Speeds ---
  "5.6-0": {
    alt: "Minimum scan speed calculation workflow",
    placeholder: "Flowchart: beam power → irradiance → MPE lookup → max exposure time → minimum velocity calculation",
    icon: "🧮",
  },
  "5.6-3": {
    alt: "Worked example with 3W green laser",
    placeholder: "Annotated calculation showing 3W 532nm beam at 8m: diameter, irradiance, MPE, resulting minimum scan speed",
    icon: "📝",
  },
  "5.6-5": {
    alt: "Manufacturer SFS specification sheet",
    placeholder: "Sample manufacturer specification document showing SFS response time and minimum scan speed ratings",
    icon: "📄",
  },

  // --- 5.7 Audience Scanning — The Special Case ---
  "5.7-0": {
    alt: "Audience scanning at a concert",
    placeholder: "Wide shot of laser beams sweeping directly through an audience at a music event, beams visible in haze",
    icon: "🎵",
  },
  "5.7-2": {
    alt: "Multiple pass cumulative exposure diagram",
    placeholder: "Timeline showing repeated beam passes over same point, each pass adding to cumulative exposure total",
    icon: "📈",
  },
  "5.7-3": {
    alt: "Beam fan convergence zone",
    placeholder: "Overhead diagram of fan-of-beams pattern showing convergence zone near projector where beams overlap",
    icon: "🔺",
  },

  // --- 5.8 Exposure Assessment in Practice ---
  "5.8-1": {
    alt: "Laser power meter measuring beam output",
    placeholder: "Calibrated laser power meter with sensor head positioned in front of projector aperture, display showing watts",
    icon: "🔬",
  },
  "5.8-3": {
    alt: "Oscilloscope showing scanner waveforms",
    placeholder: "Oscilloscope display showing galvo position signals for X and Y axes during a scan pattern",
    icon: "📺",
  },
  "5.8-4": {
    alt: "Display Safety Record documentation",
    placeholder: "Sample DSR form with measurement data fields, calculation results, and compliance conclusions filled in",
    icon: "📋",
  },
};
