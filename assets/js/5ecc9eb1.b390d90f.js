"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[992],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),d=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=d(t.components);return o.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(h,r(r({ref:e},p),{},{components:n})):o.createElement(h,r({ref:e},p))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2984:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],s={id:"start-stop",title:"Start/Stop Monetization",sidebar_label:"Start/stop monetization"},l={unversionedId:"start-stop",id:"start-stop",isDocsHomePage:!1,title:"Start/Stop Monetization",description:"Sometimes you don't want your entire site to be web monetized. The easiest way to partially monetize your site is to just include the Web Monetization meta tag on specific pages. But if you want to turn Web Monetization on and off dynamically, you can do that too!",source:"@site/docs/start-stop.md",sourceDirName:".",slug:"/start-stop",permalink:"/docs/start-stop",editUrl:"https://github.com/WICG/webmonetization/tree/main/docs/start-stop.md",version:"current",sidebar_label:"Start/stop monetization",frontMatter:{id:"start-stop",title:"Start/Stop Monetization",sidebar_label:"Start/stop monetization"},sidebar:"docs",previous:{title:"Probabilistic Revenue Sharing",permalink:"/docs/probabilistic-rev-sharing"},next:{title:"Receipt Verifier Service",permalink:"/docs/receipt-verifier"}},d=[{value:"Code",id:"code",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Interactive example",id:"interactive-example",children:[]}],p={toc:d};function c(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes you don't want your entire site to be web monetized. The easiest way to partially monetize your site is to just include the Web Monetization ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," tag on specific pages. But if you want to turn Web Monetization on and off dynamically, you can do that too!"),(0,a.kt)("p",null,"This example shows how to turn Web Monetization on and off dynamically in response to a visitor clicking a button."),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<head>\n  \x3c!-- the \"content\" should be set to your own payment pointer --\x3e\n  <meta name=\"monetization\" content=\"$wallet.example.com/alice\">\n\n  <script>\n    function showMonetizationState () {\n      document.getElementById('state').innerText = document.monetization.state\n    }\n\n    if (document.monetization) {\n      document.monetization.addEventListener('monetizationstop', showMonetizationState)\n      document.monetization.addEventListener('monetizationpending', showMonetizationState)\n      document.monetization.addEventListener('monetizationstart', showMonetizationState)\n    }\n\n    window.addEventListener('load', () => {\n      if (!document.monetization) {\n        document.getElementById('state').innerText = 'Not enabled in browser'\n      } else {\n        showMonetizationState()\n      }\n\n      const stopButton = document.getElementById('stop-button')\n      const startButton = document.getElementById('start-button')\n      const monetizationTag = document.querySelector('meta[name=\"monetization\"]')\n\n      stopButton.addEventListener('click', () => {\n        monetizationTag.remove()\n\n        stopButton.disabled = true\n        startButton.disabled = false\n      })\n\n      startButton.addEventListener('click', () => {\n        document.head.appendChild(monetizationTag)\n\n        stopButton.disabled = false\n        startButton.disabled = true\n      })\n    })\n  <\/script>\n</head>\n\n<body>\n  <div id=\"loading\">\n    Current Monetization State: <span id=\"state\"></span>\n  </div>\n\n  <button id=\"stop-button\">Stop Monetization</button>\n  <button id=\"start-button\" disabled>Start Monetization</button>\n</body>\n")),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,"To display the current monetization state on the page, we bind the\nthree monetization state events: ",(0,a.kt)("inlineCode",{parentName:"p"},"monetizationstop"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"monetizationpending"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"monetizationstart"),". Each time one of them fires we display the current monetization state."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This isn't required to start and stop monetization but it helps visualize it on\nthe example page.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function showMonetizationState () {\n  document.getElementById('state').innerText = document.monetization.state\n}\n\nif (document.monetization) {\n  document.monetization.addEventListener('monetizationstop', showMonetizationState)\n  document.monetization.addEventListener('monetizationpending', showMonetizationState)\n  document.monetization.addEventListener('monetizationstart', showMonetizationState)\n}\n")),(0,a.kt)("p",null,"When the page loads we set an initial state. If the visitor doesn't have Web Monetization (",(0,a.kt)("inlineCode",{parentName:"p"},"document.monetization")," is not defined), we say ",(0,a.kt)("em",{parentName:"p"},"Not enabled in browser.")," Otherwise, we display the current monetization state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('load', () => {\n  if (!document.monetization) {\n    document.getElementById('state').innerText = 'Not enabled in browser'\n  } else {\n    showMonetizationState()\n  }\n")),(0,a.kt)("p",null,"We need to grab the meta tag's element object in order to add and remove it. The query selector, ",(0,a.kt)("inlineCode",{parentName:"p"},'meta[name="monetization"]'),", selects a ",(0,a.kt)("inlineCode",{parentName:"p"},"<meta>")," tag with a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attribute of ",(0,a.kt)("inlineCode",{parentName:"p"},"monetization")," (the Web Monetization meta tag)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const monetizationTag = document.querySelector('meta[name=\"monetization\"]')\n")),(0,a.kt)("p",null,"When the ",(0,a.kt)("em",{parentName:"p"},"Stop")," button is clicked, we call ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()")," on the monetization tag element. Your Web Monetization extension will pick up this change and stop monetization right away."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"stopButton.addEventListener('click', () => {\n  monetizationTag.remove()\n\n  stopButton.disabled = true\n  startButton.disabled = false\n})\n")),(0,a.kt)("p",null,"When the ",(0,a.kt)("em",{parentName:"p"},"Start")," button is clicked, we append the monetization tag to the\ndocument's head. Your Web Monetization extension will pick up this change and begin initializing Web Monetization."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"startButton.addEventListener('click', () => {\n  document.head.appendChild(monetizationTag)\n\n  stopButton.disabled = false\n  startButton.disabled = true\n})\n")),(0,a.kt)("h2",{id:"interactive-example"},"Interactive example"),(0,a.kt)("p",null,"This example simulates turning Web Monetization on and off dynamically in response to a visitor clicking a button."),(0,a.kt)("p",null,"A web monetized visitor can see the monetization state and control it with the buttons. The state changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"stopped")," when ",(0,a.kt)("em",{parentName:"p"},"Stop Monetization")," is clicked. When ",(0,a.kt)("em",{parentName:"p"},"Start Monetization")," is clicked, the state changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"pending"),", then to ",(0,a.kt)("inlineCode",{parentName:"p"},"started")," after Web Monetization initializes."),(0,a.kt)("p",null,'A non-web monetized visitor will see "Not enabled in browser" as the state, regardless of which button is clicked.'),(0,a.kt)("p",null,"The example doesn't require you to have Web Monetization enabled in your browser. No real payments are occurring."),(0,a.kt)("p",null,"Click the ",(0,a.kt)("strong",{parentName:"p"},"View as Web Monetized/non-Web Monetized visitor")," button to toggle your monetization state."),(0,a.kt)("p",null,"If you see the source files instead of the example, click ",(0,a.kt)("strong",{parentName:"p"},"View App")," in the bottom right."),(0,a.kt)("div",{class:"glitch-embed-wrap",style:{height:"420px",width:"100%"}},(0,a.kt)("iframe",{src:"https://glitch.com/embed/#!/embed/wm-start-stop?path=README.md&previewSize=100",title:"wm-start-stop on Glitch",allow:"geolocation; microphone; camera; midi; vr; encrypted-media",style:{height:"100%",width:"100%",border:"0"}})))}c.isMDXComponent=!0}}]);