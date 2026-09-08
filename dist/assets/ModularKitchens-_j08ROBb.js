import{r as h,j as i,m as e,R as y}from"./index-B26QQWJY.js";import{H as v,F as f}from"./Footer-DPbtdXJO.js";import{i as x}from"./images-C2bKLPsF.js";import{P as b,C as g}from"./ParallaxImage-akGML6Iy.js";import{u as k}from"./useDocumentMeta-DgTOmHDO.js";import{F as w,S as j}from"./shield-check-CHFAY3hd.js";import{C}from"./compass-DbNTJ_vQ.js";import{C as N}from"./clock-jbAE1wg9.js";import{W as I,u as B,a as R}from"./wrench-BrHWf_fC.js";const s=[.16,1,.3,1],u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},S={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:s}}},o=u,a=S,A={hidden:{opacity:0,scale:1.03,x:70,clipPath:"inset(0% 0% 100% 0%)"},visible:{opacity:1,scale:1,x:0,clipPath:"inset(0% 0% 0% 0%)",transition:{duration:.9,ease:s,delay:.1}}},l={hidden:{opacity:0,x:-60},visible:{opacity:1,x:0,transition:{duration:.6,ease:s}}},F={hidden:{opacity:0,x:-60},visible:{opacity:1,x:0,transition:{duration:.7,ease:s}}},E={hidden:{opacity:0,x:60},visible:{opacity:1,x:0,transition:{duration:.7,ease:s}}},T=()=>{const d=y.useRef(null),{scrollYProgress:p}=B({target:d,offset:["start center","end center"]}),m=R(p,[0,1],["0%","100%"]),t=[{step:"01",title:"Site Visit & Measurement",desc:"We visit your space and take precise measurements."},{step:"02",title:"Custom Layout & 3D Design",desc:"A layout and 3D design tailored to your space."},{step:"03",title:"Material & Finish Selection",desc:"Choose the materials and finishes that suit you."},{step:"04",title:"In-House Manufacturing",desc:"Your kitchen is built at our own factory."},{step:"05",title:"Professional Installation",desc:"Installed by our own in-house team."},{step:"06",title:"Post-Installation Quality Check",desc:"A final check to ensure everything is right."}];return i.jsxs("section",{"aria-label":"Our Process",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-surface-dark)",color:"var(--color-text-primary)"},children:[i.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(50px, 7vw, 90px)"},children:[i.jsx("span",{className:"section-label",style:{display:"block",marginBottom:"16px"},children:"OUR PROCESS"}),i.jsxs(e.h2,{className:"section-title text-white",initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,children:[i.jsx(e.span,{variants:a,style:{display:"inline-block",marginRight:"0.25em"},children:"From Consultation"}),i.jsx(e.span,{variants:a,style:{display:"inline-block"},children:"to Installation."})]})]}),i.jsxs("div",{ref:d,className:"mk-timeline",children:[i.jsx("div",{className:"mk-timeline-track","aria-hidden":"true"}),i.jsx(e.div,{className:"mk-timeline-progress",style:{height:m},"aria-hidden":"true"}),t.map((n,r)=>{const c=r%2===0;return i.jsxs("div",{className:`mk-timeline-row ${c?"is-left":"is-right"}`,children:[i.jsxs(e.div,{className:"mk-timeline-content",initial:{opacity:0,x:c?-36:36},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.5},transition:{duration:.7,ease:s},children:[i.jsx("span",{style:{fontFamily:"var(--font-family-sans)",fontSize:"13px",fontWeight:600,color:"var(--color-accent)",display:"block",marginBottom:"8px"},children:n.step}),i.jsx("h3",{className:"sub-title text-white",style:{marginBottom:"8px"},children:n.title}),i.jsx("p",{className:"small-description",style:{color:"var(--color-text-secondary)"},children:n.desc})]}),i.jsx(e.span,{className:"mk-timeline-dot",initial:{backgroundColor:"var(--color-surface-dark)",scale:.7},whileInView:{backgroundColor:"#B69A6B",scale:1},viewport:{once:!1,amount:.5},transition:{duration:.4,ease:s},"aria-hidden":"true"})]},n.step)})]})]}),i.jsx("style",{children:`
        .mk-timeline {
          position: relative;
          padding: 12px 0;
        }
        .mk-timeline-track {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: var(--color-border-gold-medium);
          transform: translateX(-50%);
        }
        .mk-timeline-progress {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          background: var(--color-accent);
          transform: translateX(-50%);
          transform-origin: top;
        }
        .mk-timeline-row {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 32px 1fr;
          align-items: center;
          column-gap: clamp(24px, 4vw, 56px);
          padding: clamp(24px, 3.5vw, 40px) 0;
        }
        .mk-timeline-row.is-left .mk-timeline-content {
          grid-column: 1;
          text-align: right;
        }
        .mk-timeline-row.is-right .mk-timeline-content {
          grid-column: 3;
          text-align: left;
        }
        .mk-timeline-dot {
          grid-column: 2;
          justify-self: center;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid var(--color-accent);
          position: relative;
          z-index: 2;
        }

        @media (max-width: 767px) {
          .mk-timeline-row {
            grid-template-columns: 1fr 20px 1fr;
            column-gap: clamp(10px, 3.5vw, 18px);
            padding: clamp(18px, 5vw, 28px) 0;
          }
          .mk-timeline-dot {
            width: 10px;
            height: 10px;
          }
          .mk-timeline-content .sub-title {
            font-size: 18px;
            margin-bottom: 6px !important;
          }
          .mk-timeline-content .small-description {
            font-size: 12.5px;
            line-height: 1.5;
          }
        }

        @media (max-width: 420px) {
          .mk-timeline-row {
            grid-template-columns: 1fr 16px 1fr;
            column-gap: 8px;
          }
          .mk-timeline-dot {
            width: 9px;
            height: 9px;
          }
          .mk-timeline-content .sub-title {
            font-size: 16px;
          }
          .mk-timeline-content .small-description {
            font-size: 11.5px;
            line-height: 1.45;
          }
        }
      `})]})},H=()=>{const[d,p]=h.useState(0);h.useEffect(()=>{window.scrollTo(0,0);const t=()=>p(window.scrollY);return window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),k("Premium Kitchens | Leoz Cucine","Thoughtfully planned kitchens with refined finishes and intelligent storage.");const m=Math.min(d*.15,120);return i.jsxs("div",{className:"page-modular-kitchens",style:{backgroundColor:"var(--color-surface-dark)",color:"var(--color-text-primary)"},children:[i.jsx(v,{}),i.jsxs("main",{id:"main-content",style:{paddingTop:"75px"},children:[i.jsxs("section",{id:"hero","aria-label":"Modular Kitchens Split Hero",className:"hero-split-container",style:{position:"relative",minHeight:"100vh",width:"100vw",display:"grid",gridTemplateColumns:"1fr 1fr",backgroundColor:"#F7F5F1",overflow:"hidden"},children:[i.jsx("div",{style:{position:"relative",height:"100%",minHeight:"100vh",width:"100%",overflow:"hidden",backgroundColor:"#181818"},children:i.jsxs(e.div,{initial:"hidden",animate:"visible",variants:A,style:{width:"100%",height:"100%",position:"relative",transform:`translateY(${m}px)`,willChange:"transform, clip-path"},children:[i.jsx("img",{src:x.modularKitchenHero,alt:"LEOZ CUCINE Architectural Modular Kitchen",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center",display:"block"}}),i.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(24, 24, 24, 0.15) 0%, transparent 60%, rgba(24, 24, 24, 0.3) 100%)",pointerEvents:"none"}})]})}),i.jsx("div",{style:{backgroundColor:"#FFFFFF",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",textAlign:"center",paddingTop:"clamp(130px, 15vh, 170px)",paddingBottom:"80px",paddingLeft:"clamp(32px, 5vw, 60px)",paddingRight:"clamp(32px, 5vw, 60px)",position:"relative",zIndex:10},children:i.jsxs(e.div,{initial:"hidden",animate:"visible",variants:u,style:{maxWidth:"620px",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[i.jsx(e.span,{variants:l,className:"section-label section-label-on-light",style:{marginBottom:"16px"},children:"LEOZ KITCHENS"}),i.jsxs("h1",{className:"page-title",style:{marginBottom:"20px"},children:[i.jsx(e.span,{variants:l,style:{display:"inline-block",marginRight:"0.25em"},children:"Modular Kitchens,"}),i.jsx(e.span,{variants:l,style:{display:"inline-block",marginRight:"0.25em"},children:"Designed Around"}),i.jsx(e.span,{variants:l,style:{display:"inline-block"},children:"Your Life"})]}),i.jsx(e.p,{variants:l,className:"hero-description",style:{margin:"0 auto",textAlign:"center",color:"var(--color-body)",marginBottom:"32px"},children:"Experience German Precision – Premium Modular Kitchens from Design to Installation."}),i.jsx(e.div,{variants:l,children:i.jsx("a",{href:"/talk-to-us",onClick:t=>{t.preventDefault(),window.history.pushState({},"","/talk-to-us"),window.dispatchEvent(new Event("popstate"))},className:"btn btn-primary",children:"Book a Kitchen Consultation"})})]})}),i.jsx("style",{children:`
            @media (max-width: 1023px) {
              .hero-split-container {
                display: flex !important;
                flex-direction: column !important;
                min-height: auto !important;
                width: 100% !important;
              }
              .hero-split-container > div:first-of-type {
                min-height: 360px !important;
                height: 45vh !important;
                order: 1 !important;
              }
              .hero-split-container > div:last-of-type {
                padding-top: clamp(40px, 8vw, 60px) !important;
                padding-bottom: clamp(40px, 8vw, 60px) !important;
                padding-left: clamp(20px, 4vw, 40px) !important;
                padding-right: clamp(20px, 4vw, 40px) !important;
                order: 2 !important;
              }
            }
          `})]}),i.jsx("section",{"aria-label":"Modular Kitchen Philosophy",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-surface-light)",color:"var(--color-text-dark)"},children:i.jsx("div",{style:{maxWidth:"1300px",margin:"0 auto"},children:i.jsxs(e.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,margin:"-100px"},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},className:"mk-intro-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"clamp(40px, 6vw, 100px)",alignItems:"center"},children:[i.jsxs(e.div,{variants:E,children:[i.jsx("span",{className:"section-label section-label-on-light",style:{display:"block",marginBottom:"16px"},children:"INTRODUCTION"}),i.jsxs(e.h2,{className:"section-title",style:{marginBottom:"20px"},variants:o,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},children:[i.jsx(e.span,{variants:a,style:{display:"inline-block",marginRight:"0.25em"},children:"A Kitchen Should"}),i.jsx(e.span,{variants:a,style:{display:"inline-block"},children:"Work as Beautifully as It Looks"})]}),i.jsx("p",{className:"description",style:{marginBottom:0},children:"At LEOZ Cucine, every modular kitchen is designed for the way you cook, store, and gather — then finished to a standard that feels considered in every detail, from cabinet edges to hardware."})]}),i.jsx(e.div,{variants:F,style:{position:"relative",width:"100%",height:"clamp(400px, 55vh, 640px)",borderRadius:"var(--radius-sm)",overflow:"hidden",boxShadow:"var(--shadow-subtle)",border:"1px solid var(--color-border-gold)"},children:i.jsx(b,{yOffset:30,children:i.jsx("img",{src:"/Metal Accents.webp",alt:"LEOZ Architectural Modular Kitchen Detail",loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover"}})})})]})})}),i.jsx("section",{"aria-label":"Modular Kitchens",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-surface-dark)",color:"var(--color-text-primary)"},children:i.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",textAlign:"center"},children:i.jsxs(e.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.15},variants:o,children:[i.jsx(e.span,{variants:a,className:"section-label",style:{display:"block",marginBottom:"16px"},children:"MODULAR KITCHENS"}),i.jsxs("h2",{className:"section-title text-white",style:{marginBottom:"20px"},children:[i.jsx(e.span,{variants:a,style:{display:"inline-block",marginRight:"0.25em"},children:"German Precision,"}),i.jsx(e.span,{variants:a,style:{display:"inline-block"},children:"Indian Sensibility"})]}),i.jsx(e.p,{variants:a,className:"description",style:{margin:"0 auto 40px",color:"var(--color-text-secondary)"},children:"Our kitchens blend German-grade hardware with Indian sensibilities, offering a smart fusion of:"}),i.jsx(e.div,{variants:a,className:"mk-fusion-grid",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px",textAlign:"left",marginBottom:"40px"},children:(()=>{const t=["Ergonomic Flow","Ample Storage","Easy Maintenance","Moisture-resistant carcass and finishes","Customizable layouts"];return t.map((n,r)=>{const c=t.length%2!==0&&r===t.length-1;return i.jsxs(e.div,{className:"mk-check-card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.3},transition:{duration:.6,delay:r*.08,ease:s},style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"16px 18px",border:"1px solid var(--color-border-gold)",borderRadius:"var(--radius-md)",backgroundColor:"rgba(255, 255, 255, 0.02)",gridColumn:c?"1 / -1":void 0},children:[i.jsx("div",{className:"mk-check-icon",style:{width:"26px",height:"26px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(182, 154, 107, 0.15)",color:"#B69A6B",flexShrink:0,marginTop:"2px"},children:i.jsx(g,{size:14,strokeWidth:2.5})}),i.jsx("span",{className:"small-description",style:{color:"var(--color-text-secondary)"},children:n})]},n)})})()}),i.jsx(e.p,{variants:a,className:"description",style:{margin:"0 auto",color:"var(--color-text-secondary)"},children:"Whether you're a gourmet chef or a minimalist, a LEOZ kitchen is crafted to perform flawlessly and remain timeless."})]})})}),i.jsx("section",{"aria-label":"Kitchen Styles & Collections",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-surface-light)",color:"var(--color-text-dark)"},children:i.jsxs("div",{style:{maxWidth:"1300px",margin:"0 auto"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(50px, 7vw, 90px)"},children:[i.jsx("span",{className:"section-label section-label-on-light",style:{display:"block",marginBottom:"16px"},children:"KITCHEN COLLECTIONS"}),i.jsxs(e.h2,{className:"section-title",initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,children:[i.jsx(e.span,{variants:a,style:{display:"inline-block",marginRight:"0.25em"},children:"Find Your"}),i.jsx(e.span,{variants:a,style:{display:"inline-block"},children:"Kitchen Style."})]})]}),i.jsx("div",{className:"mk-styles-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"clamp(24px, 3vw, 40px)"},children:[{title:"Modern Minimalist",description:"Clean lines, handle-less shutters, and a restrained material palette for a contemporary look."},{title:"German Classic",description:"Precision-engineered cabinetry and refined finishes inspired by German kitchen design."},{title:"Contemporary Fusion",description:"A balance of bold and understated — built for Gujarati households that entertain often."}].map((t,n)=>{const r=n===0?{x:80}:n===2?{x:-80}:{y:60};return i.jsxs(e.div,{initial:{opacity:0,x:0,y:0,...r},whileInView:{opacity:1,x:0,y:0},viewport:{once:!1,amount:.3},transition:{duration:.7,delay:n*.08,ease:s},style:{padding:"clamp(32px, 3.5vw, 44px)",backgroundColor:"var(--color-surface-stone)",border:"1px solid var(--color-border-gold)",borderRadius:"var(--radius-sm)",boxShadow:"var(--shadow-subtle)"},children:[i.jsx("h3",{className:"sub-title",style:{marginBottom:"12px"},children:t.title}),i.jsx("p",{className:"description",style:{margin:0},children:t.description})]},t.title)})})]})}),i.jsx("section",{"aria-label":"Materials & Finishes Specifications",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"#202020",color:"var(--color-text-primary)"},children:i.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto",textAlign:"center"},children:[i.jsx("span",{className:"section-label",style:{display:"block",marginBottom:"16px"},children:"MATERIALS & FINISHES"}),i.jsxs(e.h2,{className:"section-title text-white",style:{marginBottom:"40px"},initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,children:[i.jsx(e.span,{variants:a,style:{display:"inline-block",marginRight:"0.25em"},children:"Built for Performance."}),i.jsx(e.span,{variants:a,style:{display:"inline-block"},children:"Finished for Life."})]}),i.jsx("div",{className:"mk-fusion-grid",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px",textAlign:"left"},children:["High-grade marine plywood and engineered wood carcasses","Premium laminate, acrylic, and PU finish options","German-grade hardware for smooth, long-lasting function","Anti-scratch, moisture-resistant surfaces suited to Gujarat's climate"].map((t,n)=>{const r=[{y:-60},{y:60},{x:-60},{x:60}][n]||{};return i.jsxs(e.div,{className:"mk-check-card",initial:{opacity:0,x:0,y:0,...r},whileInView:{opacity:1,x:0,y:0},viewport:{once:!1,amount:.3},transition:{duration:.6,delay:n*.08,ease:s},style:{display:"flex",alignItems:"flex-start",gap:"12px",padding:"16px 18px",border:"1px solid var(--color-border-gold)",borderRadius:"var(--radius-md)",backgroundColor:"rgba(255, 255, 255, 0.03)"},children:[i.jsx("div",{className:"mk-check-icon",style:{width:"26px",height:"26px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(182, 154, 107, 0.15)",color:"#B69A6B",flexShrink:0,marginTop:"2px"},children:i.jsx(g,{size:14,strokeWidth:2.5})}),i.jsx("span",{className:"small-description",style:{color:"var(--color-text-secondary)"},children:t})]},t)})})]})}),i.jsx("section",{"aria-label":"Why Our Kitchens Stand Apart",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-surface-stone)",color:"var(--color-text-dark)"},children:i.jsxs("div",{style:{maxWidth:"1300px",margin:"0 auto"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(50px, 7vw, 90px)"},children:[i.jsx("span",{className:"section-label section-label-on-light",style:{display:"block",marginBottom:"16px"},children:"WHY LEOZ KITCHENS"}),i.jsxs(e.h2,{className:"section-title",initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,children:[i.jsx(e.span,{variants:a,style:{display:"inline-block",marginRight:"0.25em"},children:"Why Our Kitchens"}),i.jsx(e.span,{variants:a,style:{display:"inline-block"},children:"Stand Apart."})]})]}),i.jsx("div",{className:"mk-standapart-grid",style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"clamp(20px, 2.4vw, 28px)"},children:[{icon:w,title:"Manufactured In-House",description:"Manufactured entirely at our own factory — no outsourced production."},{icon:C,title:"German Precision",description:"German design and hardware precision."},{icon:N,title:"20+ Years of Experience",description:"20+ years of manufacturing experience."},{icon:j,title:"Comprehensive Warranty",description:"Comprehensive warranty on materials and workmanship."},{icon:I,title:"In-House Installation",description:"In-house installation team, not third-party contractors."}].map((t,n)=>{const r=t.icon;return i.jsxs(e.div,{className:"mk-pillar-card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{duration:.6,delay:n*.08,ease:s},whileHover:{y:-8,borderColor:"rgba(182, 154, 107, 0.5)",boxShadow:"0 18px 40px -14px rgba(182, 154, 107, 0.28)",transition:{duration:.35,ease:s}},style:{position:"relative",overflow:"hidden",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",padding:"clamp(24px, 2.6vw, 32px) clamp(16px, 2vw, 22px)",backgroundColor:"var(--color-surface-light)",border:"1px solid var(--color-border-gold)",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-subtle)"},children:[i.jsx("span",{className:"mk-pillar-card-bar","aria-hidden":"true"}),i.jsx("div",{className:"mk-pillar-icon",style:{width:"52px",height:"52px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(182, 154, 107, 0.12)",color:"#B69A6B",marginBottom:"6px"},children:i.jsx(r,{size:22,strokeWidth:1.5})}),i.jsx("h3",{className:"sub-title",style:{fontSize:"18px",margin:0},children:t.title}),i.jsx("p",{className:"small-description",style:{margin:0},children:t.description})]},t.title)})})]})}),i.jsx(T,{}),i.jsx("section",{"aria-label":"Frequently Asked Questions",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-surface-light)",color:"var(--color-text-dark)"},children:i.jsxs("div",{style:{maxWidth:"860px",margin:"0 auto"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(50px, 7vw, 90px)"},children:[i.jsx("span",{className:"section-label section-label-on-light",style:{display:"block",marginBottom:"16px"},children:"FAQ"}),i.jsxs(e.h2,{className:"section-title",initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,children:[i.jsx(e.span,{variants:a,style:{display:"inline-block",marginRight:"0.25em"},children:"Frequently"}),i.jsx(e.span,{variants:a,style:{display:"inline-block",marginRight:"0.25em"},children:"Asked"}),i.jsx(e.span,{variants:a,style:{display:"inline-block"},children:"Questions"})]})]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"28px"},children:[{q:"How long does a modular kitchen installation take?",a:"Standard installation typically takes 4 to 6 weeks from the date of final design approval."},{q:"Do you offer customization for non-standard kitchen spaces?",a:"Yes, all our kitchens are custom-designed to fit your specific layout and dimensions."},{q:"What warranty do you offer on kitchens?",a:"We offer a 10-year warranty covering material integrity and hardware function."}].map((t,n)=>i.jsxs(e.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1},transition:{duration:.6,delay:n*.08,ease:s},style:{padding:"clamp(24px, 3vw, 32px)",backgroundColor:"var(--color-surface-stone)",border:"1px solid var(--color-border-gold)",borderRadius:"var(--radius-sm)"},children:[i.jsx("h3",{className:"sub-title",style:{fontSize:"19px",marginBottom:"10px"},children:t.q}),i.jsx("p",{className:"description",style:{margin:0},children:t.a})]},t.q))})]})}),i.jsxs("section",{id:"contact","aria-label":"Request Design Consultation",style:{position:"relative",paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"#181818",color:"#FFFFFF",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[i.jsx(e.div,{initial:{opacity:0,scale:1.03},whileInView:{opacity:.15,scale:1},viewport:{once:!1,amount:.15},transition:{duration:1,ease:s},style:{position:"absolute",inset:0,backgroundImage:`url(${x.consultationBg})`,backgroundPosition:"center",backgroundSize:"cover",pointerEvents:"none",willChange:"transform, opacity"}}),i.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle at center, rgba(24,24,24,0.6) 0%, rgba(24,24,24,0.98) 100%)",pointerEvents:"none"}}),i.jsxs(e.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.15},variants:o,style:{position:"relative",zIndex:10,maxWidth:"820px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[i.jsxs("h2",{className:"section-title text-white",style:{marginBottom:"20px"},children:[i.jsx(e.span,{variants:a,style:{display:"inline-block",marginRight:"0.25em"},children:"Ready to Design"}),i.jsx(e.span,{variants:a,style:{display:"inline-block"},children:"Your Kitchen?"})]}),i.jsx(e.div,{variants:a,children:i.jsx("a",{href:"/talk-to-us",onClick:t=>{t.preventDefault(),window.history.pushState({},"","/talk-to-us"),window.dispatchEvent(new Event("popstate"))},className:"btn btn-light",children:"Book a Free Design Consultation"})})]})]})]}),i.jsx(f,{}),i.jsx("style",{children:`
        @media (max-width: 1023px) {
          .hero-split-container {
            display: flex !important;
            flex-direction: column !important;
            min-height: auto !important;
            width: 100% !important;
          }
          .hero-split-container > div:first-of-type {
            min-height: 360px !important;
            height: 45vh !important;
            order: 1 !important;
          }
          .hero-split-container > div:last-of-type {
            padding-top: clamp(40px, 8vw, 60px) !important;
            padding-bottom: clamp(40px, 8vw, 60px) !important;
            padding-left: clamp(20px, 4vw, 40px) !important;
            padding-right: clamp(20px, 4vw, 40px) !important;
            order: 2 !important;
          }
        }
        @media (max-width: 767px) {
          .mk-intro-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 28px !important;
          }
          .mk-fusion-grid, .mk-styles-grid, .mk-standapart-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .mk-styles-grid, .mk-standapart-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) and (max-width: 1279px) {
          .mk-standapart-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        /* Checklist item cards — Modular Kitchens & Materials/Finishes sections */
        .mk-check-card {
          transition: transform 0.35s var(--motion-ease-luxury), border-color 0.35s ease, background-color 0.35s ease, box-shadow 0.35s var(--motion-ease-luxury);
        }
        .mk-check-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-border-gold-medium);
          background-color: rgba(182, 154, 107, 0.07);
          box-shadow: 0 12px 28px -12px rgba(182, 154, 107, 0.3);
        }
        .mk-check-icon {
          transition: transform 0.35s var(--motion-ease-luxury), background-color 0.35s ease;
        }
        .mk-check-card:hover .mk-check-icon {
          transform: scale(1.12);
          background-color: rgba(182, 154, 107, 0.28);
        }

        /* "Why Leoz Kitchens" pillar cards */
        .mk-pillar-card-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--color-accent-gold);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.5s var(--motion-ease-luxury);
        }
        .mk-pillar-card:hover .mk-pillar-card-bar {
          transform: scaleX(1);
        }
        .mk-pillar-icon {
          transition: transform 0.4s var(--motion-ease-luxury), background-color 0.4s ease;
        }
        .mk-pillar-card:hover .mk-pillar-icon {
          transform: scale(1.12);
          background-color: rgba(182, 154, 107, 0.24);
        }
      `})]})};export{H as ModularKitchens,H as default};
