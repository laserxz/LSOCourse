import { Section } from "@/types";

export const module3Sections: Section[] = [
  {
    id: "3.1",
    title: "What Is Maximum Permissible Exposure (MPE)?",
    paragraphs: [
      "Maximum Permissible Exposure (MPE) is the highest level of laser radiation to which a person may be exposed without suffering adverse biological effects. It is the fundamental safety limit that underpins every zone calculation, exclusion distance, and control measure in entertainment laser operations.",
      "MPE values are defined in IEC 60825-1, Table A.1 (for the eye) and Table A.4 (for the skin). AS/NZS IEC 60825.3:2022 references these tables directly. The MPE is not a single number — it varies depending on wavelength, exposure duration, and whether the exposure is to the eye or the skin.",
      "For entertainment laser operations, the relevant MPE values are those for visible wavelengths (400–700 nm) and exposure durations ranging from microseconds (a scanning beam sweeping across the eye) to tens of seconds (a person staring into a static beam effect). The eye MPE is always more restrictive than the skin MPE — typically by a factor of 1,000 or more — because of the optical gain of the eye discussed in Module 1.",
      "The MPE is expressed as irradiance (W/m²) for continuous-wave (CW) lasers or as radiant exposure (J/m²) for pulsed exposures. In entertainment, most lasers are CW, so you will typically work with irradiance values. For a CW visible laser with an exposure duration of 0.25 seconds (the aversion response time), the corneal MPE is approximately 25.4 W/m² for wavelengths between 400 and 700 nm.",
      "It is critical to understand that the MPE is a limit, not a target. Operating at or near the MPE does not mean the exposure is safe — it means the exposure is at the boundary of what is considered tolerable. Good practice is to ensure actual exposure levels are well below the MPE, not merely at or just under it.",
    ],
    keyTakeaway:
      "MPE is the maximum laser radiation level that should not cause biological harm. It varies by wavelength, exposure duration, and tissue type. For entertainment work, the eye MPE for CW visible lasers is approximately 25.4 W/m² at a 0.25-second exposure. Always aim to be well below the MPE, not merely at or just under it.",
  },
  {
    id: "3.2",
    title: "MPE for Different Exposure Scenarios",
    paragraphs: [
      "The MPE is not a fixed number — it changes with the exposure scenario. Understanding which scenario applies is essential for correct safety assessment. The standard identifies several exposure conditions relevant to entertainment laser operations.",
      "Direct intrabeam viewing — This is the worst case: a person looking directly into the laser beam. The full beam power enters the eye and is focused onto the retina. This scenario applies when a beam could strike an audience member's eye directly, such as during audience scanning effects or if a beam is accidentally directed into the crowd.",
      "Diffuse reflection viewing — When a laser beam hits a surface (wall, floor, scenery), it scatters in many directions. The reflected radiation is much less intense than the direct beam, but for Class 4 lasers, even diffuse reflections can exceed the MPE at close range. This scenario applies when assessing the safety of beam termination points and surfaces near beam paths.",
      "Extended-source viewing — When the apparent size of the laser source (as seen by the eye) exceeds the minimum angular subtense (1.5 mrad), the retinal image is spread over a larger area, and the MPE is relaxed by a correction factor. This applies to some scanning laser effects where the scanned pattern subtends a larger angle than the raw beam.",
      "Scanning beam exposure — This is the most common scenario in entertainment. The beam sweeps across a point in space (and potentially across an eye). The effective exposure duration is determined by the scan speed and beam diameter — typically microseconds to milliseconds. The faster the scan, the shorter the effective exposure, and the higher the instantaneous power can be while remaining below the MPE.",
      "For a scanning beam, the effective exposure duration is calculated as: t_eff = d / v, where d is the beam diameter at the point of exposure and v is the linear scan velocity at that point. This is the foundation of scan-speed safety calculations covered in Module 5.",
    ],
    keyTakeaway:
      "Different exposure scenarios have different MPE values. Direct intrabeam viewing is the most hazardous. Scanning beams have very short effective exposure times, allowing higher instantaneous power while potentially remaining below the MPE. Always identify which exposure scenario applies before selecting the correct MPE value.",
  },
  {
    id: "3.3",
    title: "The Nominal Ocular Hazard Distance (NOHD)",
    paragraphs: [
      "The Nominal Ocular Hazard Distance (NOHD) is the distance from the laser source along the beam axis at which the beam irradiance drops to the MPE for the eye. Inside the NOHD, direct viewing of the beam is potentially hazardous. Beyond the NOHD, the beam has spread enough that its irradiance is below the MPE.",
      "The NOHD depends on three beam parameters: power, divergence, and the applicable MPE. The standard formula for a collimated Gaussian beam is: NOHD = (1/divergence) × sqrt((4 × Power) / (pi × MPE) - beam_diameter²). In practice, for entertainment lasers with small beam diameters relative to the NOHD, this simplifies to approximately: NOHD ≈ (1/divergence) × sqrt(4P / (pi × MPE)).",
      "To illustrate: a 1 W green (520 nm) laser with 1.0 mrad divergence has a NOHD of approximately 400 metres. A 5 W laser of the same wavelength and divergence has a NOHD of approximately 890 metres. A 20 W laser: approximately 1,780 metres. The NOHD scales with the square root of power — doubling power increases NOHD by about 41%, not 100%.",
      "These distances are enormous compared to typical venue dimensions. A 20 W laser can be hazardous for direct viewing at nearly 2 kilometres. This is why engineering controls, beam termination, and exclusion zones are essential — you cannot rely on distance alone to protect people in most indoor (or even outdoor) settings.",
      "The NOHD is calculated for the unaided eye — the standard 7 mm pupil diameter limiting aperture defined in IEC 60825-1. If optical instruments (binoculars, telephoto lenses, telescopes) are involved, the effective collecting aperture is much larger, and the hazard distance increases dramatically. The Extended NOHD (ENOHD) accounts for this and can be many times the standard NOHD.",
    ],
    keyTakeaway:
      "The NOHD tells you how far from the laser the beam remains an eye hazard. For entertainment lasers, NOHDs are typically hundreds to thousands of metres — far beyond any venue dimension. This means the beam is hazardous along its entire path within any practical indoor or outdoor space. Never assume distance provides adequate protection.",
  },
  {
    id: "3.4",
    title: "The Nominal Hazard Zone (NHZ)",
    paragraphs: [
      "While the NOHD is a one-dimensional distance along the beam axis, the Nominal Hazard Zone (NHZ) is a three-dimensional volume of space within which laser radiation exceeds the applicable MPE. The NHZ accounts for the actual geometry of the laser display — beam paths, angles, reflections, and scanning patterns.",
      "For a single static beam, the NHZ is essentially a cone extending from the projector aperture along the beam path to the NOHD, with the cone width determined by beam divergence. But entertainment laser displays are rarely single static beams. They involve multiple beams, scanning patterns, moving effects, and interactions with surfaces.",
      "The NHZ must be determined for the complete display configuration: all beam paths at all points during the show, including worst-case positions (e.g., scanner at maximum deflection, beam at minimum height above audience). Any volume of accessible space where any beam path could deliver radiation above the MPE during any part of the show is within the NHZ.",
      "In practice, determining the NHZ for a laser display involves mapping out the projector position and orientation, the full range of beam deflection angles, the beam parameters (power, divergence), and the physical boundaries of the space (walls, ceiling, floor). The zone extends until the beam is either terminated by an opaque surface or has diverged enough that irradiance drops below the MPE.",
      "The NHZ is the basis for establishing exclusion zones, audience separation distances, and crew access restrictions. If a person's eyes can be within the NHZ during the show, additional controls are required — either the beam parameters must be reduced, the geometry must be changed, or physical barriers must prevent access.",
    ],
    keyTakeaway:
      "The NHZ is the three-dimensional hazard volume around all beam paths in a laser display. It accounts for scanning angles, beam geometry, and reflections. Every point in space where a person's eyes could be exposed above the MPE is within the NHZ. Your exclusion zones and control measures must keep people out of the NHZ — or reduce the NHZ to keep it away from people.",
  },
  {
    id: "3.5",
    title: "Zone Classification System",
    paragraphs: [
      "AS/NZS IEC 60825.3:2022, Section 5, defines a zone classification system that divides the space around a laser display into distinct areas based on radiation levels. Each zone has specific access restrictions and control requirements.",
      "Laser-free zone — Any area where laser radiation levels are below the MPE at all times during the display. No laser safety controls are required for occupants. The audience area must be a laser-free zone unless audience scanning is being performed with compliant power levels.",
      "Audience scanning zone — The zone within which scanning laser beams intentionally sweep over the audience. The standard permits this only when the effective exposure from the scanning beam is below the MPE, taking into account scan speed, beam power, beam diameter, and the possibility of scanner failure. The requirements for audience scanning are among the most stringent in the standard and are covered in detail in Module 5.",
      "Controlled zone — An area where laser radiation may exceed the MPE, but access is restricted to trained, authorised personnel wearing appropriate laser safety eyewear. The controlled zone includes the area around projectors during setup, alignment, and testing. Only persons with a legitimate need, proper training, and correct PPE should enter a controlled zone.",
      "Exclusion zone — An area where laser radiation exceeds the MPE and from which all persons are excluded. No access is permitted during laser operation — not even with safety eyewear. Exclusion zones are established where beam irradiance is too high for any practical PPE to provide adequate protection, or where the risk is simply too great to allow any human presence.",
      "The relationship between these zones is hierarchical: exclusion zones sit within controlled zones, which sit within (or adjacent to) the audience/performance area, which is surrounded by the laser-free zone. The LSO's job is to define these zones accurately, ensure the boundaries are maintained, and verify that the appropriate controls are in place for each zone.",
    ],
    keyTakeaway:
      "The zone system provides a structured approach to managing laser hazards spatially. Laser-free zones require no controls. Audience scanning zones permit overhead beams at compliant levels. Controlled zones restrict access to trained, protected personnel. Exclusion zones prohibit all access. Define each zone boundary precisely and enforce it rigorously.",
  },
  {
    id: "3.6",
    title: "Calculating Exclusion Distances",
    paragraphs: [
      "Exclusion distances define the minimum separation between beam paths and occupied areas. These are the practical output of your zone calculations — the numbers that determine how high beams must be above audience heads, how far projectors must be from accessible areas, and where barriers must be placed.",
      "The minimum vertical separation distance (MVSD) is the most critical exclusion distance in most entertainment laser setups. It specifies how far above the audience the nearest beam path must be. AS/NZS IEC 60825.3:2022 specifies that scanning beams above the audience must be at least 3 metres above the floor level in the audience area. For static beams (non-scanning), the separation must be such that beam irradiance at any accessible point is below the MPE.",
      "The 3-metre rule is a minimum, not a recommendation. It accounts for standing audience members (assumed height up to approximately 2.1 metres), raised arms, and a safety margin. In venues with elevated areas (balconies, tiered seating, raised platforms), the 3-metre clearance must be measured from the highest occupied surface, not from the main floor.",
      "Horizontal exclusion distances are calculated from the NOHD and the beam geometry. For beams projected towards areas where people could be present (side walls, exits, bars, technical areas), you must calculate the irradiance at each accessible point along and adjacent to the beam path and ensure it is below the MPE. If it is not, physical barriers, beam blocks, or beam termination must be used.",
      "For outdoor displays, exclusion distances must account for the fact that beams may travel into uncontrolled airspace. AS/NZS IEC 60825.3 and CASA (Civil Aviation Safety Authority) require that beams do not enter navigable airspace at levels exceeding the MPE for pilots. This often means establishing very large exclusion zones — potentially hundreds of metres — or using beam blocks and elevation limits. Outdoor laser safety is covered further in Module 9.",
      "When calculating exclusion distances, always use the worst-case beam parameters: maximum power, minimum divergence (tightest beam), and the most conservative MPE for the applicable wavelength and exposure duration. Safety margins are built into the MPE values themselves, but there is no margin for calculation errors. Check your arithmetic twice.",
    ],
    keyTakeaway:
      "Exclusion distances translate MPE limits and NOHD calculations into physical boundaries. The minimum vertical separation for scanning beams above audiences is 3 metres above the highest occupied surface. Horizontal exclusion distances are derived from beam geometry and NOHD. Always use worst-case parameters and double-check your calculations.",
  },
  {
    id: "3.7",
    title: "Practical Zone Setup at a Venue",
    paragraphs: [
      "Zone calculations on paper are only useful if they translate into physical reality at the venue. The practical setup process requires surveying the space, marking boundaries, and implementing controls that maintain the zones throughout the event.",
      "Step 1: Survey the venue — Before any calculations, physically inspect the space. Measure ceiling heights, stage dimensions, audience area boundaries, balcony heights, and the positions of all accessible areas (bars, exits, toilets, technical positions, VIP areas). Identify reflective surfaces: mirrors, polished metal, glass, shiny floors. Note any surface that could redirect a beam into an uncontrolled area.",
      "Step 2: Position projectors — Projector placement determines beam geometry. Mount projectors as high as practically possible to maximise vertical separation from the audience. Consider the full deflection range of the galvo scanners — the beams can reach any angle within the scanner's mechanical range. The worst-case beam position (minimum height, maximum deflection towards audience) determines the zone boundary.",
      "Step 3: Set beam limits — Most professional laser controllers allow you to set maximum deflection angles (scan zones) that limit how far beams can travel. Use these to physically prevent beams from entering exclusion zones, even if the operator makes an error. Hardware-limited zones (set in the projector firmware) are more reliable than software-only limits. This is covered in Module 4.",
      "Step 4: Mark and enforce zones — Use physical barriers (crowd barriers, roping, tape) to mark the boundaries of controlled and exclusion zones. Brief all crew on zone locations and access rules. Ensure security or safety personnel understand which areas are restricted during laser operation. Document zone boundaries in the Display Safety Record with measurements.",
      "Step 5: Verify — Before the show, verify all zones with measurements and, where practical, with a laser power meter at key boundary points. Confirm that beam heights meet the minimum vertical separation distance at all points across the audience area. Walk the audience area and visually confirm that no beam can strike eye level. Verification is not optional — it is the final check that your calculations match reality.",
    ],
    keyTakeaway:
      "Zone setup is a five-step process: survey, position, limit, mark, verify. Paper calculations must be validated against the physical space. Use hardware beam limits where possible. Mark zone boundaries physically. Verify with measurements before the show. The DSR should document each step with measurements and confirmation.",
  },
  {
    id: "3.8",
    title: "The Binocular and Optical Hazard",
    paragraphs: [
      "The standard NOHD and MPE calculations assume the unaided eye with a 7 mm pupil diameter. Optical instruments — binoculars, telephoto camera lenses, telescopes, even some phone camera attachments — have much larger collecting apertures and can dramatically increase the hazard.",
      "When a person views a laser beam through binoculars, two things happen. First, the larger aperture of the binoculars collects more of the beam's energy than the unaided pupil — typically 20 to 50 times more for common binoculars (e.g., 50 mm aperture vs 7 mm pupil). Second, the binoculars focus this increased energy onto the same small retinal area (or an even smaller area due to the magnification optics). The combined effect can increase the retinal irradiance by a factor of 50 or more.",
      "The Extended NOHD (ENOHD) accounts for this increased hazard. It is calculated by multiplying the standard NOHD by the ratio of the optical instrument's aperture to the 7 mm pupil diameter: ENOHD = NOHD × (D_optic / 7 mm). For 50 mm binoculars: ENOHD ≈ NOHD × 7.1. A laser with a 400 m NOHD would have an ENOHD of approximately 2,840 metres with 50 mm binoculars.",
      "This is particularly relevant for outdoor laser displays where spectators, photographers, or bystanders may use optical instruments. At outdoor festivals, telephoto lenses (apertures of 70–200 mm) are common. At public events near observation points, tourists with binoculars may be present. For outdoor displays near airports, pilots may use binoculars or aircraft optical systems.",
      "The standard requires that the hazard from optical viewing aids be considered in the risk assessment. In practice, for indoor shows where optical instruments are unlikely, this may be noted and dismissed in the DSR with justification. For outdoor shows or events where photography with long lenses is expected, the ENOHD must be calculated and the exclusion zones adjusted accordingly.",
    ],
    keyTakeaway:
      "Binoculars and telephoto lenses can increase retinal hazard by 50× or more, extending the hazard distance by 7× or more. Always assess the likelihood of optical instrument use at your event. For outdoor displays, the ENOHD — not the NOHD — is the relevant hazard distance. Document your optical hazard assessment in the DSR.",
  },
  {
    id: "3.9",
    title: "Common Calculation Pitfalls",
    paragraphs: [
      "MPE and zone calculations are not inherently complex, but they involve multiple parameters and easy-to-make errors that can produce dangerously wrong results. Being aware of common pitfalls helps you avoid them.",
      "Using total projector power instead of per-beam power — A 10 W RGB projector does not emit a single 10 W beam. The total power is split across wavelengths, and each wavelength exits the projector as a separate beam (or combined beam). When calculating MPE for a specific wavelength, use the power of that wavelength component. However, when all wavelengths are combined into a single beam and simultaneously enter the eye, the total combined power must be used for the MPE assessment.",
      "Forgetting to account for multiple projectors — If two projectors' beams can overlap at the same point in space (and potentially at the same point on someone's retina), the combined irradiance from both beams must be considered. This is particularly relevant for multi-projector setups at large events. The standard requires that the cumulative exposure from all sources be assessed.",
      "Using the wrong exposure duration — The MPE changes with exposure duration. Using a 10-second exposure MPE when the actual exposure scenario is a 0.25-second aversion-response case results in an MPE that is too lenient. Conversely, using a 0.25-second MPE for a fast-scanning beam (microsecond effective exposure) is overly conservative and may unnecessarily restrict your show. Match the MPE to the realistic exposure scenario.",
      "Neglecting the 3-metre rule — Calculating that beam irradiance is below the MPE at audience head height does not exempt you from the minimum 3-metre vertical separation for scanning beams. The 3-metre rule is a normative requirement of the standard, independent of MPE calculations. Both must be satisfied.",
      "Not accounting for venue geometry — A beam aimed at a wall may reflect off a glossy surface into the audience area. A beam aimed upward in a venue with a low, white ceiling may produce a diffuse reflection bright enough to exceed the MPE. Calculations must account for the actual surfaces and geometry of the specific venue, not just the direct beam path.",
      "The best defence against calculation errors is peer review. Have another qualified person check your calculations. The LPA review of the DSR provides this, but ideally your calculations are checked before you arrive at the venue, not during final sign-off.",
    ],
    keyTakeaway:
      "Common errors include confusing total power with per-beam power, ignoring multiple projectors, selecting the wrong exposure duration, forgetting the 3-metre minimum, and overlooking reflective surfaces. Peer review of calculations is essential — errors in MPE calculations directly translate to errors in safety. Use checklists and have a second pair of eyes on every calculation.",
  },
];
