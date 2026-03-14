import { QuizQuestion } from "@/types";

/** Full question bank for Module 10. The quiz draws a random subset each attempt. */
export const module10Quiz: QuizQuestion[] = [
  {
    id: 1,
    question:
      "What is the most significant structural difference between Australian and New Zealand laser regulation?",
    options: [
      "New Zealand has stricter penalties",
      "Australia uses a different technical standard",
      "New Zealand has a single national framework with no state-level fragmentation",
      "New Zealand does not regulate entertainment lasers",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. New Zealand is a unitary state with one national regulatory framework, eliminating the jurisdictional complexity of Australia's eight states and territories, each with independent radiation safety legislation.",
    feedbackIncorrect:
      "The key structural difference is that NZ has a single national framework — no state or territory governments with independent legislation. This makes compliance administratively simpler than in Australia. See Section 10.1.",
  },
  {
    id: 2,
    question:
      "The Health and Safety at Work Act 2015 (HSWA) replaced which earlier New Zealand legislation?",
    options: [
      "The Radiation Protection Act 1965",
      "The Health and Safety in Employment Act 1992",
      "The Workplace Safety Act 2001",
      "The Occupational Health Act 1985",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The HSWA 2015 replaced the Health and Safety in Employment Act 1992. It was heavily influenced by the Australian model WHS Act and adopted the PCBU framework, officer duties, and the 'reasonably practicable' standard.",
    feedbackIncorrect:
      "The HSWA 2015 replaced the Health and Safety in Employment Act 1992. The Radiation Protection Act 1965 was replaced separately by the Radiation Safety Act 2016. See Section 10.2.",
  },
  {
    id: 3,
    question:
      "Under the HSWA, who holds the primary duty of care for ensuring health and safety in a laser display operation in New Zealand?",
    options: [
      "WorkSafe New Zealand",
      "The venue owner",
      "The Person Conducting a Business or Undertaking (PCBU)",
      "The Ministry of Health",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The PCBU holds the primary duty to ensure, so far as is reasonably practicable, the health and safety of workers and others who could be affected by the work. This mirrors the Australian WHS Act.",
    feedbackIncorrect:
      "The PCBU holds the primary duty of care under the HSWA, just as in the Australian WHS framework. WorkSafe NZ is the regulator, not the duty holder. See Section 10.2.",
  },
  {
    id: 4,
    question:
      "What is the maximum fine a PCBU can face under the HSWA for a workplace safety offence?",
    options: [
      "$100,000",
      "$500,000",
      "$1.5 million",
      "$3 million",
    ],
    correctIndex: 3,
    feedbackCorrect:
      "Correct. The HSWA provides for penalties of up to $3 million for a PCBU. Officers can face fines up to $600,000, and workers up to $300,000. For reckless conduct, individuals can face up to 5 years imprisonment.",
    feedbackIncorrect:
      "The maximum penalty for a PCBU under the HSWA is $3 million. Officers face up to $600,000 and workers up to $300,000. Reckless conduct exposing persons to risk of death or serious injury can result in imprisonment. See Section 10.3.",
  },
  {
    id: 5,
    question:
      "Which government agency is the primary workplace safety regulator in New Zealand?",
    options: [
      "The Ministry of Health",
      "WorkSafe New Zealand",
      "The CAA NZ",
      "The Office of Radiation Safety",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. WorkSafe New Zealand is the primary workplace safety regulator, established under the WorkSafe New Zealand Act 2013. It has national jurisdiction, unlike Australia's state-based regulators.",
    feedbackIncorrect:
      "WorkSafe New Zealand is the primary workplace safety regulator with national jurisdiction. The Ministry of Health administers radiation safety, and CAA NZ handles aviation. See Section 10.3.",
  },
  {
    id: 6,
    question:
      "The Radiation Safety Act 2016 replaced which earlier legislation?",
    options: [
      "The Health and Safety in Employment Act 1992",
      "The Nuclear Safety Act 1980",
      "The Radiation Protection Act 1965",
      "The Environmental Protection Act 1986",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The Radiation Safety Act 2016 replaced the Radiation Protection Act 1965, modernising New Zealand's radiation safety framework to align with current international standards and provide a risk-proportionate regulatory approach.",
    feedbackIncorrect:
      "The Radiation Safety Act 2016 replaced the Radiation Protection Act 1965, which had been in force for over 50 years. The modernisation brought NZ radiation law into alignment with contemporary standards. See Section 10.4.",
  },
  {
    id: 7,
    question:
      "Under the Radiation Safety Act 2016, who administers the licensing framework for radiation sources including entertainment lasers?",
    options: [
      "WorkSafe New Zealand",
      "The Ministry of Health through the Office of Radiation Safety",
      "CAA New Zealand",
      "Territorial authorities (local councils)",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The Ministry of Health administers the Radiation Safety Act through the Office of Radiation Safety. This is separate from WorkSafe NZ, which administers the HSWA. Both frameworks apply to entertainment laser operators.",
    feedbackIncorrect:
      "The Ministry of Health, through the Office of Radiation Safety, administers the Radiation Safety Act 2016 including licensing of radiation sources. WorkSafe NZ handles workplace safety under the HSWA. See Section 10.4.",
  },
  {
    id: 8,
    question:
      "Which CAA NZ rule part addresses objects and activities affecting navigable airspace, including laser operations?",
    options: [
      "Part 19",
      "Part 43",
      "Part 77",
      "Part 139",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Civil Aviation Rules Part 77 addresses objects and activities that could affect navigable airspace. While primarily concerned with physical obstacles, it also encompasses activities like laser emissions that create hazards in airspace.",
    feedbackIncorrect:
      "CAA NZ Rules Part 77 covers objects and activities affecting navigable airspace, including laser displays. Operators must assess whether their beams could enter airspace and notify CAA NZ accordingly. See Section 10.5.",
  },
  {
    id: 9,
    question:
      "What is a NOTAM, and how does it relate to outdoor laser displays in New Zealand?",
    options: [
      "A type of radiation safety licence required by the Ministry of Health",
      "A Notice to Airmen issued by Airways NZ to alert pilots to laser activity",
      "A council permit for temporary outdoor events",
      "A WorkSafe NZ inspection notification",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A NOTAM (Notice to Airmen) is issued by Airways New Zealand to alert pilots to hazards, including laser activity near their flight paths. CAA NZ coordinates with Airways NZ to issue NOTAMs when operators notify them of outdoor laser displays.",
    feedbackIncorrect:
      "A NOTAM is a Notice to Airmen, issued by Airways New Zealand to alert pilots to laser activity and other hazards. CAA NZ coordinates NOTAM issuance when operators notify them of outdoor laser displays. See Section 10.5.",
  },
  {
    id: 10,
    question:
      "Under the Resource Management Act 1991, what must be assessed when applying for resource consent for an outdoor laser display?",
    options: [
      "Only the financial cost of the display",
      "Environmental effects including visual impacts, neighbour disturbance, traffic safety, and ecological effects",
      "Only the laser classification and power output",
      "Only the noise level of the associated event",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The resource consent process requires an assessment of environmental effects (AEE) covering visual effects, neighbour impacts, traffic safety, ecological effects, and any effects on cultural or heritage values.",
    feedbackIncorrect:
      "Resource consent requires an assessment of environmental effects (AEE) that covers visual impacts (light pollution), neighbour disturbance, traffic safety, ecological effects, and cultural/heritage values. See Section 10.6.",
  },
  {
    id: 11,
    question:
      "A laser operator based in Australia wants to perform shows in New Zealand. Which technical standard applies to their DSR preparation in NZ?",
    options: [
      "A completely different NZ-only standard",
      "AS/NZS IEC 60825.3:2022 — the same joint standard used in Australia",
      "No technical standard applies in NZ",
      "The British Standard BS EN 60825-3",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. AS/NZS IEC 60825.3:2022 is a joint Australian and New Zealand standard. The 'NZS' designation confirms its adoption in New Zealand. Technical safety requirements — DSR, MPE calculations, beam management — are identical in both countries.",
    feedbackIncorrect:
      "AS/NZS IEC 60825.3:2022 is a joint standard adopted by both Australia and New Zealand. A compliant DSR prepared in Australia meets the same technical standard in NZ. See Section 10.7.",
  },
  {
    id: 12,
    question:
      "What type of event does WorkSafe NZ require PCBUs to notify them about?",
    options: [
      "All entertainment laser displays regardless of size",
      "Only events with more than 500 attendees",
      "Notifiable events: death, notifiable injury or illness, or notifiable incidents (near-misses with potential for serious harm)",
      "Only events that require CASA notification",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The HSWA requires notification of notifiable events — deaths, notifiable injuries or illnesses, and notifiable incidents (near-misses with potential for serious harm). This is incident-based notification, not routine event notification.",
    feedbackIncorrect:
      "WorkSafe NZ notification is required for notifiable events under the HSWA: deaths, notifiable injuries/illnesses, and notifiable incidents (near-misses with potential for serious harm). It is not routine show-by-show notification. See Section 10.3.",
  },
  {
    id: 13,
    question:
      "How does New Zealand's radiation safety licensing compare to Queensland's three-tier system?",
    options: [
      "NZ requires more licences than Queensland",
      "NZ requires use licences and source registration but does not require event-specific approvals like Queensland",
      "NZ and Queensland have identical licensing requirements",
      "NZ has no radiation safety licensing at all",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. New Zealand requires use licences and source registration under the Radiation Safety Act 2016, but does not mandate event-specific approvals like Queensland's 'approval to use' for each show. NZ's approach is moderately prescriptive compared to Queensland's comprehensive three-tier system.",
    feedbackIncorrect:
      "NZ requires use licences and source registration but not event-specific approvals. Queensland uniquely requires three authorisations: possession licence, use licence, and approval to use for each event. NZ is less layered. See Sections 10.4 and 10.7.",
  },
  {
    id: 14,
    question:
      "Which New Zealand legislation governs land use and environmental effects, potentially requiring resource consent for outdoor laser displays?",
    options: [
      "The Health and Safety at Work Act 2015",
      "The Resource Management Act 1991",
      "The Radiation Safety Act 2016",
      "The Building Act 2004",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The Resource Management Act 1991 (RMA) governs land use and environmental effects. Territorial authorities administer the RMA locally, and outdoor laser displays may require resource consent depending on the district plan provisions.",
    feedbackIncorrect:
      "The Resource Management Act 1991 governs land use and environmental effects in New Zealand. Outdoor laser displays may require resource consent from the territorial authority. See Section 10.6.",
  },
  {
    id: 15,
    question:
      "An entertainment laser operator in NZ has a workplace incident where a beam inadvertently exposes a crew member's eyes. What is their immediate legal obligation?",
    options: [
      "No obligation unless the crew member requests medical attention",
      "Notify CAA NZ within 48 hours",
      "Notify WorkSafe NZ as soon as possible and preserve the scene",
      "Submit a revised DSR to the Ministry of Health within 30 days",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Under the HSWA, PCBUs must notify WorkSafe NZ of notifiable events (including notifiable injuries or incidents) as soon as possible and preserve the scene. Failure to notify is a separate offence.",
    feedbackIncorrect:
      "A beam exposure incident is a notifiable event under the HSWA. The PCBU must notify WorkSafe NZ as soon as possible and preserve the scene. Failure to notify is itself an offence. See Section 10.3.",
  },
  {
    id: 16,
    question:
      "What powers does a WorkSafe NZ inspector have when visiting an entertainment laser operation?",
    options: [
      "They can only observe from a distance and must request a formal meeting",
      "They can enter any workplace at any reasonable time, inspect anything, take samples, and require production of documents",
      "They can only attend if invited by the PCBU",
      "They can only inspect if they hold a radiation safety licence themselves",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. WorkSafe NZ inspectors have broad powers under the HSWA, including entering any workplace at reasonable times without notice, inspecting and examining anything, taking samples, requiring documents, and interviewing any person.",
    feedbackIncorrect:
      "WorkSafe NZ inspectors have broad entry and inspection powers under the HSWA — they can enter without notice, inspect anything, take samples, require documents, and issue notices. See Section 10.3.",
  },
  {
    id: 17,
    question:
      "For an operator who works across both Australia and New Zealand, which aspect of compliance is consistent between the two countries?",
    options: [
      "Radiation safety licensing procedures",
      "Local council permit processes",
      "Technical safety requirements under AS/NZS IEC 60825.3:2022",
      "Aviation notification forms and contacts",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The shared AS/NZS IEC 60825.3:2022 standard ensures that technical safety requirements — DSR preparation, MPE calculations, beam management, audience scanning limits, and safety interlocks — are identical in both countries. Administrative requirements differ.",
    feedbackIncorrect:
      "The shared AS/NZS IEC 60825.3:2022 standard makes technical compliance (DSR, MPE, beam management) identical in both countries. Administrative compliance (licensing, notifications, permits) differs between countries and Australian states. See Section 10.7.",
  },
  {
    id: 18,
    question:
      "Why was the HSWA 2015 deliberately modelled on the Australian WHS Act?",
    options: [
      "New Zealand is legally required to adopt Australian legislation",
      "It was recommended by the Independent Taskforce on Workplace Health and Safety to harmonise safety law between the two countries",
      "The Australian WHS Act was the only available template",
      "ARPANSA required it as a condition of cross-border cooperation",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The alignment was recommended by the Independent Taskforce on Workplace Health and Safety. New Zealand deliberately adopted the PCBU framework, officer duties, and 'reasonably practicable' standard to harmonise with Australia.",
    feedbackIncorrect:
      "The HSWA was modelled on the Australian WHS Act following recommendations from the Independent Taskforce on Workplace Health and Safety, which sought to harmonise workplace safety law between the two countries. See Section 10.2.",
  },
  {
    id: 19,
    question:
      "What practical recommendation is given for operators working across both Australia and New Zealand?",
    options: [
      "Obtain a single trans-Tasman laser licence",
      "Maintain a compliance matrix mapping regulatory requirements for each jurisdiction",
      "Only comply with the stricter country's requirements and ignore the other",
      "Register with ARPANSA for automatic NZ compliance",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Operators should maintain a compliance matrix covering technical requirements (consistent under the shared standard) and administrative requirements (country/state-specific licensing, notifications, and permits) for each jurisdiction where they operate.",
    feedbackIncorrect:
      "The recommended approach is to maintain a compliance matrix separating technical compliance (shared standard) from administrative compliance (country and state-specific). No single trans-Tasman licence exists. See Section 10.7.",
  },
  {
    id: 20,
    question:
      "Under the Radiation Safety Act 2016, which class of laser products consistently falls within the licensing requirement for entertainment operations?",
    options: [
      "Class 1 and above",
      "Class 2 and above",
      "Class 3R and above",
      "Class 3B and above",
    ],
    correctIndex: 3,
    feedbackCorrect:
      "Correct. Class 3B and Class 4 laser products — which are the standard for entertainment laser projectors — consistently fall within the licensing requirements. Lower-class devices used in everyday applications may be exempt where the risk is sufficiently low.",
    feedbackIncorrect:
      "Class 3B and above consistently require licensing under the Radiation Safety Act 2016. Lower-class lasers may be exempt where risk is sufficiently low. Entertainment projectors are overwhelmingly Class 3B or Class 4. See Section 10.4.",
  },
];
