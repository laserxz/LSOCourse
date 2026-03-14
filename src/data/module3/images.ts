/**
 * Image mapping for Module 3 paragraphs.
 *
 * Key format: "sectionId-paraIndex" (e.g. "3.1-0" = section 3.1, first paragraph)
 * To swap a photo: change the `src` path and place the file in public/images/module3/
 */

import { ParaImage } from "@/data/module1/images";

export const module3Images: Record<string, ParaImage> = {
  // --- 3.1 What Is Maximum Permissible Exposure (MPE)? ---
  "3.1-0": {
    alt: "MPE concept — safety limit for laser exposure",
    placeholder: "Laser beam with a threshold line — illustrating the maximum safe exposure level",
    icon: "🛡️",
  },
  "3.1-1": {
    alt: "IEC 60825-1 MPE tables",
    placeholder: "Open technical standard showing MPE tables with values for different wavelengths",
    icon: "📊",
  },
  "3.1-4": {
    alt: "MPE is a limit not a target",
    placeholder: "Gauge or dial showing a marker well below the red zone — operating below MPE",
    icon: "🎯",
  },

  // --- 3.2 MPE for Different Exposure Scenarios ---
  "3.2-1": {
    alt: "Direct intrabeam viewing hazard",
    placeholder: "Diagram showing a laser beam entering the eye directly — worst-case exposure scenario",
    icon: "👁️",
  },
  "3.2-2": {
    alt: "Diffuse reflection from a surface",
    placeholder: "Laser beam hitting a wall and scattering in multiple directions — diffuse reflection",
    icon: "💥",
  },
  "3.2-4": {
    alt: "Scanning beam sweeping across space",
    placeholder: "Time-exposure photo of a scanning laser pattern — beam sweeps rapidly across the field",
    icon: "✨",
  },

  // --- 3.3 The Nominal Ocular Hazard Distance (NOHD) ---
  "3.3-0": {
    alt: "NOHD concept diagram",
    placeholder: "Laser beam extending from projector with NOHD distance marked — safe beyond this point",
    icon: "📏",
  },
  "3.3-2": {
    alt: "NOHD scaling with power",
    placeholder: "Bar chart comparing NOHDs: 1W ≈ 400m, 5W ≈ 890m, 20W ≈ 1780m",
    icon: "📈",
  },
  "3.3-4": {
    alt: "Binoculars extending the hazard distance",
    placeholder: "Person with binoculars viewing a distant laser — extended NOHD concept",
    icon: "🔭",
  },

  // --- 3.4 The Nominal Hazard Zone (NHZ) ---
  "3.4-0": {
    alt: "3D Nominal Hazard Zone around beam paths",
    placeholder: "Three-dimensional cone diagram of NHZ around multiple beam paths in a venue",
    icon: "⚠️",
  },
  "3.4-2": {
    alt: "NHZ for a complete laser display",
    placeholder: "Venue cross-section showing multiple beam paths with shaded NHZ volumes",
    icon: "🏟️",
  },

  // --- 3.5 Zone Classification System ---
  "3.5-1": {
    alt: "Laser-free zone — safe audience area",
    placeholder: "Audience area marked as laser-free zone — no beams at or below this level",
    icon: "✅",
  },
  "3.5-3": {
    alt: "Controlled zone with PPE",
    placeholder: "Technician wearing laser safety goggles in a controlled zone near projectors",
    icon: "🥽",
  },
  "3.5-4": {
    alt: "Exclusion zone — no access",
    placeholder: "Roped-off area with 'EXCLUSION ZONE — NO ACCESS' signage near laser equipment",
    icon: "🚫",
  },

  // --- 3.6 Calculating Exclusion Distances ---
  "3.6-1": {
    alt: "Minimum vertical separation distance",
    placeholder: "Side-view venue diagram showing 3-metre minimum clearance above audience heads",
    icon: "📐",
  },
  "3.6-2": {
    alt: "3-metre rule with balcony consideration",
    placeholder: "Venue cross-section: balcony at 4m, beam must be 7m above main floor (3m above balcony)",
    icon: "🏗️",
  },
  "3.6-4": {
    alt: "Outdoor laser exclusion zones",
    placeholder: "Outdoor laser display with large exclusion zone marked — beams into open sky",
    icon: "🌃",
  },

  // --- 3.7 Practical Zone Setup at a Venue ---
  "3.7-1": {
    alt: "LSO surveying a venue",
    placeholder: "Person with tape measure and clipboard inspecting a venue — measuring ceiling heights",
    icon: "📋",
  },
  "3.7-2": {
    alt: "Projector mounted high on truss",
    placeholder: "Laser projector mounted on overhead truss structure, maximising vertical separation",
    icon: "🔧",
  },
  "3.7-4": {
    alt: "Zone boundaries marked with barriers",
    placeholder: "Crowd barriers and caution tape marking the controlled zone boundary at a venue",
    icon: "🚧",
  },
  "3.7-5": {
    alt: "Verification with laser power meter",
    placeholder: "Technician using a laser power meter to verify irradiance at a zone boundary point",
    icon: "🔬",
  },

  // --- 3.8 The Binocular and Optical Hazard ---
  "3.8-0": {
    alt: "Standard 7mm pupil aperture",
    placeholder: "Diagram comparing 7mm human pupil to 50mm binocular aperture — collection area difference",
    icon: "👁️",
  },
  "3.8-1": {
    alt: "Binoculars collecting more beam energy",
    placeholder: "Split diagram: small pupil vs large binocular lens collecting the same laser beam",
    icon: "🔭",
  },
  "3.8-3": {
    alt: "Telephoto lenses at outdoor events",
    placeholder: "Photographer with long telephoto lens at an outdoor festival — optical hazard scenario",
    icon: "📸",
  },

  // --- 3.9 Common Calculation Pitfalls ---
  "3.9-1": {
    alt: "RGB power distribution",
    placeholder: "Pie chart showing power split across R, G, B wavelengths in a multi-colour projector",
    icon: "🔴🟢🔵",
  },
  "3.9-2": {
    alt: "Multiple projectors overlapping",
    placeholder: "Two projectors with overlapping beam paths — combined irradiance at intersection point",
    icon: "⚡",
  },
  "3.9-4": {
    alt: "3-metre rule is mandatory",
    placeholder: "Warning sign: '3m minimum — normative requirement' with exclamation mark",
    icon: "⚠️",
  },
  "3.9-5": {
    alt: "Reflective surface redirecting beam",
    placeholder: "Laser beam bouncing off a glossy floor surface into an uncontrolled area — reflection hazard",
    icon: "🪞",
  },
};
