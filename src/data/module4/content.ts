import { Section } from "@/types";

export const module4Sections: Section[] = [
  {
    id: "4.1",
    title: "Why Engineering Controls Come First",
    paragraphs: [
      "The hierarchy of controls is a foundational concept in workplace safety — and it applies directly to entertainment laser operations. The hierarchy ranks control measures from most effective to least effective: elimination, substitution, engineering controls, administrative controls, and personal protective equipment (PPE). Engineering controls sit near the top because they do not rely on human behaviour to be effective.",
      "In the context of entertainment lasers, elimination (removing the laser entirely) is rarely an option — the laser is the show. Substitution (using a lower-class laser) may reduce the hazard but may not achieve the desired visual effect. Engineering controls are therefore the first practical line of defence. They are built into the equipment or the installation and work automatically, regardless of operator attention or audience behaviour.",
      "AS/NZS IEC 60825.3:2022, Section 6 sets out the safety criteria for equipment and installations. The standard requires that engineering controls be used wherever practicable before relying on administrative controls (procedures, training, signage) or PPE (laser safety eyewear). This is not a suggestion — it is a normative requirement.",
      "The reasoning is simple: a hardware interlock that cuts the beam when a door opens works every time, without fail, without training. A procedure that says 'the operator must press the stop button if someone enters the exclusion zone' depends on the operator seeing the person, reacting in time, and pressing the correct button. Engineering controls remove the human variable from the safety chain wherever possible.",
      "Throughout this module, you will learn about the specific engineering controls required by the standard: emergency stops, interlocks, beam attenuators, scan-fail safeguards, key switches, and projector housing requirements. Each control addresses a specific failure mode or hazard scenario. Together, they form a layered safety system where no single failure can result in a hazardous exposure.",
    ],
    keyTakeaway:
      "Engineering controls are the most reliable line of defence because they work independently of human behaviour. The standard requires engineering controls wherever practicable, before relying on procedures or PPE. A well-designed laser safety system layers multiple engineering controls so that no single point of failure can cause harm.",
  },
  {
    id: "4.2",
    title: "Emergency Stop (E-Stop) Systems",
    paragraphs: [
      "The emergency stop — commonly called the E-stop — is the most critical single control on any entertainment laser installation. When activated, the E-stop must immediately cease all laser emission. Not reduce it, not fade it — cease it. The beam must stop within a fraction of a second.",
      "AS/NZS IEC 60825.3:2022 requires that every Class 3B and Class 4 laser installation used for entertainment have a readily accessible emergency stop. The E-stop must be a hardwired, physical switch — not a software command. Software can crash, freeze, or fail to execute. A hardwired E-stop interrupts the electrical supply to the laser source directly, bypassing all software layers.",
      "The standard specifies that E-stops must be clearly marked, coloured red on a yellow background (following IEC 60947-5-5), and positioned where they can be reached quickly by the LSO or designated safety personnel. In practice, this means E-stops at the operator position and at each entry point to controlled or exclusion zones. For large installations, multiple E-stops connected in series ensure that any single button can shut down the entire system.",
      "E-stop circuits must be fail-safe: if the wiring is cut, disconnected, or faults, the system must default to the safe state (beam off). This is achieved using normally-closed contacts — the circuit is complete (beam enabled) only when the E-stop is not pressed and the wiring is intact. Any interruption in the circuit triggers the stop condition.",
      "Testing the E-stop is a mandatory part of pre-show checks. Before every performance, the LSO must verify that pressing any E-stop immediately stops all laser emission. This test must be documented in the Display Safety Record. An untested E-stop is an unverified safety control — which is the same as no safety control at all.",
      "A common mistake is wiring the E-stop through the control software rather than directly to the laser power supply or shutter. If the control computer crashes — which does happen during live shows — a software-routed E-stop becomes useless. The hardwired requirement exists specifically to protect against this failure mode.",
    ],
    keyTakeaway:
      "The E-stop must be hardwired (not software-controlled), fail-safe (defaults to beam-off on any fault), clearly marked (red on yellow), and tested before every show. Multiple E-stops should be positioned at the operator desk and at all entry points to laser-controlled zones. Test and document every time.",
  },
  {
    id: "4.3",
    title: "Interlocks and Access Control",
    paragraphs: [
      "Interlocks are automatic safety devices that disable the laser when a physical condition changes — typically when a door, panel, or barrier is opened or moved. The principle is straightforward: if someone can physically enter a hazardous area, the laser must stop before they are exposed.",
      "The standard requires interlocks on any access point to areas where laser radiation exceeds the MPE. This includes doors to rooms containing laser projectors, removable panels on projector housings, and gates or barriers defining exclusion zones. When the interlock is broken (door opened, panel removed), the laser must cease emission immediately.",
      "Interlocks come in two categories defined by the standard. A non-defeatable interlock cannot be bypassed under any circumstances — opening the access point always stops the laser. A defeatable interlock can be temporarily overridden by an authorised person (typically the LSO) using a key or tool, allowing access for alignment, maintenance, or testing while the laser is active. Defeatable interlocks must automatically re-engage when the override is removed.",
      "Defeatable interlocks are necessary for practical operations — an LSO needs to align projectors with the laser running at reduced power. However, the standard places strict conditions on their use: the override must require a deliberate action (not just flipping a switch), the override status must be clearly indicated (warning light or display), and alternative safety measures (reduced power, safety eyewear, restricted access) must be in place while the interlock is defeated.",
      "For entertainment installations, interlocks are most commonly applied to projector access panels, equipment rooms or cages, and backstage access points to the stage or performance area. In permanent installations (nightclubs, theatres), interlocks on all access doors to the laser equipment room are standard practice. For touring shows, portable interlock systems using magnetic reed switches or break-beam sensors can be deployed at exclusion zone boundaries.",
      "Like E-stops, interlocks must be fail-safe: if the interlock sensor fails, the system must default to the safe state (beam off). And like E-stops, they must be tested before every show and the test results documented in the DSR.",
    ],
    keyTakeaway:
      "Interlocks automatically disable the laser when access points are opened. Non-defeatable interlocks cannot be bypassed; defeatable interlocks can be overridden by the LSO with strict conditions. All interlocks must be fail-safe and tested before every performance. Document all interlock tests in the DSR.",
  },
  {
    id: "4.4",
    title: "Projector Housing and Beam Containment",
    paragraphs: [
      "The laser projector housing is itself an engineering control. A properly designed projector enclosure prevents access to the raw laser beam before it exits the output aperture, contains stray reflections from internal optical components, and limits the directions in which the beam can travel.",
      "IEC 60825-1 requires that laser products be enclosed so that human access to laser radiation above Class 1 levels is prevented during normal operation. For entertainment projectors, this means the housing must fully enclose the laser source, beam-combining optics, and scanner assembly. The only intentional emission point is the output aperture. All joints, seams, and access panels must prevent radiation leakage above the accessible emission limit (AEL) for Class 1.",
      "The output aperture itself must be designed to limit the beam's angular range to the intended scan area. Many professional projectors include mechanical aperture masks or adjustable iris systems that physically block the beam outside the desired projection cone. These hardware limits are more reliable than software-only scan zone restrictions because they cannot be accidentally overridden by a programming error.",
      "Beam dumps and beam blocks are containment devices used outside the projector to terminate beams safely. A beam dump absorbs the laser radiation at a designated termination point — for example, a matte black metal plate at the end of a beam's intended path. Beam blocks are placed to prevent beams from leaving the intended display area, particularly to protect side areas, exits, or crew positions.",
      "The materials used for beam dumps and blocks must be able to absorb the laser power without damage, reflection, or combustion. For high-power Class 4 lasers (10 W+), this typically means anodised aluminium or purpose-built laser beam dumps with heat dissipation. Ordinary materials — painted surfaces, wood, fabric — may char, burn, or produce specular reflections that redirect the hazard rather than eliminating it.",
      "During setup, the LSO must verify that all housing panels are secure, that no stray beams escape from joints or ventilation openings, and that beam termination points use appropriate materials. Any modification to the projector housing (added ventilation holes, removed panels for cooling) that could allow radiation leakage must be assessed and mitigated.",
    ],
    keyTakeaway:
      "The projector housing prevents access to internal beams and limits the output to the intended aperture. Mechanical aperture masks provide hardware beam limits. Beam dumps and blocks terminate beams at designated points using appropriate absorptive materials. Verify housing integrity and beam containment during every setup.",
  },
  {
    id: "4.5",
    title: "Scan-Fail Safeguard (SFS) Systems",
    paragraphs: [
      "Galvanometer scanners — the mirrors that steer the laser beam to create patterns and effects — are mechanical devices. They can fail. When a scanner fails, the moving beam becomes a static beam pointed in whatever direction the mirror was facing at the moment of failure. A static beam from a Class 4 laser projector is an immediate eye hazard at any distance within the NOHD.",
      "The scan-fail safeguard (SFS) is an engineering control specifically designed to address this failure mode. The SFS monitors the scanner operation and, if it detects a failure (scanner stopped, moving too slowly, or stuck at one position), it must shut off the laser output before a hazardous exposure can occur.",
      "The critical parameter is response time. The SFS must detect the failure and extinguish the beam faster than the time it takes for the static beam to deliver an exposure exceeding the MPE. For visible wavelengths, the MPE for a 0.25-second exposure (aversion response time) sets the upper bound, but the SFS should respond much faster — typically within 10 milliseconds or less for high-power projectors.",
      "AS/NZS IEC 60825.3:2022 and IEC 60825-1 require scan-fail safeguards for any scanning laser product where scanner failure could result in accessible radiation exceeding the AEL for the intended classification. For entertainment projectors performing audience scanning, the SFS is mandatory — there is no exception.",
      "SFS implementations vary by manufacturer. Common approaches include: monitoring the scanner position feedback signal and comparing it against the commanded signal (if they diverge beyond a threshold, the scanner has failed); monitoring the scan velocity and triggering if it drops below the minimum safe speed; and using independent photodetector circuits that verify beam movement. The most robust systems use redundant monitoring with independent shutdown paths.",
      "The SFS is covered in detail in Module 5 (Scan-Fail Safeguards & Exposure Assessment), where you will learn the calculation methods for determining SFS response time requirements. For this module, the key point is that the SFS is a mandatory engineering control, it must be verified during setup, and its operational status must be documented in the DSR.",
    ],
    keyTakeaway:
      "When a scanner fails, the laser beam stops moving and becomes a static hazard. The scan-fail safeguard detects this failure and shuts off the beam before a hazardous exposure can occur — typically within 10 ms. SFS is mandatory for any scanning laser used in entertainment, especially for audience scanning. Verify and document SFS operation before every show.",
  },
  {
    id: "4.6",
    title: "Key Switches and Activation Controls",
    paragraphs: [
      "IEC 60825-1 requires that Class 3B and Class 4 laser products incorporate a key switch or equivalent access control that prevents unauthorised activation. The laser cannot be turned on without the key — and the key must be removable when the laser is not in use, preventing casual or accidental activation.",
      "In entertainment laser projectors, the key switch is typically on the rear panel of the unit. Some manufacturers use physical keys; others use coded magnetic switches or electronic access codes. The principle is the same: only a person with the key or code can enable the laser output. When the LSO is not present or the system is not in active use, the key is removed and secured.",
      "The key switch is the first link in the activation chain. A typical laser system activation sequence follows a deliberate, multi-step process: key switch on → system initialisation → mechanical shutter open → laser source enabled → output active. Each step requires a deliberate action, and each can be independently disabled. This layered approach prevents accidental emission.",
      "The mechanical shutter is another activation control closely related to the key switch. The shutter is a physical barrier (typically a metal blade) that blocks the beam path between the laser source and the output aperture. Even if the laser source is energised, the shutter prevents any beam from leaving the projector. The shutter can be controlled independently of the laser source, providing an additional layer of control.",
      "During shows, the shutter is normally open and beam control is handled by the scanner system and software. But during setup, alignment, and breaks, the shutter provides a quick, reliable way to stop all output without powering down the laser source (which may require a warm-up period to restart). The LSO should use the shutter — not just software blanking — when work is being done near the beam path.",
      "The standard also requires that a delay be incorporated between the key switch activation and the first possible laser emission. This delay (typically 3–5 seconds) allows personnel to clear the area and provides an audible or visual warning that the laser is about to become active. Many projectors include a status LED or audible tone during this delay period.",
    ],
    keyTakeaway:
      "Key switches prevent unauthorised laser activation. The activation sequence is deliberately multi-step: key on → initialise → shutter open → source enabled. The mechanical shutter provides an independent physical beam block. Use the shutter (not just software blanking) during setup and alignment. The start-up delay provides warning before first emission.",
  },
  {
    id: "4.7",
    title: "Beam Path Controls and Scan Zone Limiting",
    paragraphs: [
      "Even with all the controls discussed so far, the single most important operational question remains: where can the beam go? Beam path controls and scan zone limiting determine the physical boundaries of the laser display and are the primary engineering controls that keep beams away from people.",
      "Scan zone limiting restricts the angular range of the galvanometer scanners, defining the maximum extent of beam travel in both the X (horizontal) and Y (vertical) axes. Professional laser controllers provide both software scan zones (set in the show programming) and hardware scan zones (set in the projector firmware or controller hardware). The hardware limit is the safety-critical one — it cannot be exceeded regardless of what the software commands.",
      "The LSO must set hardware scan zone limits based on the venue geometry and zone calculations from Module 3. The process involves: positioning the projector, calculating the maximum safe deflection angles based on exclusion distances and the 3-metre rule, and programming these limits into the projector's hardware controller. Once set, the beams physically cannot exceed these angles, even if the operator accidentally programs an effect that extends beyond the safe area.",
      "For projectors aimed at the audience area (audience scanning effects), scan zone limits must ensure that the beam cannot strike audience members at eye level — even at maximum deflection. This means the lowest point of the scan zone must be above the minimum vertical separation distance (3 metres above the highest occupied surface) at the nearest point of the audience area.",
      "Beam path planning also involves considering what happens at beam termination points. Every beam path must end at a defined termination point — a wall, ceiling, beam dump, or other surface that safely absorbs or contains the beam. Beams must not exit through windows, open doors, or gaps in the venue structure into uncontrolled areas. For outdoor shows, upward-pointing beams must comply with aviation safety requirements (covered in Module 9).",
      "Multiple projectors require careful coordination of scan zones to avoid beam overlap in hazardous areas and to ensure that no combination of beam positions from different projectors can create a hazard that individual projector assessments would miss. The overall display geometry must be assessed as a complete system, not projector by projector in isolation.",
    ],
    keyTakeaway:
      "Scan zone limits define where beams can go. Hardware limits in the projector firmware are the safety-critical control — software limits alone are not sufficient. Set hardware scan zones based on venue geometry and exclusion distances. Every beam path must end at a defined, safe termination point. Assess multi-projector setups as a complete system.",
  },
  {
    id: "4.8",
    title: "Labelling, Signage, and Warning Systems",
    paragraphs: [
      "Engineering controls include warning systems that alert people to laser hazards. While signage is partly an administrative control, the standard treats certain warning requirements as mandatory equipment features — making them part of the engineering control framework.",
      "IEC 60825-1 requires specific labels on all Class 3B and Class 4 laser products. These include: the laser hazard warning symbol (a starburst triangle), the laser class designation, the maximum output power and wavelength(s), and a 'DANGER' (Class 4) or 'WARNING' (Class 3B) text panel. These labels must be permanently affixed to the projector housing and visible during normal use. As an LSO, you must verify that all projector labels are present, legible, and accurate.",
      "Beyond the projector itself, the standard requires warning signs at the boundaries of controlled and exclusion zones. These signs must include the laser hazard symbol, the laser class, and the nature of the hazard. For entertainment venues, signs are typically placed at entry points to backstage areas, equipment rooms, and any area where laser radiation may exceed the MPE.",
      "Active warning indicators — lights, illuminated signs, or audible alarms — are required when the laser is in operation. A common implementation is a red illuminated 'LASER IN USE' sign at each entry point to a controlled zone, wired to activate when the laser system is powered on. For touring shows, portable illuminated warning signs can be deployed at temporary zone boundaries.",
      "The laser emission indicator on the projector itself is also a required feature. This is typically an LED or illuminated panel on the projector housing that indicates when the laser source is active and the shutter is open — meaning the beam is being emitted. The emission indicator must be visible from any position where a person might approach the projector. This prevents someone from assuming the laser is off when it is actually armed and emitting.",
      "Warning systems do not replace physical controls — they supplement them. A warning sign at a door does not prevent someone from walking through it. An interlock on that same door does. The standard requires both: the interlock to enforce the safety boundary, and the sign to inform people why the boundary exists.",
    ],
    keyTakeaway:
      "Laser products must carry specific hazard labels (class, power, wavelength, warning symbol). Controlled and exclusion zones require warning signs at all entry points. Active 'LASER IN USE' indicators must be visible when the laser is operating. Warning systems inform — interlocks enforce. You need both.",
  },
  {
    id: "4.9",
    title: "Putting It Together: The Equipment Safety Checklist",
    paragraphs: [
      "Every engineering control discussed in this module must be verified before each performance. A systematic equipment safety checklist ensures nothing is missed. This checklist forms part of the pre-show verification documented in the Display Safety Record.",
      "E-stop verification: Press each E-stop button and confirm that all laser emission ceases immediately. Verify that the system does not restart automatically when the E-stop is released — it must require a deliberate re-activation sequence. Test every E-stop position, including any remote units. Record the test results.",
      "Interlock verification: Open and close each interlocked access point (doors, panels, barriers). Confirm that opening the interlock immediately stops laser emission. If defeatable interlocks are in use, verify that the override mechanism works correctly and that the override status is clearly indicated. Test that interlocks re-engage automatically when the access point is closed and the override is removed.",
      "Housing inspection: Visually inspect all projector housings for damage, loose panels, missing screws, or gaps that could allow radiation leakage. Check that all ventilation openings are properly baffled to prevent beam escape. Verify that output aperture masks are correctly positioned for the intended scan area.",
      "SFS verification: Confirm that the scan-fail safeguard is active and functional. Many projectors provide a test mode that simulates a scanner failure to verify the SFS response. If no test mode is available, the SFS status indicator should show operational. Document the SFS verification method used.",
      "Key switch and activation controls: Verify that the laser cannot be activated without the key. Test the mechanical shutter independently. Confirm the start-up delay and warning indicators function correctly. Ensure the key is secured and accessible only to authorised personnel during the event.",
      "Beam path and scan zones: Verify hardware scan zone limits by running a boundary test pattern. Confirm that beams cannot exceed the programmed limits at maximum deflection. Walk the audience area and verify that no beam can reach eye level. Check all beam termination points for appropriate materials and positioning. Verify warning signs and emission indicators are in place and functioning.",
      "This checklist is not optional. Skipping any item means an unverified safety control is being relied upon during the show. The LPA will review the checklist as part of the DSR endorsement. If you cannot verify a control, you must either fix it, apply alternative measures, or not operate the laser.",
    ],
    keyTakeaway:
      "Every engineering control must be verified before every performance: E-stops, interlocks, housing, SFS, key switch, shutter, scan zones, beam termination, and warning systems. Document each verification in the DSR. An unverified control is an unreliable control. If you cannot verify it, do not operate until it is fixed.",
  },
];
