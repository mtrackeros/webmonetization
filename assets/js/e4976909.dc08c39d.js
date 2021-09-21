"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[836],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(y,i(i({ref:e},u),{},{components:n})):r.createElement(y,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3305:function(t,e,n){n.r(e),n.d(e,{default:function(){return f},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return g}});var r,a=n(7462),l=n(3366),i=n(7294),o=n(3905),c=["title","titleId"];function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=function(t){var e=t.title,n=t.titleId,a=u(t,c);return i.createElement("svg",p({width:136,height:34,viewBox:"0 0 136 34",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),e?i.createElement("title",{id:n},e):null,r||(r=i.createElement("path",{d:"M35.837 18.862a18.08 18.08 0 01-2.752 4.426c.765-3 .396-6.875-1.26-10.637-.865-1.966-2.013-3.735-3.345-5.177 2.085-1.682 4.254-2.23 5.931-1.457 1.075.496 1.904 1.512 2.397 2.937.935 2.7.572 6.404-.97 9.908zm-17.47 0c-1.542-3.504-1.905-7.208-.97-9.908.494-1.425 1.322-2.44 2.397-2.937 1.676-.774 3.846-.225 5.93 1.457-1.332 1.442-2.479 3.21-3.344 5.176-1.656 3.763-2.025 7.638-1.26 10.638a18.09 18.09 0 01-2.753-4.426zm10.298 7.592a3.82 3.82 0 01-1.562.346 3.82 3.82 0 01-1.564-.346c-3.229-1.49-3.882-7.463-1.426-13.043.779-1.77 1.802-3.357 2.987-4.643 1.186 1.286 2.213 2.873 2.992 4.644 2.456 5.579 1.803 11.552-1.426 13.042zM33.05 3.791c-1.913-.08-3.999.738-5.947 2.368-1.949-1.63-4.034-2.449-5.948-2.37a10.208 10.208 0 015.946-1.898c2.199 0 4.26.693 5.95 1.9zm5.555 4.57l-.001-.005-.004-.01-.003-.01-.007-.019C36.974 3.341 32.363 0 27.1 0 21.826 0 17.203 3.358 15.6 8.356c-.002.008-.002.017-.005.025-1.068 3.134-.681 7.332 1.04 11.243 2.356 5.351 6.63 9.068 10.414 9.068h.108c3.785 0 8.06-3.717 10.414-9.068 1.725-3.919 2.11-8.126 1.035-11.262zM30.34 31.636a11.144 11.144 0 01-3.151.473h-.15c-1.035 0-2.102-.16-3.172-.479a.947.947 0 00-.54 1.813c1.246.37 2.494.558 3.712.558h.15c1.209 0 2.45-.186 3.687-.55a.945.945 0 10-.536-1.815zm88.133-12.265v-4.74c-.572-.893-1.863-1.613-3.08-1.613-2.086 0-3.403 1.663-3.403 3.97 0 2.333 1.316 3.995 3.403 3.995 1.217 0 2.508-.72 3.08-1.612zm0 3.378v-1.393c-.92 1.19-2.285 1.935-3.85 1.935-3.055 0-5.315-2.332-5.315-6.303 0-3.87 2.235-6.278 5.315-6.278 1.515 0 2.906.67 3.85 1.96V6.685c0-.135.109-.244.243-.244h2.12a.244.244 0 01.244.244v16.063a.244.244 0 01-.244.244h-2.12a.244.244 0 01-.243-.244zm-14.181 0V6.685c0-.135.11-.244.244-.244h2.119a.244.244 0 01.244.244v16.063a.244.244 0 01-.244.244h-2.12a.244.244 0 01-.243-.244zm-5.115-5.76c0-2.11-1.217-3.97-3.452-3.97-2.211 0-3.453 1.86-3.453 3.97 0 2.134 1.242 3.994 3.453 3.994 2.235 0 3.452-1.86 3.452-3.995zm-9.612 0c0-3.45 2.335-6.279 6.16-6.279 3.824 0 6.159 2.829 6.159 6.278 0 3.425-2.335 6.303-6.16 6.303-3.824 0-6.16-2.878-6.16-6.303zm-4.772 6.005a.244.244 0 01-.244-.245v-7.3c0-1.885-.944-2.43-2.409-2.43-1.341 0-2.484.793-3.08 1.587v8.143a.244.244 0 01-.244.244h-2.12a.244.244 0 01-.244-.244V6.685c0-.135.11-.244.244-.244h2.12a.244.244 0 01.244.244v5.935c.795-.943 2.335-1.911 4.222-1.911 2.584 0 3.875 1.34 3.875 3.797v8.242a.244.244 0 01-.245.244h-2.119zm-13.406-6.005c0-2.333-1.34-3.97-3.402-3.97-1.217 0-2.484.694-3.08 1.587v4.74c.571.893 1.863 1.637 3.08 1.637 2.061 0 3.402-1.662 3.402-3.995zm-6.482 4.342v5.984a.244.244 0 01-.244.244h-2.12a.244.244 0 01-.244-.244V11.251c0-.134.11-.244.245-.244h2.119a.244.244 0 01.244.244v1.394a4.788 4.788 0 013.85-1.936c3.104 0 5.314 2.333 5.314 6.278s-2.21 6.303-5.314 6.303c-1.516 0-2.857-.695-3.85-1.96zm-8.344 1.418v-1.344c-.844.943-2.334 1.886-4.222 1.886-2.583 0-3.874-1.365-3.874-3.797v-8.242c0-.134.109-.244.244-.244h2.12a.244.244 0 01.243.244v7.275c0 1.86.944 2.456 2.434 2.456 1.317 0 2.46-.769 3.055-1.563v-8.168c0-.134.11-.244.245-.244h2.119a.244.244 0 01.244.244v11.497a.244.244 0 01-.244.244h-2.12a.244.244 0 01-.244-.244z",fill:"#49CC68",fillRule:"evenodd"})))},m=["components"],d={id:"ilp-wallets",title:"Digital Wallet and Payment Pointers",sidebar_label:"Digital wallets and payment pointers"},y={unversionedId:"ilp-wallets",id:"ilp-wallets",isDocsHomePage:!1,title:"Digital Wallet and Payment Pointers",description:"You must have an account with a wallet that supports the Interledger Protocol (ILP) to enable Web Monetization on your site.",source:"@site/docs/ilp-wallets.md",sourceDirName:".",slug:"/ilp-wallets",permalink:"/docs/ilp-wallets",editUrl:"https://github.com/WICG/webmonetization/tree/main/docs/ilp-wallets.md",version:"current",sidebar_label:"Digital wallets and payment pointers",frontMatter:{id:"ilp-wallets",title:"Digital Wallet and Payment Pointers",sidebar_label:"Digital wallets and payment pointers"},sidebar:"docs",previous:{title:"Web Monetization Providers (Sending Payments)",permalink:"/docs/sending"},next:{title:"GateHub",permalink:"/docs/gatehub"}},g=[{value:"Digital wallets",id:"digital-wallets",children:[]},{value:"Payment pointers",id:"payment-pointers",children:[]}],h={toc:g};function f(t){var e=t.components,n=(0,l.Z)(t,m);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You must have an account with a wallet that supports the Interledger Protocol (ILP) to enable Web Monetization on your site."),(0,o.kt)("p",null,"Your wallet provider will assign you a payment pointer, which is the public address for your wallet. You'll add your payment pointer as the ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," value in your ",(0,o.kt)("inlineCode",{parentName:"p"},"<meta>")," tag."),(0,o.kt)("h2",{id:"digital-wallets"},"Digital wallets"),(0,o.kt)("p",null,"The following providers offer ILP-enabled wallets."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("center",null,(0,o.kt)(s,{mdxType:"UpholdSvg"}))),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("center",null,(0,o.kt)("img",{src:"data:image/png;base64,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"}))))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Payout currencies")),(0,o.kt)("td",{parentName:"tr",align:"center"},"27 fiat currencies ",(0,o.kt)("br",null)," 34 crypto currencies ",(0,o.kt)("br",null)," ",(0,o.kt)("a",{parentName:"td",href:"https://uphold.com/en/transparency"},"See full list")),(0,o.kt)("td",{parentName:"tr",align:"center"},"XRP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Withdrawal currencies")),(0,o.kt)("td",{parentName:"tr",align:"center"},"USD, EUR, GBP, CAD, PLN, XRP, BTC, ETH, +59 more ",(0,o.kt)("br",null)," ",(0,o.kt)("a",{parentName:"td",href:"https://uphold.com/en/transparency"},"See full list")),(0,o.kt)("td",{parentName:"tr",align:"center"},"XRP, USD, EUR, BTC, ETH")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Bank connection")),(0,o.kt)("td",{parentName:"tr",align:"center"},"ACH, SEPA, Wire, UK FPS"),(0,o.kt)("td",{parentName:"tr",align:"center"},"SEPA, Wire")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Fees")),(0,o.kt)("td",{parentName:"tr",align:"center"},"None"),(0,o.kt)("td",{parentName:"tr",align:"center"},"SEPA: 1.00 EUR < 50,000 EUR",(0,o.kt)("br",null),"Wire: $15 min ($150 max)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Payment pointer prefix")),(0,o.kt)("td",{parentName:"tr",align:"center"},"$ilp.uphold.com/"),(0,o.kt)("td",{parentName:"tr",align:"center"},"$ilp.gatehub.net/")))),(0,o.kt)("h2",{id:"payment-pointers"},"Payment pointers"),(0,o.kt)("p",null,"A payment pointer is a public address to your ILP-enabled wallet. Your wallet provider assigns you a payment pointer during account setup. If you're having trouble finding your payment pointer, check out these instructions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GateHub - ",(0,o.kt)("a",{parentName:"li",href:"/docs/gatehub#find-your-payment-pointer"},"Find your payment pointer")),(0,o.kt)("li",{parentName:"ul"},"Uphold - ",(0,o.kt)("a",{parentName:"li",href:"/docs/uphold#find-your-payment-pointer"},"Find your payment pointer"))))}f.isMDXComponent=!0}}]);