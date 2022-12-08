(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7122],{95606:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/create-nextjs-app",function(){return a(25502)}])},25502:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l},meta:function(){return r}}),a(52983);var s=a(44993),n=a(24039);let r={title:"Create a Next.js App",courseId:"basics",lessonId:"create-nextjs-app"},i={meta:r},o=e=>{let{children:t}=e;return(0,s.kt)(n.Z,{meta:r},t)};function l(e){let{components:t,...a}=e;return(0,s.kt)(o,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To build a complete web application with React from scratch, there are many important details you need to consider:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel."),(0,s.kt)("li",{parentName:"ul"},"You need to do production optimizations such as code splitting."),(0,s.kt)("li",{parentName:"ul"},"You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering."),(0,s.kt)("li",{parentName:"ul"},"You might have to write some server-side code to connect your React app to your data store.")),(0,s.kt)("p",null,"A ",(0,s.kt)("em",{parentName:"p"},"framework"),` can solve these problems. But such a framework must have the right level of abstraction — otherwise it won’t be very useful. It also needs to have great "Developer Experience", ensuring you and your team have an amazing experience while writing code.`),(0,s.kt)("h3",null,"Next.js: The React Framework"),(0,s.kt)("p",null,"Enter ",(0,s.kt)("strong",{parentName:"p"},"Next.js"),", the React Framework. Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"https://blog.codinghorror.com/falling-into-the-pit-of-success/"}),"pit of success")," when building React applications."),(0,s.kt)("p",null,"Next.js aims to have best-in-class developer experience and many built-in features, such as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"An intuitive ",(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/basic-features/pages"}),"page-based")," routing system (with support for ",(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/routing/dynamic-routes"}),"dynamic routes"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/basic-features/pages#pre-rendering"}),"Pre-rendering"),", both ",(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/basic-features/pages#static-generation-recommended"}),"static generation")," (SSG) and ",(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/basic-features/pages#server-side-rendering"}),"server-side rendering")," (SSR) are supported on a per-page basis"),(0,s.kt)("li",{parentName:"ul"},"Automatic code splitting for faster page loads"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/routing/introduction#linking-between-pages"}),"Client-side routing")," with optimized prefetching"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/basic-features/built-in-css-support"}),"Built-in CSS")," and ",(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/basic-features/built-in-css-support#sass-support"}),"Sass support"),", and support for any ",(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/basic-features/built-in-css-support#css-in-js"}),"CSS-in-JS")," library"),(0,s.kt)("li",{parentName:"ul"},"Development environment with ",(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/basic-features/fast-refresh"}),"Fast Refresh")," support"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",Object.assign({parentName:"li"},{href:"/docs/api-routes/introduction"}),"API routes")," to build API endpoints with Serverless Functions"),(0,s.kt)("li",{parentName:"ul"},"Fully extendable")),(0,s.kt)("p",null,"Next.js is used in tens of thousands of production-facing websites and web applications, including many of the world's largest brands."),(0,s.kt)("h3",null,"About This Tutorial"),(0,s.kt)("p",null,"This free interactive course will guide you through how to get started with Next.js."),(0,s.kt)("p",null,`In this tutorial, you’ll learn Next.js basics by creating a very simple `,(0,s.kt)("strong",{parentName:"p"},"blog app"),`. Here’s an example of the final result:`),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",Object.assign({parentName:"strong"},{href:"https://next-learn-starter.vercel.app/"}),"https://next-learn-starter.vercel.app"))," (",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/vercel/next-learn/tree/master/basics/demo"}),"source"),")"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},`This tutorial assumes basic knowledge of JavaScript and React. If you’ve never written React code, you should go through `,(0,s.kt)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/tutorial/tutorial.html"}),"the official React tutorial")," first."),(0,s.kt)("p",{parentName:"blockquote"},`If you’re looking for documentation instead, `,(0,s.kt)("a",Object.assign({parentName:"p"},{href:"/docs/getting-started"}),"visit the Next.js documentation"),".")),(0,s.kt)("h3",null,"Join the Conversation"),(0,s.kt)("p",null,"If you have questions about anything related to Next.js or this course, you're welcome to ask our community on ",(0,s.kt)("a",Object.assign({parentName:"p"},{href:"https://discord.gg/Q3AsD4efFC"}),"Discord"),"."),(0,s.kt)("p",null,`Let’s get started!`))}l.isMDXComponent=!0}},function(e){e.O(0,[8163,4704,4221,392,8244,5603,9774,2888,179],function(){return e(e.s=95606)}),_N_E=e.O()}]);