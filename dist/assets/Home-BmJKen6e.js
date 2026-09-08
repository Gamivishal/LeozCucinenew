import{h as F,i as T,r as u,p as O,a as R,c as k,j as e,m as a,R as y}from"./index-u1MkojtS.js";import{L,H as V,F as A}from"./Footer-PAePGKwA.js";import{i as v}from"./images-C2bKLPsF.js";import{u as P}from"./useDocumentMeta--DzT05Mc.js";import{C as z}from"./compass-Ud5pIPrg.js";import{F as C,S as I}from"./shield-check-CuPRLglq.js";import{C as D}from"./clock-BSRqpBzJ.js";import{W as M,u as G,a as K}from"./wrench-Bbs0VxfF.js";import{A as Z}from"./award-DwSTRjRA.js";import{G as Y,H as U}from"./handshake-UvI03Rn-.js";function X(){!F.current&&T();const[t]=u.useState(O.current);return t}const $={some:0,all:1};function q(t,i,{root:o,margin:r,amount:s="some"}={}){const n=R(t),l=new WeakMap,h=m=>{m.forEach(d=>{const x=l.get(d.target);if(d.isIntersecting!==!!x)if(d.isIntersecting){const f=i(d);typeof f=="function"?l.set(d.target,f):p.unobserve(d.target)}else typeof x=="function"&&(x(d),l.delete(d.target))})},p=new IntersectionObserver(h,{root:o,rootMargin:r,threshold:typeof s=="number"?s:$[s]});return n.forEach(m=>p.observe(m)),()=>p.disconnect()}function _(t,{root:i,margin:o,amount:r,once:s=!1}={}){const[n,l]=u.useState(!1);return u.useEffect(()=>{if(!t.current||s&&n)return;const h=()=>(l(!0),s?void 0:()=>l(!1)),p={root:i&&i.current||void 0,margin:o,amount:r};return q(t.current,h,p)},[i,t,o,s,r]),n}/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=k("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=k("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]),S="leoz_preloader_seen",j=()=>{if(typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return!1;try{return sessionStorage.getItem(S)!=="true"}catch{return!1}},ee=()=>{try{sessionStorage.setItem(S,"true")}catch{}},te=({isActive:t,isExiting:i})=>t?e.jsx(a.div,{"aria-hidden":"true",initial:{y:"0%"},animate:{y:i?"-100%":"0%"},transition:{duration:1.1,ease:[.76,0,.24,1]},style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"var(--color-surface-dark)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",willChange:"transform"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"18px",opacity:i?0:1,transform:i?"translateY(-8px)":"translateY(0)",transition:"opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"},children:[e.jsx(L,{}),e.jsx("span",{style:{fontFamily:"var(--font-family-sans)",fontSize:"11px",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"#B69A6B"},children:"Kitchens & Wardrobes"})]})}):null,ie=[.16,1,.3,1],N={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.05}}},g={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ie}}},c=[.16,1,.3,1],ae=()=>{const t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.1}}},i={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:1,ease:c}}};return e.jsxs("section",{id:"hero","aria-label":"LEOZ Cucine Hero",className:"home-hero-section",style:{position:"relative",height:"100vh",width:"100%",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx("img",{src:v.hero,alt:"LEOZ Cucine premium kitchen",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(10, 10, 10, 0.55) 0%, rgba(10, 10, 10, 0.4) 50%, rgba(10, 10, 10, 0.6) 100%)"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse 60% 55% at 50% 48%, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%)"}}),e.jsx("div",{"aria-hidden":"true",style:{position:"absolute",left:0,right:0,bottom:0,height:"14vh",background:"linear-gradient(180deg, transparent 0%, var(--color-surface-light) 100%)",pointerEvents:"none"}}),e.jsxs(a.div,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.15},style:{position:"relative",zIndex:2,textAlign:"center",padding:"0 24px",maxWidth:"900px",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(a.span,{variants:i,className:"section-label text-white",style:{display:"block",marginBottom:"22px",textShadow:"0 2px 16px rgba(0, 0, 0, 0.5)"},children:"KITCHENS & WARDROBES"}),e.jsxs("h1",{className:"hero-title text-white",style:{marginBottom:"22px",textShadow:"0 4px 30px rgba(0, 0, 0, 0.45)"},children:[e.jsx(a.span,{variants:i,style:{display:"inline-block",marginRight:"0.25em"},children:"German-Engineered"}),e.jsx("span",{style:{fontSize:0},children:" "}),e.jsx(a.span,{variants:i,style:{display:"inline-block",marginRight:"0.25em"},children:"Kitchens & Wardrobes,"}),e.jsx("span",{style:{fontSize:0},children:" "}),e.jsx(a.span,{variants:i,style:{display:"inline-block"},children:"Crafted in Gujarat"})]}),e.jsx(a.p,{variants:i,className:"hero-description text-light",style:{margin:"0 auto 36px",maxWidth:"620px",textShadow:"0 2px 16px rgba(0, 0, 0, 0.5)"},children:"LEOZ Cucine brings 20+ years of manufacturing expertise and German design precision to homes in Ahmedabad and across Gujarat. Every kitchen and wardrobe is designed, built and installed entirely in-house."}),e.jsxs("div",{className:"hero-cta-container",style:{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},children:[e.jsx(a.a,{variants:i,href:"/talk-to-us",onClick:o=>{o.preventDefault(),window.history.pushState({},"","/talk-to-us"),window.dispatchEvent(new Event("popstate"))},className:"btn btn-light home-cta-btn",children:"Book a Free Consultation"}),e.jsx(a.a,{variants:i,href:"#collections",onClick:o=>{var r;o.preventDefault(),(r=document.getElementById("collections"))==null||r.scrollIntoView({behavior:"smooth"})},className:"btn btn-outline home-cta-btn home-cta-btn-outline",style:{borderColor:"#FFFFFF",color:"#FFFFFF"},children:"Explore Our Collections"})]})]}),e.jsx("style",{children:`
        @media (max-width: 767px) {
          .home-hero-section {
            height: 78vh !important;
          }
          .hero-cta-container {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 12px !important;
          }
          .hero-cta-container a {
            width: 100% !important;
            max-width: 280px !important;
          }
        }
      `})]})},oe=()=>e.jsx("section",{id:"about","aria-label":"Brand Introduction",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-surface-light)",color:"var(--color-text-dark)"},children:e.jsxs("div",{className:"home-brandintro-grid",style:{maxWidth:"1300px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"clamp(40px, 6vw, 100px)",alignItems:"center"},children:[e.jsx(a.div,{className:"home-media-frame",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.15},transition:{duration:.6,ease:c},style:{position:"relative",width:"100%",height:"auto",overflow:"hidden",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-subtle)",border:"1px solid var(--color-border-gold)"},children:e.jsx("img",{src:"/PHILOSOPHY.webp",alt:"LEOZ Cucine Joinery Detail Craftsmanship",loading:"lazy",width:1209,height:1301,style:{width:"100%",height:"auto",display:"block",objectFit:"contain"}})}),e.jsxs(a.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.15},variants:N,children:[e.jsx(a.span,{variants:g,className:"section-label section-label-on-light",style:{display:"block",marginBottom:"16px"},children:"LEOZ CUCINE"}),e.jsx(a.h2,{variants:g,className:"section-title",style:{marginBottom:"20px"},children:"Where German Precision Meets Gujarati Craftsmanship"}),e.jsx(a.p,{variants:g,className:"description",style:{marginBottom:"16px"},children:"LEOZ Cucine was founded on a simple belief — a home’s kitchen and wardrobes should feel as considered as the rest of the house."}),e.jsx(a.p,{variants:g,className:"description",style:{marginBottom:"28px"},children:"Drawing on German design precision and engineering, and backed by over two decades of manufacturing experience, we create modular kitchens and wardrobes that are engineered for durability and finished for elegance. Every piece that leaves our factory carries our name — which is why we build it ourselves, start to finish."}),e.jsx(a.div,{variants:g,children:e.jsx("a",{href:"/about",onClick:t=>{t.preventDefault(),window.history.pushState({},"","/about"),window.dispatchEvent(new Event("popstate"))},className:"small-description",style:{color:"var(--color-accent)",fontWeight:600},children:"Discover Our Story →"})})]})]})}),ne=({value:t})=>{const[i,o]=y.useState(()=>t.match(/[\d,]+/)?"0":t),r=y.useRef(null),s=_(r,{once:!0,amount:.5});return y.useEffect(()=>{if(!s)return;const n=t.match(/[\d,]+/);if(!n){o(t);return}const l=n[0].replace(/,/g,""),h=parseInt(l,10);if(isNaN(h)){o(t);return}const p=t.substring(0,n.index),m=t.substring((n.index||0)+n[0].length);let d;const x=2e3,f=performance.now(),w=B=>{const E=B-f,b=Math.min(E/x,1),W=1-Math.pow(1-b,3),H=Math.floor(W*h).toLocaleString("en-US");o(`${p}${H}${m}`),b<1&&(d=requestAnimationFrame(w))};return d=requestAnimationFrame(w),()=>cancelAnimationFrame(d)},[s,t]),e.jsx("span",{ref:r,children:i})},re=()=>{const t=[{icon:Z,value:"Trusted",label:"By Homeowners"},{icon:C,value:"In-House",label:"Manufacturing"},{icon:I,value:"German-Grade",label:"Hardware Standards"},{icon:Y,value:"Pan-India",label:"Presence"}];return e.jsxs("section",{"aria-label":"Highlights Bar",style:{backgroundColor:"var(--color-surface-dark-secondary)",color:"#FFFFFF",padding:"36px 5vw",borderTop:"1px solid rgba(182, 154, 107, 0.25)",borderBottom:"1px solid rgba(182, 154, 107, 0.25)",overflow:"hidden"},children:[e.jsx("div",{style:{maxWidth:"1440px",margin:"0 auto"},children:e.jsx(a.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.15},variants:N,style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px",alignItems:"center"},children:t.map((i,o)=>e.jsxs(a.div,{className:"home-stat-card",variants:g,whileHover:{y:-6,borderColor:"rgba(182, 154, 107, 0.45)",backgroundColor:"rgba(182, 154, 107, 0.07)",boxShadow:"0 14px 34px -12px rgba(182, 154, 107, 0.3)",transition:{duration:.35,ease:c}},style:{position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",gap:"14px",padding:"clamp(16px, 2vw, 22px) clamp(14px, 2vw, 20px)",border:"1px solid rgba(182, 154, 107, 0.15)",borderRadius:"var(--radius-md)"},children:[e.jsx("span",{className:"home-stat-card-bar","aria-hidden":"true"}),e.jsx("div",{className:"home-pillar-icon",style:{width:"46px",height:"46px",borderRadius:"50%",backgroundColor:"rgba(182, 154, 107, 0.12)",border:"1px solid rgba(182, 154, 107, 0.35)",display:"flex",alignItems:"center",justifyContent:"center",color:"#B69A6B",flexShrink:0},children:e.jsx(i.icon,{size:21,strokeWidth:1.5})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3px"},children:[e.jsx("span",{className:"home-stat-value",style:{fontFamily:"var(--font-family-serif)",fontSize:"clamp(18px, 2vw, 28px)",fontWeight:300,color:"#B69A6B",lineHeight:"1.15"},children:e.jsx(ne,{value:i.value})}),e.jsx("span",{style:{fontFamily:"var(--font-family-sans)",fontSize:"11px",fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:"#B0ABA2",lineHeight:"1.2"},children:i.label})]})]},o))})}),e.jsx("style",{children:`
        @media (max-width: 900px) {
          section[aria-label="Highlights Bar"] > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px 14px !important;
          }
          .home-stat-card {
            gap: 10px !important;
            padding: 14px 12px !important;
          }
          .home-stat-card .home-pillar-icon {
            width: 38px !important;
            height: 38px !important;
          }
        }
        @media (max-width: 400px) {
          .home-stat-value {
            font-size: 16px !important;
          }
        }
      `})]})},se=()=>{const t=X(),i=typeof window<"u"&&window.innerWidth<768,o=t?0:i?32:72,r=[{eyebrow:"LEOZ KITCHENS",title:"Kitchens",desc:"Modular kitchens designed around how you actually cook and live, built with German-grade hardware and finished to a premium standard.",image:v.kitchenCategory,link:"/modular-kitchens"},{eyebrow:"LEOZ WARDROBES",title:"Wardrobes",desc:"Custom wardrobes with intelligent internal storage solutions built to fit your space precisely, with the same attention to hardware, finish, and detail as our kitchens.",image:v.wardrobeCategory,link:"/modular-wardrobes"}],s=(n,l)=>{n.preventDefault(),window.history.pushState({},"",l),window.dispatchEvent(new Event("popstate"))};return e.jsxs("section",{id:"collections","aria-label":"Our Collections",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-surface-stone)",color:"var(--color-heading)"},children:[e.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(70px, 9vw, 130px)"},children:[e.jsx("span",{className:"section-label section-label-on-light",style:{display:"block",marginBottom:"16px"},children:"OUR COLLECTIONS"}),e.jsx(a.h2,{className:"section-title",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.8,ease:[.16,1,.3,1]},children:"Two Spaces. One Standard of Craft."})]}),r.map((n,l)=>{const h=l%2===1;return e.jsxs("div",{className:"collections-editorial-row",style:{display:"grid",gridTemplateColumns:"minmax(0, 0.9fr) minmax(0, 1.1fr)",gap:"clamp(40px, 6vw, 90px)",alignItems:"center",marginBottom:l===r.length-1?0:"clamp(80px, 10vw, 140px)"},children:[e.jsxs(a.div,{className:"collections-editorial-text",initial:{opacity:0,y:t?0:24},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.4},transition:{duration:.7,ease:c},style:{order:h?2:1},children:[e.jsx("span",{className:"section-label section-label-on-light",style:{display:"block",marginBottom:"18px"},children:n.eyebrow}),e.jsx("h3",{className:"section-title",style:{marginBottom:"20px"},children:n.title}),e.jsx("p",{className:"description",style:{marginBottom:"28px",maxWidth:"480px"},children:n.desc}),e.jsxs("a",{href:n.link,onClick:p=>s(p,n.link),className:"collections-explore-link",style:{display:"inline-flex",alignItems:"center",gap:"8px",color:"var(--color-heading)",fontFamily:"var(--font-family-sans)",fontSize:"14px",fontWeight:600,letterSpacing:"0.02em"},children:["Explore ",n.title,e.jsx("span",{className:"collections-explore-arrow",style:{display:"inline-block",transition:"transform 250ms ease"},children:"→"})]})]}),e.jsx(a.div,{className:"collections-editorial-image home-media-frame",initial:{opacity:0,x:h?-o:o},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.9,ease:c},style:{order:h?1:2,position:"relative",height:"auto",borderRadius:"var(--radius-md)",overflow:"hidden",border:"1px solid var(--color-border-gold)",boxShadow:"var(--shadow-subtle)"},children:e.jsx("img",{src:n.image,alt:n.title,loading:"lazy",width:n.title==="Kitchens"?1024:1080,height:n.title==="Kitchens"?619:720,style:{width:"100%",height:"auto",display:"block",objectFit:"contain"}})})]},n.title)})]}),e.jsx("style",{children:`
        .collections-explore-link:hover {
          text-decoration: underline;
        }
        .collections-explore-link:hover .collections-explore-arrow {
          transform: translateX(4px);
        }
        @media (max-width: 767px) {
          .collections-editorial-row {
            grid-template-columns: 1fr !important;
          }
          .collections-editorial-text {
            order: 1 !important;
          }
          .collections-editorial-image {
            order: 2 !important;
          }
        }
      `})]})},le=()=>{const t=[{icon:J,title:"German Style Modular Kitchens",description:"Experience the perfect blend of sleek design, functionality, and customisation. Our modular kitchens are crafted with precision, offering innovative storage solutions and contemporary aesthetics suited to modern lifestyles."},{icon:Q,title:"Customised Wardrobes",description:"Every wardrobe is planned around how you actually get dressed — smart interior fittings, soft-close hardware and finishes chosen to suit your room, not just the catalogue."}];return e.jsx("section",{"aria-label":"Product Highlights",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-light)",color:"var(--color-heading)"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(50px, 7vw, 90px)"},children:[e.jsx("span",{className:"section-label section-label-on-light",style:{display:"block",marginBottom:"16px"},children:"PRODUCT HIGHLIGHTS"}),e.jsx(a.h2,{className:"section-title",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.8,ease:[.16,1,.3,1]},children:"Premium Solutions for Kitchens & Wardrobes"})]}),e.jsx("div",{className:"home-highlights-grid",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"clamp(28px, 3vw, 48px)"},children:t.map((i,o)=>{const r=i.icon;return e.jsx(a.div,{className:"home-highlight-card",initial:{opacity:0,x:o%2===0?-100:100},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.2},transition:{duration:.8,ease:c},style:{position:"relative"},children:e.jsxs(a.div,{whileHover:{y:-8,boxShadow:"0 24px 48px rgba(182,154,107,0.15)",borderColor:"rgba(182,154,107,0.6)"},transition:{duration:.4,ease:"easeOut"},style:{position:"relative",display:"flex",flexDirection:"column",gap:"18px",padding:"clamp(32px, 3.5vw, 44px)",backgroundColor:"var(--color-surface-stone)",border:"1px solid var(--color-border-gold)",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-subtle)",overflow:"hidden"},children:[e.jsx("span",{className:"home-highlight-card-bar","aria-hidden":"true"}),e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(182, 154, 107, 0.12)",color:"#B69A6B"},children:e.jsx(r,{size:26,strokeWidth:1.5})}),e.jsx("h3",{className:"sub-title",style:{margin:0},children:i.title}),e.jsx("p",{className:"description",style:{margin:0},children:i.description})]})},i.title)})})]})})},ce=()=>{const t=y.useRef(null),{scrollYProgress:i}=G({target:t,offset:["start center","end center"]}),o=K(i,[0,1],["0%","100%"]),r=[{title:"Consultation",desc:"We understand your kitchen or wardrobe space, needs, and style."},{title:"Design",desc:"Our team creates a kitchen or wardrobe layout tailored to your requirements."},{title:"Manufacturing",desc:"Your kitchen or wardrobe is built at our own 20,000 sq. ft. facility."},{title:"Installation",desc:"Our in-house team installs and finishes the project."},{title:"After-Sales Support",desc:"Warranty-backed service, long after installation."}];return e.jsxs("section",{"aria-label":"Our Process",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-light)",color:"var(--color-heading)"},children:[e.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(50px, 7vw, 90px)"},children:[e.jsx("span",{className:"section-label section-label-on-light",style:{display:"block",marginBottom:"16px"},children:"HOW WE WORK"}),e.jsx(a.h2,{className:"section-title",initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.8,ease:c},children:"From Idea to Installation."})]}),e.jsxs("div",{ref:t,className:"home-timeline",children:[e.jsx("div",{className:"home-timeline-track","aria-hidden":"true"}),e.jsx(a.div,{className:"home-timeline-progress",style:{height:o},"aria-hidden":"true"}),r.map((s,n)=>{const l=n%2===0;return e.jsxs("div",{className:`home-timeline-row ${l?"is-left":"is-right"}`,children:[e.jsxs(a.div,{className:"home-timeline-content",initial:{opacity:0,x:l?-36:36},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.5},transition:{duration:.7,ease:c},children:[e.jsx("h3",{className:"sub-title",style:{marginBottom:"8px"},children:s.title}),e.jsx("p",{className:"small-description",children:s.desc})]}),e.jsx(a.span,{className:"home-timeline-dot",initial:{backgroundColor:"#F7F5F1",scale:.7},whileInView:{backgroundColor:"#B69A6B",scale:1},viewport:{once:!1,amount:.5},transition:{duration:.4,ease:c},"aria-hidden":"true"})]},s.title)})]})]}),e.jsx("style",{children:`
        .home-timeline {
          position: relative;
          padding: 12px 0;
        }
        .home-timeline-track {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: var(--color-border-gold-medium);
          transform: translateX(-50%);
        }
        .home-timeline-progress {
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          background: var(--color-accent);
          transform: translateX(-50%);
          transform-origin: top;
        }
        .home-timeline-row {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 32px 1fr;
          align-items: center;
          column-gap: clamp(24px, 4vw, 56px);
          padding: clamp(24px, 3.5vw, 40px) 0;
        }
        .home-timeline-row.is-left .home-timeline-content {
          grid-column: 1;
          text-align: right;
        }
        .home-timeline-row.is-right .home-timeline-content {
          grid-column: 3;
          text-align: left;
        }
        .home-timeline-dot {
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
          .home-timeline-row {
            grid-template-columns: 1fr 20px 1fr;
            column-gap: clamp(10px, 3.5vw, 18px);
            padding: clamp(18px, 5vw, 28px) 0;
          }
          .home-timeline-dot {
            width: 10px;
            height: 10px;
          }
          .home-timeline-content .sub-title {
            font-size: 18px;
            margin-bottom: 6px !important;
          }
          .home-timeline-content .small-description {
            font-size: 12.5px;
            line-height: 1.5;
          }
        }

        @media (max-width: 420px) {
          .home-timeline-row {
            grid-template-columns: 1fr 16px 1fr;
            column-gap: 8px;
          }
          .home-timeline-dot {
            width: 9px;
            height: 9px;
          }
          .home-timeline-content .sub-title {
            font-size: 16px;
          }
          .home-timeline-content .small-description {
            font-size: 11.5px;
            line-height: 1.45;
          }
        }
      `})]})},de=()=>{const t=[{icon:z,title:"German Design Influence",description:"Precision, engineering, and clean form language adapted for Indian homes and the Indian climate."},{icon:C,title:"Own Manufacturing Factory",description:"We design and manufacture in-house, giving us complete control over quality, materials, and finish."},{icon:D,title:"20+ Years of Experience",description:"Two decades of refining our craft, materials, and processes."},{icon:I,title:"Comprehensive Warranty",description:"Backed by a warranty that reflects our confidence in what we build."},{icon:M,title:"End-to-End Installation Service",description:"From design consultation to final installation, handled entirely by our own team."}];return e.jsx("section",{"aria-label":"Why LEOZ Cucine",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-surface-dark)",color:"var(--color-text-primary)"},children:e.jsxs("div",{style:{maxWidth:"1300px",margin:"0 auto"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(50px, 7vw, 90px)"},children:[e.jsx("span",{className:"section-label",style:{display:"block",marginBottom:"16px"},children:"WHY CHOOSE LEOZ CUCINE"}),e.jsx(a.h2,{className:"section-title text-white",initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.8,ease:[.16,1,.3,1]},children:"Built to Be Chosen, Not Just Sold."})]}),e.jsx("div",{className:"home-pillars-grid",style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"clamp(20px, 2.4vw, 28px)"},children:t.map((i,o)=>{const r=i.icon;return e.jsxs(a.div,{className:"home-pillar-card",initial:{opacity:0,x:o%2===0?-100:100},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.2},transition:{duration:.8,delay:o*.08,ease:c},whileHover:{y:-8,borderColor:"rgba(182, 154, 107, 0.45)",backgroundColor:"#242424",boxShadow:"0 18px 40px -14px rgba(182, 154, 107, 0.3)",transition:{duration:.35,ease:c}},style:{position:"relative",overflow:"hidden",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",padding:"clamp(24px, 2.6vw, 32px) clamp(16px, 2vw, 22px)",backgroundColor:"var(--color-surface-dark-secondary)",border:"1px solid var(--color-border-gold)",borderRadius:"var(--radius-md)"},children:[e.jsx("span",{className:"home-pillar-card-bar","aria-hidden":"true"}),e.jsx("div",{className:"home-pillar-icon",style:{width:"52px",height:"52px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(182, 154, 107, 0.12)",color:"#B69A6B",marginBottom:"6px",flexShrink:0},children:e.jsx(r,{size:22,strokeWidth:1.5})}),e.jsx("h3",{className:"sub-title text-white",style:{fontSize:"18px",margin:0,minHeight:"48px",display:"flex",alignItems:"flex-start",justifyContent:"center"},children:i.title}),e.jsx("p",{className:"small-description",style:{color:"var(--color-text-secondary)",margin:0},children:i.description})]},i.title)})})]})})},pe=()=>e.jsx("section",{"aria-label":"For Trade Professionals",style:{paddingTop:"var(--space-section-padding-desktop)",paddingBottom:"var(--space-section-padding-desktop)",paddingLeft:"6vw",paddingRight:"6vw",backgroundColor:"var(--color-surface-dark)",color:"var(--color-text-primary)",display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsxs("div",{style:{maxWidth:"760px",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.5},transition:{duration:.8,ease:c},style:{width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(182, 154, 107, 0.12)",color:"#B69A6B",marginBottom:"24px"},children:e.jsx(U,{size:26,strokeWidth:1.5})}),e.jsx(a.span,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.3},transition:{duration:.8,ease:c},className:"section-label",style:{display:"block",marginBottom:"16px"},children:"FOR TRADE PROFESSIONALS"}),e.jsx(a.h2,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.5},transition:{duration:1,ease:c},className:"section-title text-white",style:{marginBottom:"24px"},children:"Partnering with Architects, Interior Designers & Builders"}),e.jsx("div",{style:{margin:"0 auto",marginBottom:"clamp(28px, 4vw, 44px)"},children:["We work closely with design and construction professionals","across Gujarat, offering dedicated support, technical","specifications, and reliable timelines for client projects."].map((t,i)=>e.jsx(a.div,{initial:{opacity:0,x:-100},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.8,ease:c},children:e.jsx("span",{className:"description text-light",style:{display:"block",margin:0},children:t})},i))}),e.jsx(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.5},transition:{duration:.8,ease:c},children:e.jsx("a",{href:"/contact",onClick:t=>{t.preventDefault(),window.history.pushState({},"","/contact"),window.dispatchEvent(new Event("popstate"))},className:"btn btn-light home-cta-btn",children:"Partner With Us"})})]})}),he=()=>e.jsxs("section",{id:"consultation","aria-label":"Talk To Us",style:{position:"relative",minHeight:"80vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--color-surface-dark)",color:"var(--color-text-primary)",overflow:"hidden"},children:[e.jsx(a.div,{initial:{opacity:0,scale:1.03},whileInView:{opacity:.45,scale:1},viewport:{once:!1,amount:.15},transition:{duration:1,ease:c},style:{position:"absolute",inset:0,backgroundImage:`url(${v.consultationBg})`,backgroundPosition:"center",backgroundSize:"cover",willChange:"transform, opacity"}}),e.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle, rgba(24,24,24,0.3) 0%, rgba(24,24,24,0.9) 100%)"}}),e.jsxs(a.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:{hidden:{},visible:{transition:{staggerChildren:.2}}},style:{position:"relative",zIndex:10,maxWidth:"900px",padding:"80px 6vw",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(a.h2,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.5},transition:{duration:1,ease:[.16,1,.3,1]},className:"section-title text-white",style:{marginBottom:"24px"},children:"Let’s Design Your Kitchen or Wardrobe"}),e.jsx("div",{style:{margin:"0 auto",marginBottom:"clamp(28px, 4vw, 44px)"},children:["Whether you’re planning a new kitchen,","upgrading your wardrobe, or specifying","kitchens and wardrobes for a residential project,","our team is ready to help."].map((t,i)=>e.jsx(a.div,{initial:{opacity:0,x:-100},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.8,ease:[.16,1,.3,1]},children:e.jsx("span",{className:"description text-light",style:{display:"block",margin:0},children:t})},i))}),e.jsx(a.div,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},children:e.jsx("a",{href:"/talk-to-us",onClick:t=>{t.preventDefault(),window.history.pushState({},"","/talk-to-us"),window.dispatchEvent(new Event("popstate"))},className:"btn btn-light home-cta-btn",children:"Talk to Us Today"})})]})]}),Ce=()=>{const[t,i]=u.useState(0),[o,r]=u.useState(j),[s,n]=u.useState(!1),[l,h]=u.useState(()=>!j());return P("LEOZ Cucine | German-Engineered Kitchens & Wardrobes in Gujarat","LEOZ Cucine brings 20+ years of manufacturing expertise and German design precision to homes in Ahmedabad and across Gujarat."),u.useEffect(()=>{if(!o)return;window.scrollTo(0,0),document.body.style.overflow="hidden";const p=setTimeout(()=>{n(!0),h(!0)},400),m=setTimeout(()=>{r(!1),document.body.style.overflow="",ee()},1500);return()=>{clearTimeout(p),clearTimeout(m),document.body.style.overflow=""}},[o]),u.useEffect(()=>{const p=()=>{const m=window.scrollY,d=document.documentElement.scrollHeight-window.innerHeight;d>0&&i(m/d*100)};return window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[]),e.jsxs("div",{className:"page-home",children:[e.jsx(te,{isActive:o,isExiting:s}),e.jsx("div",{className:"scroll-progress-bar",style:{transform:`scaleX(${t/100})`}}),e.jsx(V,{isPreloaderActive:o,showHeader:l}),e.jsxs("main",{id:"main-content",children:[e.jsx(ae,{}),e.jsx(oe,{}),e.jsx(se,{}),e.jsx(le,{}),e.jsx(de,{}),e.jsx(re,{}),e.jsx(ce,{}),e.jsx(pe,{}),e.jsx(he,{})]}),e.jsx(A,{}),e.jsx("style",{children:`
        /* Premium pill CTA treatment — scoped to Home's own content buttons only */
        .home-cta-btn {
          border-radius: var(--radius-full);
          padding: 14px 32px;
          transition: transform 0.4s var(--motion-ease-luxury), box-shadow 0.4s var(--motion-ease-luxury), background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        .home-cta-btn:hover,
        .home-cta-btn:focus-visible {
          transform: translateY(-2px);
        }
        .home-cta-btn.btn-light:hover,
        .home-cta-btn.btn-light:focus-visible {
          box-shadow: 0 14px 32px -10px rgba(0, 0, 0, 0.35);
        }
        .home-cta-btn-outline:hover,
        .home-cta-btn-outline:focus-visible {
          box-shadow: 0 14px 32px -10px rgba(0, 0, 0, 0.25);
        }

        /* Soft zoom-on-hover for editorial images */
        .home-media-frame {
          transition: box-shadow 0.4s var(--motion-ease-luxury);
        }
        .home-media-frame img {
          transition: transform 0.7s var(--motion-ease-luxury);
        }
        .home-media-frame:hover img {
          transform: scale(1.045);
        }

        /* Top accent bar on Product Highlight cards */
        .home-highlight-card-bar {
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
        .home-highlight-card:hover .home-highlight-card-bar {
          transform: scaleX(1);
        }
        .home-highlight-card:hover > div {
          border-color: var(--color-border-gold-medium) !important;
        }

        /* Top accent bar shared by the "Why Choose Leoz" pillar cards and the stat cards in the Highlights Bar */
        .home-pillar-card-bar,
        .home-stat-card-bar {
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
        .home-pillar-card:hover .home-pillar-card-bar,
        .home-stat-card:hover .home-stat-card-bar {
          transform: scaleX(1);
        }
        .home-pillar-icon {
          transition: transform 0.4s var(--motion-ease-luxury), background-color 0.4s ease;
        }
        .home-pillar-card:hover .home-pillar-icon,
        .home-stat-card:hover .home-pillar-icon {
          transform: scale(1.12);
          background-color: rgba(182, 154, 107, 0.24) !important;
        }

        @media (max-width: 767px) {
          .home-pillars-grid, .home-highlights-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .home-pillars-grid, .home-highlights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) and (max-width: 1279px) {
          .home-pillars-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `})]})};export{Ce as Home,Ce as default};
