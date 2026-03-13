import { QuizQuestion } from "@/types";

export const module2Quiz: QuizQuestion[] = [
  {
    id: 1,
    question: "What does the 'AS/NZS' prefix on AS/NZS IEC 60825.3:2022 indicate?",
    options: [
      "It is an Australian-only standard",
      "It is a joint Australian and New Zealand adoption of the IEC standard",
      "It has been modified from the original IEC version",
      "It applies only to outdoor laser displays"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — AS/NZS indicates joint adoption by Standards Australia and Standards New Zealand.",
    feedbackIncorrect: "AS/NZS means it is a joint Australian and New Zealand standard, identically adopted from the international IEC version."
  },
  {
    id: 2,
    question: "Which part of the IEC 60825 family defines the laser classification system and MPE tables?",
    options: [
      "IEC 60825-3",
      "IEC 60825-14",
      "IEC 60825-1",
      "IEC 60825-2"
    ],
    correctIndex: 2,
    feedbackCorrect: "Correct — Part 1 is the parent standard containing classification and MPE tables.",
    feedbackIncorrect: "IEC 60825-1 (Part 1) is the parent standard that defines laser classification and MPE values. Part 3 references Part 1 for these."
  },
  {
    id: 3,
    question: "Which of the following applications is NOT covered by AS/NZS IEC 60825.3:2022?",
    options: [
      "Indoor venue laser shows",
      "Outdoor advertising laser displays",
      "Industrial laser cutting machines",
      "Architectural laser installations"
    ],
    correctIndex: 2,
    feedbackCorrect: "Correct — the standard covers entertainment laser displays, not industrial applications.",
    feedbackIncorrect: "Industrial applications like laser cutting are outside the scope. The standard covers entertainment displays, shows, advertising, and artistic installations."
  },
  {
    id: 4,
    question: "In the context of a standard, what does the word 'shall' indicate?",
    options: [
      "A suggestion that can be ignored",
      "A mandatory requirement",
      "An informative recommendation",
      "An optional best practice"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — 'shall' indicates a mandatory requirement that must be met.",
    feedbackIncorrect: "'Shall' is mandatory language — it means the requirement must be met. 'Should' is a recommendation; 'may' indicates permission."
  },
  {
    id: 5,
    question: "What is the role of a Laser Product Assessor (LPA)?",
    options: [
      "To operate the laser projectors during a show",
      "To independently review and endorse the Display Safety Record",
      "To sell laser equipment to production companies",
      "To enforce government regulations at events"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — the LPA provides an independent check on the LSO's safety work by reviewing the DSR.",
    feedbackIncorrect: "The LPA independently reviews and endorses the Display Safety Record (DSR), providing a second-opinion check on the LSO's safety assessment."
  },
  {
    id: 6,
    question: "What is the Display Safety Record (DSR)?",
    options: [
      "A video recording of each laser display for insurance purposes",
      "A formal document recording all safety-related information for a laser display",
      "A register of all laser equipment owned by a company",
      "A log of audience complaints about laser effects"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — the DSR documents equipment specs, hazard assessment, zone calculations, control measures, and operational procedures.",
    feedbackIncorrect: "The DSR is the formal document that records all safety-related information: equipment details, hazard assessment, zone calculations, control measures, and operational procedures."
  },
  {
    id: 7,
    question: "What does NOHD stand for?",
    options: [
      "Nominal Optical Hazard Diameter",
      "National Occupational Health Directive",
      "Nominal Ocular Hazard Distance",
      "Non-Optical Hazard Designation"
    ],
    correctIndex: 2,
    feedbackCorrect: "Correct — NOHD is the distance beyond which beam irradiance falls below the MPE for the eye.",
    feedbackIncorrect: "NOHD stands for Nominal Ocular Hazard Distance — the distance from the source beyond which the beam irradiance falls below the applicable MPE for the eye."
  },
  {
    id: 8,
    question: "Who has overall legal responsibility for safety at an event where lasers are used?",
    options: [
      "The Laser Safety Officer (LSO)",
      "The Laser Product Assessor (LPA)",
      "The Responsible Person",
      "The laser equipment manufacturer"
    ],
    correctIndex: 2,
    feedbackCorrect: "Correct — the Responsible Person (event promoter, venue manager, or production company) holds ultimate legal accountability.",
    feedbackIncorrect: "The Responsible Person has overall legal responsibility. The LSO advises on safety, but the Responsible Person is ultimately accountable."
  },
  {
    id: 9,
    question: "What is the minimum laser class that triggers the requirements of AS/NZS IEC 60825.3:2022?",
    options: [
      "Class 1",
      "Class 2",
      "Class 3R",
      "Class 3B"
    ],
    correctIndex: 3,
    feedbackCorrect: "Correct — the standard applies to Class 3B and Class 4 entertainment laser operations.",
    feedbackIncorrect: "The standard applies to Class 3B and Class 4 laser products used for entertainment. Lower classes do not require its controls."
  },
  {
    id: 10,
    question: "How does the standard differ between Australia and New Zealand?",
    options: [
      "New Zealand uses a stricter version of the standard",
      "Australia uses an older edition of the standard",
      "The technical content is identical; only the regulatory enforcement differs",
      "New Zealand does not recognise the standard"
    ],
    correctIndex: 2,
    feedbackCorrect: "Correct — it is an identical adoption. The difference is in how each country's regulators enforce it.",
    feedbackIncorrect: "The technical content is identical in both countries (identical adoption). The difference is in regulatory enforcement — Australia has state-based radiation regulators while NZ uses WorkSafe under HSWA."
  },
  {
    id: 11,
    question: "What does 'identical adoption' mean in the context of AS/NZS IEC 60825.3:2022?",
    options: [
      "The standard was written jointly by AU and NZ from scratch",
      "The technical content is unchanged from the international IEC version",
      "Both countries enforce the standard in exactly the same way",
      "The standard only applies to identical laser models in both countries"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — identical adoption means the technical requirements are unchanged from the IEC original.",
    feedbackIncorrect: "Identical adoption means the technical content is unchanged from the international IEC standard. The AS/NZS prefix indicates formal recognition, not modification."
  },
  {
    id: 12,
    question: "Which standard section covers the risk management process and Display Safety Record?",
    options: [
      "Section 5 — Zone limits and MPE",
      "Section 6 — Safety criteria for equipment",
      "Section 7 — Responsibilities",
      "Section 8 — Laser display risk management"
    ],
    correctIndex: 3,
    feedbackCorrect: "Correct — Section 8 covers the risk assessment process and DSR requirements.",
    feedbackIncorrect: "Section 8 covers laser display risk management, including the risk assessment process and Display Safety Record. Section 5 is zones/MPE, Section 6 is equipment, Section 7 is responsibilities."
  },
  {
    id: 13,
    question: "What distinguishes normative annexes from informative annexes?",
    options: [
      "Normative annexes are longer and more detailed",
      "Normative annexes contain binding requirements; informative annexes provide guidance",
      "Informative annexes are mandatory; normative annexes are optional",
      "There is no practical difference"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — normative annexes are binding, informative annexes provide supplementary guidance.",
    feedbackIncorrect: "Normative annexes contain mandatory requirements (like the main sections). Informative annexes provide guidance, examples, and explanations that are not mandatory."
  },
  {
    id: 14,
    question: "What is the Nominal Hazard Zone (NHZ)?",
    options: [
      "The control room where the laser operator sits",
      "The space within which laser radiation exceeds the applicable MPE",
      "The distance from the projector to the first row of audience",
      "The area covered by emergency lighting"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — the NHZ is the three-dimensional space where laser radiation exceeds the MPE.",
    feedbackIncorrect: "The Nominal Hazard Zone (NHZ) is the three-dimensional space within which laser radiation levels exceed the applicable MPE. Exclusion zones and audience separation distances are derived from it."
  },
  {
    id: 15,
    question: "When citing the standard in a DSR, what format should you use?",
    options: [
      "Just write 'the standard says so'",
      "Reference the standard name and specific clause number",
      "Include only the year of publication",
      "No citation is needed — the DSR replaces the standard"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — cite AS/NZS IEC 60825.3:2022 with the specific clause number for traceability.",
    feedbackIncorrect: "Use the full reference format with specific clause numbers, e.g., 'AS/NZS IEC 60825.3:2022, Clause 5.4'. This demonstrates competence and provides an auditable trail."
  },
  {
    id: 16,
    question: "A standard is best described as:",
    options: [
      "A law that must be followed or you face criminal prosecution",
      "A technical document defining best practice that regulators reference as the benchmark",
      "A voluntary guideline with no legal significance",
      "A government regulation specific to each state"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — a standard defines best practice and is referenced by regulators as the benchmark for duty of care.",
    feedbackIncorrect: "A standard is not itself a law, but it is not merely voluntary either. WHS legislation references standards as the benchmark for 'reasonably practicable' risk management. Not following the standard likely means failing your legal duty of care."
  },
  {
    id: 17,
    question: "Which standard section defines the roles of LSO, LPA, and Responsible Person?",
    options: [
      "Section 3 — Terms and definitions",
      "Section 7 — Responsibilities",
      "Section 9 — Exposure assessment",
      "Section 10 — Special considerations"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — Section 7 covers responsibilities including the roles of LSO, LPA, and Responsible Person.",
    feedbackIncorrect: "Section 7 covers responsibilities: the roles of the LSO, LPA, Responsible Person, and other personnel. Section 3 defines the terms, but Section 7 defines the roles and duties."
  },
  {
    id: 18,
    question: "Why does Part 3 frequently reference Part 1 of IEC 60825?",
    options: [
      "Because Part 3 was written first and needs updating",
      "Because Part 1 contains the classification system and MPE tables that Part 3 relies on",
      "Because Part 3 is only an informative guide",
      "Because Part 1 specifically covers entertainment lasers"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — Part 1 provides the foundational science (classification, MPE) that Part 3 applies to entertainment.",
    feedbackIncorrect: "Part 1 contains the laser classification system and MPE tables. Part 3 applies those to entertainment contexts. You cannot fully use Part 3 without the science from Part 1."
  },
  {
    id: 19,
    question: "If you encounter an industrial laser being used in an art installation, what should you do?",
    options: [
      "Apply AS/NZS IEC 60825.3 as normal",
      "Ignore it — it is not your responsibility as an LSO",
      "Flag it to the Responsible Person and recommend consulting the appropriate standard",
      "Refuse to work at the venue"
    ],
    correctIndex: 2,
    feedbackCorrect: "Correct — industrial lasers fall outside the scope of Part 3. Flag it and recommend the appropriate standard be consulted.",
    feedbackIncorrect: "Industrial lasers are outside the scope of AS/NZS IEC 60825.3. The correct action is to flag it to the Responsible Person and recommend that IEC 60825-1 (or the relevant industry-specific standard) be consulted."
  },
  {
    id: 20,
    question: "What obligation does an LSO have when a new edition of the standard is published?",
    options: [
      "None — the edition they trained on remains valid forever",
      "Review the changes and update their practices accordingly",
      "Immediately stop all laser operations until re-certified",
      "Wait for their employer to inform them of changes"
    ],
    correctIndex: 1,
    feedbackCorrect: "Correct — standards are living documents and LSOs have a professional obligation to stay current.",
    feedbackIncorrect: "Standards are reviewed and updated periodically. An LSO has a professional obligation to stay current — review changes and update practices when a new edition is published."
  },
];
