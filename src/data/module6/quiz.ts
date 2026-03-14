import { QuizQuestion } from "@/types";

/** Full question bank for Module 6. The quiz draws a random subset each attempt. */
export const module6Quiz: QuizQuestion[] = [
  {
    id: 1,
    question:
      "What is the primary reason AS/NZS IEC 60825.3:2022 adopts a risk-based approach rather than a prescriptive checklist?",
    options: [
      "To reduce the regulatory burden on operators",
      "Because each installation has unique hazards that require site-specific assessment and controls",
      "Because the standard's authors could not agree on specific requirements",
      "To allow operators to choose which safety measures they prefer",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A risk-based approach recognises that each installation has unique hazards determined by equipment, venue, show content, and audience. A fixed checklist cannot account for this variation. The LSO must exercise professional judgement to determine appropriate controls for each situation. See Section 6.1.",
    feedbackIncorrect:
      "The risk-based approach exists because laser display installations vary enormously. Two shows with identical equipment may require different controls based on venue geometry, audience layout, and show content. A prescriptive checklist cannot address this variation. Review Section 6.1.",
  },
  {
    id: 2,
    question:
      "Which of the following must be included in a Display Safety Record (DSR)?",
    options: [
      "The show's artistic concept and creative direction",
      "A description of laser equipment, venue layout, hazard analysis, control measures, and exposure assessment results",
      "The event's marketing plan and ticket sales projections",
      "The manufacturer's full technical manual for each projector",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The DSR must contain equipment details (make, model, class, power, wavelength), venue layout and laser positioning, hazard zone analysis, control measures, exposure assessment results, and LSO credentials. See Section 6.2.",
    feedbackIncorrect:
      "The DSR is a safety compliance document containing technical and safety information. It must include equipment specifications, venue layout, hazard analysis, control measures, and measurement results. Review Section 6.2 for the full list of required content.",
  },
  {
    id: 3,
    question:
      "A touring laser show uses a master DSR prepared at the start of a tour. What must happen at each new venue?",
    options: [
      "Nothing — the master DSR covers all venues on the tour",
      "The DSR must be completely rewritten from scratch for each venue",
      "A venue-specific addendum must be prepared covering local geometry, audience layout, and emergency procedures",
      "The master DSR only needs updating if the venue capacity exceeds 1,000",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. While a master DSR covers equipment specifications and show content that remain constant, each venue has unique geometry, surfaces, audience layout, and emergency procedures that must be assessed and documented in a venue-specific addendum. See Section 6.2.",
    feedbackIncorrect:
      "A master DSR is a starting point, but each venue presents unique conditions that must be individually assessed. The venue-specific addendum documents the local geometry, reflective surfaces, audience positions, and emergency procedures. Review Section 6.2.",
  },
  {
    id: 4,
    question:
      "A Class 4 laser beam strikes a black theatrical drape during a show. What hazard category does this represent?",
    options: [
      "Beam hazard — specular reflection",
      "Fire and thermal hazard — potential ignition of combustible material",
      "Atmospheric hazard — generation of airborne contaminants",
      "Electrical hazard — risk of short circuit",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Class 4 laser beams can ignite dark-coloured fabrics, paper, and some plastics. Theatrical drapes are combustible materials, and direct exposure to a high-power beam creates a fire ignition risk. The LSO must identify combustible materials in and near beam paths. See Section 6.3.",
    feedbackIncorrect:
      "Dark-coloured fabrics absorb laser energy efficiently and can be ignited by Class 4 beams. This is a fire and thermal hazard, not a reflection or electrical issue. Review Section 6.3 on fire and thermal hazards in laser displays.",
  },
  {
    id: 5,
    question:
      "In a risk matrix, risk is expressed as the combination of which two factors?",
    options: [
      "Cost of controls and time to implement them",
      "Likelihood of harm occurring and consequence (severity) of that harm",
      "Beam power and beam divergence",
      "Distance to the audience and number of projectors",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Risk is conventionally the product of likelihood (how probable the harm is) and consequence (how severe the harm would be). A risk matrix maps these two dimensions to produce a risk rating from low to extreme. See Section 6.4.",
    feedbackIncorrect:
      "Risk assessment uses the standard framework of likelihood multiplied by consequence. Beam parameters and distances are inputs to the hazard analysis, not the risk rating itself. Review Section 6.4 on risk assessment methodology.",
  },
  {
    id: 6,
    question:
      "Why is laser eye injury described as having a 'sharp threshold' in risk assessment terms?",
    options: [
      "Because laser beams have sharp edges",
      "Because exposures below the MPE produce no injury while exposures above the MPE can cause immediate permanent damage",
      "Because the pain threshold coincides with the injury threshold",
      "Because laser injury only occurs with sharp-edged beam profiles",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Unlike many hazards where severity increases gradually, laser eye injury has a sharp threshold at the MPE. Below the MPE, no injury occurs. Above the MPE, immediate permanent retinal damage can result. This means controls must reliably prevent any exposure above the MPE. See Section 6.4.",
    feedbackIncorrect:
      "The threshold behaviour of laser injury means there is a clear boundary (the MPE) between safe and dangerous exposure. Controls must prevent any exceedance of this threshold, not merely reduce average exposure. Review Section 6.4.",
  },
  {
    id: 7,
    question:
      "Which level of the hierarchy of controls is most effective and should be considered first?",
    options: [
      "Personal protective equipment",
      "Administrative controls",
      "Engineering controls",
      "Elimination",
    ],
    correctIndex: 3,
    feedbackCorrect:
      "Correct. Elimination is the most effective control because it removes the hazard entirely. If a hazard is eliminated, no further controls are needed for it. In laser safety, this could mean removing audience-level beams from the show design. See Section 6.5.",
    feedbackIncorrect:
      "The hierarchy ranks controls from most to least effective: elimination, substitution, engineering, administrative, PPE. Elimination removes the hazard entirely and is always the preferred first option. Review Section 6.5.",
  },
  {
    id: 8,
    question:
      "A laser operator replaces a 10-watt projector with a 2-watt projector for an event where the higher power is unnecessary. Which level of the hierarchy of controls does this represent?",
    options: [
      "Elimination",
      "Substitution",
      "Engineering control",
      "Administrative control",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Substitution means replacing a higher hazard with a lower one. Using a lower-power projector when the higher power is not needed reduces the hazard at source. The display still uses a laser, so the hazard is not eliminated, but it is reduced. See Section 6.5.",
    feedbackIncorrect:
      "This is substitution — replacing a higher-hazard item (10 W projector) with a lower-hazard alternative (2 W projector). Elimination would mean not using a laser at all. Engineering controls are physical barriers or safety systems. Review Section 6.5.",
  },
  {
    id: 9,
    question:
      "Why are administrative controls considered less reliable than engineering controls?",
    options: [
      "Because administrative controls are more expensive to implement",
      "Because administrative controls depend on people consistently following procedures",
      "Because administrative controls are not recognised by the standard",
      "Because administrative controls only apply to indoor venues",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Administrative controls rely on human behaviour: people following procedures, reading signs, attending briefings, and consistently applying rules. Humans are inherently less reliable than properly designed physical systems. Engineering controls work independently of human behaviour. See Section 6.5.",
    feedbackIncorrect:
      "Administrative controls depend on human compliance, which is inherently variable. People forget procedures, ignore signs, or make mistakes under pressure. Engineering controls (interlocks, beam stops, SFS) function regardless of human behaviour. Review Section 6.5.",
  },
  {
    id: 10,
    question:
      "An outdoor laser display includes beams pointing upward. What additional coordination may be required?",
    options: [
      "Coordination with the local fire department only",
      "Coordination with aviation authorities regarding aircraft hazards",
      "No additional coordination — the standard covers all scenarios",
      "Coordination with the venue's insurance provider only",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Upward-pointing beams at outdoor venues can reach aircraft. Most jurisdictions require coordination with aviation authorities (such as CASA in Australia or CAA in New Zealand) before operating outdoor laser displays with any upward-pointing beam components. See Section 6.6.",
    feedbackIncorrect:
      "Outdoor laser beams directed upward can intersect with aircraft flight paths, creating a serious hazard to pilots. Aviation authority coordination is required in most jurisdictions. Review Section 6.6 on outdoor venue considerations.",
  },
  {
    id: 11,
    question:
      "Why does the presence of children in the audience affect the laser safety risk assessment?",
    options: [
      "Children are more sensitive to laser wavelengths than adults",
      "Children are shorter, more likely to stare at bright lights, and less responsive to warning signs",
      "Children always require laser safety eyewear",
      "The standard prohibits laser displays at events with children",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Children are shorter (beams safe at adult head height may strike children's eyes), more likely to stare directly at bright lights rather than look away, and less likely to understand or comply with warning signs and safety barriers. The risk assessment must account for these factors. See Section 6.6.",
    feedbackIncorrect:
      "While children are not more optically sensitive to lasers, their height, behaviour, and cognitive development affect the risk assessment. Beam heights, safety barriers, and warning measures must be adapted. Review Section 6.6 on audience demographics.",
  },
  {
    id: 12,
    question:
      "What is the minimum recommended retention period for laser display safety documentation?",
    options: [
      "30 days after the event",
      "1 year",
      "5 years",
      "Documentation does not need to be retained after the event",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Safety documentation should be retained for a minimum of five years, following general WHS record-keeping requirements. Longer retention may be appropriate for events involving minors, given extended limitation periods for legal claims. See Section 6.7.",
    feedbackIncorrect:
      "The recommended minimum retention period is five years, aligned with WHS regulations. Disposing of records shortly after an event leaves the operator without evidence of due diligence if a claim arises later. Review Section 6.7.",
  },
  {
    id: 13,
    question:
      "What should trigger a review and update of the Display Safety Record?",
    options: [
      "Only a formal regulatory audit",
      "Any change to show content, equipment, projector positioning, venue layout, or audience arrangement",
      "Only a change of LSO",
      "Only the addition of new laser projectors",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Any change that could affect the safety analysis must trigger a DSR review. This includes changes to show content, equipment configuration, projector positioning, venue layout, audience arrangement, or environmental conditions. Undocumented changes are a common source of safety gaps. See Section 6.7.",
    feedbackIncorrect:
      "The DSR must be updated whenever any condition changes that could affect the safety analysis. This is not limited to equipment changes — show content, venue layout, and audience arrangement all affect the risk assessment. Review Section 6.7 on change management.",
  },
  {
    id: 14,
    question:
      "A scanner glitch is caught by the SFS before anyone is exposed to a static beam. No injury occurs. How should this event be classified?",
    options: [
      "A routine equipment maintenance issue requiring no action",
      "A near-miss that should be reported and investigated",
      "A successful test of the SFS requiring no further action",
      "An incident that must be reported to the regulator immediately",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. This is a near-miss: an event that could have caused harm but was prevented by a secondary safety barrier (the SFS). Near-misses should be reported and investigated because they are leading indicators of systemic risks that could result in actual harm under slightly different circumstances. See Section 6.8.",
    feedbackIncorrect:
      "While the SFS functioned correctly, the scanner glitch itself is a near-miss that indicates a potential for future harm. Near-miss reporting is one of the most valuable tools for identifying systemic risks before injuries occur. Review Section 6.8.",
  },
  {
    id: 15,
    question:
      "What is the purpose of documenting both inherent risk and residual risk in a risk assessment?",
    options: [
      "To increase the total amount of documentation",
      "To demonstrate that controls reduce risk from an unacceptable to an acceptable level",
      "To justify the cost of safety equipment to the client",
      "To show that the inherent risk is always extreme",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The inherent risk (before controls) establishes the baseline hazard level. The residual risk (after controls) shows the effect of the control measures. Comparing the two demonstrates that the controls are effective and that the residual risk is acceptable. See Section 6.4.",
    feedbackIncorrect:
      "Documenting both levels shows the effectiveness of the control measures. If inherent risk is extreme and residual risk is low, the controls are demonstrably effective. If residual risk remains high, additional controls are needed. Review Section 6.4.",
  },
  {
    id: 16,
    question:
      "Which of the following is an example of an engineering control for laser safety?",
    options: [
      "A written operating procedure for the laser operator",
      "A beam stop that physically blocks beams from entering the audience area",
      "A safety briefing for crew members before the show",
      "A warning sign at the entrance to the venue",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A beam stop is a physical barrier that prevents beams from reaching hazardous positions regardless of human behaviour. Written procedures, briefings, and signs are administrative controls. Engineering controls are preferred because they do not rely on people following rules. See Section 6.5.",
    feedbackIncorrect:
      "Engineering controls are physical measures that reduce risk without relying on human behaviour. Beam stops, interlocks, shutters, and scan-fail safeguards are all engineering controls. Procedures, briefings, and signs are administrative controls. Review Section 6.5.",
  },
  {
    id: 17,
    question:
      "A laser display operator discovers that the DSR was prepared for a rehearsal but the show content has changed significantly since then. What should happen?",
    options: [
      "The show can proceed because a DSR exists",
      "The DSR must be revised to reflect the current show content before the display operates",
      "The operator should note the changes verbally and proceed",
      "The original DSR remains valid as long as the same equipment is used",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The DSR must be a living document that reflects current conditions. Significant changes to show content may alter beam trajectories, scan speeds, dwell times, and exposure levels. The DSR must be updated and the safety analysis verified before the modified display operates. See Section 6.2.",
    feedbackIncorrect:
      "A DSR for a rehearsal may not be valid for a modified performance. Changed show content can alter beam directions, scan velocities, and exposure levels. The DSR must be revised to reflect current conditions. Review Section 6.2 on the DSR as a living document.",
  },
  {
    id: 18,
    question:
      "What is the role of near-miss reporting in the risk management cycle?",
    options: [
      "Near-miss reporting is optional and only for incidents causing injury",
      "Near-miss reports identify systemic risks before injuries occur, enabling preventive action",
      "Near-miss reporting is only required by the regulator, not the standard",
      "Near-miss reports are only useful for insurance purposes",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Near-misses are leading indicators of systemic risks. They reveal hazards and control weaknesses that could result in actual harm under slightly different circumstances. Reporting and investigating near-misses enables preventive action before injuries occur. See Section 6.8.",
    feedbackIncorrect:
      "Near-miss reporting is a proactive safety tool, not a reactive one. By investigating events that almost caused harm, operators can identify and fix systemic weaknesses before actual injuries occur. Review Section 6.8 on near-miss reporting.",
  },
  {
    id: 19,
    question:
      "Which hazard type must the LSO consider that is NOT directly related to the laser beam itself?",
    options: [
      "Specular reflection from mirrors",
      "Diffuse reflection from surfaces",
      "Electrical hazards from high-voltage power supplies inside projectors",
      "Direct intrabeam exposure to the eye",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Electrical hazards from high-voltage power supplies are non-beam hazards that the LSO must identify. Class 4 projectors may contain power supplies operating at several hundred volts, presenting shock and electrocution risks during setup, maintenance, and fault-finding. See Section 6.3.",
    feedbackIncorrect:
      "Specular reflection, diffuse reflection, and direct intrabeam exposure are all beam hazards. Electrical hazards from the projector's internal power supply are a non-beam hazard that must still be assessed. Review Section 6.3 on comprehensive hazard identification.",
  },
  {
    id: 20,
    question:
      "How often should an LSO review their standard risk assessment templates, according to best practice?",
    options: [
      "Only when required by a regulatory audit",
      "At least annually, incorporating lessons from experience, industry publications, and standard updates",
      "Every five years when the standard is revised",
      "Templates never need updating once they are approved",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Best practice is to review risk assessment templates at least annually. The industry evolves with new equipment, techniques, failure modes, and regulatory changes. Incorporating lessons from experience and industry-wide incident data keeps risk assessments current and effective. See Section 6.8.",
    feedbackIncorrect:
      "Risk assessment templates should be reviewed at least annually to incorporate new knowledge. The industry constantly evolves, and templates that are not updated become outdated and may miss newly identified hazards. Review Section 6.8 on continuous improvement.",
  },
];
