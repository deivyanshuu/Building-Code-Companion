/* Forms from the Model Building Bye-Laws 2016 (TCPO).
   pages: original page images (print-ready).  doc: a fill-in version set in the original typeface (Times New Roman). */
const HEAD = (ref, bl, sub) => `<div class="ref">Appendix “${ref}”</div><div class="sub">(Bye laws ${bl})${sub?`<br>(${sub})`:""}</div>`;
SITE.forms = [
 { id:"a", ref:"Appendix A", name:"Application to erect, re-erect or alter a building", group:"Application", pages:["forms/a-1.png","forms/a-2.png"],
   who:"Owner, with the registered architect / engineer / supervisor", when:"Filed with the building plans when applying for a permit (in duplicate)",
   why:"The formal notice of intention to build. It lists every plan and document submitted, and records the professional's undertaking that the plans follow the bye-laws, the IS codes and the NBC, and that they remain accountable for six months after completion.",
   doc:()=>`${HEAD("A","2.9.1 &amp; 6.3.5","To be submitted in duplicate")}
<h3>Form for Application to Erect, Re-Erect or to make Material Alteration in any Place in a Building</h3>
<p>To<br>&emsp;&emsp;${F("Commissioner / Vice Chairman / Secretary",300)}<br>&emsp;&emsp;${F("Development Authority",260)}</p>
<p>Sir,</p>
<p>I hereby give notice on behalf of Shri ${F("",220)} (owner) that the owner intends to erect / demolish or make alteration in the building number or to on / in Plot No ${F("",90)} Block No ${F("",80)} House No ${F("",80)} situated at ${F("",200)} Scheme ${F("",160)} and in accordance with the building Bye-law No ${F("",120)} and I forward herewith, the following plans and specification duly signed by me and by the owner.</p>
<ol><li>Site plan</li><li>Building Plan</li><li>Service Plan</li><li>Parking and circulation plan.</li><li>Landscape Plan</li><li>General Specifications (in attached form)</li><li>Ownership Title (Lease / Conveyance / Sale Deed, etc)</li><li>Other document, as required ${F("",240)}</li></ol>
<p>ii) The building plan has been prepared strictly as per the approved building Byelaws and relevant IS Codes / provisions of NBC. The construction shall be carried out in accordance with the building plan and I shall be completely accountable for any lapse on my part up to within 6 months after obtaining completion certificate of the building.</p>
<p>iii) The Building permit fee as required under bye-laws 2.13 has been deposited vide receipt No ${F("",120)} dated ${F("",110)} (Photocopy enclosed).</p>
<p>iv) I am aware that in the event of building being constructed in violation of the sanctioned building plan approval, the Authority shall have the right to take action against me as it may deem fit including referring the matter to concerned professional and statutory councils for taking disciplinary action against me.</p>
${SIG(`Signature of the Owners<br>Name of owner(s) ${F("",170)}<br>Address of the owner(s) ${F("",170)}`,`(Signature of Registered Architect / Engineer / Supervisor)<br>Registration No. ${F("",130)}<br>Address ${F("",200)}`)}
<p style="margin-top:16px">Encl: As stated above<br>Dated: ${F("",110)}</p>` },

 { id:"a1", ref:"Appendix A-1", name:"Statement of the proposal and certificate (area statement)", group:"Application", pages:["forms/a1-1.png","forms/a1-2.png","forms/a1-3.png"],
   who:"Owner and registered architect", when:"With the application",
   why:"Sets out permissible against proposed values (coverage, floor-wise areas, FAR, dwelling units, height, setbacks and parking), the fees paid, and the owner's and architect's certificate about the plot.",
   doc:()=>`${HEAD("A-1","2.9.1")}
<h3>Statement of the Proposal and Certificate by the Owner and Registered Architect</h3>
<p>Classification of the Proposal (To erect / re-erect / demolition) ${F("",160)}<br>Scheme / Colony ${F("",180)} Plot No. ${F("",80)} Plot Area ${F("",80)} sq.mt. Size (in meter) ${F("",100)}</p>
<table><thead><tr><th>Area Statement Description</th><th>Permissible sq.mt.</th><th>Proposed sq.mt.</th><th>Remarks</th></tr></thead><tbody>${["Max. Ground coverage","Basement","Ground Floor","First Floor","Second Floor","Third Floor","Total Floor area","Floor Area Ratio","No. of Dwelling Units","Maximum height (in meters)"].map(r=>`<tr><td>${r}</td><td>${F("",80)}</td><td>${F("",80)}</td><td>${F("",100)}</td></tr>`).join("")}</tbody></table>
<p><b>Setbacks</b></p>
<table><thead><tr><th></th><th>As per approved Layout plan (mt.)</th><th>Proposed (mt.)</th></tr></thead><tbody>${["Front","Rear","Left","Right"].map(r=>`<tr><td>${r}</td><td>${F("",80)}</td><td>${F("",80)}</td></tr>`).join("")}</tbody></table>
<p><b>Parking (for above 250 sq.mt)</b></p>
<table><thead><tr><th>Equivalent Car space @ 1.33 ECS per 100 sq.mt of permissible built floor area</th><th>Open Parking @ 23 sq.mt per ECS</th><th>Ground Floor covered parking @ 28 sq.mt per ECS</th><th>Basement Total parking (sq.mt) @32 sq.mt per ECS</th></tr></thead><tbody><tr><td>${F("",80)}</td><td>${F("",80)}</td><td>${F("",80)}</td><td>${F("",80)}</td></tr></tbody></table>
<p>ii) Fee &amp; Charges<br>a) Building permit fee Rs ${F("",100)}<br>b) Use of City Infrastructure Charges Rs ${F("",100)}<br>c) Additional floor space charges (provisional) Rs ${F("",100)}<br>d) Peripheral charges (Provisional) only for Group IV CHBS Rs ${F("",100)}<br>e) Any other charges (please specify) Rs ${F("",100)}<br>Total amount (as per the details above) Rs ${F("",110)}<br>Receipt No ${F("",120)} Dated ${F("",110)}</p>
<p>We hereby certify that</p>
<ol><li>The plot in question forms part of the approved layout plan and its location size and area conform to the approved layout plan and lease / sale deed / NOC of the lease Administration Branch of concerned Development Authority.</li><li>Plot is lying vacant and no construction shall be started before sanction.</li><li>The plot is free from all encumbrances (owner responsibility).</li><li>The period of construction valid up to ${F("",110)}. As per the lease condition / further extension of time for construction granted by the lessor is valid up to ${F("",110)}.</li><li>Size of each dwelling unit is not more than 300 sq.mt.</li></ol>
${SIG(`Signature of Owner(s)<br>Name ${F("",170)}<br>Address ${F("",190)}<br>Dated ${F("",100)}`,`Signature of Registered Architect<br>Name ${F("",170)}<br>Registration No ${F("",120)}<br>Address ${F("",190)}<br>Dated ${F("",100)}`)}` },

 { id:"a2", ref:"Appendix A-2", name:"Specifications of the proposed building", group:"Application", pages:["forms/a2-1.png"],
   who:"Registered architect / engineer / supervisor", when:"With the application",
   why:"Records the intended use, floor-wise coverage, occupancy, sanitary fittings, water source and materials of construction.",
   doc:()=>`${HEAD("A-2","2.10.9")}
<h3>Form for Specifications of Proposed Building</h3>
<p>The purpose (Residence, Office, Restaurant, Hotel, Dharmshala, School, Hostel, Cinema, Shop, Factory, Others) for which it is intended to be used ${F("",220)}</p>
<p>Details of coverage on respective floor are given below:</p>
<table><thead><tr><th>Floor</th><th>Existing (sq.mt)</th><th>Proposed (sq.mt)</th><th>Total (sq.mt)</th></tr></thead><tbody>${["Basement Floor","Ground Floor","Mezzanine Floor","First Floor","Second Floor","Third floor","",""].map(r=>`<tr><td>${r||F("",100)}</td><td>${F("",80)}</td><td>${F("",80)}</td><td>${F("",80)}</td></tr>`).join("")}</tbody></table>
<p>a) Approximate number of inhabitants proposed to be accommodated ${F("",100)}<br>b) The number of latrines, Urinals, Kitchens, Baths to be provided ${F("",200)}<br>c) The source of water to be used in the construction ${F("",200)}<br>d) Distance from public sewer ${F("",100)}<br>e) The materials to be used in construction Walls / Columns / Foundations / Roof / Floors <textarea class="f" aria-label="materials"></textarea></p>
${SIG("&nbsp;",`Signature of Registered Architect / Engineer / Supervisor<br>Name ${F("",170)}<br>Registration No ${F("",120)}<br>Address ${F("",190)}`)}` },

 { id:"a3", ref:"Appendix A-3", name:"Form for supervision", group:"Application", pages:["forms/a3-1.png"],
   who:"Registered architect / engineer / supervisor who will supervise the work", when:"With the application",
   why:"The supervising professional certifies that the work, including drainage, sanitary, water supply and electrical services, will be carried out under their supervision to the sanctioned plans and specifications.",
   doc:()=>`${HEAD("A-3","2.10.10")}
<h3>Form for Supervision</h3>
<p>To<br>&emsp;&emsp;The Commissioner / Vice-Chairman / Secretary<br>&emsp;&emsp;${F("Development Authority",260)}</p>
<p>Sir,</p>
<p>I hereby certify that erection / re-erection demolition or material alteration in / of Building No ${F("",80)} on / in Plot No ${F("",80)} in Block No ${F("",80)} situated at ${F("",200)} scheme ${F("",150)} shall be carried out under my supervision and I certify that all the materials (type &amp; grade) and workmanship of the work shall be generally in accordance with the general specification submitted along with and the work shall be carried out according to the sanctioned plans which also included the services like drainage, sanitary, water supply, and electrical.</p>
${SIG(`Dated: ${F("",110)}`,`Signature of Registered Architect / Engineer / Supervisor<br>Name (In block letters) ${F("",160)}<br>Registration No. ${F("",120)}<br>Address ${F("",190)}`)}` },

 { id:"a4", ref:"Appendix A-4", name:"Undertaking for payment of peripheral and other charges", group:"Application", pages:["forms/a4-1.png"],
   who:"Owner, on non-judicial stamp paper attested by a Notary / First Class Magistrate", when:"With the application, where the Authority levies such charges",
   why:"The owner undertakes to pay the balance of peripheral and other charges when required, accepting the Authority's decision as binding.",
   doc:()=>`${HEAD("A-4","2.13")}
<h3>Undertaking for Payment of Other and Peripheral Charges</h3>
<p><i>Note: It should be on non-judicial stamp paper of specified amount attested by Notary Public / First class Magistrate.</i></p>
<p style="text-align:center"><b>Undertaking</b></p>
<p>I ${F("",200)} Son of Shri ${F("",180)} aged ${F("",50)} Years resident of ${F("",200)} Owner of Plot No ${F("",80)} in ${F("",160)} Co-operative Housing Building Society Ltd hereby undertake to pay the balance of peripheral and other charges as and when required by the concerned Authority and in this regard Authority's decision will be finally binding on me.</p>
<p>Executed by me at ${F("",120)} on ${F("",50)} day of ${F("",100)}.</p>
<p style="text-align:right">Executant</p>
<p>Witness:<br>1. ${F("",220)}<br>2. ${F("",220)}</p>` },

 { id:"a5", ref:"Appendix A-5", name:"Affidavit-cum-undertaking by the competent professional", group:"Application", pages:["forms/a5-1.png","forms/a5-2.png"],
   who:"The architect / engineer who prepared the plans, on non-judicial stamp paper, attested by a Notary / Magistrate", when:"With the application",
   why:"A sworn statement that the professional inspected the site, verified ownership and layout, followed the bye-laws without misinterpretation, and will inform the Authority within 48 hours of any deviation or of being disengaged.",
   doc:()=>`${HEAD("A-5","2.9.4 viii")}
<h3>Affidavit-cum-Undertaking</h3>
<p><i>(Affidavit of Competent Professional on Rs. ${F("",50)} Non-Judicial Stamp paper of specified amount to be attested by Notary Public / Metropolitan Magistrate)</i></p>
<p>I ${F("",200)} son of ${F("",180)} Architect by profession having office at ${F("",220)} do hereby solemnly affirm and declare as under:</p>
<ol>
<li>That I am a Licensed Architect / Engineer / Supervisor / Plumber duly registered with the Authority vide registration No. ${F("",120)}.</li>
<li>That I have been engaged as a Competent professional as per Appendix E of the Bye-Laws for preparing the building plans and to supervise construction in respect of Plot No ${F("",80)} Block No ${F("",70)} situated at ${F("",180)}.</li>
<li>That I have prepared the building plans in respect of the aforesaid plot.</li>
<li>That I have studied the layout plan of the colony and gone through the instructions, policy decisions and other relevant documents in respect of the plot and colony.</li>
<li>That I have personally inspected the site. The plot under proposal forms part of the approved layout plan with respect to its location, size, shape and area of the plot and proposed land use is also in conformity with the approved layout plan. The plot has been demarcated at site and the size, shape and area of plot available at site tallies with the approved layout plan.</li>
<li>That the ownership documents are in the shape of registered sale-deed / lease-deed in favour of the applicants and have been thoroughly examined and the ownership in favour of the applicant is in order.</li>
<li>That there is no construction in existence at the plot and no construction shall be started before sanction of the building plans.</li>
<li>That there is no encroachment on the Municipal land / road / other property and road widths as shown in the layout plan are available at site.</li>
<li>That the proposals are in conformity with the terms and condition of lease deed which is still valid and period of construction as per lease-deed and the extension granted by the lessor is valid up to ${F("",110)}.</li>
<li>That the proposals have been prepared strictly in accordance with the Building Bye-laws, rules, regulation and practice of the department and no misinterpretation on inference of provision of Building Bye-Law has been done while preparing the plans. The construction shall be carried out strictly in accordance with the sanctioned building plans and in case any deviation is carried out, I shall inform the concerned Authority within 48 hours.</li>
<li>That in case the owner dispenses with my services at any stage whatsoever, I shall inform the concerned Authority within 48 hours.</li>
<li>That the size of each dwelling unit is not more than 300 sq. mt.</li>
<li>That mandatory setbacks have been proposed and shall be maintained in accordance with the setbacks marked in the layout plan / Master Plan.</li>
<li>That before submission of the proposal, necessary information / clarification have been obtained from the concerned department of the concerned Authority. The plot is safe and is not affected in any scheme or the road widening. Building activities for residential use are allowed with number of storeys as per approved layout plan.</li>
<li>That no development / additional development / deficiency charges are payable, against this plot (in case development / additional development / deficiency charges are payable then its details be given in the separate para) ${F("",200)}</li>
<li>That no non-compoundable deviations shall be carried out during the course of construction.</li>
<li>That nothing has been concealed and no misrepresentation has been made while preparing and submitting the building plans.</li>
<li>That in case anything contrary to the above is found or established at any stage, the concerned Authority shall be at liberty to take any action as it may deem fit including revocation of sanction of building plans and debarring me for submission of building plans with the Authority under the scheme and also lodge a complaint with the Council of Architecture for appropriate action.</li>
</ol>
<p style="text-align:right">Deponent</p>
<p><b>Verification:</b> I the above named deponent do hereby verify at ${F("",120)} on this ${F("",50)} of ${F("",100)} 20${F("",40)} that contents of the above affidavit are true and correct to my knowledge. No part of it is false and nothing has been concealed there from.</p>
<p style="text-align:right">Deponent</p>` },

 { id:"a6", ref:"Appendix A-6", name:"Building permit / sanction letter", group:"Issued by the Authority", pages:["forms/a6-1.png","forms/a6-2.png"],
   who:"Issued by the Authority", when:"When plans are sanctioned",
   why:"The sanction letter, with its standard conditions: validity, construction only as sanctioned, notices before commencement and at plinth, no occupation before the occupancy certificate, use as sanctioned, supervision by an architect or engineer, and the Authority's right to act against deviations. Owners and lawyers should read every condition." },
 { id:"a7", ref:"Appendix A-7", name:"Refusal of building permit", group:"Issued by the Authority", pages:["forms/a7-1.png"],
   who:"Issued by the Authority", when:"When an application is refused",
   why:"States the grounds on which the permit has been refused under the relevant Act." },
 { id:"a8", ref:"Appendix A-8", name:"Revalidation of building plans", group:"Issued by the Authority", pages:["forms/a8-1.png"],
   who:"Issued by the Authority on the owner's application", when:"Before the permit expires",
   why:"Extends the validity of sanctioned plans; the original sanctioned plan is returned with it." },
 { id:"a10", ref:"Appendix A-10", name:"Intimation of completion up to plinth level", group:"During construction", pages:["forms/a10-1.png"],
   who:"Licensed architect / engineer / supervisor", when:"When work reaches plinth level",
   why:"Lets the Authority check, before the building rises, that it is on the sanctioned footprint. If the Authority raises no objection within 15 days, work may continue.",
   doc:()=>`${HEAD("A-10","2.15.3")}
<h3>Information for Intimation of Completion of Work up to Plinth Level</h3>
<p>To<br>&emsp;&emsp;The ${F("Authority",220)}</p>
<p>Sir,</p>
<p>The construction up to plinth / column up to plinth level has been completed in Building No ${F("",80)} on / in Plot No ${F("",80)} Scheme No ${F("",80)} Road / Street ${F("",150)} Ward ${F("",80)} in accordance with your permission No ${F("",120)} dated ${F("",110)} under my supervision and in accordance with the sanctioned plan.</p>
${SIG(`Date: ${F("",110)}`,`Yours faithfully,<br><br>Signature of Licensed Architect / Engineer / Supervisor<br>Name (In Block letters) ${F("",160)}<br>Address ${F("",190)}`)}` },
 { id:"a11", ref:"Appendix A-11", name:"Inspection report", group:"Issued by the Authority", pages:["forms/a11-1.png"],
   who:"Issued by the Authority's inspecting officer", when:"After the plinth notice and during periodic inspections",
   why:"Records any deviations from the sanctioned plan that are non-compoundable, and directs that work not proceed until they are rectified." },
 { id:"a12", ref:"Appendix A-12", name:"Notice of completion", group:"Completion", pages:["forms/a12-1.png"],
   who:"Owner, through the supervising professional", when:"When the building is complete",
   why:"Starts the process for the completion-cum-occupancy certificate. Attach completion plans, inspection reports, structural stability certificate, fire and lift clearances, photographs and the other documents listed in the bye-laws.",
   doc:()=>`${HEAD("A-12","2.16")}
<h3>Form of Notice of Completion</h3>
<p><i>(To be submitted along with prescribed fee for notice of completion and other relevant documents)</i></p>
<p>To<br>&emsp;&emsp;The ${F("Authority",220)}</p>
<p>Dear Sir,</p>
<p>I / We hereby give notice that I / We have completed the erection of building / execution of the works in Plot No ${F("",80)} Block No ${F("",70)} Scheme ${F("",140)} situated at ${F("",180)} in pursuance of the sanction granted by the Authority vide File No ${F("",120)} dated ${F("",110)}. I / We are enclosing all reports of the Authority inspection carried out during construction period.</p>
<p>2. Permission to occupy or use the building may be granted.</p>
${SIG(`Encl: As above<br>Dated: ${F("",110)}`,`Yours Faithfully,<br><br>Signature of owner<br>Name of owner (In Block letters) ${F("",150)}<br>Address of the owner ${F("",180)}`)}` },
 { id:"a13", ref:"Appendix A-13", name:"Certificate of architect / engineer / supervisor at completion", group:"Completion", pages:["forms/a13-1.png","forms/a13-2.png"],
   who:"Owner, supervising architect / engineer, structural engineer and supervisor", when:"With the notice of completion",
   why:"The professionals certify that the building was built as sanctioned, to the structural design and the safety provisions of NBC Part 6 and the IS codes, with rainwater harvesting and recycling provided, and that it is fit for use.",
   doc:()=>`${HEAD("A-13","2.16 x","To be submitted along with notice of completion")}
<h3>Form for Certificate of Architect / Engineer / Supervisor</h3>
<p>To<br>&emsp;&emsp;The ${F("Authority",220)}</p>
<p>Dear Sir,</p>
<p>We hereby certify that the erection, re-erection or material alteration in / at building No ${F("",80)} on Plot No ${F("",80)} Block No ${F("",70)} Scheme ${F("",130)} situated at ${F("",170)} has been supervised by me and has been completed on ${F("",110)} according to the plans sanctioned, vide office communication No ${F("",120)} dated ${F("",110)}. The work has been completed to our best satisfaction, the workmanship and all the materials (type &amp; grade) have been used strictly in accordance with general and detailed specifications. All the drainage / Sanitary / Water Supply work has been executed under our supervision and as per Building Bye-laws. No provisions of the Building Bye-laws and condition prescribed or order issued there under have been transgressed in the course of the work. The building is fit for use for which it has been erected / re-erected or altered / constructed and enlarged.</p>
<p>2. Certificate:<br>i) Certified that the building(s) has been constructed according to the sanctioned plan and structural design (one set of structural drawings as executed is enclosed) which incorporate the provisions of structural safety as specified in relevant prevailing NBC Part 6 and IS codes standards / Guidelines.<br>ii) Further certified that water harvesting as well as waste water re-cycling systems have been provided as per the sanctioned building plan.<br>iii) It is also certified that construction has been done under our supervision and guidelines and adheres to the drawings submitted and the records of supervision have been maintained by us.</p>
<p>3. Permission to occupy or use the building may be granted.</p>
<p>4. Any subsequent change from completion drawings will be the responsibility of the owner(s).</p>
<div class="sig"><div>a) Signature of the owner with date<br>Name in Block letters ${F("",150)}<br>Address ${F("",170)}</div><div>b) Signature of the Architect / Engineer with date<br>Name in Block letters, Licence No. ${F("",150)}<br>Address ${F("",170)}</div><div>c) Signature of the Structural Engineer with date (for certificate 1) (as defined in NBC of India)<br>Name in Block Letters ${F("",150)}<br>Address ${F("",170)}</div><div>c) Signature of Supervisor / Engineer / Group / Engineer with date<br>Name in Block letters, Licence No. ${F("",150)}<br>Address ${F("",170)}</div></div>
<p style="margin-top:16px">Dated: ${F("",110)}</p>` },
 { id:"a14", ref:"Appendix A-14", name:"Completion-cum-occupancy certificate", group:"Issued by the Authority", pages:["forms/a14-1.png"],
   who:"Issued by the Vice Chairman / Commissioner of the Authority", when:"After inspection on the notice of completion",
   why:"Certifies that the building has been inspected for structural safety, fire safety, hygiene and sanitation and rainwater harvesting, and is fit for occupation and for regular water and electricity connections. Lists the completed work block-wise and floor-wise." },
 { id:"a15", ref:"Appendix A-15", name:"Rejection of occupancy certificate", group:"Issued by the Authority", pages:["forms/a15-1.png"],
   who:"Issued by the Authority", when:"When an occupancy certificate is refused",
   why:"States the reasons for rejecting the occupancy certificate, which must be given in the first instance." },
 { id:"b", ref:"Appendix B", name:"Undertaking to hand over land for road widening", group:"Application", pages:["forms/b-1.png"],
   who:"The owner(s), as deponent", when:"With the application, where the plot is affected by road widening",
   why:"Where the layout or Master Plan shows part of the plot in a future road, sanction is given on the owner's undertaking to hand that land over free of cost when asked.",
   doc:()=>`<div class="ref">Appendix “B”</div><div class="sub">(Bye laws: 2.9.4 &amp; 6.3.8)</div>
<h3>Affidavit / Undertaking (For Handing Over Land Required For Road Widening)</h3>
<p>That I / We have submitted building plans for construction of building on plot No ${F("",80)} Block No ${F("",70)} located at ${F("",180)} to the ${F("",180)} under Sanction of the ${F("",180)} Act for favour of sanction.</p>
<p>I / We undertake to hand over the land required for road widening as shown on site plan to concerned Authority free of cost as and when asked by ${F("",150)} to do so.</p>
<p>I / We have already understood that the ${F("",150)} is granting sanction on the basis of my undertaking. If I / We fail to do so, the sanction so accorded shall be revoked and construction done as consequence thereof shall be deemed to have done unauthorisedly and shall be actionable u/s ${F("",70)} of the ${F("",150)} Act.</p>
<p style="text-align:right">DEPONENT</p>
<p><b>Verification</b><br>I / We verify that the contents of the above undertaking are correct to the best of my knowledge and belief and nothing material has been concealed there from.</p>
<p style="text-align:right">DEPONENT</p>` },
 { id:"b1", ref:"Appendix B-1", name:"Indemnity bond for basement", group:"Application", pages:["forms/b1-1.png","forms/b1-2.png"],
   who:"The owner, as executant, in favour of the Development Authority", when:"With the application, where a basement is proposed",
   why:"The owner indemnifies the Authority against any loss or damage caused to adjoining buildings by digging the foundations or building the basement, during or after construction, and against any claims arising from it." },
 { id:"c", ref:"Appendix C", name:"Application for planning permission", group:"Application", pages:["forms/c-1.png","forms/c-2.png"],
   who:"Owner, through the engaged competent professional", when:"Optional, before the building application",
   why:"Asks the Authority to confirm how the Master Plan / Development Plan and zoning regulations apply to the plot, with title documents and the owner's interpretation. The Authority replies within 30 days." },
 { id:"firequest", ref:"Annexure D", name:"Fire safety questionnaire for building plans", group:"Fire", pages:["forms/firequest-1.png","forms/firequest-2.png","forms/firequest-3.png","forms/firequest-4.png","forms/firequest-5.png","forms/firequest-6.png"],
   who:"Owner / architect with the fire consultant; remarks by the Authority", when:"With plans sent to the Chief Fire Officer",
   why:"A detailed questionnaire on the building (occupancy, height, access, exits, compartments, fire-fighting installations, electrical safety, emergency organisation) submitted with the plans for fire clearance." }
];
