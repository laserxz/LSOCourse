/**
 * Image mapping for Module 2 paragraphs.
 *
 * Key format: "sectionId-paraIndex" (e.g. "2.1-0" = section 2.1, first paragraph)
 * To swap a photo: change the `src` path and place the file in public/images/module2/
 */

import { ParaImage } from "@/data/module1/images";

export const module2Images: Record<string, ParaImage> = {
  // --- 2.1 Why a Standard Exists ---
  "2.1-0": {
    alt: "Early laser show from the 1970s",
    placeholder: "Vintage photo of an early laser light show — single green beam in a dark venue",
    icon: "📜",
  },
  "2.1-2": {
    alt: "AS/NZS IEC 60825.3:2022 standard cover page",
    placeholder: "Cover page or title page of the AS/NZS IEC 60825.3:2022 document",
    icon: "📋",
  },
  "2.1-3": {
    alt: "Gavel and legislation books",
    placeholder: "Legal books or gavel — illustrating the relationship between standards and law",
    icon: "⚖️",
  },

  // --- 2.2 The IEC 60825 Family ---
  "2.2-1": {
    alt: "IEC 60825-1 standard reference",
    placeholder: "Diagram showing IEC 60825-1 as the parent with Part 3 branching from it",
    icon: "📑",
  },
  "2.2-2": {
    alt: "Entertainment laser display context",
    placeholder: "Laser show at a venue — the specific context Part 3 addresses",
    icon: "🎪",
  },
  "2.2-4": {
    alt: "Part 1 and Part 3 relationship diagram",
    placeholder: "Flow diagram: Part 1 (classification + MPE) feeds into Part 3 (entertainment application)",
    icon: "🔗",
  },

  // --- 2.3 Scope — What the Standard Covers ---
  "2.3-0": {
    alt: "Indoor laser show with audience",
    placeholder: "Wide shot of indoor concert with laser beams over audience — within scope",
    icon: "🏟️",
  },
  "2.3-1": {
    alt: "Scanning vs static laser beams",
    placeholder: "Split image: scanning beam patterns (left) vs static beam effects through haze (right)",
    icon: "✨",
  },
  "2.3-2": {
    alt: "Industrial laser — out of scope",
    placeholder: "Industrial laser cutting metal — crossed out or marked 'outside scope'",
    icon: "🏭",
  },

  // --- 2.4 Normative vs Informative ---
  "2.4-1": {
    alt: "Shall vs should vs may",
    placeholder: "Three-column comparison card: SHALL (must) / SHOULD (recommended) / MAY (optional)",
    icon: "📝",
  },
  "2.4-3": {
    alt: "Standard document with highlighted sections",
    placeholder: "Open standard document with normative clauses highlighted differently from informative notes",
    icon: "🔍",
  },

  // --- 2.5 Structure and Navigation ---
  "2.5-1": {
    alt: "Standard table of contents",
    placeholder: "Table of contents showing Sections 1–10 of the standard with section titles",
    icon: "📖",
  },
  "2.5-5": {
    alt: "Standard section map overview",
    placeholder: "Visual map of all 10 sections connected by arrows showing the logical flow",
    icon: "🗺️",
  },

  // --- 2.6 Key Terms and Definitions ---
  "2.6-1": {
    alt: "Laser Safety Officer at work",
    placeholder: "LSO wearing safety eyewear checking a laser projector at a venue",
    icon: "👷",
  },
  "2.6-4": {
    alt: "Display Safety Record document",
    placeholder: "Sample DSR form or cover page — the key document an LSO produces",
    icon: "📄",
  },
  "2.6-5": {
    alt: "NOHD diagram",
    placeholder: "Diagram showing laser beam with NOHD distance marked — safe beyond this line",
    icon: "📏",
  },
  "2.6-6": {
    alt: "Nominal Hazard Zone illustration",
    placeholder: "3D cone diagram of NHZ around a laser beam path with exclusion zone boundary",
    icon: "⚠️",
  },

  // --- 2.7 The AU/NZ Adoption ---
  "2.7-0": {
    alt: "Australia and New Zealand map",
    placeholder: "Map of Australia and New Zealand with flags — joint standard adoption",
    icon: "🌏",
  },
  "2.7-2": {
    alt: "Australian WHS legislation",
    placeholder: "Australian state map showing different radiation safety regulators by state",
    icon: "🇦🇺",
  },
  "2.7-3": {
    alt: "New Zealand WorkSafe logo",
    placeholder: "New Zealand with WorkSafe NZ branding — HSWA 2015 as primary legislation",
    icon: "🇳🇿",
  },

  // --- 2.8 How the Standard Fits Into Your Work ---
  "2.8-0": {
    alt: "LSO consulting the standard on-site",
    placeholder: "Person on a job site reviewing a technical document — the standard as a working reference",
    icon: "📚",
  },
  "2.8-2": {
    alt: "DSR being completed",
    placeholder: "Hands filling in a DSR form with laser equipment visible in background",
    icon: "✍️",
  },
  "2.8-4": {
    alt: "Standard version updates",
    placeholder: "Timeline showing standard editions with 2022 highlighted as current",
    icon: "🔄",
  },
};
