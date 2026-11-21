/* ===================== APP ENGINE ===================== */
(function(){
const app = document.getElementById("app");
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const strip = s => String(s).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();
const G = id => SITE.guides.find(g=>g.id===id), TL = id => SITE.tools.find(t=>t.id===id), FM = id => SITE.forms.find(x=>x.id===id), RL = id => SITE.roles.find(p=>p.id===id), TK = id => SITE.tasks.find(t=>t.id===id);
const MEM = {}; const store = { get(k,d){ if(k in MEM) return MEM[k]; try{ const v=localStorage.getItem(k); if(v!==null) return (MEM[k]=JSON.parse(v)); }catch(e){} return d; }, set(k,v){ MEM[k]=v; try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} } };
const icon = id => `<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">${SITE.icons[id]||""}</svg>`;
const firstSentence = s => { const t=strip(s); const i=t.indexOf(". "); return i>0 ? t.slice(0,i+1) : t; };
const guideCard = g => `<a class="card" href="#/guide/${g.id}"><div class="eyebrow">${g.cat}</div><h3>${g.title}</h3><p>${firstSentence(g.lede)}</p></a>`;
const toolCard = t => `<a class="card" href="#/tool/${t.id}"><div class="eyebrow">${t.group}</div><h3>${t.name}</h3><p>${t.desc}</p></a>`;
const formCard = x => `<a class="card" href="#/form/${x.id}"><div class="eyebrow">${x.ref} · ${x.group}</div><h3>${x.name}</h3><p>${x.when}</p></a>`;
const searchBox = big => `<div class="searchbox" role="search"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><input type="search" class="q-in" placeholder="${big?"Try: parking for a hospital, sand zone, cube acceptance, fire NOC, ramp slope…":"Search"}" aria-label="Search"><div class="results"></div></div>`;
const count = () => { const words = SITE.guides.reduce((n,g)=>n+strip(g.lede+" "+g.body).split(" ").length,0); return {g:SITE.guides.length, t:SITE.tools.length, f:SITE.forms.length, w:Math.round(words/1000)}; };

/* ---------- Views ---------- */
function vHome(){
  const c=count();
  return `<section style="padding-top:10px"><div class="eyebrow">Indian building codes, explained</div>
  <h1>The codes, explained for the people who use them.</h1>
  <p class="lede">Clear, sourced answers from the IS codes, the National Building Code and the model building bye-laws, for site engineers, students, designers, drafting teams, architects, lawyers, approval officers, services engineers and owners. Start from who you are, or from what you need to do.</p>
  <div style="max-width:660px;margin:18px 0 10px">${searchBox(true)}</div>
  <div class="chips">${[["Minimum room sizes","guide/room-sizes"],["Sand grading zone","tool/sand-zone"],["Cube pass / fail","tool/cube-accept"],["Parking norms","guide/parking"],["Which fire systems?","guide/fire-systems"],["Application form","form/a"],["Wheelchair ramp","guide/accessibility"],["FAR for my plot","tool/far"]].map(([t,h])=>`<a class="chip" href="#/${h}">${t}</a>`).join("")}</div>
  <div class="stats muted small"><div><b>${c.g}</b>guides</div><div><b>${c.t}</b>tools</div><div><b>${c.f}</b>forms, as original pages</div><div><b>~${c.w}k</b>words of explanation</div></div></section>
  <section class="section split">
   <div class="panel"><h2><span class="ic" style="margin:0">${icon("student")}</span>Guides by role</h2><p class="muted small" style="margin:0">Who are you today? Each role has a reading path, its key numbers, and the tools and forms it needs.</p>
    <ul class="plist">${SITE.roles.map(r=>`<li><a href="#/role/${r.id}"><span class="ic">${icon(r.id)}</span><span><span class="t">${r.name}</span><br><span class="s">${r.short}</span></span></a></li>`).join("")}</ul></div>
   <div class="panel"><h2><span class="ic warm" style="margin:0">${icon("permit")}</span>Guides by task</h2><p class="muted small" style="margin:0">What do you need to get done? Each task gives the steps in order, a checklist, and the tools and forms for it.</p>
    <ul class="plist">${SITE.tasks.map(t=>`<li><a href="${t.link||"#/task/"+t.id}"><span class="ic warm">${icon(t.icon)}</span><span><span class="t">${t.name}</span><br><span class="s">${t.short}</span></span></a></li>`).join("")}</ul></div>
  </section>
  <section class="section"><h2>Numbers people look up every day</h2><div class="grid g-small">${[["9.5 m²","Smallest habitable room, 2.4 m wide","Model Building Bye-Laws 4.3","room-sizes"],["190 / 150 mm","Max riser: homes / other buildings","Model Building Bye-Laws 4.17","stairs-exits"],["1 : 12","Steepest wheelchair ramp","Model Building Bye-Laws 8.4","accessibility"],["24 m","Sprinklers required from this height (45 m for group housing)","Model Building Bye-Laws 11.21","fire-systems"],["45 mm","Concrete cover, severe exposure","IS 456 Table 16","concrete-on-site"],["600 µm","The sieve that decides the sand zone","IS 383 Table 4","aggregate-tests"],["fck + 1.65 s","Target mean strength","IS 10262","mix-design"],["16 %","Min. elongation of Fe 500D","IS 1786 Table 3","steel-tests"]].map(([n,l,s,g])=>`<a class="card fact" href="#/guide/${g}"><span class="n">${n}</span><span class="l">${l}</span><span class="src">${s}</span></a>`).join("")}</div></section>`;
}
function vRoles(){ return `<h1>Guides by role</h1><p class="lede">Pick the role that fits. Each page explains what matters most to you, gives a reading path in order, the numbers you will use most, and the tools and forms you are likely to need.</p><div class="grid g-cards" style="margin-top:20px">${SITE.roles.map(r=>`<a class="card" href="#/role/${r.id}"><div class="ic">${icon(r.id)}</div><h3>${r.name}</h3><p>${r.short}</p><span class="go">Open →</span></a>`).join("")}</div>`; }
function vTasks(){ return `<h1>Guides by task</h1><p class="lede">Start from what you need to get done. Each task lists the guides in the order you need them, a checklist, and the tools and forms for the job.</p><div class="grid g-cards" style="margin-top:20px">${SITE.tasks.map(t=>`<a class="card" href="${t.link||"#/task/"+t.id}"><div class="ic warm">${icon(t.icon)}</div><h3>${t.name}</h3><p>${t.short}</p><span class="go">Open →</span></a>`).join("")}</div>`; }
function asideLists(tools, forms, extra){
  return `${tools&&tools.length?`<div class="card"><h4>Tools</h4>${tools.map(t=>TL(t)?`<a class="row" href="#/tool/${t}">${TL(t).name}</a>`:"").join("")}</div>`:""}
  ${forms&&forms.length?`<div class="card"><h4>Forms</h4>${forms.map(x=>FM(x)?`<a class="row" href="#/form/${x}">${FM(x).ref}: ${FM(x).name}</a>`:"").join("")}</div>`:""}${extra||""}`;
}
function vRole(id){
  const p=RL(id); if(!p) return vNF();
  return `<div class="crumbs"><a href="#/">Home</a> / <a href="#/roles">Guides by role</a> / ${p.name}</div>
  <div class="cols"><div>
   <div style="display:flex;gap:14px;align-items:center;margin-bottom:8px"><div class="ic" style="margin:0">${icon(p.id)}</div><h1 style="margin:0;font-size:clamp(1.6rem,3.5vw,2.3rem)">${p.name}</h1></div>
   <p class="lede">${p.intro}</p>
   <h2 style="margin-top:28px">Start here</h2><ol class="pathlist">${p.path.map(g=>G(g)?`<li><a href="#/guide/${g}"><div><div class="t">${G(g).title}</div><div class="s">${G(g).short[0]}</div></div></a></li>`:"").join("")}</ol>
   <h2 style="margin-top:32px">Numbers you'll use most</h2><div class="grid g-small">${p.facts.map(([n,l,s])=>`<div class="card fact"><span class="n">${n}</span><span class="l">${l}</span><span class="src">${s}</span></div>`).join("")}</div>
   ${p.tasks&&p.tasks.length?`<h2 style="margin-top:32px">Tasks for you</h2><div class="grid g-cards">${p.tasks.map(t=>TK(t)?`<a class="card" href="${TK(t).link||"#/task/"+t}"><div class="ic warm">${icon(TK(t).icon)}</div><h3>${TK(t).name}</h3><p>${TK(t).short}</p></a>`:"").join("")}</div>`:""}
  </div><aside class="aside">${asideLists(p.tools,p.forms, p.id==="student"?`<div class="card"><h4>Practise</h4><a class="row" href="#/learn">Practice questions</a></div>`:"")}
   <div class="card"><h4>Other roles</h4>${SITE.roles.filter(x=>x.id!==p.id).map(x=>`<a class="row" href="#/role/${x.id}">${x.name}</a>`).join("")}</div></aside></div>`;
}
function vTask(id){
  const t=TK(id); if(!t) return vNF(); if(t.link){ location.hash=t.link; return ""; }
  const key="task-"+id, ch=store.get(key,{});
  setTimeout(()=>{ app.querySelectorAll(".tcheck").forEach(cb=>cb.addEventListener("change",()=>{ const c=store.get(key,{}); c[cb.dataset.i]=cb.checked; store.set(key,c); })); });
  return `<div class="crumbs"><a href="#/">Home</a> / <a href="#/tasks">Guides by task</a> / ${t.name}</div>
  <div class="cols"><div>
   <div style="display:flex;gap:14px;align-items:center;margin-bottom:8px"><div class="ic warm" style="margin:0">${icon(t.icon)}</div><h1 style="margin:0;font-size:clamp(1.6rem,3.5vw,2.3rem)">${t.name}</h1></div>
   <p class="lede">${t.intro}</p>
   <h2 style="margin-top:28px">Steps, in order</h2><ol class="pathlist">${t.steps.map(g=>G(g)?`<li><a href="#/guide/${g}"><div><div class="t">${G(g).title}</div><div class="s">${G(g).short[0]}</div></div></a></li>`:"").join("")}</ol>
   <h2 style="margin-top:32px">Checklist</h2><div class="card"><ul class="check" style="list-style:none;padding:0;margin:0">${t.checklist.map((c,i)=>`<li style="padding:6px 0 6px 0;display:flex;gap:10px;align-items:flex-start"><input type="checkbox" class="tcheck" data-i="${i}" id="tc${i}" ${ch[i]?"checked":""} style="margin-top:5px;accent-color:var(--brand)"><label for="tc${i}">${c}</label></li>`).join("")}</ul><p class="small muted" style="margin:8px 0 0">Ticks are saved in this browser only.</p></div>
  </div><aside class="aside">${asideLists(t.tools,t.forms)}
   <div class="card"><h4>Other tasks</h4>${SITE.tasks.filter(x=>x.id!==t.id).map(x=>`<a class="row" href="${x.link||"#/task/"+x.id}">${x.name}</a>`).join("")}</div></aside></div>`;
}
function vGuides(){
  const cats=[...new Set(SITE.guides.map(g=>g.cat))];
  return `<h1>All guides</h1><p class="lede">Every guide explains one topic in plain language: what the rule is, why it exists, the numbers, how to check it, and where it comes from.</p>
  <div class="chips" style="margin:14px 0">${cats.map(c=>`<a class="chip" href="#/guides" onclick="event.preventDefault();document.getElementById('cat-${c.replace(/\W+/g,"")}').scrollIntoView({behavior:'smooth'})">${c} (${SITE.guides.filter(g=>g.cat===c).length})</a>`).join("")}</div>
  ${cats.map(c=>`<section class="section" style="margin-top:30px" id="cat-${c.replace(/\W+/g,"")}"><h2>${c}</h2><div class="grid g-cards">${SITE.guides.filter(g=>g.cat===c).map(guideCard).join("")}</div></section>`).join("")}`;
}
function vGuide(id){
  const g=G(id); if(!g) return vNF();
  const i=SITE.guides.indexOf(g), prev=SITE.guides[i-1], next=SITE.guides[i+1];
  const roles=SITE.roles.filter(p=>p.path.includes(g.id)), tasks=SITE.tasks.filter(t=>t.steps.includes(g.id)), tools=SITE.tools.filter(t=>t.guide===g.id);
  // number headings for a contents list
  let n=0; const body=g.body.replace(/<h2([^>]*)>(.*?)<\/h2>/g,(m,a,txt)=>`<h2 id="h${++n}">${txt}</h2>`);
  const heads=[...body.matchAll(/<h2 id="(h\d+)">(.*?)<\/h2>/g)];
  setTimeout(()=>{ app.querySelectorAll(".toc a").forEach(a=>a.addEventListener("click",e=>{ e.preventDefault(); const el=document.getElementById(a.dataset.t); if(el) el.scrollIntoView({behavior:"smooth"}); })); });
  return `<div class="crumbs"><a href="#/">Home</a> / <a href="#/guides">Guides</a> / ${g.cat}</div>
  <div class="cols"><article class="guide">
   <div class="eyebrow">${g.cat}</div><h1 style="font-size:clamp(1.7rem,3.6vw,2.4rem)">${g.title}</h1>
   <p class="lede">${g.lede}</p>
   <div class="inshort"><b>In short</b><ul>${g.short.map(s=>`<li>${s}</li>`).join("")}</ul></div>
   ${body}
   <div class="source"><b>Where this comes from:</b> ${g.src}</div>
   <div class="pager">${prev?`<a href="#/guide/${prev.id}"><span>← Previous</span>${prev.title}</a>`:"<span></span>"}${next?`<a class="next" href="#/guide/${next.id}"><span>Next →</span>${next.title}</a>`:"<span></span>"}</div>
  </article><aside class="aside">
   ${heads.length>2?`<div class="card toc"><h4>On this page</h4>${heads.map(h=>`<a href="#" data-t="${h[1]}">${strip(h[2])}</a>`).join("")}</div>`:""}
   ${tools.length?`<div class="card"><h4>Try it</h4>${tools.map(t=>`<a class="row" href="#/tool/${t.id}">${t.name}</a>`).join("")}</div>`:""}
   ${roles.length?`<div class="card"><h4>Useful for</h4><div class="tags">${roles.map(p=>`<a class="tag" href="#/role/${p.id}">${p.name}</a>`).join("")}</div></div>`:""}
   ${tasks.length?`<div class="card"><h4>Part of these tasks</h4>${tasks.map(t=>`<a class="row" href="#/task/${t.id}">${t.name}</a>`).join("")}</div>`:""}
   ${g.rel&&g.rel.length?`<div class="card"><h4>Read next</h4>${g.rel.map(r=>G(r)?`<a class="row" href="#/guide/${r}">${G(r).title}</a>`:"").join("")}</div>`:""}
  </aside></div>`;
}
function vTools(){
  const groups=[...new Set(SITE.tools.map(t=>t.group))];
  return `<h1>Tools</h1><p class="lede">Every tool shows its working, so you can follow and check the calculation. They are for learning, site checks and preliminary design, not a replacement for full design by a qualified engineer.</p>
  ${groups.map(gp=>`<section class="section" style="margin-top:28px"><h2>${gp}</h2><div class="grid g-cards">${SITE.tools.filter(t=>t.group===gp).map(toolCard).join("")}</div></section>`).join("")}`;
}
function vTool(id){
  const t=TL(id); if(!t) return vNF();
  setTimeout(()=>{ const out=document.getElementById("toolout"); const go=()=>{ try{ out.innerHTML=t.run(); }catch(e){ out.innerHTML=`<p class="badc">Please check the inputs.</p>`; } }; app.querySelectorAll(".form input,.form select").forEach(el=>el.addEventListener("input",go)); go(); });
  return `<div class="crumbs"><a href="#/">Home</a> / <a href="#/tools">Tools</a> / ${t.group}</div>
  <h1 style="font-size:clamp(1.6rem,3.4vw,2.2rem)">${t.name}</h1><p class="lede" style="font-size:1rem">${t.desc} The background is explained in <a href="#/guide/${t.guide}">${G(t.guide)?G(t.guide).title:"the guide"}</a>.</p>
  <div class="tool" style="margin-top:16px"><div class="card">${t.form()}</div><div class="card" id="toolout" aria-live="polite"></div></div>`;
}
function vForms(){
  const groups=["Application","During construction","Completion","Fire","Issued by the Authority"];
  return `<h1>Forms</h1>
  <p class="lede">Every form is shown as the <b>original page</b> from the Model Building Bye-Laws 2016, ready to print. The forms an applicant fills in also have a <b>fill-in version</b> set in the original typeface: type on screen, then print or save as PDF. Nothing you type leaves your browser.</p>
  <div class="note" style="max-width:760px">These are the national model formats. Your city or State may use its own forms or an online portal, so check with the local Authority before submitting.</div>
  <h2 style="margin-top:26px">The approval journey</h2>
  <ol class="journey">${[["1","Application","Notice with plans, area statement, specifications, supervision certificate, professional's affidavit, ownership papers and NOCs.",["a","a1","a2","a3","a4","a5","b","b1","c"]],["2","Scrutiny and sanction","The Authority sanctions or refuses. Deemed sanction after 15 days of silence, subject to conditions.",["a6","a7","a8"]],["3","Plinth inspection","Notice at plinth level; the Authority objects within 15 days or work continues.",["a10","a11"]],["4","Completion","Notice of completion with the professionals' certificate, structural stability certificate, fire and lift clearances.",["a12","a13"]],["5","Occupancy","Completion-cum-occupancy certificate within 15 days (plotted) or 20 days (group housing), or rejection with reasons.",["a14","a15"]]].map(([n,t,s,fs])=>`<li><div class="dot">${n}</div><div><div class="t">${t}</div><div class="s">${s}</div><div class="chips" style="margin-top:6px">${fs.map(x=>`<a class="chip" href="#/form/${x}">${FM(x).ref}</a>`).join("")}</div></div></li>`).join("")}</ol>
  ${groups.map(gp=>{ const list=SITE.forms.filter(x=>x.group===gp); return list.length?`<section class="section" style="margin-top:26px"><h2>${gp}</h2><div class="grid g-cards">${list.map(formCard).join("")}</div></section>`:""; }).join("")}`;
}
function vForm(id){
  const x=FM(id); if(!x) return vNF();
  const hasDoc=!!x.doc; const tab=store.get("formtab","orig")==="fill"&&hasDoc?"fill":"orig";
  setTimeout(()=>{
    const setTab=t=>{ store.set("formtab",t); app.querySelectorAll(".tabsbar button").forEach(b=>b.setAttribute("aria-selected",b.dataset.t===t)); app.querySelector(".orig").style.display=t==="orig"?"":"none"; const d=app.querySelector(".doc"); if(d) d.style.display=t==="fill"?"":"none"; };
    app.querySelectorAll(".tabsbar button").forEach(b=>b.onclick=()=>setTab(b.dataset.t));
    app.querySelectorAll("[data-print]").forEach(b=>b.onclick=()=>doPrint(b.dataset.print));
    const clr=app.querySelector("#clearform"); if(clr) clr.onclick=()=>app.querySelectorAll(".doc .f").forEach(i=>i.value="");
  });
  return `<div class="crumbs"><a href="#/">Home</a> / <a href="#/forms">Forms</a> / ${x.ref}</div>
  <div class="noprint"><div class="eyebrow">${x.ref} · Model Building Bye-Laws 2016</div><h1 style="font-size:clamp(1.6rem,3.4vw,2.2rem)">${x.name}</h1>
  <p class="lede" style="font-size:1.02rem">${x.why}</p>
  <div class="grid g-cards" style="margin:14px 0"><div class="card"><div class="eyebrow">Who</div><p style="margin:.3em 0 0">${x.who}</p></div><div class="card"><div class="eyebrow">When</div><p style="margin:.3em 0 0">${x.when}</p></div></div>
  ${hasDoc?`<div class="tabsbar" role="tablist"><button data-t="orig" aria-selected="${tab==="orig"}">Original page</button><button data-t="fill" aria-selected="${tab==="fill"}">Fill in online</button></div>`:""}
  <div class="btnrow"><button class="btn primary" data-print="orig">Print original form</button>${hasDoc?`<button class="btn" data-print="fill">Print my filled form</button><button class="btn" id="clearform">Clear fields</button>`:""}</div>
  <p class="small muted">${hasDoc?"The original page prints exactly as published. The fill-in version uses the same wording and typeface; type into the dotted fields.":"This form is issued or completed by the Authority, so it is shown as the original page only."}</p></div>
  <div class="orig" style="${tab==="orig"?"":"display:none"}">${x.pages.map((src,i)=>`<figure><img src="${src}" alt="${x.ref}, page ${i+1}"><figcaption>${x.ref}, page ${i+1} of ${x.pages.length} · Model Building Bye-Laws 2016 (TCPO)</figcaption></figure>`).join("")}</div>
  ${hasDoc?`<div class="doc" style="${tab==="fill"?"":"display:none"}">${x.doc()}</div>`:""}`;
}
function doPrint(mode){
  document.body.dataset.print = mode;
  const imgs=[...app.querySelectorAll(".orig img")]; imgs.forEach(i=>i.loading="eager");
  Promise.all(imgs.map(i=>i.complete?1:new Promise(r=>{i.onload=i.onerror=r;}))).then(()=>{ window.print(); });
}
window.addEventListener("afterprint",()=>{ delete document.body.dataset.print; });

let track=store.get("track",null), qOrder={};
function vLearn(){
  const path=["loads","wind","earthquake","rcc-design","ductile","steel","masonry-design","soil-investigation","foundations","tall","cement-tests","aggregate-tests","mix-design","cube-tests"];
  setTimeout(bindQuiz);
  return `<h1>Learn</h1><p class="lede">Follow the design of a building from loads to foundations, then the materials and tests that make it real. Read each guide, try the matching tool, then test yourself.</p>
  <h2 style="margin-top:24px">Study path</h2><ol class="pathlist">${path.map(id=>{const g=G(id), t=SITE.tools.find(x=>x.guide===id); return g?`<li><a href="#/guide/${id}"><div><div class="t">${g.title}</div><div class="s">${g.short[0]}${t?` · Tool: ${t.name}`:""}</div></div></a></li>`:"";}).join("")}</ol>
  <h2 style="margin-top:34px">Practice questions</h2><p class="muted">Choose a level to begin. Each answer is explained, with a link to the guide behind it.</p>
  <div class="seg" role="group" aria-label="Choose a level"><button data-track="btech" aria-pressed="${track==="btech"}">B.Tech · GATE / ESE (${SITE.quiz.btech.qs.length})</button><button data-track="masters" aria-pressed="${track==="masters"}">Masters · Expert (${SITE.quiz.masters.qs.length})</button></div>
  <div id="quiz" style="margin-top:18px"></div>`;
}
function bindQuiz(){ document.querySelectorAll(".seg button[data-track]").forEach(b=>b.onclick=()=>{ track=b.dataset.track; store.set("track",track); document.querySelectorAll(".seg button[data-track]").forEach(x=>x.setAttribute("aria-pressed",x.dataset.track===track)); renderQuiz(); }); renderQuiz(); }
function renderQuiz(){
  const box=document.getElementById("quiz"); if(!box) return; if(!track){ box.innerHTML=""; return; }
  const Q=SITE.quiz[track]; if(!qOrder[track]) qOrder[track]=Q.qs.map((_,i)=>i);
  const ans=store.get("ans-"+track,{}); const got=Object.entries(ans).filter(([i,a])=>Q.qs[i]&&Q.qs[i].a===a).length;
  box.innerHTML=`<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:12px"><b>${Q.label}</b><span class="muted">Score ${got} / ${Object.keys(ans).length} answered of ${Q.qs.length}</span><span style="flex:1"></span><button class="btn" id="qs">Shuffle</button><button class="btn" id="qr">Start again</button></div>`+
  qOrder[track].map((qi,n)=>{ const q=Q.qs[qi], a=ans[qi]; return `<div class="q ${a!==undefined?"done":""}" data-qi="${qi}"><div class="qt">${n+1}. ${q.q}</div><div class="opts">${q.o.map((o,oi)=>`<button data-oi="${oi}" ${a!==undefined?"disabled":""} class="${a!==undefined?(oi===q.a?"right":oi===a?"wrong":""):""}">${"ABCD"[oi]}. ${o}</button>`).join("")}</div><div class="exp">${a===q.a?'<span class="okc">Correct.</span> ':'<span class="badc">Not quite.</span> '}${q.e} ${G(q.g)?`<a href="#/guide/${q.g}">Read: ${G(q.g).title}</a>`:""}</div></div>`; }).join("");
  box.querySelectorAll(".opts button").forEach(b=>b.onclick=()=>{ const qi=+b.closest(".q").dataset.qi; const s=store.get("ans-"+track,{}); s[qi]=+b.dataset.oi; store.set("ans-"+track,s); renderQuiz(); });
  document.getElementById("qs").onclick=()=>{ const o=qOrder[track]; for(let i=o.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [o[i],o[j]]=[o[j],o[i]]; } renderQuiz(); };
  document.getElementById("qr").onclick=()=>{ store.set("ans-"+track,{}); renderQuiz(); };
}
function vNF(){ return `<h1>Page not found</h1><p><a href="#/">Go to the home page</a></p>`; }

/* ---------- Search ---------- */
const INDEX=[];
SITE.guides.forEach(g=>INDEX.push({k:"Guide · "+g.cat,t:g.title,s:g.lede,h:"#/guide/"+g.id,text:(g.title+" "+g.lede+" "+g.short.join(" ")+" "+strip(g.body)+" "+g.cat).toLowerCase()}));
SITE.tools.forEach(t=>INDEX.push({k:"Tool",t:t.name,s:t.desc,h:"#/tool/"+t.id,text:(t.name+" "+t.desc+" calculator tool check "+t.group).toLowerCase()}));
SITE.forms.forEach(x=>INDEX.push({k:"Form · "+x.ref,t:x.name,s:x.why,h:"#/form/"+x.id,text:(x.name+" "+x.ref+" "+x.why+" "+x.when+" "+x.who+" form application certificate appendix").toLowerCase()}));
SITE.roles.forEach(p=>INDEX.push({k:"Role",t:p.name,s:p.short,h:"#/role/"+p.id,text:(p.name+" "+p.short+" "+p.intro).toLowerCase()}));
SITE.tasks.forEach(p=>INDEX.push({k:"Task",t:p.name,s:p.short,h:p.link||"#/task/"+p.id,text:(p.name+" "+p.short+" "+p.intro+" "+p.checklist.join(" ")).toLowerCase()}));
const hl=(s,terms)=>{ let h=esc(s); terms.forEach(t=>{ if(t.length>1) h=h.replace(new RegExp("("+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig"),"<mark>$1</mark>"); }); return h; };
function search(q){ const terms=q.toLowerCase().split(/\s+/).filter(Boolean); if(!terms.length) return [];
  return INDEX.map(e=>{ let sc=0; for(const t of terms){ const tt=t.length>3?t.replace(/s$/,""):t; if(!e.text.includes(tt)) return null; sc+=(e.t.toLowerCase().includes(tt)?6:0)+(e.s.toLowerCase().includes(tt)?2:0)+1; } return {e,sc}; }).filter(Boolean).sort((a,b)=>b.sc-a.sc).slice(0,14); }
function snippet(e,terms){ const t=terms.map(x=>x.length>3?x.replace(/s$/,""):x).find(x=>x.length>2&&!e.t.toLowerCase().includes(x)); if(!t) return e.s.length>150?e.s.slice(0,150)+"…":e.s; const i=e.text.indexOf(t); return i<0?e.s.slice(0,150):"…"+e.text.slice(Math.max(0,i-70),i+100)+"…"; }
document.addEventListener("input",ev=>{ const inp=ev.target.closest(".q-in"); if(!inp) return; const box=inp.parentElement.querySelector(".results"); const q=inp.value.trim(); if(!q){ box.classList.remove("open"); return; } const terms=q.toLowerCase().split(/\s+/); const r=search(q);
  box.innerHTML=r.length?r.map(({e})=>`<a href="${e.h}"><div class="k">${e.k}</div><div class="t">${hl(e.t,terms)}</div><div class="s">${hl(snippet(e,terms),terms)}</div></a>`).join(""):`<div style="padding:12px 14px" class="muted small">Nothing found for “${esc(q)}”. Try a simpler word: stair, cover, parking, fire, sand, cube.</div>`; box.classList.add("open"); });
document.addEventListener("click",ev=>{ if(!ev.target.closest(".searchbox")) document.querySelectorAll(".results").forEach(r=>r.classList.remove("open")); if(ev.target.closest(".results a")){ document.querySelectorAll(".results").forEach(r=>r.classList.remove("open")); document.querySelectorAll(".q-in").forEach(i=>i.value=""); } });
document.addEventListener("keydown",ev=>{ if(ev.key==="/"&&!/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)){ ev.preventDefault(); document.querySelector(".q-in").focus(); } if(ev.key==="Escape") document.querySelectorAll(".results").forEach(r=>r.classList.remove("open")); if(ev.key==="ArrowDown"&&ev.target.closest(".q-in")){ const a=ev.target.parentElement.querySelector(".results a"); if(a){ ev.preventDefault(); a.focus(); } } });

/* ---------- Router ---------- */
function route(){
  const raw=location.hash.replace(/^#\/?/,""), [path,qs]=raw.split("?"), [a,b]=path.split("/");
  let html, nav="home";
  switch(a){
    case "": case undefined: html=vHome(); break;
    case "roles": html=vRoles(); nav="roles"; break;
    case "role": case "for": html=vRole(b); nav="roles"; break;
    case "tasks": html=vTasks(); nav="tasks"; break;
    case "task": html=vTask(b); nav="tasks"; break;
    case "guides": html=vGuides(); nav="guides"; break;
    case "guide": html=vGuide(b); nav="guides"; break;
    case "tools": html=vTools(); nav="tools"; break;
    case "tool": html=vTool(b); nav="tools"; break;
    case "forms": html=vForms(); nav="forms"; break;
    case "form": html=vForm(b); nav="forms"; break;
    case "learn": html=vLearn(); nav="learn"; break;
    default: html=vNF();
  }
  if(html==="") return;
  app.innerHTML=`<div class="view">${html}</div>`;
  document.querySelectorAll("nav.main a").forEach(x=>x.classList.toggle("on",x.dataset.nav===nav));
  window.scrollTo(0,0);
  const t=app.querySelector("h1"); document.title=(t&&a?t.textContent.trim()+" · ":"")+"Building Code Companion";
  // ?print=orig|fill sets print mode (used for print previews and testing)
  const pm=new URLSearchParams(qs||"").get("print"); if(pm){ document.body.dataset.print=pm; if(a==="form"){ const tb=app.querySelector(`.tabsbar button[data-t="${pm}"]`); if(tb) setTimeout(()=>tb.click()); } } else delete document.body.dataset.print;
}
window.addEventListener("hashchange",route);
(function(){ const s=store.get("theme",null); if(s) document.documentElement.dataset.theme=s;
  document.getElementById("theme").onclick=()=>{ const cur=document.documentElement.dataset.theme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"); const n=cur==="dark"?"light":"dark"; document.documentElement.dataset.theme=n; store.set("theme",n); }; })();
window.SITE_ROUTE = route;
route();
})();
