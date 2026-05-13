
var lang="en";
var PT_FLAG="";var UK_FLAG="";
var STIJN_PH="";
var MEMBERS_LI={"Stijn Meij":"https://www.linkedin.com/in/stijn-meij-0935041b8/"};
var MEMBERS_BIO={"Stijn Meij":{"en":"Likes freight trains, football and hiking.","pt":"Gosta de comboios de mercadorias, futebol e caminhadas."}};
var DEPT_PHOTOS={structures:"About us/Structures & Aerodynamics/Structures & Aerodynamics.jpg",powertrain:"About us/Powertrain & Energy Systems/Powertrain & Energy Systems.jpg",dynamics:"About us/Vehicle Dynamics/Vehicle Dynamics.jpg",electronics:"About us/Electronics & Software/Electronics & Software.jpg",marketing:"About us/Marketing, Operations & Logistics/Marketing, Operations & Logistics.jpg"};
var MEMBERS_PHOTOS={"Diego Araujo":"About us/Structures & Aerodynamics/Diego Araújo.png","Diogo Nunes":"About us/Structures & Aerodynamics/Diogo Nunes.png","Francisco Afonso":"About us/Structures & Aerodynamics/Francisco Afonso.png","Pedro Afonso":"About us/Structures & Aerodynamics/Pedro Afonso.png","Guilherme Marques":"About us/Structures & Aerodynamics/Guilherme Marques.png","Gustavo Sardinha":"About us/Structures & Aerodynamics/Gustavo Sardinha.png","Lourenco Prospero":"About us/Structures & Aerodynamics/Lourenço Próspero.png","Miguel Gouveia":"About us/Structures & Aerodynamics/Miguel Gouveia.png","Miguel Pimentel":"About us/Structures & Aerodynamics/Miguel Pimentel.png","Manuel Barreiras":"About us/Powertrain & Energy Systems/Manuel Barreiras.png","Francisco Teixeira":"About us/Powertrain & Energy Systems/Francisco Teixeira.png","Miguel Martins":"About us/Powertrain & Energy Systems/Miguel Martins.png","Daniel Ferreira":"About us/Vehicle Dynamics/Daniel Ferreira.png","Rafael Coimbra":"About us/Vehicle Dynamics/Rafael Coimbra.png","Duarte Soares":"About us/Vehicle Dynamics/Duarte Soares.png","Joao Basilio":"About us/Vehicle Dynamics/João Basílio.png","Lourenco Vieira":"About us/Vehicle Dynamics/Lourenço Vieira.png","Rita Brigido":"About us/Vehicle Dynamics/Rita Brígido.png","Tomas Serafim":"About us/Electronics & Software/Tomás Serafim.png","Joao Sousa":"About us/Electronics & Software/João Sousa.png","Catarina Santos":"About us/Electronics & Software/Catarina Santos.png","Vasco Carvalho":"About us/Marketing, Operations & Logistics/Vasco Carvalho.png","Ana Francisca Rosado":"About us/Marketing, Operations & Logistics/Ana Francisca Rosado.png","Aliya Ibrahimo":"About us/Marketing, Operations & Logistics/Aliya Ibrahmo.png","Pedro Clemente":"About us/Marketing, Operations & Logistics/Pedro Clemente.png","Rodrigo Oliveira":"About us/Marketing, Operations & Logistics/Rodrigo Oliveira.png","Stijn Meij":"About us/Marketing, Operations & Logistics/Stijn Meij.png","Martim Alves Caetano":"About us/Marketing, Operations & Logistics/Martim Alves Caetano.png","Teresa de Brito":"About us/Marketing, Operations & Logistics/Teresa de Brito.png"};
var DEPTS={
  structures:{name:{en:"Structures & Aerodynamics",pt:"Estruturas e Aerodinamica"},col:"#5ba3e0",desc:{en:"Chassis, bodyshell, structural analysis and aerodynamic optimisation.",pt:"Chassis, carroceria, analise estrutural e otimizacao aerodinamica."},members:[{n:"Diego Araujo",r:{en:"Department Leader",pt:"Lider de Departamento"}},{n:"Diogo Nunes",r:{en:"Member",pt:"Membro"}},{n:"Francisco Afonso",r:{en:"Member",pt:"Membro"}},{n:"Pedro Afonso",r:{en:"Member",pt:"Membro"}},{n:"Guilherme Marques",r:{en:"Member",pt:"Membro"}},{n:"Gustavo Sardinha",r:{en:"Member",pt:"Membro"}},{n:"Lourenco Prospero",r:{en:"Member",pt:"Membro"}},{n:"Miguel Gouveia",r:{en:"Member",pt:"Membro"}},{n:"Miguel Pimentel",r:{en:"Member",pt:"Membro"}}]},
  powertrain:{name:{en:"Powertrain & Energy Systems",pt:"Propulsao e Sistemas de Energia"},col:"#c9a84c",desc:{en:"Electric drivetrain, motor selection, energy storage and traction performance.",pt:"Tracao eletrica, selecao de motores, armazenamento de energia e desempenho de tracao."},members:[{n:"Manuel Barreiras",r:{en:"Department Leader",pt:"Lider de Departamento"}},{n:"Francisco Teixeira",r:{en:"Member",pt:"Membro"}},{n:"Miguel Martins",r:{en:"Member",pt:"Membro"}}]},
  dynamics:{name:{en:"Vehicle Dynamics",pt:"Dinamica do Veiculo"},col:"#7ecba1",desc:{en:"Bogies, suspension, braking systems and ride comfort analysis.",pt:"Bogies, suspensao, sistemas de travagem e analise de conforto."},members:[{n:"Daniel Ferreira",r:{en:"Department Leader",pt:"Lider de Departamento"}},{n:"Rafael Coimbra",r:{en:"Member",pt:"Membro"}},{n:"Duarte Soares",r:{en:"Member",pt:"Membro"}},{n:"Joao Basilio",r:{en:"Member",pt:"Membro"}},{n:"Lourenco Vieira",r:{en:"Member",pt:"Membro"}},{n:"Rita Brigido",r:{en:"Member",pt:"Membro"}},{n:"Teresa de Brito",r:{en:"Member",pt:"Membro"}}]},
  electronics:{name:{en:"Electronics & Software",pt:"Electronica e Software"},col:"#e07a5f",desc:{en:"Battery management, motor controllers, firmware, telemetry and control systems.",pt:"Gestao de baterias, controladores de motores, firmware, telemetria e sistemas de controlo."},members:[{n:"Tomas Serafim",r:{en:"Department Leader",pt:"Lider de Departamento"}},{n:"Martim Alves Caetano",r:{en:"Member",pt:"Membro"}},{n:"Joao Sousa",r:{en:"Member",pt:"Membro"}},{n:"Catarina Santos",r:{en:"Member",pt:"Membro"}}]},
  marketing:{name:{en:"Marketing, Operations & Logistics",pt:"Marketing, Operacoes e Logistica"},col:"#b48ead",desc:{en:"Communications, sponsorship, brand identity, events and team logistics.",pt:"Comunicacoes, patrocinios, identidade de marca, eventos e logistica da equipa."},members:[{n:"Vasco Carvalho",r:{en:"Operations & Logistics Leader",pt:"Lider de Operacoes e Logistica"}},{n:"Ana Francisca Rosado",r:{en:"Marketing Leader",pt:"Lider de Marketing"}},{n:"Aliya Ibrahimo",r:{en:"Member",pt:"Membro"}},{n:"Pedro Clemente",r:{en:"Member",pt:"Membro"}},{n:"Rodrigo Oliveira",r:{en:"Member",pt:"Membro"}},{n:"Stijn Meij",r:{en:"Member",pt:"Membro"}}]}
};
function applyLang(){
  document.querySelectorAll("[data-en],[data-pt]").forEach(function(el){var val=lang==="pt"?el.dataset.pt:el.dataset.en;if(val!==undefined)el.innerHTML=val;});
  document.querySelectorAll("[data-placeholder-en],[data-placeholder-pt]").forEach(function(el){var val=lang==="pt"?el.dataset.placeholderPt:el.dataset.placeholderEn;if(val)el.placeholder=val;});
  var fi=(lang==="en"?' PT':' EN');
  ["lang-btn","mob-lang-btn","foot-lang-btn"].forEach(function(id){var el=document.getElementById(id);if(el)el.innerHTML=fi;});
  buildGrids();
}
function toggleLang(){lang=lang==="en"?"pt":"en";applyLang();}
var $c=document.getElementById("cur"),$r=document.getElementById("curR");
var mx=0,my=0,rx=0,ry=0;
document.addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY;if($c){$c.style.left=mx+"px";$c.style.top=my+"px";}});
(function L(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;if($r){$r.style.left=rx+"px";$r.style.top=ry+"px";}requestAnimationFrame(L);})();
document.querySelectorAll("a,button,.card,.dc,.nc,.mc,.sp-item,.clink,.pf,.cic-card").forEach(function(el){el.addEventListener("mouseenter",function(){if($r)$r.classList.add("big");});el.addEventListener("mouseleave",function(){if($r)$r.classList.remove("big");});});
document.getElementById("mbb").addEventListener("click",function(){document.getElementById("mobnav").classList.add("open");});
document.getElementById("cx").addEventListener("click",function(){document.getElementById("mobnav").classList.remove("open");});
window.addEventListener("scroll",function(){var n=document.getElementById("nav");if(n)n.classList.toggle("sc",scrollY>60);});
(function(){var s=["Different Studies","Different Nationalities","The Same Passion","The Same Motivation","One ISTrain"];var el=document.getElementById("tki");if(!el)return;var h="";for(var i=0;i<10;i++)s.forEach(function(x){h+='<span class="tkit">'+x+'<span class="tkd"></span></span>';});el.innerHTML=h;})();
(function(){var ms=[{date:new Date("2025-05-01"),en:"May 2025",pt:"Mai 2025",ten:"Railway Summit",tpt:"Cimeira Ferroviaria"},{date:new Date("2025-06-01"),en:"Jun 2025",pt:"Jun 2025",ten:"Start design",tpt:"Inicio do design"},{date:new Date("2025-09-01"),en:"Sep 2025",pt:"Set 2025",ten:"Design Freeze",tpt:"Congelamento do Design"},{date:new Date("2025-12-01"),en:"Dec 2025",pt:"Dez 2025",ten:"Start manufacturing",tpt:"Inicio do fabrico"},{date:new Date("2026-03-01"),en:"Mar 2026",pt:"Mar 2026",ten:"Testing",tpt:"Testes"},{date:new Date("2026-06-01"),en:"Jun 2026",pt:"Jun 2026",ten:"IMechE Challenge",tpt:"Desafio IMechE"}];
var now=new Date(),total=ms[ms.length-1].date-ms[0].date;
var prog=Math.max(0,Math.min(1,(now-ms[0].date)/total));
var fe=document.getElementById("tl-fill"),ge=document.getElementById("tl-glow");
if(fe)setTimeout(function(){fe.style.width=(prog*100)+"%";if(ge)ge.style.left=(prog*100)+"%";},300);
var de=document.getElementById("tl-dots"),me=document.getElementById("tl-milestones");if(!de||!me)return;
var dh="",mh="";ms.forEach(function(m,i){var pct=(m.date-ms[0].date)/total*100;var isDone=now>m.date;var isCur=i===ms.reduce(function(c,x,j){return now>=x.date?j:c;},-1);var st=isCur?"cur":isDone?"done":"future";dh+='<div class="tl-dot '+st+'" style="left:'+pct+'%"></div>';mh+='<div class="tl-ms" style="left:'+pct+'%"><div class="tl-ms-date '+st+'" data-en="'+m.en+'" data-pt="'+m.pt+'">'+m.en+'</div><div class="tl-ms-label '+st+'" data-en="'+m.ten+'" data-pt="'+m.tpt+'">'+m.ten+'</div></div>';});
de.innerHTML=dh;me.innerHTML=mh;})();
var dkeys=["structures","powertrain","dynamics","electronics","marketing"];
var dnums=["01","02","03","04","05"];
function buildGrids(){
  ["dg","jdg"].forEach(function(id){
    var g=document.getElementById(id);if(!g)return;g.innerHTML="";
    dkeys.forEach(function(k,i){
      var d=DEPTS[k],name=(d.name[lang]||d.name.en),desc=(d.desc[lang]||d.desc.en);
      var dc=document.createElement("div");dc.className="dc rv";dc.style.transitionDelay=(i*.07)+"s";dc.dataset.dept=k;
      dc.innerHTML='<div class="dcn" style="color:'+d.col+'">'+dnums[i]+'</div><div class="dct" style="color:'+d.col+'">'+name+'</div><p class="dcd">'+desc+'</p><span class="dca">&#8599;</span>';
      var s=document.createElement("style");s.textContent='.dc[data-dept="'+k+'"]:after{background:'+d.col+';}';document.head.appendChild(s);
      if(id==="dg")dc.addEventListener("click",function(){openModal(k);});else dc.addEventListener("click",function(){go("contact");});
      g.appendChild(dc);
    });
  });
}
function openModal(k){
  var d=DEPTS[k],name=(d.name[lang]||d.name.en);
  var photo=DEPT_PHOTOS[k];
  var photoHtml=photo?('<div class="mphoto-wrap"><img src="'+photo+'" alt="'+name+'" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:8px;margin-bottom:1.5rem"></div>'):'';
  var rows=d.members.map(function(m){
    var role=m.r[lang]||m.r.en;
    var init=m.n.split(" ").map(function(w){return w[0];}).join("").slice(0,2).toUpperCase();
    var mphoto=MEMBERS_PHOTOS[m.n];
    var li=MEMBERS_LI[m.n];var bio=MEMBERS_BIO[m.n]?(MEMBERS_BIO[m.n][lang]||MEMBERS_BIO[m.n].en):"";
    var av=mphoto?'<div class="mav"><img src="'+mphoto+'" alt="'+m.n+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block"></div>':'<div class="mav-init" style="background:'+d.col+'18;border:1px solid '+d.col+'44;color:'+d.col+'">'+init+'</div>';
    var liH=li?'<a href="'+li+'" target="_blank" class="mli" title="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>':"";
    return '<div class="mrow">'+av+'<div class="minfo"><div class="mname">'+m.n+'</div><div class="mrole">'+role+'</div>'+(bio?'<div class="mbio">'+bio+'</div>':"")+'</div>'+liH+'</div>';
  }).join("");
  document.getElementById("mbody").innerHTML='<div style="width:4px;height:28px;background:'+d.col+';margin-bottom:1rem;border-radius:2px"></div><div class="mtit" style="color:'+d.col+'">'+name+'</div><div class="msub">'+(lang==="pt"?"Departamento ISTrain":"ISTrain Department")+'</div>'+photoHtml+'<div class="mlist">'+rows+'</div>';
  document.getElementById("dmod").classList.add("open");document.body.style.overflow="hidden";
}
document.getElementById("mcl").addEventListener("click",closeModal);
document.getElementById("dmod").addEventListener("click",function(e){if(e.target===this)closeModal();});
function closeModal(){document.getElementById("dmod").classList.remove("open");document.body.style.overflow="";}
function go(page){
  document.getElementById("mobnav").classList.remove("open");
  document.querySelectorAll(".page").forEach(function(p){p.classList.remove("on");});
  var el=document.getElementById("page-"+page);if(el)el.classList.add("on");
  window.scrollTo({top:0,behavior:"smooth"});
  document.querySelectorAll(".nlinks a").forEach(function(a){a.classList.toggle("on",a.dataset.p===page);});
  buildGrids();setTimeout(runRev,120);
}
function runRev(){var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting)e.target.classList.add("v");});},{threshold:.06});document.querySelectorAll(".page.on .rv:not(.v),.page.on .rl:not(.v),.page.on .rr:not(.v)").forEach(function(el){io.observe(el);});}
runRev();
window.addEventListener("scroll",function(){document.querySelectorAll(".page.on .rv:not(.v),.page.on .rl:not(.v),.page.on .rr:not(.v)").forEach(function(el){if(el.getBoundingClientRect().top<innerHeight*.93)el.classList.add("v");});});
setTimeout(function(){document.querySelectorAll("#page-home .rv,#page-home .rl,#page-home .rr").forEach(function(el){if(el.getBoundingClientRect().top<innerHeight*1.1)el.classList.add("v");});},200);
function showTeam(id){document.querySelectorAll(".team-panel").forEach(function(p){p.classList.remove("on");});document.querySelectorAll(".team-tab").forEach(function(t){t.classList.remove("on");});var p=document.getElementById("panel-"+id);var t=document.getElementById("tab-"+id);if(p)p.classList.add("on");if(t)t.classList.add("on");if(id==="2526")buildGrids();}
function showScoring(id){document.querySelectorAll(".stab-panel").forEach(function(p){p.classList.remove("on");});document.querySelectorAll(".stab-btn").forEach(function(b){b.classList.remove("on");});var p=document.getElementById("sp-"+id);var b=document.getElementById("stab-"+id);if(p)p.classList.add("on");if(b)b.classList.add("on");}
function tick(){var d=new Date("2026-06-24T09:00:00"),n=new Date(),diff=d-n;if(diff<=0)return;var da=Math.floor(diff/864e5),hr=Math.floor(diff%864e5/36e5),mi=Math.floor(diff%36e5/6e4),se=Math.floor(diff%6e4/1e3);var e=document.getElementById("cdd");if(e)e.textContent=String(da).padStart(3,"0");e=document.getElementById("cdh");if(e)e.textContent=String(hr).padStart(2,"0");e=document.getElementById("cdm");if(e)e.textContent=String(mi).padStart(2,"0");e=document.getElementById("cds");if(e)e.textContent=String(se).padStart(2,"0");}
setInterval(tick,1000);tick();
var hv=document.getElementById("hvid");if(hv){hv.muted=true;var _p=function(){hv.play().catch(function(){});};_p();document.addEventListener("click",_p,{once:true});setTimeout(_p,500);}

// Form submission code removed - forms eliminated from site
buildGrids();applyLang();
