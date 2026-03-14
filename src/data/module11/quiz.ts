import { QuizQuestion } from "@/types";

/** Full question bank for Module 11. The quiz draws a random subset each attempt. */
export const module11Quiz: QuizQuestion[] = [
  // --- 11.1 Beyond Standard Shows ---
  {
    id: 1,
    question:
      "Which section of AS/NZS IEC 60825.3:2022 specifically addresses special considerations for non-standard laser applications?",
    options: ["Section 4", "Section 7", "Section 10", "Section 12"],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Section 10 of AS/NZS IEC 60825.3:2022 addresses special considerations, acknowledging that rigid rules cannot anticipate every future application of laser technology.",
    feedbackIncorrect:
      "Section 10 of the standard addresses special considerations for non-standard applications. The drafting committee included this section precisely because prescriptive rules cannot cover every emerging use case. See Section 11.1.",
  },
  {
    id: 2,
    question:
      "When an LSO encounters a laser application not explicitly covered by the standard, what is the most appropriate response?",
    options: [
      "Refuse to allow the application to proceed",
      "Apply the underlying safety principles and conduct a first-principles hazard assessment",
      "Defer entirely to the equipment manufacturer's safety claims",
      "Apply the scanning projector rules without modification",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The LSO should apply fundamental safety principles — MPE limits, hazard distance calculations, and risk management — to evaluate any novel application, rather than refusing outright or blindly applying rules designed for different scenarios.",
    feedbackIncorrect:
      "The correct approach is to apply underlying safety principles through a first-principles hazard assessment. The core physics of laser-tissue interaction and the MPE framework apply to all laser applications regardless of the delivery technology. See Section 11.1.",
  },
  {
    id: 3,
    question:
      "Which fundamental safety principle remains constant regardless of the laser application technology?",
    options: [
      "NOHD calculations always use the collimated beam formula",
      "Maximum Permissible Exposure limits always apply",
      "Scanning projector safety zones are always appropriate",
      "Administrative controls are always sufficient",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. MPE limits are based on laser-tissue interaction physics and apply universally. What changes between applications is the geometry, exposure scenario, and sometimes the relevant wavelength band — but the MPE framework is always the foundation.",
    feedbackIncorrect:
      "MPE limits are derived from the fundamental physics of laser-tissue interaction and apply to all laser applications. The geometry and exposure scenario may change, but the requirement that no person receives an exposure exceeding the MPE never changes. See Section 11.1.",
  },

  // --- 11.2 Holographic and Volumetric Displays ---
  {
    id: 4,
    question:
      "Why are standard NOHD calculations often insufficient for holographic laser displays?",
    options: [
      "Holographic displays always use Class 1 lasers",
      "Holographic displays produce complex, non-uniform irradiance distributions rather than collimated beams",
      "NOHD calculations only apply to red wavelengths",
      "Holographic displays operate at wavelengths outside the visible spectrum",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Holographic displays produce divergent reconstructed wavefronts with complex irradiance distributions. Standard NOHD formulas assume collimated or near-collimated beams, making them inappropriate for the non-uniform output of holographic systems.",
    feedbackIncorrect:
      "Standard NOHD calculations assume a collimated or near-collimated beam. Holographic displays produce complex, non-uniform irradiance distributions from divergent wavefronts, requiring direct irradiance measurements at viewing positions. See Section 11.2.",
  },
  {
    id: 5,
    question:
      "Volumetric displays that create visible points by ionising air typically require what class of laser?",
    options: ["Class 1", "Class 2", "Class 3R", "Class 4"],
    correctIndex: 3,
    feedbackCorrect:
      "Correct. The laser power required to ionise air and create visible plasma points is extremely high, placing these sources firmly in Class 4. The beam path from source to focal point must be fully enclosed or controlled.",
    feedbackIncorrect:
      "Ionising air to create visible plasma points requires extremely high laser power — Class 4 levels. The safety controls must address the beam path from source to focal point and any reflections from the plasma. See Section 11.2.",
  },
  {
    id: 6,
    question:
      "If a holographic display manufacturer cannot provide a compliant hazard analysis, what should the LSO do?",
    options: [
      "Operate the display at reduced power",
      "Accept the manufacturer's verbal assurance of safety",
      "Refuse to permit operation in a public-access environment until a compliant analysis is completed",
      "Position the display behind glass as a precaution",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Without a compliant hazard analysis, the LSO cannot verify that the display meets MPE requirements at occupied positions. The display should not operate in a public-access environment until a qualified person has completed the analysis.",
    feedbackIncorrect:
      "The display should not be operated in a public-access environment until a compliant hazard analysis has been completed by a qualified person. The LSO cannot fulfill their safety obligations without verified hazard data. See Section 11.2.",
  },

  // --- 11.3 UV and Blue-Light Photochemical Hazards ---
  {
    id: 7,
    question:
      "What is the fundamental difference between photochemical and thermal laser injury mechanisms?",
    options: [
      "Photochemical injury only affects skin, thermal injury only affects eyes",
      "Photochemical injury depends on cumulative dose, thermal injury requires a threshold irradiance",
      "Photochemical injury heals faster than thermal injury",
      "Photochemical injury only occurs with pulsed lasers",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Photochemical injury is dose-dependent and cumulative — the product of irradiance and time. Thermal injury requires a threshold irradiance to be exceeded within a short time window, causing heat-induced tissue damage.",
    feedbackIncorrect:
      "Photochemical injury depends on cumulative dose (irradiance multiplied by time), while thermal injury requires a threshold irradiance within a short duration. This means repeated sub-threshold photochemical exposures can accumulate to cause harm. See Section 11.3.",
  },
  {
    id: 8,
    question:
      "Photokeratitis from UV laser exposure typically presents with symptoms after what time period?",
    options: [
      "Immediately during exposure",
      "1-2 minutes after exposure",
      "6-12 hours after exposure",
      "3-5 days after exposure",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Photokeratitis typically presents 6-12 hours after UV exposure, with symptoms including pain, tearing, and light sensitivity. This delayed onset means the injury may not be associated with the laser exposure event.",
    feedbackIncorrect:
      "Photokeratitis from UV exposure has a delayed onset, typically presenting 6-12 hours after exposure with pain, tearing, and light sensitivity — similar to welder's flash or snow blindness. See Section 11.3.",
  },
  {
    id: 9,
    question:
      "A 445 nm deep blue laser operating continuously for a multi-hour event requires the LSO to assess exposure using which MPE regime?",
    options: [
      "Thermal MPE only, since 445 nm is visible",
      "UV MPE tables, since it appears violet",
      "Photochemical (blue-light hazard) MPE for exposures exceeding 10 seconds",
      "No specific MPE applies to visible wavelengths",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Although 445 nm is within the visible range, it falls in the blue-light hazard band (400-480 nm) where photochemical MPEs apply for exposure durations exceeding 10 seconds. The LSO must also account for cumulative exposure across the entire event.",
    feedbackIncorrect:
      "At 445 nm, the wavelength falls in the blue-light hazard band (400-480 nm). For exposures exceeding 10 seconds, photochemical MPEs apply rather than thermal MPEs. Cumulative dose across the full event must be assessed. See Section 11.3.",
  },
  {
    id: 10,
    question:
      "Why does a UV laser illuminating a static fluorescent prop pose a skin hazard that a scanning visible laser typically does not?",
    options: [
      "UV photons are physically larger and cause more damage",
      "The static illumination delivers cumulative skin dose, while a scanning beam traverses skin too quickly",
      "Fluorescent materials amplify the laser power",
      "Skin is transparent to visible wavelengths but absorbs UV",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A scanning visible beam moves across skin too quickly to deliver a hazardous dose at entertainment power levels. A UV source illuminating a static area delivers cumulative photochemical dose that can cause erythema over time.",
    feedbackIncorrect:
      "The key difference is exposure duration. A scanning beam traverses skin rapidly, limiting dose delivery. A UV laser illuminating a static target delivers cumulative dose over time, which can cause skin erythema through the photochemical mechanism. See Section 11.3.",
  },

  // --- 11.4 High-Power Outdoor and Architectural Installations ---
  {
    id: 11,
    question:
      "For permanent outdoor laser installations in Australia, which authority must be notified regarding potential airspace hazards?",
    options: [
      "Local council only",
      "CASA (Civil Aviation Safety Authority)",
      "The state police service",
      "Standards Australia",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. CASA must be notified of outdoor laser operations that could affect navigable airspace. The LSO must calculate hazard distances vertically as well as horizontally and may need to implement altitude-dependent power limiting.",
    feedbackIncorrect:
      "CASA (Civil Aviation Safety Authority) must be notified of outdoor laser operations that could affect navigable airspace. The standard requires beam irradiance below the applicable MPE at any point where aircraft could be present. See Section 11.4.",
  },
  {
    id: 12,
    question:
      "What level of accessible laser irradiance must a public art installation in an unrestricted access area achieve?",
    options: [
      "Below the Class 3R AEL at all accessible points",
      "Below the MPE for 0.25-second exposure at eye level",
      "Below the Class 1 AEL at all points within the public access zone",
      "Below the Class 2 AEL during daytime hours only",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Public art in unrestricted areas must be inherently safe — accessible irradiance must be below the Class 1 AEL at all accessible points. Administrative controls like signage are insufficient when the public can approach from any direction.",
    feedbackIncorrect:
      "Unrestricted public access means the installation must be inherently safe. Accessible irradiance levels must be below the Class 1 AEL at all points within the public access zone, since administrative controls cannot be enforced. See Section 11.4.",
  },
  {
    id: 13,
    question:
      "What is a critical safety requirement for drone-mounted laser effects?",
    options: [
      "The laser must be Class 2 or below",
      "The drone must fly above 500 metres altitude",
      "Fail-safe beam termination on drone malfunction, accounting for worst-case pointing errors",
      "The laser must only operate during the drone's ascent phase",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Drone instability from vibration, wind, and positioning errors can cause beam pointing deviations. The LSO must ensure fail-safe beam termination on malfunction and account for worst-case pointing errors in the hazard analysis.",
    feedbackIncorrect:
      "Drone platforms introduce pointing uncertainty from vibration, wind gusts, and GPS errors. Fail-safe beam termination on malfunction is essential, and the hazard analysis must account for worst-case pointing deviations. See Section 11.4.",
  },
  {
    id: 14,
    question:
      "Why must permanent laser installations include documented maintenance and inspection schedules?",
    options: [
      "Insurance companies require annual inspections",
      "Optical components degrade, alignment drifts, and interlocks can fail over time",
      "The standard requires monthly recertification",
      "Laser diodes must be replaced every 1000 hours",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Environmental exposure accelerates wear on optical components, alignment drifts over time, and interlock mechanisms can fail. A system safe at commissioning may not remain safe without periodic re-verification of beam parameters and safety systems.",
    feedbackIncorrect:
      "Permanent installations face ongoing degradation: optical components wear, alignment drifts, interlocks may fail, and environmental exposure (rain, dust, temperature cycling) accelerates these effects. Periodic re-verification is essential for continued safety. See Section 11.4.",
  },

  // --- 11.5 Emerging Technologies ---
  {
    id: 15,
    question:
      "What is the primary safety concern unique to fiber-delivered laser display systems?",
    options: [
      "Fiber optics cannot transmit visible wavelengths efficiently",
      "A severed or disconnected fiber can emit full source power from an uncontrolled aperture",
      "Fiber delivery systems are always Class 1",
      "Fiber optics produce non-coherent output",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Fiber delivery separates the high-power source from the projection head, but a severed fiber becomes an uncontrolled emission point at full source power. Fiber breakage detection and automatic source shutdown are essential safety measures.",
    feedbackIncorrect:
      "The critical risk is that a severed or disconnected fiber emits the full source power from an uncontrolled aperture. The system must include fiber breakage detection and automatic source shutdown, with physical protection of fiber routing. See Section 11.5.",
  },
  {
    id: 16,
    question:
      "When assessing laser projection mapping on a building facade, what environmental factor must the LSO specifically survey?",
    options: [
      "The building's paint colour",
      "Specular reflective materials such as windows and metallic surfaces",
      "The building's construction date",
      "The distance to the nearest hospital",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Windows, metallic cladding, and other specular surfaces can redirect laser beams into unintended paths and occupied zones. The LSO must survey the target surface and surroundings for reflective materials and assess reflected beam hazards.",
    feedbackIncorrect:
      "Specular reflective materials — windows, metallic surfaces, polished stone — can create unintended reflected beam paths into occupied zones. The LSO must survey the target and surroundings for these materials. See Section 11.5.",
  },
  {
    id: 17,
    question:
      "A laser-excited phosphor lighting fixture is classified as Class 1 only under what condition?",
    options: [
      "When operated below 50% power",
      "When the protective housing enclosure is intact with functional interlocks",
      "When used outdoors only",
      "When the phosphor element is less than one year old",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Laser-excited fixtures contain a Class 4 internal source. The fixture achieves Class 1 classification only because the enclosure prevents access to the laser beam. If the housing is breached, the internal Class 4 hazard is exposed.",
    feedbackIncorrect:
      "The fixture uses a Class 4 internal laser to excite a phosphor. It is classified as Class 1 only while the protective housing enclosure is intact with functional interlocks. A breached housing exposes the Class 4 source. See Section 11.5.",
  },
  {
    id: 18,
    question:
      "How do MEMS mirror scanner failure modes differ from traditional galvanometer scanner failures?",
    options: [
      "MEMS mirrors never fail",
      "MEMS mirrors may oscillate at resonant frequencies or exhibit unpredictable positional drift, unlike galvo's predictable fail-to-rest behaviour",
      "Galvanometer scanners fail more dangerously than MEMS mirrors",
      "MEMS mirrors always fail to a safe centre position",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Galvanometer scanners typically fail to a rest position — a known, addressable hazard. MEMS mirrors may exhibit oscillation at resonant frequencies or unpredictable positional drift, requiring the LSO to understand the specific failure modes of the scanner technology in use.",
    feedbackIncorrect:
      "Traditional galvanometer scanners fail to a predictable rest position. MEMS mirrors may exhibit resonant oscillation or unpredictable drift — different failure behaviours that safety systems must be designed to address. See Section 11.5.",
  },

  // --- 11.6 Staying Current as an LSO ---
  {
    id: 19,
    question:
      "What is the typical revision cycle for IEC 60825 family standards?",
    options: [
      "Every 1-2 years",
      "Every 5-8 years",
      "Every 15-20 years",
      "Standards are never revised once published",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The IEC 60825 family follows a revision cycle of typically five to eight years. The current entertainment standard (2022 edition) replaced the 2008 edition, reflecting significant changes in technology and practice over that period.",
    feedbackIncorrect:
      "IEC 60825 standards are typically revised every five to eight years. The current AS/NZS IEC 60825.3:2022 replaced the 2008 edition. LSOs must stay informed about upcoming revisions. See Section 11.6.",
  },
  {
    id: 20,
    question:
      "When confronted with a genuinely novel laser application, what is the correct first step in the structured assessment approach?",
    options: [
      "Design safety controls based on similar applications",
      "Calculate the NOHD using standard scanning projector formulas",
      "Identify the laser source parameters: power, wavelength, beam diameter, and divergence",
      "Contact the equipment manufacturer for a safety certificate",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The first-principles approach begins with identifying the source parameters (power, wavelength, beam diameter, divergence), then characterising the exposure scenario, calculating irradiance at occupied positions, comparing to MPE, and finally designing controls.",
    feedbackIncorrect:
      "The structured assessment starts with identifying laser source parameters (power, wavelength, beam diameter, divergence). This is followed by characterising the exposure scenario, calculating irradiance, comparing to MPE, and designing controls. See Section 11.6.",
  },
];
