import { Section } from "@/types";

export const module5Sections: Section[] = [
  {
    id: "5.1",
    title: "Why Scan Speed Matters",
    paragraphs: [
      "Entertainment laser projectors create visible patterns by rapidly scanning a beam across surfaces and through the air. When a laser beam moves quickly, any given point in its path receives only a brief exposure. This is the fundamental safety principle that makes scanned laser displays possible: a beam that dwells on any single point for only microseconds delivers far less energy than one that remains stationary.",
      "The relationship between scan speed and safety is straightforward. A faster-moving beam means a shorter exposure duration at any given point. A shorter exposure duration means less energy deposited into tissue. If the energy delivered during that brief exposure remains below the Maximum Permissible Exposure (MPE), then the scanned beam may be considered safe for that exposure scenario, even if the total beam power would be hazardous from a static source.",
      "A stationary or slow-moving beam is an entirely different hazard scenario. If a scanner stops, even momentarily, the full continuous-wave power of the laser is concentrated on a single point. For a 5-watt Class 4 entertainment laser, a static beam can cause permanent retinal injury in less than a millisecond. This is why scanner failure is one of the most critical failure modes addressed by AS/NZS IEC 60825.3:2022.",
      "Section 9 of AS/NZS IEC 60825.3:2022 establishes mandatory requirements for scan-fail safeguards specifically because of this relationship. The standard recognises that entertainment laser displays routinely operate with total beam powers far exceeding the MPE for static exposure, and that safety depends entirely on the beam remaining in motion at or above a minimum velocity.",
      "As an LSO, you must understand that scanning does not eliminate the hazard. It manages the hazard by controlling exposure duration. Every safety assessment for a scanned laser display must account for what happens when scanning stops, whether due to equipment failure, programming error, or operator mistake.",
    ],
    keyTakeaway:
      "The safety of scanned laser displays depends entirely on beam velocity. A moving beam distributes energy over a large area, reducing the exposure at any single point. When scanning stops, the full beam power is concentrated on one point, creating an immediate Class 4 hazard. Every safety assessment must address what happens when the beam stops moving.",
  },
  {
    id: "5.2",
    title: "Effective Exposure Duration",
    paragraphs: [
      "The effective exposure duration (t_eff) quantifies how long a scanned beam actually illuminates any single point. For a beam moving in a straight line at constant velocity, t_eff is calculated as the beam diameter divided by the linear scan velocity at the point of exposure: t_eff = d / v, where d is the beam diameter (in metres) and v is the linear scan velocity (in metres per second).",
      "The beam diameter at the point of exposure is not the same as the beam diameter at the projector aperture. Laser beams diverge as they travel, so the diameter increases with distance. A beam that is 3 mm at the aperture with a divergence of 1 mrad will be approximately 13 mm at 10 metres. You must calculate or measure the actual beam diameter at the distance where exposure could occur, not at the source.",
      "Linear scan velocity at the point of exposure depends on two factors: the angular scan speed of the galvanometers and the distance from the scanner to the exposure point. A galvo scanning at 20 degrees per second produces a linear velocity of approximately 3.5 m/s at 10 metres distance, but only 0.35 m/s at 1 metre distance. This means the same scan pattern is proportionally safer at greater distances, because the beam moves faster across any given point.",
      "Consider a worked example. A projector emits a beam with a diameter of 8 mm at a distance of 5 metres, scanning at a linear velocity of 4 m/s at that distance. The effective exposure duration is t_eff = 0.008 m / 4 m/s = 0.002 seconds (2 milliseconds). This 2 ms exposure must then be compared against the MPE for a 2 ms exposure at the relevant wavelength to determine whether the beam is safe at that point.",
      "It is essential to evaluate t_eff at the worst-case point in the scan pattern. Beams slow down at the edges of scan patterns as galvos reverse direction, and may briefly stop at sharp corners or vertices. These transition points represent the longest effective exposure durations and are the critical points for safety assessment.",
    ],
    keyTakeaway:
      "Effective exposure duration is calculated as beam diameter divided by scan velocity at the point of exposure. Both beam diameter and scan velocity change with distance from the projector. The worst-case exposure always occurs at points where the beam slows down or reverses direction, such as pattern vertices and scan boundaries.",
  },
  {
    id: "5.3",
    title: "Scanner Failure Modes",
    paragraphs: [
      "Galvanometer scanners are electromechanical devices subject to a range of failure modes. Understanding these failure modes is essential for designing and evaluating scan-fail safeguards. Each failure type produces different consequences, and a comprehensive safety system must address all of them.",
      "Galvo mechanical failure occurs when the mirror assembly or bearing mechanism physically fails. This can cause the scanner to stop abruptly at its current position, resulting in a static beam. In some cases, a mechanical failure causes the mirror to drop to a rest position determined by the return spring or gravity. The beam will then point in an unpredictable but fixed direction until the laser source is shut down.",
      "Driver electronics failure affects the amplifier circuitry that controls galvo position. If the driver board fails, it may output zero volts (sending the mirror to centre position), maximum voltage (sending the mirror to one extreme), or an oscillating signal. Each of these produces a different beam behaviour: a static beam at centre, a static beam at one edge, or an uncontrolled oscillation that may or may not maintain safe scan speeds.",
      "Power supply failure to the scanner system causes loss of galvo drive. Without power, scanner mirrors typically return to their mechanical rest position under spring tension. The beam becomes static at whatever angle corresponds to the rest position. If only one axis loses power while the other continues scanning, the result is a static line rather than a two-dimensional pattern, which concentrates the beam energy along a single path.",
      "Cable break or connector failure between the controller and scanners produces similar effects to driver failure. A broken signal cable causes loss of position control, while a broken feedback cable causes loss of position monitoring. In closed-loop galvo systems, loss of feedback can cause the driver to rail to maximum output, driving the mirror hard against its mechanical stop.",
      "Resonance and oscillation failures occur when galvos are driven at or near their mechanical resonant frequency, or when the control loop becomes unstable. This can cause uncontrolled oscillation at unpredictable amplitudes, potentially resulting in beams sweeping erratically or dwelling at certain positions longer than the safety analysis assumes.",
    ],
    keyTakeaway:
      "Scanner failures can produce static beams, uncontrolled oscillations, or beams locked to extreme positions. Each failure mode has distinct consequences. A robust scan-fail safeguard must detect all categories of failure and respond fast enough to extinguish the beam before the MPE is exceeded at any accessible point.",
  },
  {
    id: "5.4",
    title: "Scan-Fail Safeguard Requirements",
    paragraphs: [
      "AS/NZS IEC 60825.3:2022 Section 9 establishes mandatory requirements for scan-fail safeguards (SFS) in entertainment laser installations. An SFS is a safety system that monitors scanner operation and extinguishes or blocks the laser beam if scanning fails or falls below a safe speed. The standard requires an SFS whenever the scanned beam power exceeds the MPE for static exposure.",
      "The fundamental requirement is that the SFS must prevent any accessible location from receiving an exposure exceeding the MPE. This means the total response time of the SFS, from detection of scanner failure to complete beam extinction, must be shorter than the time it takes for a static beam to exceed the MPE at any point where a person could be exposed.",
      "The SFS response time budget includes several components: the time for the monitoring circuit to detect the failure, the processing time of the safety logic, and the time for the beam termination mechanism to fully extinguish the beam. For a shutter-based system, this includes the mechanical closing time of the shutter. For an electronic blanking system, this includes the modulator response time. All of these must sum to less than the allowable exposure time.",
      "The standard specifies that the SFS must be independent of the main control system. This is a critical requirement. The SFS cannot rely on the same computer, software, or electronics that controls the laser display, because a failure in the control system is one of the scenarios the SFS must protect against. Dedicated hardware monitoring circuits are the standard approach.",
      "For audience scanning applications, the SFS requirements are particularly stringent. Because audience members are directly in the beam path, the response time must be extremely fast, typically on the order of single-digit milliseconds. The SFS must also monitor both axes of scanning independently, since a failure in either axis alone can result in hazardous exposure.",
    ],
    keyTakeaway:
      "AS/NZS IEC 60825.3:2022 mandates scan-fail safeguards whenever scanned beam power exceeds the static MPE. The SFS must detect failure and extinguish the beam before the MPE is exceeded at any accessible point. The SFS must be independent of the main control system and must monitor all scanner axes.",
  },
  {
    id: "5.5",
    title: "SFS Detection Methods",
    paragraphs: [
      "Position feedback monitoring is the most common SFS detection method. Galvanometer scanners include position sensors (typically capacitive or optical encoders) that report the actual mirror position back to the driver. An independent monitoring circuit compares the actual position against expected values. If the position deviates beyond a threshold, or if the position signal is lost, the SFS triggers beam shutdown.",
      "Velocity monitoring extends position feedback by calculating the rate of change of scanner position. Rather than simply checking whether the mirror is in the right place, velocity monitoring confirms that the mirror is moving at or above the minimum safe scan speed. This method can detect a gradual slowdown, such as from bearing wear or thermal drift, before the scanner actually stops.",
      "Photodetector monitoring uses optical sensors placed to detect the scanned beam pattern. External photodetectors at known positions confirm that the beam is sweeping past at the expected rate. If the beam stops moving, the photodetector at the static beam position sees a continuous signal instead of brief pulses, triggering shutdown. This method provides end-to-end verification because it monitors the actual output beam, not just the scanner mechanism.",
      "Redundant systems combine two or more detection methods operating simultaneously. For high-power audience scanning applications, the standard effectively requires redundancy because no single detection method covers all failure modes. A system might combine position feedback monitoring with an external photodetector, requiring both systems to confirm safe operation before allowing beam output.",
      "Each detection method has trade-offs. Position feedback is fast and built into the scanner, but cannot detect optical path failures (such as a beam combiner misalignment). Photodetector monitoring verifies the actual output but adds complexity and may be affected by ambient light or beam reflections. Velocity monitoring catches gradual degradation but requires mathematical processing that adds latency. The LSO must understand these trade-offs when evaluating whether an SFS is adequate for a given installation.",
    ],
    keyTakeaway:
      "SFS detection methods include position feedback, velocity monitoring, and photodetector monitoring. Each has strengths and limitations. Position feedback is fast but only monitors the scanner, not the optical path. Photodetectors verify actual beam output but add complexity. Redundant systems combining multiple methods provide the most robust protection, especially for audience scanning.",
  },
  {
    id: "5.6",
    title: "Calculating Safe Scan Speeds",
    paragraphs: [
      "The minimum safe scan speed is the velocity at which the effective exposure duration produces an irradiance at or below the MPE. To calculate it, you work backwards from the MPE: determine the maximum allowable exposure time for the beam's power density and wavelength, then calculate the velocity needed to ensure the beam transits any point faster than that duration.",
      "Start with the beam parameters at the point of exposure: total beam power (watts), beam diameter (metres), and wavelength (nanometres). Calculate the irradiance (power per unit area) as E = P / A, where A is the beam cross-sectional area. Then determine the MPE for the relevant wavelength and the corresponding maximum permissible exposure time for that irradiance level, using the tables in AS/NZS IEC 60825.1.",
      "The minimum scan velocity is then v_min = d / t_max, where d is the beam diameter and t_max is the maximum allowable exposure time derived from the MPE. For example, if a beam has a diameter of 10 mm at the exposure point and the MPE allows a maximum exposure of 0.5 milliseconds, the minimum scan velocity is 0.01 m / 0.0005 s = 20 m/s at that point.",
      "Consider a practical example with a 3-watt, 532 nm green laser projector. At a distance of 8 metres, the beam diameter might be 12 mm. The irradiance across the beam area is approximately 26,500 W/m squared. For visible wavelengths and thermal injury, the MPE for brief exposures is approximately 18 t^0.75 W/m squared. Working through the calculation yields a minimum scan speed of approximately 15 m/s at 8 metres distance.",
      "These calculations must be performed for the worst-case exposure point in the installation. The LSO must account for the closest accessible distance, the beam diameter at that distance, and the minimum scan velocity that occurs anywhere in the scan pattern. The minimum scan speed at pattern edges, where galvos decelerate to reverse direction, is always lower than at the centre.",
      "In practice, professional laser projector manufacturers often specify minimum scan speeds for their equipment and provide SFS systems calibrated to those speeds. However, the LSO is responsible for verifying that these specifications are correct for the specific installation geometry, not simply accepting manufacturer claims at face value.",
    ],
    keyTakeaway:
      "The minimum safe scan speed is determined by working backwards from the MPE: find the maximum allowable exposure time for the beam's irradiance at the exposure point, then calculate the velocity that limits the transit time to that value. Always calculate for the worst-case point, which is typically the closest accessible distance and the slowest point in the scan pattern.",
  },
  {
    id: "5.7",
    title: "Audience Scanning — The Special Case",
    paragraphs: [
      "Audience scanning refers to laser display techniques where beams are intentionally directed into or through areas occupied by audience members. This is the most safety-critical application of entertainment lasers because it involves direct, intentional human exposure to Class 3B or Class 4 laser beams. AS/NZS IEC 60825.3:2022 addresses audience scanning with the most stringent requirements in the standard.",
      "The standard permits audience scanning only when the scanned beam power at any accessible point, taking into account the effective exposure duration from the scan velocity, does not exceed the MPE. This means the beam must be moving fast enough that the brief exposure at any audience member's position remains below the damage threshold. The calculation must account for the actual geometry of the scan pattern relative to the audience.",
      "Cumulative exposure from multiple passes is a critical consideration that distinguishes audience scanning from other exposure scenarios. When a repeating scan pattern sweeps over the same audience members multiple times per second, the total exposure is the sum of all individual passes within the relevant exposure duration window. A beam that passes over a person 30 times per second delivers 30 times the single-pass exposure during each second of the display.",
      "Dwell time at any point in the audience must be rigorously controlled. Points where beams converge, cross, or reverse direction concentrate energy. A fan of beams radiating from a single point may appear visually impressive, but at the convergence point near the projector, the beams overlap and the combined irradiance may exceed the MPE even though individual beams do not. The LSO must evaluate the combined effect of all beams, not just individual ones.",
      "The standard requires that audience scanning installations include an SFS with response times fast enough to prevent MPE exceedance even if the scanner fails at the worst possible moment: when a beam is pointed directly at an audience member's eye position. For high-power projectors, this can require response times under one millisecond, pushing the limits of available technology.",
      "Many jurisdictions impose additional restrictions on audience scanning beyond the standard. Some require prior approval from a regulatory authority, insurance notification, or specific LSO qualifications. The LSO must be aware of all applicable local regulations, not just the AS/NZS IEC 60825.3 requirements.",
    ],
    keyTakeaway:
      "Audience scanning is the highest-risk entertainment laser application. The standard requires that scanned beams remain below the MPE at every audience position, accounting for cumulative exposure from multiple passes. SFS response times must prevent MPE exceedance from a scanner failure at the worst-case beam position. Additional local regulations may apply beyond the standard.",
  },
  {
    id: "5.8",
    title: "Exposure Assessment in Practice",
    paragraphs: [
      "Exposure assessment is the practical process of measuring and calculating actual exposure levels at accessible positions in a laser display installation. This is where theoretical safety analysis meets real-world conditions. The LSO must verify that the installation achieves the safety levels predicted by the design calculations, not simply assume that equipment performs to specification.",
      "Direct beam power measurement is the starting point. A calibrated laser power meter is used to measure the total output power of the projector. This measurement should be performed at the operating settings actually used during the show, not at some nominal specification. Many projectors allow power output to be adjusted in software, and the LSO must verify the actual output, not the maximum rated power.",
      "Beam diameter measurement at representative distances confirms the divergence calculations used in the safety assessment. A beam profiler or burn paper can be used to determine the actual beam diameter at the distances where audience or personnel exposure could occur. Discrepancies between calculated and measured beam diameters indicate that the safety calculations need revision.",
      "Scan pattern analysis involves verifying the actual scan velocities achieved during the programmed show content. This can be done by examining the scanner control signals on an oscilloscope, by using high-speed photography to capture the beam trajectory, or by using the projector's own diagnostic tools if available. The LSO must confirm that the scan velocities at all points in every pattern meet or exceed the minimum safe scan speed.",
      "All exposure assessment data must be documented in the Display Safety Record (DSR) for the installation. This documentation should include the measurement equipment used, calibration dates, measured values, calculation methodology, and the conclusions drawn. The DSR serves as evidence that the assessment was conducted competently and that the installation complies with the standard. Section 6.2 covers the DSR in detail.",
    ],
    keyTakeaway:
      "Exposure assessment requires actual measurements, not just manufacturer specifications or theoretical calculations. The LSO must measure beam power, verify beam diameter at exposure distances, and confirm scan velocities for all show content. All measurements and calculations must be documented in the Display Safety Record as evidence of compliance with AS/NZS IEC 60825.3:2022.",
  },
];
