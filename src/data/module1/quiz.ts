import { QuizQuestion } from "@/types";

export const module1Quiz: QuizQuestion[] = [
  {
    id: 1,
    question:
      "A laser projector emitting at 445 nm produces light in which part of the visible spectrum?",
    options: ["Red", "Green", "Blue", "Ultraviolet"],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. 445 nm falls in the blue portion of the visible spectrum (approximately 450\u2013495 nm). This wavelength is produced by GaN direct diode lasers and is the most common blue source in entertainment projectors.",
    feedbackIncorrect:
      "445 nm is in the blue range. The visible spectrum runs from ~380 nm (violet) to ~780 nm (red). Blue occupies roughly 450\u2013495 nm. Refer to the wavelength\u2013colour table in Section 1.1.",
  },
  {
    id: 2,
    question:
      "Which laser class represents the minimum threshold at which direct beam exposure can cause eye injury in less time than the human aversion response (0.25 s)?",
    options: ["Class 2", "Class 3R", "Class 3B", "Class 4"],
    correctIndex: 2,
    feedbackCorrect:
      "Correct. Class 3B lasers can cause eye injury from direct beam exposure within durations shorter than the 0.25 second aversion response. This is why the aversion response is not considered a sufficient safety control for Class 3B and above. Class 4 also meets this criterion but is not the minimum threshold class.",
    feedbackIncorrect:
      "Class 3B is the lowest class at which the aversion response is considered insufficient protection against eye injury from direct beam exposure. Class 2 relies on the aversion response for safety. Class 3R presents some risk but is generally manageable with reduced requirements. Review Section 1.3 and Section 1.8.",
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
      "Correct. The retina has no pain receptors. Retinal thermal injury from laser exposure produces no sensation of pain at the time of injury. The affected person may notice a blind spot, visual disturbance, or afterimage, but will not feel the injury occurring. This is a critical safety concept \u2014 absence of pain does not mean absence of injury.",
    feedbackIncorrect:
      "The correct answer is that the retina has no pain receptors. A person with a retinal laser injury may not be aware of it at the time, or may notice visual symptoms (blind spot, distortion) without pain. This is discussed in Section 1.6.",
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
      "Correct. DPSS green lasers pump a Nd:YVO\u2084 crystal at 808 nm to produce 1064 nm, which is then frequency-doubled to 532 nm. The residual 1064 nm infrared is normally filtered, but if the IR filter fails or is missing, an invisible Class 4 infrared beam is emitted alongside the visible green output. This invisible beam does not trigger the aversion response.",
    feedbackIncorrect:
      "The hazard is a residual 1064 nm infrared beam from the Nd:YVO\u2084 gain medium. In DPSS lasers, the frequency-doubling process converts only a portion of the 1064 nm output to 532 nm green. The remaining 1064 nm must be filtered. Filter failure = invisible infrared beam. Review Section 1.9.",
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
      "Correct. The cornea and lens act as a focusing system, concentrating a collimated laser beam onto an extremely small spot on the retina. This optical gain \u2014 up to approximately 100,000\u00d7 \u2014 means the irradiance (power per unit area) on the retina is vastly higher than at the cornea. The skin has no equivalent focusing mechanism, which is why its injury threshold is roughly 1,000\u00d7 higher than the retina\u2019s.",
    feedbackIncorrect:
      "The key factor is optical gain. The eye\u2019s cornea and lens focus incoming laser light to a tiny spot on the retina, amplifying the irradiance by up to 100,000 times. The skin has no such focusing mechanism. This is covered in Section 1.6.",
  },
];
