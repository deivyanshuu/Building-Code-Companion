SITE.guides.push(
/* =============================================================== */
{ id:"estimation-basics", cat:"Estimation & measurement", title:"Estimating a building: types of estimate and how they fit together",
  lede:"An estimate is a forecast of cost, and its accuracy grows as the design develops. Knowing which kind of estimate you need, and what it can and cannot tell you, avoids the classic mistake of quoting a detailed number from a sketch.",
  short:["Early estimates use rates per square metre of plinth area or per cubic metre of building volume; detailed estimates use measured quantities and rate analysis.","A detailed estimate has three parts: the measurement (quantity) sheet, the abstract of cost (quantity × rate), and the specifications.","Measure to IS 1200 so that quantities are consistent between the estimator, the contractor and the auditor."],
  body:`
<h2>Kinds of estimate</h2>
${T(["Estimate","When it is used","How it is made","Typical accuracy"],[["Preliminary (approximate)","Feasibility, budget approval","Cost per unit of use (per bed, per seat, per flat) or per m² from similar buildings","Rough"],["Plinth area estimate","Administrative approval","Plinth area × plinth-area rate for the type and specification of building, plus extras for special items","Moderate"],["Cubical content estimate","Tall or unusual buildings","Building volume × rate per m³","Moderate"],["Detailed estimate","Technical sanction, tendering","Every item measured from drawings to IS 1200, priced from rate analysis or a schedule of rates","Good"],["Revised estimate","When the sanctioned estimate will be exceeded significantly","Fresh detailed estimate with reasons for the change","Good"],["Supplementary estimate","Additional work found necessary during construction","Detailed estimate of the extra work only","Good"]],"Accuracy improves as the drawings are developed; departments set their own thresholds for when a revised estimate is needed.")}
<h2>Parts of a detailed estimate</h2>
<ol>
<li><b>Report and specifications:</b> what is being built, the standards and specifications to be followed, the basis of rates.</li>
<li><b>Measurement sheet (details of measurement):</b> for each item, the number, length, breadth and height or depth, worked out to the quantity, following the order and rules of IS 1200.</li>
<li><b>Abstract of cost:</b> each item's quantity × rate = amount, summed by sub-head (earthwork, concrete, masonry, finishes …).</li>
<li><b>Rate analysis</b> for items not in the schedule of rates (see <a href="#/guide/rate-analysis">rate analysis</a>).</li>
<li><b>Provisions:</b> contingencies, work-charged establishment, services (water supply, sanitary, electrical), external works and any departmental charges, as the department's practice requires.</li>
</ol>
<h2>Two ways to take off quantities</h2>
<ul>
<li><b>Long wall – short wall method:</b> long walls are measured out-to-out, short walls in-to-in, so corners are counted once. Easy to check, good for simple plans.</li>
<li><b>Centre-line method:</b> the total centre-line length of walls × section, with a deduction of half a wall width at each T-junction. Fast, and good for walls of the same section.</li>
</ul>
<p>Either way, book dimensions in the order length, breadth, height (IS 1200), and keep the sheet readable so someone else can check it.</p>
<h2>Order of items</h2>
<p>Follow the construction sequence: site clearance and earthwork, anti-termite treatment, PCC, foundations and footings, DPC, superstructure masonry, RCC (with formwork and steel measured separately), doors and windows, flooring, plastering, painting and finishing, plumbing and sanitary, electrical, external works.</p>
<div class="tip">Keep the quantity sheet, the rate analysis and the abstract in one workbook with cross-references, so a change in a dimension flows through to the cost.</div>`,
  src:"IS 1200 (method of measurement, all parts); common practice in Indian public works departments.", rel:["measurement-rules","rate-analysis","quantity-concrete"] },

/* =============================================================== */
{ id:"measurement-rules", cat:"Estimation & measurement", title:"How work is measured: IS 1200 rules by trade",
  lede:"Arguments over bills are usually arguments over measurement. IS 1200 fixes units, how dimensions are rounded, and what is or is not deducted for openings and embedded items, trade by trade. Here are the rules used most often.",
  short:["Measure net, as fixed, to the nearest 0.01 m; work out areas to 0.01 m² and volumes to 0.01 m³ (slab thickness to 0.005 m).","Plaster and painting: no deduction for openings up to 0.5 m²; for 0.5–3 m² deduct one face only; above 3 m² deduct both faces and measure the jambs.","Concrete: no deduction for openings up to 0.1 m², the volume of reinforcement, or pipes up to 100 cm² in section."],
  body:`
<h2>General rules (all trades)</h2>
<ul>
<li>Measure net, in the decimal system, as fixed in position. Work done beyond the specified dimensions is ignored.</li>
<li>Dimensions to the nearest <b>0.01 m</b> (slab thickness to 0.005 m); areas to <b>0.01 m²</b>; volumes to <b>0.01 m³</b>.</li>
<li>Book dimensions in a consistent order: length, breadth or width, height, depth or thickness.</li>
<li>Measure separately: work in or under water, in liquid mud, in foul positions, under tides and in snow (state the tide levels).</li>
<li>Measure concrete and masonry in stages, below and above ground or datum level, stating the height or depth.</li>
<li>Where a minimum area is defined for deducting an opening, it refers only to the opening within the area being measured.</li>
</ul>
<h2>Earthwork (IS 1200 Part 1)</h2>
<ul>
<li>Excavation is measured from the authorised dimensions, <b>without any allowance for bulking</b>.</li>
<li>Excavation is measured in successive <b>lifts of 1.5 m</b>, stating the commencing level (not where no lift is involved, such as hillside cutting).</li>
<li>"Excavate and get out" includes throwing the earth at least 1 m, or one-third of the depth, clear of the edge. Disposal of surplus is a separate item or stated in the description.</li>
<li>Where soils and rock are mixed, rock is stacked and measured in stacks with an agreed deduction for voids, and the soil quantity worked out from levels.</li>
<li>Filling is measured from levels or as consolidated, with an agreed percentage deduction for voids where measured loose.</li>
<li>Surface dressing (trimming inequalities up to 150 mm) is measured in square metres.</li>
</ul>
<h2>Concrete (Part 2)</h2>
<ul>
<li>Concrete is measured in <b>cubic metres</b>; formwork and reinforcement are measured separately unless the item says otherwise.</li>
<li>No deduction for: ends of dissimilar materials (beams, posts, rafters and the like) of small section; <b>openings up to 0.1 m²</b>; the <b>volume of reinforcement</b>; pipes, conduits and sheathing up to <b>100 cm²</b> in section; small voids up to 40 cm²; mouldings, chamfers and grooves up to 10 cm wide or 15 cm in girth.</li>
<li>Chhajjas are measured including the bearing; when combined with a lintel, beam or slab, as the clear projection. Projections averaging up to 100 mm thick are measured as chhajja, thicker ones as slab.</li>
<li>Concrete casing to steel joists: the volume of the joist is not deducted, except for boxed sections.</li>
</ul>
<h2>Formwork (Part 5)</h2>
<ul>
<li>Measured in <b>square metres of the surface in contact</b> with concrete.</li>
<li>No deduction for openings up to <b>0.4 m²</b> (none at all for slipform work).</li>
<li>Formwork to secondary beams is measured up to the sides of the main beam, with no deduction from the main beam; beam formwork up to the sides of columns, with no deduction from the column.</li>
<li>Floors thicker than 200 mm are measured separately; sloping surfaces over 30° may need shuttering on both faces.</li>
</ul>
<h2>Brickwork (Part 3)</h2>
<ul>
<li>Measured in <b>cubic metres</b>. Walls one brick thick and less are measured in <b>square metres</b>, stating the thickness.</li>
<li>Walls from one to three bricks thick are measured in multiples of half a brick (including joints); thicker walls at the actual thickness.</li>
<li>No deduction or addition for: ends of dissimilar materials of small section (joists, beams, lintels, posts, purlins, trusses, corbels, steps); small openings; wall plates and bearings of slabs and chhajjas up to 10 cm thick not extending over the full wall thickness; holdfast blocks; iron fixtures; chases up to the specified size.</li>
<li>Cutting openings over 0.1 m² is measured in m² (walls one brick and less) or m³ (thicker walls). Holes are classified up to 400 cm² and from 400 cm² to 0.1 m².</li>
<li>Brick tile work is measured separately by the same rules; chases, rebates and grooves in running metres by girth.</li>
</ul>
<h2>Plastering and pointing (Part 12)</h2>
${T(["Opening size (each)","Deduction from plaster","Jambs, soffits and sills"],[["Up to 0.5 m²","None","Not added"],["Over 0.5 m² up to 3 m², same plaster both faces","One face only","Not added"],["Over 0.5 m² up to 3 m², different finish each face","From the face with the narrower reveal; 50 % from each face if reveals are equal","Not added"],["Over 3 m²","Both faces","Measured and added"]],"No deduction for ends of joists, beams and posts. Measured in square metres. The same rules apply to whitewashing, distempering and painting of walls (Part 13). Try the <a href='#/tool/deductions'>deduction tool</a>.")}
<h2>Flooring and paving (Part 11)</h2>
<ul>
<li>Measured in square metres. No deduction for voids up to <b>0.2 m²</b>, or for embedded items up to 0.1 m².</li>
<li>Treads, risers and landing edges in square metres; skirting and narrow work up to 30 cm wide in running metres, wider in m².</li>
</ul>
<h2>Painting of doors, windows and steelwork (Part 15)</h2>
<p>Doors, windows, gates and similar items are measured flat (overall area of the opening) and multiplied by the <b>coefficients in Table 1</b> of IS 1200 Part 15, which allow for the extra area of panels, glazing bars, grills and edges. Corrugated sheets are measured flat and increased by a stated percentage. Painting of iron fittings in the same shade is included.</p>
<h2>Steel and reinforcement (Part 8)</h2>
<ul>
<li>Reinforcement is measured in running metres and its <b>mass calculated</b> from the standard mass per metre. The item includes straightening, cutting, bending and hooks.</li>
<li><b>Authorised laps, chairs and separators are measured</b>; binding wire is not measured (it is included in the item).</li>
<li>Welded butt joints are counted; lap welds measured in running metres. Fabric reinforcement in square metres, with authorised laps.</li>
<li>Structural steel is measured by mass, classified by member type.</li>
</ul>`,
  src:"IS 1200 Part 1 (earthwork, 1992), Part 2 (concrete, 1974), Part 3 (brickwork, 1976), Part 5 (formwork, 1982), Part 8 (steel, 1993), Part 11 (paving and flooring, 1977), Part 12 (plastering and pointing, 1976), Part 13 (whitewashing and painting, 1994), Part 15 (painting and polishing, 1987).", rel:["estimation-basics","quantity-concrete","quantity-masonry","earthwork-estimation"] },

/* =============================================================== */
{ id:"quantity-concrete", cat:"Estimation & measurement", title:"Materials for concrete: cement, sand, aggregate and water",
  lede:"Working out how many bags of cement and how much sand and aggregate a pour needs is the most common site calculation. For designed mixes, take the quantities straight from the approved mix design. For small nominal-mix work, use the method below.",
  short:["Nominal mixes (up to M20): M10 1:3:6, M15 1:2:4, M20 1:1.5:3 by volume.","Dry materials take roughly 1.52–1.57 times the volume of the finished concrete (voids fill up); 1.54 is commonly used.","A 50 kg bag of cement is about 0.0347 m³ (bulk density about 1440 kg/m³)."],
  body:`
<h2>Nominal mixes in IS 456</h2>
${T(["Grade","Typical proportion (cement : sand : coarse aggregate)","Total aggregate per 50 kg cement, max (kg)","Water per 50 kg cement, max (litres)"],[["M5","1 : 5 : 10","800","60"],["M7.5","1 : 4 : 8","625","45"],["M10","1 : 3 : 6","480","34"],["M15","1 : 2 : 4","330","32"],["M20","1 : 1.5 : 3","250","30"]],"IS 456 Table 9. Fine to coarse aggregate is generally 1:2 by mass, adjustable from 1:1.5 to 1:2.5 for better grading. Nominal mixes may be used only up to M20; above that, use a designed mix (see <a href='#/guide/mix-design'>mix design</a>).")}
<h2>The dry volume method (site practice)</h2>
<ol>
<li>Wet volume of concrete V (m³) from the measurement.</li>
<li>Dry volume = V × 1.54 (allowing for voids and compaction). Add wastage, usually 2–5 %.</li>
<li>Sum of the ratio, e.g. 1 + 1.5 + 3 = 5.5 for M20.</li>
<li>Cement = dry volume × 1 / 5.5; in bags = cement volume ÷ 0.0347.</li>
<li>Sand = dry volume × 1.5 / 5.5; coarse aggregate = dry volume × 3 / 5.5.</li>
<li>Water = cement (kg) × w/c ratio.</li>
</ol>
${T(["Mix","Cement bags per m³","Sand (m³) per m³","Coarse aggregate (m³) per m³"],[["1 : 1.5 : 3 (M20)","8.07","0.42","0.84"],["1 : 2 : 4 (M15)","6.34","0.44","0.88"],["1 : 3 : 6 (M10)","4.44","0.46","0.92"],["1 : 4 : 8 (M7.5)","3.41","0.47","0.95"]],"Worked with a dry-volume factor of 1.54 and no wastage. Work any case in the <a href='#/tool/concrete-qty'>concrete quantity tool</a>.")}
<div class="note">The 1.54 factor and volume batching are approximations used for estimates and small work. For structural concrete, use weigh batching and the quantities from the approved mix design, corrected for aggregate moisture and bulking.</div>
<h2>Ready-mixed concrete</h2>
<p>For RMC, order the wet volume plus a small allowance (often 2–3 %) for over-break, spillage and the unevenness of formwork. Check each delivery ticket's volume against the pour.</p>`,
  src:"IS 456:2000 clause 9.3 and Table 9; site estimating practice for the dry-volume factor and cement bag volume.", rel:["mix-design","rate-analysis","concrete-on-site"] },

/* =============================================================== */
{ id:"quantity-masonry", cat:"Estimation & measurement", title:"Materials for brickwork, blockwork and plaster",
  lede:"How many bricks, how many bags of cement, how much sand: these numbers drive both the estimate and the site's daily ordering. The method is simple once the brick size and joint thickness are fixed.",
  short:["Modular bricks (190 × 90 × 90 mm) with 10 mm joints: 500 bricks per m³ of wall.","Mortar is about a quarter of the wall volume for modular bricks; the dry mortar volume is about 1.3 times the wet volume.","Plaster: area × thickness gives wet volume; add about 30 % for dry volume and a further allowance for filling joints and unevenness."],
  body:`
<h2>Bricks per cubic metre</h2>
${T(["Brick (size without joints)","Size with 10 mm joints","Bricks per m³","Volume of bricks in 1 m³"],[["Modular 190 × 90 × 90 mm","200 × 100 × 100 mm","500","0.77 m³"],["Non-modular 230 × 110 × 70 mm","240 × 120 × 80 mm","434","0.77 m³"]],"Number = 1 ÷ (volume of one brick with joints). Mortar (wet) = 1 − volume of bricks, about 0.23 m³ per m³. Add wastage for bricks, typically 3–5 %, for breakage and cutting.")}
<h2>Mortar</h2>
<ol>
<li>Wet mortar per m³ of brickwork ≈ 1 − (bricks × volume of one brick without joints). For modular bricks this is about 0.23 m³, and frogs filled with mortar add a little more.</li>
<li>Dry volume of mortar ≈ wet volume × 1.27 to 1.33 (site practice), plus a few per cent for wastage.</li>
<li>For a 1 : 6 cement–sand mix: cement = dry volume × 1/7; sand = dry volume × 6/7. Cement in bags = volume ÷ 0.0347.</li>
<li>Mix only as much cement mortar as can be used in about <b>30 minutes</b> (IS 2250).</li>
</ol>
<p>Use the <a href="#/tool/brick-qty">brickwork quantity tool</a> to run it for any wall.</p>
<h2>Concrete blocks</h2>
<ul>
<li>Common block faces are 400, 500 or 600 mm long and 200 mm high; with 10 mm joints a 400 × 200 face block gives about 12 blocks per m² of wall face.</li>
<li>Hollow load-bearing blocks (Grade A) have density at least 1500 kg/m³ and strengths of 3.5 to 15 N/mm²; water absorption no more than 10 % and drying shrinkage no more than 0.06 % (IS 2185 Part 1). See the <a href="#/guide/concrete-blocks">blocks guide</a>.</li>
</ul>
<h2>Plaster</h2>
<ul>
<li>Wet volume = area × thickness (12, 15 or 20 mm). Dry volume ≈ wet volume × 1.27, plus about 20 % for filling joints, unevenness and wastage on brick backgrounds (site practice).</li>
<li>Typical thicknesses: 12 mm on smooth surfaces and ceilings; 15 mm on the inside of brick walls; 20 mm in two coats on rough external faces. Two-coat work should not normally exceed 20 mm (15 mm on concrete soffits), and three-coat about 25 mm (IS 1661).</li>
<li>Measure the area to IS 1200 Part 12 (see <a href="#/guide/measurement-rules">measurement rules</a>), but order materials for the area actually plastered, including jambs.</li>
</ul>
<p>Try the <a href="#/tool/plaster-qty">plaster quantity tool</a>.</p>`,
  src:"IS 1077 (brick sizes), IS 2185 Part 1 (concrete blocks), IS 2250 (mortars), IS 1661 (plastering); site estimating practice for dry-volume factors.", rel:["quantity-concrete","measurement-rules","mortar-plaster","brickwork"] },

/* =============================================================== */
{ id:"quantity-steel", cat:"Estimation & measurement", title:"Estimating reinforcement and structural steel",
  lede:"Steel is often the largest single material cost in an RC building. Estimate it from the bar bending schedule once drawings exist; before that, use realistic consumption figures and refine them as the design develops.",
  short:["Mass of a bar (kg/m) = d² / 162, with d in mm.","Authorised laps, chairs and separators are measured; binding wire is not (IS 1200 Part 8).","Early-stage consumption figures (kg of steel per m³ of concrete) vary widely with span, loading and seismic zone; replace them with BBS quantities as soon as you can."],
  body:`
<h2>From drawings: the bar bending schedule</h2>
<ol>
<li>List every bar mark with its diameter, shape and cutting length (see <a href="#/guide/bar-bending">bar bending schedules</a>).</li>
<li>Number of bars = (length or width of the member − covers) ÷ spacing + 1, for distributed bars; count main bars from the section.</li>
<li>Total length per diameter × mass per metre = mass per diameter.</li>
<li>Add authorised laps (bars over the 12 m stock length, and laps shown on drawings), chairs and spacer bars.</li>
<li>Add rolling-margin and cutting wastage as your department allows (often a few per cent); binding wire is included in the item, not measured.</li>
</ol>
${T(["Diameter (mm)","6","8","10","12","16","20","25","32"],[["kg per metre","0.222","0.395","0.617","0.888","1.58","2.47","3.85","6.31"],["Metres per tonne (approx.)","4500","2530","1620","1130","633","405","260","158"]])}
<p>Sum a schedule by diameter in the <a href="#/tool/steel-takeoff">steel take-off tool</a>.</p>
<h2>Before the drawings: consumption ratios</h2>
<p>For a budget estimate, steel is often taken as a mass per cubic metre of concrete for each type of member, from similar past projects. Ratios rise with span, loads, height and seismic zone, and ductile detailing in zones III to V adds noticeably to column and beam steel. Use figures from your own completed jobs where you can, and replace them with BBS quantities as soon as the structural drawings are ready.</p>
<h2>Structural steel</h2>
<ul>
<li>Measured by mass, from the section weights in steel tables, classified by member type (trusses, purlins, joists, built-up girders, stanchions).</li>
<li>Stiffeners in grillages are added to the mass of the joists; bolts, nuts and washers are measured separately unless included.</li>
<li>Add for connection plates, cleats and welding; allow for cutting wastage per your specification.</li>
</ul>`,
  src:"IS 1200 Part 8:1993 (clause 11), IS 1786:2008 (Table 1), IS 2502.", rel:["bar-bending","measurement-rules","rate-analysis"] },

/* =============================================================== */
{ id:"earthwork-estimation", cat:"Estimation & measurement", title:"Earthwork quantities: excavation, filling, lead and lift",
  lede:"Earthwork is measured simply but argued about often: which lift, how far the earth is carried, whether it bulks, and how much fill settles. These are the rules and the methods.",
  short:["Excavation is measured net from authorised dimensions, without bulking, in 1.5 m lifts.","Surplus earth occupies more volume after digging (bulking); allow for it when planning trucks and spoil space, not in the measured quantity.","Fill measured loose gets an agreed deduction for voids; fill measured from levels after compaction does not."],
  body:`
<h2>Foundation trenches</h2>
<ul>
<li>Volume = length × width × depth, using the authorised width (footing or PCC width plus any working space specified) and depth.</li>
<li>Use centre-line length with deductions at junctions, or long-wall / short-wall lengths (see <a href="#/guide/estimation-basics">estimating basics</a>).</li>
<li>Split the depth into <b>1.5 m lifts</b> (0–1.5 m, 1.5–3.0 m …) because deeper lifts cost more to throw out.</li>
<li>Classify by soil type (ordinary soil, hard or dense soil, soft or disintegrated rock, hard rock), since rates differ.</li>
</ul>
<h2>Lead and lift</h2>
<p><b>Lead</b> is the horizontal distance the excavated material is carried; <b>lift</b> is the vertical height it is raised. Schedules of rates include a basic lead and lift in the excavation rate (getting out at least 1 m or one-third of the depth clear of the edge, per IS 1200), and extra lead and lift are paid separately.</p>
<h2>Bulking and shrinkage</h2>
<ul>
<li>Excavated soil occupies more volume than in place (bulking), and compacted fill occupies less than loose fill. These factors vary by soil type and compaction.</li>
<li>The measured quantity of excavation is always the in-place volume. Use bulking only to plan truck trips and spoil areas.</li>
<li>Filling measured loose (in stacks or trucks) gets an agreed percentage deduction for voids; filling measured from levels after compaction needs no deduction.</li>
</ul>
<h2>Roads, channels and large areas</h2>
<ul>
<li><b>Mid-section and mean-area methods:</b> volume between two cross-sections = length × area at the mid-section, or length × average of end areas.</li>
<li><b>Prismoidal formula</b> (more accurate for varying sections): V = L/6 × (A₁ + 4A<sub>m</sub> + A₂).</li>
<li>For large sites, take levels on a grid before and after, and work volume from the grid (spot heights).</li>
</ul>
<h2>Safety in excavation</h2>
<p>Trenches over 1.5 m deep in soil (2 m in friable rock) must be shored or sloped. See <a href="#/guide/excavation-safety">excavation safety</a>.</p>
<p>Work out a trench in the <a href="#/tool/earthwork">earthwork tool</a>.</p>`,
  src:"IS 1200 Part 1:1992 (clauses 2 to 4); estimating practice.", rel:["measurement-rules","excavation-safety","estimation-basics"] },

/* =============================================================== */
{ id:"rate-analysis", cat:"Estimation & measurement", title:"Rate analysis: building up the cost of an item",
  lede:"A rate is not a guess. It is the cost of the materials, labour and equipment needed for one unit of work, plus overheads and profit. Analysing rates properly is how you price items not in the schedule and check whether a quoted rate is realistic.",
  short:["Rate = materials (with wastage) + labour + tools and plant + sundries, then water charges and contractor's profit and overheads.","Public works departments in India commonly add 1 % for water charges and 15 % for contractor's profit and overheads.","Labour requirement comes from output constants (IS 7272) or the department's own analysis of rates."],
  body:`
<h2>The structure of a rate</h2>
<ol>
<li><b>Materials:</b> quantity for the analysis unit (usually 1 m³, 10 m² or 1 tonne) × rate at site (including carriage), with a wastage allowance.</li>
<li><b>Labour:</b> mason, mazdoor (helper), bhisti (water carrier) and other trades, in labour-days for the unit, × daily wages.</li>
<li><b>Tools and plant:</b> mixer, vibrator, scaffolding, formwork hire, at hourly or daily rates; or a percentage for small tools.</li>
<li><b>Sundries:</b> small items not worth listing separately.</li>
<li><b>Water charges:</b> often 1 % of the above.</li>
<li><b>Contractor's profit and overheads:</b> often 15 % (CPWD practice), covering site establishment, supervision, insurance, finance and profit.</li>
<li>Rate per unit = total ÷ analysis quantity.</li>
</ol>
<h2>Example layout: 1 m³ of M20 nominal-mix concrete</h2>
${T(["Head","Quantity","Unit","Rate","Amount"],[["Cement","8.07 bags","bag","(your rate)","…"],["Sand","0.42","m³","(your rate)","…"],["Coarse aggregate 20 mm","0.84","m³","(your rate)","…"],["Mason","(from IS 7272 / analysis)","day","(wage)","…"],["Mazdoor","(…)","day","(wage)","…"],["Bhisti","(…)","day","(wage)","…"],["Mixer and vibrator hire","(…)","hour / day","(…)","…"],["Sundries / T&amp;P","lump sum","–","–","…"],["Add water charges 1 %","","","","…"],["Add contractor's profit and overheads 15 %","","","","…"],["Rate per m³","","","","<b>Total</b>"]],"Quantities for M20 from the dry-volume method; formwork and reinforcement are separate items. Build your own in the <a href='#/tool/rate-analysis'>rate analysis tool</a>.")}
<h2>Labour output constants</h2>
<p>IS 7272 (Part 1) gives the labour-days needed for common building items: mixing and placing concrete by hand or machine, RCC in beams, columns, slabs and stairs, brickwork, plastering, pointing, flooring and roofing, with separate figures for mason, mazdoor, bhisti, mixer operator and plant. Departments publish their own analysis of rates based on these and on local experience; use the one that applies to your work.</p>
<h2>Checking a quoted rate</h2>
<ul class="check">
<li>Material quantities and wastage realistic for the specification</li>
<li>Carriage to site included for remote locations</li>
<li>Labour constants appropriate for the height, access and quantity</li>
<li>Equipment hire and fuel included where machines are used</li>
<li>Overheads and profit in line with your department's practice</li>
<li>Taxes (GST and cess) applied as per current rules</li>
</ul>`,
  src:"IS 7272 (Part 1):1974 (labour output constants for building work); CPWD analysis of rates practice for water charges and contractor's profit and overheads.", rel:["estimation-basics","quantity-concrete","bills-measurement"] },

/* =============================================================== */
{ id:"bills-measurement", cat:"Estimation & measurement", title:"Measurement books, running bills and final bills",
  lede:"Once work starts, money follows measurement. A clean measurement record protects both the owner and the contractor, and makes the final bill and any later audit straightforward.",
  short:["Every payment is based on measurements recorded at site, item by item, against the BOQ.","Running account bills pay for work done to date; the final bill settles the whole contract after completion.","Extra and substituted items need their rates agreed (usually by rate analysis) before or soon after the work is done."],
  body:`
<h2>The documents</h2>
${T(["Document","Purpose"],[["Bill of quantities (BOQ)","The tendered list of items with quantities and rates; the basis of the contract price"],["Measurement book (MB)","The site record of measurements of work done, entered and signed by the measuring engineer and accepted by the contractor"],["Running account (RA) bill","Interim payment for work measured to date, less previous payments and recoveries (advances, materials, retention, taxes)"],["Final bill","Settlement of the whole contract after completion and final measurement"],["Deviation statement","Comparison of executed quantities with BOQ quantities, item by item, with reasons"],["Extra / substituted items","Work not in the BOQ, or changed specification, priced by rate analysis or the schedule of rates"]])}
<h2>Good measurement practice</h2>
<ul class="check">
<li>Measure as the work is done, especially work that will be hidden (foundations, reinforcement, underground pipes, filling)</li>
<li>Record dimensions in IS 1200 order (length, breadth, height) with location and drawing references</li>
<li>Follow IS 1200 deduction rules consistently through the job</li>
<li>Have the contractor's representative sign each set of measurements</li>
<li>Check a sample of measurements independently (test checks) before payment</li>
<li>Keep levels and cross-sections for earthwork taken before and after</li>
</ul>
<h2>Quantities that change</h2>
<ul>
<li>Executed quantities will differ from the BOQ. The contract sets limits beyond which rates may be revised; know them before work starts.</li>
<li>Extra items: agree the specification and rate before execution wherever possible, with a rate analysis on record.</li>
<li>Keep a deviation statement up to date so that a revised estimate can be raised in time if the sanctioned amount will be exceeded.</li>
</ul>`,
  src:"Public works practice; measurement to IS 1200. Contract conditions (for example CPWD, MES, state PWD or FIDIC-based contracts) govern the details.", rel:["measurement-rules","rate-analysis","estimation-basics","project-time"] }
);
