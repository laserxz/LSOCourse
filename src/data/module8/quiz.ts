import { QuizQuestion } from "@/types";

/** Full question bank for Module 8. The quiz draws a random subset each attempt. */
export const module8Quiz: QuizQuestion[] = [
  {
    id: 1,
    question:
      "According to AS/NZS IEC 60825.3:2022, contingency plans for foreseeable failure scenarios must be included in which document?",
    options: [
      "The venue hire agreement",
      "The event insurance policy",
      "The Display Safety Report (DSR)",
      "The equipment manufacturer's manual",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The standard requires that the Display Safety Report include contingency plans for foreseeable failure scenarios. This is a mandatory element of the DSR, not an optional appendix. See Section 8.1.",
    feedbackIncorrect:
      "Contingency plans must be included in the Display Safety Report (DSR). The standard explicitly requires this as part of the safety documentation. While other documents may reference safety, the DSR is the authoritative document for laser display contingency planning. Refer to Section 8.1.",
  },
  {
    id: 2,
    question:
      "Why is scanner failure considered one of the most critical failure modes in a laser display?",
    options: [
      "Because scanners are the most expensive component to replace",
      "Because a stalled scanner causes the beam to become stationary, concentrating all output power on a single point",
      "Because scanner failure causes the projector to increase its output power",
      "Because scanners produce audible noise that disturbs the audience",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. When a galvanometer scanner fails or stalls, the beam stops moving and becomes stationary. This concentrates the laser's full output power on a single point, creating an extreme hazard that can cause eye injury in microseconds. See Section 8.2.",
    feedbackIncorrect:
      "Scanner failure is critical because a stalled scanner causes the beam to become stationary, concentrating all output power at a single point. A stationary Class 4 beam can deliver a hazardous exposure in microseconds. This is why scanner-fail-safe (SFS) systems are essential. Refer to Section 8.2.",
  },
  {
    id: 3,
    question:
      "What is the danger of a partial power failure during a laser display?",
    options: [
      "The audience may demand a refund",
      "The laser projector may restart automatically when power returns, firing beams before the LSO can verify safe conditions",
      "Partial power causes lasers to emit infrared radiation instead of visible light",
      "The projector will operate at half power, which is always safe",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A partial power failure is dangerous because when power is restored, laser projectors may restart automatically and emit beams before the LSO has had the opportunity to verify that conditions are safe. The contingency plan must address this auto-restart scenario. See Section 8.2.",
    feedbackIncorrect:
      "The primary danger of partial power failure is that projectors may automatically restart when power returns, emitting beams before the LSO can verify safe conditions. This is a specific scenario that the contingency plan must address. Refer to Section 8.2.",
  },
  {
    id: 4,
    question:
      "In the emergency response protocol, what is the correct sequence of actions following a suspected laser safety incident?",
    options: [
      "Assess, Report, Stop, Isolate",
      "Report, Stop, Assess, Isolate",
      "Stop, Isolate, Assess, Report",
      "Isolate, Stop, Report, Assess",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The protocol follows a logical sequence: Stop (terminate all laser output), Isolate (prevent restart), Assess (determine what happened and whether resumption is safe), Report (notify appropriate parties and document). See Section 8.3.",
    feedbackIncorrect:
      "The correct sequence is Stop, Isolate, Assess, Report. First terminate laser output, then prevent restart, then assess the situation, then report. This sequence prioritises immediately eliminating the hazard before anything else. Refer to Section 8.3.",
  },
  {
    id: 5,
    question:
      "After activating an emergency stop, what must the LSO do before allowing anyone to re-energise the laser system?",
    options: [
      "Wait at least 15 minutes for the laser to cool down",
      "Engage lockout devices or remove key switches to prevent inadvertent restart, then complete a full assessment",
      "Contact the equipment manufacturer for permission to restart",
      "Have the audience evacuate the venue completely",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. After stopping the laser, the LSO must isolate the system by engaging lockout devices, removing key switches, or physically disconnecting power. The system must remain isolated until the LSO has completed a full assessment and explicitly authorised restart. See Section 8.3.",
    feedbackIncorrect:
      "After an e-stop, the LSO must isolate the system (lockout devices, key switch removal, or physical disconnection) to prevent inadvertent restart. No one should be able to re-energise the system without the LSO's explicit authorisation following a complete assessment. Refer to Section 8.3.",
  },
  {
    id: 6,
    question:
      "Why does a person who has sustained a laser retinal burn typically not feel pain at the time of injury?",
    options: [
      "Because the laser energy is too low to stimulate nerve endings",
      "Because the exposure duration is too short for pain signals to transmit",
      "Because the retina has no pain receptors",
      "Because the aversion response prevents the person from noticing",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The retina has no pain receptors. A person who sustains a retinal burn from laser exposure will not feel pain at the point of injury. They may notice visual symptoms such as afterimages, blind spots, or distorted vision, but will not experience pain. See Section 8.4.",
    feedbackIncorrect:
      "The retina has no pain receptors. This means retinal laser injury is painless at the time it occurs. The affected person may report visual symptoms — afterimages, blind spots, distortion — but not pain. This is why any report of visual disturbance during a laser display must be taken seriously. Refer to Section 8.4.",
  },
  {
    id: 7,
    question:
      "What is the purpose of the Amsler grid in the context of laser eye injury response?",
    options: [
      "To measure the optical density of laser safety eyewear",
      "To calculate the Maximum Permissible Exposure for a given wavelength",
      "To identify visual field defects that may indicate retinal damage",
      "To determine the divergence of a laser beam",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The Amsler grid is a diagnostic screening tool consisting of evenly spaced lines with a central fixation point. If lines appear wavy, distorted, or missing when viewed monocularly, this may indicate macular damage and warrants immediate medical referral. See Section 8.4.",
    feedbackIncorrect:
      "The Amsler grid is used to identify visual field defects that may indicate retinal damage. The person covers one eye and looks at the grid's centre point. Wavy, distorted, or missing lines suggest macular damage. It is a screening tool, not a definitive diagnostic, but it can identify cases requiring urgent ophthalmological assessment. Refer to Section 8.4.",
  },
  {
    id: 8,
    question:
      "What immediate first aid should be provided to a person with suspected laser eye injury?",
    options: [
      "Flush the eyes with water and apply cold compresses",
      "Cover both eyes, keep the person calm, and transport to an ophthalmologist immediately",
      "Have the person look at a bright light to test if the eye is still functional",
      "Apply antibiotic eye drops and monitor for 24 hours",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Both eyes should be covered to reduce eye movement (the uninjured eye's movements cause the injured eye to move too), the person should be kept calm, and they must be transported to an ophthalmologist or emergency department as soon as possible. Time is critical. See Section 8.4.",
    feedbackIncorrect:
      "The correct first aid for suspected laser eye injury is to cover both eyes (to reduce eye movement), keep the person calm, and transport them to an ophthalmologist immediately. Do not flush eyes, apply drops, or test vision with bright lights. Time is critical for treatment. Refer to Section 8.4.",
  },
  {
    id: 9,
    question:
      "Which of the following information must the LSO provide to the treating ophthalmologist after a laser exposure incident?",
    options: [
      "The purchase price and warranty status of the laser equipment",
      "The wavelength, estimated power, exposure duration, distance, and type of exposure (direct or reflected)",
      "The name and contact details of the equipment manufacturer",
      "The serial numbers of all equipment used at the event",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The ophthalmologist needs specific technical information to assess the likely injury mechanism: wavelength(s), estimated power or irradiance, exposure duration, distance from the source, and whether the exposure was direct beam or reflection. The LSO should have a pre-prepared information sheet for this purpose. See Section 8.4.",
    feedbackIncorrect:
      "The treating clinician needs specific exposure parameters: wavelength(s), estimated power, exposure duration, distance from source, and whether the exposure was direct or reflected. This information helps determine the injury mechanism and appropriate treatment. The LSO should prepare this information in advance. Refer to Section 8.4.",
  },
  {
    id: 10,
    question:
      "Under Australian WHS legislation, a laser eye injury resulting in permanent vision impairment is classified as what type of incident?",
    options: [
      "A minor workplace injury requiring internal documentation only",
      "A notifiable incident requiring immediate notification to the regulator",
      "An equipment failure requiring manufacturer notification",
      "A near-miss requiring documentation in the post-show review",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A laser eye injury resulting in permanent vision impairment is a notifiable incident under WHS legislation in all Australian jurisdictions. The PCBU must notify the regulator as soon as they become aware of the incident, and the site must be preserved. See Section 8.5.",
    feedbackIncorrect:
      "Permanent vision impairment from laser exposure is a notifiable incident under all Australian WHS legislation. The person conducting the business or undertaking (PCBU) must notify the regulator immediately, and the site must not be disturbed until an inspector attends or gives permission. Refer to Section 8.5.",
  },
  {
    id: 11,
    question:
      "What is the purpose of root cause analysis in a laser incident investigation?",
    options: [
      "To determine who is personally at fault and assign blame",
      "To calculate the financial cost of the incident for insurance purposes",
      "To identify not just what happened, but why it happened, so the underlying issue can be corrected",
      "To generate a report for the event promoter's marketing department",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Root cause analysis looks beyond the immediate event to understand why it happened. A scanner failure is what happened; the root cause might be inadequate maintenance, overdue testing, or equipment not rated for the conditions. Addressing root causes prevents recurrence. See Section 8.5.",
    feedbackIncorrect:
      "Root cause analysis aims to understand why an incident happened, not just what happened. This goes beyond the immediate technical failure to examine systemic factors — inadequate testing, overdue maintenance, insufficient procedures — so that corrective actions address the underlying cause. Refer to Section 8.5.",
  },
  {
    id: 12,
    question:
      "After a laser incident, what obligation does the investigation create for future operations?",
    options: [
      "The LSO must avoid using the same venue again",
      "The LSO must apply corrective actions across all future operations, not just the venue where the incident occurred",
      "The LSO must replace all equipment used at the time of the incident",
      "The LSO must increase insurance coverage before the next show",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Under WHS obligations, if an investigation reveals a systemic issue, the corrective action must be applied across all future operations. A gap identified at one venue likely exists in the general approach and must be addressed universally. See Section 8.5.",
    feedbackIncorrect:
      "Investigation findings must be applied across all future operations, not just the venue where the incident occurred. If the investigation reveals a systemic issue — such as inadequate testing procedures — that issue exists in the general approach and must be corrected universally. Refer to Section 8.5.",
  },
  {
    id: 13,
    question:
      "Why should the internal notification chain during a laser emergency start with specific, detailed information rather than vague statements?",
    options: [
      "Because vague statements are considered unprofessional in the events industry",
      "Because specific information enables appropriate and immediate response actions",
      "Because the standard requires a minimum word count in emergency communications",
      "Because venue management will not respond to informal communications",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Specific information — what happened, what has been done, what needs to happen next — enables each person in the chain to take appropriate and immediate action. Vague communications like 'we have a problem with the lasers' cause confusion and delayed responses. See Section 8.6.",
    feedbackIncorrect:
      "Specific, detailed communications enable appropriate and immediate response. Each person in the notification chain needs to know what happened, what has already been done, and what they need to do next. Vague messages cause confusion and delayed responses. Refer to Section 8.6.",
  },
  {
    id: 14,
    question:
      "When should the LSO establish coordination with the venue's operations team for emergency response?",
    options: [
      "During the emergency itself, as the situation dictates",
      "During the post-show review",
      "During the pre-show planning phase, before the event",
      "Only after an incident has occurred at the venue previously",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The relationship with the venue's operations team must be established during pre-show planning, not during an emergency. The LSO needs to know who has authority over venue-level responses such as evacuations, emergency lighting, and PA announcements before they might be needed. See Section 8.6.",
    feedbackIncorrect:
      "Coordination with venue operations must be established during pre-show planning, well before any emergency occurs. During an emergency is not the time to discover who has authority over venue-level responses. Refer to Section 8.6.",
  },
  {
    id: 15,
    question:
      "How should the audience be managed if a laser display is stopped due to a safety incident?",
    options: [
      "Immediately announce the specific nature of the laser incident over the PA",
      "Evacuate the entire venue as a precaution in all cases",
      "Coordinate calm, clear communication with front-of-house staff without causing unnecessary panic",
      "Allow the audience to self-manage while the LSO focuses on the equipment",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Audience management requires coordination with front-of-house staff and security. The audience does not necessarily need to know a laser incident has occurred. Communication should be calm, clear, and authoritative, using pre-agreed messaging to avoid unnecessary panic. See Section 8.6.",
    feedbackIncorrect:
      "Audience management should involve calm, coordinated communication with front-of-house staff. Announcing specific laser incident details may cause panic, and leaving the audience unmanaged creates risk. The messaging approach should be pre-agreed with the venue and event team. Refer to Section 8.6.",
  },
  {
    id: 16,
    question:
      "What is a near-miss in the context of laser display safety?",
    options: [
      "An incident where the laser narrowly missed hitting the target effect",
      "A situation where a laser exposure almost occurred but did not result in injury",
      "A show where the audience was slightly smaller than expected",
      "An equipment failure that was repaired before the show started",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A near-miss is any event that could have resulted in a laser exposure but did not — such as a beam briefly sweeping too low, a crew member almost entering an exclusion zone, or a scanner hesitating before recovering. Near-misses are valuable learning opportunities. See Section 8.7.",
    feedbackIncorrect:
      "A near-miss is an event that could have resulted in a laser exposure or injury but did not. Examples include beams briefly deviating from planned paths, people almost entering exclusion zones, or equipment behaving erratically before recovering. These must be reported and documented. Refer to Section 8.7.",
  },
  {
    id: 17,
    question:
      "Why is near-miss reporting considered more valuable than incident reporting?",
    options: [
      "Because near-misses are more common and generate better statistics",
      "Because near-misses reveal hazards before they cause harm, allowing preventive action",
      "Because near-miss reports are not subject to regulatory scrutiny",
      "Because near-misses do not require investigation or corrective action",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Near-misses reveal hazards before they cause harm, providing an opportunity for preventive action. An unreported near-miss is a missed opportunity to prevent a real incident. The LSO must cultivate a blame-free culture where near-misses are reported openly. See Section 8.7.",
    feedbackIncorrect:
      "Near-miss reporting is valuable because it reveals hazards before they cause harm. Each near-miss is an opportunity to identify and correct a safety gap before it results in an actual injury. A culture of blame-free near-miss reporting is essential. Refer to Section 8.7.",
  },
  {
    id: 18,
    question:
      "After an incident investigation identifies that a particular software version has an unrecognised failure mode, what must the LSO do?",
    options: [
      "Avoid that venue in future and continue using the software elsewhere",
      "Update procedures, share the finding with the industry, and revise the risk assessment for all future operations",
      "Continue using the software but increase monitoring during shows",
      "Report the issue to the software manufacturer and wait for a patch before operating again",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Identifying a new failure mode requires updating procedures, sharing the lesson with the broader community, and revising risk assessments for all future operations. A systemic finding must produce a systemic response. See Section 8.7.",
    feedbackIncorrect:
      "When a new failure mode is identified, the LSO must update procedures, share the finding with the industry, and revise risk assessments across all future operations. Limiting the response to one venue or simply increasing monitoring does not address the systemic risk. Refer to Section 8.7.",
  },
  {
    id: 19,
    question:
      "What evidence should the LSO preserve immediately after a laser exposure incident?",
    options: [
      "Only the Display Safety Report and the injured person's contact details",
      "The laser equipment in its current state, show content, witness statements, and photographs of the setup",
      "Only photographs of the venue entrance and exit locations",
      "The event contract and the promoter's correspondence",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The LSO must preserve the laser equipment in its current state without modification, the show content or cue list that was running, witness statements, and photographs of the equipment setup and the exposure location. This evidence may be required by regulators, insurers, and legal proceedings. See Section 8.4.",
    feedbackIncorrect:
      "Evidence preservation requires securing the equipment in its current state, preserving the show content, collecting witness statements, and photographing the setup and exposure location. This comprehensive evidence package is essential for regulatory, insurance, and legal purposes. Refer to Section 8.4.",
  },
  {
    id: 20,
    question:
      "A risk assessment that is never revised in light of operational experience becomes what, over time?",
    options: [
      "More conservative and therefore safer",
      "A historical document with archival value",
      "Progressively less accurate as it fails to reflect real-world findings",
      "A legally binding document that cannot be changed",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. A risk assessment that is not updated based on incidents, near-misses, and operational experience becomes progressively less accurate. It no longer reflects the real hazards and the effectiveness of control measures. Continuous revision is essential to maintaining its validity. See Section 8.7.",
    feedbackIncorrect:
      "An unrevised risk assessment becomes progressively less accurate over time. Real-world experience reveals hazards, failure modes, and control measure gaps that the original assessment may not have anticipated. Every incident and significant near-miss should trigger a review of the risk assessment. Refer to Section 8.7.",
  },
];
