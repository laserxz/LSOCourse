import { QuizQuestion } from "@/types";

/** Full question bank for Module 9. The quiz draws a random subset each attempt. */
export const module9Quiz: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Which Australian agency provides national guidance on radiation safety but does NOT directly enforce laser safety regulations on entertainment operators?",
    options: ["CASA", "ARPANSA", "SafeWork Australia", "The NSW EPA"],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. ARPANSA provides national guidance through the Radiation Protection Series and advises state regulators, but enforcement of laser safety regulations is the responsibility of state and territory regulators, not ARPANSA.",
    feedbackIncorrect:
      "ARPANSA provides the scientific framework and national guidance but has no direct enforcement power over entertainment laser operators. Enforcement is handled by state and territory regulators. See Section 9.1.",
  },
  {
    id: 2,
    question:
      "Under the WHS Act, who holds the primary duty of care for ensuring health and safety in a laser display operation?",
    options: [
      "The Laser Safety Officer",
      "The venue manager",
      "The Person Conducting a Business or Undertaking (PCBU)",
      "The state radiation safety regulator",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The PCBU holds the primary, non-delegable duty of care under the WHS Act. This duty requires ensuring, so far as is reasonably practicable, the health and safety of workers and others affected by the work.",
    feedbackIncorrect:
      "The PCBU (Person Conducting a Business or Undertaking) holds the primary duty of care. This duty is non-delegable — the PCBU cannot contract out of it. The LSO plays an important role but the legal primary duty sits with the PCBU. See Section 9.2.",
  },
  {
    id: 3,
    question:
      "The WHS Act's standard of 'reasonably practicable' requires the PCBU to weigh several factors. For Class 4 entertainment lasers, why does this standard effectively require full compliance with AS/NZS IEC 60825.3:2022?",
    options: [
      "Because the standard is referenced directly in the WHS Act",
      "Because the hazard is well-documented, controls are well-established, and implementation cost is modest relative to injury severity",
      "Because ARPANSA mandates it as a condition of federal licensing",
      "Because insurers require it and this overrides the WHS Act",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The 'reasonably practicable' test weighs likelihood and severity of harm against the cost and availability of controls. For Class 3B/4 lasers, the hazard is well-known, the standard provides established controls, and the cost of implementation is modest — so a court would expect compliance.",
    feedbackIncorrect:
      "The 'reasonably practicable' standard involves weighing hazard severity against the availability and cost of controls. Since laser hazards are well-documented and the controls in AS/NZS IEC 60825.3:2022 are readily available at modest cost, compliance is effectively expected. See Section 9.2.",
  },
  {
    id: 4,
    question:
      "Which Australian state has the most prescriptive regulatory regime for entertainment laser operations, requiring possession licences, use licences, and event-specific approvals?",
    options: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Queensland's Radiation Safety Act 1999 and Radiation Safety Regulation 2021 establish the most detailed regime, requiring three separate authorisations: a possession licence, a use licence, and an approval to use for each event.",
    feedbackIncorrect:
      "Queensland has the most comprehensive entertainment laser regulatory regime in Australia. It requires three separate authorisations under the Radiation Safety Act 1999: possession licence, use licence, and approval to use. See Section 9.4.",
  },
  {
    id: 5,
    question:
      "In Queensland, which of the following is NOT one of the three authorisations required for Class 3B/Class 4 laser use?",
    options: [
      "Possession licence",
      "Use licence",
      "ARPANSA national certification",
      "Approval to use",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. ARPANSA does not issue national certifications for entertainment laser operators. The three Queensland authorisations are: possession licence, use licence, and approval to use — all issued by Queensland Health's Radiation Health unit.",
    feedbackIncorrect:
      "ARPANSA national certification does not exist as part of the Queensland regime. The three required authorisations are: possession licence, use licence, and approval to use, all administered by Queensland Health. See Section 9.4.",
  },
  {
    id: 6,
    question:
      "CASA Advisory Circular AC 139-18 addresses which aspect of laser operations?",
    options: [
      "Indoor venue safety requirements",
      "Laser operations in the vicinity of aerodromes and navigable airspace",
      "State radiation safety licensing requirements",
      "Insurance requirements for laser operators",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. AC 139-18 provides specific guidance on laser operations near aerodromes and in navigable airspace, including notification requirements, protected zones, and operational procedures for laser displays.",
    feedbackIncorrect:
      "CASA Advisory Circular AC 139-18 specifically addresses laser operations in the vicinity of aerodromes and in navigable airspace. It defines protected zones, notification requirements, and beam management procedures. See Section 9.5.",
  },
  {
    id: 7,
    question:
      "Under Commonwealth law, what is the maximum penalty for deliberately directing a laser beam at an aircraft?",
    options: [
      "A fine of up to $5,000",
      "A fine of up to $50,000",
      "Imprisonment of up to 2 years",
      "Imprisonment of up to 5 years",
    ],
    correctIndex: 3,
    feedbackCorrect:
      "Correct. Deliberately or recklessly directing a laser beam at an aircraft is a criminal offence under Commonwealth law, carrying imprisonment of up to 5 years. Even negligent interference can result in prosecution.",
    feedbackIncorrect:
      "Deliberately or recklessly directing a laser beam at an aircraft carries up to 5 years imprisonment under Commonwealth law. This reflects the seriousness of aviation interference. See Section 9.5.",
  },
  {
    id: 8,
    question:
      "Why should an operator coordinate with CASA early in the planning process for an outdoor laser event?",
    options: [
      "CASA approval is only available on the day of the event",
      "CASA may impose conditions, require display modifications, or refuse approval — early engagement avoids last-minute complications",
      "CASA handles all outdoor event permits on behalf of local councils",
      "CASA must assign a safety officer to attend every outdoor laser display",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. CASA may impose conditions on the operation, require modifications to the display design, or refuse approval. Early coordination ensures these requirements are identified and addressed well before the event date.",
    feedbackIncorrect:
      "Early CASA coordination is essential because CASA may impose conditions, require modifications, or refuse approval. Discovering this at the last minute could force event cancellation. See Section 9.5.",
  },
  {
    id: 9,
    question:
      "What is the primary maritime safety concern with entertainment laser displays near navigable waterways?",
    options: [
      "Laser beams may damage vessel hulls",
      "Laser beams may temporarily blind or disorient vessel navigators",
      "Laser light attracts marine wildlife to shipping channels",
      "Maritime law prohibits all light sources near ports",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A laser beam striking the bridge of a vessel can temporarily blind or disorient the navigator, which is particularly dangerous during critical manoeuvres such as berthing or navigating narrow channels.",
    feedbackIncorrect:
      "The primary maritime concern is that laser beams can temporarily blind or disorient vessel navigators, with potentially catastrophic consequences during critical manoeuvres. See Section 9.6.",
  },
  {
    id: 10,
    question:
      "Which document is the single most important piece of evidence in a liability claim arising from a laser display incident?",
    options: [
      "The venue hire contract",
      "The operator's insurance policy",
      "The Detailed Safety Report (DSR)",
      "The CASA notification form",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The DSR is the primary documentary evidence of what safety analysis was performed and what controls were implemented. A compliant DSR demonstrates the operator met the standard of care; an absent or incomplete DSR is powerful evidence of negligence.",
    feedbackIncorrect:
      "The Detailed Safety Report (DSR) is the most important liability document. It demonstrates what safety analysis was performed and what controls were implemented. Courts and insurers look to the DSR first when assessing liability. See Section 9.8.",
  },
  {
    id: 11,
    question:
      "Under the WHS Act, can the PCBU delegate their primary duty of care to a subcontractor or freelance laser operator?",
    options: [
      "Yes, provided the delegation is in writing",
      "Yes, if the subcontractor holds their own insurance",
      "No — the primary duty is non-delegable",
      "Only if the state regulator approves the delegation",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The PCBU's primary duty of care under the WHS Act is non-delegable. The PCBU cannot contract out of their safety obligations, even when using subcontractors or freelance operators.",
    feedbackIncorrect:
      "The PCBU's primary duty of care is non-delegable under the WHS Act. Hiring subcontractors does not transfer the duty — the PCBU remains responsible for ensuring health and safety. See Section 9.2.",
  },
  {
    id: 12,
    question:
      "An officer (director) of a laser display company claims they did not know about laser safety requirements. Under the WHS Act, is this a valid defence?",
    options: [
      "Yes — officers are not expected to have technical knowledge",
      "Yes — only the PCBU has duties, not individual officers",
      "No — officers have a personal duty of due diligence that includes acquiring knowledge of safety matters",
      "No — but the penalty is limited to a warning for first offences",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Officers have a separate, personal duty to exercise due diligence, which includes acquiring and maintaining knowledge of WHS matters relevant to their business. Wilful ignorance is not a defence.",
    feedbackIncorrect:
      "Officers have a personal duty of due diligence under the WHS Act, which requires them to acquire and maintain knowledge of safety matters. An officer who is wilfully ignorant of laser safety obligations can be personally prosecuted. See Section 9.2.",
  },
  {
    id: 13,
    question:
      "Which of the following states does NOT use harmonised WHS legislation based on the Safe Work Australia model?",
    options: [
      "Queensland",
      "New South Wales",
      "Victoria",
      "South Australia",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Victoria maintains its own Occupational Health and Safety Act 2004 rather than adopting the harmonised model WHS Act. Western Australia also maintains separate OHS legislation. The principles are broadly similar, but the legislative structure differs.",
    feedbackIncorrect:
      "Victoria and Western Australia maintain their own OHS legislation rather than adopting the harmonised model WHS Act. Queensland, NSW, SA, Tasmania, ACT, and NT have adopted harmonised WHS legislation. See Section 9.2.",
  },
  {
    id: 14,
    question:
      "A laser operator working in NSW must register their Class 4 laser apparatus with which regulatory body?",
    options: [
      "ARPANSA",
      "SafeWork NSW",
      "The NSW Environment Protection Authority (EPA)",
      "CASA",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. In New South Wales, the EPA administers the Radiation Control Act 1990. Class 3B and Class 4 laser products are classified as radiation apparatus and must be registered with the NSW EPA. Users must also hold a radiation user licence.",
    feedbackIncorrect:
      "In NSW, the Environment Protection Authority (EPA) administers radiation safety under the Radiation Control Act 1990. Class 3B and Class 4 lasers must be registered with the NSW EPA. See Section 9.3.",
  },
  {
    id: 15,
    question:
      "An entertainment laser operator holds a valid Queensland possession licence and use licence. They are hired for an event in Victoria. What should they do?",
    options: [
      "Nothing additional — the Queensland licence is valid nationally",
      "Simply notify ARPANSA of the interstate operation",
      "Check Victoria's radiation safety requirements independently, as interstate licences may not be recognised",
      "Apply to CASA for an interstate transfer certificate",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. State and territory laser licensing is not automatically transferable between jurisdictions. An operator licensed in Queensland must independently assess and comply with Victoria's requirements under the Radiation Act 2005.",
    feedbackIncorrect:
      "State licences are not automatically valid in other jurisdictions. Each state has its own radiation safety legislation and licensing requirements. Operators must independently assess and comply with the requirements of each state where they operate. See Sections 9.1 and 9.9.",
  },
  {
    id: 16,
    question:
      "What type of insurance covers claims arising from an error in the DSR calculation or incorrect safety advice?",
    options: [
      "Public liability insurance",
      "Professional indemnity insurance",
      "Workers' compensation insurance",
      "Equipment insurance",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Professional indemnity insurance covers claims arising from professional negligence, including errors in DSR calculations, failure to identify hazards, or incorrect advice about beam safety. This is distinct from public liability insurance.",
    feedbackIncorrect:
      "Professional indemnity insurance covers professional negligence claims such as DSR errors or incorrect safety advice. Public liability covers general injury claims but not specifically professional judgement failures. See Section 9.8.",
  },
  {
    id: 17,
    question:
      "For a waterfront laser display, which of the following should be included in the DSR?",
    options: [
      "A maritime risk assessment including vessel traffic patterns and exclusion zones",
      "Only the standard indoor venue assessment",
      "A statement that maritime safety is not the operator's responsibility",
      "Proof that all vessels have been individually notified",
    ],
    correctIndex: 0,
    feedbackCorrect:
      "Correct. The DSR for a waterfront event should include a maritime risk assessment covering vessel traffic patterns, identification of shipping channels within beam range, maritime exclusion zones, and specific beam management measures.",
    feedbackIncorrect:
      "The DSR for a waterfront event must include a maritime risk assessment covering vessel traffic patterns, shipping channels, exclusion zones, and beam management measures. See Section 9.6.",
  },
  {
    id: 18,
    question:
      "Why might an outdoor laser display require consideration of wildlife impacts?",
    options: [
      "Laser beams can permanently blind birds at long range",
      "Laser beams can startle birds and other animals, particularly in ecologically sensitive areas",
      "Federal wildlife law prohibits all laser use outdoors",
      "Wildlife interference automatically invalidates the DSR",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Laser beams can startle birds and other animals, particularly near ecologically sensitive areas such as national parks, wildlife reserves, or known roosting sites. Events in these locations may require specific environmental assessments.",
    feedbackIncorrect:
      "Laser beams can startle wildlife, particularly in ecologically sensitive areas. Events near national parks, wildlife reserves, or roosting sites may require environmental assessments or conditions from environment departments. See Section 9.7.",
  },
  {
    id: 19,
    question:
      "A laser display operator is planning events in three different Australian states over the coming month. What is the recommended compliance approach?",
    options: [
      "Obtain a single national licence from ARPANSA",
      "Use the Queensland checklist for all states since it is the most comprehensive",
      "Apply a systematic compliance checklist for each state independently, covering radiation safety, CASA, maritime, council permits, and insurance",
      "Rely on the venue to handle all regulatory compliance in each state",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Each state must be assessed independently using a systematic compliance checklist that covers state radiation safety requirements, CASA, maritime, council permits, and insurance. There is no single national licence.",
    feedbackIncorrect:
      "A systematic, state-by-state compliance checklist is the recommended approach. Each jurisdiction must be assessed independently — there is no single national licence. Build this into your standard operating procedure. See Section 9.9.",
  },
  {
    id: 20,
    question:
      "Under the WHS Act, a laser operator who deliberately disables a safety interlock during a show is breaching which duty?",
    options: [
      "The PCBU's primary duty of care",
      "The officer's due diligence duty",
      "The worker's duty to take reasonable care and comply with reasonable instructions",
      "CASA's aviation safety requirements",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Workers have duties under the WHS Act to take reasonable care for their own health and safety, not adversely affect others, and comply with reasonable instructions. Disabling a safety interlock breaches these worker duties. Workers can be prosecuted for WHS offences.",
    feedbackIncorrect:
      "A laser operator who disables a safety interlock is breaching their worker duties under the WHS Act. Workers must take reasonable care, not adversely affect others, and comply with reasonable instructions. Workers can be prosecuted. See Section 9.2.",
  },
];
