/* ===================== TOOLS ===================== */
(function(){
const TAUC = { pt:[0.15,0.25,0.50,0.75,1.00,1.25,1.50,1.75,2.00,2.25,2.50,2.75,3.00],
  20:[0.28,0.36,0.48,0.56,0.62,0.67,0.72,0.75,0.79,0.81,0.82,0.82,0.82], 25:[0.29,0.36,0.49,0.57,0.64,0.70,0.74,0.78,0.82,0.85,0.88,0.90,0.92],
  30:[0.29,0.37,0.50,0.59,0.66,0.71,0.76,0.80,0.84,0.88,0.91,0.94,0.96], 35:[0.29,0.37,0.50,0.59,0.67,0.73,0.78,0.82,0.86,0.90,0.93,0.96,0.99],
  40:[0.30,0.38,0.51,0.60,0.68,0.74,0.79,0.84,0.88,0.92,0.95,0.98,1.01] };
const TAUCMAX = {20:2.8,25:3.1,30:3.5,35:3.7,40:4.0};
const K2 = { z:[10,15,20,30,50,100,150,200,250,300,350,400,450,500],
  1:[1.05,1.09,1.12,1.15,1.20,1.26,1.30,1.32,1.34,1.35,1.35,1.35,1.35,1.35], 2:[1.00,1.05,1.07,1.12,1.17,1.24,1.28,1.30,1.32,1.34,1.35,1.35,1.35,1.35],
  3:[0.91,0.97,1.01,1.06,1.12,1.20,1.24,1.27,1.29,1.31,1.32,1.34,1.35,1.35], 4:[0.80,0.80,0.80,0.97,1.10,1.20,1.24,1.27,1.28,1.30,1.31,1.32,1.33,1.34] };
const interp=(xs,ys,x)=>{ if(x<=xs[0])return ys[0]; if(x>=xs[xs.length-1])return ys[ys.length-1]; for(let i=1;i<xs.length;i++) if(x<=xs[i]) return ys[i-1]+(ys[i]-ys[i-1])*(x-xs[i-1])/(xs[i]-xs[i-1]); };
const fmt=(x,d=2)=>isFinite(x)?Number(x).toLocaleString("en-IN",{maximumFractionDigits:d,minimumFractionDigits:d}):"–";
const kpi=(l,v,u="")=>`<div class="kpi"><div class="l">${l}</div><div class="v">${v} <span class="u">${u}</span></div></div>`;
const sel=(id,label,opts,def,hint)=>`<label>${label}${hint?` <span class="hint">${hint}</span>`:""}<select id="${id}">${opts.map(([v,t])=>`<option value="${v}" ${String(v)===String(def)?"selected":""}>${t}</option>`).join("")}</select></label>`;
const num=(id,label,def,step="any",hint)=>`<label>${label}${hint?` <span class="hint">${hint}</span>`:""}<input id="${id}" type="number" value="${def}" step="${step}" inputmode="decimal"></label>`;
const V=id=>parseFloat(document.getElementById(id).value), S=id=>document.getElementById(id).value;
const verdict=(ok,msg,warn)=>`<div class="verdict ${ok?"ok":warn?"warn":"bad"}">${msg}</div>`;
const note=t=>`<p class="small muted" style="margin-top:10px">${t}</p>`;

SITE.tools = [
/* ---------------- Planning & compliance ---------------- */
{ id:"far", group:"Planning & compliance", name:"What can I build on this plot?", guide:"development-controls",
  desc:"Coverage, total floor area, dwelling units and height for a residential plot from the model controls.",
  form:()=>`<div class="form">${num("fA","Plot area (m²)",200,1)}${num("fRoad","Width of the road in front (m)",9,0.5)}${num("fFront","Front open space / setback (m)",3,0.5)}</div>`,
  run(){ const A=V("fA"), road=V("fRoad"), fo=V("fFront");
    const T=[[30,75,1.5,1,8],[50,75,1.5,2,8],[100,65,1.8,3,12],[250,65,1.8,3,12],[500,55,1.65,6,15],[1000,45,1.2,8,15],[1500,40,1.0,8,15],[3000,33.3,1.0,12,15]];
    if(A>3000) return verdict(false,"Above 3000 m² the plotted-housing table does not apply; group housing or layout rules govern.",true);
    const r=T.find(x=>A<=x[0]); const hRoad=1.5*(road+fo); const h=Math.min(r[4],hRoad);
    return `<div class="kpis">${kpi("Max ground coverage",fmt(A*r[1]/100,0),"m² ("+r[1]+" %)")}${kpi("Max total floor area",fmt(A*r[2],0),"m² (FAR "+r[2]+")")}${kpi("Dwelling units",r[3])}${kpi("Max height",fmt(h,1),"m")}</div>
    <div class="work">Plot ${fmt(A,0)} m² → band up to ${r[0]} m²: coverage ${r[1]} %, FAR ${r[2]}, ${r[3]} DU, height ${r[4]} m
Height also limited to 1.5 × (road ${road} + front space ${fo}) = ${fmt(hRoad,1)} m → ${fmt(h,1)} m
Floors at ~3 m each ≈ ${Math.floor(h/3)}; floor area per floor if built to full coverage ≈ ${fmt(A*r[1]/100,0)} m²</div>
    ${note("Model values from the Model Building Bye-Laws 2016, Table 3.3. Your Master Plan, setbacks, parking and height rules may allow less. Basements may not exceed the ground coverage.")}`; } },
{ id:"setback", group:"Planning & compliance", name:"Open space and height check", guide:"setbacks-height",
  desc:"Required open space around a building of a given height, and the height allowed by the road.",
  form:()=>`<div class="form">${num("sbH","Proposed building height (m)",24,0.5)}${num("sbRoad","Road width (m)",12,0.5)}${num("sbFront","Front open space provided (m)",8,0.5)}${num("sbSide","Smallest side / rear open space provided (m)",8,0.5)}</div>`,
  run(){ const H=V("sbH"), rd=V("sbRoad"), fo=V("sbFront"), sd=V("sbSide");
    const hs=[10,15,18,21,24,27,30,35,40,45,50,55], os=[3,5,6,7,8,9,10,11,12,13,14,16];
    let req = H<=10?3: H>=55?16: (()=>{for(let i=1;i<hs.length;i++) if(H<=hs[i]) return os[i]; })();
    const hmax=1.5*(rd+fo), high=H>15;
    const iss=[]; if(fo<req) iss.push(`Front open space ${fo} m is less than ${req} m.`); if(sd<req) iss.push(`Side/rear open space ${sd} m is less than ${req} m.`); if(H>hmax) iss.push(`Height ${H} m exceeds 1.5 × (road + front space) = ${fmt(hmax,1)} m.`); if(high && rd<12) iss.push(`High-rise buildings needing fire clearance should front a street at least 12 m wide.`);
    return `${verdict(!iss.length, !iss.length?"Open spaces and height are within the model limits.":"Check the items below.")}
    <div class="kpis">${kpi("Open space required",req,"m all round")}${kpi("Height allowed by road",fmt(hmax,1),"m")}${kpi("High-rise?",high?"Yes":"No",high?"> 15 m":"")}</div>
    ${iss.length?`<ul>${iss.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
    ${note("Table 4.4 steps: 10 m → 3 m, 15 → 5, 18 → 6, 21 → 7, 24 → 8, 27 → 9, 30 → 10, 35 → 11, 40 → 12, 45 → 13, 50 → 14, 55+ → 16 m (heights between steps take the next step). Above 27 m, 9 m is enough on sides with no habitable rooms. For high-rise, keep 6 m clear all round up to 40 m height (9 m above), hard enough for a 45 t fire engine.")}`; } },
{ id:"parking", group:"Planning & compliance", name:"Parking requirement", guide:"parking",
  desc:"Car spaces (ECS) required for a use and floor area, and the parking area needed.",
  form:()=>`<div class="form">${sel("pUse","Use",[["plot","Plotted housing"],["gh","Group / cluster housing, guest house, studio or service apartments"],["shop2","Local shopping, service market"],["com3","Community / district centre, city retail, hotel"],["hosp","Hospital, nursing institute"],["pub","Integrated office, court, old-age home, hostel"],["hall","Community hall, banquet hall"],["club","Club, auditorium, cultural or sports centre"],["ind","Industrial"],["vet","Veterinary hospital, head post office"],["motel","Motel"],["mixed","Mixed land use"]],"gh")}
  ${num("pArea","Built-up / floor area (m²)",1200,10)}${num("pPlot","Plot area (m²)",600,10,"for plotted housing")}
  ${sel("pWhere","Where will cars park?",[["23","Open, surface"],["28","Covered, ground floor / stilt"],["32","Basement"]],"28")}</div>`,
  run(){ const u=S("pUse"), A=V("pArea"), P=V("pPlot"), per=V("pWhere");
    const rate={gh:2,shop2:2,com3:3,hosp:2,pub:1.8,hall:3,club:2,ind:2,vet:1.33,motel:1.67,mixed:2}[u]; let ecs, how;
    if(u==="plot"){ if(P<250){ecs=0;how="Plots under 250 m²: the model table sets no figure; follow local bye-laws";} else if(P<=300){ecs=2;how="Plots of 250–300 m²: 2 ECS";} else {ecs=A/100;how=`Plots above 300 m²: 1 ECS per 100 m² built-up = ${fmt(A,0)} / 100`;} }
    else { ecs=rate*A/100; how=`${rate} ECS per 100 m² × ${fmt(A,0)} m²`; }
    const n=Math.ceil(ecs-1e-9);
    return `<div class="kpis">${kpi("Car spaces (ECS)",n)}${kpi("Parking area",fmt(n*per,0),"m²")}${kpi("Accessible spaces","2","within 30 m")}</div>
    <div class="work">${how} = ${fmt(ecs,2)} → provide ${n} ECS
Area = ${n} × ${per} m² per ECS = ${fmt(n*per,0)} m²</div>
    ${note("Model norms from the Model Building Bye-Laws 2016, Table 3.1. Hotels also need car spaces per guest room. Accessible spaces apply to public buildings and large group housing. Local bye-laws may differ.")}`; } },
{ id:"exits", group:"Planning & compliance", name:"Exit width for a floor", guide:"stairs-exits",
  desc:"Occupant load of a floor and the stair, ramp and door widths needed to evacuate it.",
  form:()=>`<div class="form">${sel("eOcc","Occupancy",[["res","Residential"],["edu","Educational"],["inst","Institutional"],["asm","Assembly (seated / dining)"],["asm2","Assembly (standing)"],["mer1","Mercantile: street floor / sales basement"],["mer2","Mercantile: upper floor"],["bus","Business"],["indu","Industrial"],["sto","Storage"],["haz","Hazardous"]],"bus")}${num("eA","Floor area (m²)",800,10)}</div>`,
  run(){ const o=S("eOcc"), A=V("eA");
    const load={res:8,edu:25,inst:6.6,asm:166.6,asm2:66.6,mer1:33.3,mer2:16.6,bus:10,indu:10,sto:3.3,haz:10}[o];
    const g={res:"r",edu:"r",inst:"r",asm:"a",asm2:"a",mer1:"b",mer2:"b",bus:"b",indu:"b",sto:"b",haz:"h"}[o];
    const cap={r:[25,50,75],a:[40,50,60],b:[50,60,75],h:[25,30,40]}[g];
    const minStair={res:1.0,edu:1.5,inst:2.0,asm:2.0,asm2:2.0,mer1:1.5,mer2:1.5,bus:1.5,indu:1.5,sto:1.5,haz:1.5}[o];
    const P=Math.ceil(load*A/100), u=cap.map(c=>Math.ceil(P/c));
    return `<div class="kpis">${kpi("Occupants",P)}${kpi("Total stair width",fmt(u[0]*0.5,1),"m")}${kpi("Total door width",fmt(u[2]*0.5,1),"m")}${kpi("Min. width of each stair",fmt(minStair,1),"m")}</div>
    <div class="work">Occupant load = ${load} / 100 m² × ${fmt(A,0)} m² = ${P} persons
One 50 cm unit carries: stairs ${cap[0]}, ramps ${cap[1]}, doors ${cap[2]}
Stairs ${u[0]} units = ${fmt(u[0]*0.5,1)} m; ramps ${u[1]} units = ${fmt(u[1]*0.5,1)} m; doors ${u[2]} units = ${fmt(u[2]*0.5,1)} m</div>
    ${note("This is the total exit width. Split it between stairs placed as far apart as possible; each stair must still meet its minimum width. Travel distance limits also apply (22.5 m or 30 m).")}`; } },
{ id:"ramp", group:"Planning & compliance", name:"Ramp check", guide:"accessibility",
  desc:"Check a wheelchair or vehicle ramp against gradient, width and length limits.",
  form:()=>`<div class="form">${sel("rType","Ramp for",[["acc","Wheelchair / pedestrian access"],["car","Cars to basement or parking floor"],["heavy","Heavy vehicles"],["hosp","Hospital (stretcher) exit ramp"]],"acc")}
  <div class="two">${num("rRise","Height to climb (mm)",600,10)}${num("rLen","Horizontal length (mm)",7200,50)}</div>${num("rW","Clear width (mm)",1800,50)}${sel("rWay","Traffic",[["1","One-way"],["2","Two-way"]],"1","vehicle ramps")}</div>`,
  run(){ const t=S("rType"), h=V("rRise"), L=V("rLen"), W=V("rW"), way=S("rWay"); const g=L/h; const iss=[];
    if(t==="acc"){ if(g<12) iss.push(`Gradient 1:${fmt(g,1)} is steeper than 1:12.`); if(W<1800) iss.push(`Width ${W} mm is less than 1800 mm.`); if(L>9000) iss.push(`Run of ${fmt(L/1000,1)} m exceeds 9 m; add a level landing.`); }
    else if(t==="hosp"){ if(g<10) iss.push(`Gradient 1:${fmt(g,1)} is steeper than 1:10.`); if(W<2400) iss.push(`Width ${W} mm is less than 2400 mm.`); }
    else { const lim=t==="car"?10:15; if(g<lim) iss.push(`Gradient 1:${fmt(g,1)} is steeper than 1:${lim}.`); const wmin=way==="2"?7200:4000; if(W<wmin) iss.push(`Width ${W} mm is less than ${wmin} mm for ${way==="2"?"two":"one"}-way traffic.`); }
    const lim = t==="acc"?12:t==="car"?10:t==="hosp"?10:15;
    return `${verdict(!iss.length, !iss.length?"This ramp meets the model requirements.":"This ramp does not comply.")}
    <div class="kpis">${kpi("Gradient","1 : "+fmt(g,1))}${kpi("Slope",fmt(100*h/L,1),"%")}${kpi("Length needed at the limit",fmt(h*lim/1000,2),"m")}</div>
    ${iss.length?`<ul>${iss.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
    ${note(t==="acc"?"Also: 800 mm handrails both sides extending 300 mm, non-slip finish, a 1800 × 2000 mm landing at the door, guiding floor material. The national Harmonised Guidelines may require more.":t==="hosp"?"Hospital ramps need handrails on both sides and must lead directly to open space at ground level.":"Curved ramps: no steeper than 1:12. Ramps lead directly to open space at ground level.")}`; } },
{ id:"stairs", group:"Planning & compliance", name:"Staircase check", guide:"stairs-exits",
  desc:"Riser, tread, width and number of steps for a flight, checked against the rules.",
  form:()=>`<div class="form">${sel("sB","Building type",[["res","Residential dwelling"],["hotel","Residential hotel"],["asm","Assembly"],["edu","Educational"],["inst","Institutional (hospital)"],["oth","Other"],["acc","Accessible stair (public building)"]],"res")}
  ${num("sH","Floor-to-floor height (mm)",3000,10)}<div class="two">${num("sR","Proposed riser (mm)",150,1)}${num("sT","Proposed tread (mm)",280,5)}</div>${num("sW","Clear width (mm)",1000,10)}</div>`,
  run(){ const b=S("sB"), H=V("sH"), R=V("sR"), Tt=V("sT"), W=V("sW"); const res=b==="res";
    const rmax=res?190:150, tmin=res?250:300, wmin={res:1000,hotel:1500,asm:2000,edu:1500,inst:2000,oth:1500,acc:1350}[b];
    const n=Math.ceil(H/R), rA=H/n, fl=Math.ceil(n/12), iss=[];
    if(rA>rmax) iss.push(`Riser ${fmt(rA,0)} mm exceeds ${rmax} mm.`); if(Tt<tmin) iss.push(`Tread ${Tt} mm is less than ${tmin} mm.`); if(W<wmin) iss.push(`Width ${W} mm is less than ${wmin} mm.`);
    const bl=2*rA+Tt;
    return `${verdict(!iss.length, !iss.length?"This stair meets the model requirements.":"This stair does not comply.")}
    <div class="kpis">${kpi("Risers",n)}${kpi("Actual riser",fmt(rA,1),"mm")}${kpi("Flights (≤ 12 risers)",fl)}${kpi("Going (plan length)",fmt((n-fl)*Tt/1000,2),"m")}</div>
    ${iss.length?`<ul>${iss.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
    <div class="work">Risers = ⌈${H} / ${R}⌉ = ${n}; actual riser ${fmt(rA,1)} mm
Limits: riser ≤ ${rmax} mm, tread ≥ ${tmin} mm, width ≥ ${wmin} mm, ≤ 12 risers per flight, headroom ≥ 2.2 m
Comfort (good practice, not a code rule): 2R + T = ${fmt(bl,0)} mm ${bl>=600&&bl<=640?'<span class="okc">comfortable</span>':'<span class="warnc">outside the usual 600–640 mm</span>'}</div>`; } },
{ id:"water-tank", group:"Services", name:"Water demand and storage", guide:"water-sanitation",
  desc:"Daily water demand from occupancy, and the storage volume for the days you want to store.",
  form:()=>`<div class="form">${sel("wU","Use",[["135","Homes / hostels (135 L per person)"],["45","Offices, day schools (45 L per person)"],["180","Hotels (180 L per bed)"],["340","Hotels 5-star / hospitals ≤ 100 beds (340 L per bed)"],["450","Hospitals > 100 beds (450 L per bed)"],["70","Restaurants (70 L per seat)"],["15","Cinemas, auditoria (15 L per seat)"],["30","Factories without baths, storage (30 L per person)"]],"135")}
  ${num("wN","Number of persons / beds / seats",20,1,"homes: ~4.5 per flat")}${num("wD","Days of storage",1,0.5)}</div>`,
  run(){ const q=V("wU"), n=V("wN"), d=V("wD"), daily=q*n, tot=daily*d;
    return `<div class="kpis">${kpi("Daily demand",fmt(daily,0),"litres")}${kpi("Storage",fmt(tot,0),"litres")}${kpi("Volume",fmt(tot/1000,2),"m³")}</div>
    <div class="work">Daily demand = ${q} L × ${n} = ${fmt(daily,0)} L/day
Storage for ${d} day(s) = ${fmt(tot,0)} L ≈ ${fmt(tot/1000,2)} m³</div>
    ${note("Split between underground sump and overhead tank to suit the supply. Fire-fighting storage is separate (Annexure C). Per-head figures from the Model Building Bye-Laws 2016, Table 4.6.")}`; } },
{ id:"fixtures", group:"Services", name:"Toilets for an office or shop", guide:"water-sanitation",
  desc:"Number of WCs, wash basins and drinking-water points for a shop or office.",
  form:()=>`<div class="form">${num("xM","Men (staff + average customers at peak hour)",40,1)}${num("xF","Women",40,1)}${num("xFl","Number of floors",2,1)}</div>`,
  run(){ const m=V("xM"), w=V("xF"), fl=Math.max(1,Math.round(V("xFl")));
    const per=(n,unit,part)=> n<=0?0: Math.max(1, Math.floor(n/unit) + ((n%unit)>part?1:0));
    const wcM = per(m,25,15), wcF = per(w,15,10);
    const wb=Math.ceil((m+w)/25), dw=Math.max(fl,Math.ceil((m+w)/100));
    return `<div class="kpis">${kpi("WCs for men",wcM)}${kpi("WCs for women",wcF)}${kpi("Wash basins",wb)}${kpi("Drinking water points",dw)}</div>
    <div class="work">Men: 1 WC per 25, plus 1 if the remainder exceeds 15 (at least 1) → ${wcM}
Women: 1 WC per 15, plus 1 if the remainder exceeds 10 (at least 1) → ${wcF}
Wash basins: 1 per 25 persons → ${wb};  drinking water: 1 per 100, at least 1 per floor → ${dw}
Cleaner's sink: at least 1 per floor → ${fl}</div>
    ${note("Model Building Bye-Laws 2016, Table 4.9. Count customers as the average present in the busiest hour; assume 1:1 men to women if unknown. Urinals per the office table. Add an accessible WC in public buildings.")}`; } },
{ id:"rwh", group:"Services", name:"Rainwater harvesting potential", guide:"rwh",
  desc:"How much rain a roof can collect in a year, and a starting size for the storage tank.",
  form:()=>`<div class="form">${num("hA","Roof / catchment area (m²)",100,1)}${num("hR","Annual rainfall (mm)",800,10)}${sel("hC","Surface",[["0.85","RCC / tiled roof (0.85)"],["0.75","Sheet roof (0.75)"],["0.6","Paved area (0.6)"],["0.2","Lawn / garden (0.2)"]],"0.85")}${num("hDays","Dry-spell days to bridge",15,1)}${num("hUse","Daily use from harvested water (L)",300,10)}</div>`,
  run(){ const A=V("hA"), R=V("hR"), C=V("hC"), d=V("hDays"), u=V("hUse"); const yr=A*R*C, store=Math.min(yr, d*u);
    return `<div class="kpis">${kpi("Annual harvest",fmt(yr,0),"litres")}${kpi("Per 100 m²",fmt(yr/A*100,0),"L/yr")}${kpi("Suggested storage",fmt(store,0),"litres")}</div>
    <div class="work">Harvest = area × rainfall × runoff coefficient = ${A} × ${R} × ${C} = ${fmt(yr,0)} L/year
Storage to bridge ${d} days at ${u} L/day = ${fmt(d*u,0)} L (capped at the annual harvest)</div>
    ${note("The bye-laws use about 55,000 L per 100 m² of roof per year as a rough guide. Water beyond the storage should go to a recharge pit or well. Runoff coefficients are typical values.")}`; } },

/* ---------------- Testing ---------------- */
{ id:"cube-accept", group:"Testing & quality", name:"Cube test acceptance", guide:"cube-tests",
  desc:"Enter four consecutive sample results and see whether the concrete passes IS 456.",
  form:()=>`<div class="form">${sel("cG","Specified grade",[[15,"M15"],[20,"M20"],[25,"M25"],[30,"M30"],[35,"M35"],[40,"M40"],[45,"M45"],[50,"M50"]],25)}
  <div class="two">${num("c1","Result 1 (N/mm²)",30.5,0.1)}${num("c2","Result 2",28.0,0.1)}</div><div class="two">${num("c3","Result 3",31.2,0.1)}${num("c4","Result 4",26.5,0.1)}</div>
  ${num("cS","Established standard deviation (N/mm²)","",0.1,"blank = assumed")}</div>`,
  run(){ const g=V("cG"), r=[V("c1"),V("c2"),V("c3"),V("c4")]; let s=V("cS"); const as=g<=15?3.5:g<=25?4.0:5.0; const given=isFinite(s); if(!given) s=as; s=Math.round(s*2)/2;
    const add=g<=15?3:4, mReq=Math.max(g+0.825*s,g+add), iMin=g-add, mean=r.reduce((a,b)=>a+b,0)/4, low=Math.min(...r), okM=mean>=mReq, okI=low>=iMin;
    return `${verdict(okM&&okI, okM&&okI?"Concrete passes the acceptance criteria.":"Concrete does not meet the acceptance criteria. Refer to the engineer.")}
    <div class="kpis">${kpi("Mean of 4",fmt(mean,2),"N/mm²")}${kpi("Required mean",fmt(mReq,2),"N/mm²")}${kpi("Lowest result",fmt(low,1),"N/mm²")}${kpi("Minimum individual",fmt(iMin,1),"N/mm²")}</div>
    <div class="work">s = ${fmt(s,1)} N/mm²${given?"":" (assumed, IS 456 Table 8)"}
Mean ≥ max(fck + 0.825 s, fck + ${add}) = max(${fmt(g+0.825*s,2)}, ${g+add}) = ${fmt(mReq,2)} → ${okM?'<span class="okc">OK</span>':'<span class="badc">FAILS</span>'}
Each ≥ fck − ${add} = ${iMin} → ${okI?'<span class="okc">OK</span>':'<span class="badc">FAILS</span>'}</div>
    ${note("Each result is the average of three cubes; a sample is invalid if any cube differs from the average by more than 15 %.")}`; } },
{ id:"cube-samples", group:"Testing & quality", name:"How many cube samples?", guide:"cube-tests",
  desc:"Minimum number of samples (three cubes each) for a quantity of concrete.",
  form:()=>`<div class="form">${num("qV","Quantity of concrete of one grade (m³)",42,1)}${num("qSh","Shifts the pour runs over",1,1)}</div>`,
  run(){ const q=V("qV"), sh=Math.max(1,Math.round(V("qSh"))); let n=q<=0?0:q<=5?1:q<=15?2:q<=30?3:q<=50?4:4+Math.ceil((q-50)/50); const N=Math.max(n,sh);
    return `<div class="kpis">${kpi("Samples",N)}${kpi("Cubes for 28 days",N*3)}</div><div class="work">${fmt(q,1)} m³ → ${n} by quantity; at least one per shift (${sh}) → ${N} samples</div>${note("Cast extra cubes for 7-day results or to check strength before striking formwork.")}`; } },
{ id:"sand-zone", group:"Testing & quality", name:"Sand grading zone", guide:"aggregate-tests",
  desc:"Enter the percentage passing each sieve and find the grading zone of a sand.",
  form:()=>`<div class="form"><div class="two">${num("z475","4.75 mm (% passing)",96,0.1)}${num("z236","2.36 mm",88,0.1)}</div><div class="two">${num("z118","1.18 mm",72,0.1)}${num("z600","600 µm",48,0.1)}</div><div class="two">${num("z300","300 µm",18,0.1)}${num("z150","150 µm",5,0.1)}</div>${sel("zCr","Type of sand",[["n","Natural sand"],["c","Crushed stone sand"]],"n")}</div>`,
  run(){ const v={475:V("z475"),236:V("z236"),118:V("z118"),600:V("z600"),300:V("z300"),150:V("z150")}, cr=S("zCr")==="c";
    const Z={I:{475:[90,100],236:[60,95],118:[30,70],600:[15,34],300:[5,20],150:[0,10]},II:{475:[90,100],236:[75,100],118:[55,90],600:[35,59],300:[8,30],150:[0,10]},III:{475:[90,100],236:[85,100],118:[75,100],600:[60,79],300:[12,40],150:[0,10]},IV:{475:[95,100],236:[95,100],118:[90,100],600:[80,100],300:[15,50],150:[0,15]}};
    const byFM = v[600]<15?null: v[600]<=34?"I": v[600]<=59?"II": v[600]<=79?"III":"IV";
    const out=[]; for(const [z,lim] of Object.entries(Z)){ const bad=Object.entries(lim).filter(([s,[a,b]])=>{ let hi=b; if(s==="150"&&cr) hi=20; return v[s]<a||v[s]>hi; }).map(([s])=>s); out.push([z,bad]); }
    const fits=out.filter(x=>!x[1].length).map(x=>x[0]); const fm=(600-(v[475]+v[236]+v[118]+v[600]+v[300]+v[150]))/100;
    return `${verdict(fits.length>0, fits.length?`The sand falls in Zone ${fits.join(" / ")}.`:`The sand does not fit any zone fully (closest by the 600 µm sieve: ${byFM||"none"}).`, !fits.length&&byFM)}
    <div class="kpis">${kpi("Zone by 600 µm sieve",byFM||"–")}${kpi("Fineness modulus",fmt(fm,2))}</div>
    <div class="work">${out.map(([z,b])=>`Zone ${z}: ${b.length?"outside limits on "+b.map(s=>s==="475"?"4.75 mm":s==="236"?"2.36 mm":s==="118"?"1.18 mm":s+" µm").join(", "):"all sieves within limits"}`).join("\n")}</div>
    ${note("IS 383 allows a total deviation of up to 5 % outside the zone limits on sieves other than 600 µm. Fineness modulus here is approximate (sum of cumulative retained on the six sieves ÷ 100). Zone IV is not recommended for reinforced concrete without trials.")}`; } },
{ id:"bar-mass", group:"Testing & quality", name:"Steel bar mass and tolerance", guide:"steel-tests",
  desc:"Check a weighed bar sample against the nominal mass and IS 1786 tolerance.",
  form:()=>`<div class="form">${sel("bmD","Nominal diameter (mm)",[[8,"8"],[10,"10"],[12,"12"],[16,"16"],[20,"20"],[25,"25"],[28,"28"],[32,"32"],[36,"36"]],12)}${num("bmL","Length of sample (m)",1.0,0.01)}${num("bmM","Measured mass (kg)",0.87,0.001)}${sel("bmT","Sample type",[["b","Batch (several bars)"],["i","Individual bar"]],"i")}</div>`,
  run(){ const d=V("bmD"), L=V("bmL"), m=V("bmM"), t=S("bmT"); const nom=d*d/162.2, act=m/L, dev=(act-nom)/nom*100;
    const tol = d<=10?[7,8]: d<=16?[5,6]:[3,4]; const ok = t==="b" ? Math.abs(dev)<=tol[0] : dev>=-tol[1]; const area=m/(0.00785*L);
    return `${verdict(ok, ok?"Mass is within the IS 1786 tolerance.":"Mass is outside the tolerance: the bar is under-weight.")}
    <div class="kpis">${kpi("Nominal mass",fmt(nom,3),"kg/m")}${kpi("Actual mass",fmt(act,3),"kg/m")}${kpi("Deviation",fmt(dev,1),"%")}${kpi("Effective area",fmt(area,1),"mm²")}</div>
    <div class="work">Nominal = d²/162 = ${fmt(nom,3)} kg/m; actual = ${m} / ${L} = ${fmt(act,3)} kg/m
Tolerance (${d} mm): batch ±${tol[0]} %, individual −${tol[1]} % → ${ok?'<span class="okc">OK</span>':'<span class="badc">NOT OK</span>'}
Effective area = mass / (0.00785 × length) = ${fmt(area,1)} mm²</div>`; } },
{ id:"brick-check", group:"Testing & quality", name:"Brick acceptance", guide:"brick-tests",
  desc:"Check compressive strength, water absorption and efflorescence results against a brick class.",
  form:()=>`<div class="form">${sel("kC","Class claimed",[[3.5,"3.5"],[5,"5"],[7.5,"7.5"],[10,"10"],[12.5,"12.5"],[15,"15"],[17.5,"17.5"],[20,"20"],[25,"25"],[30,"30"],[35,"35"]],7.5)}
  ${num("kAvg","Average compressive strength (N/mm²)",8.2,0.1)}${num("kMin","Lowest individual strength (N/mm²)",6.4,0.1)}${num("kAbs","Average water absorption (%)",17,0.1)}${sel("kEff","Efflorescence",[["nil","Nil"],["slight","Slight"],["moderate","Moderate"],["heavy","Heavy"],["serious","Serious"]],"slight")}</div>`,
  run(){ const c=V("kC"), a=V("kAvg"), lo=V("kMin"), ab=V("kAbs"), e=S("kEff"); const hi=c>12.5;
    const absMax=hi?15:20, effOk = hi ? ["nil","slight"].includes(e) : ["nil","slight","moderate"].includes(e);
    const iss=[]; if(a<c) iss.push(`Average strength ${a} is below the class minimum ${c} N/mm².`); if(lo<0.8*c) iss.push(`Lowest brick ${lo} is more than 20 % below ${c} N/mm².`); if(ab>absMax) iss.push(`Absorption ${ab} % exceeds ${absMax} %.`); if(!effOk) iss.push(`Efflorescence '${e}' exceeds '${hi?"slight":"moderate"}'.`);
    return `${verdict(!iss.length, !iss.length?`Bricks meet class ${c}.`:`Bricks do not meet class ${c}.`)}
    ${iss.length?`<ul>${iss.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
    <div class="work">Class ${c}: average ≥ ${c}; each ≥ ${fmt(0.8*c,1)} (−20 %); absorption ≤ ${absMax} %; efflorescence ≤ ${hi?"slight":"moderate"}</div>
    ${note("If a lot fails its class, it is checked against the next lower class (IS 1077).")}`; } },
{ id:"cement-check", group:"Testing & quality", name:"Cement test results", guide:"cement-tests",
  desc:"Check setting times, soundness, fineness and strength against the OPC grade.",
  form:()=>`<div class="form">${sel("ceG","Grade",[[33,"OPC 33"],[43,"OPC 43"],[53,"OPC 53"]],53)}<div class="two">${num("ceI","Initial setting (min)",95,1)}${num("ceF","Final setting (min)",210,1)}</div><div class="two">${num("ceL","Le Chatelier expansion (mm)",2,0.1)}${num("ceB","Fineness (m²/kg)",300,1)}</div><div class="two">${num("ce3","3-day strength (MPa)",30,0.1)}${num("ce7","7-day strength (MPa)",40,0.1)}</div>${num("ce28","28-day strength (MPa)","",0.1,"blank if not yet tested")}</div>`,
  run(){ const g=V("ceG"); const req={33:[16,22,33],43:[23,33,43],53:[27,37,53]}[g]; const r=[V("ce3"),V("ce7"),V("ce28")]; const iss=[];
    if(V("ceI")<30) iss.push("Initial setting time is below 30 minutes."); if(V("ceF")>600) iss.push("Final setting time exceeds 600 minutes."); if(V("ceL")>10) iss.push("Le Chatelier expansion exceeds 10 mm."); if(V("ceB")<225) iss.push("Fineness is below 225 m²/kg.");
    ["3","7","28"].forEach((d,i)=>{ if(isFinite(r[i]) && r[i]<req[i]) iss.push(`${d}-day strength ${r[i]} MPa is below ${req[i]} MPa.`); }); if(g===43 && isFinite(r[2]) && r[2]>58) iss.push("28-day strength exceeds the 58 MPa maximum for grade 43.");
    return `${verdict(!iss.length, !iss.length?`Results meet OPC ${g} requirements so far.`:"Some results do not meet the requirements.")}
    ${iss.length?`<ul>${iss.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
    <div class="work">OPC ${g}: initial ≥ 30 min, final ≤ 600 min, Le Chatelier ≤ 10 mm (autoclave ≤ 0.8 %), fineness ≥ 225 m²/kg
Strength ≥ ${req[0]} / ${req[1]} / ${req[2]} MPa at 3 / 7 / 28 days${g===43?" (28-day max 58)":""}</div>`; } },
{ id:"mix-target", group:"Testing & quality", name:"Mix design: target strength and water", guide:"mix-design",
  desc:"Target mean strength, water content and cement content for a first trial mix.",
  form:()=>`<div class="form">${sel("mxG","Grade",[[15,"M15"],[20,"M20"],[25,"M25"],[30,"M30"],[35,"M35"],[40,"M40"]],25)}${num("mxS","Standard deviation (N/mm²)","",0.1,"blank = assumed")}${sel("mxA","Max aggregate size",[[10,"10 mm"],[20,"20 mm"],[40,"40 mm"]],20)}${num("mxSl","Target slump (mm)",100,5)}${num("mxWc","Water–cement ratio chosen",0.45,0.01)}${sel("mxE","Exposure",[["300|0.55","Mild (min 300 kg, w/c ≤ 0.55)"],["300|0.50","Moderate (300 kg, 0.50)"],["320|0.45","Severe (320 kg, 0.45)"],["340|0.45","Very severe (340 kg, 0.45)"],["360|0.40","Extreme (360 kg, 0.40)"]],"300|0.50")}${num("mxRed","Water reduction by admixture (%)",0,1)}</div>`,
  run(){ const g=V("mxG"); let s=V("mxS"); const as=g<=15?3.5:g<=25?4.0:5.0; if(!isFinite(s)) s=as; const ft=g+1.65*s;
    const w0={10:208,20:186,40:165}[V("mxA")], sl=V("mxSl"), inc=Math.max(0,(sl-50)/25)*0.03; const w=w0*(1+inc)*(1-V("mxRed")/100);
    const [cmin,wcmax]=S("mxE").split("|").map(Number); const wc=Math.min(V("mxWc"),wcmax); const c=Math.max(w/wc,cmin);
    return `<div class="kpis">${kpi("Target mean strength",fmt(ft,2),"N/mm²")}${kpi("Water",fmt(w,0),"kg/m³")}${kpi("w/c used",fmt(wc,2))}${kpi("Cement",fmt(c,0),"kg/m³")}</div>
    <div class="work">f'ck = fck + 1.65 s = ${g} + 1.65 × ${s} = ${fmt(ft,2)} N/mm²
Water: ${w0} kg for 50 mm slump; +3 % per 25 mm → ${fmt(w0*(1+inc),0)}; admixture −${V("mxRed")} % → ${fmt(w,0)} kg/m³
w/c = min(${V("mxWc")}, ${wcmax} for exposure) = ${fmt(wc,2)}
Cement = max(water / w/c = ${fmt(w/wc,0)}, minimum ${cmin}) = ${fmt(c,0)} kg/m³ ${c>450?'<span class="warnc">over 450 kg/m³ OPC: reconsider</span>':""}</div>
    ${note("A starting point for trials (IS 10262:2009). Confirm the w/c for the target strength from cement data or trials, then proportion aggregates and test trial batches.")}`; } },

/* ---------------- Structural ---------------- */
{ id:"lap-length", group:"Structural", name:"Development and lap length", guide:"rebar",
  desc:"Development length Ld and lap length for a bar, by grade of concrete and steel.",
  form:()=>`<div class="form">${sel("ldF","Concrete",[[20,"M20"],[25,"M25"],[30,"M30"],[35,"M35"],[40,"M40+"]],25)}${sel("ldY","Steel",[[250,"Fe 250 (plain)"],[415,"Fe 415"],[500,"Fe 500"],[550,"Fe 550"]],500)}${sel("ldD","Bar diameter (mm)",[[8,"8"],[10,"10"],[12,"12"],[16,"16"],[20,"20"],[25,"25"],[32,"32"]],16)}${sel("ldC","Stress",[["t","Flexural tension"],["d","Direct tension"],["c","Compression"]],"t")}</div>`,
  run(){ const f=V("ldF"), y=V("ldY"), d=V("ldD"), c=S("ldC"); const base={20:1.2,25:1.4,30:1.5,35:1.7,40:1.9}[f]; let tb=base*(y>250?1.6:1)*(c==="c"?1.25:1); const Ld=d*0.87*y/(4*tb);
    let lap = c==="t"?Math.max(Ld,30*d): c==="d"?Math.max(2*Ld,30*d): Math.max(Ld,24*d); lap=Math.max(lap,15*d,200);
    return `<div class="kpis">${kpi("τbd",fmt(tb,2),"N/mm²")}${kpi("Ld",fmt(Ld,0),"mm ("+fmt(Ld/d,1)+"φ)")}${kpi("Lap length",fmt(Math.ceil(lap/10)*10,0),"mm")}</div>
    <div class="work">τbd = ${base}${y>250?" × 1.6 (deformed)":""}${c==="c"?" × 1.25 (compression)":""} = ${fmt(tb,2)} N/mm²
Ld = φ × 0.87 fy / (4 τbd) = ${d} × ${fmt(0.87*y,1)} / ${fmt(4*tb,2)} = ${fmt(Ld,0)} mm
Lap: ${c==="t"?"max(Ld, 30φ)":c==="d"?"max(2Ld, 30φ)":"max(Ld, 24φ)"}, and at least 15φ and 200 mm → ${fmt(Math.ceil(lap/10)*10,0)} mm</div>
    ${note("IS 456 cl 26.2. Bars over 36 mm are not lapped. Stagger laps; in seismic zones keep them out of joints and hinge zones.")}`; } },
{ id:"seismic", group:"Structural", name:"Seismic base shear", guide:"earthquake",
  desc:"Equivalent static base shear and its distribution up the building.",
  form:()=>`<div class="form"><div class="two">${sel("zZ","Zone",[[0.10,"II"],[0.16,"III"],[0.24,"IV"],[0.36,"V"]],0.16)}${sel("zSoil","Soil",[["1","I rock / hard"],["2","II medium"],["3","III soft"]],"2")}</div>
  <div class="two">${sel("zI","Importance I",[[1.0,"1.0"],[1.2,"1.2"],[1.5,"1.5"]],1.0)}${sel("zR","R",[[3,"3.0 OMRF"],[4,"4.0 ductile walls"],[5,"5.0 SMRF / dual"]],5)}</div>
  ${sel("zT","Building type for period",[["rc","RC frame, no infill"],["comp","RC–steel composite frame"],["st","Steel frame"],["inf","Frame with infill / other (0.09h/√d)"]],"rc")}
  <div class="two">${num("zN","Storeys",8,1)}${num("zH","Storey height (m)",3.2,0.1)}</div><div class="two">${num("zW","Floor seismic weight (kN)",4500,10)}${num("zWr","Roof seismic weight (kN)",3500,10)}</div>${num("zD","Base dimension along shaking (m)",20,0.5)}</div>`,
  run(){ const Z=V("zZ"),I=V("zI"),R=V("zR"),soil=S("zSoil"),n=Math.max(1,Math.round(V("zN"))),hs=V("zH"),W=V("zW"),Wr=V("zWr"),d=V("zD"),ty=S("zT");
    const h=n*hs, Ta=ty==="rc"?0.075*h**0.75:ty==="comp"?0.080*h**0.75:ty==="st"?0.085*h**0.75:0.09*h/Math.sqrt(d);
    const SP={"1":[0.40,1.00,0.25],"2":[0.55,1.36,0.34],"3":[0.67,1.67,0.42]}[soil]; const Sa=Ta<SP[0]?2.5:Ta<=4?SP[1]/Ta:SP[2]; const Ah=(Z/2)*(I/R)*Sa;
    const rho={0.1:0.007,0.16:0.011,0.24:0.016,0.36:0.024}[Z], Wt=W*(n-1)+Wr, VB=Math.max(Ah*Wt,rho*Wt);
    let sum=0; const fl=[]; for(let i=1;i<=n;i++){const wi=i===n?Wr:W,hi=i*hs; fl.push({i,wi,hi}); sum+=wi*hi*hi;}
    let cum=0; const rows=fl.map(x=>({...x,Q:VB*x.wi*x.hi*x.hi/sum})).reverse().map(x=>{cum+=x.Q;return{...x,V:cum}}); const Qm=Math.max(...rows.map(r=>r.Q));
    return `<div class="kpis">${kpi("Height",fmt(h,1),"m")}${kpi("Ta",fmt(Ta,3),"s")}${kpi("Sa/g",fmt(Sa,3))}${kpi("Ah",fmt(Ah,4))}${kpi("Base shear",fmt(VB,0),"kN")}</div>
    <div class="work">Ah = (${Z}/2)(${I}/${R})(${fmt(Sa,3)}) = ${fmt(Ah,4)}
VB = ${fmt(Ah,4)} × ${fmt(Wt,0)} = ${fmt(Ah*Wt,0)} kN; minimum ρW = ${fmt(rho*Wt,0)} kN → ${fmt(VB,0)} kN</div>
    <div class="tscroll"><table><thead><tr><th>Floor</th><th>h (m)</th><th>W (kN)</th><th>Qi (kN)</th><th>Storey shear (kN)</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r.i===n?"Roof":r.i}</td><td>${fmt(r.hi,1)}</td><td>${fmt(r.wi,0)}</td><td class="barcell"><i style="width:${(100*r.Q/Qm).toFixed(1)}%"></i><span>${fmt(r.Q,1)}</span></td><td>${fmt(r.V,1)}</td></tr>`).join("")}</tbody></table></div>
    ${h>50?note("Over 50 m: IS 16700 applies; see the tall buildings guide."):""}`; } },
{ id:"wind", group:"Structural", name:"Wind pressure", guide:"wind",
  desc:"Design wind speed and pressure at a height, with a pressure profile; choose a city or enter Vb.",
  form:()=>`<div class="form">${sel("wCity","City (sets Vb)",[["","— choose or enter Vb below —"],...SITE.WIND_CITIES.map(c=>[c[1]+"|"+c[0],c[0]+" ("+c[1]+" m/s)"])],"47|Delhi")}
  <div class="two">${sel("wVb","Basic wind speed Vb",[[33,"33"],[39,"39"],[44,"44"],[47,"47"],[50,"50"],[55,"55"]],47)}${sel("wTC","Terrain",[[1,"1 open / coast"],[2,"2 scattered"],[3,"3 suburbs"],[4,"4 city centre"]],3)}</div>
  <div class="two">${num("wZ","Height z (m)",30,0.5)}${num("wK1","k1",1.0,0.01)}</div><div class="two">${num("wK3","k3",1.0,0.01)}${sel("wK4","k4",[[1.0,"1.00"],[1.15,"1.15 industrial"],[1.3,"1.30 post-cyclone"]],1.0)}</div>
  <div class="two">${num("wA","Tributary area (m²)",25,1)}${sel("wKc","Kc",[[1.0,"1.0"],[0.9,"0.9"],[0.8,"0.8"]],0.9)}</div></div>`,
  run(){ const city=S("wCity"); if(city){ const vb=city.split("|")[0]; const el=document.getElementById("wVb"); if(el.dataset.city!==city){ el.value=vb; el.dataset.city=city; } }
    const Vb=V("wVb"),tc=S("wTC"),z=V("wZ"),k1=V("wK1"),k3=V("wK3"),k4=V("wK4"),A=V("wA"),Kc=V("wKc");
    const k2=interp(K2.z,K2[tc],z), Vz=Vb*k1*k2*k3*k4, pz=0.6*Vz*Vz, Ka=interp([10,25,100],[1.0,0.9,0.8],A), raw=0.9*Ka*Kc*pz, pd=Math.max(raw,0.7*pz);
    const prof=K2.z.filter(x=>x<=Math.max(10,z)).map(x=>{const v=Vb*k1*interp(K2.z,K2[tc],x)*k3*k4; return [x,v,0.6*v*v/1000];});
    return `<div class="kpis">${kpi("k2",fmt(k2,3))}${kpi("Vz",fmt(Vz,2),"m/s")}${kpi("pz",fmt(pz/1000,3),"kN/m²")}${kpi("pd",fmt(pd/1000,3),"kN/m²")}</div>
    <div class="work">Vz = ${Vb} × ${k1} × ${fmt(k2,3)} × ${k3} × ${k4} = ${fmt(Vz,2)} m/s; pz = 0.6 Vz² = ${fmt(pz,0)} N/m²
pd = 0.9 × ${fmt(Ka,2)} × ${Kc} × pz = ${fmt(raw,0)} N/m² (≥ 0.7 pz = ${fmt(0.7*pz,0)}) → ${fmt(pd/1000,3)} kN/m²</div>
    <div class="tscroll"><table><thead><tr><th>z (m)</th><th>Vz (m/s)</th><th>pz (kN/m²)</th></tr></thead><tbody>${prof.map(r=>`<tr><td>${r[0]}</td><td>${fmt(r[1],2)}</td><td>${fmt(r[2],3)}</td></tr>`).join("")}</tbody></table></div>`; } },
{ id:"beam", group:"Structural", name:"RCC beam: flexure and shear", guide:"rcc-design",
  desc:"Tension steel, bar count and stirrup spacing for a rectangular beam.",
  form:()=>`<div class="form"><div class="two">${num("bb","b (mm)",300,10)}${num("bD","D (mm)",500,10)}</div><div class="two">${num("bc","Effective cover (mm)",50,1)}${sel("bf","Concrete",[[20,"M20"],[25,"M25"],[30,"M30"],[35,"M35"],[40,"M40"]],25)}</div>
  <div class="two">${sel("by","Steel",[[415,"Fe 415"],[500,"Fe 500"]],500)}${num("bM","Mu (kN·m)",150,1)}</div><div class="two">${num("bV","Vu (kN)",120,1)}${sel("bbar","Bar Ø",[[12,"12"],[16,"16"],[20,"20"],[25,"25"]],16)}</div><div class="two">${sel("bs","Stirrup Ø",[[8,"8"],[10,"10"]],8)}${sel("bl","Legs",[[2,"2"],[4,"4"]],2)}</div></div>`,
  run(){ const b=V("bb"),D=V("bD"),d=D-V("bc"),fck=V("bf"),fy=V("by"),Mu=V("bM")*1e6,Vu=V("bV")*1e3,bar=V("bbar"),sd=V("bs"),legs=V("bl");
    const xr={415:0.48,500:0.46}[fy], Ml=0.36*fck*b*xr*d*(d-0.42*xr*d), Amin=0.85*b*d/fy, Amax=0.04*b*D, dbl=Mu>Ml;
    const Ast=dbl?NaN:0.5*fck/fy*(1-Math.sqrt(1-4.6*Mu/(fck*b*d*d)))*b*d, Areq=Math.max(Ast,Amin), ab=Math.PI*bar*bar/4, nb=Math.ceil(Areq/ab), Ap=nb*ab, pt=100*(dbl?Amax:Ap)/(b*d);
    const tv=Vu/(b*d), tc=interp(TAUC.pt,TAUC[fck],pt), tm=TAUCMAX[fck], Asv=legs*Math.PI*sd*sd/4, Vus=Math.max(0,Vu-tc*b*d);
    const sR=Vus>0?0.87*fy*Asv*d/Vus:Infinity, sMin=0.87*fy*Asv/(0.4*b), sv=Math.floor(Math.min(sR,sMin,0.75*d,300)/5)*5;
    return `${dbl?verdict(false,"Mu exceeds Mu,lim: deepen the section or design as doubly reinforced."):tv>tm?verdict(false,"Shear stress exceeds τc,max: enlarge the section."):verdict(true,`Provide ${nb} bars of ${bar} mm and ${legs}-legged ${sd} mm stirrups at ${sv} mm.`)}
    <div class="kpis">${kpi("d",fmt(d,0),"mm")}${kpi("Mu,lim",fmt(Ml/1e6,1),"kN·m")}${kpi("Ast",dbl?"–":fmt(Areq,0),"mm²")}${kpi("τv / τc",fmt(tv,2)+" / "+fmt(tc,2),"N/mm²")}</div>
    <div class="work">Mu,lim = 0.36 fck b xu,max (d − 0.42 xu,max) = ${fmt(Ml/1e6,1)} kN·m
${dbl?"":`Ast = ${fmt(Ast,0)} mm² (min ${fmt(Amin,0)}, max ${fmt(Amax,0)}) → ${nb} × Ø${bar} = ${fmt(Ap,0)} mm², pt ${fmt(pt,2)} %\n`}τv ${fmt(tv,3)}, τc ${fmt(tc,3)}, τc,max ${tm}; Vus ${fmt(Vus/1e3,1)} kN
Stirrup spacing = min(${isFinite(sR)?fmt(sR,0):"–"}, ${fmt(sMin,0)}, 0.75d ${fmt(0.75*d,0)}, 300) → ${sv} mm</div>`; } },
{ id:"column", group:"Structural", name:"RCC short column", guide:"rcc-design",
  desc:"Axial capacity of a short column with slenderness, eccentricity and steel checks.",
  form:()=>`<div class="form"><div class="two">${num("cb","b (mm)",400,10)}${num("cD","D (mm)",400,10)}</div><div class="two">${sel("cf","Concrete",[[20,"M20"],[25,"M25"],[30,"M30"],[35,"M35"],[40,"M40"]],25)}${sel("cy","Steel",[[415,"Fe 415"],[500,"Fe 500"]],500)}</div><div class="two">${num("cp","Steel (%)",1.5,0.1)}${num("cP","Pu (kN)",2200,10)}</div><div class="two">${num("cl","Unsupported length (mm)",3200,50)}${num("cle","Effective length (mm)",3000,50)}</div></div>`,
  run(){ const b=V("cb"),D=V("cD"),fck=V("cf"),fy=V("cy"),p=V("cp"),Pu=V("cP")*1e3,l=V("cl"),le=V("cle");
    const Ag=b*D,Asc=p/100*Ag,Pc=0.4*fck*(Ag-Asc)+0.67*fy*Asc, mn=Math.min(b,D), sl=le/mn, short=sl<12, e=Math.max(l/500+mn/30,20), eok=e<=0.05*mn, ok=Pu<=Pc&&short&&p>=0.8&&p<=4;
    return `${verdict(ok, ok?"The column is adequate for axial load.":"Check the items below.", !ok&&Pu<=Pc)}
    <div class="kpis">${kpi("Capacity",fmt(Pc/1e3,0),"kN")}${kpi("Utilisation",fmt(100*Pu/Pc,0),"%")}${kpi("le / least dim.",fmt(sl,1))}${kpi("Asc",fmt(Asc,0),"mm²")}</div>
    <div class="work">Pu = 0.4 fck Ac + 0.67 fy Asc = ${fmt(Pc/1e3,0)} kN vs ${fmt(Pu/1e3,0)} kN ${Pu<=Pc?'<span class="okc">OK</span>':'<span class="badc">NOT OK</span>'}
Slenderness ${fmt(sl,1)} ${short?'<span class="okc">short</span>':'<span class="warnc">slender: add moments (cl 39.7)</span>'}
e,min = ${fmt(e,1)} mm ${eok?"≤ 0.05D: formula applies":'<span class="warnc">> 0.05D: design for axial load + moment</span>'}
Steel ${p} % ${p<0.8?'<span class="badc">below 0.8 %</span>':p>4?'<span class="warnc">above 4 %</span>':'<span class="okc">OK</span>'}</div>`; } },
{ id:"bearing", group:"Structural", name:"Bearing capacity of a footing", guide:"foundations",
  desc:"Net ultimate and safe bearing capacity with shape, depth and water-table effects (IS 6403).",
  form:()=>`<div class="form"><div class="two">${num("gc","c (kN/m²)",10,1)}${num("gp","φ (°)",30,0.5)}</div><div class="two">${num("gg","γ (kN/m³)",18,0.1)}${sel("gm","Failure mode",[["g","General shear"],["l","Local shear"]],"g")}</div>
  <div class="two">${sel("gs","Shape",[["strip","Strip"],["square","Square"],["circle","Circular"],["rect","Rectangular"]],"square")}${num("gB","B (m)",2,0.05)}</div><div class="two">${num("gL","L (m)",3,0.05)}${num("gDf","Df (m)",1.5,0.05)}</div><div class="two">${num("gDw","Water table depth (m)",10,0.1)}${num("gF","Factor of safety",2.5,0.1)}</div></div>`,
  run(){ let c=V("gc"),phi=V("gp"); const g=V("gg"),B=V("gB"),L=Math.max(V("gL"),B),Df=V("gDf"),Dw=V("gDw"),F=V("gF"),sh=S("gs");
    if(S("gm")==="l"){c*=2/3; phi=Math.atan(2/3*Math.tan(phi*Math.PI/180))*180/Math.PI;}
    const r=phi*Math.PI/180,t=Math.tan(r),Np=Math.tan(Math.PI/4+r/2)**2,Nq=Math.exp(Math.PI*t)*Np,Nc=phi<0.01?5.14:(Nq-1)/t,Ng=2*(Nq+1)*t;
    const s={strip:[1,1,1],square:[1.3,1.2,0.8],circle:[1.3,1.2,0.6],rect:[1+0.2*B/L,1+0.2*B/L,1-0.4*B/L]}[sh];
    const dc=1+0.2*(Df/B)*Math.sqrt(Np), dq=phi>10?1+0.1*(Df/B)*Math.sqrt(Np):1, Wp=Dw>=Df+B?1:Dw<=Df?0.5:0.5+0.5*(Dw-Df)/B, q=g*Df;
    const t1=c*Nc*s[0]*dc, t2=q*(Nq-1)*s[1]*dq, t3=0.5*g*B*Ng*s[2]*dq*Wp, qnu=t1+t2+t3;
    return `<div class="kpis">${kpi("Nc / Nq / Nγ",`${fmt(Nc,1)} / ${fmt(Nq,1)} / ${fmt(Ng,1)}`)}${kpi("Net ultimate",fmt(qnu,0),"kN/m²")}${kpi("Net safe",fmt(qnu/F,0),"kN/m²")}${kpi("Gross safe",fmt(qnu/F+q,0),"kN/m²")}</div>
    <div class="work">Shape ${s.map(x=>fmt(x,2)).join(", ")}; dc ${fmt(dc,3)}, dq = dγ ${fmt(dq,3)}; W′ ${fmt(Wp,2)}
qnu = ${fmt(t1,0)} + ${fmt(t2,0)} + ${fmt(t3,0)} = ${fmt(qnu,0)} kN/m²</div>${note("Check settlement too; the allowable pressure is the lower of the shear and settlement values.")}`; } },
{ id:"sizing", group:"Structural", name:"Preliminary member sizing", guide:"rcc-design",
  desc:"Starting depth for beams and slabs, and the imposed load reduction for columns.",
  form:()=>`<div class="form">${sel("mM","Member",[["beam","Beam"],["slab1","One-way slab"],["slab2","Two-way slab (short span ≤ 3.5 m)"]],"beam")}<div class="two">${sel("mS","Support",[["ss","Simply supported"],["cont","Continuous"],["cant","Cantilever"]],"cont")}${num("mL","Span (m)",5,0.1)}</div>${num("mMF","Modification factor",1.2,0.05,"typ. 1.0–1.4")}${num("mN","Floors carried by a column",7,1)}</div>`,
  run(){ const m=S("mM"),s=S("mS"),L=V("mL")*1000,MF=V("mMF"),n=Math.max(1,Math.round(V("mN"))); let out,dv;
    if(m==="slab2"){ const r=s==="ss"?28:s==="cont"?32:null; dv=r?L/r:NaN; out=r?`Two-way slab (Fe 415+): span / overall depth = ${r} → D ≈ ${fmt(dv,0)} mm`:"Cantilever: use span/d = 7."; }
    else { const bs={ss:20,cont:26,cant:7}[s]; dv=L/(bs*MF); out=`span / d = ${bs} × ${MF} = ${fmt(bs*MF,1)} → d ≈ ${fmt(dv,0)} mm`+(m==="beam"?`\nIn practice beams are about span/12 to span/15 overall: ${fmt(L/15,0)}–${fmt(L/12,0)} mm`:`\nSlab overall ≈ d + 25 mm = ${fmt(dv+25,0)} mm`); }
    const red=n===1?0:n===2?10:n===3?20:n===4?30:n<=10?40:50;
    return `<div class="kpis">${kpi(m==="slab2"?"Overall depth":"Effective depth",fmt(dv,0),"mm")}${kpi("Imposed load reduction",red,"%")}</div><div class="work">${out}
Column carrying ${n} floor${n>1?"s":""}: reduce total imposed load by ${red} % (IS 875 Part 2)</div>`; } }
];
})();
