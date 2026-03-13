import { Section } from "@/types";

export const module1Sections: Section[] = [
  {
    id: "1.1",
    title: "The Electromagnetic Spectrum",
    paragraphs: [
      "Laser light is electromagnetic radiation \u2014 fundamentally the same type of energy as radio waves, microwaves, infrared, ultraviolet, and X-rays. What distinguishes these from one another is their wavelength.",
      "The electromagnetic spectrum spans from extremely long radio waves (wavelengths measured in metres) through to extremely short gamma rays (wavelengths measured in fractions of a nanometre). Somewhere in the middle of this vast range sits a narrow band that the human eye can detect: the visible spectrum, spanning approximately 380 nm to 780 nm.",
      "To put this in perspective, the entire visible spectrum \u2014 everything you have ever seen with your eyes \u2014 represents less than 0.0035% of the known electromagnetic spectrum.",
      "Within the visible range, wavelength determines colour: violet (380\u2013450 nm), blue (450\u2013495 nm), green (495\u2013570 nm), yellow (570\u2013590 nm), orange (590\u2013620 nm), and red (620\u2013780 nm).",
      "Entertainment laser displays operate exclusively within this visible range (and occasionally just outside it into near-UV and near-IR). AS/NZS IEC 60825.3:2022 explicitly scopes itself to laser output between 380 nm and 780 nm \u2014 the visible spectrum.",
    ],
    keyTakeaway:
      "Every laser effect you will ever design, assess, or supervise produces light within or near the visible spectrum. The wavelength of that light determines its colour, its biological interaction with tissue, and the applicable Maximum Permissible Exposure (MPE) limits. Understanding the spectrum is the foundation of everything that follows.",
    visualKey: "electromagnetic-spectrum",
  },
  {
    id: "1.2",
    title: "What Makes Laser Light Different",
    paragraphs: [
      "A theatre spotlight and a laser projector both produce visible light. But laser light has three properties that make it fundamentally different \u2014 and fundamentally more hazardous.",
      "Monochromaticity \u2014 A laser emits light at a single, precise wavelength (or very close to it). A red laser at 638 nm produces light at 638 nm, not a spread of wavelengths that your eye averages into \u201cred.\u201d A conventional red lamp produces a broad spectrum that includes orange, red, and deep red wavelengths. This matters for safety because MPE limits are wavelength-specific \u2014 the narrower the emission, the more precisely you can evaluate the hazard.",
      "Coherence \u2014 In laser light, the individual waves are synchronised \u2014 their peaks and troughs align in both time (temporal coherence) and space (spatial coherence). Think of the difference between a crowd all stepping randomly versus a marching band in lockstep. Coherent light can be focused to an extremely small point, concentrating energy into a tiny area. This is why a 1-watt laser can cause eye injury while a 60-watt incandescent globe cannot \u2014 the laser\u2019s energy is concentrated rather than dispersed.",
      "Collimation \u2014 A laser beam is highly directional. It travels in a near-parallel beam that spreads very slowly over distance (the rate of spread is called divergence, covered in Section 1.5). A conventional light source radiates in all directions. This collimation means a laser beam remains hazardous at long distances \u2014 potentially hundreds of metres from the source in the case of entertainment lasers. The energy per unit area does not drop off rapidly as it does with a conventional light.",
      "These three properties combine to make laser light uniquely useful for displays \u2014 and uniquely dangerous. A few watts of laser power, concentrated into a tight, coherent beam, can deliver enough energy to a small area of tissue (such as the retina) to cause permanent injury in a fraction of a second.",
    ],
    keyTakeaway:
      "Monochromaticity gives you a precise, evaluable wavelength. Coherence enables extreme focus. Collimation maintains that hazard over distance. These are the reasons Class 3B and 4 lasers require the level of safety management this course covers.",
    visualKey: "ordinary-vs-laser",
  },
  {
    id: "1.3",
    title: "Laser Classification",
    paragraphs: [
      "The international standard IEC 60825-1 defines a classification system for laser products based on their potential to cause biological harm. The class number is the single most important piece of information about any laser product \u2014 it tells you, at a glance, the general level of hazard.",
      "Entertainment laser projectors are overwhelmingly Class 3B or Class 4. But as an LSO, you need to understand the full classification system, because you may encounter lower-class laser products at venues (barcode scanners, laser pointers, alignment tools) and need to know whether they require safety controls.",
      "Class 1 \u2014 Inherently safe under all reasonably foreseeable conditions of use. The laser is either extremely low power or fully enclosed so that no hazardous radiation is accessible.",
      "Class 1M \u2014 Safe for the unaided eye, but potentially hazardous if viewed with optical instruments (magnifying glasses, binoculars, microscopes) that collect and focus the beam.",
      "Class 2 \u2014 Low-power visible lasers (up to 1 mW). Safe for brief accidental exposure because the eye\u2019s natural aversion response (blinking, looking away) limits the exposure duration.",
      "Class 2M \u2014 Same principle as Class 2, but potentially hazardous if viewed with optical instruments.",
      "Class 3R \u2014 Slightly exceeds Class 2 limits (up to 5 mW for visible beams). The \u201cR\u201d stands for \u201creduced\u201d requirements \u2014 lower risk than 3B, but direct viewing is potentially hazardous.",
      "Class 3B \u2014 Medium power (up to 500 mW). Beams are capable of causing eye injury from direct exposure, even with exposure durations shorter than the aversion response. This is the entry point for entertainment laser projectors.",
      "Class 4 \u2014 High power (above 500 mW). Beams are capable of causing eye injury from direct exposure and from viewing diffuse reflections. Class 4 lasers can also burn skin and act as fire ignition sources. Most professional entertainment laser projectors are Class 4.",
    ],
    keyTakeaway:
      "As an LSO for entertainment laser operations, you will almost exclusively deal with Class 3B and Class 4 laser products. These present immediate eye hazards from even momentary direct exposure. Class 4 adds skin burn and fire ignition risks. The entire safety framework in AS/NZS IEC 60825.3:2022 exists because of the hazards these classes present.",
    visualKey: "classification-hazard-scale",
  },
  {
    id: "1.4",
    title: "How a Laser Projector Works",
    paragraphs: [
      "Understanding what is inside a laser projector helps you understand how it can fail \u2014 and failure modes are central to risk assessment.",
      "The gain medium \u2014 This is the material that produces laser light when energy is pumped into it. In entertainment lasers, the gain medium is typically a semiconductor diode (for direct diode lasers) or a crystal such as Nd:YVO\u2084 (for DPSS \u2014 Diode Pumped Solid State \u2014 lasers).",
      "The resonator (optical cavity) \u2014 Two mirrors, one fully reflective and one partially transmissive, placed at either end of the gain medium. Light bounces back and forth, passing through the gain medium repeatedly. Each pass amplifies the light. The partially transmissive mirror allows a fraction to escape as the output beam.",
      "Beam manipulation optics \u2014 The raw laser beam passes through additional optical components. In a show laser projector, this typically includes galvanometer scanners (galvos): a pair of small mirrors mounted on fast-moving motors controlling horizontal and vertical deflection. The speed and precision of these galvos are critical safety parameters.",
      "Modern RGB projectors combine red, green, and blue laser sources using dichroic mirrors or combiners, with independent modulation of each colour source allowing the full visible spectrum to be produced.",
      "DPSS vs Direct Diode \u2014 Direct diode lasers emit directly at the desired wavelength (445 nm blue, 638 nm red). DPSS lasers use a diode to pump a crystal, requiring additional frequency conversion. The classic green (532 nm) entertainment laser is DPSS. DPSS systems are more complex, temperature-sensitive, and produce a residual infrared beam that must be filtered.",
    ],
    keyTakeaway:
      "A laser projector is an optical system with multiple potential failure points. The galvo scanners are the most safety-critical moving components \u2014 if they stop, you get a stationary beam, which is the highest-probability hazard event in entertainment laser operation (covered in Module 5). Understanding the internal architecture helps you understand risk.",
    visualKey: "projector-cross-section",
  },
  {
    id: "1.5",
    title: "Beam Parameters",
    paragraphs: [
      "To evaluate whether a laser beam is safe in a given scenario, you need to quantify it. Five parameters define the hazard potential of any laser beam:",
      "Wavelength (\u03bb, in nanometres) \u2014 The colour of the beam. Wavelength determines which tissue structures are at risk, what type of injury can occur, and which MPE value applies. The eye is most sensitive to green (~520\u2013555 nm) and the retina is most efficiently heated by wavelengths between 400 nm and 1400 nm.",
      "Power (P, in watts or milliwatts) \u2014 The total optical energy output per unit time. A 5 W laser projector delivers 5 joules of energy every second. Power is the starting point for any safety calculation. For multi-colour RGB projectors, the stated power is typically the combined output.",
      "Divergence (\u03b8, in milliradians, mrad) \u2014 The rate at which the beam spreads as it travels. A beam with 1 mrad divergence expands by 1 mm for every metre of travel. Entertainment laser beams typically have very low divergence (0.5\u20133 mrad). Lower divergence = tighter beam = higher irradiance = greater hazard distance.",
      "Beam diameter (d, in millimetres) \u2014 The cross-sectional width of the beam. At the projector aperture, typically 2\u20136 mm. At a distance: d(at distance) = d\u2080 + (\u03b8 \u00d7 distance).",
      "Irradiance (E, in W/m\u00b2) \u2014 The power per unit area at a given point. This directly relates to biological effect. Calculated as E = P / A, where A is the cross-sectional area of the beam (or the 7 mm diameter limiting aperture for eye exposure assessment per IEC 60825-1).",
      "These parameters are interconnected. A high-power laser with high divergence may be less hazardous at distance than a lower-power laser with very low divergence, because the energy is spread over a larger area. Safety assessment requires considering all parameters together.",
    ],
    keyTakeaway:
      "Wavelength, power, divergence, beam diameter, and irradiance are the five numbers that define the hazard. You cannot assess laser safety without them. The MPE calculations in Module 3 depend directly on these parameters.",
    visualKey: "beam-parameter-calculator",
  },
  {
    id: "1.6",
    title: "Biological Effects on the Eye",
    paragraphs: [
      "The eye is the organ most vulnerable to laser injury. Understanding why \u2014 and how different injury types occur \u2014 is essential for any LSO.",
      "When visible or near-infrared laser light enters the eye, the cornea and lens focus it onto the retina, just as they focus any image. But because laser light is collimated and coherent, the focused spot on the retina is extremely small \u2014 potentially as small as 10\u201320 micrometres. This optical gain means the irradiance on the retina can be up to 100,000 times greater than the irradiance at the cornea.",
      "Thermal injury \u2014 Caused by excessive heating of the absorbing tissue in the retina. The laser energy is absorbed by the retinal pigment epithelium, converting to heat faster than the tissue can dissipate it. This causes a microscopic burn on the retina. Thermal injury occurs rapidly, can happen from even very brief exposures (microseconds to milliseconds), and produces no pain (the retina has no pain receptors). This is the most common injury mechanism for entertainment laser exposures.",
      "Photochemical injury \u2014 A chemical reaction in the retina caused by prolonged or cumulative exposure, particularly to blue light (wavelengths below ~500 nm). Unlike thermal injury, photochemical injury is dose-dependent and cumulative. This is significant because 445 nm blue diode lasers are extremely common in entertainment.",
      "Thermomechanical injury \u2014 Occurs when extremely rapid heating causes explosive expansion of tissue, generating mechanical shockwaves. Associated with very short, high-peak-power pulses (Q-switched lasers). Uncommon in entertainment as most lasers are continuous wave (CW).",
      "Sub-injury effects \u2014 Even exposure below the MPE can cause flash blindness (a temporary afterimage effect). While not an injury, flash blindness can impair vision for seconds to minutes, which is dangerous for drivers, pilots, or machinery operators.",
    ],
    keyTakeaway:
      "The eye\u2019s optics amplify laser irradiance on the retina by up to 100,000\u00d7. Thermal injury from brief exposure is the most likely harm from entertainment lasers. Photochemical injury from cumulative blue-light exposure is an emerging concern. Neither injury type produces pain at the time of exposure \u2014 the person may not know they have been injured.",
    visualKey: "eye-anatomy",
  },
  {
    id: "1.7",
    title: "Biological Effects on Skin",
    paragraphs: [
      "Skin injury from entertainment lasers is possible but requires significantly higher exposure levels than eye injury.",
      "The skin injury threshold for visible and near-infrared laser radiation is roughly three orders of magnitude (1,000\u00d7) higher than the retinal injury threshold. This is because the skin lacks the focusing optics of the eye \u2014 there is no optical gain \u2014 and skin tissue is generally more resilient to localised heating than the delicate retinal structures.",
      "That said, Class 4 lasers \u2014 which dominate professional entertainment \u2014 can and do deliver enough power to burn skin on contact. Effects range from a sensation of warmth, through reddening and mild pain, to blistering in more severe cases.",
      "Ultraviolet laser exposure presents additional skin risks analogous to sunburn \u2014 photochemical damage that is cumulative and may not be immediately apparent. UV lasers in entertainment are discussed in Module 11.",
    ],
    keyTakeaway:
      "For entertainment laser work, eye protection is always the priority. Skin injury is unlikely at normal working distances but becomes a real possibility when working close to high-power Class 4 sources during alignment and setup.",
    visualKey: "eye-vs-skin-thresholds",
  },
  {
    id: "1.8",
    title: "Why the Aversion Response Fails",
    paragraphs: [
      "The human eye has a natural protective mechanism: when suddenly exposed to bright light, you blink and turn away. This aversion response is typically assumed to limit accidental exposure to approximately 0.25 seconds.",
      "For Class 2 lasers (up to 1 mW), this response is considered sufficient protection. The Class 2 definition explicitly relies on it. For Class 3B and Class 4 lasers, the aversion response is inadequate for three reasons:",
      "Speed of injury \u2014 At the power levels used in entertainment (watts, not milliwatts), retinal damage can occur in far less than 0.25 seconds. A scanning beam that briefly sweeps across the eye delivers its energy as an effective pulse of microseconds to milliseconds. Even at scan speeds considered \u201csafe,\u201d a fault condition (scanner stop) can deliver a damaging exposure before any human response is possible.",
      "Override behaviour \u2014 Spectators may deliberately override their aversion response to continue watching an impressive laser effect. At entertainment events, the audience\u2019s instinct is to look at the lights, not look away. Alcohol and recreational substances further impair the aversion response.",
      "Invisible hazards \u2014 Near-infrared residual beams from DPSS lasers (if improperly filtered) and UV beams do not trigger the aversion response at all, because they are invisible. There is no bright flash to blink away from.",
    ],
    keyTakeaway:
      "Never rely on the human aversion response as a safety control for Class 3B or Class 4 laser operations. The standard\u2019s safety framework exists precisely because this biological safeguard is insufficient. Engineering controls, exclusion zones, and MPE compliance are the only reliable protections.",
    visualKey: "aversion-response-timeline",
  },
  {
    id: "1.9",
    title: "Common Entertainment Laser Wavelengths",
    paragraphs: [
      "Modern entertainment laser projectors use three primary wavelengths to produce the full colour spectrum through additive RGB mixing:",
      "445 nm \u2014 Blue (direct diode). Deep blue produced by GaN (Gallium Nitride) laser diodes. High-power blue diodes (2 W\u201310 W+) are readily available and relatively inexpensive. 445 nm falls within the blue-light photochemical hazard range (below 500 nm). For longer exposure durations, the photochemical MPE is more restrictive than the thermal MPE.",
      "520 nm \u2014 Green (direct diode). True green from InGaN (Indium Gallium Nitride) diodes, now the preferred green source. Better stability, faster modulation, and no residual infrared output. Green is perceived as the brightest colour by the human eye (peak sensitivity ~555 nm). This visual brightness can create a false sense of safety.",
      "532 nm \u2014 Green (DPSS). The legacy green source: an 808 nm diode pumps a Nd:YVO\u2084 crystal to produce 1064 nm, frequency-doubled to 532 nm via KTP crystal. DPSS green lasers produce a residual 1064 nm infrared beam that must be filtered. If the IR filter fails, an invisible Class 4 beam is emitted alongside the visible green.",
      "638 nm \u2014 Red (direct diode). Orange-red from AlGaInP (Aluminium Gallium Indium Phosphide) diodes. Red wavelengths are perceived as less bright than green at equal power. A red beam can deliver more energy than its visual appearance suggests.",
      "Full-spectrum mixing \u2014 By modulating the intensity of the red, green, and blue sources independently, the projector can produce any colour within its gamut. Each wavelength component contributes independently to the total exposure hazard.",
    ],
    keyTakeaway:
      "Know the wavelengths in your projector. Each wavelength has different biological interaction characteristics and different MPE values. Blue (445 nm) carries cumulative photochemical risk. Green (520/532 nm) appears deceptively bright. DPSS systems have infrared emission risks. Total projector power is the sum of all wavelength components.",
    visualKey: "entertainment-wavelengths",
  },
];
