"use strict";!function(){let e=e=>e,t=document.currentScript;async function n(n={}){let i=location.href,r=document.referrer,o=e({type:"pageview",url:i});if(!1===o||null===o)return;o&&(i=o.url);let a=r.includes(location.host),l={o:i,ts:Date.now(),...n.withReferrer&&!a?{r:r}:{}};try{await fetch(null!=t&&t.src.includes("/va/")?"/va/view":"/_vercel/insights/view",{method:"POST",keepalive:!0,headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})}catch(c){}}let i=()=>{var t;window.va=function(t,n){"beforeSend"===t&&(e=n)},null==(t=window.vaq)||t.forEach(([e,t])=>{window.va(e,t)})};(()=>{if(window.vai)return;window.vai=!0,i(),n({withReferrer:!0});let e=history.pushState;history.pushState=function(...t){let i=t[2],r="string"==typeof i?location.pathname!=i.split("?")[0]:i&&location.href!==i.href;e.apply(history,t),r&&n()},window.addEventListener("popstate",function(){n()})})()}();