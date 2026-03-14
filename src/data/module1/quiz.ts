import { QuizQuestion } from "@/types";

/** Full question bank for Module 1. The quiz draws a random subset each attempt. */
export const module1Quiz: QuizQuestion[] = [
  // --- Original 5 ---
  {
    id: 1,
    question:
      "A laser projector emitting at 445 nm produces light in which part of the visible spectrum?",
    options: ["Red", "Green", "Blue", "Ultraviolet"],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. 445 nm sits at the violet-blue boundary (violet is 380\u2013450 nm, blue is 450\u2013495 nm) but is universally referred to as 'blue' in the entertainment laser industry. This wavelength is produced by GaN direct diode lasers and is the most common blue source in entertainment projectors.",
    feedbackIncorrect:
      "445 nm sits at the violet-blue boundary but is universally called 'blue' in the entertainment laser industry. It is produced by GaN direct diode lasers. The visible spectrum runs from ~380 nm (violet) to ~780 nm (red). Refer to the wavelength\u2013colour table in Section 1.1.",
  },
  {
    id: 2,
    question:
      "Which laser class represents the minimum threshold at which direct beam exposure can cause eye injury in less time than the human aversion response (0.25 s)?",
    options: ["Class 2", "Class 3R", "Class 3B", "Class 4"],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Class 3B lasers can cause eye injury from direct beam exposure within durations shorter than the 0.25 second aversion response. This is why the aversion response is not considered a sufficient safety control for Class 3B and above.",
    feedbackIncorrect:
      "Class 3B is the lowest class at which the aversion response is considered insufficient protection against eye injury from direct beam exposure. Class 2 relies on the aversion response for safety. Review Section 1.3 and Section 1.8.",
  },
  {
    id: 3,
    question:
      "A person is exposed to a brief flash from a Class 4 entertainment laser beam that strikes the retina. They feel no pain. What is the most likely explanation?",
    options: [
      "The exposure was below the MPE and no harm occurred",
      "The beam was too weak to cause injury",
      "The retina has no pain receptors, so retinal injury is painless",
      "The aversion response protected them",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The retina has no pain receptors. Retinal thermal injury from laser exposure produces no sensation of pain at the time of injury. The affected person may notice a blind spot or visual disturbance, but will not feel the injury occurring.",
    feedbackIncorrect:
      "The correct answer is that the retina has no pain receptors. A person with a retinal laser injury may not be aware of it at the time. This is discussed in Section 1.6.",
  },
  {
    id: 4,
    question:
      "A DPSS laser projector producing a 532 nm green beam has a known failure mode where an additional hazardous beam may be emitted. What is this beam?",
    options: [
      "A 445 nm blue beam from the pump diode",
      "A 1064 nm infrared beam from the gain medium",
      "An ultraviolet beam from frequency doubling",
      "A secondary 532 nm beam from internal reflection",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. DPSS green lasers pump a Nd:YVO\u2084 crystal at 808 nm to produce 1064 nm, which is then frequency-doubled to 532 nm via KTP crystal. The residual 1064 nm infrared is normally filtered, but if the IR filter fails, an invisible Class 4 infrared beam is emitted alongside the visible green output.",
    feedbackIncorrect:
      "The hazard is a residual 1064 nm infrared beam from the Nd:YVO\u2084 gain medium. Filter failure means an invisible infrared beam is emitted. Review Section 1.9.",
  },
  {
    id: 5,
    question:
      "Why does the eye\u2019s optical system make the retina more vulnerable to laser injury than the skin?",
    options: [
      "The cornea absorbs all laser radiation before it reaches the retina",
      "The retina is thinner than skin",
      "The cornea and lens focus the beam onto the retina, increasing irradiance by up to 100,000\u00d7",
      "The retina is more sensitive to heat than skin cells",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The cornea and lens concentrate a collimated laser beam onto an extremely small spot on the retina. This optical gain \u2014 up to approximately 100,000\u00d7 \u2014 means the irradiance on the retina is vastly higher than at the cornea.",
    feedbackIncorrect:
      "The key factor is optical gain. The eye\u2019s cornea and lens focus incoming laser light to a tiny spot on the retina, amplifying the irradiance by up to 100,000 times. This is covered in Section 1.6.",
  },

  // --- New questions covering all 9 sections ---
  {
    id: 6,
    question:
      "The entire visible spectrum represents approximately what fraction of the known electromagnetic spectrum?",
    options: ["About 10%", "About 1%", "Less than 0.01%", "About 50%"],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The visible spectrum (380\u2013780 nm) represents less than 0.0035% of the known electromagnetic spectrum \u2014 a remarkably narrow band.",
    feedbackIncorrect:
      "The visible spectrum is an extremely narrow band. It represents less than 0.0035% of the electromagnetic spectrum. See Section 1.1.",
  },
  {
    id: 7,
    question:
      "Which property of laser light allows it to be focused to an extremely small point, concentrating energy into a tiny area?",
    options: ["Collimation", "Monochromaticity", "Coherence", "Divergence"],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Coherence means the light waves are synchronised \u2014 peaks and troughs aligned in time and space. This allows the beam to be focused to an extremely small point, concentrating energy into a tiny area.",
    feedbackIncorrect:
      "Coherence is the property that enables extreme focus. In coherent light, the waves are synchronised, allowing the beam to be concentrated to a very small spot. Review Section 1.2.",
  },
  {
    id: 8,
    question:
      "A laser beam remains hazardous at long distances primarily because of which property?",
    options: [
      "Monochromaticity",
      "Coherence",
      "Collimation",
      "High colour temperature",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Collimation means the beam is highly directional and spreads very slowly over distance. Unlike conventional light that radiates in all directions, the energy per unit area does not drop off rapidly.",
    feedbackIncorrect:
      "Collimation is the property responsible for long-distance hazard. A collimated beam travels in near-parallel rays with very low divergence. See Section 1.2.",
  },
  {
    id: 9,
    question:
      "What are the galvanometer scanners (galvos) in a laser projector responsible for?",
    options: [
      "Amplifying the laser beam power",
      "Combining RGB colours into a single beam",
      "Controlling horizontal and vertical beam deflection",
      "Filtering residual infrared radiation",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Galvo scanners are mirrors mounted on fast-moving motors that deflect the beam horizontally and vertically to create patterns and effects. Their speed and precision are critical safety parameters.",
    feedbackIncorrect:
      "Galvo scanners control beam direction \u2014 they deflect the beam horizontally and vertically to draw patterns. If they fail, you get a stationary beam. See Section 1.4.",
  },
  {
    id: 10,
    question:
      "What is the key advantage of direct diode green (520 nm) lasers over DPSS green (532 nm) lasers in entertainment?",
    options: [
      "Direct diode green is cheaper to manufacture",
      "Direct diode green has no residual infrared output",
      "Direct diode green produces a brighter beam",
      "Direct diode green has a wider beam diameter",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Direct diode 520 nm green lasers have no residual infrared beam, unlike DPSS 532 nm systems which produce a 1064 nm IR beam that must be filtered. They also offer better stability and faster modulation.",
    feedbackIncorrect:
      "The main safety advantage is that direct diode green has no residual infrared output. DPSS green systems produce 1064 nm IR that must be filtered. See Section 1.9.",
  },
  {
    id: 11,
    question:
      "A beam with a divergence of 1 mrad expands by how much for every metre of travel?",
    options: ["1 cm", "1 mm", "0.1 mm", "10 mm"],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. A beam with 1 mrad (milliradian) divergence expands by 1 mm for every metre of travel. Entertainment laser beams typically have very low divergence (0.5\u20133 mrad).",
    feedbackIncorrect:
      "1 milliradian of divergence equals 1 mm expansion per metre of distance. This is covered in Section 1.5.",
  },
  {
    id: 12,
    question:
      "Which of the following best describes irradiance?",
    options: [
      "Total optical energy output per second",
      "The rate at which a beam spreads over distance",
      "Power per unit area at a given point",
      "The wavelength of the beam",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Irradiance (E, in W/m\u00b2) is the power per unit area at a given point. It directly relates to biological effect and is calculated as E = P / A.",
    feedbackIncorrect:
      "Irradiance is power per unit area (W/m\u00b2). It determines the biological effect at a given point. See Section 1.5.",
  },
  {
    id: 13,
    question:
      "What type of injury mechanism is most likely from a brief accidental exposure to a Class 4 entertainment laser?",
    options: [
      "Photochemical injury from cumulative blue light",
      "Thermomechanical injury from shockwaves",
      "Thermal injury from rapid heating of retinal tissue",
      "UV-induced chemical burns",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Thermal injury \u2014 rapid heating of the retinal pigment epithelium \u2014 is the most common injury mechanism for entertainment laser exposures. It occurs from even very brief exposures and produces no pain.",
    feedbackIncorrect:
      "Thermal injury from rapid heating is the most common mechanism for entertainment laser exposures. Photochemical injury is cumulative and from longer exposures. Thermomechanical is from Q-switched pulsed lasers. See Section 1.6.",
  },
  {
    id: 14,
    question:
      "Why is 445 nm blue laser light of particular concern for cumulative exposure?",
    options: [
      "Blue light is the most powerful wavelength",
      "Blue wavelengths cause photochemical retinal damage that is cumulative",
      "Blue light cannot be filtered by safety eyewear",
      "The eye is most sensitive to blue light",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Wavelengths below ~500 nm cause photochemical retinal injury that is dose-dependent and cumulative, unlike thermal injury. 445 nm blue diode lasers are extremely common in entertainment, making this an emerging concern.",
    feedbackIncorrect:
      "Blue light (below ~500 nm) causes photochemical injury that is cumulative \u2014 repeated sub-threshold exposures add up over time. This is different from thermal injury. See Section 1.6.",
  },
  {
    id: 15,
    question:
      "How much higher is the skin injury threshold compared to the retinal injury threshold for visible laser radiation?",
    options: [
      "About 10\u00d7 higher",
      "About 100\u00d7 higher",
      "About 1,000\u00d7 higher",
      "About the same",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The skin injury threshold is roughly three orders of magnitude (1,000\u00d7) higher than the retinal injury threshold, because the skin lacks the focusing optics of the eye.",
    feedbackIncorrect:
      "The skin injury threshold is approximately 1,000\u00d7 higher than the retinal threshold. This is because the skin has no optical gain \u2014 no lens to concentrate the beam. See Section 1.7.",
  },
  {
    id: 16,
    question:
      "Which of the following is NOT a reason the aversion response is inadequate for Class 3B and Class 4 lasers?",
    options: [
      "Injury can occur in far less than 0.25 seconds",
      "Spectators may deliberately override it to watch effects",
      "The aversion response only works in darkness",
      "Invisible beams (IR, UV) do not trigger it at all",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. The aversion response works in all lighting conditions \u2014 it is triggered by sudden bright light. The three actual reasons it fails are: speed of injury (faster than 0.25s), override behaviour (spectators looking at effects), and invisible hazards (IR/UV beams). See Section 1.8.",
    feedbackIncorrect:
      "The aversion response works regardless of ambient lighting. The actual reasons it fails for Class 3B/4 are: injury occurs faster than 0.25s, people override it at events, and invisible beams don\u2019t trigger it. See Section 1.8.",
  },
  {
    id: 17,
    question:
      "What does the \u2018R\u2019 in Class 3R stand for?",
    options: ["Restricted", "Reduced", "Regulated", "Reflected"],
    correctIndex: 0,
    feedbackCorrect:
      "Correct. The \u2018R\u2019 stands for \u2018restricted\u2019 \u2014 meaning restricted requirements compared to Class 3B. Class 3R slightly exceeds Class 2 limits (up to 5 mW for visible beams) but has lower risk than Class 3B.",
    feedbackIncorrect:
      "The \u2018R\u2019 stands for \u2018restricted\u2019 per IEC 60825-1 \u2014 meaning restricted (relaxed) requirements compared to Class 3B. See Section 1.3.",
  },
  {
    id: 18,
    question:
      "In an RGB laser projector, how is the full colour spectrum produced?",
    options: [
      "A white laser beam passes through a prism to separate colours",
      "Red, green, and blue sources are independently modulated and combined",
      "A single laser is tuned to different wavelengths",
      "Phosphor coatings on the output lens convert UV to visible colours",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. RGB projectors combine separate red, green, and blue laser sources using dichroic mirrors or combiners, with independent modulation of each colour allowing any colour within the gamut to be produced.",
    feedbackIncorrect:
      "RGB projectors use three separate laser sources (red, green, blue) that are independently modulated and combined via dichroic optics. See Section 1.4 and 1.9.",
  },
  {
    id: 19,
    question:
      "Flash blindness from a laser exposure below the MPE is:",
    options: [
      "Impossible \u2014 sub-MPE exposure has no visual effect",
      "A permanent injury requiring medical treatment",
      "A temporary afterimage effect that can impair vision for seconds to minutes",
      "Only caused by infrared wavelengths",
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Even sub-MPE exposure can cause flash blindness \u2014 a temporary afterimage that impairs vision for seconds to minutes. While not a permanent injury, it is dangerous for drivers, pilots, or machinery operators.",
    feedbackIncorrect:
      "Flash blindness is a temporary visual impairment (afterimage) that can occur even below the MPE. It is not permanent but can be dangerous in certain situations. See Section 1.6.",
  },
  {
    id: 20,
    question:
      "Which of the following statements about Class 4 lasers is correct?",
    options: [
      "They can cause eye injury only from direct beam exposure",
      "They can cause eye injury from viewing diffuse reflections, burn skin, and ignite fires",
      "They are not used in professional entertainment",
      "They are safe if the aversion response is functional",
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Correct. Class 4 lasers can cause eye injury from both direct and diffuse reflection exposure, burn skin, and act as fire ignition sources. Most professional entertainment laser projectors are Class 4.",
    feedbackIncorrect:
      "Class 4 is the highest hazard class. Unlike Class 3B (direct beam only), Class 4 adds hazards from diffuse reflections, skin burns, and fire ignition. See Section 1.3.",
  },
];
