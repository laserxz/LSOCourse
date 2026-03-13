import { Section } from "@/types";

export const module2Sections: Section[] = [
  {
    id: "2.1",
    title: "Why a Standard Exists",
    paragraphs: [
      "Entertainment lasers have been used in live shows since the 1970s. In those early decades, safety knowledge was limited, regulations were inconsistent, and serious eye injuries occurred — including cases of permanent retinal damage to both performers and audience members.",
      "By the 1990s, it was clear that voluntary industry guidelines alone were not sufficient. The International Electrotechnical Commission (IEC) began developing formal safety standards for laser displays and shows, leading to the publication of IEC 60825-3 — the international standard specifically addressing entertainment laser safety.",
      "Australia and New Zealand jointly adopted this standard as AS/NZS IEC 60825.3:2022. The \"AS/NZS\" prefix means it is a joint Australian and New Zealand standard, identical in technical content to the IEC original but recognised by regulators in both countries.",
      "A standard is not itself a law. It is a technical document that defines best practice. However, workplace health and safety legislation in both Australia and New Zealand references standards as the benchmark for what constitutes a \"reasonably practicable\" approach to managing risk. In practice, if you are operating entertainment lasers and not following AS/NZS IEC 60825.3:2022, you are likely failing your legal duty of care.",
      "The standard exists to ensure that every person involved in entertainment laser operations — from the equipment manufacturer to the operator, the venue manager, and the Laser Safety Officer — has a common, technically rigorous framework for managing the hazards you learned about in Module 1.",
    ],
    keyTakeaway:
      "AS/NZS IEC 60825.3:2022 is the authoritative technical reference for entertainment laser safety in Australia and New Zealand. While not a law itself, it defines the standard of care that regulators, insurers, and courts expect you to meet.",
  },
  {
    id: "2.2",
    title: "The IEC 60825 Family",
    paragraphs: [
      "The standard you are studying does not exist in isolation. It is Part 3 of a broader family of laser safety standards published by the International Electrotechnical Commission (IEC).",
      "IEC 60825-1: Safety of laser products — General requirements. This is the parent standard. It defines the laser classification system (Classes 1 through 4), the Maximum Permissible Exposure (MPE) tables, measurement methods, and labelling requirements. Every other part of 60825 references Part 1. When this course discusses classification or MPE values, those originate from Part 1.",
      "IEC 60825-3: Safety of laser products — Guidance for laser displays and shows. This is our primary standard. It takes the general principles from Part 1 and applies them specifically to the entertainment context — scanning beams, audience proximity, outdoor displays, and the unique operational challenges of live events.",
      "Other parts in the family cover specific applications: Part 2 (fibre optic communication), Part 4 (laser guards), Part 12 (free-space optical communication), and Part 14 (safety of laser products used in consumer devices). As an LSO, you need to know Part 1 and Part 3. The other parts are unlikely to be relevant to your work.",
      "The critical relationship is between Part 1 and Part 3. Part 3 frequently says things like \"MPE values shall be determined in accordance with IEC 60825-1.\" This means you cannot fully apply Part 3 without access to (or knowledge of) Part 1. This course teaches you the relevant Part 1 content alongside Part 3 so you are not working blind.",
    ],
    keyTakeaway:
      "Part 1 provides the science — classification, MPE tables, measurement methods. Part 3 provides the application — how to use that science safely in entertainment contexts. You need both. This course integrates the relevant Part 1 content so you can apply Part 3 effectively.",
  },
  {
    id: "2.3",
    title: "Scope — What the Standard Covers",
    paragraphs: [
      "AS/NZS IEC 60825.3:2022 applies to laser displays and shows where the audience or other persons may be exposed to laser radiation. This includes indoor venue shows, outdoor events, architectural and advertising laser installations, artistic laser displays, and any situation where Class 3B or Class 4 laser products are used for visual entertainment or display purposes.",
      "The standard explicitly covers both scanning beam effects (where the laser beam is moved rapidly by galvanometer scanners to create patterns and graphics) and static beam effects (where beams are projected as fixed lines or cones through atmospheric haze). Both present hazards, but the risk profiles are different — scanning adds the critical variable of scan speed and the possibility of scanner failure.",
      "The standard does not cover industrial laser applications (cutting, welding, marking), medical laser applications (surgery, therapy, diagnostics), military or defence laser systems, scientific research lasers, or laser products below Class 3B. If you encounter a Class 1 or Class 2 laser pointer at a venue, AS/NZS IEC 60825.3 does not apply to it — though IEC 60825-1 still does.",
      "There is an important boundary condition: the standard covers laser radiation in the wavelength range 180 nm to 1 mm, but entertainment applications almost exclusively use the 380 nm to 780 nm visible range. The practical scope for an entertainment LSO is visible-wavelength Class 3B and Class 4 laser projectors used in shows and displays.",
      "If you are asked to supervise a laser installation that falls outside this scope — say, an industrial laser being used as part of an art installation — you should flag this to the Responsible Person and recommend that the appropriate standard (likely IEC 60825-1 directly, plus any industry-specific standard) be consulted.",
    ],
    keyTakeaway:
      "The standard covers entertainment laser displays using Class 3B and Class 4 lasers. It does not cover industrial, medical, military, or scientific applications, and it does not apply to lasers below Class 3B. Know the boundaries of your standard — and flag anything that falls outside them.",
  },
  {
    id: "2.4",
    title: "Normative vs Informative",
    paragraphs: [
      "Every international standard distinguishes between normative and informative content. Understanding this distinction is essential when reading or citing AS/NZS IEC 60825.3:2022.",
      "Normative content uses mandatory language: \"shall\" means a requirement that must be met. \"Shall not\" means a prohibition. When the standard says \"The LSO shall ensure that laser radiation levels in audience areas do not exceed the applicable MPE,\" that is a binding requirement — not a suggestion.",
      "Informative content uses advisory language: \"should\" indicates a recommendation, \"may\" indicates permission or a possibility. Informative sections and annexes provide guidance, examples, and explanations, but compliance with them is not mandatory. However, ignoring informative guidance without good reason could still be questioned by a regulator or in legal proceedings.",
      "The main body of the standard (Sections 3 through 10) contains both normative requirements and informative notes. Annexes labelled \"normative\" are binding; annexes labelled \"informative\" are guidance. When you write a Display Safety Record or risk assessment, citing normative requirements carries more weight than citing informative guidance — but both demonstrate due diligence.",
    ],
    keyTakeaway:
      "\"Shall\" means you must. \"Should\" means you ought to. \"May\" means you can. When the standard uses \"shall,\" treat it as mandatory — regulators and courts will. When it uses \"should,\" treat it as strong guidance that you deviate from only with documented justification.",
  },
  {
    id: "2.5",
    title: "Structure and Navigation",
    paragraphs: [
      "AS/NZS IEC 60825.3:2022 is organised into ten main sections plus annexes. Knowing the structure helps you find information quickly when you need it on a job site.",
      "Section 1 — Scope. Defines what the standard covers (entertainment laser displays) and what it does not. Section 2 — Normative references. Lists other standards you need (primarily IEC 60825-1). Section 3 — Terms and definitions. Defines the specific terminology used throughout the document. This is where terms like LSO, NOHD, NHZ, and MPE are formally defined.",
      "Section 4 — Exposure hazards and biological effects. Summarises the hazards of laser radiation — the content you covered in Module 1 of this course. Section 5 — Zone limits and MPE. Defines how to calculate Maximum Permissible Exposure and how to establish safety zones. This maps to Module 3.",
      "Section 6 — Safety criteria for equipment and installations. Covers engineering controls, projector safety features, E-stops, and interlocks. This maps to Module 4. Section 7 — Responsibilities. Defines the roles of the LSO, Laser Product Assessor (LPA), Responsible Person, and other personnel. Covers training, planning, setup, operation, and documentation. This maps to Modules 7 and 8.",
      "Section 8 — Laser display risk management. Covers the risk assessment process, the Display Safety Record (DSR), and risk control hierarchy. This maps to Module 6. Section 9 — Exposure assessment. Covers how to calculate actual exposure levels, including scan-fail safeguard requirements. This maps to Module 5.",
      "Section 10 — Special considerations. Covers edge cases like holographic displays, UV and blue-light photochemical hazards, and outdoor displays near aircraft routes. This maps to Module 11. The annexes provide additional calculation methods, example forms, and supplementary guidance.",
    ],
    keyTakeaway:
      "The standard follows a logical flow: define terms (§3), explain hazards (§4), set limits (§5), specify equipment requirements (§6), assign responsibilities (§7), manage risk (§8), assess exposure (§9), handle special cases (§10). Each remaining module in this course maps directly to one or more of these sections.",
  },
  {
    id: "2.6",
    title: "Key Terms and Definitions",
    paragraphs: [
      "Section 3 of the standard defines the terminology used throughout the document. As an LSO, you need to know these terms precisely — not approximately. Misunderstanding a definition can lead to incorrect safety assessments.",
      "Laser Safety Officer (LSO) — A person with the knowledge, training, and authority to manage the safety of a laser display or show. The LSO is responsible for ensuring compliance with the standard. This is the role you are training for. The standard requires that an LSO be appointed for any Class 3B or Class 4 entertainment laser operation.",
      "Laser Product Assessor (LPA) — An independent person with specialist laser safety knowledge who reviews and endorses the Display Safety Record. The LPA provides an independent check on the LSO's work. In some jurisdictions, the LPA role may be fulfilled by a radiation safety officer or equivalent.",
      "Responsible Person — The person or organisation with overall legal responsibility for the event or venue. This might be the event promoter, the venue manager, or the production company. The Responsible Person appoints the LSO and is ultimately accountable for safety. The LSO advises; the Responsible Person decides.",
      "Display Safety Record (DSR) — The formal document that records all safety-related information for a laser display. The DSR includes equipment specifications, hazard assessment, zone calculations, control measures, and operational procedures. It is the single most important document an LSO produces. Think of it as the laser equivalent of a Safe Work Method Statement.",
      "Nominal Ocular Hazard Distance (NOHD) — The distance from the laser source beyond which the beam irradiance falls below the applicable MPE for the eye. Inside the NOHD, direct viewing of the beam is potentially hazardous. This is a key calculation covered in Module 3.",
      "Nominal Hazard Zone (NHZ) — The space within which the level of laser radiation exceeds the applicable MPE. The NHZ is three-dimensional — it accounts for beam paths, reflections, and divergence. Exclusion zones and audience separation distances are derived from the NHZ. This is also covered in detail in Module 3.",
    ],
    keyTakeaway:
      "LSO, LPA, Responsible Person, DSR, NOHD, and NHZ — these six terms form the operational vocabulary of the standard. You will use them constantly in your work. Know their precise definitions, not just the abbreviations.",
  },
  {
    id: "2.7",
    title: "The AU/NZ Adoption",
    paragraphs: [
      "AS/NZS IEC 60825.3:2022 is an identical adoption of the international IEC 60825-3 standard. \"Identical adoption\" means the technical content is unchanged — the same requirements, the same definitions, the same calculations. The AS/NZS prefix simply means it has been formally adopted as a joint Australian and New Zealand standard by Standards Australia and Standards New Zealand.",
      "This identical adoption matters because it means the standard is internationally harmonised. If you work across borders — performing at events in different countries — the technical requirements are consistent. An LSO trained on the AS/NZS version can work to the same standard internationally.",
      "Where Australia and New Zealand diverge is in the regulatory enforcement, not in the standard itself. In Australia, workplace health and safety is regulated under the Work Health and Safety Act (or equivalent state legislation), with state-based radiation safety regulators (such as Queensland Radiation Health) having jurisdiction over laser use. Some states require specific registration or notification for Class 3B and 4 laser use.",
      "In New Zealand, the Health and Safety at Work Act 2015 (HSWA) is the primary legislation, with WorkSafe NZ as the regulator. New Zealand does not have a separate radiation-specific regulatory regime for entertainment lasers in the way some Australian states do. Compliance with AS/NZS IEC 60825.3 is the expected benchmark under HSWA's general duty of care.",
      "The practical implication: whether you are working in Sydney, Melbourne, Auckland, or Queenstown, the technical standard is the same. The regulatory paperwork and approval processes differ. Modules 9 and 10 of this course cover the specific AU and NZ regulatory frameworks in detail.",
    ],
    keyTakeaway:
      "The standard is the same in both countries — identical technical content. What differs is how regulators enforce it. Australia has state-based radiation regulators with varying requirements. New Zealand relies on WorkSafe NZ and the general duty of care under HSWA. Know your standard universally; know your regulations locally.",
  },
  {
    id: "2.8",
    title: "How the Standard Fits Into Your Work",
    paragraphs: [
      "As an LSO, the standard is your primary reference document. Every safety decision you make — from calculating exclusion zones to writing a Display Safety Record to briefing crew — should be traceable back to a clause in AS/NZS IEC 60825.3:2022 or IEC 60825-1.",
      "Each remaining module in this course maps directly to sections of the standard. Module 3 covers Section 5 (zones and MPE). Module 4 covers Section 6 (equipment safety). Module 5 covers Section 9 (exposure assessment). Module 6 covers Section 8 (risk management). Module 7 covers Section 7 (responsibilities). This is not coincidence — the course is structured to teach you the standard systematically.",
      "The Display Safety Record (DSR) is the practical output of your work. It is the document where everything comes together: equipment details, hazard analysis, zone calculations, control measures, operational procedures, and sign-off by the LPA. Every concept you learn in Modules 3 through 8 feeds into the DSR.",
      "When citing the standard in your DSR or other documentation, use the full reference format: AS/NZS IEC 60825.3:2022, followed by the specific clause number. For example: \"Audience scanning exposure levels comply with the MPE values specified in AS/NZS IEC 60825.3:2022, Clause 5.4, as assessed per the method in Clause 9.3.\" This level of specificity demonstrates competence and provides an auditable trail.",
      "Finally, standards are living documents. They are reviewed and updated periodically. The 2022 edition superseded earlier versions. As an LSO, you have a professional obligation to stay current. When a new edition is published, review the changes and update your practices accordingly. This course is aligned to the 2022 edition.",
    ],
    keyTakeaway:
      "The standard is not a document you read once and shelve. It is a working reference you will consult on every job. The DSR is your practical application of the standard. Every calculation, every control measure, every safety decision should be traceable to a specific clause. That traceability is what separates a competent LSO from someone who is merely operating laser equipment.",
  },
];
