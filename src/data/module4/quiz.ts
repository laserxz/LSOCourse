import { QuizQuestion } from "@/types";

export const module4Quiz: QuizQuestion[] = [
  {
    id: 1,
    question:
      "In the hierarchy of controls, why are engineering controls preferred over administrative controls for laser safety?",
    options: [
      "Engineering controls are cheaper to implement",
      "Engineering controls work independently of human behaviour and cannot be forgotten or ignored",
      "Administrative controls are not permitted by the standard",
      "Engineering controls are easier to set up at temporary venues",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Engineering controls work automatically and do not rely on human attention, training, or compliance. A hardware interlock works every time; a procedure depends on people following it.",
    feedbackIncorrect:
      "Engineering controls are preferred because they work independently of human behaviour — they cannot be forgotten, ignored, or performed incorrectly. A hardware interlock works every time without training. See Section 4.1.",
  },
  {
    id: 2,
    question:
      "What is the most critical requirement for an emergency stop (E-stop) circuit?",
    options: [
      "It must be connected through the control software for fastest response",
      "It must be hardwired directly to the laser power supply or shutter, bypassing all software",
      "It must be wireless for maximum flexibility in positioning",
      "It must gradually fade the beam over 2 seconds to avoid audience disturbance",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The E-stop must be hardwired — not routed through software. If the control computer crashes, a software-routed E-stop becomes useless. The hardwired connection ensures the beam stops regardless of software state.",
    feedbackIncorrect:
      "The E-stop must be hardwired directly to the laser power supply or shutter, bypassing all software layers. Software can crash or freeze — a hardwired E-stop works regardless. See Section 4.2.",
  },
  {
    id: 3,
    question:
      "E-stop circuits must be 'fail-safe'. What does this mean in practice?",
    options: [
      "The system restarts automatically after the E-stop is released",
      "If the E-stop wiring is cut or disconnected, the system defaults to beam-off",
      "The E-stop only works when the software is running",
      "The E-stop can only be activated by the LSO",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Fail-safe means the system defaults to the safe state (beam off) on any fault — including cut wires, disconnected cables, or power loss. This is achieved using normally-closed contacts.",
    feedbackIncorrect:
      "Fail-safe means the system defaults to beam-off on any fault. Using normally-closed contacts, the circuit is complete (beam enabled) only when the wiring is intact and the E-stop is not pressed. Any interruption = beam off. See Section 4.2.",
  },
  {
    id: 4,
    question:
      "What is the difference between a defeatable and a non-defeatable interlock?",
    options: [
      "Defeatable interlocks are less reliable than non-defeatable ones",
      "Non-defeatable interlocks can never be bypassed; defeatable interlocks can be temporarily overridden by an authorised person with strict conditions",
      "Defeatable interlocks are used outdoors; non-defeatable interlocks are used indoors",
      "There is no practical difference — the terms are interchangeable",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Non-defeatable interlocks always stop the laser when the access point is opened. Defeatable interlocks can be temporarily overridden by the LSO for alignment or maintenance, with alternative safety measures in place.",
    feedbackIncorrect:
      "Non-defeatable interlocks cannot be bypassed under any circumstances. Defeatable interlocks can be temporarily overridden by an authorised person (e.g., LSO) using a key or tool, with strict conditions and alternative safety measures. See Section 4.3.",
  },
  {
    id: 5,
    question:
      "Why must beam dumps for high-power (10 W+) Class 4 lasers be made of materials like anodised aluminium rather than painted wood or fabric?",
    options: [
      "Anodised aluminium is cheaper",
      "Wood and fabric may char, burn, or produce specular reflections that redirect the hazard",
      "The standard prohibits the use of any non-metal materials in laser venues",
      "Aluminium produces better visual effects when hit by a laser beam",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Ordinary materials can char, burn, or — if they have any glossy finish — produce specular reflections that redirect the beam into uncontrolled areas. Purpose-built beam dumps safely absorb the energy with heat dissipation.",
    feedbackIncorrect:
      "High-power laser beams can char, burn, or ignite ordinary materials. Glossy or painted surfaces may produce specular reflections that redirect the hazard. Proper beam dumps use absorptive materials with adequate heat dissipation. See Section 4.4.",
  },
  {
    id: 6,
    question:
      "What is the purpose of a scan-fail safeguard (SFS)?",
    options: [
      "To prevent the scanner from moving too fast",
      "To detect scanner failure and shut off the beam before a hazardous static exposure can occur",
      "To improve the visual quality of scanned patterns",
      "To automatically restart the scanner after a power interruption",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. When a scanner fails, the beam stops moving and becomes a static hazard. The SFS detects this and shuts off the beam before the static exposure exceeds the MPE — typically within 10 milliseconds.",
    feedbackIncorrect:
      "The SFS monitors scanner operation and, if it detects a failure (scanner stopped or stuck), shuts off the beam before the resulting static exposure can exceed the MPE. This must happen very quickly — typically within 10 ms. See Section 4.5.",
  },
  {
    id: 7,
    question:
      "Why does the standard require a key switch on Class 3B and Class 4 laser projectors?",
    options: [
      "To make the projector more expensive and harder to steal",
      "To prevent unauthorised activation of the laser",
      "To provide a way to adjust the beam power",
      "To satisfy insurance requirements only",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The key switch prevents unauthorised activation. The key must be removable when the laser is not in use, ensuring only authorised personnel can enable the laser output.",
    feedbackIncorrect:
      "The key switch prevents unauthorised or accidental laser activation. Only a person with the key or access code can enable the laser. When not in use, the key is removed and secured. See Section 4.6.",
  },
  {
    id: 8,
    question:
      "During setup and alignment, the LSO should use which method to stop laser output temporarily?",
    options: [
      "Software blanking only (muting the output in the show software)",
      "The mechanical shutter — a physical barrier that blocks the beam path",
      "Covering the output aperture with tape",
      "Turning off the venue lighting so the beam is less visible",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The mechanical shutter provides a reliable physical beam block without powering down the laser source. Software blanking alone is not sufficient — it depends on the software functioning correctly.",
    feedbackIncorrect:
      "The mechanical shutter physically blocks the beam path and is independent of software. Software blanking depends on the control software functioning correctly, which is not guaranteed. Never cover the aperture with tape or other materials. See Section 4.6.",
  },
  {
    id: 9,
    question:
      "What is the difference between a hardware scan zone limit and a software scan zone limit?",
    options: [
      "Hardware limits are set by the manufacturer and cannot be changed",
      "Software limits are more reliable because they can be updated remotely",
      "Hardware limits are enforced by the projector firmware and cannot be exceeded by software commands; software limits can be accidentally overridden",
      "There is no difference — both are equally reliable",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Hardware scan zone limits are enforced at the firmware level — the scanners physically cannot exceed them regardless of software commands. Software limits can be accidentally overridden by programming errors.",
    feedbackIncorrect:
      "Hardware scan zone limits are enforced in the projector firmware — the beams physically cannot exceed them. Software limits depend on the control software and can be accidentally overridden by programming errors. Hardware limits are the safety-critical control. See Section 4.7.",
  },
  {
    id: 10,
    question:
      "The E-stop colour scheme required by IEC standards is:",
    options: [
      "Green button on white background",
      "Red button on yellow background",
      "Blue button on grey background",
      "Black button on red background",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Emergency stop actuators must be red on a yellow background, following IEC 60947-5-5. This colour combination is universally recognised as an emergency control.",
    feedbackIncorrect:
      "E-stops must be red on a yellow background per IEC 60947-5-5. This colour scheme is universally recognised and must be used on all emergency stop actuators. See Section 4.2.",
  },
  {
    id: 11,
    question:
      "Which of the following is a mandatory projector label required by IEC 60825-1?",
    options: [
      "The manufacturer's warranty terms",
      "The laser hazard warning symbol, laser class, maximum output power, and wavelength(s)",
      "The projector's serial number only",
      "The LSO's contact details",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. IEC 60825-1 requires the laser hazard warning symbol (starburst triangle), laser class designation, maximum output power, wavelength(s), and a DANGER or WARNING text panel on all Class 3B and Class 4 laser products.",
    feedbackIncorrect:
      "Required labels include: laser hazard warning symbol, laser class, maximum output power, wavelength(s), and DANGER (Class 4) or WARNING (Class 3B) text. These must be permanently affixed and visible during normal use. See Section 4.8.",
  },
  {
    id: 12,
    question:
      "Why must warning signs at controlled zone boundaries be supplemented with interlocks?",
    options: [
      "Warning signs are too expensive to maintain alone",
      "Warning signs inform people about the hazard but do not physically prevent access — interlocks enforce the safety boundary",
      "Interlocks are only needed if the venue has more than 100 people",
      "The standard only requires one or the other, not both",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Warning systems inform — interlocks enforce. A sign at a door tells people why they should not enter, but only an interlock prevents entry from causing a hazardous exposure. The standard requires both.",
    feedbackIncorrect:
      "Warning signs inform people about the hazard but cannot physically prevent them from entering. Interlocks enforce the safety boundary by automatically disabling the laser when an access point is opened. The standard requires both. See Section 4.8.",
  },
  {
    id: 13,
    question:
      "What should the LSO do if an engineering control cannot be verified during pre-show checks?",
    options: [
      "Proceed with the show and check it afterward",
      "Document that it was not checked and continue",
      "Fix the control, apply alternative measures, or do not operate the laser",
      "Ask the venue manager to sign a waiver",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. An unverified safety control is an unreliable control. If you cannot verify it, you must either fix it, implement alternative safety measures, or not operate the laser until it is resolved.",
    feedbackIncorrect:
      "You must never operate with an unverified safety control. Either fix the issue, apply alternative safety measures, or do not operate the laser. No amount of documentation or waivers substitutes for a functioning, verified engineering control. See Section 4.9.",
  },
  {
    id: 14,
    question:
      "A typical laser system activation sequence follows which order?",
    options: [
      "Software start → beam on → key switch → shutter open",
      "Key switch on → system initialisation → shutter open → laser source enabled → output active",
      "Laser source on → key switch → E-stop release → shutter open",
      "Shutter open → key switch → laser source on → software start",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The activation sequence is deliberately multi-step: key switch → initialisation → shutter open → source enabled → output active. Each step requires a deliberate action and each can be independently disabled.",
    feedbackIncorrect:
      "The correct activation sequence is: key switch on → system initialisation → shutter open → laser source enabled → output active. This multi-step approach prevents accidental emission. See Section 4.6.",
  },
  {
    id: 15,
    question:
      "What is the purpose of the start-up delay required between key switch activation and first laser emission?",
    options: [
      "To allow the laser source to warm up to operating temperature",
      "To allow personnel to clear the area and to provide an audible or visual warning",
      "To give the software time to load the show programming",
      "To test the scanner motors before beam emission begins",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The start-up delay (typically 3–5 seconds) allows personnel to clear the area and provides a warning that the laser is about to become active. Many projectors include a status LED or audible tone during this period.",
    feedbackIncorrect:
      "The start-up delay allows personnel to move away from the beam path and provides an audible or visual warning that the laser is about to emit. It is a safety feature, not a warm-up period. See Section 4.6.",
  },
  {
    id: 16,
    question:
      "For an entertainment laser installation with multiple E-stops, how should they be wired?",
    options: [
      "In parallel, so each E-stop operates independently",
      "In series, so any single E-stop can shut down the entire system",
      "Only one should be connected; the others are spares",
      "Through the show control software for central management",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Multiple E-stops connected in series ensure that pressing any single button breaks the circuit and shuts down the entire system. This provides maximum coverage across the installation.",
    feedbackIncorrect:
      "Multiple E-stops should be connected in series so that any single button can shut down the entire system. This ensures maximum safety coverage — the operator position, zone entry points, and any other critical locations all have immediate shutdown capability. See Section 4.2.",
  },
  {
    id: 17,
    question:
      "What must happen after an E-stop is released?",
    options: [
      "The laser must restart automatically to minimise show disruption",
      "The system must require a deliberate re-activation sequence — it must not restart automatically",
      "The LSO must physically reset each projector individually",
      "The venue power must be cycled before the laser can restart",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. After an E-stop is released, the system must not restart automatically. It must require a deliberate re-activation sequence to prevent unintended emission when the E-stop is cleared.",
    feedbackIncorrect:
      "The system must not restart automatically when the E-stop is released. Automatic restart could cause unexpected laser emission. A deliberate re-activation sequence is required. See Section 4.9.",
  },
  {
    id: 18,
    question:
      "When setting hardware scan zone limits for a projector aimed toward the audience area, the lowest point of the scan zone must be:",
    options: [
      "At audience head height for maximum visual impact",
      "Above the minimum vertical separation distance (3 metres above the highest occupied surface)",
      "1 metre above the stage floor",
      "At whatever height the show designer specifies",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The lowest point of the scan zone must be above the 3-metre minimum vertical separation distance measured from the highest occupied surface. This ensures beams cannot reach audience eye level even at maximum scanner deflection.",
    feedbackIncorrect:
      "Hardware scan zone limits must keep all beam paths above the 3-metre minimum vertical separation from the highest occupied surface. Show design preferences do not override safety requirements. See Section 4.7.",
  },
  {
    id: 19,
    question:
      "Which statement about projector output aperture masks is correct?",
    options: [
      "They are cosmetic covers that improve the projector's appearance",
      "They physically limit the beam's angular range to the intended scan area, providing hardware beam containment",
      "They filter the beam to remove UV radiation",
      "They are only required for projectors over 20 W",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Output aperture masks physically block the beam outside the desired projection cone. They are more reliable than software-only restrictions because they cannot be accidentally overridden by programming errors.",
    feedbackIncorrect:
      "Aperture masks physically limit the beam's angular range, providing hardware beam containment that cannot be overridden by software errors. They are a safety feature, not a cosmetic one. See Section 4.4.",
  },
  {
    id: 20,
    question:
      "The laser emission indicator on a projector must be visible from:",
    options: [
      "Only the front of the projector",
      "Any position where a person might approach the projector",
      "Only the operator's control desk",
      "It is optional — only required for Class 4 lasers",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The emission indicator must be visible from any position where someone might approach the projector. This prevents a person from assuming the laser is off when it is actually emitting.",
    feedbackIncorrect:
      "The emission indicator must be visible from any approach angle so that anyone near the projector can see whether it is active and emitting. This prevents accidental exposure from approaching an active projector. See Section 4.8.",
  },
];
