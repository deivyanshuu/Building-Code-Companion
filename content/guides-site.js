SITE.guides.push(
/* =============================================================== */
{ id:"concrete-on-site", cat:"Site practice", title:"Concrete on site: grade, cover, placing and compaction",
  lede:"Most concrete problems are decided before the first bag is opened: the right grade for the exposure, the right cover, a workable mix that is not over-watered, compaction that removes the air, and curing that actually happens.",
  short:["The exposure condition sets the minimum grade, cement content, water–cement ratio and cover.","Never add water at site to restore slump. It lowers strength and durability.","Compact until air bubbles stop rising; do not use the vibrator to move concrete sideways."],
  body:`
<h2>Exposure, grade, cement and cover</h2>
${T(["Exposure","Typical situation","Min. grade (RCC)","Min. cement (kg/m³)","Max. w/c","Nominal cover"],[["Mild","Protected against weather, except in coastal areas","M20","300","0.55","20 mm"],["Moderate","Sheltered from heavy rain and freezing; buried in non-aggressive soil; continuously under non-aggressive water","M25","300","0.50","30 mm"],["Severe","Severe rain, alternate wetting and drying, coastal; completely immersed in sea water","M30","320","0.45","45 mm"],["Very severe","Exposed to sea spray, corrosive fumes, aggressive subsoil or groundwater","M35","340","0.45","50 mm"],["Extreme","Tidal zone; in direct contact with aggressive chemicals","M40","360","0.40","75 mm"]],"Plain concrete needs at least M15 (mild) to M25 (extreme). Columns get at least 40 mm cover and footings at least 50 mm whatever the exposure. For mild exposure, main bars up to 12 mm may have 5 mm less cover. Cover may vary by +10 / −0 mm. OPC content should not exceed 450 kg/m³ (excluding fly ash and slag).")}
<h2>Batching and mixing</h2>
<ul>
<li>Batch by weight wherever possible. If volume batching is unavoidable for small work, allow for bulking of sand and measure water accurately.</li>
<li>Correct the mixing water for the free moisture in the aggregates every day, and more often in the monsoon.</li>
<li>Mix until the concrete is uniform in colour and consistency. Do not exceed the batch capacity of the mixer.</li>
<li>Ready-mixed concrete: check the delivery ticket, the elapsed time and the slump on arrival.</li>
</ul>
<h2>Transporting and placing</h2>
<ul>
<li>Transport and place quickly, before initial set, by methods that prevent segregation and loss of paste.</li>
<li>Place as close to the final position as possible. Do not let concrete fall freely from a height that makes it segregate; use chutes, trunks or tremies.</li>
<li>Place in layers of a depth that can be fully compacted, and place each new layer before the one below has set.</li>
<li>Do not place concrete on dry formwork or dry sub-base; dampen them first. Do not place in standing water unless using tremie or underwater methods.</li>
</ul>
<h2>Compaction</h2>
<ul>
<li>Use needle vibrators inserted vertically at close, regular spacing, and withdraw slowly. Stop when air bubbles cease to rise and the surface glistens.</li>
<li>Do not touch the reinforcement or formwork with the needle, and do not use it to drag concrete along.</li>
<li>Under-vibration leaves honeycombs; over-vibration of wet mixes brings paste and water to the top.</li>
</ul>
<h2>Construction joints</h2>
<ul>
<li>Plan joints in advance, at places of low shear: usually near mid-span of slabs and beams, or at the top of a column just below the beam soffit, as directed by the engineer.</li>
<li>Before the next pour, remove laitance and loose material, roughen the surface to expose aggregate, wet it, and apply a thin layer of mortar or bonding agent.</li>
</ul>
<h2>Before every pour</h2>
<ul class="check">
<li>Formwork: line, level, plumb, tight joints, props and bracing, release agent applied, cleaned out</li>
<li>Reinforcement: sizes, spacing, laps and hooks as drawn; cover blocks of matching strength at the specified cover; chairs for top steel</li>
<li>Embedded items: conduits, sleeves, inserts fixed and checked</li>
<li>Concrete: grade, slump, temperature; cube moulds, vibrators (plus a spare) and lighting ready</li>
<li>Curing arrangement agreed before the pour</li>
</ul>`,
  src:"IS 456:2000, clauses 6–8 (Tables 3, 4, 5 and 16) and 10–13.", rel:["fresh-concrete","formwork","curing-weather","rebar"] },

/* =============================================================== */
{ id:"formwork", cat:"Site practice", title:"Formwork: design, tolerances and when it can come off",
  lede:"Formwork carries wet concrete, workers and equipment, then has to come off without damaging young concrete. Remove it too early and members crack or sag; too late and the job stalls.",
  short:["Vertical faces (columns, walls, beam sides): 16–24 hours.","Slab soffits: 3 days with props left under; props stay 7 days for spans up to 4.5 m, 14 days for longer spans.","Beam soffits: 7 days with props left under; props stay 14 days for spans up to 6 m, 21 days for longer spans."],
  body:`
<h2>Striking times</h2>
${T(["Formwork","Minimum time before striking"],[["Vertical formwork to columns, walls and beams","16–24 hours"],["Soffit formwork to slabs (props refixed immediately)","3 days"],["Soffit formwork to beams (props refixed immediately)","7 days"],["Props to slabs spanning up to 4.5 m","7 days"],["Props to slabs spanning over 4.5 m","14 days"],["Props to beams and arches spanning up to 6 m","14 days"],["Props to beams and arches spanning over 6 m","21 days"]],"For ordinary Portland cement at normal temperatures (around 15 °C and above). For other cements and colder weather, increase these times. Strength at striking can be checked on cubes cured with the member.")}
<h2>Good formwork</h2>
<ul>
<li>Rigid and tight enough to keep its shape and prevent loss of slurry under the weight and pressure of wet concrete and vibration.</li>
<li>Props of adequate size, spacing and bracing to carry the full dead load plus construction and imposed loads expected during curing and work above.</li>
<li>Clean, and treated with a release agent that does not stain the concrete or touch the reinforcement.</li>
<li>Where the shape has re-entrant angles, strip those forms as soon as the concrete has set, to avoid shrinkage cracks from restraint.</li>
</ul>
<h2>Tolerances</h2>
<p>IS 456 gives permissible deviations for the finished member. Typical values are +12 / −6 mm on the cross-section of columns and beams, and for footings +50 / −12 mm on plan dimensions, an eccentricity of 0.02 × the footing width (up to 50 mm), and −5 % on thickness. Check line, level and plumb before every pour.</p>
<h2>Multi-storey work</h2>
<ul>
<li>The slab below is often only days old when it supports the next floor's formwork. Plan <b>back-propping</b> through two or three floors so loads reach mature concrete.</li>
<li>Do not stack materials on young slabs.</li>
<li>Remove props in the sequence the engineer sets: usually from mid-span outwards for simply supported members, and the free end first for cantilevers.</li>
</ul>
<h2>Checklist</h2>
<ul class="check">
<li>Props on firm, levelled bearing, braced both ways</li>
<li>Formwork line, level and dimensions checked; joints sealed</li>
<li>Release agent applied; inside cleaned of debris and water</li>
<li>Striking times and back-propping written into the pour plan</li>
</ul>`,
  src:"IS 456:2000, clause 11 (11.1 to 11.3) and clause 12 tolerances; IS 14687 (falsework guidelines).", rel:["concrete-on-site","curing-weather","cube-tests"] },

/* =============================================================== */
{ id:"curing-weather", cat:"Site practice", title:"Curing, and concreting in hot and cold weather",
  lede:"Concrete keeps gaining strength only while it stays moist and warm enough. Curing is cheap; skipping it costs strength, durability and surface quality that can never be recovered.",
  short:["Keep exposed surfaces moist for at least 7 days with OPC; at least 10 days with fly ash or slag cements; extend in hot, dry weather.","Hot-weather precautions when air or concrete temperature exceeds 40 °C.","Cold weather: concrete at least 5 °C when placed, and protected from freezing."],
  body:`
<h2>How long to cure</h2>
${T(["Cement","Normal weather","Hot, dry weather"],[["Ordinary Portland cement","At least 7 days","At least 10 days"],["With mineral admixtures (fly ash, slag) or blended cements","At least 10 days","At least 14 days recommended"]],"Count from placing. Curing must be continuous: wetting and drying in cycles does more harm than good.")}
<h2>Methods</h2>
<ul>
<li><b>Ponding</b> on slabs with small bunds of mortar or clay.</li>
<li><b>Wet coverings</b> (hessian, sacking, sand) kept continuously wet.</li>
<li><b>Impermeable membranes</b> (polythene sheets) laid over damp concrete and held down at the edges.</li>
<li><b>Curing compounds</b> sprayed on as soon as bleed water disappears. Useful where water is scarce or on vertical faces; check that later finishes will bond.</li>
<li>Columns and walls: wrap in hessian kept wet, or leave formwork in place longer.</li>
<li>Steam curing for precast work, under controlled temperature cycles.</li>
</ul>
<h2>Hot weather</h2>
<p>Concreting counts as hot-weather work when the air temperature is above 40 °C or the concrete temperature at placing is expected to exceed 40 °C. High temperature speeds setting, increases water demand, causes plastic shrinkage cracks and lowers long-term strength.</p>
<ul class="check">
<li>Keep aggregates shaded and sprinkled; use chilled water or ice in the mix</li>
<li>Pour early in the morning, late evening or at night</li>
<li>Shade and dampen the formwork and sub-base; use windbreaks</li>
<li>Place and finish quickly; avoid delays between layers that create cold joints</li>
<li>Start curing as soon as the surface allows; use fog sprays or covers against early drying</li>
<li>Consider retarding admixtures, approved by the engineer</li>
</ul>
<h2>Cold weather</h2>
<ul>
<li>Concrete placed at or near freezing should be at least <b>5 °C</b> at placing, and kept above freezing until it has enough strength.</li>
<li>Heat water and aggregates if needed; never place on frozen ground or against frozen formwork.</li>
<li>Insulate and cover; extend striking times.</li>
</ul>`,
  src:"IS 456:2000 (cl 13.5 and 14), IS 7861 Part 1:1975 (hot weather concreting).", rel:["concrete-on-site","formwork","fresh-concrete"] },

/* =============================================================== */
{ id:"rebar", cat:"Site practice", title:"Reinforcement on site: laps, anchorage, cover and fixing",
  lede:"Steel only works if it is anchored, lapped and covered properly. These are the checks a site engineer makes before every pour, and the details a drafting team must show.",
  short:["Lap in flexural tension: the larger of Ld and 30φ; in direct tension, the larger of 2Ld and 30φ; in compression, at least 24φ.","A straight lap is never less than 15φ or 200 mm. Bars over 36 mm are welded or coupled, not lapped.","In seismic zones, hoops have 135° hooks; laps stay out of joints and hinge zones."],
  body:`
<h2>Development length</h2>
<p>A bar must be embedded far enough to develop its full stress:</p>
<div class="formula">L<sub>d</sub> = φ σ<sub>s</sub> / (4 τ<sub>bd</sub>), with σ<sub>s</sub> = 0.87 f<sub>y</sub> at the limit state</div>
${T(["Concrete","M20","M25","M30","M35","M40+"],[["τbd, plain bars in tension (N/mm²)","1.2","1.4","1.5","1.7","1.9"],["τbd, deformed bars in tension","1.92","2.24","2.40","2.72","3.04"],["τbd, deformed bars in compression","2.40","2.80","3.00","3.40","3.80"]],"Deformed bars: +60 %; bars in compression: a further +25 %. For Fe 500 bars in M25 in tension, Ld ≈ 48.5φ. Work out any combination in the <a href='#/tool/lap-length'>lap length tool</a>.")}
<h2>Laps</h2>
${T(["Situation","Lap length"],[["Flexural tension","Larger of Ld and 30φ"],["Direct tension","Larger of 2Ld and 30φ"],["Compression","Development length in compression, at least 24φ"],["Any lap","Straight length at least 15φ or 200 mm"],["Bars of different sizes","Based on the smaller bar"]])}
<ul>
<li>Where possible, lap away from points of maximum stress, and stagger laps: they count as staggered when their centres are at least 1.3 × lap length apart.</li>
<li>Bars over 36 mm are welded or joined with mechanical couplers; where lapping is unavoidable, add spirals round the lap.</li>
<li>Bundled bars: lap one bar at a time, staggered.</li>
</ul>
<h2>Cover and spacing</h2>
<ul>
<li>Nominal cover by exposure (20–75 mm), at least 40 mm for columns and 50 mm for footings. See <a href="#/guide/concrete-on-site">concrete on site</a>.</li>
<li>Clear distance between bars at least the bar diameter and 5 mm more than the nominal maximum aggregate size.</li>
<li>Cover blocks of concrete at least as strong as the member, tied in place, at close enough spacing (often about 1 m) to hold the cage at cover.</li>
</ul>
<h2>Fixing</h2>
<ul>
<li>Bars clean: no loose rust or scale, mud, oil or paint. Light surface rust is acceptable.</li>
<li>Tie every intersection at edges and alternate ones elsewhere, firmly enough that the cage does not move during concreting.</li>
<li>Chairs under top bars of slabs; spacer bars between layers.</li>
<li>Leave openings in the top mat for the vibrator needle.</li>
</ul>
<h2>In seismic zones (IS 13920)</h2>
<ul>
<li>Closed hoops with 135° hooks and 6φ extensions (at least 65 mm).</li>
<li>Beam bars are not lapped within a joint, within 2d of a joint face, or where yielding is expected; laps are enclosed by hoops.</li>
<li>Column laps only in the middle half of the clear height, with hoops at close spacing over the lap.</li>
<li>Closely spaced hoops over 2d at beam ends and over the confining length at column ends and through joints.</li>
</ul>
<h2>Pre-pour checklist</h2>
<ul class="check">
<li>Bar sizes, numbers, spacing and bar marks match the drawing and schedule</li>
<li>Laps and anchorages correct in length and position, and staggered</li>
<li>Cover blocks and chairs in place; cover measured at several points</li>
<li>Hooks and hoop spacing as detailed, especially in seismic zones</li>
<li>Cage firm, clean and free of debris</li>
</ul>`,
  src:"IS 456:2000 (clauses 26.2 to 26.4), IS 13920, IS 2502.", rel:["bar-bending","steel-tests","ductile","concrete-on-site"] },

/* =============================================================== */
{ id:"brickwork", cat:"Site practice", title:"Brickwork: good practice on site",
  lede:"Brick masonry is simple to build and easy to build badly. Soaking, bond, joint thickness and curing make the difference between a wall that lasts and one that cracks and leaks.",
  short:["Soak bricks so water just penetrates the whole brick, but lay them surface-dry, not dripping.","Keep joints thin and full; rake them out 10 mm for plaster or 15 mm for pointing while the mortar is green.","Keep brickwork moist for at least 7 days (not needed for mud mortar)."],
  body:`
<h2>Materials</h2>
<ul>
<li>Bricks to IS 1077, of the class specified, sound, well burnt, uniform in size (see the <a href="#/guide/brick-tests">brick tests guide</a>).</li>
<li>Mortar to the specified mix; cement mortar used within about 30 minutes of mixing. Do not retemper stiffened mortar.</li>
</ul>
<h2>Laying</h2>
<ul>
<li><b>Soak</b> bricks in water long enough for the water to just penetrate the whole depth, so they do not suck water from the mortar. Let surface water drain before laying.</li>
<li>Lay on a full bed of mortar, frog up, pressing each brick so the mortar fills all joints, including the vertical (perpend) joints.</li>
<li>Use a proper bond (English bond is usual for one-brick and thicker walls) so that vertical joints in successive courses do not line up.</li>
<li>Keep courses level and walls plumb; check with a line, level and plumb bob as you go.</li>
<li>Raise the work evenly. Where one part must lag, step it back (racking back) rather than leaving toothing.</li>
<li>Protect fresh brickwork from rain with sacking or tarpaulin.</li>
</ul>
<h2>Joints</h2>
<ul>
<li>For plastered walls, rake joints squarely to a depth of <b>10 mm</b> while the mortar is still green, and brush the face clean.</li>
<li>For pointing, rake out to <b>15 mm</b>, brush and wet the joints, then fill with the pointing mortar.</li>
<li>Keep joints uniform and thin; thick joints waste mortar and weaken the wall.</li>
</ul>
<h2>Curing</h2>
<p>Keep cement-mortar brickwork constantly wet for at least <b>7 days</b>, especially in hot, dry weather, so the mortar does not crumble before it gains strength. Brickwork in mud mortar is not cured.</p>
<h2>Services and openings</h2>
<ul>
<li>Leave chases and holes for services while building, rather than cutting later.</li>
<li>In earthquake zones, provide the bands, vertical bars and opening limits of IS 4326 (see the next guide).</li>
</ul>`,
  src:"IS 2212:1991 (Code of practice for brickwork), clauses 6, 10 and 11.", rel:["brick-tests","masonry-earthquake","masonry-design"] },

/* =============================================================== */
{ id:"masonry-earthquake", cat:"Site practice", title:"Earthquake-resistant masonry buildings (IS 4326)",
  lede:"Unreinforced masonry is heavy and brittle, and it is where most earthquake deaths happen in India. A few simple features (horizontal bands, vertical bars at corners, and limits on openings) make masonry buildings far safer at little cost.",
  short:["Buildings are put into categories B to E by seismic zone and importance; the category decides which features are needed.","Horizontal RC bands tie the walls together at plinth, lintel and roof levels (and at gables).","Masonry units must have a crushing strength of at least 3.5 MPa."],
  body:`
<h2>Building categories</h2>
${T(["Importance factor","Zone II","Zone III","Zone IV","Zone V"],[["1.0 (ordinary buildings)","B","C","D","E"],["1.5 (important buildings)","C","D","E","E"]],"Category A no longer applies because zone I has been removed. A fourth storey is not allowed in category E.")}
<h2>The key features</h2>
<ul>
<li><b>Lintel band</b> at lintel level on all load-bearing internal, external, longitudinal and cross walls. A band also helps partition walls stay standing.</li>
<li><b>Roof band</b> immediately below roofs and floors (not needed under RC slabs that rest on the walls).</li>
<li><b>Plinth band</b> where the soil is soft or uneven.</li>
<li><b>Gable band</b> along the top of gable walls, and bracing in plan at tie level of sloping roofs.</li>
<li><b>Vertical reinforcing bars</b> at corners, wall junctions and jambs of openings, anchored into the foundation and the bands, for higher categories.</li>
<li><b>Dowel bars</b> across wall junctions where needed.</li>
</ul>
<p>Bands are continuous RC (or reinforced brick) members across the full wall width, with longitudinal bars sized by wall span and building category and closed links, so the walls act as a box rather than falling outwards.</p>
<h2>Openings</h2>
<ul>
<li>Keep doors and windows small and centrally placed in the wall, away from corners and junctions.</li>
<li>Line up opening tops in a storey so one continuous band can run over all of them.</li>
<li>Where openings exceed the guidelines, strengthen round them with RC or reinforced brickwork.</li>
</ul>
<h2>Materials</h2>
<ul>
<li>Well-burnt bricks (IS 1077) or solid concrete blocks with crushing strength at least <b>3.5 MPa</b>; strength required depends on storeys and wall thickness (IS 1905).</li>
<li>Squared stone, stone block or hollow concrete block masonry may be used if strong enough.</li>
<li>Cement or cement–lime mortar, richer for higher categories.</li>
</ul>
<h2>General layout rules</h2>
<ul>
<li>Simple, symmetrical, rectangular plans; avoid long wings, large overhangs and heavy roofs.</li>
<li>Walls continuous from foundation to roof, well connected at corners and junctions.</li>
<li>Light roofing where possible; if heavy, tie it well to the walls through bands.</li>
<li>Existing masonry buildings can be strengthened by adding bands, vertical steel and wire mesh (see IS 13935).</li>
</ul>`,
  src:"IS 4326:1993 (Earthquake resistant design and construction of buildings), clauses 7 and 8 (Tables 2, 4 and 5); IS 13935 for repair and strengthening.", rel:["brickwork","masonry-design","earthquake","brick-tests"] },

/* =============================================================== */
{ id:"site-safety", cat:"Site practice", title:"Site safety and site documents",
  lede:"Most construction deaths happen in a few predictable ways: falls from height, collapse of excavations or formwork, contact with power lines, being struck by plant, and demolition done in the wrong order. Most are prevented by planning and discipline.",
  short:["Keep the permit, approved drawings and test records on site, and a board naming the owner and professionals on record.","Keep clear of overhead lines: 2.5 m vertical for low-voltage lines, 3.7 m for 11–33 kV.","Never stack materials on public roads or young slabs."],
  body:`
<h2>Documents and display</h2>
<ul class="check">
<li>Site board: plot details and the names of the owner, architect, engineer, structural engineer, developer and construction engineer on record</li>
<li>Copy of the building permit and approved drawings and specifications, displayed or available</li>
<li>Material test records, pour and cube registers, inspection reports</li>
<li>Safety plan, emergency contacts, first-aid box and trained first-aider</li>
</ul>
<h2>The big hazards</h2>
${T(["Hazard","Controls"],[["Falls from height (slab edges, openings, scaffolds, roofs)","Edge protection (guard rails and toe boards), covers on openings, safe scaffolds with full planking and access ladders, harnesses where edge protection is impossible"],["Excavation collapse","Slope or shore the sides of deep trenches, keep spoil and plant back from the edge, safe ladders, no one in a trench alone, check after rain"],["Formwork and falsework collapse","Designed props and bracing, firm bearing, controlled concrete placing rate, no early striking"],["Overhead electric lines","Keep plant, scaffolds and rods outside the clearance distances; isolate or divert lines where needed"],["Struck by plant or materials","Banksmen, barricaded swing zones, helmets, no one under suspended loads"],["Electrical","Earthed equipment, ELCBs, no bare joints, dry working areas"],["Fire on site","Extinguishers, no smoking near flammables, controlled hot work"]])}
<h2>Personal protective equipment</h2>
<p>Helmets for everyone on site; safety shoes; gloves for steel and cement work; goggles for cutting and grinding; harnesses for work at height; ear protection near loud plant; masks for dust.</p>
<h2>Public and neighbours</h2>
<ul>
<li>Barricade the site; provide covered walkways where work overhangs public paths.</li>
<li>Do not use public roads, parks or open spaces to stack materials or park machinery.</li>
<li>Control dust, noise and debris; protect adjoining buildings during excavation (a basement needs an indemnity bond in favour of the Authority).</li>
</ul>
<h2>Overhead line clearances</h2>
${T(["Line","Vertical","Horizontal"],[["Low and medium voltage","2.5 m","1.2 m"],["Up to 11 kV","3.7 m","1.2 m"],["11 kV to 33 kV","3.7 m","2.0 m"],["Above 33 kV","3.7 m + 0.3 m per extra 33 kV","2.0 m + 0.3 m per extra 33 kV"]])}
<div class="note">NBC Part 7 (Constructional Practices and Safety) covers excavation, scaffolding, formwork, ladders, hoists, cranes, hot work, storage and handling of materials, and safety management in detail. The Building and Other Construction Workers Act and State rules set legal duties for employers.</div>`,
  src:`${MBBL}: clauses 2.10.2, 2.15.2 and 6.3.1, Appendix B-1; NBC 2016 Part 7.`, rel:["demolition","concrete-on-site","formwork"] },

/* =============================================================== */
{ id:"demolition", cat:"Site practice", title:"Safe demolition",
  lede:"Demolition reverses construction, but without the drawings, the design checks or the predictable loads. It must be planned like any other structural job, because a building being demolished can collapse in ways nobody expects.",
  short:["Survey the structure and write a demolition plan before any work starts.","Disconnect electricity, gas, water and sewer; protect neighbours and the public.","Work from the top down, one floor at a time; never remove a member before the parts it supports, and never overload floors with debris."],
  body:`
<h2>Before demolition</h2>
<ul class="check">
<li>Permission from the Authority where required, and notice to neighbours</li>
<li>Structural survey: type of structure, condition, load paths, cantilevers, prestressed members, basements, shared walls</li>
<li>Written demolition plan and method statement: sequence, methods, equipment, debris route, protection</li>
<li>All services disconnected and capped by the service providers; temporary supply for the work as needed</li>
<li>Hazardous materials (asbestos sheets, chemicals, fuel tanks) identified and removed safely first</li>
<li>Adjoining buildings surveyed, propped or shored where they depend on the building being removed</li>
<li>Site fenced, covered walkways and warning signs in place</li>
</ul>
<h2>During demolition</h2>
<ul>
<li>Remove glass, loose fittings and material that can fall, first.</li>
<li>Demolish from the <b>top storey downwards</b>, completing each floor before starting the one below. Do not undercut walls or remove columns while floors above still stand.</li>
<li>Never remove a member before the members it supports; prop where the sequence needs it.</li>
<li>Do not let debris pile up on floors: use chutes or enclosed openings, and remove debris continuously.</li>
<li>Bring down walls in small, controlled sections, not by pulling large panels.</li>
<li>Damp down dust; stop work in high wind.</li>
</ul>
<h2>People</h2>
<ul>
<li>A competent supervisor present throughout; only authorised workers in the danger zone.</li>
<li>Helmets, safety shoes, gloves, goggles and dust masks; harnesses at edges.</li>
<li>Exclusion zone around the building, sized for falling debris.</li>
</ul>`,
  src:"IS 4130:1991 (Safety code for demolition of buildings); NBC 2016 Part 7.", rel:["site-safety","structural-safety","building-audit"] },

/* =============================================================== */
{ id:"project-time", cat:"Site practice", title:"Construction project and time management",
  lede:"Most projects finish late for predictable reasons: unclear scope, an unrealistic programme, late decisions, and progress measured by feeling instead of facts. IS 15883 sets out a framework for managing construction projects, with Part 2 on time.",
  short:["Break the work down (WBS), sequence it, estimate durations, and find the critical path.","Freeze a baseline programme and measure progress against it, not against memory.","Activities with zero total float are critical: any delay to them delays the project."],
  body:`
<h2>The project life cycle</h2>
<p>Conception → feasibility → planning and design → procurement → construction → commissioning and handover. Each phase ends with a decision point. Roles are defined for the client, the project manager, designers, contractors and consultants, with clear lines of communication. IS 15883 has parts covering the general framework, time, cost, quality, risk, health and safety, and procurement.</p>
<h2>Building a programme</h2>
<ol>
<li><b>Work breakdown structure:</b> divide the project into deliverables and work packages small enough to estimate and assign.</li>
<li><b>Activities:</b> list the activities for each package, with clear start and finish conditions.</li>
<li><b>Sequencing:</b> link activities by dependency (finish-to-start, start-to-start, with lags such as curing).</li>
<li><b>Durations:</b> estimate from quantities and realistic output rates, crew sizes and working days.</li>
<li><b>Network analysis:</b> compute earliest and latest start and finish dates, and float.</li>
<li><b>Baseline:</b> agree and freeze the programme as the reference for measuring progress.</li>
</ol>
<h2>Critical path and float</h2>
<ul>
<li><b>Critical path method (CPM):</b> the longest path through the network sets the project duration.</li>
<li><b>Total float:</b> how long an activity can slip without delaying the project. <b>Free float:</b> how long it can slip without delaying the next activity.</li>
<li>Activities with zero total float are critical. Watch them daily.</li>
<li><b>PERT</b> uses three estimates (optimistic, most likely, pessimistic) where durations are uncertain: expected time = (o + 4m + p) / 6.</li>
</ul>
<h2>Monitoring and control</h2>
<ul>
<li>Update progress weekly against the baseline; plot planned and actual <b>S-curves</b>.</li>
<li><b>Earned value:</b> compare planned value (PV), earned value (EV) and actual cost (AC). Schedule performance index SPI = EV / PV; cost performance index CPI = EV / AC. Values below 1 mean behind schedule or over budget.</li>
<li>Analyse delays by cause (client, design, contractor, external) and record them as they happen.</li>
<li>Re-plan (catch-up programmes) with resources, sequence changes or overtime, and keep the baseline for comparison.</li>
</ul>
<h2>For site engineers</h2>
<ul class="check">
<li>Three-week look-ahead updated weekly from the master programme</li>
<li>Material and drawing requirements raised ahead of need</li>
<li>Daily progress report: quantities done, labour, plant, hindrances</li>
<li>Curing and striking times built into the floor cycle</li>
</ul>`,
  src:"IS 15883 (Part 1):2009 General, (Part 2):2013 Time management.", rel:["site-safety","concrete-on-site","approvals"] }
);
