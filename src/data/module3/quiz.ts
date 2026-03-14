import { QuizQuestion } from "@/types";

export const module3Quiz: QuizQuestion[] = [
  {
    id: 1,
    question:
      "What does the Maximum Permissible Exposure (MPE) represent?",
    options: [
      "The maximum power output allowed for a laser projector",
      "The highest level of laser radiation a person may be exposed to without adverse biological effects",
      "The maximum number of laser effects permitted in a show",
      "The minimum distance between the laser and the audience",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The MPE is the highest level of laser radiation to which a person may be exposed without suffering adverse biological effects. It is defined in IEC 60825-1.",
    feedbackIncorrect:
      "The MPE is the maximum radiation level that should not cause biological harm — not a power limit on the projector itself. It varies by wavelength, exposure duration, and tissue type. See Section 3.1.",
  },
  {
    id: 2,
    question:
      "For a CW visible laser (400–700 nm) with a 0.25-second exposure duration, the corneal MPE is approximately:",
    options: [
      "2.54 W/m²",
      "25.4 W/m²",
      "254 W/m²",
      "2,540 W/m²",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The corneal MPE for CW visible lasers at 0.25-second exposure (aversion response time) is approximately 25.4 W/m².",
    feedbackIncorrect:
      "The corneal MPE for CW visible laser exposure at 0.25 seconds is approximately 25.4 W/m². This value comes from IEC 60825-1, Table A.1. See Section 3.1.",
  },
  {
    id: 3,
    question:
      "A 5 W green laser with 1.0 mrad divergence has a NOHD of approximately 890 metres. If the power is doubled to 10 W (same divergence), what is the approximate new NOHD?",
    options: [
      "1,780 metres (doubled)",
      "1,260 metres (increased by ~41%)",
      "890 metres (unchanged)",
      "445 metres (halved)",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. NOHD scales with the square root of power. Doubling the power increases NOHD by a factor of sqrt(2) ≈ 1.41, giving approximately 1,260 metres.",
    feedbackIncorrect:
      "NOHD does not scale linearly with power — it scales with the square root. Doubling power increases NOHD by sqrt(2) ≈ 1.41, not by 2×. See Section 3.3.",
  },
  {
    id: 4,
    question:
      "What is the Nominal Hazard Zone (NHZ)?",
    options: [
      "The one-dimensional distance along the beam axis where irradiance exceeds the MPE",
      "The three-dimensional volume of space within which laser radiation exceeds the applicable MPE",
      "The area around the projector where only the LSO is permitted",
      "The audience area directly in front of the stage",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The NHZ is the three-dimensional space where laser radiation levels exceed the applicable MPE, accounting for all beam paths, angles, and reflections.",
    feedbackIncorrect:
      "The NHZ is a three-dimensional volume, not a one-dimensional distance (that would be the NOHD). It accounts for all beam paths, scanning angles, and reflections in the display. See Section 3.4.",
  },
  {
    id: 5,
    question:
      "What is the minimum vertical separation distance for scanning beams above an audience, as specified by AS/NZS IEC 60825.3:2022?",
    options: [
      "1 metre above the highest occupied surface",
      "2 metres above the highest occupied surface",
      "3 metres above the highest occupied surface",
      "5 metres above the highest occupied surface",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The standard specifies a minimum of 3 metres above the floor level in the audience area for scanning beams. This must be measured from the highest occupied surface, including balconies and raised platforms.",
    feedbackIncorrect:
      "The minimum vertical separation for scanning beams above audiences is 3 metres above the floor level. For venues with balconies or raised areas, measure from the highest occupied surface. See Section 3.6.",
  },
  {
    id: 6,
    question:
      "In which exposure scenario does a scanning beam sweeping across an eye result in the shortest effective exposure duration?",
    options: [
      "Direct intrabeam viewing of a static beam",
      "Diffuse reflection viewing",
      "Scanning beam exposure",
      "Extended-source viewing",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Scanning beam exposure typically produces effective exposure durations of microseconds to milliseconds, much shorter than static beam or diffuse reflection scenarios.",
    feedbackIncorrect:
      "A scanning beam sweeps across the eye very quickly, producing effective exposure durations of microseconds to milliseconds. This is shorter than static beam viewing (limited by aversion response at ~0.25 s). See Section 3.2.",
  },
  {
    id: 7,
    question:
      "A laser has a NOHD of 400 metres. A spectator views the beam through 50 mm binoculars. What is the approximate Extended NOHD (ENOHD)?",
    options: [
      "400 metres (binoculars have no effect)",
      "800 metres",
      "2,000 metres",
      "2,840 metres",
    ],
    correctIndex: 3,
    feedbackCorrect:
      "Correct. ENOHD = NOHD × (D_optic / 7 mm) = 400 × (50/7) ≈ 400 × 7.1 ≈ 2,840 metres.",
    feedbackIncorrect:
      "The ENOHD is calculated by multiplying the NOHD by the ratio of the optic aperture to the 7 mm pupil: 400 × (50/7) ≈ 2,840 metres. Binoculars dramatically increase the hazard distance. See Section 3.8.",
  },
  {
    id: 8,
    question:
      "Which zone type permits access only to trained, authorised personnel wearing appropriate laser safety eyewear?",
    options: [
      "Laser-free zone",
      "Audience scanning zone",
      "Controlled zone",
      "Exclusion zone",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The controlled zone is where laser radiation may exceed the MPE, but access is restricted to trained, authorised personnel with appropriate PPE.",
    feedbackIncorrect:
      "The controlled zone restricts access to trained, authorised personnel with laser safety eyewear. The exclusion zone prohibits all access. The laser-free zone requires no controls. See Section 3.5.",
  },
  {
    id: 9,
    question:
      "Why is the eye MPE typically about 1,000× more restrictive than the skin MPE for visible wavelengths?",
    options: [
      "The skin reflects more laser radiation than the eye",
      "The eye's cornea and lens focus the beam onto the retina, amplifying irradiance by up to 100,000×",
      "Skin has more pain receptors and triggers faster protective responses",
      "The standard applies an arbitrary safety factor to eye exposure",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The eye's optics concentrate the beam onto a tiny retinal spot, amplifying the irradiance by up to 100,000×. The skin has no such focusing mechanism, so it requires much higher exposure levels to cause injury.",
    feedbackIncorrect:
      "The eye's cornea and lens focus a collimated beam to a tiny retinal spot, amplifying irradiance enormously. The skin lacks this optical gain, so its injury threshold is about 1,000× higher. See Section 3.1 and Module 1, Section 1.6.",
  },
  {
    id: 10,
    question:
      "What is the first step in the practical zone setup process at a venue?",
    options: [
      "Position the projectors as high as possible",
      "Set beam deflection limits in the controller",
      "Survey the venue — measure dimensions, identify reflective surfaces, map accessible areas",
      "Mark exclusion zone boundaries with barriers",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The first step is always to survey the venue: measure ceiling heights, audience areas, balconies, and identify reflective surfaces. All subsequent calculations depend on accurate venue data.",
    feedbackIncorrect:
      "Step 1 is always to survey the venue. You need accurate measurements and surface assessments before you can position projectors, calculate zones, or set beam limits. See Section 3.7.",
  },
  {
    id: 11,
    question:
      "When two projectors' beams can overlap at the same point in space, the safety assessment must:",
    options: [
      "Only consider the more powerful projector",
      "Assess the cumulative exposure from both sources combined",
      "Ignore the overlap if the beams are different colours",
      "Divide the MPE equally between the two projectors",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The standard requires that cumulative exposure from all sources be assessed. If beams overlap, the combined irradiance at any point must be compared against the MPE.",
    feedbackIncorrect:
      "The combined irradiance from all overlapping beams must be assessed against the MPE. Different wavelengths each contribute independently to the total exposure hazard. See Section 3.9.",
  },
  {
    id: 12,
    question:
      "An exclusion zone differs from a controlled zone in that:",
    options: [
      "Exclusion zones require safety eyewear; controlled zones do not",
      "Exclusion zones prohibit all access during laser operation; controlled zones permit trained personnel with PPE",
      "Exclusion zones are only used outdoors; controlled zones are only used indoors",
      "There is no practical difference — the terms are interchangeable",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Exclusion zones prohibit all access — no one enters during laser operation. Controlled zones permit trained, authorised personnel with appropriate laser safety eyewear.",
    feedbackIncorrect:
      "The key difference: exclusion zones = no access for anyone during laser operation. Controlled zones = restricted access for trained personnel with PPE. See Section 3.5.",
  },
  {
    id: 13,
    question:
      "What unit is the MPE expressed in for continuous-wave (CW) laser exposures?",
    options: [
      "Watts (W)",
      "Joules (J)",
      "Irradiance — watts per square metre (W/m²)",
      "Lumens (lm)",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. For CW lasers, the MPE is expressed as irradiance in W/m² — power per unit area at a given point.",
    feedbackIncorrect:
      "CW laser MPE is expressed as irradiance (W/m²). Pulsed laser MPE is expressed as radiant exposure (J/m²). Watts alone is power output, not exposure. See Section 3.1.",
  },
  {
    id: 14,
    question:
      "The effective exposure duration for a scanning beam is calculated as:",
    options: [
      "t_eff = power / MPE",
      "t_eff = beam diameter / scan velocity",
      "t_eff = distance / speed of light",
      "t_eff = 0.25 seconds (always the aversion response time)",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The effective exposure duration for a scanning beam is t_eff = d / v, where d is the beam diameter at the point of exposure and v is the linear scan velocity.",
    feedbackIncorrect:
      "For scanning beams: t_eff = d / v (beam diameter divided by linear scan velocity). It is not fixed at 0.25 seconds — that is the aversion response for static beams. See Section 3.2.",
  },
  {
    id: 15,
    question:
      "In a venue with a balcony 4 metres above the main floor, where must the 3-metre minimum vertical separation be measured from for beams over the balcony?",
    options: [
      "From the main floor level (3 m + 0 m = 3 m above main floor)",
      "From the balcony floor level (3 m + 4 m = 7 m above main floor)",
      "From the ceiling",
      "From the stage level",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The 3-metre clearance must be measured from the highest occupied surface. A balcony at 4 m means beams must be at least 7 m above the main floor (3 m above the balcony).",
    feedbackIncorrect:
      "The 3-metre rule is measured from the highest occupied surface. If a balcony is at 4 m, beams above it must be at least 4 + 3 = 7 m above the main floor. See Section 3.6.",
  },
  {
    id: 16,
    question:
      "The MPE is best described as:",
    options: [
      "A target exposure level to aim for during shows",
      "A limit — the boundary of tolerable exposure, not a target",
      "A measurement taken after each show",
      "A manufacturer specification printed on the projector",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. The MPE is a limit, not a target. Good practice is to ensure actual exposure levels are well below the MPE, not merely at or just under it.",
    feedbackIncorrect:
      "The MPE is a limit — the boundary of what is considered tolerable. Operating at or near the MPE does not mean 'safe'. Good practice keeps exposure well below the MPE. See Section 3.1.",
  },
  {
    id: 17,
    question:
      "Why are NOHDs for entertainment lasers typically hundreds to thousands of metres?",
    options: [
      "Because entertainment venues are very large",
      "Because laser beams are collimated and maintain hazardous irradiance over very long distances",
      "Because the standard uses overly conservative calculations",
      "Because the NOHD includes a 10× safety factor",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Laser beams are highly collimated — they spread very slowly. Combined with watts of power, the irradiance remains above the MPE for hundreds or thousands of metres.",
    feedbackIncorrect:
      "Entertainment lasers have large NOHDs because collimated beams maintain hazardous irradiance over very long distances. This is a physical reality, not a conservative assumption. See Section 3.3.",
  },
  {
    id: 18,
    question:
      "When using a 10 W RGB projector, what power value should be used for MPE calculations when all three wavelengths form a single combined beam entering the eye?",
    options: [
      "Only the power of the brightest wavelength",
      "The total combined power of all wavelength components",
      "One third of the total power",
      "The power of the green component only, since the eye is most sensitive to green",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. When all wavelengths are combined into a single beam that simultaneously enters the eye, the total combined power must be used for the MPE assessment.",
    feedbackIncorrect:
      "When all wavelength components enter the eye simultaneously as a combined beam, the total combined power must be used. Each wavelength contributes independently to the exposure hazard. See Section 3.9.",
  },
  {
    id: 19,
    question:
      "What is the best defence against errors in MPE and zone calculations?",
    options: [
      "Using a more powerful computer for calculations",
      "Adding a 50% safety margin to all results",
      "Peer review — having another qualified person check the calculations",
      "Relying on the projector manufacturer's specifications only",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Peer review is the best defence against calculation errors. The LPA review of the DSR provides this check, but ideally calculations are verified before arriving at the venue.",
    feedbackIncorrect:
      "Peer review by another qualified person is the most effective way to catch calculation errors. The LPA review of the DSR serves this function. See Section 3.9.",
  },
  {
    id: 20,
    question:
      "Which step in the practical zone setup process serves as the final check that calculations match reality?",
    options: [
      "Step 1: Survey the venue",
      "Step 3: Set beam limits",
      "Step 4: Mark and enforce zones",
      "Step 5: Verify with measurements",
    ],
    correctIndex: 3,
    feedbackCorrect:
      "Correct. Step 5 — verification — is the final check. It involves measurements, power meter readings at boundary points, and visual confirmation that no beam can strike eye level in the audience area.",
    feedbackIncorrect:
      "Verification (Step 5) is the final check. It confirms that paper calculations match the physical reality — including beam height measurements and visual confirmation from the audience area. See Section 3.7.",
  },
];
