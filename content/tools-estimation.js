/* ===================== ESTIMATION TOOLS ===================== */
(function(){
const fmt=(x,d=2)=>isFinite(x)?Number(x).toLocaleString("en-IN",{maximumFractionDigits:d,minimumFractionDigits:d}):"–";
const kpi=(l,v,u="")=>`<div class="kpi"><div class="l">${l}</div><div class="v">${v} <span class="u">${u}</span></div></div>`;
const sel=(id,label,opts,def,hint)=>`<label>${label}${hint?` <span class="hint">${hint}</span>`:""}<select id="${id}">${opts.map(([v,t])=>`<option value="${v}" ${String(v)===String(def)?"selected":""}>${t}</option>`).join("")}</select></label>`;
const num=(id,label,def,step="any",hint)=>`<label>${label}${hint?` <span class="hint">${hint}</span>`:""}<input id="${id}" type="number" value="${def}" step="${step}" inputmode="decimal"></label>`;
const V=id=>{ const e=document.getElementById(id); const v=e?parseFloat(e.value):NaN; return isFinite(v)?v:0; }, S=id=>document.getElementById(id).value;
const note=t=>`<p class="small muted" style="margin-top:10px">${t}</p>`;
const BAG=0.0347;
const rows=(n,cells)=>Array.from({length:n},(_,i)=>`<div class="two" style="grid-template-columns:${cells.map(c=>c[2]||"1fr").join(" ")};margin-top:${i===0?0:-4}px">${cells.map(c=>`<label aria-label="${c[0]}">${i===0?c[0]:""}<input id="${c[1]}${i}" type="${c[3]||"number"}" value="${(c[4]&&c[4][i]!==undefined)?c[4][i]:""}" step="any" inputmode="decimal"></label>`).join("")}</div>`).join("");

SITE.tools.push(
{ id:"concrete-qty", group:"Estimation", name:"Concrete materials", guide:"quantity-concrete",
  desc:"Cement bags, sand, coarse aggregate and water for a volume of nominal-mix concrete.",
  form:()=>`<div class="form">${num("cqV","Wet volume of concrete (m³)",10,0.01)}${sel("cqM","Mix",[["1|1.5|3|0.50","M20 (1 : 1.5 : 3)"],["1|2|4|0.55","M15 (1 : 2 : 4)"],["1|3|6|0.60","M10 (1 : 3 : 6)"],["1|4|8|0.70","M7.5 (1 : 4 : 8)"],["1|5|10|0.80","M5 (1 : 5 : 10)"]],"1|1.5|3|0.50")}${num("cqF","Dry volume factor",1.54,0.01,"1.52–1.57")}${num("cqW","Wastage (%)",3,0.5)}${num("cqWc","Water–cement ratio",0.5,0.01)}</div>`,
  run(){ const Vw=V("cqV"), [c,s,a]=S("cqM").split("|").map(Number), f=V("cqF"), w=V("cqW")/100, wc=V("cqWc");
    const dry=Vw*f*(1+w), sum=c+s+a, cv=dry*c/sum, bags=cv/BAG, sand=dry*s/sum, agg=dry*a/sum, water=cv*1440*wc;
    return `<div class="kpis">${kpi("Cement",fmt(bags,1),"bags")}${kpi("Sand",fmt(sand,2),"m³")}${kpi("Coarse aggregate",fmt(agg,2),"m³")}${kpi("Water",fmt(water,0),"litres")}</div>
    <div class="work">Dry volume = ${fmt(Vw,2)} × ${f} × (1 + ${fmt(w*100,1)} %) = ${fmt(dry,3)} m³;  ratio total = ${sum}
Cement = ${fmt(dry,3)} × ${c}/${sum} = ${fmt(cv,3)} m³ ÷ ${BAG} = ${fmt(bags,1)} bags (${fmt(cv*1440,0)} kg)
Sand = ${fmt(sand,3)} m³;  coarse aggregate = ${fmt(agg,3)} m³;  water = ${fmt(cv*1440,0)} kg × ${wc} = ${fmt(water,0)} L</div>
    ${note("Approximate dry-volume method for estimates and small nominal-mix work (nominal mixes only up to M20, IS 456 cl 9.3). For designed mixes, use the mix design quantities. Correct sand volume for bulking if batching by volume.")}`; } },
{ id:"brick-qty", group:"Estimation", name:"Brickwork: bricks, cement and sand", guide:"quantity-masonry",
  desc:"Number of bricks and mortar materials for a volume of brick masonry.",
  form:()=>`<div class="form"><div class="two">${num("bqL","Wall length (m)",10,0.01)}${num("bqH","Wall height (m)",3,0.01)}</div>${num("bqT","Wall thickness (m)",0.23,0.005)}${num("bqO","Openings to deduct (m²)",4,0.01)}${sel("bqB","Brick size (mm)",[["190|90|90","Modular 190 × 90 × 90"],["230|110|70","Non-modular 230 × 110 × 70"],["230|110|75","230 × 110 × 75"]],"190|90|90")}<div class="two">${num("bqJ","Joint (mm)",10,1)}${sel("bqR","Mortar",[["4","1 : 4"],["5","1 : 5"],["6","1 : 6"]],"6")}</div><div class="two">${num("bqDF","Mortar dry factor",1.33,0.01)}${num("bqW","Brick wastage (%)",4,0.5)}</div></div>`,
  run(){ const vol=Math.max(0,(V("bqL")*V("bqH")-V("bqO"))*V("bqT")); const [l,b,h]=S("bqB").split("|").map(x=>Number(x)/1000), j=V("bqJ")/1000, r=V("bqR");
    const perM3=1/((l+j)*(b+j)*(h+j)), nb=vol*perM3, nbW=nb*(1+V("bqW")/100), wet=vol-nb*l*b*h, dry=wet*V("bqDF"), cem=dry/(1+r), sand=dry*r/(1+r);
    return `<div class="kpis">${kpi("Masonry volume",fmt(vol,2),"m³")}${kpi("Bricks",fmt(Math.ceil(nbW),0),"incl. wastage")}${kpi("Cement",fmt(cem/BAG,1),"bags")}${kpi("Sand",fmt(sand,2),"m³")}</div>
    <div class="work">Volume = (L × H − openings) × t = ${fmt(vol,3)} m³
Bricks per m³ = 1 / ((${l*1000}+${j*1000}) × (${b*1000}+${j*1000}) × (${h*1000}+${j*1000}) mm³) = ${fmt(perM3,0)}
Bricks = ${fmt(nb,0)} + ${V("bqW")} % wastage = ${fmt(nbW,0)}
Wet mortar = volume − bricks × brick volume = ${fmt(wet,3)} m³; dry = × ${V("bqDF")} = ${fmt(dry,3)} m³
Cement (1 : ${r}) = ${fmt(cem,3)} m³ = ${fmt(cem/BAG,1)} bags; sand = ${fmt(sand,3)} m³</div>
    ${note("Measure the wall to IS 1200 Part 3 for billing; this tool orders materials for the volume entered. Frog filling and wall thickness rounding add a little mortar.")}`; } },
{ id:"plaster-qty", group:"Estimation", name:"Plaster materials", guide:"quantity-masonry",
  desc:"Cement and sand for an area of cement plaster.",
  form:()=>`<div class="form">${num("pqA","Area to plaster (m²)",100,0.01)}${sel("pqT","Thickness",[["12","12 mm"],["15","15 mm"],["20","20 mm"]],"12")}${sel("pqR","Mix",[["3","1 : 3"],["4","1 : 4"],["5","1 : 5"],["6","1 : 6"]],"4")}${num("pqDF","Dry volume factor",1.27,0.01)}${num("pqX","Extra for joints, unevenness and wastage (%)",20,1)}</div>`,
  run(){ const A=V("pqA"), t=V("pqT")/1000, r=V("pqR"); const wet=A*t, dry=wet*V("pqDF")*(1+V("pqX")/100), cem=dry/(1+r), sand=dry*r/(1+r);
    return `<div class="kpis">${kpi("Wet volume",fmt(wet,3),"m³")}${kpi("Dry volume",fmt(dry,3),"m³")}${kpi("Cement",fmt(cem/BAG,1),"bags")}${kpi("Sand",fmt(sand,2),"m³")}</div>
    <div class="work">Wet = ${A} × ${t} = ${fmt(wet,3)} m³; dry = × ${V("pqDF")} × (1 + ${V("pqX")} %) = ${fmt(dry,3)} m³
Cement = ${fmt(cem,3)} m³ = ${fmt(cem/BAG,1)} bags; sand = ${fmt(sand,3)} m³ (mix 1 : ${r})</div>
    ${note("Factors are site practice. Rough brick backgrounds need more mortar than smooth concrete; adjust the extra percentage to your experience.")}`; } },
{ id:"deductions", group:"Estimation", name:"Plaster and paint area with IS 1200 deductions", guide:"measurement-rules",
  desc:"Measured area of wall plaster or painting after the IS 1200 rules for openings and jambs.",
  form:()=>`<div class="form">${num("dqA","Gross wall area, one face (m²)",60,0.01)}${sel("dqF","Faces",[["1","One face"],["2","Both faces, same finish"]],"2")}${num("dqR","Reveal (jamb) depth for openings over 3 m² (m)",0.1,0.01)}<p class="small muted" style="margin:4px 0">Openings (width × height × number):</p>${rows(5,[["Width (m)","dw","1fr"],["Height (m)","dh","1fr"],["No.","dn","70px"]].map((c,ci)=>[...c,"number",ci===0?[1.0,1.2,0.6,2.4]:ci===1?[2.1,1.2,0.6,2.1]:[3,4,2,1]]))}</div>`,
  run(){ const A=V("dqA"), faces=+S("dqF"), rv=V("dqR"); let ded=0, add=0; const lines=[];
    for(let i=0;i<5;i++){ const w=V("dw"+i), h=V("dh"+i), n=V("dn"+i); if(!(w>0&&h>0&&n>0)) continue; const a=w*h;
      let d=0, ad=0, rule;
      if(a<=0.5){ rule="≤ 0.5 m²: no deduction, no jambs"; }
      else if(a<=3){ d=a*n*(faces===2?1:1); rule=faces===2?"0.5–3 m²: deduct one face only":"0.5–3 m²: deduct (single face measured)"; }
      else { d=a*n*faces; ad=(2*h+w)*rv*n*faces; rule="> 3 m²: deduct each face, add jambs and soffit"; }
      ded+=d; add+=ad; lines.push(`${n} × ${fmt(w,2)} × ${fmt(h,2)} = ${fmt(a,2)} m² each → ${rule}: −${fmt(d,2)}${ad?` +${fmt(ad,2)}`:""}`); }
    const gross=A*faces, net=gross-ded+add;
    return `<div class="kpis">${kpi("Gross area",fmt(gross,2),"m²")}${kpi("Deductions",fmt(ded,2),"m²")}${kpi("Jambs added",fmt(add,2),"m²")}${kpi("Measured area",fmt(net,2),"m²")}</div>
    <div class="work">${lines.join("\n")||"No openings entered"}\nMeasured = ${fmt(gross,2)} − ${fmt(ded,2)} + ${fmt(add,2)} = ${fmt(net,2)} m²</div>
    ${note("IS 1200 Part 12 / Part 13. For openings of 0.5–3 m² with different finishes on the two faces, deduct from the face with the narrower reveal (50 % each if equal). Jambs added here use the sill-less perimeter (2 × height + width) × reveal; adjust for sills.")}`; } },
{ id:"steel-takeoff", group:"Estimation", name:"Steel take-off by diameter", guide:"quantity-steel",
  desc:"Total length and mass of reinforcement by diameter from a simple bar list.",
  form:()=>`<div class="form"><p class="small muted" style="margin:0">Bar list: diameter, number of bars, cutting length.</p>${rows(8,[["Ø (mm)","sd","80px"],["No.","sn","1fr"],["Length (m)","sl","1fr"]].map((c,ci)=>[...c,"number",ci===0?[12,10,16,8]:ci===1?[48,120,24,300]:[6.2,3.4,7.8,1.4]]))}${num("sW","Wastage / rolling margin (%)",2,0.5)}</div>`,
  run(){ const by={}; let tot=0; for(let i=0;i<8;i++){ const d=V("sd"+i), n=V("sn"+i), l=V("sl"+i); if(!(d>0&&n>0&&l>0)) continue; const L=n*l, m=L*d*d/162; by[d]=by[d]||{L:0,m:0}; by[d].L+=L; by[d].m+=m; tot+=m; }
    const w=V("sW")/100, ds=Object.keys(by).map(Number).sort((a,b)=>a-b);
    return `<div class="kpis">${kpi("Total steel",fmt(tot*(1+w)/1000,3),"tonnes")}${kpi("Without wastage",fmt(tot,0),"kg")}</div>
    <div class="tscroll"><table><thead><tr><th>Ø (mm)</th><th>kg/m</th><th>Total length (m)</th><th>Mass (kg)</th></tr></thead><tbody>${ds.map(d=>`<tr><td>${d}</td><td>${fmt(d*d/162,3)}</td><td>${fmt(by[d].L,1)}</td><td>${fmt(by[d].m,1)}</td></tr>`).join("")}<tr><td><b>Total</b></td><td></td><td></td><td><b>${fmt(tot,1)}</b></td></tr></tbody></table></div>
    ${note("Mass = length × d²/162. Authorised laps, chairs and separators are measured; binding wire is not (IS 1200 Part 8).")}`; } },
{ id:"earthwork", group:"Estimation", name:"Trench excavation and disposal", guide:"earthwork-estimation",
  desc:"Excavation volume split into 1.5 m lifts, with backfill and truck loads for disposal.",
  form:()=>`<div class="form">${num("ewL","Trench length (m)",40,0.01)}${num("ewB","Width (m)",1.2,0.01)}${num("ewD","Depth (m)",2.2,0.01)}${num("ewF","Volume of foundation below ground (m³)",30,0.01,"PCC + footings + walls")}${num("ewBk","Bulking for disposal (%)",25,1,"varies by soil")}${num("ewT","Truck capacity (m³ loose)",6,0.5)}</div>`,
  run(){ const L=V("ewL"), B=V("ewB"), D=V("ewD"), Vf=V("ewF"); const lifts=[]; let d0=0; while(d0<D-1e-9){ const d1=Math.min(D,d0+1.5); lifts.push([d0,d1,L*B*(d1-d0)]); d0=d1; }
    const tot=L*B*D, back=Math.max(0,tot-Vf), surplus=tot-back, loose=surplus*(1+V("ewBk")/100), trucks=Math.ceil(loose/V("ewT"));
    return `<div class="kpis">${kpi("Excavation",fmt(tot,2),"m³")}${kpi("Backfill",fmt(back,2),"m³")}${kpi("Surplus (in place)",fmt(surplus,2),"m³")}${kpi("Truck loads",trucks)}</div>
    <div class="work">${lifts.map((l,i)=>`Lift ${i+1}: ${fmt(l[0],1)}–${fmt(l[1],2)} m depth = ${fmt(l[2],2)} m³`).join("\n")}
Backfill = excavation − foundation volume = ${fmt(back,2)} m³
Surplus = ${fmt(surplus,2)} m³ in place → loose ${fmt(loose,2)} m³ → ${trucks} trucks of ${V("ewT")} m³</div>
    ${note("Excavation is measured in place without bulking (IS 1200 Part 1); bulking is used only to plan disposal. Trenches deeper than 1.5 m in soil need shoring or sloping.")}`; } },
{ id:"rate-analysis", group:"Estimation", name:"Rate analysis builder", guide:"rate-analysis",
  desc:"Build up a rate from materials, labour and equipment, with water charges and contractor's profit and overheads.",
  form:()=>`<div class="form">${num("raQ","Analysis quantity (e.g. 1 m³, 10 m²)",1,0.01)}<p class="small muted" style="margin:4px 0">Materials, labour and plant: quantity × rate.</p>${rows(8,[["Item","rn","1.6fr","text"],["Qty","rq","0.8fr"],["Rate (₹)","rr","1fr"]].map((c,ci)=>[c[0],c[1],c[2],c[3]||"number",ci===0?["Cement (bags)","Sand (m³)","Aggregate (m³)","Mason (days)","Mazdoor (days)","Bhisti (days)","Mixer + vibrator",""]:ci===1?[8.07,0.42,0.84,0.17,1.9,0.7,1,""]:[400,2500,2200,900,650,650,300,""]]))}<div class="two">${num("raS","Sundries / T&P (%)",2,0.5)}${num("raWc","Water charges (%)",1,0.5)}</div>${num("raP","Contractor's profit and overheads (%)",15,0.5)}</div>`,
  run(){ let base=0; const lines=[]; for(let i=0;i<8;i++){ const q=V("rq"+i), r=V("rr"+i); if(!(q>0&&r>0)) continue; const a=q*r; base+=a; lines.push(`${(document.getElementById("rn"+i).value||"Item "+(i+1)).padEnd(20)} ${fmt(q,3).padStart(9)} × ${fmt(r,2).padStart(10)} = ${fmt(a,2).padStart(12)}`); }
    const s=base*V("raS")/100, sub=base+s, w=sub*V("raWc")/100, p=(sub+w)*V("raP")/100, total=sub+w+p, per=total/(V("raQ")||1);
    return `<div class="kpis">${kpi("Direct cost",fmt(base,0),"₹")}${kpi("Total",fmt(total,0),"₹")}${kpi("Rate per unit",fmt(per,2),"₹")}</div>
    <div class="work">${lines.join("\n")}
Sundries / T&P ${V("raS")} %      = ${fmt(s,2)}
Sub-total                      = ${fmt(sub,2)}
Water charges ${V("raWc")} %          = ${fmt(w,2)}
Profit and overheads ${V("raP")} %  = ${fmt(p,2)}
Total for ${V("raQ")} unit(s)            = ${fmt(total,2)}  →  ${fmt(per,2)} per unit</div>
    ${note("The quantities and rates shown are placeholders: enter your own material rates, wages and labour constants (IS 7272 or your department's analysis of rates). Taxes are not included.")}`; } }
);
})();
