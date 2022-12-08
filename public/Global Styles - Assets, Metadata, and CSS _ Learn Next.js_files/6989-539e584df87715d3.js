(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6989],{56878:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,i;var n,{src:o,sizes:p,unoptimized:w=!1,priority:b=!1,loading:y,className:E,quality:S,width:C,height:_,fill:j,style:z,onLoad:x,onLoadingComplete:$,placeholder:k="empty",blurDataURL:O,layout:R,objectFit:I,objectPosition:P,lazyBoundary:A,lazyRoot:N}=e,L=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let M=l.useContext(c.ImageConfigContext),B=l.useMemo(()=>{let e=g||M||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[M]),D=L,W=D.loader||f.default;if(delete D.loader,"__next_img_default"in W){if("custom"===B.loader)throw Error(`Image with src "${o}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let F=W;W=e=>{let{config:t}=e,i=a(e,["config"]);return F(i)}}if(R){"fill"===R&&(j=!0);let T={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];T&&(z=r({},z,T));let q={responsive:"100vw",fill:"100vw"}[R];q&&!p&&(p=q)}let G="",Z=m(C),U=m(_);if("object"==typeof(n=o)&&(h(n)||void 0!==n.src)){let V=h(o)?o.default:o;if(!V.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(V)}`);if(!V.height||!V.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(V)}`);if(t=V.blurWidth,i=V.blurHeight,O=O||V.blurDataURL,G=V.src,!j){if(Z||U){if(Z&&!U){let J=Z/V.width;U=Math.round(V.height*J)}else if(!Z&&U){let H=U/V.height;Z=Math.round(V.width*H)}}else Z=V.width,U=V.height}}let K=!b&&("lazy"===y||void 0===y);((o="string"==typeof o?o:G).startsWith("data:")||o.startsWith("blob:"))&&(w=!0,K=!1),B.unoptimized&&(w=!0);let[Q,X]=l.useState(!1),[Y,ee]=l.useState(!1),et=m(S),ei=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:P}:{},Y?{}:{color:"transparent"},z),er="blur"===k&&O&&!Q?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:`url("data:image/svg+xml;charset=utf-8,${u.getImageBlurSvg({widthInt:Z,heightInt:U,blurWidth:t,blurHeight:i,blurDataURL:O})}")`}:{},en=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:a,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=o.exec(i);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:n.filter(e=>e>=r[0]*s),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let u=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:u,kind:"x"}}(t,n,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,r)=>`${l({config:t,src:i,quality:o,width:e})} ${"w"===u?e:r+1}${u}`).join(", "),src:l({config:t,src:i,quality:o,width:s[d]})}}({config:B,src:o,unoptimized:w,width:Z,quality:et,sizes:p,loader:W}),eo=o,ea={imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:D.crossOrigin},el=l.useRef(x);l.useEffect(()=>{el.current=x},[x]);let es=l.useRef($);l.useEffect(()=>{es.current=$},[$]);let eu=r({isLazy:K,imgAttributes:en,heightInt:U,widthInt:Z,qualityInt:et,className:E,imgStyle:ei,blurStyle:er,loading:y,config:B,fill:j,unoptimized:w,placeholder:k,loader:W,srcString:eo,onLoadRef:el,onLoadingCompleteRef:es,setBlurComplete:X,setShowAltText:ee},D);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},eu)),b?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},ea))):null)};var r=i(60834).Z,n=i(31997).Z,o=i(80792).Z,a=i(74385).Z,l=o(i(52983)),s=n(i(29163)),u=i(87686),d=i(19243),c=i(47529);i(69447);var f=n(i(12402));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[24,48,64,72,128,192,300],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,n,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:i,widthInt:n,qualityInt:o,className:s,imgStyle:u,blurStyle:d,isLazy:c,fill:f,placeholder:g,loading:h,srcString:m,config:v,unoptimized:w,loader:b,onLoadRef:y,onLoadingCompleteRef:E,setBlurComplete:S,setShowAltText:C,onLoad:_,onError:j}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=c?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,t,{width:n,height:i,decoding:"async","data-nimg":f?"fill":"1",className:s,loading:h,style:r({},u,d),ref:l.useCallback(e=>{e&&(j&&(e.src=e.src),e.complete&&p(e,m,g,y,E,S,w))},[m,g,y,E,S,j,w]),onLoad(e){let t=e.currentTarget;p(t,m,g,y,E,S,w)},onError(e){C(!0),"blur"===g&&S(!0),j&&j(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},87686:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o}=e,a=r||t,l=n||i,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?`%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ${a} ${l}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${r&&n?"1":"20"}'/%3E${s}%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='${o}'/%3E%3C/svg%3E`:`%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='${o}'/%3E%3C/svg%3E`}},12402:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:`${t.path}?url=${encodeURIComponent(i)}&w=${r}&q=${n||75}`}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},16989:function(e,t,i){e.exports=i(56878)}}]);