/**
 * Image mapping for Module 1 paragraphs.
 *
 * Key format: "sectionId-paraIndex" (e.g. "1.1-0" = section 1.1, first paragraph)
 * To swap a photo: change the `src` path and place the file in public/images/module1/
 * Images sourced from Unsplash (free licence, no attribution required).
 */

export interface ParaImage {
  /** Path to real image in /public. If absent, shows placeholder. */
  src?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Description shown on placeholder — tells you what photo to use */
  placeholder: string;
  /** Emoji icon for the placeholder card */
  icon: string;
}

export const module1Images: Record<string, ParaImage> = {
  // --- 1.1 The Electromagnetic Spectrum ---
  "1.1-0": {
    src: "/images/module1/satellite-dish.jpg",
    alt: "Radio tower transmitting electromagnetic waves",
    placeholder: "Radio tower or satellite dish — illustrating EM radiation surrounds us",
    icon: "📡",
  },
  "1.1-1": {
    src: "/images/module1/spectrum-rainbow.jpg",
    alt: "Full electromagnetic spectrum diagram",
    placeholder: "Wide EM spectrum chart from radio waves to gamma rays, visible band highlighted",
    icon: "🌈",
  },
  "1.1-3": {
    src: "/images/module1/prism-light.jpg",
    alt: "Visible spectrum colour bands",
    placeholder: "Close-up colour bar: violet → blue → green → yellow → orange → red with nm labels",
    icon: "🎨",
  },
  "1.1-4": {
    src: "/images/module1/laser-show.jpg",
    alt: "Entertainment laser display at a concert",
    placeholder: "Laser show beams fanning out over a crowd at a music festival",
    icon: "🎆",
  },

  // --- 1.2 What Makes Laser Light Different ---
  "1.2-0": {
    src: "/images/module1/spotlight-stage.jpg",
    alt: "Theatre spotlight vs laser projector comparison",
    placeholder: "Side-by-side: conventional spotlight (wide, diffuse) vs laser beam (tight, vivid)",
    icon: "💡",
  },
  "1.2-1": {
    src: "/images/module1/laser-beams-rgb.jpg",
    alt: "Monochromatic laser light vs broad-spectrum lamp",
    placeholder: "Spectral output comparison: narrow laser spike vs broad lamp curve",
    icon: "📊",
  },
  "1.2-2": {
    alt: "Coherent waves in phase",
    placeholder: "Wave diagram showing aligned peaks (coherent) vs random waves (incoherent)",
    icon: "〰️",
  },
  "1.2-3": {
    src: "/images/module1/green-laser.jpg",
    alt: "Collimated laser beam traveling long distance",
    placeholder: "Laser beam shooting across a dark landscape, barely spreading over hundreds of metres",
    icon: "➡️",
  },
  "1.2-4": {
    src: "/images/module1/laser-haze.jpg",
    alt: "Laser beam focused to a tiny point",
    placeholder: "Close-up of a laser beam converging to a pinpoint on a surface",
    icon: "🔬",
  },

  // --- 1.3 Laser Classification ---
  "1.3-0": {
    src: "/images/module1/warning-sign.jpg",
    alt: "Laser classification label on a projector",
    placeholder: "Close-up of a Class 4 laser hazard label / sticker on a projector housing",
    icon: "⚠️",
  },
  "1.3-1": {
    src: "/images/module1/laser-stage.jpg",
    alt: "Various laser products at a venue",
    placeholder: "Venue setup with barcode scanner, laser pointer, and show laser — different classes",
    icon: "🏟️",
  },
  "1.3-7": {
    src: "/images/module1/laser-purple.jpg",
    alt: "Class 3B laser projector",
    placeholder: "A mid-power laser projector with Class 3B label, beam visible in haze",
    icon: "🔴",
  },
  "1.3-8": {
    src: "/images/module1/laser-colorful.jpg",
    alt: "Class 4 laser projector in action",
    placeholder: "High-power Class 4 RGB projector producing bright beams through atmospheric haze",
    icon: "⚡",
  },

  // --- 1.4 How a Laser Projector Works ---
  "1.4-0": {
    src: "/images/module1/laser-pattern.jpg",
    alt: "Inside of a laser projector",
    placeholder: "Opened laser projector showing internal components — diodes, optics, galvos",
    icon: "🔧",
  },
  "1.4-1": {
    alt: "Laser diode semiconductor chip",
    placeholder: "Macro photo of a laser diode on a heatsink — the gain medium",
    icon: "💎",
  },
  "1.4-3": {
    alt: "Galvanometer scanner mirrors",
    placeholder: "Close-up of galvo scanner pair — tiny mirrors on motor shafts",
    icon: "🪞",
  },
  "1.4-4": {
    src: "/images/module1/laser-beams-rgb.jpg",
    alt: "RGB laser beams being combined",
    placeholder: "Red, green, and blue beams converging through dichroic mirrors into one white beam",
    icon: "🔴🟢🔵",
  },
  "1.4-5": {
    alt: "DPSS vs direct diode laser modules",
    placeholder: "Side-by-side: DPSS module (crystal + pump diode) vs compact direct diode module",
    icon: "⚙️",
  },

  // --- 1.5 Beam Parameters ---
  "1.5-1": {
    src: "/images/module1/laser-beams-green.jpg",
    alt: "Different coloured laser beams showing wavelength",
    placeholder: "Multiple laser beams side by side: blue 445nm, green 520nm, red 638nm with labels",
    icon: "🌊",
  },
  "1.5-2": {
    alt: "Laser power meter reading",
    placeholder: "Digital power meter displaying watts, measuring a laser beam output",
    icon: "⚡",
  },
  "1.5-3": {
    src: "/images/module1/laser-haze.jpg",
    alt: "Beam divergence over distance",
    placeholder: "Laser beam expanding as it travels — tight at source, wider at far wall, with ruler",
    icon: "📐",
  },
  "1.5-5": {
    alt: "Irradiance measurement setup",
    placeholder: "Beam cross-section on a screen showing power distribution / beam profile",
    icon: "🎯",
  },

  // --- 1.6 Biological Effects on the Eye ---
  "1.6-0": {
    src: "/images/module1/eye-closeup.jpg",
    alt: "Human eye anatomy diagram",
    placeholder: "Cross-section of the human eye with cornea, lens, and retina labelled",
    icon: "👁️",
  },
  "1.6-1": {
    src: "/images/module1/eye-closeup.jpg",
    alt: "Laser beam focusing through the eye",
    placeholder: "Diagram showing parallel laser beam entering eye and focusing to a point on retina",
    icon: "🔍",
  },
  "1.6-2": {
    alt: "Retinal thermal burn from laser",
    placeholder: "Fundoscopy image showing a small retinal burn lesion (medical reference image)",
    icon: "🔥",
  },
  "1.6-3": {
    alt: "Blue light photochemical damage",
    placeholder: "Comparison diagram: thermal (instant) vs photochemical (cumulative) injury timelines",
    icon: "📈",
  },
  "1.6-5": {
    alt: "Flash blindness afterimage",
    placeholder: "Simulation of what flash blindness looks like — dark spot in centre of vision",
    icon: "💫",
  },

  // --- 1.7 Biological Effects on Skin ---
  "1.7-0": {
    src: "/images/module1/laser-red.jpg",
    alt: "Skin exposure to laser beam",
    placeholder: "High-power laser beam hitting skin surface — visible heating effect",
    icon: "✋",
  },
  "1.7-2": {
    alt: "Laser burn on skin",
    placeholder: "Close-up of skin reddening from Class 4 laser contact (mild burn)",
    icon: "🔥",
  },

  // --- 1.8 Why the Aversion Response Fails ---
  "1.8-0": {
    src: "/images/module1/bright-light-face.jpg",
    alt: "Person blinking from bright light",
    placeholder: "Person squinting and turning away from a bright light source — aversion response",
    icon: "😑",
  },
  "1.8-2": {
    alt: "High-speed laser scan across eye",
    placeholder: "Time diagram: laser pulse duration (microseconds) vs blink response (250ms)",
    icon: "⏱️",
  },
  "1.8-3": {
    src: "/images/module1/concert-crowd-lasers.jpg",
    alt: "Festival crowd watching laser show",
    placeholder: "Concert audience looking directly at laser beams — override behaviour in action",
    icon: "🎵",
  },
  "1.8-4": {
    alt: "Invisible infrared beam concept",
    placeholder: "Visible green beam alongside invisible IR beam (shown as dotted line) — no trigger",
    icon: "👻",
  },

  // --- 1.9 Common Entertainment Laser Wavelengths ---
  "1.9-1": {
    src: "/images/module1/laser-beams-blue.jpg",
    alt: "445nm blue laser beam",
    placeholder: "Vivid deep blue laser beam cutting through haze — 445nm direct diode",
    icon: "🔵",
  },
  "1.9-2": {
    src: "/images/module1/laser-beams-green.jpg",
    alt: "520nm green laser beam",
    placeholder: "Bright green laser beam — appears brightest to the human eye",
    icon: "🟢",
  },
  "1.9-3": {
    alt: "532nm DPSS green laser with IR filter warning",
    placeholder: "DPSS laser module with IR filter highlighted — residual 1064nm hazard callout",
    icon: "🟡",
  },
  "1.9-4": {
    src: "/images/module1/laser-red.jpg",
    alt: "638nm red laser beam",
    placeholder: "Red laser beam through haze — appears dimmer than green at same power",
    icon: "🔴",
  },
  "1.9-5": {
    src: "/images/module1/laser-colorful.jpg",
    alt: "RGB laser colour mixing",
    placeholder: "RGB beams converging to produce white, with intermediate colours fanning out",
    icon: "🎨",
  },
};
