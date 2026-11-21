SITE.guides.push(
/* =============================================================== */
{ id:"drawings", cat:"Drawings & detailing", title:"Submission drawings: sheets, scales, colours and contents",
  lede:"A sanction drawing is a legal document, and the Authority checks it against a list. Getting the scale, the colours and the contents right the first time saves weeks.",
  short:["Site plan at 1:100 (plots up to 500 m²) or 1:500; building plans at 1:50, 1:100 or 1:200 depending on plot size.","Proposed work in red, existing in black, work to be demolished in yellow, drainage red dotted, water supply black dotted.","Buildings over 15 m or 4 storeys, and special occupancies, must also show fire-fighting details."],
  body:`
<h2>Sheet sizes</h2>
${T(["Sheet","Trimmed size (mm)"],[["A0","841 × 1189"],["A1","594 × 841"],["A2","420 × 594"],["A3","297 × 420"],["A4","210 × 297"],["A5","148 × 210"]])}
<h2>Scales</h2>
${T(["Drawing","Scale"],[["Key plan","Not smaller than 1:10,000, showing the site against neighbourhood landmarks (where there is no approved layout)"],["Site plan","1:100 for plots up to 500 m²; 1:500 above"],["Building plans, sections, elevations","1:50 up to 250 m²; 1:100 above 250 m²; 1:200 for 2000 m² and above, with details at 1:100"],["Landscape plan","1:100 up to 500 m²; 1:500 above"],["Services plan","Not smaller than 1:100"]],"All dimensions in metric units. Prints on one side of the paper only. Scales may be relaxed for details and for drawings submitted electronically.")}
<h2>Colour code</h2>
${T(["Item","Site plan","Building plan"],[["Plot lines","Thick black","Thick black"],["Existing street","Green","–"],["Future street","Green dotted","–"],["Permissible building line","Thick dotted black","–"],["Open spaces","No colour","No colour"],["Existing work","Black (white print), white (blueprint), blue (ammonia print)","Same"],["Work to be demolished","Yellow","Yellow"],["Proposed work","Red (filled in red on white prints)","Red"],["Drainage and sewerage","Red dotted","Red dotted"],["Water supply","Black dotted thin","Black dotted thin"]],"For an entirely new building, existing-work colouring is not needed. Layout and sub-division plans use their own indexed notation.")}
<h2>What the site plan shows</h2>
<ul class="check">
<li>Boundaries of the site and any contiguous land of the owner; partitioned portions and their owners</li>
<li>Position relative to neighbouring streets, with street names and widths</li>
<li>All existing buildings on the site; adjoining streets, buildings (with storeys and height) and premises within 12 m (or the nearest street if none within 12 m)</li>
<li>Means of access to the building and to other buildings on contiguous land</li>
<li>Open spaces around the building for light, air and access</li>
<li>North point</li>
<li>Physical features: wells, drains, trees, overhead lines</li>
<li>Ground area and the breakup of covered area on each floor, with coverage percentages</li>
<li>Parking spaces; plot or building number</li>
</ul>
<h2>What the building plans show</h2>
<ul class="check">
<li>Floor plans of all floors with covered area, room sizes, the size and spacing of frame members, and the position and width of stairs, ramps and other exits, lift wells, lift machine room and pit</li>
<li>The use of every part of the building</li>
<li>Location of WCs, sinks, baths and other essential services</li>
<li>Sections showing footing sizes, basement wall thickness, wall construction, framing members, floor and roof slabs and their materials, building and room heights, parapet height, roof drainage and slope; at least one section through the stair, kitchen, toilet, bath and WC</li>
<li>All elevations; details of any service privy; dimensions of projections beyond the building line</li>
<li>Terrace plan with drainage and roof slope; north point; parking details</li>
<li>Schedule of doors, windows, ventilators and other openings with sizes</li>
</ul>
<h2>Extra for buildings over 15 m, over 4 storeys, or special occupancies</h2>
<ul>
<li>Fire tender access with turning circle and the clear motorable way around the building</li>
<li>Widths of main and alternate stairs, with balcony, corridor or ventilated-lobby approach</li>
<li>Lift enclosures; location and size of the fire lift; smoke-stop lobbies and doors</li>
<li>Refuse chutes and chambers; service ducts for sanitation, electrical and telecom</li>
<li>Vehicle parking; refuge areas</li>
<li>Building services: air conditioning with dampers, mechanical ventilation, electrical services, boilers, gas pipes</li>
<li>Exits, including ramps for hospitals and special risks</li>
<li>Generator, transformer and switchgear rooms; smoke exhaust</li>
<li>Fire alarm network; central control room with alarms, built-in fire protection and public address</li>
<li>Static water tank and pump room; fixed fire protection (sprinklers, wet risers, hose reels, drenchers, CO₂); first-aid fire-fighting equipment</li>
<li>Standard BIS signs, symbols and abbreviations for all fire-fighting systems</li>
</ul>
<h2>Other drawings</h2>
<ul>
<li><b>Services plan:</b> plans, elevations and sections of private water supply, sewage disposal and building services, not smaller than 1:100. Large plots (residential over 2000 m², non-residential over 1 ha) show separate sewage and sullage lines and rainwater harvesting.</li>
<li><b>Landscape and circulation:</b> circulation, parking, hard and soft areas and planting; for larger projects a circulation plan for vehicles and pedestrians, and an urban design scheme where needed.</li>
<li><b>Layout plan:</b> per the Master Plan norms, approved under the relevant Act.</li>
</ul>
<h2>Plot conditions to show or note</h2>
<ul>
<li>Damp sites: ground under the building made damp-proof where needed.</li>
<li>Corner plots: frontage is on the wider street; with equal widths, the deeper side. A garage in the open space goes diagonally opposite the corner.</li>
<li>Minimum plot size per the Master Plan; clearances from overhead lines (see <a href="#/guide/special-zones">special zones</a>).</li>
</ul>`,
  src:`${MBBL}: clauses 2.9.5 to 2.10.10 (Tables 2.1 to 2.3).`, rel:["drawing-practice","approvals","structural-drawings"] },

/* =============================================================== */
{ id:"drawing-practice", cat:"Drawings & detailing", title:"Drafting practice for building drawings",
  lede:"Beyond what the Authority checks, a drawing has to be read correctly by everyone who builds from it. IS 962 sets the conventions for architectural and building drawings. These are the habits that keep a drawing set clear and consistent.",
  short:["Use A-series sheets; elongated sizes (A3×3, A4×3 and so on) only when a longer sheet is unavoidable.","Choose standard scales so drawings can be measured and compared.","Every sheet needs a title block, north point (plans), scale, revision record and drawing number."],
  body:`
<h2>Sheets</h2>
${T(["Preferred sheet","Size (mm)"],[["A0","841 × 1189"],["A1","594 × 841"],["A2","420 × 594"],["A3","297 × 420"],["A4","210 × 297"]])}
${T(["Special elongated sheet","Size (mm)"],[["A3 × 3","420 × 891"],["A3 × 4","420 × 1189"],["A4 × 3","297 × 630"],["A4 × 4","297 × 841"],["A4 × 5","297 × 1051"]],"Elongated sizes extend the shorter side of an A sheet to a multiple of itself. Prints are folded to A4 for filing.")}
<h2>Scales</h2>
<p>Use standard ratio scales: 1:1, 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200, 1:500, 1:1000 and larger for site and location plans. As a guide: location and key plans 1:1000 to 1:10,000; site plans 1:100 to 1:500; general arrangement plans, sections and elevations 1:50 to 1:200; part plans and room layouts 1:20 to 1:50; construction details 1:1 to 1:10. State the scale on every view, and add a drawn scale bar on drawings that may be enlarged or reduced.</p>
<h2>What every sheet carries</h2>
<ul class="check">
<li>Title block (normally bottom right): project, client, drawing title, drawing number, scale, date, drawn / checked / approved, sheet size</li>
<li>Revision table with date and description of every change; revision clouds on the changed area</li>
<li>North point on every plan, oriented consistently across the set</li>
<li>Key plan for part plans, showing which part of the building the sheet covers</li>
<li>Grid lines with labels (numbers one way, letters the other) consistent through architecture, structure and services</li>
<li>General notes and legend, abbreviations, and references to related drawings</li>
<li>Statutory information on submission drawings: owner and professional signatures and registration numbers</li>
</ul>
<h2>Lines, lettering and dimensions</h2>
<ul>
<li>Use line weight to show hierarchy: cut elements thick, visible edges medium, dimensions, hatching and grids thin; hidden work dashed; centre and grid lines chain.</li>
<li>Keep lettering uniform and legible at the printed size; titles larger than notes.</li>
<li>Dimension in millimetres on details and building drawings (state the unit); in metres on site and layout plans. Give overall, intermediate and opening dimensions, and levels relative to a stated datum.</li>
<li>Never scale from a drawing for construction; every needed dimension should be written.</li>
</ul>
<h2>Materials, symbols and room names</h2>
<p>IS 962 gives conventional hatching for materials in section (brickwork, concrete, RCC, stone, timber, earth, insulation and others), graphical symbols for doors, windows, fixtures and services, standard abbreviations, and rules for numbering buildings, floors and rooms. Use them consistently and include a legend on the set.</p>
<div class="tip">For submission drawings, the Authority's scale, colour and content rules (see <a href="#/guide/drawings">submission drawings</a>) override general practice.</div>`,
  src:"IS 962:1989 (Code of practice for architectural and building drawings), clauses on sheet sizes, scales, line work, lettering, symbols and materials; good drafting practice.", rel:["drawings","structural-drawings","bar-bending"] },

/* =============================================================== */
{ id:"bar-bending", cat:"Drawings & detailing", title:"Bar bending schedules, hooks and bends",
  lede:"A bar bending schedule turns the reinforcement drawing into a cutting and bending list. Clear schedules prevent the two commonest site errors: the wrong length and the wrong bend.",
  short:["A standard hook or bend is formed around an internal radius of k × bar diameter: k = 2 for mild steel and 4 for high-strength deformed (cold-worked) bars.","Stirrups and links need a straight length of at least 8 bar diameters beyond the bend.","Mass of a bar in kg/m = d² / 162, with d in mm."],
  body:`
<h2>What a schedule contains</h2>
${T(["Column","Content"],[["Member","Footing, column, beam or slab reference matching the drawing"],["Bar mark","A unique mark for each different bar"],["Type and size","Grade (Fe 500, Fe 500D …) and diameter"],["Number of bars","Per member × number of members"],["Shape","A sketch with each dimension labelled, using standard shape codes where possible"],["Cutting length","The length cut from stock, allowing for bends and hooks"],["Total length and mass","Total length × mass per metre, summed by diameter"]])}
<h2>Mass of bars</h2>
${T(["Diameter (mm)","8","10","12","16","20","25","32"],[["Area (mm²)","50.3","78.6","113.1","201.2","314.3","491.1","804.6"],["Mass (kg/m)","0.395","0.617","0.888","1.58","2.47","3.85","6.31"]],"Nominal values from IS 1786; mass ≈ d²/162 kg/m. Check bar mass and tolerance in the <a href='#/tool/bar-mass'>bar mass tool</a>.")}
<h2>Hooks and bends</h2>
<ul>
<li>A standard hook (semicircular) or bend (90°) is formed around an internal radius of <b>k × φ</b>, with k = 2 for mild steel, 3 for medium tensile steel and 4 for cold-worked / high-strength deformed bars. The straight length after a hook is at least 4φ.</li>
<li>Binders, stirrups, links and ties: straight length beyond the end of the curve at least <b>8φ</b>.</li>
<li>In seismic zones, stirrups and ties are closed hoops with <b>135° hooks</b> and an extension of 6φ, at least 65 mm (IS 13920:2016; the 1993 edition required 10φ, at least 75 mm).</li>
<li>Bars specified with a radius larger than the standard table need not be bent; the curvature can be given while placing.</li>
<li>Bending is done cold, by machine or a proper lever, at a steady rate; never straighten and re-bend high-strength bars at site.</li>
</ul>
<h2>Cutting lengths: a practical note</h2>
<p>Cutting length = total of the outer dimensions shown on the shape, minus an allowance for each bend (the bar stretches round the bend), plus the hook allowances. Many sites use rule-of-thumb deductions (about 1φ for 45°, 2φ for 90° and 3φ for 135° bends). These are approximations: check the first bars of each shape against the drawing before bulk cutting.</p>
<h2>Checks before issue</h2>
<ul class="check">
<li>Bar marks match the drawing and every bar on the drawing appears in the schedule</li>
<li>Laps, development lengths and anchorages included at the right places</li>
<li>Seismic hooks and hoop spacings shown where IS 13920 applies</li>
<li>Bars over 12 m (stock length) have laps or couplers shown</li>
<li>Totals by diameter reconciled with the estimate</li>
</ul>`,
  src:"IS 2502:1963 (Code of practice for bending and fixing of bars for concrete reinforcement), clauses 3.2 and 3.8; IS 1786:2008 Table 1; IS 13920.", rel:["rebar","structural-drawings","steel-tests"] },

/* =============================================================== */
{ id:"structural-drawings", cat:"Drawings & detailing", title:"What a good structural drawing must say",
  lede:"A structural drawing is the instruction to build. If a decision is not on the drawing, someone on site will make it, usually under pressure. These are the notes and details every RC drawing set should carry.",
  short:["State concrete grade, steel grade, exposure condition and nominal cover for every member type.","Show lap lengths, lap locations, development lengths and seismic detailing explicitly.","Record design assumptions: loads, safe bearing capacity, seismic zone and codes used."],
  body:`
<h2>General notes</h2>
<ul class="check">
<li>Codes used (IS 456, IS 875, IS 1893, IS 13920, IS 800 as applicable) and their editions</li>
<li>Design loads: imposed loads by area, floor finishes, partitions, wind and seismic parameters (zone, importance, R, soil type)</li>
<li>Safe bearing capacity or pile capacity assumed, with founding level, and a note to verify on excavation</li>
<li>Concrete grade by member (footings, columns, beams, slabs) and exposure condition</li>
<li>Steel grade (Fe 500, Fe 500D …) and any coupler or welding requirements</li>
<li>Nominal cover by member: footings 50 mm, columns 40 mm, and slab / beam cover by exposure</li>
<li>Lap and development lengths (as a table by bar size), lap locations and staggering</li>
<li>Formwork striking times, props, construction joint locations and the casting sequence</li>
<li>Cube testing requirement; any special curing</li>
<li>Do not scale; read with architectural drawings; report discrepancies before work</li>
</ul>
<h2>Foundation drawings</h2>
<ul><li>Footing sizes, depths, levels and reinforcement both ways; pedestal and column starter bars with lap location</li><li>Plinth and tie beams (essential in seismic zones)</li><li>Founding level, PCC thickness and grade, and what to do if soil differs from the report</li></ul>
<h2>Column and beam drawings</h2>
<ul><li>Column schedule by level: size, bars, ties, special confining zones and lap zones</li><li>Beam elevations: top and bottom bars, curtailment, extra bars at supports, stirrup spacing zones (close near supports), and side face reinforcement for deep beams</li><li>Beam–column joint details where hoops continue through the joint</li></ul>
<h2>Slab drawings</h2>
<ul><li>Main and distribution steel, top steel over supports and its extent, corner reinforcement for two-way slabs, openings with trimming bars</li><li>Chairs and spacers, and cover to top and bottom bars</li></ul>
<h2>Ductile detailing callouts (zones III–V)</h2>
<p>Show the 135° hooks, hoop spacings in the 2d zone of beams and the l<sub>o</sub> zone of columns, lap positions away from joints and hinge zones, and the strong-column check. See the <a href="#/guide/ductile">ductile detailing guide</a>.</p>`,
  src:"Good practice based on IS 456:2000 (clauses 11, 13, 26), IS 13920 and Model Building Bye-Laws 2016 chapter 6.", rel:["bar-bending","rebar","ductile","rcc-design"] }
);
