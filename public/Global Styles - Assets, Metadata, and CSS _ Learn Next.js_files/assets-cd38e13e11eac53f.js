(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4679],{5295:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/assets-metadata-css/assets",function(){return a(91630)}])},15348:function(e,t,a){"use strict";a.d(t,{n:function(){return m}});var s=a(97458),n=a(65635),i=a.n(n),r=a(52983),o=a(14517),c=a(388);function l(e){let{videoSrc:t,video:a,renderImage:n,src:i,alt:r}=e;return i?t||a?(0,s.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:i}):n?n(e):(0,s.jsx)("img",{alt:r,src:i||null}):null}class p extends r.Component{static defaultProps={lazy:!0};state={src:this.props.lazy?void 0:this.props.videoSrc||this.props.src};handleIntersect=e=>{e.isIntersecting&&this.setState({src:this.props.videoSrc||this.props.src})};render(){let{caption:e,width:t,height:a,margin:n=40,video:r=!1,videoSrc:p,captionSpacing:m=null,renderImage:d,oversize:u=!0,float:g,lazy:h,shadow:b,style:k,...N}=this.props,x=`${String(a/t*100)}%`;return(0,s.jsx)(c.Z,{disabled:!h,onIntersect:this.handleIntersect,once:!0,rootMargin:"20%",children:(0,s.jsxs)("figure",{className:i().dynamic([["95f21c269387503e",[n,t?`width: ${t}px;`:"",b?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,n,n,t,g,n,g]]])+" "+((0,o.Z)({oversize:t>650&&u,float:g&&t<520})||""),children:[(0,s.jsxs)("div",{className:i().dynamic([["95f21c269387503e",[n,t?`width: ${t}px;`:"",b?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,n,n,t,g,n,g]]])+" container",children:[(0,s.jsx)("div",{style:{paddingBottom:x,...k},className:i().dynamic([["95f21c269387503e",[n,t?`width: ${t}px;`:"",b?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,n,n,t,g,n,g]]]),children:(0,s.jsx)(l,{alt:N.alt,height:a,renderImage:d,video:r,videoSrc:p,width:t,...N,src:this.state.src})}),e?(0,s.jsx)("figcaption",{style:m?{marginTop:m}:{},className:i().dynamic([["95f21c269387503e",[n,t?`width: ${t}px;`:"",b?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,n,n,t,g,n,g]]]),children:e}):null]}),(0,s.jsx)(i(),{id:"95f21c269387503e",dynamic:[n,t?`width: ${t}px;`:"",b?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":"",t,n,n,t,g,n,g],children:`figure.__jsx-style-dynamic-selector{display:block;text-align:center;margin:${n}px 0}.container.__jsx-style-dynamic-selector{margin:0 auto;${t?`width: ${t}px;`:""}
                max-width: 100%;}@media screen and (max-width:320px){.container.__jsx-style-dynamic-selector{width:100%}}div.__jsx-style-dynamic-selector{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);position:relative}figure.__jsx-style-dynamic-selector img,figure.__jsx-style-dynamic-selector video{height:100%;left:0;position:absolute;top:0;width:100%;${b?"box-shadow: 0 8px 30px rgba(0,0,0,0.12)":""}
              }figcaption.__jsx-style-dynamic-selector{color:#999;font-size:12px;margin:0;text-align:center}@media(min-width:1200px){figure.oversize.__jsx-style-dynamic-selector{width:${t}px;margin:${n}px 0 ${n}px -webkit-calc(((${t}px - 650px) / 2) * -1);margin:${n}px 0 ${n}px -moz-calc(((${t}px - 650px) / 2) * -1);margin:${n}px 0 ${n}px calc(((${t}px - 650px) / 2) * -1)}figure.float.__jsx-style-dynamic-selector{float:${g};margin:${n}px;margin-${g}:-150px}}`})]})})}}function m(e){return(0,s.jsx)(p,{...e,alt:"",video:!0})}t.Z=function(e){return(0,s.jsx)(p,{...e,alt:""})}},388:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var s=a(52983),n=a(63730);function i(e,t){return o(t.root,e.root)&&o(t.rootMargin,e.rootMargin)&&o(t.threshold,e.thresholds)}function r(e){if(!/^-?\d*\.?\d+(?:px|%)$/.test(e))throw Error("rootMargin must be specified as a CSS margin property")}function o(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length?e.every((a,s)=>o(e[s],t[s])):e===t}a(81324);let c=function(){let e=new Map;function t(t){return e.has(t)?e.get(t):e.set(t,new Map).get(t)}function a(e,a){for(let s of e){let n=t(a),i=n.get(s.target);i&&i(s)}}return{getObserver:function(t){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{root:t.root||null,rootMargin:function(e){let t=(e||"0px").trim().split(/\s+/);return t.forEach(r),t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t.join(" ")}(t.rootMargin),threshold:Array.isArray(e=t.threshold)?e:[void 0!==e?e:0]}}(t);for(let s of e.keys())if(i(s,a))return s;return null}(t)||new IntersectionObserver(a,t)},observeTarget:function(e,a,s){let n=t(e);n.set(a,s),e.observe(a)},unobserveTarget:function(e,a){let s=t(e);s.delete(a),e.unobserve(a)}}}(),{getObserver:l}=c,{observeTarget:p}=c,{unobserveTarget:m}=c;class d extends s.Component{static defaultProps={disabled:!1,once:!1};shouldReobserve=!1;componentDidMount(){this.observer=l(u(this.props)),this.observe()}UNSAFE_componentWillReceiveProps(e){let t=u(e);i(this.observer,t)||(this.unobserve(),this.observer=l(t),this.shouldReobserve=!0),this.props.disabled&&!e.disabled&&(this.shouldReobserve=!0),!this.props.disabled&&e.disabled&&this.unobserve()}componentDidUpdate(){this.shouldReobserve&&(this.observe(),this.shouldReobserve=!1)}componentWillUnmount(){this.unobserve()}handleTarget=e=>{let t=e&&Object.prototype.hasOwnProperty.call(e,"getBoundingClientRect")?e:(0,n.findDOMNode)(e);this.target&&this.target!==t&&(this.unobserve(),this.shouldReobserve=!0),this.target=t};observe(){this.props.disabled||p(this.observer,this.target,this.handleIntersect)}unobserve(){m(this.observer,this.target)}handleIntersect=e=>{this.props.onIntersect(e,this.props.value),this.props.once&&e.isIntersecting&&this.unobserve()};render(){return this.props.render?this.props.render({innerRef:this.handleTarget}):(0,s.cloneElement)(s.Children.only(this.props.children),{ref:this.handleTarget})}}let u=e=>({root:e.root,rootMargin:e.rootMargin,threshold:e.threshold})},67277:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var s=a(97458),n=a(65635),i=a.n(n);a(52983);var r=function(e){let{color:t}=e;return(0,s.jsx)("svg",{height:"16",viewBox:"0 0 24 24",width:"16",children:(0,s.jsx)("g",{fill:t||"#111111",children:(0,s.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:t||"#111111"})})})},o=a(60530),c=a(38265),l=a(57330);function p(e){return(0,s.jsxs)("div",{className:"jsx-dd7ad94e93d3b01d",children:[e.children,(0,s.jsx)(i(),{id:"dd7ad94e93d3b01d",children:"div.jsx-dd7ad94e93d3b01d{background:#fafafa;border:1px solid#eaeaea;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 16px 16px 16px;margin-top:2rem;margin-bottom:4rem;counter-reset:answer-list}"})]})}function m(e){let{value:t,onChange:a,selected:n,readOnly:r,children:o}=e;return(0,s.jsxs)("label",{className:i().dynamic([["eb16188a399713d6",[r?"":"cursor: pointer;"]]])+" "+`f5${r?" disabled":""}`,children:[(0,s.jsx)("input",{defaultChecked:n,disabled:r,name:"answer",onChange:a,type:"radio",value:t,className:i().dynamic([["eb16188a399713d6",[r?"":"cursor: pointer;"]]])}),(0,s.jsx)("span",{className:i().dynamic([["eb16188a399713d6",[r?"":"cursor: pointer;"]]]),children:o}),(0,s.jsx)(i(),{id:"eb16188a399713d6",dynamic:[r?"":"cursor: pointer;"],children:`input.__jsx-style-dynamic-selector{display:none}input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:#111;border-color:#111;-webkit-box-shadow:0 0 0 3px#c1c1c1;-moz-box-shadow:0 0 0 3px#c1c1c1;box-shadow:0 0 0 3px#c1c1c1;font-weight:600}label.__jsx-style-dynamic-selector{display:block;margin:.5rem 0;${r?"":"cursor: pointer;"}
        }label.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{counter-increment:answer-list;content:counter(answer-list,upper-alpha)". ";display:inline-block;width:1.5rem}span.__jsx-style-dynamic-selector{color:#666;display:block;padding:.5rem 1rem;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;border:1px solid#666;background:white;-webkit-transition:box-shadow.2s ease;-moz-transition:box-shadow.2s ease;-o-transition:box-shadow.2s ease;transition:box-shadow.2s ease}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{border-color:#eaeaea}.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:unset;font-weight:500;background:white;border-color:#111}`})]})}function d(e){let{correct:t,selected:a}=e;return t||a?(0,s.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[t?(0,s.jsx)(o.Z,{color:"#0070f3"}):(0,s.jsx)(r,{color:"#e00"}),(0,s.jsx)(i(),{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11{display:inline-block;line-height:1;vertical-align:middle;margin-left:.25rem}"})]}):null}function u(e){let{answer:t,correctAnswer:a}=e;return(0,s.jsxs)(s.Fragment,{children:[void 0!==t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{correct:t===a,selected:!0})," "]}),void 0===t?(0,s.jsxs)(s.Fragment,{children:["The correct answer is: ",(0,s.jsx)("strong",{className:"jsx-df362a97111b04e9",children:a})]}):t===a?(0,s.jsxs)("span",{className:"jsx-df362a97111b04e9 correct-message",children:[(0,s.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Correct."})," Good job!"]}):(0,s.jsxs)("span",{className:"jsx-df362a97111b04e9 incorrect-message",children:[(0,s.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Incorrect,"})," but nice try!"]}),(0,s.jsx)(i(),{id:"df362a97111b04e9",children:".correct-message.jsx-df362a97111b04e9{color:#0070f3}.incorrect-message.jsx-df362a97111b04e9{color:#e00}"})]})}var g=function(e){let{meta:t,answers:a,correctAnswer:n,children:r}=e,[o,g]=(0,c.a)(t);return(0,s.jsxs)(p,{children:[r,a.map(e=>(0,s.jsxs)(m,{onChange:e=>g({type:"answer",answer:e.target.value}),readOnly:o.submitted,selected:e===o.answer,value:e,children:[e," ",o.submitted?(0,s.jsx)(d,{correct:e===n,selected:e===o.answer}):null]},e)),(0,s.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[o.submitted?(0,s.jsx)(u,{answer:o.answer,correctAnswer:n}):(0,s.jsx)(l.Z,{color:"#252525",invert:!0,onClick(){g({type:"submit"}),o.answer===n&&g({type:"check"})},shadowColor:"rgba(0, 0, 0, 0.2)",children:"Submit"}),(0,s.jsx)(i(),{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58{margin-top:2rem}"})]})]})}},91630:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l},meta:function(){return r}}),a(52983);var s=a(44993),n=a(24039);a(15348);var i=a(67277);let r={title:"Assets, Metadata, and CSS",courseId:"basics",lessonId:"assets-metadata-css",stepId:"assets",subtitle:"Assets"},o={meta:r},c=e=>{let{children:t}=e;return(0,s.kt)(n.Z,{meta:r},t)};function l(e){let{components:t,...a}=e;return(0,s.kt)(c,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Next.js can serve ",(0,s.kt)("strong",{parentName:"p"},"static assets"),", like images, under ",(0,s.kt)("strong",{parentName:"p"},"the top-level ",(0,s.kt)("a",Object.assign({parentName:"strong"},{href:"/docs/basic-features/static-file-serving"}),(0,s.kt)("inlineCode",{parentName:"a"},"public")," directory")),". Files inside ",(0,s.kt)("inlineCode",{parentName:"p"},"public")," can be referenced from the root of the application similar to ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"/docs/basic-features/pages"}),(0,s.kt)("inlineCode",{parentName:"a"},"pages")),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"public")," directory is also useful for ",(0,s.kt)("inlineCode",{parentName:"p"},"robots.txt"),", Google Site Verification, and any other static assets. Check out the documentation for ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"/docs/basic-features/static-file-serving"}),"Static File Serving")," to learn more."),(0,s.kt)("h3",null,"Download Your Profile Picture"),(0,s.kt)("p",null,"First, let's retrieve your profile picture."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Download")," your profile picture in ",(0,s.kt)("inlineCode",{parentName:"li"},".jpg")," format (or ",(0,s.kt)("a",Object.assign({parentName:"li"},{href:"https://github.com/vercel/next-learn/blob/master/basics/basics-final/public/images/profile.jpg"}),"use this file"),")."),(0,s.kt)("li",{parentName:"ul"},"Create an ",(0,s.kt)("inlineCode",{parentName:"li"},"images")," directory inside of the ",(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/basic-features/static-file-serving"}),(0,s.kt)("inlineCode",{parentName:"a"},"public")," directory"),"."),(0,s.kt)("li",{parentName:"ul"},"Save the picture as ",(0,s.kt)("inlineCode",{parentName:"li"},"profile.jpg")," in the ",(0,s.kt)("inlineCode",{parentName:"li"},"public/images")," directory."),(0,s.kt)("li",{parentName:"ul"},"The image size can be around 400px by 400px."),(0,s.kt)("li",{parentName:"ul"},"You may remove the unused SVG logo file directly under the ",(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/basic-features/static-file-serving"}),(0,s.kt)("inlineCode",{parentName:"a"},"public")," directory"),".")),(0,s.kt)("h3",null,"Unoptimized Image"),(0,s.kt)("p",null,"With regular HTML, you would add your profile picture as follows:"),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"/images/profile.jpg",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"alt"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"Your Name",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),`
`)),(0,s.kt)("p",null,"However, this means you have to manually handle:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Ensuring your image is responsive on different screen sizes"),(0,s.kt)("li",{parentName:"ul"},"Optimizing your images with a third-party tool or library"),(0,s.kt)("li",{parentName:"ul"},"Only loading images when they enter the viewport")),(0,s.kt)("p",null,"And more. Instead, Next.js provides an ",(0,s.kt)("inlineCode",{parentName:"p"},"Image")," component out of the box to handle this for you."),(0,s.kt)("h3",null,"Image Component and Image Optimization"),(0,s.kt)("p",null,(0,s.kt)("a",Object.assign({parentName:"p"},{href:"/docs/api-reference/next/image"}),(0,s.kt)("inlineCode",{parentName:"a"},"next/image"))," is an extension of the HTML ",(0,s.kt)("inlineCode",{parentName:"p"},"<img>")," element, evolved for the modern web."),(0,s.kt)("p",null,"Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp"}),"WebP")," when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats."),(0,s.kt)("p",null,"Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized."),(0,s.kt)("h3",null,"Using the Image Component"),(0,s.kt)("p",null,"Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images."),(0,s.kt)("p",null,"Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport."),(0,s.kt)("p",null,"Images are always rendered in such a way as to avoid ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"https://web.dev/cls/"}),"Cumulative Layout Shift"),", a ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"https://web.dev/vitals/#core-web-vitals"}),"Core Web Vital")," that Google is going to ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html"}),"use in search ranking"),"."),(0,s.kt)("p",null,"Here's an example using ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"/docs/api-reference/next/image"}),(0,s.kt)("inlineCode",{parentName:"a"},"next/image"))," to display our profile picture. The ",(0,s.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"width")," props should be the desired rendering size, with an aspect ratio identical to the source image."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:"),' We\'ll use this component later in "Polishing Layout", no need to copy it yet.'),(0,s.kt)("pre",Object.assign({},{className:"language-jsx"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"import")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token imports"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token maybe-class-name"}),"Image"))," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"from")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'next/image'"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),`

`,(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token function-variable function"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token maybe-class-name"}),"YourComponent"))," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token arrow operator"}),"=>")," ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),`
  `,(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Image")),`
    `,(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"/images/profile.jpg",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token comment"}),"// Route of the image file"),`
    `,(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"height"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token number"}),"144"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token comment"}),"// Desired size with correct aspect ratio"),`
    `,(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"width"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token number"}),"144"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token comment"}),"// Desired size with correct aspect ratio"),`
    `,(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"alt"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"Your Name",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),`
  `,(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),`
`,(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),`
`)),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To learn more about Automatic Image Optimization, check out the ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"/docs/basic-features/image-optimization"}),"documentation"),"."),(0,s.kt)("p",{parentName:"blockquote"},"To learn more about the ",(0,s.kt)("inlineCode",{parentName:"p"},"Image")," component, check out the ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"/docs/api-reference/next/image"}),"API reference for ",(0,s.kt)("inlineCode",{parentName:"a"},"next/image")),".")),(0,s.kt)(i.Z,{meta:r,answers:["Uploading & storing images","Resizing & optimizing images","Cropping & color correcting images"],correctAnswer:"Resizing & optimizing images",mdxType:"AnswerBox"},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Quick Review"),": What does ",(0,s.kt)("inlineCode",{parentName:"p"},"next/image")," simplify for you?")))}l.isMDXComponent=!0}},function(e){e.O(0,[8163,4704,4221,1324,392,8244,5603,9774,2888,179],function(){return e(e.s=5295)}),_N_E=e.O()}]);