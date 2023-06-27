"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7264],{8001:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(7294);function a(e){var t=e.children;return i.createElement("p",{className:"hide"},t)}},3761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),s=n(8001),o=["components"],l={id:"explainer",title:"Web Monetization Explainer",sidebar_label:"Web Monetization"},p=void 0,d={unversionedId:"explainer",id:"explainer",title:"Web Monetization Explainer",description:"Until now, there have been three popular ways that websites have monetized the traffic to their sites.",source:"@site/docs/explainer.md",sourceDirName:".",slug:"/explainer",permalink:"/docs/explainer",draft:!1,editUrl:"https://github.com/WICG/webmonetization/tree/main/docs/explainer.md",tags:[],version:"current",frontMatter:{id:"explainer",title:"Web Monetization Explainer",sidebar_label:"Web Monetization"},sidebar:"docs",previous:{title:"monetization",permalink:"/docs/permission-policy-monetization"},next:{title:"Receiving payments",permalink:"/docs/receiving"}},u={},c=[{value:"Goals",id:"goals",level:2},{value:"Payment",id:"payment",level:4},{value:"Frictionless user experience",id:"frictionless-user-experience",level:4},{value:"User privacy",id:"user-privacy",level:4},{value:"Non-goals",id:"non-goals",level:2},{value:"Online purchases",id:"online-purchases",level:4},{value:"Flow overview",id:"flow-overview",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Sequence diagram",id:"sequence-diagram",level:3},{value:"Flow",id:"flow",level:3},{value:"Why is a standard required?",id:"why-is-a-standard-required",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Payment Pointers",id:"payment-pointers",level:3},{value:"Open Payments",id:"open-payments",level:3},{value:"Existing implementations",id:"existing-implementations",level:2},{value:"Web Monetization receivers",id:"web-monetization-receivers",level:3},{value:"Web Monetization providers (senders)",id:"web-monetization-providers-senders",level:3},{value:"Browsers",id:"browsers",level:3}],h={toc:c},m="wrapper";function v(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)(m,(0,i.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Until now, there have been three popular ways that websites have monetized the traffic to their sites.  "),(0,r.kt)("ul",null,(0,r.kt)("b",null,"Ads:"),"  Pop-ups and banners distract users from the website's content.  "),(0,r.kt)("ul",null,(0,r.kt)("b",null,"Affiliate marketing:"),"  Links embedded within a page that direct users away from the website to purchase goods or services from a third party."),(0,r.kt)("ul",null,(0,r.kt)("b",null,"Collecting and selling user data:"),"   Websites harvest their visitors' data or online behavior and then sell it to third parties."),(0,r.kt)("p",null,"Now there's another way that allows visitors to reward content creators directly without degrading the user experience or compromising users' privacy. The ",(0,r.kt)("b",null,"Web Monetization (WM) API is a new proposed standard ")," that allows users to stream micropayments (i.e., fractions of a cent) directly from the user agent (i.e., browser) to the website. With Web Monetization, your website's content, not the users or third-party offerings, becomes the product!  "),(0,r.kt)("p",null,'With Web Monetization, websites can provide users with a "premium" experience, such as allowing access to exclusive content, removing advertising, or even removing the need to log in to access content or services.'),(0,r.kt)(s.Z,{mdxType:"Hidden"},"[Skip straight to code...](#handle-payments)"),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("h4",{id:"payment"},"Payment"),(0,r.kt)("p",null,"Provide websites with a way to collect multiple micropayments from users in exchange for consuming the site's content and services."),(0,r.kt)("h4",{id:"frictionless-user-experience"},"Frictionless user experience"),(0,r.kt)("p",null,"Allow users to pre-approve payments in aggregate or delegate the authorization of individual micropayments to a component/service (a Web Monetization agent) that decides when and how much to pay websites without requiring user interaction."),(0,r.kt)("h4",{id:"user-privacy"},"User privacy"),(0,r.kt)("p",null,"This system must preserve the user's privacy. It must not allow websites to track users based on the payments they make at other websites."),(0,r.kt)("h2",{id:"non-goals"},"Non-goals"),(0,r.kt)("h4",{id:"online-purchases"},"Online purchases"),(0,r.kt)("p",null,"Web Monetization enables micropayments. This distinction is essential because micropayments allow different levels of user consent, unlike larger payments, such as those used in traditional e-commerce."),(0,r.kt)("h2",{id:"flow-overview"},"Flow overview"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users must have an account or subscription with a ",(0,r.kt)("strong",{parentName:"li"},"Web Monetization Provider")," (also known as a WM sender).  Alternatively, users may function as their own Web Monetization Provider using a digital wallet that supports Web Monetization.  "),(0,r.kt)("li",{parentName:"ul"},"Users must have a ",(0,r.kt)("strong",{parentName:"li"},"Web Monetization agent")," installed in their browser with\nthe necessary authorization to initiate payments from the WM provider on the\nuser's behalf."),(0,r.kt)("li",{parentName:"ul"},"Websites must sign up with, or run their own, ",(0,r.kt)("strong",{parentName:"li"},"Web Monetization Receiver"),".\nThe WM Provider and WM Receiver do not need a direct relationship. Instead, they send and verify a series of micropayments through the Open Payments API.  ")),(0,r.kt)("h3",{id:"sequence-diagram"},"Sequence diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"diagram",src:n(8330).Z,width:"1086",height:"572"})),(0,r.kt)("h3",{id:"flow"},"Flow"),(0,r.kt)("p",null,"The numbers correspond to the diagram above. The flow is simplified to exclude some edge cases."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sites that support Web Monetization include a ",(0,r.kt)("inlineCode",{parentName:"li"},"<link>")," tag containing a payment pointer. The browser (user agent) parses the tag to determine where to send payments."),(0,r.kt)("li",{parentName:"ol"},"The browser uses its internal Web Monetization agent to retrieve an appropriate rate of payments from the WM provider extension, to make payments to the site."),(0,r.kt)("li",{parentName:"ol"},"The browser creates an incoming payment for the session from the site's payment pointer URL."),(0,r.kt)("li",{parentName:"ol"},"With the site's page still in focus, the browser begins initiating outgoing payments to the website at the calculated rate from the user's WM provider wallet."),(0,r.kt)("li",{parentName:"ol"},"The WM provider notifies the browser of successful payments."),(0,r.kt)("li",{parentName:"ol"},"The browser, in turn, dispatches an event that informs the page of the payment."),(0,r.kt)("li",{parentName:"ol"},"(Optional) The page confirms payment by checking the incoming payment URL associated with the event.")),(0,r.kt)("h2",{id:"why-is-a-standard-required"},"Why is a standard required?"),(0,r.kt)("p",null,"Many services attempt to provide alternative means to monetize the Web and generate revenue for content creators and service providers without selling ads."),(0,r.kt)("p",null,"However, most of these require that the user and the creator/producer/service provider join a shared network that offers to facilitate the transactions between users and these services. The result is a fragmented web of closed content and service silos rather than the global and open Web we all desire. "),(0,r.kt)("p",null,"Further, users sacrifice their privacy because the network provider collects payments from the user and pays out to the creator/producer/service provider. The network provider can thus correlate payment flows and gather data about which users access which services."),(0,r.kt)("p",null,"Web Monetization decouples the sender and the receiver. As the web monetization agent, the browser protects users' privacy by not revealing payments made by the user across different websites.  "),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"Web Monetization works with two complementary technologies that enable open and interoperable micropayments between providers and websites or receivers: Payment Pointers and the Open Payments API.  "),(0,r.kt)("h3",{id:"payment-pointers"},"Payment Pointers"),(0,r.kt)("p",null,"Payment pointers are a convenient and concise way to express a URL that points\nto a secure payment initiation endpoint on the Web."),(0,r.kt)("p",null,"Payment pointers resolve to an HTTPS URL using simple conversion rules."),(0,r.kt)("p",null,"Using payment pointers, systems that offer payment accounts can give users a\nsimple and easy-to-remember identifier for their account that's ",(0,r.kt)("strong",{parentName:"p"},"safe to\nshare")," with 3rd parties (unlike a credit card number) and is immediately\nidentifiable as a payment account identifier."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Example payment pointers:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"$alice.wallet.example")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$wallet.example/alice"),"."),(0,r.kt)("p",{parentName:"blockquote"},"These resolve to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://alice.wallet.example/.well-known/pay")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"https://wallet.example/alice")," respectively.")),(0,r.kt)("p",null,"Websites that use Web Monetization require a destination address for their\npayments (which they will get from their WM receiver). The address must be inserted\ninto the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"link")," tag."),(0,r.kt)("p",null,"For more details see ",(0,r.kt)("a",{parentName:"p",href:"https://paymentpointers.org"},"https://paymentpointers.org"),"."),(0,r.kt)("h3",{id:"open-payments"},"Open Payments"),(0,r.kt)("p",null,"The Open Payments API provides a standard way for digital wallets to allow third-party applications to access and send funds based on the authorizations granted by the respective wallet owner.",(0,r.kt)("br",{parentName:"p"}),"\n","Open Payments allows applications to access a digital wallet through one or more of its payment pointers. The payment pointer also serves as the entry point for the API.  "),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://openpayments.dev."},"https://openpayments.dev.")," "),(0,r.kt)("h2",{id:"existing-implementations"},"Existing implementations"),(0,r.kt)("p",null,"Please submit a PR if you are aware of updates to the lists below."),(0,r.kt)("h3",{id:"web-monetization-receivers"},"Web Monetization receivers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gatehub.net/"},"GateHub"))),(0,r.kt)("h3",{id:"web-monetization-providers-senders"},"Web Monetization providers (senders)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TBA")),(0,r.kt)("h3",{id:"browsers"},"Browsers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chromium + Web Monetization extension")))}v.isMDXComponent=!0},8330:function(e,t,n){t.Z=n.p+"assets/images/flow-54b747fbaaec6176c32fbc39ace388e8.svg"}}]);