"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[195],{2841:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(1721),a=n(7294),l=n(3832),o=n(3066),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.baseUrl,n=function(e){return a.createElement("div",{className:"homeContainer"},a.createElement("div",{className:"homeSplashFade"},a.createElement("div",{className:"wrapper homeWrapper"},e.children)))},r=function(e){return a.createElement("img",{src:e.img_src,alt:"Web Monetization Icon",style:{width:"120px"}})},l=function(){return a.createElement("div",{className:"projectTitle"},a.createElement("h2",null,e.title),a.createElement("small",null,e.tagline))};return a.createElement(n,null,a.createElement(r,{img_src:t+"img/wm-icon-animated.svg"}),a.createElement("img",{src:t+"img/grey_wm_logo.svg",className:"bgLogo",alt:""}),a.createElement("div",{className:"inner"},a.createElement(l,{siteConfig:e})))},t}(a.Component),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.config,r=t.language,c=void 0===r?"":r,s=n.baseUrl,m=n.docsUrl,u=m?m+"/":"",d=c?c+"/":"",p=function(e){return""+s+u+d+e},E=function(){return a.createElement("div",{className:"splashFooter"},a.createElement("div",null,"Web Monetization is being proposed as a W3C standard at\xa0",a.createElement("a",{href:"https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785",target:"_blank",rel:"noreferrer noopener"},"the Web Platform Incubator Community Group"),"."))},h=function(e){return a.createElement("div",{className:"contentBlock"},a.createElement("div",{className:"contentContainer"},e.children))},f=function(){return a.createElement(h,null,a.createElement("h2",null,"Motivation"),a.createElement("p",null,"The ability to transfer money has been a long-standing omission from the web platform. As a result, the web suffers from a flood of advertising and corrupt business models. Web Monetization provides an open, native, efficient, and automatic way to compensate creators, pay for API calls, and support crucial web infrastructure."))},g=function(){return a.createElement(h,null,a.createElement("h2",null,"Why Now?"),a.createElement("p",null,"Until recently, there hasn't been an open, neutral protocol for transferring money. ",a.createElement("a",{href:"https://interledger.org",target:"_blank",rel:"noreferrer noopener"},"Interledger")," provides a simple, ledger-agnostic, and currency-agnostic method for the transfer of small quantities of money. This opens up the possibility for streaming money, which makes Web Monetization possible for the first time."))},b=function(e){return a.createElement("div",{className:"contentBlock",id:e.id},a.createElement("div",{className:"cardBlock"},e.children))},v=function(){return a.createElement("div",{className:"card"},a.createElement("span",null,"Do you know another provider?\xa0",a.createElement("a",{href:"https://github.com/WICG/webmonetization/edit/main/src/pages/index.js",target:"_blank",rel:"noreferrer noopener"},"Make a PR")))},w=function(e){return a.createElement("div",{className:"cardContainer"},e.cards.map((function(e){var t=e.name,n=e.image,r=e.link;return a.createElement("a",{className:"card",href:r,target:"_blank",rel:"noreferrer noopener",key:t},a.createElement("img",{src:s+"img/"+n,alt:t}))})),a.createElement(v,null))},y=function(){return a.createElement(b,{id:"wallets"},a.createElement("h2",null,"Web Monetization Wallets"),a.createElement("p",null,"These providers offer ILP-enabled wallets."),a.createElement(w,{cards:n.customFields.wallets}))},W=function(){return a.createElement(b,{id:"providers"},a.createElement("h2",null,"Web Monetization Providers"),a.createElement("p",null,"These providers offer Web Monetization services"),a.createElement(w,{cards:n.customFields.providers}))},k=function(){return a.createElement(b,{id:"browsers"},a.createElement("h2",null,"Web Monetization Enabled Browsers"),a.createElement("p",null,"These browsers implement Web Monetization natively or via an extension"),a.createElement(w,{cards:n.customFields.browsers}))},N=function(){return a.createElement(b,{id:"search"},a.createElement("h2",null,"Web Monetization Enabled Search Engines"),a.createElement("p",null,"These search engines implement Web Monetization features"),a.createElement(w,{cards:n.customFields.search}))},z=function(){return a.createElement(b,{id:"tools"},a.createElement("h2",null,"Web Monetization Tools"),a.createElement("p",null,"These tools enable Web Monetization features"),a.createElement(w,{cards:n.customFields.tools}))},M=function(){return a.createElement(l.Z,{padding:["left","right"],className:"resources"},a.createElement("h2",null,"Resources"),a.createElement("div",{className:"resourceContainer"},a.createElement("div",{className:"resource"},a.createElement("h3",null,"Documentation"),a.createElement("p",null,"Resource on how to add Web Monetization to your site.",a.createElement("br",null),a.createElement("a",{href:p("docs/getting-started",e.props.language)},"Read docs \u203a"))),a.createElement("div",{className:"resource"},a.createElement("h3",null,"Explainer"),a.createElement("p",null,"The explainer submitted to the W3C.",a.createElement("br",null),a.createElement("a",{href:p("docs/explainer",e.props.language)},"Read explainer \u203a"))),a.createElement("div",{className:"resource"},a.createElement("h3",null,"Specification"),a.createElement("p",null,"The formal specification.",a.createElement("br",null),a.createElement("a",{href:p("specification.html",e.props.language),target:"_blank",rel:"noreferrer noopener"},"Read specs \u203a"))),a.createElement("div",{className:"resource"},a.createElement("h3",null,a.createElement("img",{src:"https://awesome.re/badge-flat2.svg",alt:"Awesome",style:{maxWidth:"100%"}})),a.createElement("p",null,"An ",a.createElement("a",{href:"https://github.com/sindresorhus/awesome#readme"},"awesome")," list of additional Web Monetization resources.",a.createElement("br",null),a.createElement("a",{href:"https://github.com/thomasbnt/awesome-web-monetization",target:"_blank",rel:"noreferrer noopener"},"View list \u203a")))),a.createElement("p",null,"Do you know other developer resources? ",a.createElement("a",{href:"https://github.com/WICG/webmonetization",target:"_blank",rel:"noreferrer noopener"},"Make a PR")))};return a.createElement(o.Z,{permalink:"/",title:n.title,description:n.tagLine},a.createElement("div",null,a.createElement(i,{siteConfig:n,language:c}),a.createElement(E,null),a.createElement("div",{className:"mainContainer"},a.createElement(f,null),a.createElement(g,null),a.createElement(y,null),a.createElement(W,null),a.createElement(k,null),a.createElement(N,null),a.createElement(z,null),a.createElement(M,null))))},t}(a.Component)}}]);