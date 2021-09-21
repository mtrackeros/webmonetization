"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,g=d["".concat(p,".").concat(s)]||d[s]||c[s]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},601:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"getting-started",title:"Quick Start Guide",sidebar_label:"Quick start guide"},p={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Quick Start Guide",description:"This page provides high-level instructions for adding Web Monetization to your",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/WICG/webmonetization/tree/main/docs/getting-started.md",version:"current",sidebar_label:"Quick start guide",frontMatter:{id:"getting-started",title:"Quick Start Guide",sidebar_label:"Quick start guide"},sidebar:"docs",next:{title:"JavaScript API",permalink:"/docs/api"}},u=[{value:"1. Set up a web monetized wallet",id:"1-set-up-a-web-monetized-wallet",children:[]},{value:"2. Get your payment pointer",id:"2-get-your-payment-pointer",children:[{value:"Example payment pointer",id:"example-payment-pointer",children:[]}]},{value:"3. Create your meta tag",id:"3-create-your-meta-tag",children:[{value:"Example meta tag",id:"example-meta-tag",children:[]}]},{value:"4. Add the meta tag to your website",id:"4-add-the-meta-tag-to-your-website",children:[{value:"Example HTML",id:"example-html",children:[]}]}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page provides high-level instructions for adding Web Monetization to your\nwebsite."),(0,o.kt)("p",null,"To monetize your site, you must:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up a web monetized receiver (wallet) for receiving payments."),(0,o.kt)("li",{parentName:"ol"},"Get your wallet's payment pointer."),(0,o.kt)("li",{parentName:"ol"},"Create a special ",(0,o.kt)("inlineCode",{parentName:"li"},"<meta>")," tag that tells ",(0,o.kt)("a",{parentName:"li",href:"/#providers"},"Web Monetization providers"),"\nhow to pay you."),(0,o.kt)("li",{parentName:"ol"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"<meta>")," tag to each page of your website that you want to monetize.")),(0,o.kt)("p",null,"For a more detailed look at web monetizing your site, see the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/explainer#getting-started"},"Web Monetization explainer"),"."),(0,o.kt)("h2",{id:"1-set-up-a-web-monetized-wallet"},"1. Set up a web monetized wallet"),(0,o.kt)("p",null,"Choose a ",(0,o.kt)("a",{parentName:"p",href:"/docs/ilp-wallets"},"wallet that supports Web Monetization")," and set up an account.\nThe wallet must support the Interledger Protocol (ILP)."),(0,o.kt)("h2",{id:"2-get-your-payment-pointer"},"2. Get your payment pointer"),(0,o.kt)("p",null,"Find your payment pointer within your wallet and copy it."),(0,o.kt)("h3",{id:"example-payment-pointer"},"Example payment pointer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"$wallet.example.com/alice\n")),(0,o.kt)("h2",{id:"3-create-your-meta-tag"},"3. Create your meta tag"),(0,o.kt)("p",null,"Create your ",(0,o.kt)("inlineCode",{parentName:"p"},"<meta>")," tag by using the ",(0,o.kt)("a",{parentName:"p",href:"/meta-tag"},"Meta Tag Generator")," or by\nfollowing the example below."),(0,o.kt)("p",null,"The tag's ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," is always ",(0,o.kt)("inlineCode",{parentName:"p"},"monetization"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," is your payment\npointer."),(0,o.kt)("h3",{id:"example-meta-tag"},"Example meta tag"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<meta\n  name="monetization"\n  content="$wallet.example.com/alice">\n')),(0,o.kt)("h2",{id:"4-add-the-meta-tag-to-your-website"},"4. Add the meta tag to your website"),(0,o.kt)("p",null,"Copy your ",(0,o.kt)("inlineCode",{parentName:"p"},"<meta>")," tag and add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," section of each page you want\nto monetize."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Web Monetization only works on secure pages served over HTTPS.")),(0,o.kt)("h3",{id:"example-html"},"Example HTML"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html>\n  <head>\n    <title>Web Monetized Site</title>\n    <meta\n      name="monetization"\n      content="$wallet.example.com/alice">\n  </head>\n</html>\n')),(0,o.kt)("p",null,"Congratulations! Your website is now web monetized."))}c.isMDXComponent=!0}}]);