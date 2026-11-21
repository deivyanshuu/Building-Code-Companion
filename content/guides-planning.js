SITE.guides.push(
/* =============================================================== */
{ id:"room-sizes", cat:"Planning & layouts", title:"Minimum room sizes and heights",
  lede:"These are the smallest spaces the rules allow. Designers treat them as a floor, not a target. Inspectors and buyers use them to decide whether a space can lawfully be called a bedroom, a kitchen or a shop.",
  short:["A habitable room: at least 9.5 m² and 2.4 m wide; with two rooms, the second may be 7.5 m² and 2.1 m wide.","Clear height: 2.75 m for habitable rooms and kitchens, 2.4 m under beams and false ceilings, 2.1 m for baths and WCs.","Plinth at least 450 mm above the surrounding ground."],
  body:`
<h2>Homes</h2>
${T(["Space","Minimum area","Minimum width","Minimum clear height"],[["Habitable room (only one room)","9.5 m²","2.4 m","2.75 m (2.4 m under beams)"],["Two habitable rooms","9.5 m² and 7.5 m²","2.1 m","2.75 m"],["Low-income housing (two rooms)","9.0 m² and 6.5 m², together ≥ 15.5 m²","2.5 m and 2.1 m","2.75 m"],["Kitchen (separate dining)","5.0 m² (4.5 m² with a separate store)","1.8 m","2.75 m"],["Kitchen used for dining","7.5 m²","2.1 m","2.75 m"],["Bathroom","1.8 m²","1.2 m","2.1 m"],["WC","1.1 m²","0.9 m","2.1 m"],["Bath + WC combined","2.8 m²","1.2 m","2.1 m"],["Store room","3.0 m²","–","2.2 m"],["Private garage","3.0 × 6.0 m","–","2.4 m"],["Office-cum-letter-box room (cooperative housing)","3.6 × 3.0 m; up to 20 m² above 20 flats","–","–"]])}
<p>Heights are measured from the floor surface to the lowest point of the ceiling (bottom of slab). In air-conditioned rooms the clear height under a duct or false ceiling must be at least 2.4 m. Under a pitched roof, the <i>average</i> height must be 2.75 m and the clear headroom under eaves, beams or folded plates at least 2.4 m.</p>
<h2>Kitchens, baths and WCs: other rules</h2>
<ul>
<li>A kitchen needs a sink draining to a trapped waste, an impermeable floor, a flue if needed, and a window at least 25 % larger than a habitable room would need.</li>
<li>A bath or WC must have one wall to external air, or a window or ventilator of at least 0.3 m² (no side under 0.3 m) opening to a shaft or open space.</li>
<li>It must not sit over or under a room other than another WC, bath, washing place or terrace, unless the floor is watertight.</li>
<li>Walls finished smooth and impervious to at least 1 m height; floor impervious and sloping to the drain, not towards a verandah or room.</li>
<li>A WC may not open directly into a kitchen, and must have its own door.</li>
</ul>
<h2>Lofts, mezzanines and basements</h2>
${T(["Space","Rule"],[["Loft (ledge / tand)","Headroom below at least 2.2 m; loft height no more than 1.5 m; covers no more than 25 % of the room; must not block ventilation"],["Mezzanine","At least 2.2 m high; 9.5 m² or more if used as a living room (and then lit and ventilated like one); all mezzanines together ≤ one-third of the plinth area; not a kitchen, not subdivided or enclosed"],["Basement","At least 2.4 m clear; ceiling 0.9–1.2 m above average ground; never for living; only storage of non-combustibles, strong rooms, services and parking; watertight; separate access from the upper-floor stairs"]])}
<h2>Workplaces, schools and factories</h2>
${T(["Space","Requirement"],[["Office room, shop or workspace","At least 6.0 m², 2.1 m wide"],["Cabin","At least 3.0 m², 1.0 m wide; passages at least 0.75 m; no point more than 18.5 m from an exit; cabins without direct light and air limited to 2.2 m height"],["Educational buildings","Ceiling height 3.6 m (3.0 m in cold regions)"],["Industrial buildings","Ceiling height 3.6 m (3.0 m if air-conditioned), subject to the Factories Act"],["Creche","Room height 3.6 m; at least 1.86 m² per child"]])}
<h2>Other everyday dimensions</h2>
<ul>
<li>Plinth at least <b>450 mm</b> above the surrounding ground; interior courtyards and covered parking at least 150 mm above ground and drained.</li>
<li>Parapets and balcony railings between <b>1.0 and 1.2 m</b> (not required on roofs without stair access).</li>
<li>Chimneys at least 0.9 m above a flat roof, or 0.6 m above the ridge of a sloping roof.</li>
<li>Boundary walls up to 1.5 m above the street centre line, or 2.4 m with the top 0.9 m open; 0.75 m solid for 10 m on corner plots.</li>
<li>Swimming pools: shallow end 0.9–1.07 m deep; at most one bather per 1.86 m² of water surface; depth markings on walls and deck.</li>
</ul>`,
  src:`${MBBL}: clauses 3.4.6, 3.16.1, 4.2 to 4.15, 4.22 and 4.23. NBC 2016 Part 3 sets the same family of requirements.`, rel:["light-vent","stairs-exits","accessibility","development-controls"] },

/* =============================================================== */
{ id:"stairs-exits", cat:"Planning & layouts", title:"Stairs, corridors, doors and exits",
  lede:"In an emergency everyone leaves at once through the same stairs and doors. That is why exit widths depend on how many people use a floor, and why stair dimensions are fixed so tightly.",
  short:["Homes: stair at least 1.0 m wide, riser up to 190 mm, tread at least 250 mm. Other buildings: riser up to 150 mm, tread at least 300 mm.","No more than 12 risers in a flight; at least 2.2 m headroom everywhere on the stair.","Exits are sized in 50 cm units: one unit of stair carries 25 people in homes and 50 in offices."],
  body:`
<h2>Stair widths</h2>
${T(["Building type","Minimum stair width"],[["Residential dwellings","1.0 m (0.75 m for 2-storey row houses)"],["Residential hotels","1.5 m"],["Assembly: auditoria, theatres, cinemas","2.0 m"],["Educational","1.5 m"],["Institutional (hospitals)","2.0 m"],["All other buildings","1.5 m"]])}
<h2>Risers, treads and headroom</h2>
${T(["Dimension","Residential","Other buildings"],[["Maximum riser","190 mm","150 mm"],["Minimum tread (without nosing)","250 mm","300 mm"],["Risers per flight","12 maximum","12 maximum"],["Headroom on stair and under landings","2.2 m","2.2 m"]])}
<p>Check any stair in the <a href="#/tool/stairs">staircase tool</a>.</p>
<h2>Corridors</h2>
${T(["Building","Minimum corridor width"],[["Dwelling units","1.0 m"],["Hostels and similar","1.25 m"],["Assembly","2.0 m"],["Hotels and all other buildings","1.5 m"],["Hospitals and nursing homes","2.4 m"]])}
<h2>Doors</h2>
<ul>
<li>Exit doorways at least <b>1.0 m</b> wide (2.0 m in assembly and institutional buildings).</li>
<li>Open outwards (away from the room) but without obstructing travel; in a central-corridor building, room doors open inwards to keep the corridor flowing.</li>
<li>An open door must not reduce a stair or landing to less than 0.9 m. A landing at least as wide as the door is needed; doors never open directly onto a flight.</li>
<li>Openable from the inside without a key. No overhead, sliding or revolving doors as exits; no mirrors in exit routes.</li>
<li>Lifts and escalators are never counted as exits.</li>
</ul>
<h2>How many people a floor holds</h2>
${T(["Occupancy","Persons per 100 m²"],[["Residential","8"],["Educational","25"],["Institutional","6.6 (dormitories 13.3)"],["Assembly: fixed or loose seats, dining","166.6"],["Assembly: dance floors, standing","66.6"],["Mercantile: street floor and sales basement","33.3"],["Mercantile: upper floors","16.6"],["Business and industrial","10"],["Storage","3.3"],["Hazardous","10"]],"For assembly, the area includes connected rooms with a common entrance; corridors and closets are not deducted.")}
<h2>How many people an exit carries</h2>
${T(["Occupancy","Stairs","Ramps","Doors"],[["Residential, educational, institutional","25","50","75"],["Assembly","40","50","60"],["Business, mercantile, industrial, storage","50","60","75"],["Hazardous","25","30","40"]],"Persons per 50 cm unit of exit width. The <a href='#/tool/exits'>exit width tool</a> combines both tables for any floor.")}
<h2>Travel distance and arrangement</h2>
<ul>
<li>Maximum travel to an exit: <b>22.5 m</b> for residential, educational, institutional and hazardous uses; <b>30 m</b> for assembly, business, mercantile, industrial and storage. Dead-end travel is limited to half these values (6 m in institutional buildings).</li>
<li>Where more than one exit is needed, place them as far apart as possible, and make every exit reachable from the whole floor.</li>
<li>Office basements: travel distance up to 15 m, dead ends up to 7.5 m.</li>
</ul>
<h2>Fire escapes, spiral stairs and enclosures</h2>
<ul>
<li>External fire escapes do not count towards the number of stairs. They need straight flights at least 1.25 m wide, 250 mm treads, risers up to 190 mm, handrails at least 1.0 m high, non-combustible construction, and a direct connection to the ground.</li>
<li>Above 24 m, the fire escape of mercantile, business, assembly and hotel buildings must be a <b>fire tower</b>, as wide as the main stair.</li>
<li>Spiral stairs only for small occupant loads, up to 9 m height, at least 1.5 m in diameter.</li>
<li>Stair enclosures: walls of 2-hour fire resistance; self-closing 1-hour doors opening in the direction of escape; no glazing in internal walls; vented at each landing (or pressurised if in the core), with a permanent top vent equal to 5 % of the shaft area.</li>
</ul>`,
  src:`${MBBL}: clauses 4.13, 4.17, 4.24 (Tables 4.1 and 4.3), 11.8 and 11.10.`, rel:["fire","accessibility","room-sizes","lifts"] },

/* =============================================================== */
{ id:"parking", cat:"Planning & layouts", title:"Parking: how many spaces, and how much area",
  lede:"Parking is counted in Equivalent Car Spaces (ECS). An ECS is the space for one car, including its share of aisles and ramps. Here are the model norms for each use and how to turn them into area.",
  short:["Most uses need 2–3 ECS per 100 m² of floor area; public buildings 1.8; homes on plots above 300 m², 1 per 100 m².","Area per ECS in the model area statement: 23 m² open, 28 m² covered at ground, 32 m² in a basement.","Two accessible car spaces, at least 3.6 m wide, within 30 m of the entrance."],
  body:`
<h2>How many spaces</h2>
${T(["Use","Model norm"],[["Plotted housing","2 ECS on plots of 250–300 m²; 1 ECS per 100 m² of built-up area on plots above 300 m²"],["Group housing, cluster housing, guest houses, lodging, dharamshala","2 ECS per 100 m² built-up"],["Studio apartments, service apartments","2 ECS per 100 m²"],["Convenience and local shopping, service markets","2 ECS per 100 m² floor area"],["Community and district centres, city-centre retail","3 ECS per 100 m²"],["Hotels","3 ECS per 100 m²; plus 1 car per 4 guest rooms (cities of 2–10 lakh), per 3 rooms (10–50 lakh) or per 2 rooms (over 50 lakh)"],["Commercial at rail, metro and bus terminals; wholesale and freight complexes","3 ECS per 100 m²"],["Hospitals, nursing institutes, maternity homes","2 ECS per 100 m²"],["Veterinary hospitals and dispensaries","1.33 ECS per 100 m²"],["Integrated offices, PSU offices, district courts","1.8 ECS per 100 m²"],["Old-age homes, hostels, orphanages, night shelters","1.8 ECS per 100 m²"],["Head post office","1.33 ECS per 100 m²"],["Community hall, banquet hall, amusement park","3 ECS per 100 m²"],["Clubs, auditoria, cultural centres, science and convention centres, sports facilities","2 ECS per 100 m²"],["ISBT / metro","2 ECS per 100 m²"],["Industrial plots, flatted industry","2 ECS per 100 m²"],["Motels","1.67 ECS per 100 m²"],["Mixed land use","2 ECS per 100 m² built-up, within the premises (or pay for public / multi-level parking)"]],"Model Building Bye-Laws Table 3.1. Where a range is not given, the value is the minimum to be specified in the development plan. Table 3.2 gives simpler averages: residential 2.0, commercial 3.0, industrial 2.0, public 1.8, semi-public 2.0, mixed use 2.0.")}
<h2>Turning spaces into area</h2>
${T(["Where the parking is","Area per ECS"],[["Open (surface)","23 m²"],["Covered, ground floor or stilt","28 m²"],["Basement","32 m²"]],"From the model area statement (Appendix A-1). Many cities use other figures; use the local ones where they exist.")}
<p>Work it out in the <a href="#/tool/parking">parking tool</a>.</p>
<h2>Ramps, garages and multi-level parking</h2>
<ul>
<li>Basement and parking ramps at least <b>7.2 m</b> wide for two-way and <b>4.0 m</b> for one-way traffic; gradient no steeper than <b>1:10</b> for cars and 1:15 for heavy vehicles; 1:12 on curves and circular ramps.</li>
<li>Ramps may be built in setbacks if they leave fire-tender movement free, at a gradient no steeper than 1:10. Up to 25 % of the setback area may be sunk for light, air and basement access.</li>
<li>Private garage at least 3.0 × 6.0 m with 2.4 m headroom.</li>
<li>High-rise buildings may park in basements, stilts, podiums, or stacked and automated systems. A podium may continue the stilt floor, with front access, leaving at least 3 m from the plot line; its terrace may be landscaped.</li>
<li>A dedicated multi-storey parking building needs special permission, a plot of at least 2000 m² (1000 m² in hills) and at least 50 car spaces. Tradable FAR may be offered to developers in return.</li>
<li>Group housing open parking should use permeable paving rather than concrete.</li>
</ul>
<h2>Accessible parking</h2>
<p>For public buildings and large group housing: at least <b>two car spaces</b> near the entrance, no more than <b>30 m</b> from it, each at least <b>3.6 m</b> wide, marked with the wheelchair symbol, with guiding floor material or an audible guide to the entrance.</p>`,
  src:`${MBBL}: clauses 3.3 to 3.16 (Tables 3.1 and 3.2), 4.9, 4.24.7.1, 4.25.5, 4.28, 5.3, 8.3.4.2, 9.3 and Appendix A-1.`, rel:["accessibility","development-controls","drawings"] },

/* =============================================================== */
{ id:"accessibility", cat:"Planning & layouts", title:"Designing for everyone: access for persons with disabilities and the elderly",
  lede:"An accessible building can be reached, entered and used by a wheelchair user, someone with crutches, a person who cannot see well, an elderly visitor or a parent with a pram. The rules are specific and easy to check on drawings and on site.",
  short:["They apply to public buildings and to group housing on plots above 2000 m², not to private houses.","Ramps: at least 1.8 m wide, no steeper than 1:12, no longer than 9 m per run, handrails on both sides.","Each relevant floor needs an accessible entrance route, stair, lift (where lifts exist) and toilet."],
  body:`
<h2>Which buildings</h2>
<p>The model rules apply to buildings used by the public (educational, institutional, assembly, commercial, business, mercantile) and to group housing on plots over 2000 m². States classify buildings by who they must serve:</p>
${T(["Design for","Examples"],[["Ambulant disabled people (walking aids)","Higher secondary schools, conference and dance halls, sports centres and stadiums, swimming pools, police stations and courts, theatres, cinemas and auditoria, small offices up to 1400 m², cafés seating over 50"],["Non-ambulant people (wheelchairs)","Schools for children with disabilities, religious buildings, clubs for the elderly, post offices, banks, dispensaries, railway stations, shops and supermarkets (large-wheelchair standards on the ground floor)"],["Non-ambulant people using small wheelchairs","Public toilets in tourist areas, museums, libraries, universities and colleges, exhibition halls, hospital offices, car parks, airport and bus terminals, factories employing disabled people, large offices over 1400 m², tax, passport, pension and labour offices, cafés seating over 100"]])}
<h2>From the gate to the door</h2>
${T(["Element","Requirement"],[["Access path from gate and parking","At least 1800 mm wide, no steps, slope no more than 5 %, non-slip, kerbs blended to a common level"],["Accessible parking","Two car spaces within 30 m of the entrance, bay at least 3.6 m wide, signed"],["Ramp","At least 1800 mm wide, no steeper than 1:12, no longer than 9 m per run, non-slip finish"],["Handrails","800 mm high on both sides, extending 300 mm beyond top and bottom, 50 mm clear of the wall"],["Steps beside the ramp","Tread at least 300 mm, riser no more than 150 mm, handrails as above"],["Entrance door","At least 900 mm clear; threshold no higher than 12 mm; no step at the door"],["Landing at the entrance","At least 1800 × 2000 mm, with warning floor material at the top of the slope"]])}
<p>Check a ramp in the <a href="#/tool/ramp">ramp tool</a>.</p>
<h2>Inside</h2>
${T(["Element","Requirement"],[["Corridor from the accessible entrance","At least 1500 mm wide; level changes by 1:12 slopes with handrails; guiding floor material or audible guides"],["Accessible stair (one, near the entrance)","At least 1350 mm wide; riser ≤ 150 mm, tread 300 mm, no square nosings; ≤ 12 risers per flight; handrails both sides extending 300 mm"],["Lift (where lifts are required)","Car at least 1100 mm wide × 2000 mm deep, door 900 mm; handrail 600 mm long at 1000 mm height near controls; lobby 1800 × 2000 mm; doors stay open at least 5 s and close no faster than 0.25 m/s; audible floor announcements; Braille and graphic signs"],["Drinking water","Near the accessible toilet"],["Signage","Letters at least 20 mm high, contrasting colours, well lit; Braille boards at reachable height; nothing protruding into walkways; wheelchair symbol at lifts, toilets, stairs and parking"]])}
<h2>Toilets</h2>
${T(["Toilet type","Minimum size","Door","Other"],[["General accessible WC (in a set of toilets)","1500 × 1750 mm","900 mm, opening outwards","WC seat 500 mm high; grab rails 50 mm off the wall; washbasin near the entrance"],["For ambulant disabled people","1075 × 1650 mm (1450 mm deep from the door)","780 mm clear","Long handrail on the WC side; 900 mm between handrails; handrails 800 mm high"],["For small wheelchairs","1350 × 1500 mm","780 mm clear","WC centre 400 mm from the side wall and at least 950 mm from the other; 900 mm handrail"],["For large wheelchairs","1500 × 1750 mm","860 mm clear","WC centre 400 mm from the side wall and at least 1100 mm from the other; 900 mm handrail"]])}
<ul>
<li>Buildings without lifts: an accessible WC on every floor of buildings for ambulant disabled people, and on the ground floor of those for wheelchair users.</li>
<li>Buildings with lifts: an accessible WC on every floor.</li>
</ul>
<h2>Guiding and warning floor materials</h2>
<p>Textured or contrasting floor material that a cane or foot can feel, provided along the access path and parking, in lobbies leading to reception, lifts, stairs and toilets, where walkways meet traffic, at every change of level and the top and bottom of ramps, and in front of entrances and exits.</p>
<h2>Emergency evacuation</h2>
<p>Provide a <b>refuge area</b> at each fire-protected stair landing large enough for one or two wheelchairs, with 900 mm doors and an alarm switch between 900 and 1200 mm above the floor. Occupants can wait there until rescued.</p>
<h2>Seating in halls and stadiums</h2>
<ul><li>Theatres, concert halls, cinemas, auditoria: 1 wheelchair space per 250 seats up to 1000, then 1 per 500.</li><li>Stadiums: 1 per 1000 spectators up to 10,000, then 1 per 2000.</li></ul>
<h2>Children</h2>
<p>In buildings used mainly by children, lower the handrails (to about 760 mm) and fittings to suit them. Where heights other than the standard are needed, provide two sets of handrails.</p>
<div class="note">The <b>Harmonised Guidelines and Standards for Universal Accessibility in India (2021)</b>, notified under the Rights of Persons with Disabilities Rules, are now the national reference and go further than these minimums. For example, they recommend a larger unisex accessible toilet. Where the two differ, follow the stricter value.</div>`,
  src:`${MBBL}: chapter 8 (clauses 8.1 to 8.12) and clause 4.24.7.1.`, rel:["parking","stairs-exits","lifts","room-sizes"] },

/* =============================================================== */
{ id:"setbacks-height", cat:"Planning & layouts", title:"Open spaces around buildings, and how tall you can build",
  lede:"Open space around a building brings light and air, separates it from its neighbours and lets fire tenders reach it. The space required grows with height, and height itself is tied to the road the building faces.",
  short:["Open space on all sides grows with height: 3 m at 10 m, 5 m at 15 m, up to 16 m at 55 m and above.","Height may not exceed 1.5 × (road width + front open space), or the Master Plan limit.","High-rise: 6 m clear all round up to 40 m height, 9 m above that, able to carry a 45-tonne fire engine."],
  body:`
<h2>Open space by height</h2>
${T(["Building height (m)","Open space on all sides (m)"],[["10","3"],["15","5"],["18","6"],["21","7"],["24","8"],["27","9"],["30","10"],["35","11"],["40","12"],["45","13"],["50","14"],["55 and above","16"]],"Above 27 m, at least 9 m is needed on sides where no habitable rooms face. Below these heights, setbacks come from the Master / Zonal Plan.")}
<p>Use the <a href="#/tool/setback">open space and height tool</a> for any height and road width.</p>
<h2>High-rise buildings</h2>
<ul>
<li>A building is <b>high-rise</b> above 15 m (17.5 m with a 2.5 m stilt floor).</li>
<li>Peripheral open space: <b>6 m all round up to 40 m height, 9 m above that</b>, hard enough for a 45-tonne fire engine and kept free and motorable.</li>
<li>Approach road at least 9 m wide (18 m for multi-storey group housing); 9 m turning radius on bends; gate at least 6 m wide; any archway at least 5 m high.</li>
</ul>
<h2>Height</h2>
<ul>
<li>Maximum height = <b>1.5 × (road width + front open space)</b>, and never more than the Master Plan allows.</li>
<li>On a plot facing two or more streets, the building is taken to face the widest, and its height is governed by that street.</li>
<li>Near airports, height follows the Airports Authority's zoning maps and NOC (see <a href="#/guide/special-zones">special zones</a>).</li>
<li>Low-rise development is limited to 15 m, or 17.5 m where a stilt floor is built for parking.</li>
</ul>
<h2>What is not counted in height</h2>
<p>Roof tanks and supports up to 1.0 m; ventilation, air-conditioning, lift rooms and similar service structures; a stair cover (mumty) up to 3.0 m; chimneys, parapets and architectural features up to 1.5 m. Together they may not cover more than a third of the roof, and should be screened.</p>
<h2>What may project into open spaces</h2>
${T(["Item","Allowed"],[["Chhajja, cornice, weather shade","Up to 0.75 m wide; at least 2.2 m above floor level"],["Entrance canopy","Up to 4.5 m long and 2.4 m wide, with 2.2 m clear below; one per detached single-storey house, two for multi-storey houses"],["Roof-level balcony (residential)","Up to 1.2 m wide within your own land, reducing the required open space by no more than 30 %"],["Group housing balconies","1.2 m wide, up to 3.5 m² per bedroom and no more than 3 per flat; a 1.2 m drying balcony off a bathroom"],["Cupboards (residential)","Up to 0.75 m deep, up to 2.0 m long per habitable room; not in side setbacks on the ground floor"],["Pergola","One per floor, up to 3.5 m², 40 % open, 2.2 m clear"]])}
<h2>Not counted in covered area or FAR</h2>
<p>The lift machine room (the shaft is counted on one floor only); rockeries, wells, nurseries, uncovered pools, platforms round trees, fountains, benches, open chabutras; open ramps, compound walls, gates; uncovered staircases open on three sides except a 0.9 m railing; overhead tanks and open shafts; the stair cover on the top floor; culverts over municipal drains.</p>
<h2>Interior courtyards and shafts</h2>
<ul>
<li>A habitable room that does not face a front, rear or side open space must face an interior open space at least <b>3.0 m</b> in every direction (buildings up to 15 m / 17.5 m with stilts). Above that, mechanical ventilation is also required.</li>
<li>A sunken courtyard up to 3 m deep may light and ventilate a basement; a skylight over a courtyard is allowed if it does not create covered space.</li>
<li>Open spaces belong to the building and stay within the owner's land. If shared by several buildings of the same owner, the width is set by the tallest.</li>
</ul>`,
  src:`${MBBL}: clauses 4.25 to 4.29 (Table 4.4), 5.1 and 5.2.`, rel:["development-controls","fire","light-vent","special-zones"] },

/* =============================================================== */
{ id:"light-vent", cat:"Planning & layouts", title:"Daylight and natural ventilation",
  lede:"Every habitable room needs windows that open to fresh air. The rule is simple: window area is a fraction of floor area, and the fraction depends on the climate. Toilets without windows need a shaft sized to the building height.",
  short:["Openings, excluding doors, at least 1/10 of the floor area of habitable rooms and kitchens; more in humid and moderate climates.","No part of a room counts as lit if it is more than 7.5 m from a window.","Toilet ventilation shafts grow with building height, from 1.2 m² (up to 10 m) to 9 m² (above 30 m, with mechanical ventilation)."],
  body:`
<h2>How much window</h2>
${T(["Climate","Opening area as a fraction of floor area"],[["Hot and dry","1/10"],["Warm and humid","1/6"],["Moderate (intermediate)","1/8"],["Cold","1/12"]],"Doors and frames are not counted; for a partly fixed window count only the opening part. Whatever the climate, habitable rooms and kitchens need at least 1/10.")}
<ul>
<li>Add <b>25 %</b> for kitchens.</li>
<li>No part of a room counts as lit if it is more than <b>7.5 m</b> from the opening that lights it.</li>
<li>Windows may open onto a verandah no deeper than 2.4 m.</li>
<li>Courtyards used for light and air: at least <b>3 m × 3 m</b> for buildings up to 12.5 m.</li>
<li>Kitchens and toilets that do not face an open space may be mechanically ventilated.</li>
</ul>
<h2>Ventilation shafts for toilets and baths</h2>
${T(["Building height up to","Shaft area","Minimum side"],[["10 m","1.2 m²","0.9 m"],["12 m","2.8 m²","1.2 m"],["18 m","4.0 m²","1.5 m"],["24 m","5.4 m²","1.8 m"],["30 m","8.0 m²","2.4 m"],["Above 30 m","9.0 m²","3.0 m, plus mechanical ventilation"]],"Fully air-conditioned lodging buildings with uninterrupted power need not have shafts.")}
<h2>Artificial light and mechanical ventilation</h2>
<p>Where daylight and natural ventilation cannot meet the need, provide artificial lighting and mechanical ventilation as set out in NBC Part 8 (Building Services). Lighting loads, thermal comfort and fresh-air rates are taken from SP 41 for general buildings and SP 32 for industrial buildings.</p>`,
  src:`${MBBL}: clauses 4.25 to 4.30 (Table 4.5).`, rel:["room-sizes","setbacks-height"] },

/* =============================================================== */
{ id:"special-buildings", cat:"Planning & layouts", title:"Special buildings: schools, hospitals, hotels, halls, factories, pools",
  lede:"Some building types carry rules beyond the general ones: more space, wider exits, stricter fire protection, specific sanitation. This guide brings them together, with links to the detailed guides.",
  short:["Hospitals: corridors and ramps 2.4 m wide; a 2.4 m ramp exit for floors over 300 m²; plot area from 80 m² of floor per bed.","Schools: ceilings 3.6 m; one WC per 40 boys and per 25 girls in day schools.","Hotels: sprinklers above 15 m, or above 1000 m² per floor, or with a basement."],
  body:`
<h2>Hospitals and nursing homes</h2>
<ul>
<li>Plot area worked out at <b>80 m²</b> of gross floor area per bed (60 m² for nursing and maternity homes; up to 125 m² for super-speciality hospitals). Hospitals need at least 6000 m².</li>
<li>Coverage up to 40 % (plus 5 % for multi-level parking); FAR 2.50 to 3.75 depending on road width; no height limit, subject to airport, fire and other clearances.</li>
<li>Corridors at least <b>2.4 m</b>; stairs at least 2.0 m; exit doors at least 2.0 m; ramps for stretchers at least 2.4 m with handrails both sides.</li>
<li>Where a floor exceeds 300 m², one exit must be a <b>ramp at least 2.4 m wide</b>.</li>
<li>Water: 340 L per bed per day up to 100 beds, 450 L above. Zero sewage discharge and environment clearance (bio-medical waste) are required.</li>
<li>Fire: annual renewal of fire clearance; a qualified fire officer for hospitals 15 m and above or over 100 beds.</li>
</ul>
<h2>Schools and colleges</h2>
<ul>
<li>Ceiling height 3.6 m (3.0 m in cold regions); stairs 1.5 m; occupant load 25 persons per 100 m².</li>
<li>New schools recess the front boundary wall 6 m for visitor parking.</li>
<li>Educational buildings over two storeys with more than 1000 m² built-up need fire clearance.</li>
</ul>
${T(["Fitting","Day school: boys","Day school: girls","Boarding: boys","Boarding: girls","Nursery"],[["WC","1 per 40","1 per 25","1 per 8","1 per 6","1 per 15 boys, 1 per 6 girls"],["Urinal","1 per 20","–","1 per 25","–","1 per 12 boys"],["Wash basin","1 per 60","1 per 40","1 per 8","1 per 6","1 per 15"],["Bath","–","–","1 per 8","1 per 6","1 per 40"],["Drinking water","1 per 50","1 per 50","1 per 50","1 per 50","1 per 50"]],"Plus one cleaner's sink per floor and one water tap per 50 persons near the toilets. Teaching staff are provided for as in offices.")}
<h2>Hotels</h2>
<ul>
<li>Coverage 40 %, FAR 3.00 (1.75 in hills); 5 % of FAR for hotel-related commerce. Parking 3 ECS per 100 m² plus car spaces per guest room by city size.</li>
<li>Automatic sprinklers in all hotels 15 m and above, and in lower hotels with more than 1000 m² on a floor or with a basement.</li>
<li>Water: 180 L per bed per day (340 L in 5-star and above).</li>
<li>A qualified fire officer for 3-star and higher hotels, and for un-starred hotels above 15 m with 150 or more beds. Fire clearance renewed annually.</li>
</ul>
<h2>Assembly buildings: halls, cinemas, auditoria</h2>
<ul>
<li>Occupant load up to 166.6 persons per 100 m² (seated or dining) or 66.6 (standing). Each 50 cm unit of stair carries 40 people, of door 60.</li>
<li>Stairs and corridors at least 2.0 m; exit doors at least 2.0 m.</li>
<li>Wheelchair spaces: 1 per 250 seats up to 1000, then 1 per 500.</li>
<li>Water: 15 L per seat per day. Fire clearance renewed annually.</li>
</ul>
<h2>Factories and industrial buildings</h2>
<ul>
<li>Ceiling height 3.6 m (3.0 m if air-conditioned), subject to the Factories Act 1948. Approval of the Chief Inspector of Factories and the Pollution Control Board.</li>
<li>Light and service industry: maximum two storeys plus basement (basement counted in FAR); extensive industry: single storey with basement.</li>
<li>Creche where more than 15 women are employed.</li>
<li>Water: 45 L per head per day with bathrooms, 30 L without.</li>
</ul>
<h2>Swimming pools</h2>
<ul>
<li>A "pool" is one with water at least 60 cm deep and over 23.25 m² in area.</li>
<li>At most one bather per 1.86 m² of water surface.</li>
<li>Shallow end 0.9–1.07 m deep; floor slope in the shallow area no steeper than 1 in 2 m; walls vertical for at least 0.76 m.</li>
<li>Handrails at every ladder; depth markers on walls and deck, on both sides, at breaks of slope.</li>
<li>Underwater lights individually earthed and watertight; no overhead wiring within 20 ft (about 6 m) of the pool.</li>
</ul>
<h2>Other special buildings</h2>
<ul>
<li><b>Petrol pumps:</b> see the plot sizes and controls in the <a href="#/guide/development-controls">development controls guide</a>.</li>
<li><b>Basements of any building:</b> compartments of 50–500 m² (except parking), sprinklers if the basement is 200 m² or more.</li>
<li><b>Underground shopping complexes:</b> sprinklers, annual fire renewal, fire officer above 1000 m².</li>
</ul>`,
  src:`${MBBL}: clauses 3.6, 3.10, 3.11, 3.16.1, 4.3, 4.23, 4.24, 4.32, 11.8.3, 11.21, 11.25 and Tables 4.6, 4.11.`, rel:["fire","fire-systems","stairs-exits","water-sanitation"] },

/* =============================================================== */
{ id:"lifts", cat:"Planning & layouts", title:"Lifts: when required, how many, and how big",
  lede:"Lifts are mandatory in taller buildings, must serve every floor, and in an emergency one of them becomes the firefighters' lift. Here is what the rules require and the original sizing tables.",
  short:["Lifts are required in all buildings 15 m and above, serving every floor 24 hours a day.","Lift capacity is about 68 kg per person: an 8-person lift carries 544 kg, a 13-person 884 kg.","A fire lift holds at least 545 kg (8 persons) and reaches the top floor within one minute."],
  body:`
<h2>When lifts are required</h2>
<ul>
<li>All multi-storeyed buildings <b>15 m and above</b>. All floors must be served 24 hours a day.</li>
<li>Lifts are never a means of escape. A sign at every lift says to use the stairs in a fire, with the floor plan showing the stairways.</li>
<li>Where lifts are required in a public building, at least one must suit a wheelchair user (car 1100 × 2000 mm, door 900 mm).</li>
</ul>
<h2>How many lifts</h2>
<p>For non-residential buildings, the number of lifts is chosen so that the building's population can be moved in <b>50 minutes</b> at peak. Population is worked out from the useful carpet area (excluding verandahs, lobbies, halls, passages and toilets), and the ground and first floors are left out because they are rarely served by lifts. One extra lift of the same capacity may be added as a stand-by. Residential buildings use a simpler table by number of floors. Both tables are reproduced below.</p>
${REF("lifts")}
<h2>Lift capacity and well size</h2>
${T(["Persons","Load (kg)","Speed (typical)"],[["4","272","Up to 1 m/s"],["6","408","Up to 1 m/s"],["8","544","Up to 1 m/s"],["10","680","Up to 1.5 m/s"],["13","884","Up to 1.5 m/s"],["16","1088","Up to 1.5 m/s"],["20","1360","Up to 1.5 m/s"]],"Well, pit and machine-room sizes for each capacity are in Appendix D-1, reproduced below. Landing entrances are 2100 mm high. Where two or more lifts share a well, add 100 mm width per lift for the separator beam.")}
${REF("liftdims")}
<h2>Fire safety of lifts</h2>
<ul>
<li>Lift enclosure walls of 2-hour fire resistance, with a vent of at least 0.2 m² at the top of the shaft.</li>
<li>Landing doors and car doors with at least 1-hour fire resistance. In buildings 15 m and above, no collapsible gates: solid doors only.</li>
<li>No more than four lifts in a bank, separated by 2-hour walls.</li>
<li>Machine room preferably on top, separated by the floor, with no other machinery in it.</li>
<li>Lifts in the core: lobby pressurised to 25–30 Pa and shaft to about 50 Pa, operating automatically with the alarm or sprinklers; lobby exits through 1-hour self-closing smoke-check doors.</li>
<li>Lifts should not normally reach the basement; if they do, pressurise the basement lobby.</li>
<li>Fireman's grounding switch at ground floor; telephone / talk-back to the fire control room; floor slope at landings so firefighting water does not enter the shaft; alternate power supply for all lifts.</li>
</ul>
<h2>Fire lift</h2>
<ul>
<li>One or more lifts reserved for firefighters in an emergency, reaching every floor.</li>
<li>Car at least 1.4 m², at least <b>545 kg (8 persons)</b>, automatic doors.</li>
<li>Separate electric supply in a fire-safe route, with automatic changeover to the alternate supply (manual changeover allowed in apartments), or wired to return to ground and stand with doors open on power failure.</li>
<li>Controlled by a switch in a glass-fronted box at the entrance level; marked "FIRE LIFT" in fluorescent paint at every floor.</li>
<li>Must reach the top floor from the ground within <b>one minute</b>.</li>
</ul>`,
  src:`${MBBL}: clauses 4.31, 8.6, 11.9 and Appendices D and D-1.`, rel:["fire","accessibility","stairs-exits"] },

/* =============================================================== */
{ id:"fire", cat:"Fire & services", title:"Fire safety: when it applies, access and the approval process",
  lede:"Fire rules decide whether a building can be sanctioned at all, how fire tenders reach it and how people get out. This guide covers when the fire officer is involved, the process, access and the building features that keep a fire contained. The systems themselves are in the next guide.",
  short:["Fire clearance is needed for buildings 15 m and above, and for many uses below that: assembly, hospitals, hotels, larger schools, offices and shops, banquet halls, industry and storage.","Fire tenders need a 6 m clear, hard-surfaced space around the building (45-tonne loading for 15 m and above) and a 9 m turning radius.","Fire NOC comes twice: on the plans before sanction, and on the installation before the completion certificate."],
  body:`
<h2>Which buildings need fire clearance</h2>
<ul>
<li>All buildings <b>15 m or taller</b> (high-rise).</li>
<li>Assembly buildings, hotels, hospitals and nursing homes, meeting and banquet halls, underground complexes, industrial, storage and hazardous buildings.</li>
<li>Educational buildings over two storeys with more than 1000 m² built-up.</li>
<li>Business buildings on plots over 500 m²; mercantile buildings with more than 750 m² covered area.</li>
</ul>
<h2>The approval process</h2>
<ol>
<li>The Authority sends three sets of plans, with the fee, to the <b>Chief Fire Officer</b>. The plans show the complete fire protection and means of escape, with standard signs and a legend, signed by a licensed fire consultant or architect, with the fire questionnaire (Annexure D, on the <a href="#/form/firequest">forms page</a>).</li>
<li>The CFO checks the plans and returns two signed sets for implementation. The building is sanctioned only after this clearance.</li>
<li>After the installations are built, tested and certified by the fire consultant, the owner applies through the Authority for clearance.</li>
<li>The CFO inspects and issues the <b>No Objection Certificate</b> once everything works as approved. Deficiencies are reported for rectification. The completion certificate cannot be issued without the NOC.</li>
<li>Fire clearance is <b>renewed every year</b> for assembly and entertainment buildings, hospitals, hotels and underground shopping complexes.</li>
</ol>
<h2>Access for fire tenders</h2>
${T(["Item","Requirement"],[["Street the building fronts","At least 12 m wide (buildings needing fire clearance)"],["Approach road (high-rise)","At least 9 m; 18 m for multi-storey group housing; 20 m for group housing schemes per the access clause"],["Turning circle on bends","At least 9 m radius"],["Open space around the building","Up to 6 m wide, hard surface, motorable and kept clear; for high-rise, 6 m up to 40 m height and 9 m above"],["Load the surface must carry","22 tonnes (low-rise) / 45 tonnes (15 m and above), including basements below the access"],["Entrance gate","At least 5 m wide (6 m for high-rise), folding back against the wall; any archway at least 5 m high"],["Space between buildings in group housing","6 m"],["External windows","Not blocked by louvres, so rescue by hydraulic platform is possible"]])}
<h2>Means of escape</h2>
<p>Exits, travel distances, stair widths and fire escapes are covered in the <a href="#/guide/stairs-exits">stairs and exits guide</a>. In summary: travel distance 22.5 m or 30 m by occupancy; stairs in 2-hour enclosures with 1-hour self-closing doors; lifts are not exits; fire towers for tall mercantile, business, assembly and hotel buildings over 24 m.</p>
<h2>Containing a fire</h2>
<ul>
<li>Building elements (walls, columns, beams, floors) must have the fire-resistance ratings set out in NBC Part 4.</li>
<li>No combustible or toxic-smoke materials for partitions, wall panelling or false ceilings; surface spread of flame Class I; false-ceiling framing in metal, not wood.</li>
<li>Basements divided into compartments of 50–500 m² (except parking), each ventilated independently, partitions decided with the CFO. The first basement may hold services and parking.</li>
<li>Meter rooms in buildings over 15 m and in special occupancies with floors over 500 m²: on the ground floor with direct outside access and 2-hour fire-rated doors.</li>
<li>LPG is not allowed in high-rise buildings except for residential, hotel and hostel kitchens, and then at the periphery on the ground level.</li>
<li>Electrical: separate circuits for fire services, staircase and corridor lighting on independent supply, emergency lighting, automatic DG set where required, safety measures in sub-stations.</li>
</ul>
<h2>People and drills</h2>
<ul>
<li>A control room on the entrance floor with public address to all floors, floor plans and fire-equipment details, and detection indicator boards, manned round the clock by trained staff.</li>
<li>Fire orders approved by the CFO, and regular drills.</li>
<li>A qualified fire officer and trained staff in: high-rise buildings above 30 m with floors over 1000 m² (except apartments); 3-star and higher hotels, and other hotels above 15 m with 150 beds or more; hospitals 15 m and above or with more than 100 beds; underground shopping over 1000 m²; high-hazard industries.</li>
<li>Red aircraft warning lights on high-rise buildings, checked by the electrical department; high standards of housekeeping.</li>
</ul>
<div class="note">Detailed fire provisions (fire-resistance ratings, smoke control, refuge floors) are in NBC Part 4: Fire and Life Safety, and each State's Fire Service Act and rules. The CFO may require more than these minimums for unusual risks.</div>`,
  src:`${MBBL}: clauses 2.10.6, 4.16, 4.24, 5.1–5.2 and chapter 11.`, rel:["fire-systems","stairs-exits","lifts","special-buildings"] },

/* =============================================================== */
{ id:"fire-systems", cat:"Fire & services", title:"Fire-fighting systems: which building needs what",
  lede:"Extinguishers, hose reels, wet risers, sprinklers, alarms, tanks and pumps: the requirement depends on the occupancy and the height. The bye-laws set it out in large tables, reproduced below in full, with a plain-language summary of the key triggers.",
  short:["Sprinklers: all buildings 24 m and above (45 m for group housing), all hotels, mercantile and institutional buildings 15 m and above, and any basement of 200 m² or more.","A fire alarm system in all buildings 15 m and above, and residential buildings above 24 m.","Fire water is reserved: an underground static tank refilled at 1000 L/min, kept separate from domestic use."],
  body:`
<h2>How to read the requirement tables</h2>
<ol>
<li>Find the building's occupancy group and zone in <b>Annexure A</b>. Zone I covers residential, most educational, institutional, assembly up to 300 persons, business and small shops. Zone II covers larger institutional, assembly and mercantile. Zone III covers high-hazard industry, large hospitals and storage.</li>
<li>Open the table for that zone (B-I, B-II or B-III) and find the column for the height band: for example I = below 15 m, II = 15–24 m, III = above 24 m.</li>
<li>Read down the 23 measures: <b>P</b> = to be provided, <b>X</b> = not required, <b>S</b> = sprinklers if the basement is 200 m² or more, <b>FS</b> = fully sprinklered. Numbers refer to the notes under the table.</li>
<li>Size the tanks and pumps from <b>Annexure C</b>.</li>
</ol>
${REF("fire-occupancy")}
${REF("fire-zone1")}
${REF("fire-zone2")}
${REF("fire-zone3")}
${REF("fire-water")}
<h2>The 23 measures</h2>
<p>Access, means of escape, compartmentation, refuge area, emergency lights, illuminated exit signs, PA system with talk-back, manually operated electric fire alarm (MOEFA), extinguishers, hose reels, yard hydrants, down-comers, wet risers, fire detection, automatic sprinklers, underground tank, overhead tank, fire pumps, booster (terrace) pumps, auto DG set, MCB / ELCB, hose boxes with delivery hoses and branch pipes, and the fireman's grounding switch in lifts.</p>
<h2>Automatic sprinklers: where they are required</h2>
<ul>
<li>All buildings <b>24 m and above</b>, except group housing, where the limit is <b>45 m</b>.</li>
<li>Hotels below 15 m with more than 1000 m² on any floor, or with a basement; all hotels, mercantile and institutional buildings 15 m and above.</li>
<li>Mercantile buildings below 15 m with more than one basement (floor area up to 750 m²).</li>
<li>Underground shopping complexes; underground or enclosed car and scooter parking; any basement of <b>200 m²</b> or more.</li>
<li>Any special hazard where the CFO considers it necessary.</li>
<li>Where sprinklers are provided voluntarily in buildings up to 24 m, automatic detection and manual call points need not be insisted on, and extinguishers may be halved.</li>
</ul>
<h2>Fire alarms</h2>
<ul>
<li>All buildings <b>15 m and above</b>, and residential buildings (houses, boarding houses, hostels) above 24 m, need a fire alarm system.</li>
<li>Residential buildings: a manually operated electrical system with break-glass call boxes on every floor, so that nobody travels more than 22.5 m to one, mounted with the base at 1.5 m, wired in a closed circuit to a control panel that shows the floor, with batteries for <b>48 hours</b> at full load on trickle charge, and sounders that warn the whole floor.</li>
<li>Other buildings: automatic detection in addition to the manual system. Where sprinklers are installed, automatic detection may be waived by the CFO.</li>
</ul>
<h2>Water, pumps and hoses</h2>
<ul>
<li>An <b>underground static tank</b> exclusively for fire fighting, accessible to fire tenders, replenished from the town main or another source at <b>1000 L/min</b>. Its cover slab carries 45 t (high-rise) or 22 t (low-rise) if it lies under the access way. A fire-brigade collecting head with four 63 mm inlets feeds it (not needed where a down-comer is provided).</li>
<li>The domestic suction tank is fed through an overflow, so the fire reserve is never drawn down.</li>
<li>Wet risers and down-comers have fire-service inlets (2 to 4 × 63 mm for 100–200 mm mains) so mobile pumps can boost pressure.</li>
<li>Hose-reel rubber hose at least 20 mm internal diameter, with a 5 mm shut-off nozzle.</li>
<li>Fire pumps with positive suction, a ventilated pump house, 1.0 m clear around each pump, and proper test and control panels.</li>
<li>Where a hose reel is provided, water-type extinguishers may be halved.</li>
<li>In mixed occupancy, provide for the highest class present.</li>
</ul>
<h2>Fixed systems</h2>
<p>Fixed CO₂, foam or water-spray (drencher) systems are installed where the CFO considers that medium necessary, for example in transformer rooms, DG rooms or special-hazard stores.</p>`,
  src:`${MBBL}: clauses 11.19 to 11.28 and Annexures A, B-I, B-II, B-III and C (reproduced).`, rel:["fire","special-buildings","lifts","water-sanitation"] },

/* =============================================================== */
{ id:"water-sanitation", cat:"Fire & services", title:"Water demand, toilets, septic tanks and drainage",
  lede:"How much water a building needs, how many toilets it must have, and how septic tanks and soak pits must be built and placed.",
  short:["Homes need 135 litres per person per day; offices 45; hospitals 340–450 per bed.","Offices and shops: one WC per 25 persons; for women, one per 15.","Soak pits and dispersion trenches at least 18 m from any well and 6 m from buildings."],
  body:`
<h2>Daily water requirement</h2>
${T(["Use","Litres per head per day"],[["Homes, hostels","135"],["Hotels (per bed)","180"],["Hotels, 5-star and above (per bed)","340"],["Day schools","45"],["Boarding schools","135"],["Hospitals up to 100 beds (per bed)","340"],["Hospitals over 100 beds (per bed)","450"],["Medical quarters and hostels","135"],["Government and semi-public offices","45"],["Other business buildings","45"],["Restaurants (per seat)","70"],["Cinemas, auditoria (per seat)","15"],["Factories with bathrooms / without","45 / 30"],["Storage, warehouses, hazardous","30"],["Visitors' toilets in public buildings (per use)","7"],["Intermediate railway stations / junctions","45 (25) / 70 (45)"]],"Values in brackets apply where bathing facilities are not provided.")}
<p>Turn this into tank sizes with the <a href="#/tool/water-tank">water tank tool</a>. Fire-fighting storage is separate and set by the fire tables.</p>
<h2>Toilets in shops and offices</h2>
${T(["Fitting","Requirement"],[["Water closet","1 per 25 persons (or part over 15); for women, 1 per 15 (or part over 10)"],["Wash basin","1 per 25 persons"],["Urinal","As for government and public offices"],["Drinking water","1 per 100 persons, at least one on each floor"],["Cleaner's sink","At least one per floor, near the toilets"]],"Customers are counted as the average number present during the busiest hour. A 1:1 ratio of men to women may be assumed. Count fixtures with the <a href='#/tool/fixtures'>fixtures tool</a>.")}
<p>Schools, hotels, hospitals, assembly buildings, restaurants, factories, stations and public toilets each have their own tables in the bye-laws (Tables 4.9 to 4.24); the school table is in the <a href="#/guide/special-buildings">special buildings guide</a>.</p>
<h2>Septic tanks</h2>
${T(["Item","Requirement"],[["Minimum size","750 mm wide, 1 m liquid depth, 1 m³ liquid capacity"],["Proportion","Length 2 to 4 times the width"],["Materials","Brickwork, stone masonry, concrete or other approved material"],["Pipes","At least 100 mm; branches join at no more than 45° to the flow in manholes"],["Vent pipe","At least 50 mm with mosquito mesh; about 2 m high if the tank is 15 m or more from buildings, otherwise 2 m above the nearest building"],["Effluent","Never into an open drain or water body without treatment"]])}
<h2>Soak pits and dispersion trenches</h2>
<ul>
<li>At least <b>18 m</b> from any drinking-water source, and at least <b>6 m</b> from habitable buildings.</li>
<li>Soak pit: least dimension 0.9 m, at least 1.0 m deep below the inlet invert; lined with open-jointed stone, brick or blocks backed by 75 mm of coarse aggregate, or filled with loose stones if unlined; inlet taken 0.9 m down as an anti-mosquito measure; a masonry ring at the top against surface runoff.</li>
<li>Dispersion trench: 0.5–1.0 m deep, 0.3–1.0 m wide, 150–250 mm of washed gravel, open-jointed pipes of 75–100 mm, no longer than 30 m, at least 1.8 m apart; bottom gradient 1:300 to 1:400.</li>
</ul>
<h2>Sewage treatment and reuse</h2>
<ul>
<li>Larger developments install a sewage treatment plant able to treat <b>100 %</b> of their wastewater.</li>
<li>Residential plots over 2000 m² and non-residential plots over 1 ha: separate pipes for sewage and sullage (grey water), so grey water can be reused for gardening and washing.</li>
<li>Hospitals: zero sewage discharge, with treated water reused for horticulture, flushing and cooling towers.</li>
<li>Public buildings provide segregated visitors' toilets outside the main block.</li>
</ul>`,
  src:`${MBBL}: clauses 2.10.7, 4.5, 4.15, 4.32 to 4.37 and Tables 4.6, 4.9, 4.11. Detailed provisions are in NBC Part 9: Plumbing Services.`, rel:["rwh","special-buildings","fire-systems"] },

/* =============================================================== */
{ id:"rwh", cat:"Fire & services", title:"Rainwater harvesting and groundwater recharge",
  lede:"Roofs and paved areas shed a great deal of water. Harvesting stores it for use or sends it back into the ground, and in most cities it is now a condition of sanction and of the completion certificate.",
  short:["Mandatory for plots of 100 m² and above; recharge mandatory for plots of 500 m² and above.","A 100 m² roof can yield about 55,000 litres a year.","The Authority inspects the system before issuing a completion certificate or service connections."],
  body:`
<h2>Who must provide it</h2>
${T(["Building","Plot size","What to provide"],[["Plotted houses (new)","100 m² and above","Harvesting structure, with emphasis on storage and reuse"],["Group housing","All","Harvesting structure; permeable paving (not concrete) in open parking; storm drainage, harvesting and recharge well shown on plans"],["Public and semi-public buildings","All","Harvesting with storage, and recharge pits"],["Commercial and mixed use","All","Harvesting; soft landscape and percolation pits; a common treatment plant in integrated developments"],["Industrial","All","As commercial, plus reuse of abandoned bore wells for recharge; never inject contaminated water"],["Public open spaces (parks, parking, plazas, playgrounds)","Above 500 m²","Capture and use all storm water: well-cum-channel-cum-percolation pits, recharge bores, storage of runoff"]],"Groundwater recharge is mandatory for all buildings, including group housing, on plots of 500 m² and above.")}
<h2>How much water</h2>
<p>Annual harvest ≈ catchment area × annual rainfall × runoff coefficient. The bye-laws use about <b>55,000 litres per 100 m²</b> of roof per year as a guide. Try your own roof and rainfall in the <a href="#/tool/rwh">harvesting tool</a>.</p>
<h2>The parts of a system</h2>
<ol><li>Roof catchment</li><li>Gutters</li><li>Down pipes</li><li>Rainwater and storm-water drains</li><li>Filter chamber (with first-flush arrangement)</li><li>Storage tank, pit or sump</li><li>Recharge structure: pit, trench, tube well or a combination</li></ol>
<h2>Good practice</h2>
<ul>
<li>Use roof water for storage or recharge. Never let sewage, kitchen or industrial waste into a recharge structure.</li>
<li>Keep recharge structures away from septic tanks, soak pits, sewers and landfill.</li>
<li>Discard the first flush of the season, which carries most of the dirt.</li>
<li>Rainwater pipes run outside the walls or in chases, and may be connected to a drain, sewer or road gutter as the Authority directs.</li>
</ul>
<h2>Enforcement</h2>
<p>The Authority sets up a rainwater harvesting cell to enforce and monitor the provisions, inspects the structures before issuing completion certificates or NOCs for service connections, and may involve resident welfare associations in building and maintaining public recharge structures.</p>`,
  src:`${MBBL}: clauses 2.10.7, 4.18 and chapter 9 (Table 9.1), Annexure II.`, rel:["water-sanitation","approvals"] }
);
