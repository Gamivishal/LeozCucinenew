import{j as t,r as c,x as j,A as C,m}from"./index-dDPFfuEa.js";const S="/assets/LEOZ%20logo-D8apM8zi.webp",b=({className:n=""})=>{const r=i=>{i.preventDefault(),window.location.pathname!=="/"?(window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))):window.scrollTo({top:0,behavior:"smooth"})};return t.jsx("a",{href:"/",onClick:r,className:`brand-logo-link ${n}`,"aria-label":"LEOZ CUCINE — Kitchens & Wardrobes",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none"},children:t.jsx("img",{loading:"lazy",src:S,alt:"LEOZ CUCINE — Luxury Kitchen & Wardrobes",style:{height:"clamp(54px, 7.5vw, 90px)",width:"auto",maxHeight:"100px",objectFit:"contain",display:"block",transition:"opacity var(--motion-duration-fast) ease"}})})};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=(...n)=>n.filter((r,i,p)=>!!r&&p.indexOf(r)===i).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=c.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:p,className:s="",children:d,iconNode:l,...x},u)=>c.createElement("svg",{ref:u,...F,width:r,height:r,stroke:n,strokeWidth:p?Number(i)*24/Number(r):i,className:w("lucide",s),...x},[...l.map(([f,o])=>c.createElement(f,o)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(n,r)=>{const i=c.forwardRef(({className:p,...s},d)=>c.createElement(z,{ref:d,iconNode:r,className:w(`lucide-${E(n)}`,p),...s}));return i.displayName=`${n}`,i};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=k("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=k("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),L=()=>j(),W=({isPreloaderActive:n=!1,showHeader:r=!0})=>{const[i,p]=c.useState(!1),[s,d]=c.useState(!1),{lenis:l}=L();c.useEffect(()=>{const e=()=>{p(window.scrollY>40)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),c.useEffect(()=>(s?(document.body.style.overflow="hidden",l==null||l.stop()):(document.body.style.overflow="",l==null||l.start()),()=>{document.body.style.overflow="",l==null||l.start()}),[s,l]);const x=!n||r,u=(e,a)=>{if(a==="/modular-kitchens"||a==="/talk-to-us"||a==="/modular-wardrobes"||a==="/about"||a==="/contact"||a==="/franchise-enquiry"||a==="/franchise-opportunities")e.preventDefault(),window.history.pushState({},"",a),window.dispatchEvent(new Event("popstate"));else if(a==="/")e.preventDefault(),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"));else if(a.startsWith("/#")){e.preventDefault();const h=a.substring(1);if(window.location.pathname!=="/")window.history.pushState({},"","/"+h),window.dispatchEvent(new Event("popstate"));else{const v=document.querySelector(h);v&&v.scrollIntoView({behavior:"smooth"})}}},f=(e,a)=>{d(!1),u(e,a)},o=typeof window<"u"?window.location.pathname:"/",y=o==="/modular-kitchens"||o==="/modular-wardrobes"||o==="/about"||o==="/contact"||o==="/talk-to-us"||o==="/franchise-enquiry"||o==="/franchise-opportunities",g=[{name:"Home",path:"/"},{name:"Kitchens",path:"/modular-kitchens"},{name:"Wardrobes",path:"/modular-wardrobes"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"},{name:"Franchise Enquiry",path:"/franchise-opportunities"}];return t.jsxs(t.Fragment,{children:[t.jsxs("header",{role:"banner",className:"main-header-bar",style:{position:"fixed",top:0,left:0,right:0,zIndex:1e3,padding:i?"10px 5vw":"18px 5vw",backgroundColor:i||s||y||o==="/"||o===""?"var(--color-dark-bg)":"transparent",backdropFilter:i||y||s||o==="/"||o===""?"blur(16px)":"none",WebkitBackdropFilter:i||y||s||o==="/"||o===""?"blur(16px)":"none",opacity:x?1:0,pointerEvents:x?"auto":"none",transform:x?"translateY(0)":"translateY(-6px)",borderBottom:i||y||s||o==="/"||o===""?"1px solid rgba(182, 154, 107, 0.25)":"1px solid transparent",transition:"opacity 500ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, padding var(--motion-duration-slow) var(--motion-ease-luxury), background-color var(--motion-duration-slow) var(--motion-ease-luxury), border-bottom var(--motion-duration-slow) var(--motion-ease-luxury)",display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",width:"100%",willChange:"opacity, transform",boxShadow:i?"0 10px 30px rgba(0, 0, 0, 0.3)":"none"},children:[t.jsx("nav",{"aria-label":"Main Navigation",className:"desktop-header-nav",style:{justifySelf:"start",display:"flex",gap:"clamp(14px, 2vw, 24px)",alignItems:"center"},children:g.map(e=>{const a=e.path===o||e.path==="/"&&o==="";return t.jsxs("a",{href:e.path,onClick:h=>u(h,e.path),className:`header-link ${a?"active-link":""}`,style:{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,letterSpacing:"0.4px",color:a?"var(--color-accent)":"var(--color-text-primary)",opacity:a?1:.85,position:"relative",padding:"4px 0",transition:"opacity var(--motion-duration-fast) var(--motion-ease-luxury), color var(--motion-duration-fast) var(--motion-ease-luxury)",whiteSpace:"nowrap"},children:[e.name,a&&t.jsx("span",{style:{position:"absolute",bottom:0,left:0,right:0,height:"1px",backgroundColor:"var(--color-accent)",boxShadow:"0 0 8px rgba(182, 154, 107, 0.4)"}})]},e.path)})}),t.jsx("div",{style:{justifySelf:"center"},children:t.jsx(b,{variant:"dark",showTagline:!1})}),t.jsxs("div",{className:"header-right-actions",style:{justifySelf:"end",display:"flex",alignItems:"center",gap:"16px"},children:[t.jsx("a",{href:"/talk-to-us",onClick:e=>u(e,"/talk-to-us"),className:"btn btn-light desktop-header-btn",style:{fontSize:"13px",padding:"10px 22px",minHeight:"auto"},children:"Talk to Us"}),t.jsx("button",{onClick:()=>d(!s),className:"mobile-hamburger-btn","aria-label":s?"Close Menu":"Open Menu",style:{color:"var(--color-accent)",background:"none",border:"none",cursor:"pointer",padding:"6px",alignItems:"center",justifyContent:"center"},children:s?t.jsx(N,{size:24}):t.jsx(I,{size:24})})]})]}),t.jsx(C,{children:s&&t.jsxs(m.div,{initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{duration:.4,ease:[.16,1,.3,1]},style:{position:"fixed",top:0,left:0,right:0,bottom:0,width:"100vw",height:"100vh",backgroundColor:"rgba(18, 18, 18, 0.96)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",zIndex:995,paddingTop:"105px",paddingBottom:"36px",paddingLeft:"24px",paddingRight:"24px",display:"flex",flexDirection:"column",justifyContent:"space-between",overflowY:"auto"},children:[t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:g.map(e=>{const a=e.path===o||e.path==="/"&&o==="";return t.jsx("a",{href:e.path,onClick:h=>f(h,e.path),style:{fontFamily:"var(--font-heading)",fontSize:"22px",color:a?"var(--color-accent)":"#FFFFFF",textDecoration:"none",borderBottom:"1px solid rgba(182, 154, 107, 0.1)",paddingBottom:"14px"},children:e.name},e.path)})}),t.jsx("div",{style:{marginTop:"24px",paddingTop:"20px",borderTop:"1px solid rgba(182, 154, 107, 0.2)"},children:t.jsx("a",{href:"/talk-to-us",onClick:e=>f(e,"/talk-to-us"),className:"btn btn-light",style:{width:"100%",textAlign:"center",display:"block"},children:"Talk to Us"})})]})}),t.jsx("style",{children:`
        .mobile-hamburger-btn {
          display: none;
        }

        @media (max-width: 1023px) {
          .main-header-bar {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 14px 20px !important;
          }
          .desktop-header-nav {
            display: none !important;
          }
          .desktop-header-btn {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
            outline: none !important;
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
            padding: 2px !important;
          }
          .header-right-actions {
            display: flex !important;
            align-items: center !important;
            justify-content: flex-end !important;
            gap: 16px !important;
            margin-left: auto !important;
          }
        }

        .header-link:hover {
          color: var(--color-accent-gold) !important;
          opacity: 1 !important;
        }
        .header-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: var(--color-accent-gold);
          transition: width var(--motion-duration-fast) var(--motion-ease-luxury);
        }
        .header-link:hover::after, .header-link:focus-visible::after {
          width: 100%;
        }
        .hover-opacity:hover {
          opacity: 1 !important;
        }
      `})]})},M=()=>t.jsxs("footer",{id:"contact",role:"contentinfo",style:{backgroundColor:"var(--color-footer-bg)",color:"var(--color-text-primary)",paddingTop:"clamp(80px, 10vw, 140px)",paddingBottom:"60px",paddingLeft:"6vw",paddingRight:"6vw",borderTop:"1px solid var(--color-border-gold)"},children:[t.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[t.jsxs("div",{className:"footer-main-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"clamp(40px, 6vw, 80px)",marginBottom:"clamp(60px, 8vw, 100px)"},children:[t.jsxs(m.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(m.div,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},children:t.jsx(b,{variant:"dark"})}),t.jsx(m.p,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},style:{fontFamily:"var(--font-family-sans)",fontSize:"var(--font-size-sm)",fontWeight:300,lineHeight:"1.65",color:"var(--color-text-secondary)",maxWidth:"300px"},children:"Thoughtfully designed for modern living."})]}),t.jsxs(m.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.3},transition:{duration:.8,delay:.1,ease:[.16,1,.3,1]},children:[t.jsx("h4",{style:{fontFamily:"var(--font-family-sans)",fontSize:"var(--font-size-xs)",fontWeight:600,letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--color-accent-gold)",marginBottom:"24px"},children:"Navigation"}),t.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"14px"},children:[{label:"Home",path:"/"},{label:"Kitchens",path:"/modular-kitchens"},{label:"Wardrobes",path:"/modular-wardrobes"},{label:"About",path:"/about"},{label:"Contact",path:"/contact"},{label:"Franchise Enquiry",path:"/franchise-opportunities"}].map(n=>t.jsx("li",{children:t.jsx("a",{href:n.path,onClick:r=>{r.preventDefault(),window.history.pushState({},"",n.path),window.dispatchEvent(new Event("popstate"))},style:{fontFamily:"var(--font-family-sans)",fontSize:"var(--font-size-sm)",fontWeight:300,color:"var(--color-text-secondary)",transition:"color var(--motion-duration-fast) ease"},className:"footer-link",children:n.label})},n.path))})]}),t.jsxs(m.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.3},transition:{duration:.8,delay:.2,ease:[.16,1,.3,1]},children:[t.jsx("h4",{style:{fontFamily:"var(--font-family-sans)",fontSize:"var(--font-size-xs)",fontWeight:600,letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--color-accent-gold)",marginBottom:"24px"},children:"Contact Studio"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px",fontFamily:"var(--font-family-sans)",fontSize:"var(--font-size-sm)",fontWeight:300,color:"var(--color-text-secondary)"},children:[t.jsx("p",{children:"Email: info@leozcucine.com"}),t.jsx("p",{children:"Sales & Enquiry: 93131 51559"}),t.jsx("p",{children:"Customer Care: 87585 51552"}),t.jsx("p",{children:"Studio: Sankalp Square 3B, 509, Sindhu Bhavan Marg, Thaltej, Ahmedabad, Gujarat 380059"}),t.jsx("p",{children:"Hours: Mon–Sat 10 AM–7 PM, Sun by appointment"})]})]})]}),t.jsxs(m.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{duration:.8,delay:.3,ease:[.16,1,.3,1]},className:"footer-bottom-bar",style:{borderTop:"1px solid var(--color-border-gold)",paddingTop:"32px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px",fontFamily:"var(--font-family-sans)",fontSize:"11px",color:"var(--color-text-secondary)",letterSpacing:"0.08em"},children:[t.jsxs("p",{children:["© ",new Date().getFullYear()," LEOZ CUCINE. All Rights Reserved."]}),t.jsx("p",{children:"Kitchens & Wardrobes"})]})]}),t.jsx("style",{children:`
        .footer-link:hover {
          color: var(--color-accent-gold) !important;
        }

        @media (max-width: 767px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `})]});export{M as F,W as H,b as L,k as c};
