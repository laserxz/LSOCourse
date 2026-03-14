import { QuizQuestion } from "@/types";

/** Full question bank for Module 5. The quiz draws a random subset each attempt. */
export const module5Quiz: QuizQuestion[] = [
  {
    id: 1,
    question:
      "A laser beam with a diameter of 10 mm at the exposure point is scanning at a linear velocity of 5 m/s. What is the effective exposure duration?",
    options: ["0.5 ms", "2 ms", "5 ms", "20 ms"],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. t_eff = d / v = 0.010 m / 5 m/s = 0.002 seconds = 2 milliseconds. This is the fundamental formula for effective exposure duration of a scanned beam, covered in Section 5.2.",
    feedbackIncorrect:
      "The effective exposure duration is calculated as t_eff = d / v. With d = 0.010 m and v = 5 m/s, t_eff = 0.002 s = 2 ms. Review the formula and worked examples in Section 5.2.",
  },
  {
    id: 2,
    question:
      "Why is a static laser beam from a Class 4 entertainment projector more dangerous than the same beam when it is scanning?",
    options: [
      "The static beam has a higher total power output",
      "The static beam concentrates all its energy on a single point continuously",
      "The scanning beam produces a different wavelength",
      "The static beam has a wider divergence angle",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A static beam delivers its full continuous-wave power to a single point indefinitely, while a scanning beam distributes that energy across the scan path. The exposure duration at any single point is dramatically shorter when the beam is moving. See Section 5.1.",
    feedbackIncorrect:
      "The power output and wavelength are identical whether the beam is scanning or static. The difference is that a static beam delivers its full power to one point continuously, while scanning distributes the energy. Review Section 5.1 on why scan speed matters.",
  },
  {
    id: 3,
    question:
      "A galvanometer driver board fails and outputs maximum voltage. What is the most likely beam behaviour?",
    options: [
      "The beam continues scanning normally",
      "The beam extinguishes immediately",
      "The beam deflects to one extreme position and remains static",
      "The beam scans at double the normal speed",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. If the driver outputs maximum voltage, the galvo mirror is driven to one extreme of its range and held there. This results in a static beam pointed at the maximum deflection angle, which is a hazardous condition. See Section 5.3 on driver electronics failure.",
    feedbackIncorrect:
      "A driver board outputting maximum voltage drives the mirror to its mechanical extreme, creating a static beam at one edge of the scan range. The beam does not extinguish because the laser source is separate from the scanner drive. Review Section 5.3.",
  },
  {
    id: 4,
    question:
      "According to AS/NZS IEC 60825.3:2022, when is a scan-fail safeguard (SFS) mandatory?",
    options: [
      "Only when performing audience scanning",
      "Whenever the scanned beam power exceeds the MPE for static exposure",
      "Only for Class 4 laser projectors",
      "Whenever the projector output exceeds 1 watt",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Section 9 of the standard requires an SFS whenever the scanned beam power exceeds the MPE that would apply if the beam were static. This applies regardless of whether audience scanning is being performed. See Section 5.4.",
    feedbackIncorrect:
      "The SFS requirement is triggered when the beam power exceeds the static MPE, not by a specific power level or laser class. An SFS is needed for any scanned display where a scanner failure would result in a static beam exceeding the MPE. Review Section 5.4.",
  },
  {
    id: 5,
    question:
      "What is the critical requirement for a scan-fail safeguard's relationship to the main laser control system?",
    options: [
      "The SFS must be integrated into the main control software for fastest response",
      "The SFS must be independent of the main control system",
      "The SFS must share the same power supply as the main controller",
      "The SFS must be controlled by the show operator",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The standard requires the SFS to be independent of the main control system. This is because a failure in the control system is one of the scenarios the SFS must protect against. If the SFS depends on the same hardware or software, a common-mode failure could disable both. See Section 5.4.",
    feedbackIncorrect:
      "Integration with the control system would create a single point of failure. The SFS must be independent because it needs to function precisely when the main control system fails. Review Section 5.4 on SFS independence requirements.",
  },
  {
    id: 6,
    question:
      "Which SFS detection method provides end-to-end verification of actual beam output, not just scanner mechanism status?",
    options: [
      "Position feedback monitoring",
      "Velocity monitoring",
      "Photodetector monitoring",
      "Capacitive encoder monitoring",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Photodetector monitoring uses external optical sensors to detect the actual beam sweeping past at the expected rate. This verifies the entire optical path, not just the galvo mechanism. Position and velocity monitoring only confirm scanner movement, not that the beam is actually reaching the intended location. See Section 5.5.",
    feedbackIncorrect:
      "Photodetector monitoring is the only method listed that verifies the actual beam output. Position feedback and velocity monitoring only confirm that the scanner mechanism is moving, not that the optical path is intact. Review Section 5.5 on detection method trade-offs.",
  },
  {
    id: 7,
    question:
      "At which point in a scan pattern does the effective exposure duration reach its maximum (worst case)?",
    options: [
      "At the centre of the pattern where the beam moves fastest",
      "At the edges and vertices where the beam decelerates and reverses direction",
      "At random points depending on the content",
      "At the point closest to the projector where the beam is narrowest",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Galvos must decelerate to zero velocity and then accelerate in the opposite direction at pattern edges and vertices. During this reversal, the beam velocity drops to its minimum, resulting in the longest effective exposure duration. These are the critical points for safety evaluation. See Sections 5.2 and 5.6.",
    feedbackIncorrect:
      "The beam slows down at edges and vertices where galvos reverse direction. This deceleration produces the lowest scan velocities and therefore the longest exposure durations. The centre of a pattern is typically the fastest, safest point. Review Section 5.2.",
  },
  {
    id: 8,
    question:
      "A scan pattern sweeps over the same audience members 25 times per second. How does this affect the exposure assessment?",
    options: [
      "Only the single-pass exposure matters because each pass is independent",
      "The cumulative exposure from all 25 passes per second must be summed within the relevant exposure duration window",
      "The exposure is divided by 25 because the energy is distributed over time",
      "Multiple passes are irrelevant if each individual pass is below the MPE",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Cumulative exposure from multiple passes must be summed. If the pattern repeats 25 times per second, the total exposure within each second is 25 times the single-pass exposure. The MPE must not be exceeded when this cumulative exposure is accounted for. See Section 5.7 on cumulative exposure.",
    feedbackIncorrect:
      "Multiple passes are not independent for safety purposes. The standard requires cumulative exposure to be calculated by summing all passes within the relevant time window. A beam that is individually safe per pass may exceed the MPE when accumulated. Review Section 5.7.",
  },
  {
    id: 9,
    question:
      "A laser beam has a full-angle divergence of 1.5 mrad and an aperture diameter of 4 mm. What is the approximate beam diameter at 10 metres?",
    options: ["4 mm", "10 mm", "15 mm", "19 mm"],
    correctIndex: 3,
    feedbackCorrect:
      "Correct. Beam diameter at distance: d = d\u2080 + (\u03b8 \u00d7 D) = 4 mm + (1.5 mrad \u00d7 10 m) = 4 + 15 = 19 mm. The beam grows by the full-angle divergence multiplied by distance, added to the initial aperture diameter. See Section 5.2.",
    feedbackIncorrect:
      "Beam diameter at distance: d = d\u2080 + (\u03b8 \u00d7 D), where \u03b8 is the full-angle divergence and D is the distance. Here: d = 4 mm + (1.5 mrad \u00d7 10 m) = 4 + 15 = 19 mm. Review beam diameter calculations in Section 5.2.",
  },
  {
    id: 10,
    question:
      "Why is position feedback monitoring alone insufficient as an SFS detection method for some installations?",
    options: [
      "Position feedback is too slow to detect failures",
      "Position feedback cannot detect failures in the optical path beyond the scanner",
      "Position feedback requires an external computer to process",
      "Position feedback only works with capacitive encoders",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Position feedback monitors only the galvo mirror position. It cannot detect failures elsewhere in the optical path, such as a misaligned beam combiner, a failed dichroic mirror, or an obstruction that redirects the beam. Photodetector monitoring is needed to verify the actual output beam. See Section 5.5.",
    feedbackIncorrect:
      "Position feedback is actually fast, but its limitation is that it only monitors the scanner mechanism. Optical path failures (misaligned combiners, obstructions) occur downstream of the position sensor and go undetected. Review Section 5.5 on the trade-offs of each detection method.",
  },
  {
    id: 11,
    question:
      "When calculating minimum safe scan speed, which distance from the projector represents the worst case?",
    options: [
      "The maximum distance where the beam is still visible",
      "The distance where the beam diameter equals the pupil diameter",
      "The closest accessible distance where a person could be exposed",
      "The distance specified by the projector manufacturer",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. At closer distances, the beam diameter is smaller and the linear scan velocity is lower (for the same angular scan rate). Both factors increase the irradiance and effective exposure duration. The closest accessible distance is therefore the worst-case point. See Section 5.6.",
    feedbackIncorrect:
      "The closest accessible distance is the worst case because the beam is narrowest (highest irradiance) and the linear scan velocity is lowest (longest exposure duration) at minimum distance. Review Section 5.6 on calculating safe scan speeds for worst-case geometry.",
  },
  {
    id: 12,
    question:
      "What happens to a closed-loop galvanometer scanner if the position feedback cable is broken?",
    options: [
      "The scanner safely parks at its centre position",
      "The scanner continues operating normally on open-loop control",
      "The driver may rail to maximum output, driving the mirror against its mechanical stop",
      "The laser source automatically shuts down",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. In a closed-loop system, the driver relies on position feedback to control the mirror. Without feedback, the driver sees a large error signal and can drive maximum current to the galvo, forcing the mirror against its mechanical stop. This produces a static beam at one extreme position. See Section 5.3 on cable break failures.",
    feedbackIncorrect:
      "A closed-loop system requires feedback to function. Without it, the driver detects a maximum error between commanded and reported position, and may drive maximum output to the galvo motor. This is a dangerous failure mode that produces a static beam. Review Section 5.3.",
  },
  {
    id: 13,
    question:
      "An LSO receives a manufacturer's claim that a projector's SFS has a 2 ms response time. What should the LSO do?",
    options: [
      "Accept the specification and document it in the DSR",
      "Verify the specification is adequate for the specific installation geometry and exposure scenarios",
      "Reject the projector because 2 ms is too slow for any application",
      "Request a shorter response time regardless of the application",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The LSO is responsible for verifying that the SFS response time is adequate for the specific installation, not simply accepting manufacturer claims. A 2 ms response time may be adequate for some geometries and power levels but insufficient for others. The LSO must perform the calculations. See Section 5.6.",
    feedbackIncorrect:
      "Whether 2 ms is adequate depends entirely on the beam power, wavelength, beam diameter, and closest accessible distance in the specific installation. The LSO must verify the specification against the actual installation parameters. Review Sections 5.6 and 5.8.",
  },
  {
    id: 14,
    question:
      "What is the primary reason the standard requires redundant SFS detection methods for audience scanning?",
    options: [
      "To increase the cost of installations and discourage audience scanning",
      "Because no single detection method covers all possible failure modes",
      "Because audience members cannot wear laser safety eyewear",
      "Because redundancy is a general engineering best practice for all systems",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Each SFS detection method has blind spots. Position feedback cannot detect optical path failures. Photodetectors cannot distinguish between scanner failure and ambient light changes. Redundancy ensures that a failure mode missed by one method is caught by another. See Section 5.5.",
    feedbackIncorrect:
      "Redundancy is specifically required because each detection method has limitations. Position monitoring misses optical path failures, while photodetectors may be affected by ambient conditions. Combining methods covers the gaps left by any single approach. Review Section 5.5.",
  },
  {
    id: 15,
    question:
      "A fan of eight laser beams radiates from a single projector into the audience area. At which point is the combined irradiance highest?",
    options: [
      "At the maximum distance where all beams are still visible",
      "At the midpoint of the beam paths",
      "Near the projector where the beams converge and overlap",
      "At the edges of the fan pattern",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Near the projector, the beams from a fan pattern converge and may overlap. At the convergence point, the irradiance is the sum of all overlapping beams, which can exceed the MPE even if individual beams are below it. The LSO must evaluate combined beam effects. See Section 5.7.",
    feedbackIncorrect:
      "In a fan pattern, beams are closest together near the projector. Where beams overlap, their irradiances add together. This convergence zone can produce combined exposure exceeding the MPE even when individual beams are safe. Review Section 5.7 on beam convergence in audience scanning.",
  },
  {
    id: 16,
    question:
      "What instrument does the LSO use as the starting point for practical exposure assessment?",
    options: [
      "A spectrophotometer",
      "A calibrated laser power meter",
      "An infrared thermometer",
      "A lux meter",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Direct beam power measurement with a calibrated laser power meter is the starting point for exposure assessment. This gives the actual output power at operating settings, which is the fundamental input for all subsequent MPE calculations. See Section 5.8.",
    feedbackIncorrect:
      "A calibrated laser power meter measures the actual beam power, which is the essential first measurement for any exposure assessment. Lux meters and thermometers do not measure the parameters needed for laser safety calculations. Review Section 5.8.",
  },
  {
    id: 17,
    question:
      "How can an LSO verify that actual scan velocities in a programmed show meet the minimum safe scan speed?",
    options: [
      "By watching the show and estimating beam speed visually",
      "By examining scanner control signals on an oscilloscope or using the projector's diagnostic tools",
      "By asking the show programmer to confirm the speeds",
      "By checking the projector's maximum rated scan speed specification",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Objective verification methods include examining scanner control signals on an oscilloscope, using high-speed photography, or using the projector's built-in diagnostic tools. Visual estimation and verbal confirmation are not adequate verification methods. See Section 5.8.",
    feedbackIncorrect:
      "Visual estimation cannot determine actual scan velocities with the precision needed for safety assessment. The LSO must use objective measurement methods such as oscilloscope analysis or projector diagnostics. Review Section 5.8 on scan pattern analysis.",
  },
  {
    id: 18,
    question:
      "What is the relationship between angular scan speed and linear scan velocity at the point of exposure?",
    options: [
      "They are always equal",
      "Linear velocity equals angular speed multiplied by the distance from the scanner",
      "Linear velocity is independent of distance",
      "Angular speed equals linear velocity multiplied by beam diameter",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Linear velocity at the exposure point equals the angular scan speed (in radians per second) multiplied by the distance from the scanner. This means the same angular scan rate produces a proportionally higher linear velocity at greater distances. See Section 5.2.",
    feedbackIncorrect:
      "The linear velocity at any point equals the angular speed times the distance from the scanner (v = omega x r). The same angular scan speed produces a faster linear sweep at greater distances. Review Section 5.2.",
  },
  {
    id: 19,
    question:
      "Which of the following is NOT a component included in the total SFS response time budget?",
    options: [
      "Detection circuit response time",
      "Safety logic processing time",
      "Beam termination mechanism closing time",
      "The operator's reaction time to press an emergency stop",
    ],
    correctIndex: 3,
    feedbackCorrect:
      "Correct. The SFS must operate automatically without operator intervention. The response time budget includes only the automated components: failure detection, safety logic processing, and beam termination. An SFS that requires human reaction would be far too slow to prevent MPE exceedance. See Section 5.4.",
    feedbackIncorrect:
      "The SFS is an automatic system. Its response time includes only detection, processing, and beam termination. Human reaction time is orders of magnitude too slow for laser safety and is not part of the SFS. Review Section 5.4.",
  },
  {
    id: 20,
    question:
      "An entertainment laser display uses a scan pattern that never enters the audience area. Is a scan-fail safeguard still required?",
    options: [
      "No, SFS is only required for audience scanning",
      "Yes, if the scanned beam power exceeds the MPE for static exposure at any accessible point",
      "No, as long as the projector is rated below 5 watts",
      "Yes, but only if the venue has more than 500 occupants",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The SFS requirement is based on whether a scanner failure could result in a static beam exceeding the MPE at any accessible location, not just in the audience area. Even an overhead beam pattern could, upon scanner failure, produce a static beam that reaches an accessible position. See Section 5.4.",
    feedbackIncorrect:
      "SFS requirements are not limited to audience scanning. Any installation where a scanner failure could direct a static beam exceeding the MPE to an accessible position requires an SFS. Review Section 5.4 on when SFS is mandatory.",
  },
];
