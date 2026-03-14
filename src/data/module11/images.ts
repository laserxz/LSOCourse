/**
 * Image mapping for Module 11 paragraphs.
 *
 * Key format: "sectionId-paraIndex" (e.g. "11.1-0" = section 11.1, first paragraph)
 * To swap a photo: change the `src` path and place the file in public/images/module11/
 */

import { ParaImage } from "@/data/module1/images";

export const module11Images: Record<string, ParaImage> = {
  // --- 11.1 Beyond Standard Shows ---
  "11.1-0": {
    alt: "Laser projector scanning beams across a concert venue",
    placeholder: "Wide shot of a standard scanning laser show — beams fanning out from a projector over an audience",
    icon: "🔦",
  },
  "11.1-2": {
    alt: "AS/NZS IEC 60825.3:2022 standard document",
    placeholder: "Close-up of the standard's Section 10 heading — special considerations page",
    icon: "📖",
  },
  "11.1-4": {
    alt: "LSO assessing a laser installation",
    placeholder: "LSO in safety eyewear with a clipboard evaluating a laser setup in a venue",
    icon: "👷",
  },

  // --- 11.2 Holographic and Volumetric Displays ---
  "11.2-0": {
    alt: "Holographic laser display creating a 3D image",
    placeholder: "Laser holographic display showing a floating 3D image — interference pattern visible",
    icon: "🔮",
  },
  "11.2-1": {
    alt: "Volumetric display creating glowing points in air",
    placeholder: "Volumetric display with visible 3D points of light floating in a dark space — plasma ionisation effect",
    icon: "✨",
  },
  "11.2-3": {
    alt: "Laser power meter measuring irradiance",
    placeholder: "Technician holding a calibrated laser power meter — direct irradiance measurement at a viewing position",
    icon: "📏",
  },

  // --- 11.3 UV and Blue-Light Photochemical Hazards ---
  "11.3-0": {
    alt: "Comparison of thermal versus photochemical laser injury",
    placeholder: "Split diagram — left: thermal burn mechanism (focused heat), right: photochemical bond-breaking mechanism (UV/blue photon energy)",
    icon: "⚡",
  },
  "11.3-1": {
    alt: "Cumulative dose graph showing photochemical exposure over time",
    placeholder: "Graph showing cumulative photochemical dose building over a multi-hour event — staircase rising to exceed MPE threshold",
    icon: "📈",
  },
  "11.3-2": {
    alt: "Eye diagram showing photokeratitis and retinal photochemical injury",
    placeholder: "Cross-section of human eye highlighting cornea (UV absorption/photokeratitis) and retina (blue-light photochemical damage zone)",
    icon: "👁️",
  },
  "11.3-4": {
    alt: "Deep blue 445nm laser beam in operation",
    placeholder: "Vivid deep blue laser beam (445nm) projected in haze — illustrating the blue-light hazard wavelength band",
    icon: "🔵",
  },

  // --- 11.4 High-Power Outdoor and Architectural Installations ---
  "11.4-0": {
    alt: "Permanent architectural laser installation on a building",
    placeholder: "Night shot of a building with permanent laser beams projecting from the rooftop — architectural lighting installation",
    icon: "🏙️",
  },
  "11.4-1": {
    alt: "Laser skybeam effect with aircraft hazard zone overlay",
    placeholder: "Vertical laser beam shooting into night sky with an overlay showing the aviation hazard zone and CASA notification requirement",
    icon: "✈️",
  },
  "11.4-3": {
    alt: "Drone with laser effect in a night sky show",
    placeholder: "Formation of illuminated drones with laser beams — illustrating moving platform instability and beam pointing uncertainty",
    icon: "🤖",
  },
  "11.4-4": {
    alt: "Wildlife near an outdoor laser installation",
    placeholder: "Birds in flight near bright outdoor laser beams at night — illustrating wildlife impact consideration",
    icon: "🦅",
  },

  // --- 11.5 Emerging Technologies ---
  "11.5-0": {
    alt: "Fiber optic cable delivering laser light",
    placeholder: "Close-up of armoured fiber optic cable with visible laser light at the connector end — fiber delivery system",
    icon: "🔌",
  },
  "11.5-1": {
    alt: "Laser projection mapping on a building facade",
    placeholder: "Building facade illuminated with laser projection mapping — vivid patterns on stone with visible window reflections",
    icon: "🏛️",
  },
  "11.5-3": {
    alt: "MEMS mirror scanner chip under magnification",
    placeholder: "Macro photograph of a tiny MEMS mirror on a circuit board — micro-electro-mechanical scanner element",
    icon: "🔬",
  },
  "11.5-4": {
    alt: "Multi-source stage production with lasers and LEDs",
    placeholder: "Wide stage shot combining laser beams, LED walls, and conventional lighting — illustrating multi-source integration",
    icon: "🎭",
  },

  // --- 11.6 Staying Current as an LSO ---
  "11.6-1": {
    alt: "LSO attending a professional training session",
    placeholder: "Group of laser professionals in a training workshop — classroom setting with laser equipment on the bench",
    icon: "🎓",
  },
  "11.6-2": {
    alt: "ILDA conference and industry networking",
    placeholder: "ILDA laser display association conference — professionals networking at an industry event with laser demonstrations",
    icon: "🌐",
  },
  "11.6-4": {
    alt: "LSO performing first-principles hazard assessment",
    placeholder: "LSO at a desk with calculator, laser spec sheet, and MPE tables — conducting a structured first-principles safety assessment",
    icon: "🧮",
  },
  "11.6-5": {
    alt: "Professional peer network meeting",
    placeholder: "Small group of laser safety professionals in discussion — peer review and mentoring in a workshop setting",
    icon: "🤝",
  },
};
