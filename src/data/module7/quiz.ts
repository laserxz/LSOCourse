import { QuizQuestion } from "@/types";

/** Full question bank for Module 7. The quiz draws a random subset each attempt. */
export const module7Quiz: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Under AS/NZS IEC 60825.3:2022, who has the absolute authority to stop a laser display at any time during operation?",
    options: [
      "The event producer",
      "The venue manager",
      "The Laser Safety Officer (LSO)",
      "The Laser Product Assessor (LPA)",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The LSO has absolute authority over laser safety decisions during operation, including the authority to stop the display at any time. No person on site may override this decision. See Section 7.1.",
    feedbackIncorrect:
      "The LSO has absolute authority to stop a laser display. Neither the event producer, venue manager, nor any other person may override the LSO's safety decisions. This authority is defined in the standard and must be exercised without hesitation when a safety risk is identified. Refer to Section 7.1.",
  },
  {
    id: 2,
    question:
      "What is the primary role of the Laser Product Assessor (LPA) in the personnel hierarchy?",
    options: [
      "To operate the laser equipment during the show",
      "To independently review and endorse the Display Safety Report",
      "To manage the event schedule and creative direction",
      "To supervise the pack-down of laser equipment",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The LPA is an independent expert who reviews and endorses the Display Safety Report (DSR), confirming that the safety plan meets the requirements of the standard. See Section 7.2.",
    feedbackIncorrect:
      "The LPA's primary role is to independently review and endorse the Display Safety Report. They provide expert assessment of whether the LSO's safety plan is adequate. The LPA does not typically operate equipment or manage events. Refer to Section 7.2.",
  },
  {
    id: 3,
    question:
      "Why should the LPA and the LSO ideally be different people?",
    options: [
      "Because the standard prohibits one person from holding both roles",
      "To maintain the independence of the safety assessment",
      "Because the LPA must be present at the venue and the LSO must not be",
      "Because the LPA requires different qualifications than the LSO",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Having different people in the LPA and LSO roles maintains the independence of the assessment. The LPA provides an independent check on the LSO's safety plan, which is more meaningful when the reviewer is not also the author. See Section 7.2.",
    feedbackIncorrect:
      "The key reason is to maintain independence of the safety assessment. If the same person writes the DSR (as LSO) and reviews it (as LPA), the review loses its value as an independent check. The standard recommends separation of these roles for this reason. Refer to Section 7.2.",
  },
  {
    id: 4,
    question:
      "What is the first step in the pre-show planning process for a laser display?",
    options: [
      "Preparing the Display Safety Report",
      "Calculating the Nominal Hazard Zones",
      "Conducting a venue assessment",
      "Submitting the plan to the LPA for review",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Venue assessment is the starting point for pre-show planning. The LSO must evaluate the venue's physical characteristics before equipment selection, beam geometry planning, or zone calculations can proceed. See Section 7.3.",
    feedbackIncorrect:
      "The venue assessment must come first, because all subsequent planning — equipment selection, beam geometry, zone calculations, and the DSR — depends on understanding the physical characteristics of the venue. Refer to Section 7.3.",
  },
  {
    id: 5,
    question:
      "During setup and alignment, what is the primary reason for using reduced-power alignment?",
    options: [
      "To conserve the laser source's operational lifespan",
      "To reduce the hazard to personnel during beam path adjustment",
      "To comply with noise regulations at the venue",
      "To produce more visible beams in ambient light",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Reduced-power alignment minimises the hazard to personnel while beam paths are being adjusted. At full power, a misaligned beam could cause immediate eye injury. Reduced power gives a margin of safety during this high-risk phase. See Section 7.4.",
    feedbackIncorrect:
      "The primary purpose of reduced-power alignment is to minimise the hazard to personnel. During alignment, beams are being moved and adjusted, making accidental exposure more likely. Operating at reduced power reduces the severity of any accidental exposure. Refer to Section 7.4.",
  },
  {
    id: 6,
    question:
      "When should beam path verification be performed during setup?",
    options: [
      "Only with static test patterns at reduced power",
      "With the full show content running, not just static patterns",
      "Only during the soundcheck with performers on stage",
      "After the venue has opened to the audience",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Beam path verification must be performed with the full show content running, because dynamic effects may produce beam paths that are not evident in static test patterns. A beam that appears safe in a static alignment could sweep into a hazardous area during animated content. See Section 7.4.",
    feedbackIncorrect:
      "Beam path verification must include the full show content, not just static test patterns. Dynamic effects such as beam sweeps, animations, and colour changes may produce beam paths not visible during static alignment. Refer to Section 7.4.",
  },
  {
    id: 7,
    question:
      "An LSO observes a scanner malfunction causing a stationary beam during a live concert. What is the correct immediate action?",
    options: [
      "Wait to see if the scanner recovers within a few seconds",
      "Radio the laser operator and suggest reducing power",
      "Stop the laser display immediately",
      "Note it in the post-show incident review",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. A stationary beam from a scanner malfunction represents an immediate hazard. The LSO must stop the display immediately without waiting to see if the situation resolves itself. A stationary Class 3B or 4 beam can cause eye injury in a fraction of a second. See Section 7.5.",
    feedbackIncorrect:
      "A scanner malfunction causing a stationary beam is an immediate hazard requiring the LSO to stop the display without delay. Waiting, reducing power, or merely documenting the incident are all inadequate responses. A stationary Class 3B or 4 beam can cause permanent eye injury almost instantly. Refer to Section 7.5.",
  },
  {
    id: 8,
    question:
      "What communication method should the LSO establish as a backup in case the primary communication channel (radio/intercom) fails during a show?",
    options: [
      "Text messaging via mobile phone",
      "Pre-agreed hand signals",
      "Sending a crew member to relay the message",
      "Using the venue PA system",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Pre-agreed hand signals provide an immediate, reliable backup communication method that does not depend on electronic equipment. In a loud concert environment, visual signals can be the most effective backup. See Section 7.5.",
    feedbackIncorrect:
      "Pre-agreed hand signals are the recommended backup communication method. They are immediate, do not require electronic equipment, and can be effective in loud environments where verbal alternatives would fail. Refer to Section 7.5.",
  },
  {
    id: 9,
    question:
      "Which group of personnel requires the most extensive laser safety training?",
    options: [
      "Front-of-house security staff",
      "Stage performers",
      "Laser operators",
      "Audio engineers working near the stage",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Laser operators require the most extensive training because they directly control the laser equipment. They must understand the specific equipment, safety controls, interlocks, show content, exclusion zones, emergency procedures, and communication protocols. See Section 7.6.",
    feedbackIncorrect:
      "Laser operators require the most extensive training among all personnel categories. They must demonstrate competence in equipment operation, safety controls, emergency procedures, and communication protocols before being permitted to operate unsupervised. Refer to Section 7.6.",
  },
  {
    id: 10,
    question:
      "What is the minimum acceptable method for documenting crew safety briefings?",
    options: [
      "A verbal confirmation from the crew leader",
      "An email sent to crew after the event",
      "A sign-on sheet listing the briefing content and attendees",
      "A video recording of the briefing",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. A sign-on sheet with the briefing content listed is the minimum acceptable documentation. This creates a contemporaneous record of who was briefed, when, and what was covered. See Section 7.6.",
    feedbackIncorrect:
      "The minimum acceptable documentation is a sign-on sheet that lists both the briefing content and the attendees. Verbal confirmations and post-event emails do not constitute contemporaneous documentation. Refer to Section 7.6.",
  },
  {
    id: 11,
    question:
      "During the post-show shutdown sequence, when should warning signs be removed?",
    options: [
      "As soon as the last laser effect has played",
      "After projectors are placed in standby mode",
      "Only after all laser sources have been confirmed as fully powered down",
      "Warning signs should never be removed; they remain permanently",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Warning signs must remain in place until the LSO has personally verified that every projector has been fully powered down — not merely placed in standby. This prevents people from entering a laser hazard area while equipment could still be energised. See Section 7.7.",
    feedbackIncorrect:
      "Warning signs should only be removed after all laser sources have been confirmed as fully powered down by the LSO. Standby mode is not sufficient — the projectors must be completely de-energised. Refer to Section 7.7.",
  },
  {
    id: 12,
    question:
      "Why should the LSO conduct an incident review after every show, even if no incidents occurred?",
    options: [
      "Because the standard mandates a written report after every performance",
      "To identify near-misses and unanticipated situations that could inform future safety planning",
      "To calculate the total laser operating hours for equipment maintenance",
      "To generate content for the event promoter's post-show report",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A post-show review identifies near-misses, unanticipated situations, and control measure performance issues while details are fresh. These findings improve safety planning for future shows. See Section 7.7.",
    feedbackIncorrect:
      "The post-show incident review, even when no incidents occurred, identifies near-misses and unanticipated situations that can inform future safety planning. This review should be conducted immediately after the show while details are fresh. Refer to Section 7.7.",
  },
  {
    id: 13,
    question:
      "How long should LSO show documentation be retained according to best practice?",
    options: [
      "Until the next show at the same venue",
      "One year",
      "At least seven years, consistent with WHS record-keeping obligations",
      "Indefinitely, with no disposal permitted",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. While the standard does not specify an exact retention period, best practice is to retain records for at least seven years, consistent with general workplace health and safety record-keeping obligations in Australia and New Zealand. See Section 7.7.",
    feedbackIncorrect:
      "Best practice is to retain documentation for at least seven years, which aligns with general WHS record-keeping obligations. The standard does not mandate a specific period, but shorter retention periods risk the unavailability of records if questions arise later. Refer to Section 7.7.",
  },
  {
    id: 14,
    question:
      "When is LPA review of a Display Safety Report required?",
    options: [
      "Only for outdoor displays",
      "Only for displays using Class 4 lasers",
      "For displays involving audience scanning or beams directed into occupied areas",
      "Only when the venue capacity exceeds 1,000 people",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. LPA review is required for displays involving audience scanning, effects directing beams into areas accessible to people, or any configuration where the Nominal Hazard Zone extends into occupied areas. In practice, most professional entertainment displays require LPA review. See Section 7.8.",
    feedbackIncorrect:
      "LPA review is required for displays involving audience scanning or any configuration where beams are directed into areas accessible to people. The requirement is based on the nature of the display and the hazard configuration, not the venue capacity or laser class alone. Refer to Section 7.8.",
  },
  {
    id: 15,
    question:
      "What should the LSO do if the LPA identifies deficiencies in the Display Safety Report?",
    options: [
      "Proceed with the show and note the deficiencies for next time",
      "Address the deficiencies before the display proceeds",
      "Appeal the LPA's findings to the Responsible Person",
      "Hire a different LPA for a second opinion",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The LSO must address all deficiencies identified by the LPA before the display can proceed. This may involve recalculating zones, adding control measures, or modifying the show content. The relationship is collaborative, not adversarial. See Section 7.8.",
    feedbackIncorrect:
      "All deficiencies identified by the LPA must be addressed before the display proceeds. The LSO should view LPA feedback as a valuable safety improvement, not a bureaucratic obstacle. Proceeding without addressing deficiencies would violate the standard. Refer to Section 7.8.",
  },
  {
    id: 16,
    question:
      "A laser operator disagrees with the LSO's instruction to reduce the power of an effect during a live show. What is the correct course of action?",
    options: [
      "The operator should follow the LSO's instruction without question on safety matters",
      "The operator should consult the event producer for a final decision",
      "The operator should use their own judgement as they are closest to the equipment",
      "The issue should be deferred until the post-show review",
    ],
    correctIndex: 0,
    feedbackCorrect:
      "Correct. The laser operator must follow the LSO's instructions on safety matters without question, even if those instructions conflict with the creative intent. The LSO's safety authority takes precedence. See Section 7.2.",
    feedbackIncorrect:
      "The operator must follow the LSO's safety instructions without question. The LSO's authority on safety matters is absolute and takes precedence over creative considerations, the event producer's wishes, or the operator's own judgement. Refer to Section 7.2.",
  },
  {
    id: 17,
    question:
      "What factors must the LSO evaluate during a venue assessment for an outdoor laser display that would not apply to an indoor venue?",
    options: [
      "Ceiling height and overhead structures",
      "Airspace considerations, proximity to roads and flight paths, and weather variables",
      "Emergency exit locations and audience seating geometry",
      "The presence of specular reflective surfaces on stage",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Outdoor venues introduce additional factors including airspace considerations, proximity to roads and flight paths, and weather variables such as wind, rain, and fog. These factors are not relevant to indoor venues. See Section 7.3.",
    feedbackIncorrect:
      "Outdoor displays require the LSO to consider airspace (including proximity to flight paths), roads, and weather variables — factors that do not apply indoors. Ceiling height and reflective surfaces are relevant to indoor venues. Refer to Section 7.3.",
  },
  {
    id: 18,
    question:
      "What specific information must performers receive in their laser safety briefing?",
    options: [
      "The technical specifications of each laser projector being used",
      "How to operate the laser equipment in case of operator absence",
      "Which stage areas are safe, what normal effects look like, and the instruction to never look directly into a beam",
      "The full contents of the Display Safety Report",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Performers need practical, role-specific information: which stage areas are safe, what the laser effects will look like during normal operation (so they can identify malfunctions), and the critical instruction to never look directly into a laser beam. See Section 7.6.",
    feedbackIncorrect:
      "Performer briefings should be practical and specific to their situation: safe and unsafe stage areas, what normal effects look like versus malfunctions, and the instruction to never look directly into a beam. They do not need technical equipment specifications or the full DSR. Refer to Section 7.6.",
  },
  {
    id: 19,
    question:
      "For a multi-day festival, what must the LSO ensure when laser equipment remains rigged overnight?",
    options: [
      "That a security guard is stationed next to each projector",
      "That projectors are physically secured against unauthorised access with key switches or lockout devices engaged",
      "That the equipment is fully de-rigged and stored in a locked container each night",
      "That the equipment is left powered on in standby mode for quick startup",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. When equipment remains rigged overnight, projectors must be physically secured against unauthorised access, with key switches or lockout devices engaged and access to the control position restricted. This prevents anyone from energising the lasers without the LSO present. See Section 7.7.",
    feedbackIncorrect:
      "The LSO must ensure projectors are physically secured with key switches or lockout devices engaged, and access to the control position is restricted. Full de-rigging is not always practical, and leaving equipment in standby creates a risk of unauthorised activation. Refer to Section 7.7.",
  },
  {
    id: 20,
    question:
      "After the LPA has endorsed a Display Safety Report, the LSO decides to add two additional projector positions not in the original plan. What should the LSO do?",
    options: [
      "Proceed with the additional positions since the overall safety approach has already been endorsed",
      "Inform the LPA by email but proceed without waiting for a response",
      "Assess whether the change is significant enough to require re-submission to the LPA for re-assessment",
      "Cancel the additional positions since any change invalidates the endorsement",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The LSO must use professional judgement to determine whether a change is significant enough to warrant re-assessment. Adding two new projector positions would typically be considered a significant change, as it introduces new beam paths and potentially new hazard zones. See Section 7.8.",
    feedbackIncorrect:
      "The LPA endorsement is specific to the display as described in the DSR. If significant changes are made, the LSO must assess whether re-submission to the LPA is required. Adding new projector positions would generally qualify as a significant change requiring re-assessment. Refer to Section 7.8.",
  },
];
