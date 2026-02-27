const questionBank = {

// ═══════════════════════════════════════════════════
//  PHYSICS  (~67 questions)
// ═══════════════════════════════════════════════════
physics: [
  // ── Ch 8: Motion ──
  {chapter:"Motion",question:"A body is said to be in uniform motion if it covers:",options:["Equal distance in equal intervals of time","Unequal distance in equal intervals of time","Equal distance in unequal intervals of time","None of the above"],answer:0,explanation:"Uniform motion means equal distances in equal time intervals, however small."},
  {chapter:"Motion",question:"The SI unit of acceleration is:",options:["m/s","m/s²","km/h","m²/s"],answer:1,explanation:"Acceleration = rate of change of velocity. SI unit is m/s²."},
  {chapter:"Motion",question:"The slope of a distance-time graph gives:",options:["Acceleration","Speed","Distance","Time"],answer:1,explanation:"Slope = Δdistance / Δtime = speed."},
  {chapter:"Motion",question:"A car travels 100 km in 2 hours. Its average speed is:",options:["200 km/h","50 km/h","100 km/h","25 km/h"],answer:1,explanation:"Average speed = 100/2 = 50 km/h."},
  {chapter:"Motion",question:"The area under a velocity-time graph represents:",options:["Speed","Acceleration","Displacement","Force"],answer:2,explanation:"Area under v-t graph = displacement of the object."},
  {chapter:"Motion",question:"Which of the following is a vector quantity?",options:["Speed","Distance","Velocity","Mass"],answer:2,explanation:"Velocity has both magnitude and direction — it is a vector."},
  {chapter:"Motion",question:"An object has moved through a distance. Can it have zero displacement?",options:["Yes","No","Only if speed is zero","Only in vacuum"],answer:0,explanation:"If the object returns to its starting point, displacement = 0."},
  {chapter:"Motion",question:"The numerical ratio of displacement to distance is:",options:["Always equal to 1","Always less than 1","Always greater than 1","Equal to or less than 1"],answer:3,explanation:"Displacement ≤ Distance, so the ratio is always ≤ 1."},
  {chapter:"Motion",question:"A body moving along a circular path has:",options:["Constant velocity","Constant speed","Both constant","Neither constant"],answer:1,explanation:"In uniform circular motion, speed is constant but velocity changes because direction changes."},
  {chapter:"Motion",question:"The second equation of motion is:",options:["v = u + at","s = ut + ½at²","v² = u² + 2as","s = vt"],answer:1,explanation:"The second equation: s = ut + ½at², where s = displacement, u = initial velocity, a = acceleration, t = time."},
  {chapter:"Motion",question:"If a body starts from rest, its initial velocity is:",options:["Maximum","9.8 m/s","Zero","Cannot be determined"],answer:2,explanation:"'Starts from rest' means the body was stationary, so u = 0."},
  {chapter:"Motion",question:"Odometer measures:",options:["Speed","Velocity","Distance","Acceleration"],answer:2,explanation:"An odometer records the total distance travelled by a vehicle."},
  {chapter:"Motion",question:"Speedometer of a car measures:",options:["Average speed","Instantaneous speed","Acceleration","Distance"],answer:1,explanation:"A speedometer shows the speed at that particular instant — instantaneous speed."},
  {chapter:"Motion",question:"When a body is thrown vertically upward, its velocity at the highest point is:",options:["Maximum","Minimum but not zero","Zero","Negative"],answer:2,explanation:"The body momentarily stops at the highest point, so velocity = 0."},

  // ── Ch 9: Force and Laws of Motion ──
  {chapter:"Force and Laws of Motion",question:"Newton's first law of motion is also known as the law of:",options:["Acceleration","Action and reaction","Inertia","Momentum"],answer:2,explanation:"Newton's 1st law: a body remains at rest or in uniform motion unless an external force acts — the law of inertia."},
  {chapter:"Force and Laws of Motion",question:"The SI unit of force is:",options:["Joule","Watt","Pascal","Newton"],answer:3,explanation:"Force SI unit = Newton (N). 1 N = 1 kg·m/s²."},
  {chapter:"Force and Laws of Motion",question:"According to Newton's second law, F = ?",options:["m × v","m × a","m × d","m × t"],answer:1,explanation:"F = ma (Force = mass × acceleration)."},
  {chapter:"Force and Laws of Motion",question:"The momentum of a 5 kg object moving at 10 m/s is:",options:["2 kg·m/s","15 kg·m/s","50 kg·m/s","0.5 kg·m/s"],answer:2,explanation:"Momentum = mass × velocity = 5 × 10 = 50 kg·m/s."},
  {chapter:"Force and Laws of Motion",question:"Newton's third law states:",options:["F = ma","Every action has an equal and opposite reaction","Objects at rest stay at rest","Energy is conserved"],answer:1,explanation:"For every action there is an equal and opposite reaction, acting on different bodies."},
  {chapter:"Force and Laws of Motion",question:"The rate of change of momentum equals:",options:["Velocity","Applied force","Acceleration","Impulse"],answer:1,explanation:"Newton's 2nd law: rate of change of momentum = applied force."},
  {chapter:"Force and Laws of Motion",question:"Inertia of a body depends on its:",options:["Velocity","Acceleration","Mass","Shape"],answer:2,explanation:"Greater the mass, greater the inertia. Inertia is directly proportional to mass."},
  {chapter:"Force and Laws of Motion",question:"When we shake a branch, fruits fall due to:",options:["Inertia of rest","Inertia of motion","Gravitational force only","Centripetal force"],answer:0,explanation:"Fruits tend to remain at rest (inertia of rest) while the branch moves, so they detach."},
  {chapter:"Force and Laws of Motion",question:"Action and reaction forces act on:",options:["Same body","Different bodies","Same body alternately","None"],answer:1,explanation:"Newton's 3rd law forces always act on two different bodies."},
  {chapter:"Force and Laws of Motion",question:"A 1 kg body has momentum 10 kg·m/s. Its velocity is:",options:["1 m/s","10 m/s","100 m/s","0.1 m/s"],answer:1,explanation:"p = mv → v = p/m = 10/1 = 10 m/s."},
  {chapter:"Force and Laws of Motion",question:"Conservation of momentum applies when:",options:["External force is applied","No external force acts","Friction is present","Gravity acts"],answer:1,explanation:"In the absence of external forces, total momentum of a system remains constant."},

  // ── Ch 10: Gravitation ──
  {chapter:"Gravitation",question:"The value of g on Earth is approximately:",options:["8.9 m/s²","9.8 m/s²","10.8 m/s²","6.67 m/s²"],answer:1,explanation:"Acceleration due to gravity (g) ≈ 9.8 m/s² on Earth's surface."},
  {chapter:"Gravitation",question:"The SI unit of G is:",options:["N·m²·kg⁻²","N·m·kg⁻¹","N·m²·kg⁻¹","N·m⁻²·kg²"],answer:0,explanation:"From F = Gm₁m₂/r², G has units N·m²·kg⁻²."},
  {chapter:"Gravitation",question:"Weight of a body on the Moon is about:",options:["Same as Earth","1/6 of Earth","6 times Earth","1/2 of Earth"],answer:1,explanation:"Moon's gravity is ~1/6th of Earth's, so weight is 1/6th."},
  {chapter:"Gravitation",question:"Mass of a body is:",options:["Same everywhere","Different on Moon","Zero in space","Depends on gravity"],answer:0,explanation:"Mass is constant everywhere — it's the amount of matter."},
  {chapter:"Gravitation",question:"An object thrown vertically upward — at the highest point, velocity is:",options:["Maximum","Zero","Equal to initial","Negative"],answer:1,explanation:"At the highest point it momentarily stops, velocity = 0."},
  {chapter:"Gravitation",question:"Gravitational force between two objects is:",options:["Directly proportional to distance","Inversely proportional to distance","Inversely proportional to square of distance","Independent of distance"],answer:2,explanation:"F = Gm₁m₂/r² — inversely proportional to square of distance."},
  {chapter:"Gravitation",question:"The value of G was first measured by:",options:["Newton","Galileo","Henry Cavendish","Kepler"],answer:2,explanation:"Henry Cavendish first experimentally determined the value of G in 1798."},
  {chapter:"Gravitation",question:"Free fall means acceleration equals:",options:["Zero","g (9.8 m/s²)","Less than g","More than g"],answer:1,explanation:"In free fall (no air resistance), the only acceleration is g = 9.8 m/s²."},
  {chapter:"Gravitation",question:"The weight of a body is given by:",options:["m × g","m × v","m × a","m / g"],answer:0,explanation:"Weight = mass × acceleration due to gravity = mg."},
  {chapter:"Gravitation",question:"Thrust per unit area is called:",options:["Force","Pressure","Density","Weight"],answer:1,explanation:"Pressure = Thrust (force) / Area. SI unit is Pascal (Pa)."},
  {chapter:"Gravitation",question:"An object floats in a liquid when:",options:["Its density > liquid density","Its density < liquid density","Its density = 0","Its weight = 0"],answer:1,explanation:"An object floats when its density is less than the liquid's density (buoyancy > weight)."},
  {chapter:"Gravitation",question:"Archimedes' principle relates to:",options:["Gravitational force","Buoyant force","Magnetic force","Frictional force"],answer:1,explanation:"Archimedes' principle: buoyant force on a submerged body = weight of displaced fluid."},

  // ── Ch 11: Work and Energy ──
  {chapter:"Work and Energy",question:"The SI unit of work is:",options:["Newton","Joule","Watt","Pascal"],answer:1,explanation:"Work = Force × Displacement. SI unit = Joule (J)."},
  {chapter:"Work and Energy",question:"Kinetic energy of an object is given by:",options:["mv","½mv²","mgh","½mv"],answer:1,explanation:"KE = ½mv²."},
  {chapter:"Work and Energy",question:"1 kWh equals:",options:["3.6 × 10⁶ J","3.6 × 10³ J","3.6 × 10⁹ J","3600 J"],answer:0,explanation:"1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J."},
  {chapter:"Work and Energy",question:"Energy due to position is called:",options:["Kinetic energy","Potential energy","Heat energy","Chemical energy"],answer:1,explanation:"Potential energy = energy due to position/configuration, e.g. mgh."},
  {chapter:"Work and Energy",question:"Power is defined as:",options:["Force × Distance","Work / Time","Energy × Time","Mass × Velocity"],answer:1,explanation:"Power = Work/Time. SI unit = Watt (W)."},
  {chapter:"Work and Energy",question:"Work done is zero when angle between force and displacement is:",options:["0°","45°","90°","60°"],answer:2,explanation:"W = Fs cos θ. At θ = 90°, cos 90° = 0, so W = 0."},
  {chapter:"Work and Energy",question:"The commercial unit of energy is:",options:["Joule","Watt","Kilowatt-hour","Newton-metre"],answer:2,explanation:"Kilowatt-hour (kWh) is the commercial unit of energy used in electricity billing."},
  {chapter:"Work and Energy",question:"A body at height h has potential energy:",options:["½mv²","mgh","mv","mah"],answer:1,explanation:"Gravitational PE = mgh (mass × g × height)."},
  {chapter:"Work and Energy",question:"Law of conservation of energy states that energy:",options:["Can be created","Can be destroyed","Can be transformed but total remains constant","Increases over time"],answer:2,explanation:"Energy can neither be created nor destroyed — it only changes form. Total energy remains constant."},
  {chapter:"Work and Energy",question:"1 Watt equals:",options:["1 J/s","1 J·s","1 kg·m/s","1 N/m"],answer:0,explanation:"1 Watt = 1 Joule per second."},

  // ── Ch 12: Sound ──
  {chapter:"Sound",question:"Sound waves are:",options:["Transverse waves","Longitudinal waves","Electromagnetic waves","None of these"],answer:1,explanation:"Sound waves are longitudinal — particles vibrate parallel to wave propagation."},
  {chapter:"Sound",question:"Speed of sound is maximum in:",options:["Air","Water","Steel","Vacuum"],answer:2,explanation:"Sound travels fastest in solids (steel ~5960 m/s), then liquids, then gases. Cannot travel in vacuum."},
  {chapter:"Sound",question:"Frequency of sound is measured in:",options:["Metre","Second","Hertz","Decibel"],answer:2,explanation:"Frequency = oscillations per second, unit = Hertz (Hz)."},
  {chapter:"Sound",question:"Audible range for humans is:",options:["Below 20 Hz","20 Hz to 20,000 Hz","Above 20,000 Hz","1 Hz to 100 Hz"],answer:1,explanation:"Humans can hear 20 Hz – 20,000 Hz (20 kHz)."},
  {chapter:"Sound",question:"Echo is produced due to:",options:["Refraction of sound","Reflection of sound","Diffraction of sound","Absorption of sound"],answer:1,explanation:"Echo = reflected sound returning to the listener after ≥ 0.1 s."},
  {chapter:"Sound",question:"Ultrasound has frequency:",options:["Less than 20 Hz","Between 20 Hz and 20 kHz","Greater than 20 kHz","Exactly 20 Hz"],answer:2,explanation:"Ultrasound = frequency > 20,000 Hz, above human hearing."},
  {chapter:"Sound",question:"Sound cannot travel through:",options:["Solids","Liquids","Gases","Vacuum"],answer:3,explanation:"Sound needs a medium — it cannot travel through vacuum."},
  {chapter:"Sound",question:"The loudness of sound is measured in:",options:["Hertz","Decibel","Metre","Watt"],answer:1,explanation:"Loudness is measured in decibels (dB)."},
  {chapter:"Sound",question:"SONAR stands for:",options:["Sound Navigation and Ranging","Sound Notification and Ranging","Solar Navigation and Ranging","Sound Navigation and Recording"],answer:0,explanation:"SONAR = Sound Navigation And Ranging, used to detect underwater objects."},
  {chapter:"Sound",question:"Infrasound has frequency:",options:["Less than 20 Hz","Between 20 Hz and 20 kHz","Greater than 20 kHz","Exactly 1000 Hz"],answer:0,explanation:"Infrasound = frequency below 20 Hz, below human audible range."},
  {chapter:"Sound",question:"Speed of sound in air at 20°C is approximately:",options:["332 m/s","344 m/s","500 m/s","1500 m/s"],answer:1,explanation:"Speed of sound in air at 20°C ≈ 344 m/s."},
  {chapter:"Sound",question:"Pitch of a sound depends on its:",options:["Amplitude","Frequency","Speed","Wavelength only"],answer:1,explanation:"Pitch is determined by frequency — higher frequency = higher pitch."},
  {chapter:"Sound",question:"Quality (timbre) of sound helps us distinguish between:",options:["Loud and soft sounds","High and low pitch","Different sources producing same note","Fast and slow sounds"],answer:2,explanation:"Timbre/quality depends on the waveform and helps identify different instruments playing the same note."},
  {chapter:"Sound",question:"Frequency = 1 / ___:",options:["Wavelength","Amplitude","Time period","Speed"],answer:2,explanation:"Frequency (f) = 1/T, where T is the time period."},
  {chapter:"Sound",question:"The relation between speed (v), frequency (f) and wavelength (λ) is:",options:["v = f/λ","v = fλ","v = λ/f","f = vλ"],answer:1,explanation:"Wave equation: speed = frequency × wavelength → v = fλ."},
  {chapter:"Sound",question:"Stethoscope works on the principle of:",options:["Refraction of sound","Reflection of sound","Diffraction of sound","Interference"],answer:1,explanation:"A stethoscope uses multiple reflection of sound to carry body sounds to the doctor's ears."},
  {chapter:"Sound",question:"Sound of frequency below 20 Hz is called:",options:["Ultrasound","Infrasound","Audible sound","Supersonic sound"],answer:1,explanation:"Infrasound = sound with frequency less than 20 Hz, below human hearing range. Elephants communicate using infrasound."},
  {chapter:"Motion",question:"The third equation of motion is:",options:["v = u + at","s = ut + ½at²","v² = u² + 2as","s = ½(u+v)t"],answer:2,explanation:"Third equation: v² = u² + 2as, relating velocity, acceleration and displacement."},
  {chapter:"Motion",question:"Distance is a ___ quantity:",options:["Vector","Scalar","Neither","Both"],answer:1,explanation:"Distance has only magnitude (no direction), making it a scalar quantity."},
  {chapter:"Motion",question:"If velocity-time graph is a straight line parallel to time axis, the body has:",options:["Uniform acceleration","Zero acceleration","Variable acceleration","Negative acceleration"],answer:1,explanation:"A horizontal line on v-t graph means constant velocity → acceleration = 0."}
],

// ═══════════════════════════════════════════════════
//  CHEMISTRY  (~67 questions)
// ═══════════════════════════════════════════════════
chemistry: [
  // ── Ch 1: Matter in Our Surroundings ──
  {chapter:"Matter in Our Surroundings",question:"Which is not a state of matter?",options:["Solid","Liquid","Gas","Energy"],answer:3,explanation:"Solid, liquid, and gas are the three states of matter. Energy is not a state of matter."},
  {chapter:"Matter in Our Surroundings",question:"Direct change from solid to gas is called:",options:["Evaporation","Condensation","Sublimation","Melting"],answer:2,explanation:"Sublimation = solid → gas directly, e.g. dry ice, camphor."},
  {chapter:"Matter in Our Surroundings",question:"Boiling point of water in Kelvin is:",options:["273 K","373 K","100 K","473 K"],answer:1,explanation:"100°C + 273 = 373 K."},
  {chapter:"Matter in Our Surroundings",question:"Particles of matter are in continuous:",options:["Rest","Motion","Compression","None"],answer:1,explanation:"Particles are in continuous random motion (Brownian motion)."},
  {chapter:"Matter in Our Surroundings",question:"Which state has the highest kinetic energy?",options:["Solid","Liquid","Gas","All equal"],answer:2,explanation:"Gas > Liquid > Solid in terms of particle kinetic energy."},
  {chapter:"Matter in Our Surroundings",question:"Temperature at which a solid melts is called:",options:["Boiling point","Melting point","Freezing point","Dew point"],answer:1,explanation:"Melting point = temperature at which solid → liquid."},
  {chapter:"Matter in Our Surroundings",question:"During change of state, temperature remains constant because energy is used to:",options:["Increase speed","Overcome interparticle forces","Increase mass","Decrease volume"],answer:1,explanation:"Latent heat is used to overcome interparticle attraction — temperature stays constant during state change."},
  {chapter:"Matter in Our Surroundings",question:"Which has the strongest interparticle forces?",options:["Solid","Liquid","Gas","Plasma"],answer:0,explanation:"Solids have the strongest interparticle forces, making them rigid."},
  {chapter:"Matter in Our Surroundings",question:"The latent heat of fusion of ice is:",options:["80 cal/g","540 cal/g","100 cal/g","40 cal/g"],answer:0,explanation:"Latent heat of fusion of ice = 80 cal/g or 334 J/g."},
  {chapter:"Matter in Our Surroundings",question:"Evaporation causes:",options:["Heating","Cooling","No temperature change","Boiling"],answer:1,explanation:"Evaporation absorbs energy from surroundings, causing a cooling effect."},
  {chapter:"Matter in Our Surroundings",question:"Rate of evaporation increases with:",options:["Increase in surface area","Decrease in temperature","Increase in humidity","Decrease in wind speed"],answer:0,explanation:"More surface area → more molecules escape → faster evaporation."},
  {chapter:"Matter in Our Surroundings",question:"Gases can be compressed because:",options:["Particles are close","Particles have large gaps","Particles are rigid","Particles don't move"],answer:1,explanation:"Gas particles have large interparticle spaces, allowing compression."},
  {chapter:"Matter in Our Surroundings",question:"The latent heat of vaporisation of water is:",options:["80 cal/g","540 cal/g","100 cal/g","334 cal/g"],answer:1,explanation:"Latent heat of vaporisation = 540 cal/g or 2260 J/g."},

  // ── Ch 2: Is Matter Around Us Pure ──
  {chapter:"Is Matter Around Us Pure",question:"A saturated solution contains:",options:["No solute","Maximum solute at given temperature","Only solvent","Unlimited solute"],answer:1,explanation:"Saturated solution = maximum solute dissolved at that temperature."},
  {chapter:"Is Matter Around Us Pure",question:"Which is a homogeneous mixture?",options:["Soil","Salt solution","Sand and water","Oil and water"],answer:1,explanation:"Salt solution is homogeneous — uniform composition throughout."},
  {chapter:"Is Matter Around Us Pure",question:"Tincture of iodine is:",options:["Iodine in water","Iodine in alcohol","Iodine in oil","Iodine in acid"],answer:1,explanation:"Tincture of iodine = iodine dissolved in alcohol."},
  {chapter:"Is Matter Around Us Pure",question:"Two miscible liquids are separated by:",options:["Filtration","Distillation","Sedimentation","Handpicking"],answer:1,explanation:"Distillation separates miscible liquids by boiling point difference."},
  {chapter:"Is Matter Around Us Pure",question:"An element is made up of:",options:["Different atoms","Same type of atoms","Molecules only","Ions only"],answer:1,explanation:"An element = one type of atom only."},
  {chapter:"Is Matter Around Us Pure",question:"A colloid has particle size between:",options:["1 to 100 nm","More than 100 nm","Less than 1 nm","More than 1 mm"],answer:0,explanation:"Colloid particles = 1 to 100 nm, between true solution and suspension."},
  {chapter:"Is Matter Around Us Pure",question:"The Tyndall effect is shown by:",options:["True solutions","Colloids","Pure water","Elements"],answer:1,explanation:"Colloids scatter light (Tyndall effect) because their particles are large enough."},
  {chapter:"Is Matter Around Us Pure",question:"Brass is an alloy of:",options:["Copper and tin","Copper and zinc","Iron and carbon","Copper and iron"],answer:1,explanation:"Brass = copper + zinc. Bronze = copper + tin."},
  {chapter:"Is Matter Around Us Pure",question:"Chromatography is used to separate:",options:["Insoluble solids","Coloured components of a mixture","Gases from liquids","Metals from ores"],answer:1,explanation:"Chromatography separates components based on differential movement through a medium."},
  {chapter:"Is Matter Around Us Pure",question:"A suspension has particle size:",options:["Less than 1 nm","1 to 100 nm","Greater than 100 nm","Exactly 50 nm"],answer:2,explanation:"Suspension particles are > 100 nm, visible and settle over time."},
  {chapter:"Is Matter Around Us Pure",question:"Which separation technique uses difference in boiling points?",options:["Filtration","Centrifugation","Distillation","Crystallisation"],answer:2,explanation:"Distillation heats a mixture and separates components based on boiling points."},
  {chapter:"Is Matter Around Us Pure",question:"Pure substance has:",options:["Variable composition","Fixed composition","Multiple phases","No definite properties"],answer:1,explanation:"A pure substance has fixed composition and definite properties."},

  // ── Ch 3: Atoms and Molecules ──
  {chapter:"Atoms and Molecules",question:"Chemical formula of water is:",options:["HO","H₂O","H₂O₂","OH"],answer:1,explanation:"Water = 2 hydrogen + 1 oxygen = H₂O."},
  {chapter:"Atoms and Molecules",question:"1 mole contains how many particles?",options:["6.022 × 10²³","6.022 × 10²²","6.022 × 10²⁴","6.022 × 10²⁰"],answer:0,explanation:"Avogadro's number: 1 mole = 6.022 × 10²³ particles."},
  {chapter:"Atoms and Molecules",question:"Valency of carbon is:",options:["1","2","3","4"],answer:3,explanation:"Carbon needs 4 electrons to complete octet → valency = 4."},
  {chapter:"Atoms and Molecules",question:"Law of conservation of mass was given by:",options:["Dalton","Lavoisier","Proust","Avogadro"],answer:1,explanation:"Lavoisier: mass is neither created nor destroyed in a chemical reaction."},
  {chapter:"Atoms and Molecules",question:"Molecular mass of CO₂ is:",options:["28 u","32 u","44 u","16 u"],answer:2,explanation:"C(12) + O₂(32) = 44 u."},
  {chapter:"Atoms and Molecules",question:"Atomicity of ozone (O₃) is:",options:["1","2","3","4"],answer:2,explanation:"Atomicity = number of atoms per molecule. O₃ = 3."},
  {chapter:"Atoms and Molecules",question:"Law of constant proportions was given by:",options:["Dalton","Lavoisier","Proust","Avogadro"],answer:2,explanation:"Proust stated that a compound always contains elements in a fixed ratio by mass."},
  {chapter:"Atoms and Molecules",question:"The formula of calcium oxide is:",options:["CaO","Ca₂O","CaO₂","Ca₂O₃"],answer:0,explanation:"Calcium (Ca²⁺) + Oxygen (O²⁻) → CaO."},
  {chapter:"Atoms and Molecules",question:"Molar mass of water (H₂O) is:",options:["16 g/mol","18 g/mol","20 g/mol","36 g/mol"],answer:1,explanation:"H₂O: 2(1) + 16 = 18 g/mol."},
  {chapter:"Atoms and Molecules",question:"The formula unit mass of NaCl is:",options:["23 u","35.5 u","58.5 u","40 u"],answer:2,explanation:"Na(23) + Cl(35.5) = 58.5 u."},
  {chapter:"Atoms and Molecules",question:"Which is Dalton's atomic theory postulate?",options:["Atoms can be divided","Atoms of same element are identical","Atoms have nucleus","Atoms contain electrons"],answer:1,explanation:"Dalton proposed that all atoms of a given element are identical in mass and properties."},
  {chapter:"Atoms and Molecules",question:"Molecular mass of H₂SO₄ is:",options:["98 u","49 u","96 u","100 u"],answer:0,explanation:"H₂(2) + S(32) + O₄(64) = 98 u."},

  // ── Ch 4: Structure of the Atom ──
  {chapter:"Structure of the Atom",question:"Who discovered the electron?",options:["Rutherford","J.J. Thomson","Bohr","Chadwick"],answer:1,explanation:"J.J. Thomson discovered the electron in 1897 using cathode rays."},
  {chapter:"Structure of the Atom",question:"The nucleus contains:",options:["Protons and electrons","Neutrons and electrons","Protons and neutrons","Only protons"],answer:2,explanation:"Nucleus has protons (+) and neutrons (neutral). Electrons orbit outside."},
  {chapter:"Structure of the Atom",question:"Atomic number equals:",options:["Number of neutrons","Number of protons","Number of nucleons","Mass number"],answer:1,explanation:"Atomic number (Z) = number of protons."},
  {chapter:"Structure of the Atom",question:"Isotopes have the same:",options:["Mass number","Neutron number","Atomic number","Physical properties"],answer:2,explanation:"Isotopes = same atomic number, different mass numbers."},
  {chapter:"Structure of the Atom",question:"Maximum electrons in L shell is:",options:["2","4","8","18"],answer:2,explanation:"Max electrons = 2n². L shell (n=2): 2×4 = 8."},
  {chapter:"Structure of the Atom",question:"Neutron was discovered by:",options:["Thomson","Goldstein","James Chadwick","Bohr"],answer:2,explanation:"James Chadwick discovered the neutron in 1932."},
  {chapter:"Structure of the Atom",question:"Electronic configuration of Na (Z=11) is:",options:["2,8,2","2,8,1","2,1,8","8,2,1"],answer:1,explanation:"Na: K=2, L=8, M=1 → 2,8,1."},
  {chapter:"Structure of the Atom",question:"Thomson's model of atom is called:",options:["Nuclear model","Plum pudding model","Planetary model","Shell model"],answer:1,explanation:"Thomson proposed the plum pudding model — electrons embedded in positive charge."},
  {chapter:"Structure of the Atom",question:"Rutherford's alpha particle scattering showed that:",options:["Atom is solid","Atom has a dense positive nucleus","Electrons are in nucleus","Atom has no empty space"],answer:1,explanation:"Most alpha particles passed through, but some deflected — indicating a small, dense, positive nucleus."},
  {chapter:"Structure of the Atom",question:"Valence electrons are in the:",options:["Innermost shell","Nucleus","Outermost shell","Second shell always"],answer:2,explanation:"Valence electrons are in the outermost shell and determine chemical properties."},
  {chapter:"Structure of the Atom",question:"Mass number (A) equals:",options:["Protons only","Neutrons only","Protons + Neutrons","Protons + Electrons"],answer:2,explanation:"Mass number A = protons + neutrons (nucleons)."},
  {chapter:"Structure of the Atom",question:"Isobars have:",options:["Same atomic number","Same mass number","Same neutron number","Same electron config"],answer:1,explanation:"Isobars = same mass number but different atomic numbers. E.g. ⁴⁰Ca and ⁴⁰Ar."},
  {chapter:"Structure of the Atom",question:"Bohr's model describes electrons in:",options:["Random orbits","Fixed circular orbits (shells)","The nucleus","Clouds"],answer:1,explanation:"Bohr proposed electrons revolve in fixed circular orbits (energy levels/shells)."},
  {chapter:"Structure of the Atom",question:"Canal rays (positive rays) were discovered by:",options:["Thomson","Goldstein","Rutherford","Chadwick"],answer:1,explanation:"E. Goldstein discovered canal rays (positive rays) in 1886."},
  {chapter:"Structure of the Atom",question:"An atom with Z=17 has valency:",options:["1","2","7","17"],answer:0,explanation:"Z=17 (Chlorine): config 2,8,7. Needs 1 electron to complete octet → valency = 1."},
  {chapter:"Structure of the Atom",question:"Which sub-atomic particle has no charge?",options:["Proton","Electron","Neutron","All have charge"],answer:2,explanation:"Neutrons are electrically neutral (no charge). Protons are +ve, electrons are -ve."},
  {chapter:"Structure of the Atom",question:"Maximum electrons in M shell (n=3) is:",options:["2","8","18","32"],answer:2,explanation:"Max electrons = 2n². For M shell (n=3): 2×9 = 18."},
  {chapter:"Structure of the Atom",question:"Electronic configuration of chlorine (Z=17) is:",options:["2,8,7","2,7,8","2,8,8","8,8,1"],answer:0,explanation:"Chlorine: K=2, L=8, M=7 → 2,8,7."},
  {chapter:"Atoms and Molecules",question:"Which is a polyatomic ion?",options:["Na⁺","Cl⁻","SO₄²⁻","Mg²⁺"],answer:2,explanation:"SO₄²⁻ (sulphate) is polyatomic — made of multiple atoms acting as a single ion."},
  {chapter:"Atoms and Molecules",question:"The chemical formula of aluminium oxide is:",options:["AlO","Al₂O₃","Al₃O₂","AlO₃"],answer:1,explanation:"Al³⁺ and O²⁻ → cross-over valencies → Al₂O₃."},
  {chapter:"Is Matter Around Us Pure",question:"Which of the following is a compound?",options:["Air","Water","Soil","Blood"],answer:1,explanation:"Water (H₂O) is a compound — two elements chemically combined in a fixed ratio."},
  {chapter:"Is Matter Around Us Pure",question:"Crystallisation is a technique to purify:",options:["Gases","Liquids","Solids","Plasma"],answer:2,explanation:"Crystallisation separates pure solid from a solution as crystals. Used for alum, copper sulphate etc."}
],

// ═══════════════════════════════════════════════════
//  BIOLOGY  (~67 questions)
// ═══════════════════════════════════════════════════
biology: [
  // ── Ch 5: The Fundamental Unit of Life ──
  {chapter:"The Fundamental Unit of Life",question:"Who discovered the cell?",options:["Robert Brown","Robert Hooke","Leeuwenhoek","Virchow"],answer:1,explanation:"Robert Hooke discovered cells in 1665 examining cork."},
  {chapter:"The Fundamental Unit of Life",question:"Which is the 'powerhouse of the cell'?",options:["Nucleus","Ribosome","Mitochondria","Golgi apparatus"],answer:2,explanation:"Mitochondria generate ATP through cellular respiration."},
  {chapter:"The Fundamental Unit of Life",question:"Cell wall is made up of:",options:["Protein","Lipid","Cellulose","Starch"],answer:2,explanation:"Plant cell walls are primarily cellulose."},
  {chapter:"The Fundamental Unit of Life",question:"'Suicide bags' of the cell are:",options:["Ribosomes","Lysosomes","Vacuoles","Plastids"],answer:1,explanation:"Lysosomes contain digestive enzymes that can destroy the cell."},
  {chapter:"The Fundamental Unit of Life",question:"Prokaryotic cells lack:",options:["Cell membrane","DNA","Membrane-bound nucleus","Ribosomes"],answer:2,explanation:"Prokaryotes have no membrane-bound nucleus. DNA is in the nucleoid."},
  {chapter:"The Fundamental Unit of Life",question:"Osmosis is the movement of:",options:["Solute through a membrane","Water through a selectively permeable membrane","Gas through a membrane","Ions through a membrane"],answer:1,explanation:"Osmosis = water movement from low to high solute concentration through selectively permeable membrane."},
  {chapter:"The Fundamental Unit of Life",question:"Protein synthesis occurs at:",options:["Mitochondria","Ribosomes","Lysosomes","Vacuoles"],answer:1,explanation:"Ribosomes are the site of protein synthesis."},
  {chapter:"The Fundamental Unit of Life",question:"The nucleus contains:",options:["Chlorophyll","Chromosomes carrying DNA","Starch","Cell sap"],answer:1,explanation:"Nucleus contains chromosomes (DNA) which carry genetic information."},
  {chapter:"The Fundamental Unit of Life",question:"Plastids are found in:",options:["Animal cells only","Plant cells only","Both","Neither"],answer:1,explanation:"Plastids (chloroplasts, chromoplasts, leucoplasts) are found only in plant cells."},
  {chapter:"The Fundamental Unit of Life",question:"Cell membrane is made up of:",options:["Cellulose","Lipids and proteins","Starch","Chitin"],answer:1,explanation:"Cell membrane = lipid bilayer with embedded proteins (fluid mosaic model)."},
  {chapter:"The Fundamental Unit of Life",question:"Endoplasmic reticulum is of how many types?",options:["1","2","3","4"],answer:1,explanation:"ER has 2 types: Rough ER (with ribosomes) and Smooth ER (without ribosomes)."},
  {chapter:"The Fundamental Unit of Life",question:"Golgi apparatus was discovered by:",options:["Robert Hooke","Camillo Golgi","Robert Brown","Virchow"],answer:1,explanation:"Camillo Golgi discovered the Golgi apparatus in 1898."},
  {chapter:"The Fundamental Unit of Life",question:"In a hypertonic solution, a cell will:",options:["Swell","Shrink","Remain same","Burst"],answer:1,explanation:"In hypertonic solution, water moves out of cell → cell shrinks (plasmolysis in plants)."},

  // ── Ch 6: Tissues ──
  {chapter:"Tissues",question:"Meristematic tissue is found at:",options:["Base of leaf","Tips of roots and shoots","Bark of tree","Surface of leaf"],answer:1,explanation:"Meristematic tissue (dividing cells) is at root tips, shoot tips, and cambium."},
  {chapter:"Tissues",question:"Which tissue provides flexibility?",options:["Parenchyma","Collenchyma","Sclerenchyma","Xylem"],answer:1,explanation:"Collenchyma provides flexibility to parts like leaf stalks."},
  {chapter:"Tissues",question:"Blood is a type of:",options:["Epithelial tissue","Muscular tissue","Connective tissue","Nervous tissue"],answer:2,explanation:"Blood is a fluid connective tissue."},
  {chapter:"Tissues",question:"Xylem transports:",options:["Food","Water and minerals","Hormones","Oxygen"],answer:1,explanation:"Xylem transports water and minerals from roots upward."},
  {chapter:"Tissues",question:"Cardiac muscles are found in:",options:["Hands","Heart","Stomach","Legs"],answer:1,explanation:"Cardiac muscles are involuntary, striated muscles found only in the heart."},
  {chapter:"Tissues",question:"Phloem transports:",options:["Water","Minerals","Food (sucrose)","Oxygen"],answer:2,explanation:"Phloem transports food (mainly sucrose) — translocation."},
  {chapter:"Tissues",question:"Sclerenchyma tissue is:",options:["Living, with thin walls","Dead, with thick lignified walls","Living, with chloroplasts","Dead, without walls"],answer:1,explanation:"Sclerenchyma cells are dead with thick, lignified walls providing strength."},
  {chapter:"Tissues",question:"Parenchyma with chlorophyll is called:",options:["Collenchyma","Chlorenchyma","Aerenchyma","Sclerenchyma"],answer:1,explanation:"Chlorenchyma = parenchyma containing chloroplasts for photosynthesis."},
  {chapter:"Tissues",question:"Which muscle type is voluntary?",options:["Cardiac","Smooth","Skeletal (striated)","All are voluntary"],answer:2,explanation:"Skeletal muscles are voluntary — we can consciously control them."},
  {chapter:"Tissues",question:"Neurons are the structural unit of:",options:["Muscular tissue","Connective tissue","Epithelial tissue","Nervous tissue"],answer:3,explanation:"Neurons are the functional units of nervous tissue, transmitting nerve impulses."},
  {chapter:"Tissues",question:"Epidermis is a type of:",options:["Connective tissue","Epithelial tissue","Muscular tissue","Nervous tissue"],answer:1,explanation:"Epidermis forms the protective outer covering — it is epithelial tissue."},
  {chapter:"Tissues",question:"Ligaments connect:",options:["Muscle to bone","Bone to bone","Nerve to muscle","Bone to skin"],answer:1,explanation:"Ligaments connect bone to bone. Tendons connect muscle to bone."},
  {chapter:"Tissues",question:"Aerenchyma is parenchyma with:",options:["Chloroplasts","Large air cavities","Thick walls","No intercellular spaces"],answer:1,explanation:"Aerenchyma has large air cavities to provide buoyancy in aquatic plants."},

  // ── Ch 7: Diversity in Living Organisms ──
  {chapter:"Diversity in Living Organisms",question:"Five kingdom classification was given by:",options:["Linnaeus","Haeckel","Whittaker","Aristotle"],answer:2,explanation:"R.H. Whittaker (1969): Monera, Protista, Fungi, Plantae, Animalia."},
  {chapter:"Diversity in Living Organisms",question:"Mushrooms belong to kingdom:",options:["Plantae","Animalia","Fungi","Protista"],answer:2,explanation:"Mushrooms are fungi — heterotrophic, chitin walls, spore reproduction."},
  {chapter:"Diversity in Living Organisms",question:"Binomial nomenclature was introduced by:",options:["Whittaker","Darwin","Carolus Linnaeus","Lamarck"],answer:2,explanation:"Linnaeus introduced two-name (genus + species) naming system."},
  {chapter:"Diversity in Living Organisms",question:"Seeds but no fruits are found in:",options:["Thallophyta","Bryophyta","Gymnosperms","Angiosperms"],answer:2,explanation:"Gymnosperms = 'naked seeds' — seeds not enclosed in fruits. E.g. pine."},
  {chapter:"Diversity in Living Organisms",question:"Organisms without a true nucleus are:",options:["Eukaryotes","Prokaryotes","Protists","Fungi"],answer:1,explanation:"Prokaryotes (Monera) lack a membrane-bound nucleus."},
  {chapter:"Diversity in Living Organisms",question:"Bryophytes are called 'amphibians of plant kingdom' because:",options:["They live in water only","They need water for reproduction","They live on land only","They are animals"],answer:1,explanation:"Bryophytes live on land but need water for fertilization (sperm transport)."},
  {chapter:"Diversity in Living Organisms",question:"Which phylum has a notochord?",options:["Arthropoda","Mollusca","Chordata","Annelida"],answer:2,explanation:"Chordates have a notochord at some stage of development."},
  {chapter:"Diversity in Living Organisms",question:"Pteridophytes have:",options:["No vascular tissue","Vascular tissue but no seeds","Seeds and flowers","Fruits"],answer:1,explanation:"Pteridophytes (ferns) have vascular tissue (xylem/phloem) but reproduce by spores, not seeds."},
  {chapter:"Diversity in Living Organisms",question:"The basic unit of classification is:",options:["Kingdom","Genus","Species","Family"],answer:2,explanation:"Species is the basic/lowest unit of classification."},
  {chapter:"Diversity in Living Organisms",question:"Warm-blooded animals are also called:",options:["Ectotherms","Endotherms","Poikilotherms","Heterotherms"],answer:1,explanation:"Endotherms maintain constant body temperature internally (warm-blooded)."},
  {chapter:"Diversity in Living Organisms",question:"Which is the largest phylum in the animal kingdom?",options:["Chordata","Mollusca","Arthropoda","Annelida"],answer:2,explanation:"Arthropoda is the largest phylum — includes insects, spiders, crustaceans."},
  {chapter:"Diversity in Living Organisms",question:"Angiosperms are divided into:",options:["Thallophytes and Bryophytes","Monocots and Dicots","Gymnosperms and Pteridophytes","Algae and Fungi"],answer:1,explanation:"Angiosperms = Monocotyledons (1 seed leaf) and Dicotyledons (2 seed leaves)."},

  // ── Ch 13: Why Do We Fall Ill ──
  {chapter:"Why Do We Fall Ill",question:"Malaria is caused by:",options:["Virus","Bacteria","Protozoan (Plasmodium)","Fungus"],answer:2,explanation:"Malaria = Plasmodium parasite, spread by female Anopheles mosquito."},
  {chapter:"Why Do We Fall Ill",question:"Which is a viral disease?",options:["Typhoid","Cholera","AIDS","Tuberculosis"],answer:2,explanation:"AIDS is caused by HIV (Human Immunodeficiency Virus)."},
  {chapter:"Why Do We Fall Ill",question:"Full form of AIDS is:",options:["Acquired Immuno Disease Syndrome","Acquired Immuno Deficiency Syndrome","Auto Immune Deficiency Syndrome","Acquired Infection Deficiency Syndrome"],answer:1,explanation:"AIDS = Acquired Immuno Deficiency Syndrome."},
  {chapter:"Why Do We Fall Ill",question:"Penicillin is an:",options:["Antiviral","Antifungal","Antibiotic","Analgesic"],answer:2,explanation:"Penicillin is an antibiotic — kills bacteria by disrupting cell wall synthesis."},
  {chapter:"Why Do We Fall Ill",question:"Immunisation protects by:",options:["Killing all germs","Providing antibodies only","Training immune system to recognise pathogens","Increasing temperature"],answer:2,explanation:"Vaccines use weakened/dead pathogens to train the immune system."},
  {chapter:"Why Do We Fall Ill",question:"Rabies is caused by:",options:["Bacteria","Virus","Protozoan","Worm"],answer:1,explanation:"Rabies is caused by a virus, transmitted through the bite of infected animals."},
  {chapter:"Why Do We Fall Ill",question:"Which disease is spread by contaminated water?",options:["Malaria","Cholera","Dengue","Rabies"],answer:1,explanation:"Cholera (bacterial) spreads through contaminated water and food."},
  {chapter:"Why Do We Fall Ill",question:"DPT vaccine protects against:",options:["Dengue, Polio, Typhoid","Diphtheria, Pertussis, Tetanus","Diarrhoea, Plague, TB","Dengue, Pertussis, Typhoid"],answer:1,explanation:"DPT = Diphtheria, Pertussis (whooping cough), and Tetanus."},
  {chapter:"Why Do We Fall Ill",question:"Tuberculosis affects which organ mainly?",options:["Heart","Liver","Lungs","Kidney"],answer:2,explanation:"TB primarily affects the lungs (pulmonary TB), caused by Mycobacterium tuberculosis."},
  {chapter:"Why Do We Fall Ill",question:"Which is a communicable disease?",options:["Diabetes","Cancer","Influenza","Hypertension"],answer:2,explanation:"Influenza (flu) is communicable — spreads from person to person via droplets."},

  // ── Ch 14: Improvement in Food Resources ──
  {chapter:"Improvement in Food Resources",question:"Kharif crops are grown in:",options:["Winter season","Rainy season","Spring season","Autumn season"],answer:1,explanation:"Kharif crops are sown in rainy season (June-October). E.g. paddy, maize, soybean."},
  {chapter:"Improvement in Food Resources",question:"Rabi crops are grown in:",options:["Rainy season","Winter season","Summer season","All seasons"],answer:1,explanation:"Rabi crops are sown in winter (October-March). E.g. wheat, gram, mustard."},
  {chapter:"Improvement in Food Resources",question:"Hybridisation refers to:",options:["Crossing between genetically different plants","Cloning","Grafting","Layering"],answer:0,explanation:"Hybridisation = crossing genetically dissimilar plants to get desired characteristics."},
  {chapter:"Improvement in Food Resources",question:"Which is an example of a Kharif crop?",options:["Wheat","Mustard","Paddy (rice)","Pea"],answer:2,explanation:"Paddy is a Kharif crop grown during the rainy season."},
  {chapter:"Improvement in Food Resources",question:"Green revolution is associated with:",options:["Milk production","Food grain production","Fish production","Poultry farming"],answer:1,explanation:"Green Revolution = dramatic increase in food grain production through HYV seeds and modern techniques."},
  {chapter:"Improvement in Food Resources",question:"Which nutrient is needed by plants in large quantities?",options:["Iron","Manganese","Nitrogen","Zinc"],answer:2,explanation:"Nitrogen is a macronutrient required in large quantities for plant growth."},
  {chapter:"Improvement in Food Resources",question:"Composting converts organic waste into:",options:["Pesticide","Manure","Fertiliser","Weedicide"],answer:1,explanation:"Composting decomposes organic matter into nutrient-rich manure."},
  {chapter:"Improvement in Food Resources",question:"Bee-keeping is also called:",options:["Aquaculture","Apiculture","Sericulture","Pisciculture"],answer:1,explanation:"Apiculture = bee-keeping for honey and wax production."},

  // ── Ch 15: Natural Resources ──
  {chapter:"Natural Resources",question:"Earth's atmosphere is mainly:",options:["O₂ and CO₂","N₂ and O₂","H₂ and He","O₂ and Ar"],answer:1,explanation:"Atmosphere ≈ 78% nitrogen + 21% oxygen."},
  {chapter:"Natural Resources",question:"Ozone layer protects from:",options:["Infrared rays","Ultraviolet rays","Visible light","Radio waves"],answer:1,explanation:"Ozone absorbs harmful UV radiation from the Sun."},
  {chapter:"Natural Resources",question:"Acid rain is caused by:",options:["CO₂ only","SO₂ and NO₂","O₃","N₂"],answer:1,explanation:"SO₂ and NO₂ dissolve in rain → sulphuric and nitric acids."},
  {chapter:"Natural Resources",question:"Nitrogen cycle involves:",options:["Photosynthesis","Nitrogen fixation","Transpiration","Evaporation"],answer:1,explanation:"Nitrogen fixation (by Rhizobium, lightning) converts N₂ to usable forms."},
  {chapter:"Natural Resources",question:"Main greenhouse gas is:",options:["Nitrogen","Oxygen","Carbon dioxide","Hydrogen"],answer:2,explanation:"CO₂ is a major greenhouse gas trapping heat in the atmosphere."},
  {chapter:"Natural Resources",question:"Water cycle is driven by:",options:["Gravity only","Sun's energy","Moon's gravity","Wind only"],answer:1,explanation:"The Sun's energy drives evaporation, which powers the entire water cycle."},
  {chapter:"Natural Resources",question:"Topsoil contains most of the:",options:["Rocks","Humus and minerals","Groundwater","Magma"],answer:1,explanation:"Topsoil is rich in humus (organic matter) and minerals essential for plant growth."},
  {chapter:"Natural Resources",question:"Smog is a combination of:",options:["Smoke and fog","Sun and moisture","Snow and gas","Sand and moisture"],answer:0,explanation:"Smog = smoke + fog, a form of air pollution common in cities."},
  {chapter:"Natural Resources",question:"Which gas is released during photosynthesis?",options:["CO₂","N₂","O₂","H₂"],answer:2,explanation:"Plants release oxygen (O₂) during photosynthesis while absorbing CO₂."},
  {chapter:"Natural Resources",question:"Biological nitrogen fixation is done by:",options:["Rhizobium bacteria","Fungi","Algae only","Viruses"],answer:0,explanation:"Rhizobium bacteria (in root nodules of legumes) fix atmospheric nitrogen into usable forms."},
  {chapter:"Natural Resources",question:"CFC gases damage the:",options:["Troposphere","Ozone layer","Lithosphere","Hydrosphere"],answer:1,explanation:"CFCs (chlorofluorocarbons) deplete the ozone layer in the stratosphere."},
  {chapter:"Natural Resources",question:"Forests are called:",options:["Carbon sinks","Oxygen sinks","Nitrogen sinks","Water sinks"],answer:0,explanation:"Forests absorb CO₂ from the atmosphere, acting as carbon sinks."},
  {chapter:"Improvement in Food Resources",question:"White revolution refers to increase in:",options:["Fish production","Milk production","Egg production","Grain production"],answer:1,explanation:"White Revolution (Operation Flood) = increase in milk production in India."},
  {chapter:"Improvement in Food Resources",question:"Mixed cropping involves growing:",options:["One crop at a time","Two or more crops simultaneously on same land","Crops in alternate rows","Crops in different seasons"],answer:1,explanation:"Mixed cropping = growing two or more crops together on the same field to reduce risk of crop failure."},
  {chapter:"Diversity in Living Organisms",question:"Which phylum includes starfish?",options:["Mollusca","Echinodermata","Arthropoda","Coelenterata"],answer:1,explanation:"Starfish belong to phylum Echinodermata — spiny-skinned marine animals with water vascular system."},
  {chapter:"Tissues",question:"Tendons connect:",options:["Bone to bone","Muscle to bone","Nerve to nerve","Skin to muscle"],answer:1,explanation:"Tendons connect muscles to bones. They are strong, fibrous connective tissue."},
  {chapter:"The Fundamental Unit of Life",question:"Which organelle stores cell sap in plant cells?",options:["Mitochondria","Lysosomes","Vacuole","Ribosome"],answer:2,explanation:"Plant cells have a large central vacuole that stores cell sap (water, minerals, pigments)."},
  {chapter:"Why Do We Fall Ill",question:"Dengue fever is spread by:",options:["Anopheles mosquito","Aedes mosquito","Housefly","Contaminated water"],answer:1,explanation:"Dengue is a viral disease spread by the bite of Aedes aegypti mosquito."}
]

};
