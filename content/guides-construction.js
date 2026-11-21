SITE.guides.push(
/* =============================================================== */
{ id:"excavation-safety", cat:"Site practice", title:"Excavation and trenching safely",
  lede:"Trench collapses kill quickly and without warning. A cubic metre of soil weighs well over a tonne. The rules are simple: support or slope the sides, keep loads back from the edge, give people a safe way in and out, and inspect after rain.",
  short:["Trenches more than 1.5 m deep in soil, or 2 m in friable or unstable rock, must be shored and timbered, unless the sides are sloped to within 1.5 m of the bottom.","Ladders must extend at least 1 m above the top of the cut.","Even shallower trenches need shoring if there is any doubt about stability."],
  body:`
<h2>When support is required</h2>
<ul>
<li>All trenches in soil more than <b>1.5 m</b> deep must be securely shored and timbered.</li>
<li>Trenches in friable or unstable rock more than <b>2 m</b> deep must be shored.</li>
<li>Not needed where the sides are sloped back to a safe angle to within 1.5 m of the bottom (the slope inspected and certified). If the slope stops higher than that, the vertical part must be shored.</li>
<li>Whenever there is doubt about safety, even in shallower trenches, stop work until shoring is in place.</li>
</ul>
<h2>The parts of timbering</h2>
<p><b>Sheathing</b> (vertical boards against the soil), <b>wales</b> (horizontal members along the sheathing), <b>struts</b> (cross members holding the two sides apart), and <b>cleats</b> (short pieces that stop struts or wales slipping down). Steel trench sheets, hydraulic shores and trench boxes do the same job faster.</p>
<h2>Working safely</h2>
<ul class="check">
<li>Keep excavated soil, materials and plant back from the edge (spoil heaps add load and can slide in)</li>
<li>Provide ladders along the trench at close intervals, extending at least 1 m above the top</li>
<li>Barricade or fence open trenches, with lights at night; provide proper crossings</li>
<li>Locate and protect underground services before digging</li>
<li>Control water: dewater, and watch for soft or running ground</li>
<li>Inspect the trench and supports daily, and after rain, blasting or heavy vibration</li>
<li>Never let anyone work alone in a deep trench</li>
<li>Check neighbouring foundations; underpin or shore where the trench runs close to them (a basement needs an indemnity bond)</li>
</ul>`,
  src:"IS 3764:1992 (Excavation work – code of safety), clauses 5 and 10; Model Building Bye-Laws 2016 Appendix B-1.", rel:["site-safety","earthwork-estimation","scaffolds-ladders"] },

/* =============================================================== */
{ id:"scaffolds-ladders", cat:"Site practice", title:"Scaffolds, trestles and ladders",
  lede:"Falls from height are the biggest single cause of construction deaths. A scaffold that is correctly built (sound base, braced, fully planked, with guard rails and toe boards) prevents most of them.",
  short:["Every working platform needs a top guard rail, an intermediate rail and a toe board.","Planks overlap at least 300 mm over the supports and are fixed down; ledgers and transoms start within 150 mm of the base.","Trestle ladders are limited to 6 m; a trestle should have a base about 600 mm wide and 1200 mm long."],
  body:`
<h2>Types of scaffold</h2>
<ul>
<li><b>Single (putlog) scaffold:</b> one row of standards, with putlogs resting in the wall. For brickwork.</li>
<li><b>Double (independent) scaffold:</b> two rows of standards, free-standing, tied to the building. For concrete and stone walls where holes are not allowed.</li>
<li><b>Outrigger (cantilever) scaffold:</b> on thrust-outs from the building, where the ground cannot be used.</li>
<li><b>Trestle (ghoda) scaffold:</b> a platform on self-supporting trestles, for low work inside rooms.</li>
<li>Materials: bamboo, ballies (poles), timber or steel tubes with couplers (steel tubular scaffolding is the safest and most common on larger work).</li>
</ul>
<h2>Typical member sizes for timber scaffolds</h2>
${T(["Member","Typical size"],[["Base plate","12 mm thick"],["Planks / boards","35 × 200 mm"],["Overlap of planks over a single putlog","300 mm"],["Toe boards","35 × 150 mm"],["Top railing","50 × 75 mm"],["Intermediate railing","35 × 75 mm"]],"Representative values from IS 3696 Part 1; sizes vary with the type of scaffold and loading. Ledgers and transoms should start within 150 mm of the base of the standards.")}
<h2>Building and using a scaffold</h2>
<ul class="check">
<li>Firm, level base: base plates or sole boards, never loose bricks</li>
<li>Standards plumb, braced diagonally, tied into the building at regular intervals</li>
<li>Working platforms fully planked, planks fixed and overlapping, no gaps</li>
<li>Guard rail, intermediate rail and toe board on all open sides</li>
<li>Safe access by ladder or stair, not by climbing the frame</li>
<li>Not overloaded with materials; loads spread over the bearers</li>
<li>Inspected by a competent person before first use, weekly, and after storms</li>
<li>Kept clear of overhead power lines</li>
</ul>
<h2>Trestles</h2>
<p>A well-designed trestle has a base about <b>600 mm</b> wide between the feet and is about <b>1200 mm</b> long. Do not nail extension pieces to the legs to gain height. Platform planks are laid close and the outer planks nailed to the bearers.</p>
<h2>Ladders</h2>
<ul>
<li>Use metal (steel or aluminium alloy), timber or bamboo ladders of sound construction, inspected before use.</li>
<li>Trestle ladders, and the base section of extension trestle ladders, should not exceed <b>6 m</b>.</li>
<li>Stand a leaning ladder at about 1 out for every 4 up (about 75°), on a firm base, tied or footed at the bottom, extending about 1 m above the landing.</li>
<li>Keep three points of contact while climbing; carry tools in a belt or haul them up.</li>
</ul>`,
  src:"IS 3696 Part 1:1987 (Scaffolds), Part 2:1991 (Ladders); IS 4014 (steel tubular scaffolding).", rel:["site-safety","excavation-safety","demolition"] },

/* =============================================================== */
{ id:"material-storage", cat:"Site practice", title:"Storing materials on site",
  lede:"Badly stored materials are money lost: lumped cement, rusted steel, broken bricks, contaminated sand. IS 4082 sets out how to stack and store each material.",
  short:["Cement: in a dry, closed shed, on planks 150–200 mm above the floor, at least 600 mm from the walls, no more than 10 bags high.","Cement stacks no wider than four bag lengths or 3 m; above 8 bags high, alternate the direction of bags. Use oldest first.","Stack bricks in regular tiers as they are unloaded; never tip them."],
  body:`
<h2>Cement</h2>
<ul>
<li>Store in a dry, leak-proof shed with few windows and close-fitting doors, kept closed.</li>
<li>Stack on wooden planks <b>150–200 mm</b> clear of the floor (floor of lean concrete or two layers of dry bricks on consolidated earth).</li>
<li>Leave at least <b>600 mm</b> all round between stacks and the outer walls.</li>
<li>Stacks no more than <b>10 bags high</b>, and no wider than <b>four bag lengths or 3 m</b>. Above 8 bags, lay bags alternately lengthwise and crosswise to tie the stack.</li>
<li>Keep bags close together to reduce air circulation. "Warehouse pack" (hardening of the bottom bags under pressure) loosens by rolling the bag; discard truly lumped bags.</li>
<li>Label each stack with the date of receipt and use cement in the order received.</li>
<li>In the monsoon, or for long storage, wrap the stack in polythene sheet closed over the top.</li>
</ul>
<h2>Other materials</h2>
${T(["Material","Good practice"],[["Bricks","Stack in regular tiers as unloaded, close to where they will be used; never dump. Bricks containing lime kankar should be soaked (docked) to prevent lime bursting"],["Sand and aggregates","On a hard, clean, drained base; separate stockpiles by size; protect from mixing with soil and from contamination"],["Reinforcing steel","Off the ground on timber or blocks, covered, sorted by grade and diameter with tags; away from moisture"],["Structural steel","On level supports, clear of the ground, in a way that avoids bending and water collecting"],["Timber","Stacked flat on level supports with spacers for air circulation, protected from sun and rain"],["Doors, windows, glass","Upright or flat as recommended, in a covered store, protected from impact"],["Paints, chemicals, fuels","In a separate, ventilated store, away from heat and sparks, with fire extinguishers nearby"]],"IS 4082 gives detailed recommendations, and a checklist, for some 28 materials.")}
<h2>Site layout</h2>
<ul class="check">
<li>Stores close to the point of use, but clear of access roads and crane swing zones</li>
<li>Hard, drained surfaces for stockpiles</li>
<li>Material receipt and issue registers kept up to date</li>
<li>Nothing stacked on public roads or footpaths, or on young slabs</li>
</ul>`,
  src:"IS 4082:1996 (Recommendations on stacking and storage of construction materials and components at site).", rel:["cement-tests","site-safety","steel-tests"] },

/* =============================================================== */
{ id:"anti-termite", cat:"Site practice", title:"Anti-termite treatment before construction",
  lede:"Subterranean termites enter buildings from the soil through cracks, joints and around pipes. A continuous chemical barrier in the soil under and around the building, laid as construction proceeds, keeps them out for many years.",
  short:["Treat the bottom and sides (up to about 300 mm) of foundation excavations at 5 litres of emulsion per m².","Treat backfill against foundations at 7.5 L/m² of vertical surface on each side, and the top of the filled earth inside the plinth at 5 L/m².","After completion, treat the soil along the external perimeter at 7.5 L/m², rodding at 150 mm spacing to 300 mm depth."],
  body:`
<h2>Chemicals</h2>
<p>IS 6313 (Part 2):2001 lists chemicals applied as water emulsions at 1.0 % concentration of active ingredient (for example chlorpyrifos 20 EC). Use only chemicals currently registered and approved for termite control; some older ones have since been banned. These are poisonous: follow the safety precautions and keep them away from wells and water supplies.</p>
<h2>Stages and dosages</h2>
${T(["Stage","When","Dosage"],[["Bottom and sides (up to about 300 mm) of excavations for foundations and basements","Before laying PCC","5 L/m² of surface"],["Backfill in contact with foundation walls and basement retaining walls","As the backfill is placed (after ramming if water is used)","7.5 L/m² of vertical surface, each side"],["Top surface of consolidated earth within the plinth","Before laying the sand bed or sub-grade of the floor","5 L/m²; if the surface is hard, make holes 50–75 mm deep at 150 mm both ways first"],["Junction of walls and floor","Along the inside of walls and around columns","7.5 L/m² of vertical surface, by rodding along the wall"],["Expansion joints in the floor","After the sub-grade is laid","2 L per running metre"],["External perimeter of the building","After completion and final grading","Rod at 150 mm intervals to 300 mm depth; 7.5 L/m² of vertical surface. Deeper filling: treat to its full depth"]],"Do not disturb treated soil afterwards; if it is disturbed, retreat it.")}
<h2>Good practice</h2>
<ul class="check">
<li>Treat in dry weather; do not treat when the soil is waterlogged or just before heavy rain</li>
<li>Apply evenly with a sprayer at the stated rate; measure the emulsion used per area</li>
<li>Treat around pipes and conduits entering the building, and service trenches</li>
<li>Record dates, areas, chemical and quantity used for the warranty and the owner</li>
</ul>`,
  src:"IS 6313 (Part 2):2001 (Anti-termite measures in buildings: pre-constructional chemical treatment), clause 7.", rel:["concrete-on-site","site-safety","earthwork-estimation"] },

/* =============================================================== */
{ id:"mortar-plaster", cat:"Site practice", title:"Mortars and plastering",
  lede:"Mortar binds the masonry and plaster protects and finishes it. Both fail in the same ways: wrong mix, too much water, poor background preparation, or no curing.",
  short:["Mix only as much cement mortar as can be used in about 30 minutes.","Two-coat plaster should not normally exceed 20 mm in total (15 mm on concrete soffits); three-coat about 25 mm.","The rendering coat is 10–15 mm, roughened for the next coat; masonry joints are raked at least 10 mm before plastering."],
  body:`
<h2>Masonry mortar</h2>
<ul>
<li>IS 2250 specifies masonry mortars preferably by <b>grade</b> (minimum 28-day compressive strength), with typical cement–sand, cement–lime–sand and lime mixes that achieve each grade given for guidance. Common cement–sand mixes are 1:3 to 1:6, richer for stronger or more exposed work.</li>
<li>Use only as much water as gives a workable consistency; excess water weakens mortar and causes shrinkage.</li>
<li>Mix cement mortar only for about <b>30 minutes</b> of work at a time; lime mortars may be used over a longer period.</li>
<li>Sand for masonry mortar must be clean and suitably graded (IS 2116).</li>
</ul>
<h2>Plaster thickness and coats</h2>
${T(["Work","Thickness"],[["Rendering (first) coat in multi-coat work","10–15 mm, carried to natural breaks (doors, windows), roughened before it hardens"],["Two-coat work, total","About but normally not more than 20 mm (not more than 15 mm on in-situ concrete soffits)"],["Three-coat work, total","About but normally not more than 25 mm"],["Single-coat work","Common thicknesses 12 mm (ceilings, smooth surfaces) and 15 mm (brick walls)"]],"IS 1661 Table 2 recommends mixes and coat thicknesses for different backgrounds and exposures.")}
<h2>Preparing the background</h2>
<ul class="check">
<li>Masonry set and cured, with joints raked out at least 10 mm</li>
<li>Surface clean of dust, oil and loose material; concrete roughened (hacked) or given a bonding coat</li>
<li>Even: for three-coat work, local projections no more than about 12 mm and depressions no more than about 20 mm; level larger unevenness first</li>
<li>Wetted to control suction, but not saturated</li>
<li>Junctions of brick and concrete covered with wire mesh to resist cracking</li>
</ul>
<h2>Applying and curing</h2>
<ul>
<li>Apply each coat firmly, ruled to line and level, and finish as specified (sponge, trowel, sand-faced).</li>
<li>Protect fixtures and existing work during plastering.</li>
<li>Cure cement plaster by keeping it moist for at least 7 days; in hot, dry or windy weather keep it continuously wet.</li>
</ul>
<h2>Common defects</h2>
${T(["Defect","Usual cause"],[["Cracking (crazing, map cracks)","Rich mix, too much water, too thick in one coat, fast drying, poor curing, movement of the background"],["Hollow (drummy) plaster, debonding","Dusty or smooth background, no key, dry background drawing water"],["Blowing / popping","Unslaked particles of lime in the mix"],["Efflorescence","Salts in bricks, sand or water carried to the surface by moisture"],["Uneven texture","Varying suction of the background; can be avoided with three-coat work"]])}`,
  src:"IS 2250:1981 (masonry mortars), IS 1661:1972 (cement and cement-lime plastering), IS 2116 (sand for masonry mortars).", rel:["brickwork","quantity-masonry","measurement-rules"] },

/* =============================================================== */
{ id:"flooring", cat:"Site practice", title:"Cement concrete flooring",
  lede:"A cement concrete floor is cheap and durable if it is laid on a sound base, in panels, with the right mix and thickness, and properly cured. Most failures (cracks, dusting, hollow patches) come from skipping one of these.",
  short:["Toppings of 40 mm and more use aggregate graded 16 mm and down; 25 mm toppings use 12.5 mm and down.","Lay in panels (alternate bays) to control shrinkage cracking; monolithic toppings bond best.","Dense, well-compacted concrete and adequate curing give the wear resistance."],
  body:`
<h2>Types of finish</h2>
<ul>
<li><b>Monolithic finish:</b> the topping is laid on the base concrete while the base is still green. Even a thin topping performs well because it bonds fully with the base.</li>
<li><b>Bonded finish on a hardened base:</b> the base is roughened, cleaned and given a bonding coat before the topping is laid; thicker toppings are needed.</li>
<li>Suspended (structural) slabs usually receive a monolithic topping.</li>
</ul>
<h2>Thickness and aggregate</h2>
${T(["Layer","Coarse aggregate"],[["Base concrete (cement or lime concrete)","Graded 40 mm and down"],["Topping 40 mm thick and above","Graded 16 mm and down"],["Topping 25 mm thick","Graded 12.5 mm and down"]],"IS 2571 Table 3 sets out the floor finish types, thicknesses and mixes for different loads and wear.")}
<h2>Laying</h2>
<ul>
<li>Base well compacted and to level and falls; cleaned and wetted (or bonded) before the topping.</li>
<li>Lay in <b>panels</b>, usually in alternate bays, with straight edges and dividing strips (glass, aluminium or PVC) where specified, to control shrinkage cracks.</li>
<li>Use a stiff mix with a low water–cement ratio, compact thoroughly, and trowel at the right time; do not sprinkle dry cement to soak up water.</li>
<li>Density reduces staining from oil and increases durability.</li>
</ul>
<h2>Curing</h2>
<p>Start curing as soon as the surface can take it without damage, and keep the floor wet (ponding or wet sacks) for at least 7 days; longer for blended cements. Keep traffic off until the floor has gained strength.</p>
<h2>Measurement</h2>
<p>Flooring is measured in square metres, with no deduction for voids up to 0.2 m²; skirting and narrow strips up to 30 cm wide in running metres (IS 1200 Part 11).</p>`,
  src:"IS 2571:1970 (Code of practice for laying in-situ cement concrete flooring); IS 1200 Part 11.", rel:["concrete-on-site","curing-weather","measurement-rules"] },

/* =============================================================== */
{ id:"piles", cat:"Site practice", title:"Bored cast-in-situ piles",
  lede:"Piles carry loads through weak soil to a firmer stratum. Bored cast-in-situ piles are formed by drilling a hole, stabilising it with casing or drilling mud, lowering a reinforcement cage and concreting by tremie. Quality depends on doing each step without contaminating the concrete.",
  short:["Concrete at least M25, with at least 400 kg/m³ of cement (never below 350 kg/m³ even with admixtures), slump 150–180 mm.","Minimum pile diameter 450 mm; longitudinal steel at least 0.4 % of the shaft section, throughout its length.","Cast concrete above the cut-off level (at least 600 mm, or 1 m with tremie, or to ground level) so weak top concrete can be chipped off."],
  body:`
<h2>Concrete</h2>
${T(["Requirement","Value"],[["Minimum grade","M25"],["Minimum cement content","400 kg/m³ (may be reduced with a proper mix design and admixtures, but never below 350 kg/m³)"],["Slump at pouring","150–180 mm"],["Average working compressive stress","Limited per the code (about 25 % of the specified strength)"]])}
<h2>Tremie concreting</h2>
<ul>
<li>The concrete is coherent and rich in cement, with slump 150–180 mm.</li>
<li>The tremie pipe is watertight with a hopper; at least 200 mm diameter for 25 mm aggregate (smaller for 20 mm aggregate).</li>
<li>The first charge is placed with a sliding plug or plate to keep it separate from water or mud; the tremie stays embedded in the concrete throughout, and concreting is continuous.</li>
</ul>
<h2>Reinforcement and dimensions</h2>
<ul>
<li>Minimum diameter <b>450 mm</b>; piles up to 600 mm are "small diameter", larger ones "large diameter".</li>
<li>Longitudinal steel at least <b>0.4 %</b> of the shaft area, through the full length of the shaft. Curtailment depends on loading and soil.</li>
<li>Adequate cover (75 mm is generally used in marine and aggressive conditions).</li>
</ul>
<h2>Cut-off level</h2>
<p>The top of a pile always contains weak, contaminated concrete. Cast concrete at least <b>600 mm above the cut-off level</b>, plus 50 mm for every extra 0.3 m that the cut-off lies below the working level. With tremie concrete, cast up to ground level (to see clean concrete overflow) or at least 1 m above cut-off. Then chip back to sound concrete at the cut-off level and bond into the pile cap.</p>
<h2>Installation checks</h2>
<ul class="check">
<li>Position and verticality within the specified tolerances</li>
<li>Bore stabilised (casing or drilling mud), depth confirmed, base cleaned before concreting</li>
<li>Cage with spacers, correct laps and length; lowered without disturbing the bore</li>
<li>Continuous concreting; volume of concrete placed compared with the theoretical volume</li>
<li>Pile load tests (initial and routine) and integrity tests as specified</li>
</ul>`,
  src:"IS 2911 (Part 1/Sec 2):2010 (Bored cast in-situ concrete piles), clauses 3, 6, 7 and 8.", rel:["foundations","soil-investigation","concrete-on-site"] },

/* =============================================================== */
{ id:"water-tanks", cat:"Structural design", title:"Water-retaining structures: tanks, sumps and reservoirs",
  lede:"A water tank must be strong, and also watertight. That changes the design: lower steel stresses, more minimum reinforcement, denser concrete and careful joints, because a crack that is harmless in a slab will leak in a tank.",
  short:["Reinforced concrete for water-retaining structures: at least M30, cement 320–400 kg/m³, w/c at most 0.45 (M25 allowed for small tanks up to 50 m³ away from the coast).","Minimum reinforcement 0.35 % (HYSD) of the surface zone in each direction (0.64 % for mild steel), reducible for small tanks.","Cracking is deemed controlled if the steel stress under service loads is at most 130 N/mm² (HYSD) or 115 N/mm² (plain bars)."],
  body:`
<h2>Materials</h2>
${T(["Concrete","Min. cement (kg/m³)","Max. w/c","Min. grade"],[["Plain","250","0.50","M20"],["Reinforced","320","0.45","M30"],["Prestressed","360","0.40","M40"]],"IS 3370 (Part 1):2009 Table 1. Cement content (excluding fly ash and slag) above 400 kg/m³ should not be used without special consideration of shrinkage and thermal cracking. For tanks up to 50 m³ where M30 is hard to obtain, M25 may be used, except in coastal areas.")}
<h2>Minimum reinforcement</h2>
<ul>
<li>In walls, floors and roofs, in each of two directions, within each surface zone: at least <b>0.35 %</b> of the surface-zone section for high-strength deformed bars and <b>0.64 %</b> for mild steel.</li>
<li>For small tanks (no dimension above the limit in the code), this may be reduced to 0.24 % (deformed) and 0.40 % (plain).</li>
</ul>
<h2>Crack control</h2>
<ul>
<li>Limit state design checks crack widths under service loads (Annex A for temperature and moisture effects, Annex B for mature concrete).</li>
<li>Crack widths in direct and flexural tension are deemed satisfactory if the steel stress under service conditions does not exceed <b>130 N/mm²</b> for HYSD bars and <b>115 N/mm²</b> for plain bars.</li>
<li>Working stress design may also be used, with permissible concrete stresses chosen so that sections do not crack.</li>
</ul>
<h2>Construction</h2>
<ul class="check">
<li>Dense, well-compacted concrete with adequate cover; no honeycombing</li>
<li>Construction, movement and contraction joints detailed and sealed (waterstops) as designed</li>
<li>Minimum number of construction joints, cleaned and prepared before the next pour</li>
<li>Careful curing to limit early thermal and shrinkage cracking</li>
<li>Hydraulic (water-tightness) test before backfilling or finishing, as specified</li>
</ul>`,
  src:"IS 3370 (Part 1):2009 (general requirements) Table 1 and clause 6; IS 3370 (Part 2):2009 (reinforced concrete structures) clauses 4.4 and 8.", rel:["rcc-design","concrete-on-site","curing-weather"] },

/* =============================================================== */
{ id:"concrete-blocks", cat:"Testing & quality", title:"Concrete masonry blocks",
  lede:"Concrete blocks build walls faster than bricks with less mortar. IS 2185 (Part 1) classifies them by density and strength and sets limits on absorption and shrinkage, which decide how the walls will crack.",
  short:["Grade A hollow blocks (load-bearing): density at least 1500 kg/m³, strength classes 3.5 to 15 N/mm².","Water absorption no more than 10 % by mass; drying shrinkage no more than 0.06 %.","Block height should not exceed its length, nor six times its width."],
  body:`
<h2>Grades</h2>
${T(["Grade","Type","Use"],[["A","Hollow (open or closed cavity), density at least 1500 kg/m³","Load-bearing; strengths 3.5, 4.5, 5.5, 7.0, 8.5, 10.0, 12.5, 15.0 N/mm² at 28 days"],["B","Hollow, lower density","Load-bearing, lighter"],["C","Solid","Load-bearing"]],"IS 2185 (Part 1):2005. Check the grade and strength class on the supplier's certificate.")}
<h2>Requirements</h2>
${T(["Property","Limit"],[["Water absorption (average of three)","Not more than 10 % by mass"],["Drying shrinkage (average of three)","Not more than 0.06 %"],["Shape","Height not more than the length, nor six times the width"]])}
<h2>Sampling for tests</h2>
<p>From each lot a sample is taken and split between tests: block density, compressive strength (8 blocks), water absorption (3), drying shrinkage and moisture movement (3), with 3 kept for retests. The lot conforms when all specified requirements are met.</p>
<h2>On site</h2>
<ul class="check">
<li>Blocks cured and aged before use (fresh blocks shrink and crack walls)</li>
<li>Stored dry, covered, on a level base</li>
<li>Not wetted before laying (unlike bricks); laid with full bed joints</li>
<li>Bed-joint reinforcement and control joints in long walls as detailed</li>
</ul>`,
  src:"IS 2185 (Part 1):2005 (Concrete masonry units: hollow and solid concrete blocks).", rel:["brick-tests","quantity-masonry","brickwork"] },

/* =============================================================== */
{ id:"ndt", cat:"Testing & quality", title:"Non-destructive testing of concrete: rebound hammer and ultrasonic pulse",
  lede:"When cube results are doubtful, or an existing building is being assessed, non-destructive tests show how uniform and sound the concrete is in place. They support judgement; on their own they do not prove strength.",
  short:["Ultrasonic pulse velocity: above 4.5 km/s excellent, 3.5–4.5 good, 3.0–3.5 medium, below 3.0 doubtful.","Rebound hammer: smooth, clean, dry surface; points at least 20 mm apart and from edges; average several readings at each point.","Correlate with cores or cubes from the same concrete before estimating strength."],
  body:`
<h2>Ultrasonic pulse velocity (IS 13311 Part 1)</h2>
<p>An ultrasonic pulse is sent through the concrete and its travel time measured over a known path. Dense, sound concrete transmits faster; cracks, honeycombing and voids slow the pulse.</p>
${T(["Pulse velocity by cross probing (km/s)","Concrete quality grading"],[["Above 4.5","Excellent"],["3.5 to 4.5","Good"],["3.0 to 3.5","Medium"],["Below 3.0","Doubtful (further tests needed)"]],"IS 13311 (Part 1):1992 Table 2. Values depend on aggregate, moisture, reinforcement and path; use them as a guide to uniformity.")}
<h2>Rebound hammer (IS 13311 Part 2)</h2>
<ul>
<li>A spring-driven mass strikes the surface; the rebound number reflects surface hardness, which relates to strength.</li>
<li>Test on a smooth, clean, dry surface; grind off loose scale; avoid honeycombed or plastered areas.</li>
<li>Points of impact at least <b>20 mm</b> from edges and from each other; never strike the same point twice.</li>
<li>Take several readings at each point (six in the standard), discard outliers, and average.</li>
<li>Readings are affected by cement and aggregate type, surface moisture, age and carbonation; correlate with cores or cubes for the same concrete.</li>
</ul>
<h2>Using them together</h2>
<p>If pulse velocity shows the concrete is excellent or good, rebound numbers can be used to estimate strength across the member. If it is medium, extend that estimate to the whole mass only with care. If it is doubtful, do not estimate strength from rebound at all: take cores and investigate.</p>`,
  src:"IS 13311 (Part 1):1992 (ultrasonic pulse velocity), (Part 2):1992 (rebound hammer).", rel:["cube-tests","building-audit","structural-safety"] },

/* =============================================================== */
{ id:"admixtures", cat:"Testing & quality", title:"Admixtures for concrete",
  lede:"Admixtures are chemicals added in small doses to change how concrete behaves: easier to place, slower or faster to set, more durable. Used well, they reduce water and improve quality; used blindly, they cause problems.",
  short:["Five types: accelerating, retarding, water-reducing, air-entraining and superplasticizing (high-range water-reducing).","Superplasticizers allow a lower water–cement ratio at the same workability, which improves strength and durability.","The manufacturer must declare chloride content; superplasticizers are expected to be chloride-free."],
  body:`
<h2>Types</h2>
${T(["Type","What it does","Typical use"],[["Accelerating","Speeds up hydration, shortens setting, increases early strength","Cold weather, early striking, repairs"],["Retarding","Delays setting","Hot weather, long hauls, large pours to avoid cold joints"],["Water-reducing (plasticizer)","Same workability with less water, or more workability at the same water","General concrete"],["Air-entraining","Creates tiny stable air bubbles","Freeze–thaw resistance"],["Superplasticizing","Large water reduction or flowing concrete","Pumped, self-compacting, high-strength and congested work"]],"IS 9103:1999. Many products combine effects, such as retarding superplasticizers.")}
<h2>Using admixtures well</h2>
<ul class="check">
<li>Choose the admixture in the mix design and confirm it in trial mixes with the actual cement and aggregates</li>
<li>Check the chloride content declared by the manufacturer (critical for reinforced and prestressed concrete)</li>
<li>Dose by weight of cement, accurately, using a dispenser; never "by eye"</li>
<li>Check compatibility with the cement (loss of slump, setting problems)</li>
<li>Do not use admixtures to make up for poor materials or extra water</li>
</ul>`,
  src:"IS 9103:1999 (Concrete admixtures – specification).", rel:["mix-design","fresh-concrete","curing-weather"] }
);
