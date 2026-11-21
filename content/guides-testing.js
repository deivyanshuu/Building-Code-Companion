SITE.guides.push(
/* =============================================================== */
{ id:"testing-plan", cat:"Testing & quality", title:"A testing plan: what to test, how often, and against what",
  lede:"Quality is decided long before the cubes are crushed. A simple test plan lists every material, the test, the frequency and the acceptance limit, so everyone knows what 'pass' means before work starts.",
  short:["Accept manufacturers' test certificates for cement and steel, but verify on site and in the lab.","Test aggregates for each new source and periodically after that; test water once per source.","Sample concrete by quantity: 1 sample (3 cubes) up to 5 m³, 4 samples for 31–50 m³, then one per extra 50 m³."],
  body:`
<h2>The plan at a glance</h2>
${T(["Material","Key tests","Typical frequency","Acceptance"],[
["Cement","Fineness, consistency, setting times, soundness, compressive strength","Manufacturer's certificate for every lot; independent tests on receipt for important work or old stock","<a href='#/guide/cement-tests'>Cement guide</a>"],
["Fine aggregate (sand)","Sieve analysis (zone), silt and fines, deleterious materials, bulking","Each source; then regularly (weekly or per lot on large jobs); silt check on every truck","<a href='#/guide/aggregate-tests'>Aggregates guide</a>"],
["Coarse aggregate","Grading, crushing / impact / abrasion value, flakiness and elongation, water absorption","Each source; then periodically","<a href='#/guide/aggregate-tests'>Aggregates guide</a>"],
["Water","pH, solids, chlorides, sulphates; strength and setting comparison","Each source; when the source changes","<a href='#/guide/water-tests'>Water guide</a>"],
["Bricks","Dimensions (20-brick test), compressive strength, water absorption, efflorescence","Per lot (sampling as per IS 5454)","<a href='#/guide/brick-tests'>Bricks guide</a>"],
["Reinforcing steel","Mass per metre, tensile (yield, UTS, elongation), bend, rebend","2 samples per cast under 100 t; 3 per cast of 100 t or more; mass check on every lot","<a href='#/guide/steel-tests'>Steel guide</a>"],
["Concrete mix","Mix design and trial batches","Before work and whenever materials change","<a href='#/guide/mix-design'>Mix design guide</a>"],
["Fresh concrete","Slump (or compacting factor), temperature","Each sample, and every transit mixer for ready-mixed concrete","<a href='#/guide/fresh-concrete'>Fresh concrete guide</a>"],
["Hardened concrete","Cube compressive strength at 7 and 28 days","1–5 m³: 1 sample; 6–15: 2; 16–30: 3; 31–50: 4; then +1 per 50 m³; at least one per shift","<a href='#/guide/cube-tests'>Cube testing guide</a>"]
])}
<h2>Paperwork that makes results count</h2>
<ul class="check">
<li>Material receipt register: date, supplier, lot or cast number, quantity, certificate number</li>
<li>Sample register: what was sampled, from where, when, by whom, and the lab reference</li>
<li>Pour register: member, grade, quantity, slump, temperature, cube IDs, time of arrival and placing</li>
<li>Results register: 7- and 28-day results, compared with the acceptance criteria and signed off</li>
<li>Non-conformance log: what failed, what was decided (retest, cores, rejection) and by whom</li>
</ul>
<h2>Rounding results</h2>
<p>Results are rounded to the same number of places as the specified limit before comparing, following IS 2. When the digit dropped is exactly 5, round to the even digit: 2.345 becomes 2.34 and 2.355 becomes 2.36. Round once, from the original value.</p>
<h2>Retests</h2>
<p>Most material standards allow a retest when one sample fails. For reinforcing steel, two further samples are tested for each failed test; if both pass, the lot is accepted, and if either fails, the lot is rejected. For concrete, a failed cube result leads to investigation (cores, load tests, non-destructive tests), not automatic rejection of the structure.</p>`,
  src:"IS 456:2000 (cl 15, 16), IS 1786:2008 (cl 9.5, 11), IS 383, IS 1077 and IS 2:1960.", rel:["cement-tests","aggregate-tests","cube-tests","steel-tests"] },

/* =============================================================== */
{ id:"cement-tests", cat:"Testing & quality", title:"Cement: tests, limits and storage",
  lede:"Ordinary Portland cement comes in three grades, 33, 43 and 53, named after its minimum 28-day strength in MPa. The tests below confirm that a lot is fine enough, sound, sets in time, and gains strength as it should.",
  short:["Initial setting time at least 30 minutes; final setting time no more than 600 minutes.","Soundness: Le Chatelier expansion no more than 10 mm; autoclave no more than 0.8 %.","Fineness (Blaine) at least 225 m²/kg; 3/7/28-day strength 27/37/53 MPa for grade 53."],
  body:`
<h2>Physical requirements of OPC</h2>
${T(["Property","Grade 33","Grade 43","Grade 53","Test method"],[["Fineness (Blaine), min","225 m²/kg","225 m²/kg","225 m²/kg (370 for 53-S)","IS 4031 Part 2"],["Soundness, Le Chatelier, max","10 mm","10 mm","10 mm","IS 4031 Part 3"],["Soundness, autoclave, max","0.8 %","0.8 %","0.8 %","IS 4031 Part 3"],["Initial setting time, min","30 min","30 min","30 min (60 for 53-S)","IS 4031 Part 5"],["Final setting time, max","600 min","600 min","600 min","IS 4031 Part 5"],["Compressive strength at 3 days, min","16 MPa","23 MPa","27 MPa","IS 4031 Part 6"],["at 7 days, min","22 MPa","33 MPa","37 MPa","IS 4031 Part 6"],["at 28 days, min","33 MPa","43 MPa (max 58)","53 MPa","IS 4031 Part 6"]],"If cement fails soundness, it may be re-tested after aeration (spread 75 mm deep at 50–80 % humidity for 7 days); the limits then are 5 mm and 0.6 %. IS 269:2015 now covers all three OPC grades in one standard.")}
<h2>How the tests work</h2>
<h3>Standard consistency (Vicat apparatus)</h3>
<p>Cement paste is mixed with trial quantities of water and filled in the Vicat mould. The amount of water at which the 10 mm plunger penetrates to 5–7 mm from the bottom of the mould is the standard consistency (P), usually 26–33 %. Setting-time and strength tests use water based on P.</p>
<h3>Setting times</h3>
<p>Paste at 0.85P is tested with the Vicat needle. <b>Initial setting time</b> is the time from adding water until the 1 mm² needle stops penetrating to within about 5 mm of the bottom. <b>Final setting time</b> is when the needle with the annular attachment makes a mark but the attachment does not. Too fast and concrete cannot be placed; too slow and formwork and finishing are held up.</p>
<h3>Soundness</h3>
<p>Unsound cement contains free lime or magnesia that expands after hardening and cracks the concrete. The Le Chatelier test measures the opening of a split brass mould filled with paste after boiling; the autoclave test measures expansion of a bar under high-pressure steam.</p>
<h3>Compressive strength</h3>
<p>Mortar of 1 part cement to 3 parts standard sand, with water at (P/4 + 3) % of the combined mass, is compacted into 70.6 mm cubes (50 cm² face), cured in water and crushed at 3, 7 and 28 days.</p>
<h2>On site</h2>
<ul class="check">
<li>Check the bag markings: grade, manufacturer, BIS mark, week and year of packing</li>
<li>Collect the manufacturer's test certificate for every lot (results within 10 days of dispatch, 28-day results later)</li>
<li>Store on a raised, dry platform away from walls, covered; stack no more than about 10 bags high; first in, first out</li>
<li>Use within about three months of packing; test old or lumpy cement before using it in structural work</li>
<li>Reject bags with hard lumps that do not crumble between the fingers</li>
</ul>
<p>Check a set of results in the <a href="#/tool/cement-check">cement test tool</a>.</p>`,
  src:"IS 12269 (53 grade), IS 8112 (43 grade), IS 269 (OPC), IS 4031 Parts 1–6 (methods of test).", rel:["testing-plan","mix-design","aggregate-tests"] },

/* =============================================================== */
{ id:"aggregate-tests", cat:"Testing & quality", title:"Sand and aggregates: grading, cleanliness and strength",
  lede:"Aggregates make up three-quarters of concrete. Their grading decides workability and cement content, their cleanliness decides bond and durability, and their strength decides how hard the concrete can work.",
  short:["Sand is classified into grading zones I (coarse) to IV (fine) by sieve analysis. Zone IV is not used for reinforced concrete unless trials justify it.","Material finer than 75 µm: no more than 3 % in natural sand, 15 % in crushed sand, 1 % in coarse aggregate.","Crushing value and impact value no more than 45 % (30 % for wearing surfaces); Los Angeles abrasion no more than 50 % (30 %)."],
  body:`
<h2>Grading zones of fine aggregate</h2>
${T(["IS sieve","Zone I","Zone II","Zone III","Zone IV"],[["10 mm","100","100","100","100"],["4.75 mm","90–100","90–100","90–100","95–100"],["2.36 mm","60–95","75–100","85–100","95–100"],["1.18 mm","30–70","55–90","75–100","90–100"],["600 µm","15–34","35–59","60–79","80–100"],["300 µm","5–20","8–30","12–40","15–50"],["150 µm","0–10","0–10","0–10","0–15"]],"Percentage passing. The 600 µm sieve decides the zone. For crushed stone sand, up to 20 % may pass 150 µm. Classify a sample in the <a href='#/tool/sand-zone'>sand zone tool</a>.")}
<p>Zone I is coarse and gives harsh mixes that need more fines; zone IV is fine and needs more cement and water. Zones II and III are preferred for structural concrete.</p>
<h2>Grading of coarse aggregate (20 mm)</h2>
${T(["IS sieve","Graded 20 mm","Single-size 20 mm"],[["40 mm","100","100"],["20 mm","95–100","85–100"],["10 mm","25–55","0–20"],["4.75 mm","0–10","0–5"]],"Percentage passing. Single-size aggregates are blended to get a dense overall grading.")}
<h2>Cleanliness: deleterious materials</h2>
${T(["Material","Fine aggregate","Coarse aggregate"],[["Finer than 75 µm (silt, clay, dust)","3 % natural sand; 15 % crushed sand","1 %"],["Clay lumps","1 %","1 %"],["Coal and lignite","1 %","1 %"],["Soft fragments","–","3 %"],["Shale","1 %","–"],["Total of all deleterious materials (excluding mica)","5 %","5 %"]],"Maximum percentage by weight (IS 383:1970, Table 1). The engineer may relax some limits on evidence of satisfactory performance. Mica in fine aggregate reduces durability and strength and should be checked.")}
<h2>Strength of coarse aggregate</h2>
${T(["Test","Concrete for wearing surfaces (roads, runways, floors)","Other concrete"],[["Aggregate crushing value, max","30 %","45 %"],["Aggregate impact value, max","30 %","45 %"],["Los Angeles abrasion value, max","30 %","50 %"]],"Crushing and impact are alternatives. IS 383:2016 also limits combined flakiness and elongation index, typically to 40 %.")}
<h3>How the strength tests work</h3>
<ul>
<li><b>Crushing value:</b> aggregate between 12.5 and 10 mm is placed in a steel cylinder and loaded to 400 kN over 10 minutes. The fines passing 2.36 mm, as a percentage of the original mass, is the crushing value. Lower is stronger.</li>
<li><b>Impact value:</b> the same size fraction is filled in a cup and struck 15 times by a 13.5–14 kg hammer falling 380 mm. The fraction passing 2.36 mm is the impact value.</li>
<li><b>Los Angeles abrasion:</b> aggregate is tumbled with steel balls in a rotating drum; the loss through a 1.7 mm sieve measures resistance to wear.</li>
</ul>
<h2>Other properties</h2>
<ul>
<li><b>Flakiness and elongation:</b> flat and long pieces make concrete harsh and weak; measure with the thickness and length gauges.</li>
<li><b>Specific gravity and water absorption:</b> needed for mix design; absorption corrects the mixing water.</li>
<li><b>Bulking of sand:</b> damp sand occupies more volume than dry sand (often 20–30 % more at 4–6 % moisture). When batching by volume, increase the sand volume to allow for it. Better still, batch by weight.</li>
<li><b>Soundness:</b> for concrete exposed to frost, a sodium or magnesium sulphate test, with limits agreed between purchaser and supplier.</li>
<li><b>Alkali reactivity:</b> some aggregates react with cement alkalis and expand; check new sources.</li>
</ul>
<h2>Site checks</h2>
<ul class="check">
<li>Field silt test on every sand truck: shake sand with salt water in a measuring cylinder and read the silt layer. A large layer (a common site limit is about 8 % by volume) means a lab test is needed</li>
<li>No lumps of clay, organic matter or debris; stockpiles on hard ground, separated by size</li>
<li>Moisture checked and mixing water corrected before batching</li>
</ul>`,
  src:"IS 383:1970 (Tables 1, 2 and 4; clauses 3.3 to 3.6), IS 2386 Parts I to V (methods of test). Check the 2016 revision of IS 383 for current limits.", rel:["testing-plan","mix-design","fresh-concrete"] },

/* =============================================================== */
{ id:"water-tests", cat:"Testing & quality", title:"Water for mixing and curing concrete",
  lede:"Water fit to drink is generally fit for concrete. When the source is doubtful (bore wells, industrial areas, coastal sites), test it, because salts and organic matter attack steel and delay setting.",
  short:["pH at least 6.","Chlorides no more than 2000 mg/l for plain concrete and 500 mg/l for reinforced concrete.","Sulphates (as SO₃) no more than 400 mg/l; organic solids 200 mg/l; inorganic solids 3000 mg/l; suspended matter 2000 mg/l."],
  body:`
<h2>Permissible limits</h2>
${T(["Impurity","Maximum"],[["Organic solids","200 mg/l"],["Inorganic solids","3000 mg/l"],["Sulphates (as SO₃)","400 mg/l"],["Chlorides (as Cl): plain concrete","2000 mg/l"],["Chlorides (as Cl): reinforced concrete","500 mg/l"],["Suspended matter","2000 mg/l"],["pH","Not less than 6"]])}
<h2>Acidity and alkalinity</h2>
<ul>
<li>To neutralise 100 ml of the water, using phenolphthalein as indicator, it should not need more than 5 ml of 0.02 N NaOH.</li>
<li>To neutralise 100 ml, using mixed indicator, it should not need more than 25 ml of 0.02 N H₂SO₄.</li>
</ul>
<h2>Performance test</h2>
<p>Where there is doubt, compare concrete or mortar made with the water against the same mix made with distilled water:</p>
<ul>
<li>Average 28-day compressive strength of at least three 150 mm cubes should be at least <b>90 %</b> of the distilled-water cubes.</li>
<li>Initial setting time should be at least 30 minutes and should not differ by more than ±30 minutes from the distilled-water sample.</li>
</ul>
<h2>Sea water and curing water</h2>
<ul>
<li>Sea water must not be used for mixing or curing reinforced or prestressed concrete; it can corrode the steel.</li>
<li>Curing water should be free of substances that stain or attack concrete; water fit for mixing is suitable.</li>
</ul>`,
  src:"IS 456:2000, clause 5.4 and Table 1.", rel:["testing-plan","concrete-on-site","mix-design"] },

/* =============================================================== */
{ id:"brick-tests", cat:"Testing & quality", title:"Burnt clay bricks: classes, tests and acceptance",
  lede:"Bricks are graded by compressive strength into classes from 3.5 to 35 N/mm². Absorption and efflorescence tell you how durable they will be, and the 20-brick test checks size.",
  short:["Water absorption after 24 hours' immersion: no more than 20 % up to class 12.5, 15 % for higher classes.","Efflorescence: no more than 'moderate' up to class 12.5; 'slight' for higher classes.","Modular brick 190 × 90 × 90 mm (or 40 mm high); common non-modular 230 × 110 × 70 mm."],
  body:`
<h2>Classes</h2>
${T(["Class designation","Average compressive strength, not less than (N/mm²)"],[["35","35.0"],["30","30.0"],["25","25.0"],["20","20.0"],["17.5","17.5"],["15","15.0"],["12.5","12.5"],["10","10.0"],["7.5","7.5"],["5","5.0"],["3.5","3.5"]],"No individual brick may fall below the minimum average for its class by more than 20 %. If a lot fails a class, it is checked for the next lower class. Bricks of 40 N/mm² and above are covered by IS 2180 (heavy duty).")}
<h2>Size and tolerance</h2>
${T(["Brick","Size (mm)","20 bricks laid together"],[["Modular","190 × 90 × 90 (or 190 × 90 × 40)","Length 3800 ± 80, width 1800 ± 40, height 1800 ± 40 (800 ± 40 for 40 mm bricks)"],["Non-modular","230 × 110 × 70 (or 230 × 110 × 30)","Length 4600 ± 80, width 2200 ± 40, height 1400 ± 40 (600 ± 40 for 30 mm bricks)"]],"Hand-moulded bricks of 90 or 70 mm height have a frog 10–20 mm deep on one face. Bricks should have smooth rectangular faces, sharp corners and uniform colour.")}
<h2>Durability</h2>
${T(["Property","Up to class 12.5","Higher classes"],[["Water absorption after 24 h immersion in cold water, max","20 % by weight","15 % by weight"],["Efflorescence rating, max","Moderate","Slight"]])}
${T(["Efflorescence rating","What you see"],[["Nil","No perceptible deposit"],["Slight","Deposit on no more than 10 % of the exposed area"],["Moderate","Heavier deposit covering up to 50 % of the area, without powdering or flaking"],["Heavy","Deposit on more than 50 % of the area, without powdering or flaking"],["Serious","Heavy deposit with powdering or flaking of the surface"]])}
<h2>How the tests work</h2>
<ul>
<li><b>Compressive strength:</b> remove unevenness, immerse in water for 24 hours, fill the frog with 1:1 cement mortar, store under damp sacking for 24 hours, then in water for 3 days. Test flat, between plywood sheets, at a uniform loading rate, and divide the maximum load by the bed area.</li>
<li><b>Water absorption:</b> dry at 105–115 °C to constant mass, cool, immerse in water at room temperature for 24 hours, wipe and weigh. Absorption = (wet − dry) / dry × 100.</li>
<li><b>Efflorescence:</b> stand the brick on end in a shallow dish of distilled water until it dries out, repeat once, and rate the salt deposit.</li>
<li><b>Dimensions:</b> lay 20 bricks in a row on a flat surface and measure the total length, then width, then height.</li>
</ul>
<p>Check results in the <a href="#/tool/brick-check">brick acceptance tool</a>.</p>
<h2>Quick site checks</h2>
<ul class="check">
<li>A good brick gives a clear ringing sound when two are struck together</li>
<li>No cracks, lime nodules or under-burnt (yellowish, soft) bricks</li>
<li>A thumbnail should not leave a mark on the face</li>
<li>Soak bricks before laying so they do not draw water out of the mortar</li>
</ul>`,
  src:"IS 1077:1992 (common burnt clay bricks), IS 3495 Parts 1–4:1992 (methods of test), IS 5454 (sampling).", rel:["brickwork","masonry-earthquake","testing-plan"] },

/* =============================================================== */
{ id:"steel-tests", cat:"Testing & quality", title:"Reinforcing steel: grades, properties and tests",
  lede:"High-strength deformed bars are graded by their 0.2 % proof stress (Fe 415, 500, 550, 600). The 'D' grades are more ductile, which is why they are preferred in earthquake zones.",
  short:["Fe 500: yield at least 500 N/mm², tensile strength at least 8 % more than actual yield and at least 545 N/mm², elongation at least 12 %.","Fe 500D: elongation at least 16 % and tensile strength at least 10 % above yield (at least 565 N/mm²).","Mass per metre tolerance on a batch: ±7 % up to 10 mm, ±5 % for 12–16 mm, ±3 % above 16 mm."],
  body:`
<h2>Mechanical properties</h2>
${T(["Grade","Yield / 0.2 % proof stress, min (N/mm²)","Tensile strength, min","Elongation, min"],[["Fe 415","415","10 % more than actual yield, at least 485 N/mm²","14.5 %"],["Fe 415D","415","12 % more than actual yield, at least 500 N/mm²","18.0 %"],["Fe 500","500","8 % more than actual yield, at least 545 N/mm²","12.0 %"],["Fe 500D","500","10 % more than actual yield, at least 565 N/mm²","16.0 %"],["Fe 550","550","6 % more than actual yield, at least 585 N/mm²","10.0 %"],["Fe 550D","550","8 % more than actual yield, at least 600 N/mm²","14.5 %"],["Fe 600","600","6 % more than actual yield, at least 660 N/mm²","10.0 %"]],"Elongation on a gauge length of 5.65√A. The D grades also have lower sulphur and phosphorus limits and specify a minimum total elongation at maximum force.")}
<h2>Mass per metre and tolerance</h2>
${T(["Nominal size","Batch tolerance","Individual sample"],[["Up to and including 10 mm","±7 %","−8 %"],["Over 10 mm up to 16 mm","±5 %","−6 %"],["Over 16 mm","±3 %","−4 %"]],"Mass per metre ≈ d²/162 kg (d in mm). To check, weigh a bar at least 0.5 m long and measure it; effective area (mm²) = mass (kg) / (0.00785 × length in m). Use the <a href='#/tool/bar-mass'>bar mass tool</a>.")}
<h2>Bend and rebend tests</h2>
${T(["Bar size","Fe 415","Fe 415D","Fe 500","Fe 500D","Fe 550","Fe 550D","Fe 600"],[["Up to 20 mm","3φ","2φ","4φ","3φ","5φ","4φ","5φ"],["Over 20 mm","4φ","3φ","5φ","4φ","6φ","5φ","6φ"]],"Mandrel diameter for the bend test (180°). There must be no rupture or visible cracks on the bent portion.")}
<p><b>Rebend test:</b> the bar is bent to 135° round a mandrel, aged in boiling water for 30 minutes, cooled, then bent back to 157.5°. It passes if there is no rupture or crack. This checks that the bar can be bent and straightened during construction without becoming brittle.</p>
<h2>Sampling and retests</h2>
<ul>
<li>At least <b>2 samples per cast</b> for casts under 100 tonnes, and <b>3 per cast</b> for 100 tonnes or more, for mass, tensile, bend and rebend tests.</li>
<li>Test pieces are full sections, selected by the purchaser, cut in their presence.</li>
<li>If one test piece fails, two more are tested for each failure. If both pass, the lot is accepted; if either fails, it is rejected.</li>
</ul>
<h2>On site</h2>
<ul class="check">
<li>Each bar carries rolled-in marks for the manufacturer and grade; tags show cast number</li>
<li>Test certificate for every cast; independent tests for important work</li>
<li>Store off the ground, covered, separated by size and grade</li>
<li>Light surface rust is acceptable; loose scale, pitting, oil and mud are not</li>
<li>Do not heat bars to bend them; do not weld unless the grade and procedure allow it</li>
</ul>`,
  src:"IS 1786:2008 (Tables 1 to 4, clauses 7 to 11).", rel:["rebar","bar-bending","testing-plan"] },

/* =============================================================== */
{ id:"fresh-concrete", cat:"Testing & quality", title:"Fresh concrete: slump, workability and temperature",
  lede:"Workability is how easily concrete can be placed and compacted without segregating. It is measured at the point of placing, every time cubes are taken, and it must come from the mix design, never from extra water.",
  short:["Slump cone: 300 mm high, 200 mm base, 100 mm top, filled in four layers each tamped 25 times with a 16 mm rod.","Typical slump: 25–75 mm for lightly reinforced work, 50–100 mm for heavily reinforced sections, 100–150 mm for trench fill and piles.","Hot-weather precautions apply when air or concrete temperature exceeds 40 °C; concrete placed in cold weather should be at least 5 °C."],
  body:`
<h2>Slump test</h2>
<ol>
<li>Clean and dampen the mould (frustum of a cone: 200 mm bottom, 100 mm top, 300 mm high) and stand it on a smooth, rigid, non-absorbent surface.</li>
<li>Fill in <b>four layers</b>, each about a quarter of the height, tamping each layer <b>25 times</b> with a 16 mm steel rod, 600 mm long, with a rounded end.</li>
<li>Strike off the top, then lift the mould vertically and slowly.</li>
<li>Measure the drop of the concrete below the height of the mould: that is the slump, in mm.</li>
</ol>
${T(["Slump shape","Meaning"],[["True slump","Concrete subsides evenly; record the result"],["Shear slump","One side slides away; repeat the test. Repeated shear means a harsh or lean mix"],["Collapse","Concrete collapses completely; mix is too wet (unless it is a flowing mix, tested by flow)"]])}
<h2>Workability for different work</h2>
${T(["Placing condition","Degree of workability","Slump"],[["Blinding, shallow sections, pavements laid by pavers","Very low","Use compacting factor 0.75–0.80"],["Mass concrete, lightly reinforced slabs, beams, walls, columns, floors, hand-placed pavements, canal lining, strip footings","Low","25–75 mm"],["Heavily reinforced slabs, beams, walls, columns; slipform","Medium","50–100 mm"],["Pumped concrete","Medium","75–100 mm"],["Trench fill, in-situ piles","High","100–150 mm"],["Tremie concrete","Very high","Use flow test"]],"For very low workability the compacting factor test is more sensitive than slump.")}
<h2>Compacting factor test</h2>
<p>Concrete falls through two hoppers into a cylinder. The mass of this partly compacted concrete divided by the mass of fully compacted concrete in the same cylinder is the compacting factor, typically 0.75 to 0.95. It suits drier mixes better than the slump test.</p>
<h2>Temperature</h2>
<ul>
<li><b>Hot weather:</b> concreting is treated as hot-weather work when the air temperature exceeds 40 °C or the concrete temperature at placing is expected to exceed 40 °C. Use cool aggregates and water (or ice), schedule pours for cooler hours, shade and dampen formwork, place quickly, and start curing early.</li>
<li><b>Cold weather:</b> concrete placed at or near freezing should be at least 5 °C when placed and protected from freezing until it has gained strength.</li>
<li>Record the concrete temperature with each slump test.</li>
</ul>
<h2>Ready-mixed concrete checks</h2>
<ul class="check">
<li>Delivery ticket: grade, mix ID, quantity, batching time, slump specified</li>
<li>Time from batching to placing within the agreed limit</li>
<li>Slump at the point of discharge; no water added at site except as allowed by the mix design</li>
<li>Cubes taken from the truck at site, not at the plant</li>
</ul>`,
  src:"IS 1199:1959 (methods of sampling and analysis of concrete), IS 456:2000 (cl 7, 14), IS 7861 Part 1:1975 (hot weather concreting).", rel:["cube-tests","concrete-on-site","mix-design","curing-weather"] },

/* =============================================================== */
{ id:"cube-tests", cat:"Testing & quality", title:"Cube tests: casting, curing, crushing and acceptance",
  lede:"Cube results are the record that your concrete met its grade. The code fixes how cubes are made and tested, how many to take, and how to judge them, so nobody has to argue about it later.",
  short:["150 mm cubes, compacted in layers, kept damp at 27 ± 2 °C for 24 hours, then cured in water until tested.","Loaded at about 140 kg/cm² (14 N/mm²) per minute; each sample result is the average of three cubes.","M20 and above: the mean of four consecutive results ≥ fck + 0.825 s (or fck + 4, whichever is greater), and no single result below fck − 4."],
  body:`
<h2>Making cubes</h2>
<ol>
<li>Take the sample at the point of placing, spread over the pour, and remix it.</li>
<li>Use 150 mm cube moulds (100 mm moulds are allowed when the nominal maximum aggregate size does not exceed 20 mm), oiled and assembled tight.</li>
<li>Fill in layers about 50 mm deep. Compact each layer with at least 35 strokes of the standard tamping bar for a 150 mm cube (25 for a 100 mm cube), or with a vibrator until full compaction.</li>
<li>Finish level with a trowel and mark each cube with the pour reference and date.</li>
</ol>
<h2>Curing and testing</h2>
<ul>
<li>Keep the cubes in the moulds under damp matting, at <b>27 ± 2 °C</b>, for 24 hours (± ½ hour).</li>
<li>Demould and cure in clean water at 27 ± 2 °C until testing. Do not let them dry out before the test.</li>
<li>Test at 7 days (early indication) and 28 days (acceptance), with extra cubes if needed for striking formwork.</li>
<li>Place the cube with the cast faces against the platens (not the trowelled face), and load without shock at about <b>140 kg/cm² per minute</b> (14 N/mm² per minute) until failure.</li>
<li>Strength = maximum load / area. Record the failure pattern: a good failure leaves two cones (hourglass).</li>
</ul>
<h2>How many samples</h2>
${T(["Concrete in the work","Samples (3 cubes each)"],[["1–5 m³","1"],["6–15 m³","2"],["16–30 m³","3"],["31–50 m³","4"],["51 m³ and above","4 + 1 for each additional 50 m³ or part"]],"At least one sample per shift. For ready-mixed concrete from a continuous plant, frequency may be agreed. Use the <a href='#/tool/cube-samples'>sample count tool</a>.")}
<h2>When concrete passes</h2>
${T(["Grade","Mean of 4 non-overlapping consecutive results","Each individual result"],[["M15","≥ fck + 0.825 s, or fck + 3 N/mm², whichever is greater","≥ fck − 3 N/mm²"],["M20 and above","≥ fck + 0.825 s, or fck + 4 N/mm², whichever is greater","≥ fck − 4 N/mm²"]],"s = established standard deviation, rounded to 0.5 N/mm². Until 30 results are available, use the assumed values: 3.5 (M10–M15), 4.0 (M20–M25), 5.0 (M30 and above). A sample result is invalid if any cube differs from the sample average by more than ±15 %. Check four results in the <a href='#/tool/cube-accept'>acceptance tool</a>.")}
<h2>When results fail</h2>
<p>Concrete represented by failing results (the quantity covered by those samples) is investigated, not automatically condemned. The engineer may call for core tests, load tests, or non-destructive tests such as rebound hammer and ultrasonic pulse velocity, then decide to accept, strengthen or replace. Record every step.</p>`,
  src:"IS 516:1959 (methods of tests for strength of concrete), IS 456:2000 (cl 15 and 16, Tables 8 and 11, as amended).", rel:["fresh-concrete","mix-design","testing-plan","formwork"] },

/* =============================================================== */
{ id:"mix-design", cat:"Testing & quality", title:"Concrete mix design: the method in plain steps",
  lede:"A mix design finds the proportions of cement, water, sand and coarse aggregate that give the required strength, workability and durability at the lowest reasonable cost. IS 10262 sets out the method; trial batches confirm it.",
  short:["Target mean strength = fck + 1.65 s, so that no more than 5 % of results fall below fck.","Assumed s: 3.5 (M10–M15), 4.0 (M20–M25), 5.0 (M30–M50) N/mm².","Water for 50 mm slump with 20 mm angular aggregate: about 186 kg/m³, increased about 3 % for every extra 25 mm of slump."],
  body:`
<h2>The data you need</h2>
<ul>
<li>Grade (fck), exposure condition, type of cement, maximum aggregate size, workability (slump), method of placing</li>
<li>Minimum cement content and maximum water–cement ratio for the exposure (IS 456 Table 5)</li>
<li>Specific gravity and absorption of the aggregates, sand grading zone, admixture details</li>
</ul>
<h2>Step 1: target mean strength</h2>
<div class="formula">f′<sub>ck</sub> = f<sub>ck</sub> + 1.65 s</div>
${T(["Grade","Assumed standard deviation s (N/mm²)"],[["M10, M15","3.5"],["M20, M25","4.0"],["M30 to M50","5.0"]],"These assume good site control: proper cement storage, weigh batching, controlled water, regular checks on materials and workability. With poorer control, increase s. Once 30 or more results are available, use the actual s. The 2019 revision of IS 10262 uses the greater of fck + 1.65 s and fck + a fixed margin by grade.")}
<h2>Step 2: water–cement ratio</h2>
<p>Choose the w/c ratio for the target strength from experience or curves for the cement, then take the lower of that and the maximum allowed for the exposure (for example 0.50 for moderate, 0.45 for severe exposure in RCC).</p>
<h2>Step 3: water content</h2>
${T(["Nominal maximum aggregate size","Water content (kg/m³) for 25–50 mm slump"],[["10 mm","208"],["20 mm","186"],["40 mm","165"]],"For angular coarse aggregate in saturated surface-dry condition. Increase about 3 % for each additional 25 mm of slump. Reduce by about 10 kg for sub-angular aggregate, 20 kg for gravel with some crushed particles and 25 kg for rounded gravel. Water-reducing admixtures reduce it further.")}
<h2>Step 4: cement content</h2>
<p>Cement = water ÷ w/c. Check it against the minimum for the exposure (300–360 kg/m³ for RCC); use the greater. IS 456 also caps OPC content at 450 kg/m³ excluding fly ash and slag.</p>
<h2>Step 5: coarse aggregate proportion</h2>
${T(["Max size","Zone IV","Zone III","Zone II","Zone I"],[["10 mm","0.50","0.48","0.46","0.44"],["20 mm","0.66","0.64","0.62","0.60"],["40 mm","0.75","0.73","0.71","0.69"]],"Volume of coarse aggregate per unit volume of total aggregate, for w/c = 0.50. For every 0.05 decrease in w/c, increase these by 0.01 (and decrease for higher w/c). For pumpable concrete, reduce by up to 10 %.")}
<h2>Step 6: quantities per cubic metre</h2>
<p>Volume of aggregates = 1 − (volume of cement + water + admixture + entrapped air). Split it between coarse and fine in the proportion from Step 5, and convert to mass using specific gravities. Correct the water for aggregate moisture and absorption.</p>
<h2>Step 7: trials</h2>
<p>Make trial batches at the design w/c and at ±10 % w/c. Check slump and cast cubes; adjust until the mix meets workability and target strength. Approve the mix, then keep it fixed unless the materials change.</p>
<p>Work out the target strength and water in the <a href="#/tool/mix-target">mix design tool</a>.</p>`,
  src:"IS 10262:2009 (Concrete mix proportioning – guidelines), clauses 3 and 4, Tables 1 to 3; IS 456:2000 Tables 5 and 8.", rel:["cube-tests","aggregate-tests","cement-tests","concrete-on-site"] }
);
