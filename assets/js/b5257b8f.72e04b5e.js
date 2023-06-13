"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4727],{88001:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(67294);function o(e){var t=e.children;return i.createElement("p",{className:"hide"},t)}},26272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=n(88001),s=["components"],p={id:"probabilistic-rev-sharing",title:"Probabilistic Revenue Sharing",sidebar_label:"Probabilistic revenue sharing"},h=void 0,l={unversionedId:"probabilistic-rev-sharing",id:"probabilistic-rev-sharing",title:"Probabilistic Revenue Sharing",description:"More often than not, high quality content involves more than one person. So, how do you share a portion of your revenue if you only have a single link tag with a payment pointer?",source:"@site/docs/probabilistic-rev-sharing.md",sourceDirName:".",slug:"/probabilistic-rev-sharing",permalink:"/docs/probabilistic-rev-sharing",draft:!1,editUrl:"https://github.com/WICG/webmonetization/tree/main/docs/probabilistic-rev-sharing.md",tags:[],version:"current",frontMatter:{id:"probabilistic-rev-sharing",title:"Probabilistic Revenue Sharing",sidebar_label:"Probabilistic revenue sharing"},sidebar:"docs",previous:{title:"Micropayment counter",permalink:"/docs/counter"},next:{title:"Digital wallets and payment pointers",permalink:"/docs/ilp-wallets"}},c={},u=[{value:"A basic example",id:"a-basic-example",level:2},{value:"Code",id:"code",level:3},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Interactive example",id:"interactive-example",level:3},{value:"Code",id:"code-1",level:3}],d={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"More often than not, high quality content involves more than one person. So, how do you share a portion of your revenue if you only have a single ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," tag with a payment pointer?"),(0,a.kt)("p",null,"One way is through probabilistic revenue sharing (revshare). In Web Monetization, probabilistic revenue sharing works by randomly choosing from a list of predefined payment pointers each time a web monetized visitor loads your page. The visitor pays to the chosen pointer until the page is reloaded or closed."),(0,a.kt)("p",null,"The chance of a payment pointer being chosen is based on its assigned weight. For example, if Alice's payment pointer has a weight of 50, the pointer has a 50% chance of being chosen. The laws of probability state that Alice\u2019s share will approach 50% of the page\u2019s total revenue as more users visit the site."),(0,a.kt)(r.Z,{mdxType:"Hidden"},":::info Want to try probabilistic revenue sharing right away? Check out our [Probabilistic Revshare Generator](/prob-revshare) :::"),(0,a.kt)("h2",{id:"a-basic-example"},"A basic example"),(0,a.kt)("p",null,"This example shows how to define a list of payment pointers and assign each pointer a weight. The easiest way to establish weight is by assigning values that add to 100."),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<head>\n  <script>\n    // Define your revenue share here.\n    // If these weights add to 100 then they represent the percent each pointer gets.\n    const pointers = {\n      '$alice.example': 50,\n      '$bob.example': 40,\n      '$connie.example': 9.5,\n      '$dave.example': 0.5\n    }\n\n    function pickPointer () {\n      const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)\n      let choice = Math.random() * sum\n\n      for (const pointer in pointers) {\n        const weight = pointers[pointer]\n        if ((choice -= weight) <= 0) {\n          return pointer\n        }\n      }\n    }\n\n    window.addEventListener('load', () => {\n      const monetizationTag = document.createElement('link')\n      monetizationTag.rel = 'monetization'\n      monetizationTag.href = pickPointer()\n\n      document.head.appendChild(monetizationTag)\n    })\n  <\/script>\n</head>\n")),(0,a.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"First, we define the payment pointers and assign each one a weight. If the weights total 100, then they represent the percentage each pointer gets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const pointers = {\n  '$alice.example': 50,\n  '$bob.example': 40,\n  '$connie.example': 9.5,\n  '$dave.example': 0.5\n  }\n")),(0,a.kt)("p",null,"Next, we define how a payment pointer is chosen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function pickPointer () {\n  const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)\n  let choice = Math.random() * sum\n\n  for (const pointer in pointers) {\n    const weight = pointers[pointer]\n    if ((choice -= weight) <= 0) {\n      return pointer\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Finally, we add the code that dynamically inserts the randomly chosen payment pointer into the page on each load/refresh."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('load', () => {\n  const monetizationTag = document.createElement('link')\n  monetizationTag.rel = 'monetization'\n  monetizationTag.href = pickPointer()\n\n  document.head.appendChild(monetizationTag)\n})\n")),(0,a.kt)("h3",{id:"interactive-example"},"Interactive example"),(0,a.kt)("p",null,"This example shows how the random choices will approach the correct percentages over enough tries. You can customize the number of times to randomly choose a pointer and it will show you the results. The example doesn't require you to have Web Monetization enabled in your browser. No real payments are occurring."),(0,a.kt)("p",null,"If you see the source files instead of the example, click ",(0,a.kt)("strong",{parentName:"p"},"View App")," in the bottom right."),(0,a.kt)("div",{class:"glitch-embed-wrap",style:{height:"420px",width:"100%"}},(0,a.kt)("iframe",{src:"https://glitch.com/embed/#!/embed/wm2-probablistic-revenue-share?path=README.md&previewSize=100",title:"probabalistic-revenue-share-experiment on Glitch",allow:"geolocation; microphone; camera; midi; vr; encrypted-media",style:{height:"100%",width:"100%",border:"0"}})),(0,a.kt)(r.Z,{mdxType:"Hidden"},"## Advanced topic and future ideas",(0,a.kt)("p",null,"Imagine you're embedding an image into an article. To use the image, the photographer has asked for a percentage of your earnings, so you add the photographer to your revshare."),(0,a.kt)("p",null,"But what if the photographer is also sharing their revenue? You'd have to include everyone in the photographer's revshare in your revshare, but with a scaled-down percentage. Plus, you'd have to update your revshare every time the photographer's changes. That's a huge pain!"),(0,a.kt)("p",null,"To make the process smoother, we can put probabilistic revshare into your payment pointer itself, instead of your page's JavaScript. The idea is similar to the vanity payment pointers discussed in ",(0,a.kt)("a",{parentName:"p",href:"https://www.ctrl.blog/entry/ilp-payment-pointer-redirects.html"},"an article by ctrl.blog"),". A vanity payment pointer is a redirect to your actual payment pointer. If we want to put in probabilistic revshare, we need to make that redirect random instead of redirecting to the same pointer each time."),(0,a.kt)("p",null,"You can pick several payment pointers and a chance for each of them to be chosen, just like in the example in the previous section. The chance that you redirect to each pointer is equal to that pointer\u2019s expected share of the revenue."),(0,a.kt)("p",null,"Here\u2019s an example of how you can implement this in an Express.js server. It uses the same code as our previous snippet to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"pickPointer")," function. We plan on offering a hosted tool that lets you manage revenue sharing payment pointers without writing code in the near future!"),(0,a.kt)("h3",{id:"code-1"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Define your revenue share here.\n// If these weights add to 100 then they represent the percent each pointer gets.\nconst pointers = {\n  '$alice.example': 50,\n  '$bob.example': 40,\n  '$connie.example': 9.5,\n  '$dave.example': 0.5\n}\n\n// this is the same `pickPointer()` function implemented in the previous snippet\nfunction pickPointer () {\n  const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)\n  let choice = Math.random() * sum\n\n  for (const pointer in pointers) {\n    const weight = pointers[pointer]\n    if ((choice -= weight) <= 0) {\n      return pointer\n    }\n  }\n}\n\napp.use((req, res, next) => {\n  // is this request meant for Web Monetization?\n  if (req.header('accept').includes('application/spsp4+json')) {\n    // choose our random payment pointer\n    const pointer = pickPointer()\n\n    // turn the payment pointer into a URL in accordance with the payment pointer spec\n    // https://paymentpointers.org/\n    const asUrl = new URL(pointer.startsWith('$') ? 'https://' + pointer.substring(1) : pointer)\n    asUrl.pathname = asUrl.pathname === '/' ? '/.well-known/pay' : asUrl.pathname\n\n    // redirect to our chosen payment pointer so they get paid\n    res.redirect(302, asUrl.href)\n  } else {\n    // if the request is not for Web Monetization, do nothing\n    next()\n  }\n})\n")),(0,a.kt)("p",null,"With this scheme, your payment pointer contains all the revshare logic and you don't need to repeat the information on every page. The scheme also works recursively. One of the pointers that a vanity pointer randomly chooses could go on to make a random choice of its own. Your blog could choose the photographer's payment pointer 1% of the time, then 10% of the time the photographer's pointer chooses the photo editor's pointer."),(0,a.kt)("p",null,"This lets you make some revsharing schemes that would be wildly impractical with existing schemes. By taking the pain out of revenue sharing, we can help everyone get compensated fairly!"),(0,a.kt)("p",null,"If you want to get started with probabilistic revenue sharing today, try out our ",(0,a.kt)("a",{parentName:"p",href:"/prob-revshare"},"Probabilistic Revshare Generator"),"!")))}g.isMDXComponent=!0}}]);