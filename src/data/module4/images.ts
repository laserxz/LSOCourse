/**
 * Image mapping for Module 4 paragraphs.
 *
 * Key format: "sectionId-paraIndex" (e.g. "4.1-0" = section 4.1, first paragraph)
 * To swap a photo: change the `src` path and place the file in public/images/module4/
 */

import { ParaImage } from "@/data/module1/images";

export const module4Images: Record<string, ParaImage> = {
  // --- 4.1 Why Engineering Controls Come First ---
  "4.1-0": {
    alt: "Hierarchy of controls pyramid",
    placeholder: "Pyramid diagram showing hierarchy: elimination → substitution → engineering → administrative → PPE",
    icon: "🔺",
  },
  "4.1-3": {
    alt: "Hardware interlock vs human procedure",
    placeholder: "Split image: automatic door interlock vs operator watching a monitor — reliability comparison",
    icon: "⚙️",
  },

  // --- 4.2 Emergency Stop (E-Stop) Systems ---
  "4.2-0": {
    alt: "Emergency stop button",
    placeholder: "Red mushroom-head E-stop button on yellow background panel — standard IEC emergency stop",
    icon: "🛑",
  },
  "4.2-2": {
    alt: "E-stop positioned at zone entry",
    placeholder: "E-stop button mounted at the entrance to a controlled zone with warning signage",
    icon: "🚪",
  },
  "4.2-3": {
    alt: "Fail-safe normally-closed circuit",
    placeholder: "Wiring diagram showing normally-closed E-stop circuit — any break defaults to beam-off",
    icon: "🔌",
  },
  "4.2-5": {
    alt: "Hardwired vs software E-stop",
    placeholder: "Diagram comparing hardwired E-stop (direct to power) vs software-routed (through computer)",
    icon: "⚡",
  },

  // --- 4.3 Interlocks and Access Control ---
  "4.3-0": {
    alt: "Door interlock on equipment room",
    placeholder: "Magnetic reed switch interlock on a laser equipment room door — opens = beam off",
    icon: "🔒",
  },
  "4.3-2": {
    alt: "Defeatable interlock with key override",
    placeholder: "Interlock panel with key-operated override switch and warning indicator light",
    icon: "🔑",
  },
  "4.3-4": {
    alt: "Portable interlock at exclusion zone",
    placeholder: "Break-beam sensor deployed at a temporary exclusion zone boundary at a touring show",
    icon: "🚧",
  },

  // --- 4.4 Projector Housing and Beam Containment ---
  "4.4-0": {
    alt: "Laser projector housing cutaway",
    placeholder: "Cutaway diagram of a laser projector showing enclosed beam path from source to output aperture",
    icon: "📦",
  },
  "4.4-2": {
    alt: "Output aperture mask",
    placeholder: "Close-up of adjustable aperture mask on a projector limiting the beam's angular range",
    icon: "🎯",
  },
  "4.4-3": {
    alt: "Beam dump absorbing laser beam",
    placeholder: "Anodised aluminium beam dump at the end of a beam path — safely absorbing laser energy",
    icon: "🧱",
  },

  // --- 4.5 Scan-Fail Safeguard (SFS) Systems ---
  "4.5-0": {
    alt: "Scanner failure — beam becomes static",
    placeholder: "Diagram: scanning beam creating pattern → scanner fails → static beam aimed at one point",
    icon: "⚠️",
  },
  "4.5-1": {
    alt: "SFS detecting failure and cutting beam",
    placeholder: "Timeline: scanner stops → SFS detects within 10ms → beam extinguished before MPE exceeded",
    icon: "⏱️",
  },
  "4.5-4": {
    alt: "Redundant SFS monitoring",
    placeholder: "Block diagram of redundant SFS: position monitor + velocity monitor + photodetector",
    icon: "🔄",
  },

  // --- 4.6 Key Switches and Activation Controls ---
  "4.6-0": {
    alt: "Key switch on laser projector",
    placeholder: "Key switch on the rear panel of a professional laser projector — key inserted and turned",
    icon: "🗝️",
  },
  "4.6-2": {
    alt: "Multi-step activation sequence",
    placeholder: "Flowchart: key on → init → shutter open → source enabled → output active",
    icon: "📋",
  },
  "4.6-3": {
    alt: "Mechanical shutter blocking beam path",
    placeholder: "Close-up of a mechanical shutter blade blocking the internal beam path of a projector",
    icon: "🚫",
  },

  // --- 4.7 Beam Path Controls and Scan Zone Limiting ---
  "4.7-1": {
    alt: "Hardware scan zone limits",
    placeholder: "Projector output cone with hardware limits shown as physical angular boundaries",
    icon: "📐",
  },
  "4.7-3": {
    alt: "Scan zone above audience — 3m clearance",
    placeholder: "Side-view venue diagram: scan zone starts 3m above audience, hardware limit enforced",
    icon: "📏",
  },
  "4.7-4": {
    alt: "Beam termination points in a venue",
    placeholder: "Venue layout showing beam paths ending at designated beam dumps on walls and ceiling",
    icon: "🏛️",
  },

  // --- 4.8 Labelling, Signage, and Warning Systems ---
  "4.8-1": {
    alt: "Laser hazard warning labels on projector",
    placeholder: "Laser projector with IEC-compliant labels: hazard symbol, class, power, wavelength, DANGER text",
    icon: "⚠️",
  },
  "4.8-3": {
    alt: "Illuminated LASER IN USE sign",
    placeholder: "Red illuminated 'LASER IN USE' warning sign at the entrance to a controlled zone",
    icon: "🔴",
  },

  // --- 4.9 Putting It Together: The Equipment Safety Checklist ---
  "4.9-0": {
    alt: "LSO performing pre-show safety checks",
    placeholder: "LSO with clipboard checking equipment — systematic pre-show verification in progress",
    icon: "✅",
  },
  "4.9-6": {
    alt: "Walking the audience area for verification",
    placeholder: "Person walking through the audience area looking up — verifying no beams at eye level",
    icon: "👁️",
  },
};
