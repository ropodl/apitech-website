import{I as v}from"./iconify.Dm1ql0mg.js";import{d as h,r as u,o as d,j as _,G as S,c as x,w as c,a as i,bs as g,u as l,b as y,V as k,ak as B}from"./entry.DSWWLEy-.js";function E(e,o){const r=document.getElementById(e),t=o;var s=r.getBoundingClientRect().top,n=s+window.pageYOffset-t;window.scrollTo({top:n,behavior:"smooth"})}function f(e,o){const{self:r=!1}=o.modifiers??{},t=o.value,s=typeof t=="object"&&t.options||{passive:!0},n=typeof t=="function"||"handleEvent"in t?t:t.handler,a=r?e:o.arg?document.querySelector(o.arg):window;a&&(a.addEventListener("scroll",n,s),e._onScroll=Object(e._onScroll),e._onScroll[o.instance.$.uid]={handler:n,options:s,target:r?void 0:a})}function p(e,o){var n;if(!((n=e._onScroll)!=null&&n[o.instance.$.uid]))return;const{handler:r,options:t,target:s=e}=e._onScroll[o.instance.$.uid];s.removeEventListener("scroll",r,t),delete e._onScroll[o.instance.$.uid]}function V(e,o){o.value!==o.oldValue&&(p(e,o),f(e,o))}const z={mounted:f,unmounted:p,updated:V},$=h({__name:"Gotop",setup(e){const o=u(!1),r=u(0),t=s=>{if(typeof window>"u")return;const n=window.scrollY||0;o.value=n>100;const a=window.pageYOffset,m=document.documentElement.scrollHeight,w=window.innerHeight;r.value=a/(m-w)*100};return(s,n)=>(d(),_("div",{class:"position-fixed",style:B({bottom:l(o)?"20px":"-70px",right:"20px",zIndex:"999",transition:"all 250ms cubic-bezier(.17,.26,1,.32) 0s"})},[S((d(),x(k,{border:"",icon:"",theme:"dark",size:"x-large",onClick:n[0]||(n[0]=a=>l(E)("__nuxt",0)),"aria-label":"Go to top button"},{default:c(()=>[i(g,{color:"primary",width:"3",size:"64","model-value":l(r),"aria-label":"document scroll position",class:"circular-no-animation"},{default:c(()=>[i(y,{color:"white"},{default:c(()=>[i(l(v),{icon:"mdi:arrow-up"})]),_:1})]),_:1},8,["model-value"])]),_:1})),[[z,t]])],4))}});export{$ as default};
