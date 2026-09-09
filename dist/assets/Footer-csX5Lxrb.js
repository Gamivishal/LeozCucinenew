import{c as N,j as t,I,r as c,J as D,m as d,E as z,e as A,P as T,b as R,g as H,k as M,A as W,K as O}from"./index-t-bDpiI0.js";/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=N("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=N("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),B="/assets/LEOZ%20logo-D8apM8zi.webp",F=({className:i=""})=>{const m=l=>{l.preventDefault(),window.location.pathname!=="/"?(window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))):window.scrollTo({top:0,behavior:"smooth"})};return t.jsx("a",{href:"/",onClick:m,className:`brand-logo-link ${i}`,"aria-label":"LEOZ CUCINE — Kitchens & Wardrobes",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none"},children:t.jsx("img",{loading:"lazy",src:B,alt:"LEOZ CUCINE — Luxury Kitchen & Wardrobes",style:{height:"clamp(54px, 7.5vw, 90px)",width:"auto",maxHeight:"100px",objectFit:"contain",display:"block",transition:"opacity var(--motion-duration-fast) ease"}})})},K=()=>I(),C="mobile-nav-panel",V=({isPreloaderActive:i=!1,showHeader:m=!0})=>{const[l,L]=c.useState(!1),[n,f]=c.useState(!1),{lenis:r}=K(),g=c.useRef(null),b=c.useRef(null);c.useEffect(()=>{const e=()=>{L(window.scrollY>40)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),c.useEffect(()=>(n?(document.body.style.overflow="hidden",r==null||r.stop()):(document.body.style.overflow="",r==null||r.start()),()=>{document.body.style.overflow="",r==null||r.start()}),[n,r]),c.useEffect(()=>{var j;if(!n)return;const e=b.current,o=()=>e?Array.from(e.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])')):[];(j=o()[0])==null||j.focus();const h=s=>{if(s.key==="Escape"){s.preventDefault(),f(!1);return}if(s.key!=="Tab")return;const x=o();if(x.length===0)return;const E=x[0],S=x[x.length-1];s.shiftKey&&document.activeElement===E?(s.preventDefault(),S.focus()):!s.shiftKey&&document.activeElement===S&&(s.preventDefault(),E.focus())};return document.addEventListener("keydown",h),()=>{var s;document.removeEventListener("keydown",h),(s=g.current)==null||s.focus()}},[n]),c.useEffect(()=>{const e=()=>f(!1);return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[]);const y=!i||m,v=(e,o)=>{if(o==="/modular-kitchens"||o==="/talk-to-us"||o==="/modular-wardrobes"||o==="/about"||o==="/contact"||o==="/franchise-enquiry"||o==="/franchise-opportunities")e.preventDefault(),window.history.pushState({},"",o),window.dispatchEvent(new Event("popstate"));else if(o==="/")e.preventDefault(),window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"));else if(o.startsWith("/#")){e.preventDefault();const p=o.substring(1);if(window.location.pathname!=="/")window.history.pushState({},"","/"+p),window.dispatchEvent(new Event("popstate"));else{const h=document.querySelector(p);h&&h.scrollIntoView({behavior:"smooth"})}}},w=(e,o)=>{f(!1),v(e,o)},a=typeof window<"u"?window.location.pathname:"/",u=a==="/modular-kitchens"||a==="/modular-wardrobes"||a==="/about"||a==="/contact"||a==="/talk-to-us"||a==="/franchise-enquiry"||a==="/franchise-opportunities",k=[{name:"Home",path:"/"},{name:"Kitchens",path:"/modular-kitchens"},{name:"Wardrobes",path:"/modular-wardrobes"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"},{name:"Franchise Enquiry",path:"/franchise-opportunities"}];return t.jsxs(t.Fragment,{children:[t.jsxs("header",{role:"banner",className:"main-header-bar",style:{position:"fixed",top:0,left:0,right:0,zIndex:1e3,padding:l?"10px 5vw":"18px 5vw",backgroundColor:l||n||u||a==="/"||a===""?"var(--color-dark-bg)":"transparent",backdropFilter:l||u||n||a==="/"||a===""?"blur(16px)":"none",WebkitBackdropFilter:l||u||n||a==="/"||a===""?"blur(16px)":"none",opacity:y?1:0,pointerEvents:y?"auto":"none",transform:y?"translateY(0)":"translateY(-6px)",borderBottom:l||u||n||a==="/"||a===""?"1px solid rgba(182, 154, 107, 0.25)":"1px solid transparent",transition:"opacity 500ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, padding var(--motion-duration-slow) var(--motion-ease-luxury), background-color var(--motion-duration-slow) var(--motion-ease-luxury), border-bottom var(--motion-duration-slow) var(--motion-ease-luxury)",display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",width:"100%",willChange:"opacity, transform",boxShadow:l?"0 10px 30px rgba(0, 0, 0, 0.3)":"none"},children:[t.jsx("nav",{"aria-label":"Main Navigation",className:"desktop-header-nav",style:{justifySelf:"start",display:"flex",gap:"clamp(14px, 2vw, 24px)",alignItems:"center"},children:k.map(e=>{const o=e.path===a||e.path==="/"&&a==="";return t.jsxs("a",{href:e.path,onClick:p=>v(p,e.path),className:`header-link ${o?"active-link":""}`,style:{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,letterSpacing:"0.4px",color:o?"var(--color-accent)":"var(--color-text-primary)",opacity:o?1:.85,position:"relative",padding:"4px 0",transition:"opacity var(--motion-duration-fast) var(--motion-ease-luxury), color var(--motion-duration-fast) var(--motion-ease-luxury)",whiteSpace:"nowrap"},children:[e.name,o&&t.jsx("span",{style:{position:"absolute",bottom:0,left:0,right:0,height:"1px",backgroundColor:"var(--color-accent)",boxShadow:"0 0 8px rgba(182, 154, 107, 0.4)"}})]},e.path)})}),t.jsx("div",{style:{justifySelf:"center"},children:t.jsx(F,{variant:"dark",showTagline:!1})}),t.jsxs("div",{className:"header-right-actions",style:{justifySelf:"end",display:"flex",alignItems:"center",gap:"16px"},children:[t.jsx("a",{href:"/talk-to-us",onClick:e=>v(e,"/talk-to-us"),className:"btn btn-light desktop-header-btn",style:{fontSize:"13px",padding:"10px 22px",minHeight:"auto"},children:"Talk to Us"}),t.jsx("button",{ref:g,onClick:()=>f(!n),className:"mobile-hamburger-btn","aria-label":n?"Close Menu":"Open Menu","aria-expanded":n,"aria-controls":C,style:{color:"var(--color-accent)",background:"none",border:"none",cursor:"pointer",padding:"6px",alignItems:"center",justifyContent:"center"},children:n?t.jsx(_,{size:24}):t.jsx(P,{size:24})})]})]}),t.jsx(D,{children:n&&t.jsxs(d.div,{ref:b,id:C,role:"dialog","aria-modal":"true","aria-label":"Mobile navigation",initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{duration:.4,ease:[.16,1,.3,1]},style:{position:"fixed",top:0,left:0,right:0,bottom:0,width:"100vw",height:"100vh",backgroundColor:"rgba(18, 18, 18, 0.96)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",zIndex:995,paddingTop:"105px",paddingBottom:"36px",paddingLeft:"24px",paddingRight:"24px",display:"flex",flexDirection:"column",justifyContent:"space-between",overflowY:"auto"},children:[t.jsx("nav",{"aria-label":"Mobile Navigation",style:{display:"flex",flexDirection:"column",gap:"20px"},children:k.map(e=>{const o=e.path===a||e.path==="/"&&a==="";return t.jsx("a",{href:e.path,onClick:p=>w(p,e.path),style:{fontFamily:"var(--font-heading)",fontSize:"22px",color:o?"var(--color-accent)":"#FFFFFF",textDecoration:"none",borderBottom:"1px solid rgba(182, 154, 107, 0.1)",paddingBottom:"14px"},children:e.name},e.path)})}),t.jsx("div",{style:{marginTop:"24px",paddingTop:"20px",borderTop:"1px solid rgba(182, 154, 107, 0.2)"},children:t.jsx("a",{href:"/talk-to-us",onClick:e=>w(e,"/talk-to-us"),className:"btn btn-light",style:{width:"100%",textAlign:"center",display:"block"},children:"Talk to Us"})})]})}),t.jsx("style",{children:`
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
            align-items: center !important;
            justify-content: center !important;
            outline: none !important;
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
            padding: 10px !important;
            width: 44px !important;
            height: 44px !important;
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
      `})]})},Y=()=>t.jsxs("footer",{id:"contact",role:"contentinfo",style:{backgroundColor:"var(--color-footer-bg)",color:"var(--color-text-primary)",paddingTop:"clamp(80px, 10vw, 140px)",paddingBottom:"60px",paddingLeft:"6vw",paddingRight:"6vw",borderTop:"1px solid var(--color-border-gold)"},children:[t.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[t.jsxs("div",{className:"footer-main-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"clamp(40px, 6vw, 80px)",marginBottom:"clamp(60px, 8vw, 100px)"},children:[t.jsxs(d.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(d.div,{variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},children:t.jsx(F,{variant:"dark"})}),t.jsx(d.p,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.16,1,.3,1]}}},style:{fontFamily:"var(--font-family-sans)",fontSize:"var(--font-size-sm)",fontWeight:300,lineHeight:"1.65",color:"var(--color-text-secondary)",maxWidth:"300px"},children:"Thoughtfully designed for modern living."})]}),t.jsxs(d.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.8,delay:.1,ease:[.16,1,.3,1]},children:[t.jsx("h4",{style:{fontFamily:"var(--font-family-sans)",fontSize:"var(--font-size-xs)",fontWeight:600,letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--color-accent-gold)",marginBottom:"24px"},children:"Navigation"}),t.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"14px"},children:[{label:"Home",path:"/"},{label:"Kitchens",path:"/modular-kitchens"},{label:"Wardrobes",path:"/modular-wardrobes"},{label:"About",path:"/about"},{label:"Contact",path:"/contact"},{label:"Franchise Enquiry",path:"/franchise-opportunities"},{label:"Talk to Us",path:"/talk-to-us"}].map(i=>t.jsx("li",{children:t.jsx("a",{href:i.path,onClick:m=>{m.preventDefault(),window.history.pushState({},"",i.path),window.dispatchEvent(new Event("popstate"))},style:{fontFamily:"var(--font-family-sans)",fontSize:"var(--font-size-sm)",fontWeight:300,color:"var(--color-text-secondary)",transition:"color var(--motion-duration-fast) ease"},className:"footer-link",children:i.label})},i.path))})]}),t.jsxs(d.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.8,delay:.2,ease:[.16,1,.3,1]},children:[t.jsx("h4",{style:{fontFamily:"var(--font-family-sans)",fontSize:"var(--font-size-xs)",fontWeight:600,letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--color-accent-gold)",marginBottom:"24px"},children:"Contact Studio"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px",fontFamily:"var(--font-family-sans)",fontSize:"var(--font-size-sm)",fontWeight:300,color:"var(--color-text-secondary)"},children:[t.jsxs("p",{children:["Email: ",t.jsx("a",{href:A,className:"footer-link",children:z})]}),t.jsxs("p",{children:["Sales & Enquiry: ",t.jsx("a",{href:R,className:"footer-link",children:T})]}),t.jsxs("p",{children:["Customer Care: ",t.jsx("a",{href:M,className:"footer-link",children:H})]}),t.jsxs("p",{children:["Studio: ",W]}),t.jsxs("p",{children:["Hours: ",O]})]})]})]}),t.jsxs(d.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.3},transition:{duration:.8,delay:.3,ease:[.16,1,.3,1]},className:"footer-bottom-bar",style:{borderTop:"1px solid var(--color-border-gold)",paddingTop:"32px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px",fontFamily:"var(--font-family-sans)",fontSize:"11px",color:"var(--color-text-secondary)",letterSpacing:"0.08em"},children:[t.jsxs("p",{children:["© ",new Date().getFullYear()," LEOZ Cucine. All Rights Reserved."]}),t.jsx("a",{href:"/privacy-policy",onClick:i=>{i.preventDefault(),window.history.pushState({},"","/privacy-policy"),window.dispatchEvent(new Event("popstate"))},className:"footer-link",children:"Privacy Policy"}),t.jsx("p",{children:"Kitchens & Wardrobes"})]})]}),t.jsx("style",{children:`
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
          .footer-link {
            display: inline-flex !important;
            align-items: center !important;
            min-height: 44px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `})]});export{Y as F,V as H,F as L};
