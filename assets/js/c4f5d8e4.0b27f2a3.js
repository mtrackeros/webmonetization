/*! For license information please see c4f5d8e4.0b27f2a3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4195],{3156:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(3366),a=n(7462),o=n(7294),i=n(6010),s=n(601),c=n(4867),l=n(4780),m=n(5149);var u=(0,n(3925).ZP)(),h=n(6842),d=n(5893);const p=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,h.Z)(),g=u("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),v=e=>(0,m.Z)({props:e,name:"MuiContainer",defaultTheme:f});var b=n(8216),E=n(948),w=n(1657);const y=function(e={}){const{createStyledComponent:t=g,useThemeProps:n=v,componentName:m="MuiContainer"}=e,u=t((({theme:e,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const r=n,a=e.breakpoints.values[r];return 0!==a&&(t[e.breakpoints.up(r)]={maxWidth:`${a}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),h=o.forwardRef((function(e,t){const o=n(e),{className:h,component:f="div",disableGutters:g=!1,fixed:v=!1,maxWidth:b="lg"}=o,E=(0,r.Z)(o,p),w=(0,a.Z)({},o,{component:f,disableGutters:g,fixed:v,maxWidth:b}),y=((e,t)=>{const{classes:n,fixed:r,disableGutters:a,maxWidth:o}=e,i={root:["root",o&&`maxWidth${(0,s.Z)(String(o))}`,r&&"fixed",a&&"disableGutters"]};return(0,l.Z)(i,(e=>(0,c.Z)(t,e)),n)})(w,m);return(0,d.jsx)(u,(0,a.Z)({as:f,ownerState:w,className:(0,i.Z)(y.root,h),ref:t},E))}));return h}({createStyledComponent:(0,E.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,b.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,w.Z)({props:e,name:"MuiContainer"})});var x=y},2734:function(e,t,n){n.d(t,{Z:function(){return i}});n(7294);var r=n(9718),a=n(3230),o=n(606);function i(){const e=(0,r.Z)(a.Z);return e[o.Z]||e}},9707:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7462),a=n(3366),o=n(9766),i=n(4920);const s=["sx"],c=e=>{var t,n;const r={systemProps:{},otherProps:{}},a=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach((t=>{a[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r};function l(e){const{sx:t}=e,n=(0,a.Z)(e,s),{systemProps:i,otherProps:l}=c(n);let m;return m=Array.isArray(t)?[i,...t]:"function"==typeof t?(...e)=>{const n=t(...e);return(0,o.P)(n)?(0,r.Z)({},i,n):i}:(0,r.Z)({},i,t),(0,r.Z)({},l,{sx:m})}},9399:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(4165),a=n(5861),o=n(7294),i=n(3156),s=n(3366),c=n(7462),l=n(6010),m=n(5408),u=n(9707),h=n(4780),d=n(948),p=n(1657),f=n(2734);var g=o.createContext(),v=n(1588),b=n(4867);function E(e){return(0,b.Z)("MuiGrid",e)}const w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var y=(0,v.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...w.map((e=>`grid-xs-${e}`)),...w.map((e=>`grid-sm-${e}`)),...w.map((e=>`grid-md-${e}`)),...w.map((e=>`grid-lg-${e}`)),...w.map((e=>`grid-xl-${e}`))]),x=n(5893);const k=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function N(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function W({breakpoints:e,values:t}){let n="";Object.keys(t).forEach((e=>{""===n&&0!==t[e]&&(n=e)}));const r=Object.keys(e).sort(((t,n)=>e[t]-e[n]));return r.slice(0,r.indexOf(n))}const Z=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:r,direction:a,item:o,spacing:i,wrap:s,zeroMinWidth:c,breakpoints:l}=n;let m=[];r&&(m=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];const r=[];return t.forEach((t=>{const a=e[t];Number(a)>0&&r.push(n[`spacing-${t}-${String(a)}`])})),r}(i,l,t));const u=[];return l.forEach((e=>{const r=n[e];r&&u.push(t[`grid-${e}-${String(r)}`])})),[t.root,r&&t.container,o&&t.item,c&&t.zeroMinWidth,...m,"row"!==a&&t[`direction-xs-${String(a)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...u]}})((({ownerState:e})=>(0,c.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,m.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,m.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${y.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let a={};if(n&&0!==r){const t=(0,m.P$)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=W({breakpoints:e.breakpoints.values,values:t})),a=(0,m.k9)({theme:e},t,((t,r)=>{var a;const o=e.spacing(t);return"0px"!==o?{marginTop:`-${N(o)}`,[`& > .${y.item}`]:{paddingTop:N(o)}}:null!=(a=n)&&a.includes(r)?{}:{marginTop:0,[`& > .${y.item}`]:{paddingTop:0}}}))}return a}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let a={};if(n&&0!==r){const t=(0,m.P$)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=W({breakpoints:e.breakpoints.values,values:t})),a=(0,m.k9)({theme:e},t,((t,r)=>{var a;const o=e.spacing(t);return"0px"!==o?{width:`calc(100% + ${N(o)})`,marginLeft:`-${N(o)}`,[`& > .${y.item}`]:{paddingLeft:N(o)}}:null!=(a=n)&&a.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${y.item}`]:{paddingLeft:0}}}))}return a}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,a)=>{let o={};if(t[a]&&(n=t[a]),!n)return r;if(!0===n)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const i=(0,m.P$)({values:t.columns,breakpoints:e.breakpoints.values}),s="object"==typeof i?i[a]:i;if(null==s)return r;const l=Math.round(n/s*1e8)/1e6+"%";let u={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${l} + ${N(n)})`;u={flexBasis:e,maxWidth:e}}}o=(0,c.Z)({flexBasis:l,flexGrow:0,maxWidth:l},u)}return 0===e.breakpoints.values[a]?Object.assign(r,o):r[e.breakpoints.up(a)]=o,r}),{})}));const S=e=>{const{classes:t,container:n,direction:r,item:a,spacing:o,wrap:i,zeroMinWidth:s,breakpoints:c}=e;let l=[];n&&(l=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const n=[];return t.forEach((t=>{const r=e[t];if(Number(r)>0){const e=`spacing-${t}-${String(r)}`;n.push(e)}})),n}(o,c));const m=[];c.forEach((t=>{const n=e[t];n&&m.push(`grid-${t}-${String(n)}`)}));const u={root:["root",n&&"container",a&&"item",s&&"zeroMinWidth",...l,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==i&&`wrap-xs-${String(i)}`,...m]};return(0,h.Z)(u,E,t)},$=o.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiGrid"}),{breakpoints:r}=(0,f.Z)(),a=(0,u.Z)(n),{className:i,columns:m,columnSpacing:h,component:d="div",container:v=!1,direction:b="row",item:E=!1,rowSpacing:w,spacing:y=0,wrap:N="wrap",zeroMinWidth:W=!1}=a,$=(0,s.Z)(a,k),M=w||y,L=h||y,_=o.useContext(g),z=v?m||12:_,P={},j=(0,c.Z)({},$);r.keys.forEach((e=>{null!=$[e]&&(P[e]=$[e],delete j[e])}));const G=(0,c.Z)({},a,{columns:z,container:v,direction:b,item:E,rowSpacing:M,columnSpacing:L,wrap:N,zeroMinWidth:W,spacing:y},P,{breakpoints:r.keys}),T=S(G);return(0,x.jsx)(g.Provider,{value:z,children:(0,x.jsx)(Z,(0,c.Z)({ownerState:G,className:(0,l.Z)(T.root,i),as:d,ref:t},j))})}));var M=$,L=n(7961),_=n(9960);function z(e){var t=e.config,n=(0,o.useState)([]),s=n[0],c=n[1],l=function(e){return e.cards.map((function(e){var n=e.name,r=e.image,a=e.link,i=e.desc;return i?o.createElement("a",{key:n,href:a,target:"_blank",rel:"noreferrer noopener",className:"home-card--wide"},o.createElement("img",{className:"home-card__logo",src:t.baseUrl+"img/"+r,alt:n}),o.createElement("div",{className:"home-card__content"},o.createElement("h3",{className:"body-text"},n),o.createElement("p",null,i))):o.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",key:n,className:"home-card--basic"},o.createElement("img",{src:t.baseUrl+"img/"+r,alt:n}))}))},m=function(e){return o.createElement("div",{className:"home-cta"},o.createElement("img",{className:"icon--merge",src:"/img/icon-merge.svg",alt:""}),o.createElement("p",null,"Do you know another ",e.label,"?"," ",o.createElement("a",{href:"https://github.com/WICG/webmonetization/edit/main/docusaurus.config.js",target:"_blank",rel:"noreferrer noopener"},"Make a PR")))},u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("contributor-data/contributors.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){u()}),[]),o.createElement(L.Z,{permalink:"/",title:t.title,description:t.tagline},o.createElement("section",{className:"home-hero"},o.createElement(i.Z,{maxWidth:"sm"},o.createElement("img",{alt:"Web Monetization Icon",className:"home-hero__icon",src:"img/wm-logo--animated.svg"}),o.createElement("h1",{className:"heading--2"},t.title),o.createElement("p",{className:"home-hero__tagline heading--4"},t.tagline)),o.createElement("footer",{className:"home-hero__footer"},o.createElement(i.Z,{maxWidth:"sm"},o.createElement("p",null,"Web Monetization is being proposed as a W3C standard at"," ",o.createElement("a",{href:"https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785",rel:"noreferrer noopener",target:"_blank"},"the Web Platform Incubator Community Group"),".")))),o.createElement("section",{className:"home-section"},o.createElement(i.Z,{maxWidth:"lg"},o.createElement(M,{container:!0,spacing:4},o.createElement(M,{item:!0,sm:12,md:6},o.createElement("h2",{className:"heading--3"},"Motivation"),o.createElement("p",null,"The ability to transfer money has been a long-standing omission from the web platform. As a result, the web suffers from a flood of advertising and broken business models. Web Monetization provides an open, native, efficient, and automatic way to compensate creators, pay for content, and support crucial web infrastructure.")),o.createElement(M,{item:!0,sm:12,md:6},o.createElement("h2",{className:"heading--3"},"Why Now?"),o.createElement("p",null,"Until recently, there hasn't been an open, neutral and cost-efficient protocol for transferring money."," ",o.createElement("a",{href:"https://interledger.org",rel:"noreferrer noopener",target:"_blank"},"Interledger")," ","provides a simple, interoperable, and currency-agnostic method for the transfer of small amounts of money. This opens up the possibility for streaming money, which makes more Web Monetization use cases possible for the first time."))))),o.createElement("section",{className:"home-section"},o.createElement(i.Z,{maxWidth:"lg"},o.createElement(M,{container:!0,spacing:2},t.customFields.wallets.length>0&&o.createElement(M,{item:!0,sm:12,md:6},o.createElement("div",{className:"home-section-header"},o.createElement("h2",{className:"heading--3"},"Web Monetization Wallets"),o.createElement("p",null,"These providers offer ILP-enabled wallets that you can use to become Web Monetized:")),o.createElement("div",{className:"home-cards"},o.createElement(l,{cards:t.customFields.wallets})),o.createElement(m,{label:"wallet"})),t.customFields.search.length>0&&o.createElement(M,{item:!0,sm:12,md:6},o.createElement("div",{className:"home-section-header"},o.createElement("h2",{className:"heading--3"},"Web Monetization Enabled Search Engines"),o.createElement("p",null,"These search engines implement Web Monetization features:")),o.createElement("div",{className:"home-cards"},o.createElement(l,{cards:t.customFields.search})),o.createElement(m,{label:"search engine"}))))),t.customFields.providers.length>0&&o.createElement("section",{className:"home-section"},o.createElement(i.Z,{maxWidth:"md"},o.createElement("div",{className:"home-section-header"},o.createElement("h2",{className:"heading--3"},"Web Monetization Providers"),o.createElement("p",null,"These providers offer Web Monetization services:")),o.createElement("div",{className:"home-cards"},o.createElement(l,{cards:t.customFields.providers})),o.createElement(m,{label:"provider"}))),t.customFields.browsers.length>0&&o.createElement("section",{className:"home-section"},o.createElement(i.Z,{maxWidth:"md"},o.createElement("div",{className:"home-section-header"},o.createElement("h2",{className:"heading--3"},"Web Monetization Supported Browsers"),o.createElement("p",null,"These browsers implement Web Monetization natively or via an extension:")),o.createElement("div",{className:"home-cards"},o.createElement(l,{cards:t.customFields.browsers})),o.createElement(m,{label:"browser"}))),t.customFields.tools.length>0&&o.createElement("section",{className:"home-section"},o.createElement(i.Z,{maxWidth:"lg"},o.createElement("div",{className:"home-section-header"},o.createElement("h2",{className:"heading--3"},"Web Monetization Tools"),o.createElement("p",null,"These tools enable Web Monetization features:")),o.createElement("div",{className:"home-cards"},o.createElement(l,{cards:t.customFields.tools})),o.createElement(m,{label:"tool"}))),o.createElement("section",{className:"home-section"},o.createElement(i.Z,{maxWidth:"lg"},o.createElement("h2",{className:"heading--3"},"Resources"),o.createElement(M,{container:!0,spacing:2},o.createElement(M,{item:!0,sm:6,md:3},o.createElement("h3",{className:"heading--4"},"Documentation"),o.createElement("p",null,"Resource on how to add Web Monetization to your site."),o.createElement(_.Z,{to:"/docs/web-monetization-api"},"Read docs \u203a")),o.createElement(M,{item:!0,sm:6,md:3},o.createElement("h3",{className:"heading--4"},"Explainer"),o.createElement("p",null,"The explainer submitted to the W3C."),o.createElement(_.Z,{to:"/docs/explainer"},"Read explainer \u203a")),o.createElement(M,{item:!0,sm:6,md:3},o.createElement("h3",{className:"heading--4"},"Specification"),o.createElement("p",null,"The formal specification."),o.createElement(_.Z,{to:"pathname:///specification"},"Read specs \u203a")),o.createElement(M,{item:!0,sm:6,md:3},o.createElement("h3",{className:"heading--4"},o.createElement("img",{src:t.baseUrl+"img/awesome-badge.svg",alt:""})),o.createElement("p",null,"An"," ",o.createElement("a",{href:"https://github.com/sindresorhus/awesome#readme",target:"_blank",rel:"noreferrer noopener"},"awesome")," ","list of additional Web Monetization resources."),o.createElement("a",{href:"https://github.com/thomasbnt/awesome-web-monetization",target:"_blank",rel:"noreferrer noopener"},"View list \u203a"))))),o.createElement("section",{className:"home-section"},o.createElement(i.Z,{maxWidth:"lg"},o.createElement("div",{className:"home-section-header"},o.createElement("h2",{className:"heading--3"},"Contributors"),o.createElement("p",null,"Thank you to all our contributors.")),s.length>0&&o.createElement("ul",{className:"home-contributors"},s.map((function(e){return o.createElement("li",{key:e.id,className:"home-contributor"},o.createElement("a",{href:e.html_url},o.createElement("img",{alt:e.login,src:e.avatar_url})))}))))))}},5861:function(e,t,n){function r(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return a}})},4165:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(1002);function a(){a=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function m(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{m({},"")}catch(L){m=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),s=new S(r||[]);return o(i,"_invoke",{value:k(e,n,s)}),i}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var d={};function p(){}function f(){}function g(){}var v={};m(v,s,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b($([])));E&&E!==t&&n.call(E,s)&&(v=E);var w=g.prototype=p.prototype=Object.create(v);function y(e){["next","throw","return"].forEach((function(t){m(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function a(o,i,s,c){var l=h(e[o],e,i);if("throw"!==l.type){var m=l.arg,u=m.value;return u&&"object"==(0,r.Z)(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,s,c)}),(function(e){a("throw",e,s,c)})):t.resolve(u).then((function(e){m.value=e,s(m)}),(function(e){return a("throw",e,s,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){a(e,n,t,r)}))}return i=i?i.then(r,r):r()}})}function k(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return M()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=N(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function N(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=h(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function W(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function Z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(W,this),this.reset(!0)}function $(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:M}}function M(){return{value:void 0,done:!0}}return f.prototype=g,o(w,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:f,configurable:!0}),f.displayName=m(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,m(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},y(x.prototype),m(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new x(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(w),m(w,l,"Generator"),m(w,s,(function(){return this})),m(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=$,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),Z(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;Z(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:$(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}}}]);