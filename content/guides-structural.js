SITE.WIND_CITIES = [["Agra",47],["Ahmedabad",39],["Ajmer",47],["Almora",47],["Amritsar",47],["Asansol",47],["Aurangabad",39],["Bahraich",47],["Barauni",47],["Bareilly",47],["Bengaluru",33],["Bhatinda",47],["Bhilai",39],["Bhopal",39],["Bhubaneshwar",50],["Bhuj",50],["Bikaner",47],["Bokaro",47],["Chandigarh",47],["Chennai",50],["Coimbatore",39],["Cuttack",50],["Darbhanga",55],["Darjeeling",47],["Dehradun",47],["Delhi",47],["Durgapur",47],["Gangtok",47],["Gaya",39],["Gorakhpur",47],["Guwahati",50],["Hyderabad",44],["Imphal",47],["Jabalpur",47],["Jaipur",47],["Jamshedpur",47],["Jhansi",47],["Jodhpur",47],["Kanpur",47],["Kohima",44],["Kolkata",50],["Kozhikode",39],["Kurnool",39],["Lakshadweep",39],["Lucknow",47],["Ludhiana",47],["Madurai",39],["Mandi",39],["Mangalore",39],["Moradabad",47],["Mumbai",44],["Mysore",33],["Nagpur",44],["Nainital",47],["Nasik",39],["Nellore",50],["Panjim",39],["Patiala",47],["Patna",47],["Port Blair",44],["Puducherry",50],["Pune",39],["Raipur",39],["Rajkot",39],["Ranchi",39],["Roorkee",39],["Rourkela",39],["Shimla",39],["Srinagar",39],["Surat",44],["Tiruchirappalli",47],["Trivandrum",39],["Udaipur",47],["Vadodara",44],["Varanasi",47],["Vijayawada",50],["Visakhapatnam",50]];

SITE.guides.push(
/* =============================================================== */
{ id:"loads", cat:"Structural design", title:"Loads on a building: dead, imposed, snow, special and combinations",
  lede:"Design begins with an honest list of everything the building must carry. IS 875 gives the values in five parts; IS 456, IS 800 and IS 1893 tell you how to combine them for design.",
  short:["Dead load from unit weights: RCC about 25 kN/m³, brickwork 19–20 kN/m³, steel 78.5 kN/m³.","Imposed load on home floors is 2.0 kN/m²; it may be reduced by up to 50 % for columns and foundations carrying many floors.","Wind and earthquake are never combined with each other."],
  body:`
<h2>Dead load (IS 875 Part 1)</h2>
<p>Dead load is the weight of everything permanent: the structure, finishes, walls, fixed partitions and fixed services. Work it out from unit weights and the actual build-up of each floor.</p>
${T(["Material","Approximate unit weight"],[["Reinforced cement concrete","25 kN/m³"],["Plain cement concrete","24 kN/m³"],["Brick masonry (common burnt clay)","19–20 kN/m³"],["Cement mortar","about 20.4 kN/m³"],["Cement plaster","about 20 kN/m³"],["Structural steel","78.5 kN/m³"],["Water","9.81 kN/m³"]],"IS 875 Part 1 lists unit weights for many more building and stored materials (aggregates, timber, glass, roofing, stored goods). Use the actual product data where available.")}
<p>Where partition positions are not known, add an allowance as uniformly distributed load of at least 1 kN/m² (IS 875 Part 2 treats it as one-third of the weight per metre run of the partition).</p>
<h2>Imposed load (IS 875 Part 2)</h2>
${T(["Occupancy / floor","Imposed load (kN/m²)"],[["Residential: rooms, kitchens, toilets","2.0"],["Residential: corridors, stairs, balconies","3.0"],["Offices","2.5 to 4.0 (with or without separate storage)"],["Classrooms","3.0"],["Assembly: fixed seats / without fixed seats","4.0 / 5.0"],["Shops, retail","4.0"],["Hospital wards","2.0"],["Flat roof with access","1.5"],["Roof without access","0.75"],["Sloping roof steeper than 10° (without access)","0.75 less 0.02 per degree above 10°, not less than 0.4"]],"Representative values; IS 875 Part 2 Table 1 gives the full list by occupancy, with concentrated loads to be checked where more severe.")}
<h3>Reduction for multi-storey buildings</h3>
${T(["Floors carried by the member (excluding roof)","1","2","3","4","5 to 10","over 10"],[["Reduction in total imposed load","0 %","10 %","20 %","30 %","40 %","50 %"]],"Applies to columns, walls, piers and foundations. No reduction for storage, warehouses, garages, or plant and machinery specifically allowed for.")}
<h2>Wind and snow (Parts 3 and 4)</h2>
<p>Wind is covered in its own <a href="#/guide/wind">guide</a>. Snow load on roofs (IS 875 Part 4) is s = μ s₀: the ground snow load for the site times a shape coefficient for the roof profile, with allowances for drifting against parapets and steps.</p>
<h2>Special loads (Part 5)</h2>
<p>Temperature effects, shrinkage and creep, differential settlement, soil and hydrostatic pressure, impact and vibration from cranes and machinery, accidental loads, erection loads and fatigue. Consider those that apply; for example, long buildings need expansion joints or a temperature analysis.</p>
<h2>Combining loads</h2>
${T(["Combination","Limit state of collapse (IS 456 / IS 1893)","Serviceability"],[["DL + IL","1.5 DL + 1.5 IL","1.0 DL + 1.0 IL"],["DL + WL","1.5 DL + 1.5 WL; or 0.9 DL + 1.5 WL where dead load helps stability","1.0 DL + 1.0 WL"],["DL + IL + WL","1.2 (DL + IL + WL)","1.0 DL + 0.8 IL + 0.8 WL"],["DL + IL + EL","1.2 (DL + IL ± EL)","–"],["DL + EL","1.5 (DL ± EL); 0.9 DL ± 1.5 EL","–"]],"Wind and earthquake are not assumed to act together. For earthquake, use 100 % in one horizontal direction plus 30 % in the other. Steel design uses IS 800 Table 4 (1.5 for DL + IL, 1.2 with wind or earthquake).")}`,
  src:"IS 875 Parts 1 to 5 (1987 / 2015 / 2021), IS 456:2000 Table 18, IS 1893 (Part 1):2016 cl 6.3.", rel:["wind","earthquake","rcc-design"] },

/* =============================================================== */
{ id:"wind", cat:"Structural design", title:"Wind loads (IS 875 Part 3:2015)",
  lede:"Wind speed rises with height and with open, exposed terrain, and it is highest on hills and along cyclone coasts. The code builds the design pressure from a basic speed for the city and four modification factors.",
  short:["Design speed Vz = Vb × k1 × k2 × k3 × k4; pressure pz = 0.6 Vz² (N/m²).","Design pressure pd = Kd Ka Kc pz, but not less than 0.7 pz.","Basic wind speed ranges from 33 m/s (Bengaluru, Mysore) to 55 m/s (Darbhanga)."],
  body:`
<h2>The steps</h2>
<ol>
<li>Find the <b>basic wind speed V<sub>b</sub></b> from the map or the city table below. It is the 3-second gust at 10 m height in open terrain with a 50-year return period.</li>
<li>Apply <b>k<sub>1</sub></b> (risk coefficient): 1.0 for general buildings with a 50-year life; lower for temporary structures; higher for important ones.</li>
<li>Apply <b>k<sub>2</sub></b> (terrain and height): from Table 2 for the terrain category and height.</li>
<li>Apply <b>k<sub>3</sub></b> (topography): 1.0 on flat ground; higher near hill crests and escarpments.</li>
<li>Apply <b>k<sub>4</sub></b> (cyclonic importance), for the 60 km coastal belt of the east coast and Gujarat: 1.30 for structures of post-cyclone importance (cyclone shelters, hospitals, communication towers), 1.15 for industrial structures, 1.0 for others.</li>
<li>Pressure p<sub>z</sub> = 0.6 V<sub>z</sub>², then p<sub>d</sub> = K<sub>d</sub> K<sub>a</sub> K<sub>c</sub> p<sub>z</sub> ≥ 0.7 p<sub>z</sub>.</li>
<li>Multiply by pressure or force coefficients for the building shape to get forces.</li>
</ol>
<div class="formula">V<sub>z</sub> = V<sub>b</sub> k<sub>1</sub> k<sub>2</sub> k<sub>3</sub> k<sub>4</sub> &nbsp;&nbsp; p<sub>z</sub> = 0.6 V<sub>z</sub>² &nbsp;&nbsp; p<sub>d</sub> = K<sub>d</sub> K<sub>a</sub> K<sub>c</sub> p<sub>z</sub></div>
<h2>Basic wind speed for cities (m/s)</h2>
<div class="tscroll"><table><thead><tr><th>City</th><th>V<sub>b</sub></th><th>City</th><th>V<sub>b</sub></th><th>City</th><th>V<sub>b</sub></th></tr></thead><tbody>${(()=>{const c=SITE.WIND_CITIES, n=Math.ceil(c.length/3), rows=[]; for(let i=0;i<n;i++){rows.push(`<tr>${[0,1,2].map(k=>{const x=c[i+k*n];return x?`<td>${x[0]}</td><td>${x[1]}</td>`:"<td></td><td></td>";}).join("")}</tr>`);} return rows.join("");})()}</tbody></table></div>
<div class="cap">IS 875 (Part 3):2015 Annex A. For other places, read the map in Fig. 1.</div>
<h2>Terrain categories and k<sub>2</sub></h2>
${T(["Category","Description"],[["1","Exposed open terrain with few or no obstructions: open sea coasts, flat treeless plains"],["2","Open terrain with well-scattered obstructions 1.5–10 m high: airfields, open parkland, undeveloped outskirts"],["3","Terrain with numerous closely spaced obstructions up to about 10 m: suburbs, towns, industrial areas"],["4","Numerous large, high, closely spaced obstructions: large city centres, well-developed industrial complexes"]])}
${T(["Height z (m)","TC 1","TC 2","TC 3","TC 4"],[["10","1.05","1.00","0.91","0.80"],["15","1.09","1.05","0.97","0.80"],["20","1.12","1.07","1.01","0.80"],["30","1.15","1.12","1.06","0.97"],["50","1.20","1.17","1.12","1.10"],["100","1.26","1.24","1.20","1.20"],["150","1.30","1.28","1.24","1.24"],["200","1.32","1.30","1.27","1.27"],["250","1.34","1.32","1.29","1.28"],["300","1.35","1.34","1.31","1.30"],["400","1.35","1.35","1.34","1.32"],["500","1.35","1.35","1.35","1.34"]],"Interpolate linearly between heights. Wind speed may be taken as constant up to 10 m, and for buildings under 10 m high, pressures may be reduced by 20 % for stability and framing design.")}
<h2>The three pressure factors</h2>
<ul>
<li><b>K<sub>d</sub>, directionality:</b> 0.90 for buildings (wind is unlikely to come from the worst direction at full speed); 1.0 when using local pressure coefficients and for cyclone-prone structures as specified.</li>
<li><b>K<sub>a</sub>, area averaging:</b> 1.0 for tributary areas up to 10 m², 0.9 at 25 m², 0.8 at 100 m² and above. Gusts do not load a large area all at once.</li>
<li><b>K<sub>c</sub>, combination:</b> allows for the fact that peak pressures on different faces do not all occur together (Table 5 / cl 7.3.3.13; typically 0.9 for framed clad buildings).</li>
</ul>
<h2>Forces</h2>
<ul>
<li>On cladding and roof elements: F = (C<sub>pe</sub> − C<sub>pi</sub>) A p<sub>d</sub>, with external coefficients by shape and internal coefficients by permeability (±0.2 for nearly sealed buildings, ±0.5 for medium openings, ±0.7 for large openings).</li>
<li>On the whole building: F = C<sub>f</sub> A<sub>e</sub> p<sub>d</sub>, using force coefficients for the shape.</li>
<li>Local pressure concentrations at ridges, eaves and corners act outward (suction) and are used for fixings, not for overall loads.</li>
</ul>
<h2>Dynamic effects</h2>
<p>Buildings with height more than 5 times the least lateral dimension, or a natural frequency below 1.0 Hz, must be checked for dynamic (gust factor) effects, and tall buildings for across-wind response and comfort (see <a href="#/guide/tall">tall buildings</a>). Wind tunnel tests are used for unusual shapes and very tall buildings.</p>
<p>Work through a case in the <a href="#/tool/wind">wind calculator</a>.</p>`,
  src:"IS 875 (Part 3):2015, clauses 6 and 7, Tables 1, 2 and 4, Annex A.", rel:["loads","tall","earthquake"] },

/* =============================================================== */
{ id:"earthquake", cat:"Structural design", title:"Earthquake design in plain words (IS 1893)",
  lede:"An earthquake shakes the ground and the building tries to stay where it was. The forces come from the building's own weight, how stiff it is, the soil, and how much damage we accept in a rare event.",
  short:["Base shear VB = Ah × W, where Ah = (Z/2)(I/R)(Sa/g), and never less than the minimum ρW.","Zone factor Z: 0.10, 0.16, 0.24, 0.36 for zones II to V.","Storey drift under the design force must stay within 0.004 × storey height."],
  body:`
<h2>The idea</h2>
<p>Designing every building to stay elastic in a major earthquake would be very expensive. Instead we design for a reduced force and rely on <b>ductility</b>: the ability to bend and yield repeatedly without collapsing. The response reduction factor <b>R</b> captures this. A well-detailed special moment frame gets R = 5; an ordinary one R = 3. A high R is only honest if the detailing of IS 13920 is actually built.</p>
<div class="formula">A<sub>h</sub> = (Z / 2) · (I / R) · (S<sub>a</sub> / g) &nbsp;&nbsp;&nbsp; V<sub>B</sub> = A<sub>h</sub> · W</div>
<h2>The factors</h2>
${T(["Seismic zone","II","III","IV","V"],[["Zone factor Z","0.10","0.16","0.24","0.36"],["Minimum V<sub>B</sub> / W","0.7 %","1.1 %","1.6 %","2.4 %"]],"Z/2 converts the maximum considered earthquake to the design basis earthquake.")}
${T(["Importance factor I","Buildings"],[["1.5","Important service and community buildings: hospitals, schools, emergency buildings (fire stations, police, telephone exchanges), power stations, cinemas and halls"],["1.2","Residential or commercial buildings with occupancy above 200 persons"],["1.0","All other buildings"]])}
${T(["Lateral system","R"],[["RC ordinary moment frame (OMRF)","3.0"],["RC special moment frame (SMRF, detailed to IS 13920)","5.0"],["Steel ordinary / special moment frame","3.0 / 5.0"],["Ductile RC structural walls","4.0"],["Dual system: SMRF + ductile RC walls","5.0"]],"Representative values from Table 9; it lists more systems, including braced frames and flat slabs.")}
<h2>Period and spectrum</h2>
<ul>
<li>Approximate period T<sub>a</sub>: RC moment frame without infill 0.075 h<sup>0.75</sup>; RC–steel composite 0.080 h<sup>0.75</sup>; steel frame 0.085 h<sup>0.75</sup>; all other buildings, including frames with masonry infill, 0.09 h/√d (d = base dimension along the shaking).</li>
<li>Spectral acceleration S<sub>a</sub>/g for the equivalent static method: 2.5 on the plateau, then falling with period.</li>
</ul>
${T(["Soil type","Plateau 2.5 up to","Then","Beyond 4 s"],[["I: rock / hard soil","0.40 s","1.00 / T","0.25"],["II: medium soil","0.55 s","1.36 / T","0.34"],["III: soft soil","0.67 s","1.67 / T","0.42"]])}
<h2>Seismic weight and distribution</h2>
<ul>
<li>Seismic weight of each floor: full dead load plus <b>25 %</b> of imposed load (if imposed load ≤ 3 kN/m²) or <b>50 %</b> (above 3 kN/m²). Roof imposed load is not included.</li>
<li>Vertical distribution: Q<sub>i</sub> = V<sub>B</sub> W<sub>i</sub>h<sub>i</sub>² / Σ W<sub>j</sub>h<sub>j</sub>².</li>
</ul>
<p>Try it in the <a href="#/tool/seismic">seismic calculator</a>.</p>
<h2>Dynamic analysis</h2>
<ul>
<li>Response spectrum analysis is required for most buildings beyond small regular ones (see cl 7.7.1), and for all irregular buildings above the code's limits.</li>
<li>Use enough modes to capture at least 90 % of the mass in each direction; combine with CQC.</li>
<li>If the dynamic base shear is less than the static base shear from T<sub>a</sub>, scale all response quantities up to it.</li>
</ul>
<h2>Irregularities to avoid</h2>
${T(["Irregularity","What it is","Why it matters"],[["Soft storey","Lateral stiffness of a storey less than that of the storey above (e.g. open ground floor)","Deformation concentrates in one storey, which collapses"],["Weak storey","Lateral strength of a storey less than that of the storey above","Same: damage concentrates and the storey fails"],["Torsional irregularity","Maximum storey drift at one end much larger (over 1.5 ×) than at the other","The building twists; corner columns are overloaded"],["Re-entrant corners","L, T, U or + plans with projections beyond about 15 % of the plan dimension","Stress concentrations at the inner corner"],["Mass irregularity","Seismic weight of a floor more than 150 % of the floor below","Sudden change in force demand"],["Vertical geometric irregularity","Plan dimension of a storey much larger than the one below","Load path discontinuity"],["Floating or stub columns, in-plane discontinuity","Columns or walls that do not continue to the foundation","Load path interrupted; transfer members critical"],["Short columns","Columns restrained by partial-height walls or mid-height beams","Very high shear; brittle failure"]],"Table 5 (plan) and Table 6 (vertical) of IS 1893 (Part 1):2016 define the limits; some irregularities are not permitted in zones IV and V.")}
<h2>Checks after analysis</h2>
<ul class="check">
<li>Storey drift ≤ 0.004 × storey height under the design force with load factor 1.0</li>
<li>Base shear not less than the minimum ρW; dynamic results scaled where needed</li>
<li>Combinations 1.2(DL + IL ± EL), 1.5(DL ± EL), 0.9 DL ± 1.5 EL, with 100 % + 30 % for the two directions</li>
<li>Separation between adjacent buildings or blocks enough to prevent pounding</li>
<li>IS 13920 detailing for zones III to V</li>
</ul>`,
  src:"IS 1893 (Part 1):2016, clauses 6 and 7, Tables 3 and 5 to 10. Check for later amendments and revisions.", rel:["ductile","loads","tall","masonry-earthquake"] },

/* =============================================================== */
{ id:"rcc-design", cat:"Structural design", title:"Reinforced concrete design essentials (IS 456)",
  lede:"Limit state design checks two things: that a member does not collapse under factored loads, and that it behaves well in service. These are the provisions used most often, with the reasoning behind them.",
  short:["γc = 1.5 and γs = 1.15. Stress block 0.36 fck b xu acting at 0.42 xu.","xu,max/d = 0.53, 0.48, 0.46 for Fe 250, 415, 500, giving Mu,lim = 0.149, 0.138, 0.133 fck bd².","Span / effective depth: 7 cantilever, 20 simply supported, 26 continuous, before modification factors."],
  body:`
<h2>Materials and safety factors</h2>
<ul>
<li>Partial safety factors: γ<sub>c</sub> = 1.5 for concrete, γ<sub>s</sub> = 1.15 for steel, so design stresses are 0.446 f<sub>ck</sub> (in the stress block, 0.36 f<sub>ck</sub> average) and 0.87 f<sub>y</sub>.</li>
<li>E<sub>c</sub> = 5000√f<sub>ck</sub> N/mm²; flexural strength f<sub>cr</sub> = 0.7√f<sub>ck</sub>; E<sub>s</sub> = 2 × 10⁵ N/mm².</li>
<li>Minimum grade M20 for RCC (higher for harsher exposure; see the concrete guide).</li>
</ul>
<h2>Flexure</h2>
<p>At collapse, the concrete above the neutral axis carries 0.36 f<sub>ck</sub> b x<sub>u</sub> and the steel yields at 0.87 f<sub>y</sub>. Limiting the neutral axis depth makes sure the steel yields first, so the beam warns before it fails.</p>
${T(["Steel","xu,max / d","Mu,lim / fck bd²","pt,lim (%) for M20"],[["Fe 250","0.53","0.149","1.76"],["Fe 415","0.48","0.138","0.96"],["Fe 500","0.46","0.133","0.76"]])}
<div class="formula">A<sub>st</sub> = 0.5 (f<sub>ck</sub>/f<sub>y</sub>) [1 − √(1 − 4.6 M<sub>u</sub> / f<sub>ck</sub> b d²)] b d</div>
<ul>
<li>Minimum tension steel A<sub>s</sub>/bd = 0.85/f<sub>y</sub>; maximum 4 % of bD (tension or compression steel).</li>
<li>If M<sub>u</sub> &gt; M<sub>u,lim</sub>, deepen the section or design it as doubly reinforced.</li>
<li>Side-face reinforcement of 0.1 % of the web area when the depth exceeds 750 mm.</li>
</ul>
<h2>Shear</h2>
<ul>
<li>Nominal shear stress τ<sub>v</sub> = V<sub>u</sub>/bd, compared with τ<sub>c</sub> (Table 19, which depends on grade and tension steel percentage) and τ<sub>c,max</sub> (Table 20: 2.8, 3.1, 3.5, 3.7, 4.0 N/mm² for M20 to M40).</li>
<li>If τ<sub>v</sub> &gt; τ<sub>c,max</sub>, enlarge the section. If τ<sub>v</sub> &gt; τ<sub>c</sub>, design stirrups for V<sub>us</sub> = V<sub>u</sub> − τ<sub>c</sub>bd: s<sub>v</sub> = 0.87 f<sub>y</sub> A<sub>sv</sub> d / V<sub>us</sub>.</li>
<li>Always provide minimum stirrups: A<sub>sv</sub>/(b s<sub>v</sub>) ≥ 0.4/(0.87 f<sub>y</sub>), with spacing no more than 0.75d or 300 mm.</li>
</ul>
${T(["pt (%)","0.15","0.25","0.50","0.75","1.00","1.25","1.50","2.00","≥ 3.00"],[["M20","0.28","0.36","0.48","0.56","0.62","0.67","0.72","0.79","0.82"],["M25","0.29","0.36","0.49","0.57","0.64","0.70","0.74","0.82","0.92"],["M30","0.29","0.37","0.50","0.59","0.66","0.71","0.76","0.84","0.96"]],"Design shear strength of concrete τc (N/mm²), from IS 456 Table 19.")}
<h2>Slabs</h2>
<ul>
<li>One-way when the long span / short span exceeds 2; otherwise two-way, designed with the moment coefficients of Annex D.</li>
<li>Minimum steel 0.12 % of gross area (HYSD) or 0.15 % (mild steel); maximum bar diameter D/8.</li>
<li>Spacing of main bars no more than 3d or 300 mm; of distribution bars no more than 5d or 450 mm.</li>
<li>Shortcut for two-way slabs with short span up to 3.5 m and imposed load up to 3 kN/m²: span / overall depth 35 (simply supported) or 40 (continuous) for mild steel, × 0.8 for Fe 415.</li>
</ul>
<h2>Columns</h2>
<ul>
<li>Short when effective length / least lateral dimension &lt; 12; otherwise slender, with additional moments.</li>
<li>Minimum eccentricity e<sub>min</sub> = l/500 + D/30, at least 20 mm. If it does not exceed 0.05D, P<sub>u</sub> = 0.4 f<sub>ck</sub> A<sub>c</sub> + 0.67 f<sub>y</sub> A<sub>sc</sub>.</li>
<li>Longitudinal steel 0.8–6 % (4 % practical, to allow laps); at least four 12 mm bars in rectangular columns (six in circular).</li>
<li>Ties at least ¼ of the largest bar and 6 mm, at a pitch no more than the least lateral dimension, 16φ or 300 mm.</li>
</ul>
<h2>Deflection and cracking</h2>
<ul>
<li>Final deflection ≤ span/250; deflection after partitions and finishes ≤ span/350 or 20 mm.</li>
<li>Basic span / effective depth: 7 (cantilever), 20 (simply supported), 26 (continuous) for spans up to 10 m, multiplied by modification factors for tension and compression steel (and by 10/span for longer spans).</li>
<li>Crack width generally limited to 0.3 mm (0.2 mm or less for aggressive exposure).</li>
</ul>
<h2>Footings</h2>
<ul>
<li>Thickness at the edge at least 150 mm on soil (300 mm on piles); cover 50 mm.</li>
<li>Check one-way shear at d from the column face and punching shear at d/2: τ<sub>c</sub> (punching) = k<sub>s</sub> × 0.25√f<sub>ck</sub>.</li>
<li>Bending at the column face; bearing at the column–footing interface.</li>
</ul>
<p>Use the <a href="#/tool/beam">beam</a>, <a href="#/tool/column">column</a> and <a href="#/tool/sizing">sizing</a> calculators for quick checks.</p>`,
  src:"IS 456:2000, clauses 23 to 26, 31 to 40 and Annexes D, F and G; Tables 19 and 20.", rel:["ductile","rebar","loads","foundations"] },

/* =============================================================== */
{ id:"ductile", cat:"Structural design", title:"Ductile detailing for earthquake zones (IS 13920)",
  lede:"Ductile detailing is what earns a frame its R = 5. It makes sure beams yield before columns, that concrete stays confined after the cover spalls, and that laps do not sit where the structure must bend.",
  short:["Strong column, weak beam: at every joint, the columns' moment capacity is at least 1.4 times the beams'.","Beams at least 200 mm wide with width/depth at least 0.3; close hoops over 2d at each end.","Confine column ends over the larger of D, clear height/6 and 450 mm, and continue the hoops through the joint."],
  body:`
<h2>Why it matters</h2>
<p>In a strong earthquake a frame survives by forming hinges in its <b>beams</b>, which bend and absorb energy while the columns keep standing. If the columns hinge first, a whole storey can collapse. Detailing makes the intended behaviour happen. IS 13920 applies to RC buildings in seismic zones III, IV and V.</p>
<h2>Beams</h2>
${T(["Item","Requirement"],[["Width","At least 200 mm"],["Width / depth","At least 0.3"],["Depth","No more than ¼ of the clear span"],["Longitudinal steel","Top and bottom each at least 0.24√fck / fy; at most 2.5 %; at least two bars continuous top and bottom"],["Bottom steel at a joint face","At least ½ of the top steel there"],["Steel anywhere along the beam","At least ¼ of the maximum at either joint face"],["Hoops near supports","Over 2d at each end: spacing no more than d/4 and 8 × smallest bar diameter (need not be less than 100 mm); first hoop within 50 mm of the joint face"],["Hoops elsewhere","No more than d/2"],["Laps","Not within the joint, not within 2d of the joint face, not where flexural yielding is expected; confined by hoops at no more than 150 mm (or d/4)"]],"Spacing limits shown follow the 1993 edition; confirm them against the 2016 edition, which tightened several values.")}
<h2>Columns</h2>
${T(["Item","Requirement"],[["Minimum dimension","300 mm in IS 13920:2016 (also at least 20 × the largest beam bar passing through the joint). The 1993 edition allowed 200 mm, or 300 mm where beam spans exceed 5 m or columns are over 4 m unsupported"],["Shortest / perpendicular dimension","At least 0.4"],["Strong column, weak beam","ΣMc ≥ 1.4 ΣMb at every joint"],["Laps","Only in the central half of the clear height, with hoops at close spacing over the lap"],["Special confining reinforcement","Over lo ≥ max(D, clear height / 6, 450 mm) from each joint face, and continued through the joint"],["Hoop spacing in lo","Tightly spaced as specified (no more than ¼ of the minimum dimension and 100 mm in the 1993 edition; the 2016 edition also limits it to 6 × the smallest bar diameter)"]])}
<h2>Hoops and hooks</h2>
<ul>
<li>Closed hoops with <b>135° hooks</b> engaging the longitudinal bars, with an extension of <b>6φ (at least 65 mm)</b> in IS 13920:2016; the 1993 edition required 10φ (at least 75 mm).</li>
<li>90° hooks open when the cover spalls and lose their grip on the core; 135° hooks anchor into it.</li>
<li>Cross-ties with a 135° hook at one end and at least 90° at the other, alternating.</li>
</ul>
<h2>Beam–column joints</h2>
<p>Joints must be strong enough in shear and stay confined. Continue the column's special confining hoops through the joint, except where beams on all four faces cover enough of the column to provide confinement (when the spacing may be relaxed). Anchor beam bars into the joint with enough length, bending them into the core.</p>
<h2>Shear walls</h2>
<ul>
<li>Web reinforcement at least <b>0.25 %</b> in each direction, in two curtains when the wall is thick or the shear is high.</li>
<li><b>Boundary elements</b> with column-like confinement at the wall ends where the extreme compressive stress under factored loads is high.</li>
<li>Coupling beams with diagonal reinforcement where the shear is high.</li>
</ul>`,
  src:"IS 13920:2016 (Ductile design and detailing of RC structures subjected to seismic forces), with IS 13920:1993 values noted where they differ.", rel:["earthquake","rebar","rcc-design","structural-drawings"] },

/* =============================================================== */
{ id:"steel", cat:"Structural design", title:"Steel design essentials (IS 800:2007)",
  lede:"Steel is strong and ductile but slender. Much of steel design is about stopping members and plates from buckling before they reach their strength, and making connections as strong as the members they join.",
  short:["γm0 = 1.10 (yielding and buckling), γm1 = 1.25 (rupture); bolts 1.25; welds 1.25 shop / 1.50 field.","Sections are plastic, compact, semi-compact or slender depending on width-to-thickness ratios, with ε = √(250/fy).","Slenderness KL/r: 180 for members carrying dead and imposed load; 250 if compression comes only from wind or earthquake; 400 for tension members."],
  body:`
<h2>Safety factors</h2>
${T(["Factor","Value","Used for"],[["γm0","1.10","Resistance governed by yielding and buckling"],["γm1","1.25","Resistance governed by ultimate stress (rupture)"],["γmb","1.25","Bolts (bearing and friction type)"],["γmw","1.25 (shop) / 1.50 (field)","Welds"]])}
${T(["Combination","DL","IL","WL / EL"],[["DL + IL","1.5","1.5","–"],["DL + IL + WL or EL","1.2","1.2","1.2"],["DL + WL or EL","1.5 (0.9 where DL helps stability)","–","1.5"]],"Load factors from IS 800 Table 4 (limit state of strength).")}
<h2>Section classification</h2>
<p>Thin plates buckle locally before the section yields. Sections are classed by the width-to-thickness ratio of their parts, with ε = √(250/f<sub>y</sub>):</p>
${T(["Element","Plastic","Compact","Semi-compact"],[["Outstand of rolled I-section flange (b/t<sub>f</sub>)","9.4ε","10.5ε","15.7ε"],["Web of I-section, neutral axis at mid-depth (d/t<sub>w</sub>)","84ε","105ε","126ε"]],"Plastic sections can form a plastic hinge and redistribute moments; compact sections reach the plastic moment; semi-compact reach only first yield; slender sections buckle locally first.")}
<h2>Tension members</h2>
<p>The design strength is the least of: yielding of the gross section T<sub>dg</sub> = A<sub>g</sub>f<sub>y</sub>/γ<sub>m0</sub>; rupture of the net section T<sub>dn</sub> = 0.9 A<sub>n</sub>f<sub>u</sub>/γ<sub>m1</sub> (for plates); and block shear at the end connection.</p>
<h2>Compression members</h2>
<ul>
<li>Design strength from the buckling curves (a, b, c or d depending on section and axis) and the non-dimensional slenderness.</li>
<li>Effective length from end conditions; slenderness limits KL/r: 180 for members carrying dead and imposed loads, 250 where compression arises only from wind or earthquake, 350 for members normally in tension that reverse, 400 for tension members.</li>
</ul>
<h2>Beams</h2>
<ul>
<li>Laterally restrained beams reach the plastic or elastic moment by section class; unrestrained beams are checked for lateral-torsional buckling.</li>
<li>Check shear, web buckling and crippling at supports and under point loads.</li>
</ul>
${T(["Member","Deflection limit"],[["Floor beams: elements not susceptible to cracking","Span / 300"],["Floor beams: brittle finishes or cladding","Span / 360"],["Purlins and girts","Span / 150 to span / 180"],["Cantilevers","Span / 150 to span / 180 by type of finish"]],"Serviceability limits for buildings from IS 800 Table 6 (representative values).")}
<h2>Connections</h2>
<ul>
<li>Bolts in shear: capacity from the bolt area, ultimate strength and number of shear planes, with γ<sub>mb</sub> = 1.25; also check bearing on the plates.</li>
<li>Friction-grip bolts for connections where slip is not acceptable.</li>
<li>Welds: fillet weld strength from the throat area and f<sub>u</sub>/(√3 γ<sub>mw</sub>).</li>
</ul>`,
  src:"IS 800:2007, sections 3 to 10 (Tables 2, 3, 4, 5 and 6).", rel:["loads","rcc-design"] },

/* =============================================================== */
{ id:"masonry-design", cat:"Structural design", title:"Load-bearing masonry design (IS 1905)",
  lede:"Load-bearing masonry is still the most common structure for small buildings. Its strength depends on the brick and the mortar together, and its stability on how slender the walls are.",
  short:["Maximum slenderness ratio of a load-bearing wall: 27 with cement or cement–lime mortar.","With lime mortar: 20 for buildings up to two storeys, 13 for taller ones.","Earthquake features (bands, vertical steel) from IS 4326 are added on top of IS 1905 design."],
  body:`
<h2>How masonry carries load</h2>
<p>A masonry wall carries vertical load in compression. Its permissible stress depends on the strength of the units (bricks or blocks) and the mortar grade, reduced for slenderness (a tall thin wall buckles) and for eccentricity of the load. Small piers and short wall lengths are reduced further for their area.</p>
<h2>Slenderness</h2>
<p>Slenderness ratio = effective height ÷ effective thickness (or effective length ÷ effective thickness, whichever is less). Effective height depends on how the wall is restrained at top and bottom by floors and roofs; effective length on cross walls and returns.</p>
${T(["Number of storeys","With Portland cement or Portland pozzolana cement in mortar","With lime mortar"],[["Not exceeding 2","27","20"],["Exceeding 2","27","13"]],"Maximum slenderness ratio for a load-bearing wall (IS 1905 Table 7).")}
<h2>Design steps</h2>
<ol>
<li>Work out the loads on each wall per metre run, floor by floor, including self weight.</li>
<li>Find the effective height, length and thickness; check the slenderness ratio against the limit.</li>
<li>From the unit strength and mortar type, take the basic compressive stress (IS 1905 Table 8).</li>
<li>Apply the stress reduction factor (slenderness and eccentricity), area reduction factor (small sections) and shape modification factor (unit proportions).</li>
<li>Check the actual stress against the permissible stress; increase unit strength, mortar grade or thickness as needed.</li>
<li>Check concentrated loads under beams (bearing) and provide padstones or bed blocks.</li>
</ol>
<h2>Other rules of thumb in the code</h2>
<ul>
<li>Basement walls: minimum thickness depends on the height of ground above the basement floor and the wall loading (IS 1905 Table 3); with a surcharge from adjoining buildings, design by analysis.</li>
<li>Free-standing walls (boundary walls) have height-to-thickness limits depending on wind pressure.</li>
<li>Chases and holes must not weaken load-bearing walls beyond the code limits.</li>
<li>In seismic zones, follow IS 4326 for bands, vertical steel and opening limits (see <a href="#/guide/masonry-earthquake">earthquake-resistant masonry</a>).</li>
</ul>`,
  src:"IS 1905:1987 (Code of practice for structural use of unreinforced masonry), clauses 4 and 5, Tables 3, 7 and 8.", rel:["masonry-earthquake","brickwork","brick-tests"] },

/* =============================================================== */
{ id:"soil-investigation", cat:"Structural design", title:"Soil investigation (IS 1892)",
  lede:"The soil decides the foundation type, the safe bearing pressure, the expected settlement and the seismic site class. A soil investigation is cheap compared with the cost of getting any of these wrong.",
  short:["Investigate in stages: desk study and reconnaissance, preliminary investigation, then detailed investigation.","As a guide, boreholes go to about 1.5 × the footing width below founding level, deeper under rafts and piles.","The report gives the soil profile, design parameters, groundwater level, foundation recommendation and safe bearing pressure."],
  body:`
<h2>Stages</h2>
<ol>
<li><b>Desk study and reconnaissance:</b> geological maps, previous investigations nearby, history of the site (fill, ponds, old foundations), drainage, signs of distress in neighbouring buildings, groundwater in nearby wells.</li>
<li><b>Preliminary investigation:</b> a few boreholes or test pits to understand the general soil profile and choose the foundation type.</li>
<li><b>Detailed investigation:</b> boreholes at the planned foundation locations, sampling and testing for design parameters.</li>
</ol>
<h2>How deep and how many</h2>
<ul>
<li>Deep enough to cover all strata that will be stressed by the foundation, usually where the added stress falls to about 10 % of the applied pressure.</li>
<li>Isolated footings: about 1.5 × the footing width below founding level. Closely spaced footings (spacing less than twice their width): about 1.5 × the plan size of the group. Rafts: about 1.5 × the raft width.</li>
<li>Piles: well below the expected pile tip, typically at least 1.5 × the width of the pile group beyond the tip, or into rock.</li>
<li>Number and spacing depend on the size of the structure and the uniformity of the soil; more where soils vary or loads are heavy.</li>
</ul>
<h2>Field and laboratory tests</h2>
${T(["Test","What it gives"],[["Standard penetration test (SPT)","N-value: relative density of sand, consistency of clay; used for bearing capacity, settlement and liquefaction"],["Cone penetration test","Continuous profile of resistance"],["Undisturbed samples","Shear strength (c, φ) from triaxial or direct shear; compressibility from consolidation tests"],["Index tests","Grain size, Atterberg limits, moisture content, density: classification"],["Plate load test","Bearing capacity and settlement at a given depth"],["Chemical tests on soil and groundwater","Sulphates and chlorides, which govern cement type and cover for buried concrete"],["Groundwater observation","Level and seasonal variation; affects bearing capacity and basement design"]])}
<h2>The report</h2>
<ul class="check">
<li>Borehole logs and the soil profile across the site</li>
<li>Groundwater level, and the date it was recorded</li>
<li>Design parameters for each layer: c, φ, γ, compressibility, SPT N</li>
<li>Recommended foundation type and founding depth</li>
<li>Safe bearing pressure (net) for the recommended foundation, with expected settlement</li>
<li>Soil type for seismic design; liquefaction potential where relevant</li>
<li>Chemical aggressiveness and recommendations for buried concrete</li>
</ul>`,
  src:"IS 1892:2021 (Subsurface investigation for foundations).", rel:["foundations","earthquake"] },

/* =============================================================== */
{ id:"foundations", cat:"Structural design", title:"Shallow foundations: depth, bearing capacity and settlement",
  lede:"A foundation must do two things: not fail in shear, and not settle too much (or too unevenly). The safe bearing pressure is the lower of the two answers.",
  short:["Found at least 0.5 m below ground and below the zone of seasonal swelling, shrinkage and scour.","Net ultimate bearing capacity combines cohesion, surcharge and self-weight terms, each corrected for shape, depth, inclination and water table.","Safe bearing capacity = net ultimate ÷ factor of safety (usually 2.5–3) + overburden; then check settlement."],
  body:`
<h2>General requirements (IS 1904)</h2>
<ul>
<li>Minimum depth of a shallow foundation: <b>0.5 m</b> below natural ground, and below the zone affected by seasonal volume change, frost and scour.</li>
<li>The safe bearing pressure is the lower of: (a) the shear failure value ÷ factor of safety, and (b) the pressure that causes the permissible settlement.</li>
<li>Permissible total settlement, differential settlement and angular distortion depend on the type of structure and the soil (sand or clay); use the limits in the code.</li>
<li>Next to existing buildings, keep the new founding level below the existing foundations' line of influence, or design shoring and underpinning.</li>
<li>Expansive (black cotton) soils, fill, sloping ground and aggressive groundwater need special measures.</li>
</ul>
<h2>Bearing capacity (IS 6403)</h2>
<div class="formula">q<sub>nu</sub> = c N<sub>c</sub> s<sub>c</sub> d<sub>c</sub> i<sub>c</sub> + q (N<sub>q</sub> − 1) s<sub>q</sub> d<sub>q</sub> i<sub>q</sub> + ½ γ B N<sub>γ</sub> s<sub>γ</sub> d<sub>γ</sub> i<sub>γ</sub> W′</div>
${T(["Factor","Expression"],[["Nq","e^(π tanφ) · tan²(45° + φ/2)"],["Nc","(Nq − 1) · cot φ  (5.14 for φ = 0)"],["Nγ","2 (Nq + 1) · tan φ"],["Depth factors","dc = 1 + 0.2 (Df/B) √Nφ; dq = dγ = 1 + 0.1 (Df/B) √Nφ for φ > 10° (1.0 otherwise); Nφ = tan²(45° + φ/2)"],["Inclination factors","ic = iq = (1 − α/90)²; iγ = (1 − α/φ)²"],["Water table factor W′","1.0 if the water table is at or below Df + B; 0.5 if at or above the base; linear in between"]])}
${T(["Footing shape","sc","sq","sγ"],[["Strip","1.0","1.0","1.0"],["Square","1.3","1.2","0.8"],["Circular","1.3","1.2","0.6"],["Rectangular","1 + 0.2 B/L","1 + 0.2 B/L","1 − 0.4 B/L"]])}
${T(["φ (°)","Nc","Nq","Nγ"],[["0","5.14","1.00","0.00"],["10","8.35","2.47","1.22"],["20","14.83","6.40","5.39"],["25","20.72","10.66","10.88"],["30","30.14","18.40","22.40"],["35","46.12","33.30","48.03"],["40","75.31","64.20","109.41"]],"Bearing capacity factors from the expressions above.")}
<ul>
<li><b>Local shear failure</b> (loose sands, soft clays): use c′ = ⅔c and tanφ′ = ⅔ tanφ.</li>
<li><b>Safe bearing capacity:</b> q<sub>s</sub> = q<sub>nu</sub>/F + γD<sub>f</sub>, with F usually 2.5 to 3.0.</li>
<li>Bearing capacity can also be estimated from SPT, cone penetration or plate load tests, as described in IS 6403.</li>
</ul>
<p>Work a case in the <a href="#/tool/bearing">bearing capacity calculator</a>.</p>
<h2>Footing design (IS 456)</h2>
<ul>
<li>Size the footing from service loads and the safe bearing pressure.</li>
<li>Design for factored loads: bending at the column face, one-way shear at d from the face, punching shear at d/2 around the column, and bearing at the column base.</li>
<li>Edge thickness at least 150 mm (on soil); cover 50 mm; development length of bars from the critical section.</li>
<li>In seismic zones, tie isolated footings together with plinth or tie beams.</li>
</ul>`,
  src:"IS 1904:2021, IS 6403:1981, IS 456:2000 (cl 34).", rel:["soil-investigation","rcc-design","loads"] },

/* =============================================================== */
{ id:"tall", cat:"Structural design", title:"Tall buildings over 50 m (IS 16700:2023)",
  lede:"Above 50 m, wind comfort, drift and dynamic behaviour begin to govern alongside strength. IS 16700 sets prescriptive limits for RC buildings between 50 m and 250 m; buildings above 250 m are super-tall and need special review.",
  short:["Applies to RC buildings over 50 m and up to 250 m.","Wind drift under 20-year wind: h/500 per storey and H/500 at the top.","Peak acceleration under 10-year wind: 0.18 m/s² residential, 0.25 m/s² mercantile."],
  body:`
<h2>Height limits by structural system (m)</h2>
${T(["Zone","Moment frame","Structural walls (well distributed)","Walls + moment frame","Walls + perimeter frame","Walls + framed tube"],[["II","80","250","250","250","250"],["III","60","200","225","225","250"],["IV","Not allowed","150","200","200","225"],["V","Not allowed","120","150","150","180"]],"Walls count as well distributed when walls outside the core carry at least 25 % of the lateral load.")}
<h2>Slenderness (height / base width)</h2>
${T(["Zone","Moment frame","Structural walls","Walls + frame","Walls + perimeter frame","Walls + framed tube"],[["II","5","9","9","10","10"],["III","4","8","8","9","10"],["IV and V","–","8","8","9","9"]])}
<h2>Plan and stiffness</h2>
<ul>
<li>Plans preferably rectangular, square, elliptical or circular; plan aspect ratio no more than <b>5</b> (each leg of an L-shape is checked separately).</li>
<li>No storey with lateral stiffness below 70 % of the storey above (soft storey).</li>
<li>Floor slabs cast in situ. Precast floors need a structural topping of at least 75 mm (zones III–V) or 50 mm (zone II). Floor openings within limits.</li>
<li>Minimum concrete grade <b>M30</b>.</li>
</ul>
<h2>Dynamic behaviour</h2>
<ul>
<li>Fundamental torsional period no more than <b>0.9 ×</b> the smaller translational period.</li>
<li>Fundamental translational period no more than <b>8 s</b>, using serviceability section properties.</li>
<li>Cracked section properties per Table 5, separately for serviceability and strength.</li>
</ul>
<h2>Wind serviceability and comfort</h2>
<ul>
<li>Storey drift under serviceability wind (20-year return period) no more than <b>1/500</b>; drift at the top usable floor no more than <b>H/500</b> (h/400 allowed for a single storey).</li>
<li>Peak combined acceleration (along- and across-wind) under 10-year wind: <b>0.18 m/s²</b> residential, <b>0.25 m/s²</b> mercantile, with or without dampers.</li>
<li>Torsional velocity below 0.003 rad/s (10-year wind).</li>
<li>Damping for wind design no more than <b>2 %</b> of critical.</li>
<li>Wind tunnel studies for tall, slender or unusual buildings, to the code's requirements.</li>
</ul>
<h2>Seismic</h2>
<ul>
<li>In zone V, vertical shaking is considered together with horizontal shaking, and a site-specific spectrum is preferred.</li>
<li>Key elements (transfer structures, elements that would trigger disproportionate collapse) designed with higher factors so they do not yield before the intended ductile elements.</li>
<li>Stability coefficient for storey drift (P-Δ) checked.</li>
</ul>
<h2>Approval</h2>
<p>Buildings that do not meet the prescriptive requirements need an alternative (performance-based) design reviewed by an expert panel, as set out in Annex B. The code includes a checklist of compliance items, such as the height and slenderness limits, wall distribution, M30 concrete, wind tunnel studies, site-specific spectra and cracked properties.</p>`,
  src:"IS 16700:2023 (Criteria for structural safety of tall concrete buildings, first revision), clauses 5 to 7, Tables 1 to 3 and 5, Annex B.", rel:["wind","earthquake","fire","lifts"] }
);
