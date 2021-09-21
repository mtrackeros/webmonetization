"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[371],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7002:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"receiving",title:"Web Monetization Receivers",sidebar_label:"Receiving payments"},p={unversionedId:"receiving",id:"receiving",isDocsHomePage:!1,title:"Web Monetization Receivers",description:"This page describes the functions of the Web Monetization (WM) receiver and how",source:"@site/docs/receiving.md",sourceDirName:".",slug:"/receiving",permalink:"/docs/receiving",editUrl:"https://github.com/WICG/webmonetization/tree/main/docs/receiving.md",version:"current",sidebar_label:"Receiving payments",frontMatter:{id:"receiving",title:"Web Monetization Receivers",sidebar_label:"Receiving payments"},sidebar:"docs",previous:{title:"Web Monetization Explainer",permalink:"/docs/explainer"},next:{title:"Web Monetization Providers (Sending Payments)",permalink:"/docs/sending"}},l=[{value:"Payment pointers",id:"payment-pointers",children:[]},{value:"Receiving payments",id:"receiving-payments",children:[{value:"Interledger protocol (ILP)",id:"interledger-protocol-ilp",children:[]},{value:"Simple Payment Setup protocol (SPSP)",id:"simple-payment-setup-protocol-spsp",children:[]},{value:"STREAM protocol",id:"stream-protocol",children:[]}]}],c={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page describes the functions of the Web Monetization (WM) receiver and how\nexisting payment services might become a WM receiver."),(0,i.kt)("p",null,"A WM receiver is a digital entity that accepts payments over Interledger\non behalf of a website and is capable of receiving micropayments."),(0,i.kt)("p",null,"When a user has Web Monetization enabled in their browser and they visit a\nmonetized website, the browser resolves a unique receiving address for sending\npayments to the website's WM receiver. The browser then begins sending payments\nthrough the user's WM sender."),(0,i.kt)("h2",{id:"payment-pointers"},"Payment pointers"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://paymentpointers.org"},"payment pointer")," is a unique URL assigned to your\npayment account by your WM receiver."),(0,i.kt)("p",null,"The expectation is that a WM receiver will issue one or more payment pointers to\nits customers and these customers will embed the pointer into the websites they\nwant to monetize. The user's browser then fetches connection details from the\npointer to open a payment stream with the WM receiver."),(0,i.kt)("p",null,"Payment pointers resolve to secure URLs, making it possible for WM receivers to\nredirect browsers to alternate addresses using standard HTTP redirects."),(0,i.kt)("p",null,"One benefit of payment pointers is that they provide a level of indirection that\nallows browsers to protect the privacy of users from their WM senders. Specifically,\na browser uses a pointer to request a unique destination address and shared\nsecret from the website's WM  receiver. Only the unique destination address\nfor the session is given to the WM sender. This prevents the WM sender from\ncorrelating a payment pointer with a website."),(0,i.kt)("h2",{id:"receiving-payments"},"Receiving payments"),(0,i.kt)("p",null,"Any entity that is able to accept payments on behalf of websites can be a WM\nreceiver if it supports the necessary protocols. To accept a stream of payments\non behalf of its users, a WM receiver ",(0,i.kt)("strong",{parentName:"p"},"MUST")," support the following protocols\nfrom the Interledger stack:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Interledger Protocol (ILP) - Establishes a micropayment stream and sends payments"),(0,i.kt)("li",{parentName:"ul"},"Simple Payment Setup Protocol (SPSP) - Exchanges payment information between\npayee and payer to facilitate payment over ILP"),(0,i.kt)("li",{parentName:"ul"},"STREAM Protocol - Establishes micropayment streams between entities using the ILP")),(0,i.kt)("h3",{id:"interledger-protocol-ilp"},"Interledger protocol (ILP)"),(0,i.kt)("p",null,"The ILP routes individual micropayments. Interledger allows for payments to be\nsent at very high volumes and in very small denominations. Payments are sent as\nInterledger packets, which are optimized for this use case."),(0,i.kt)("p",null,"The WM receiver must set up a link into the Interledger network. More specifically,\nthe WM receiver must have an Interledger connection (direct or indirect) to any\nweb monetized senders that want to pay the WM receiver."),(0,i.kt)("h3",{id:"simple-payment-setup-protocol-spsp"},"Simple Payment Setup protocol (SPSP)"),(0,i.kt)("p",null,"The SPSP exchanges payment information between the WM receiver and WM sender to\nfacilitate payment over the ILP. The WM receiver must host a secure HTTP endpoint\nthat returns a unique destination address and shared secret for each request."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"SPSP messages ",(0,i.kt)("strong",{parentName:"p"},"MUST")," be exchanged over HTTPS.")),(0,i.kt)("h4",{id:"example-response-to-an-spsp-request"},"Example Response to an SPSP request"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Alice is a customer of ",(0,i.kt)("em",{parentName:"p"},"Secure Receiving Wallet Ltd.")," who can act as a Web\nMonetization receiver.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"She is allocated the SPSP endpoint URL ",(0,i.kt)("inlineCode",{parentName:"p"},"https://securewallet.example/~alice"),"."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This URL can also be expressed as: ",(0,i.kt)("inlineCode",{parentName:"p"},"$securewallet.example/~alice"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A GET request is made to her SPSP endpoint URL with an ",(0,i.kt)("inlineCode",{parentName:"p"},"accept")," header of ",(0,i.kt)("inlineCode",{parentName:"p"},"application/spsp4+json"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"GET https://securewallet.example/~alice\nAccept: application/spsp4+json\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"The server responds with a JSON response carrying the Interledger destination\naddress and shared secret to open a payment stream with\n",(0,i.kt)("em",{parentName:"li"},"Secure Receiving Wallet")," and send Alice money.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "destination_account": "test.example.hRWyGw4JzvFCdMUlEKd1kXPZ",\n  "shared_secret": "qobHsPWoyWh0gCQLx2e9x1bQeDikD4fdmYHGT52VKn8="\n}\n')),(0,i.kt)("p",null,"More details on SPSP can be found in\n",(0,i.kt)("a",{parentName:"p",href:"https://interledger.org/rfcs/0009-simple-payment-setup-protocol/"},"IL-RFC 0009 - Simple Payment Setup Protocol"),"."),(0,i.kt)("h3",{id:"stream-protocol"},"STREAM protocol"),(0,i.kt)("p",null,"The STREAM protocol establishes micropayment streams between entities using the\nILP. STREAM is loosely based on QUIC and provides similar features over ILP that\nQUIC does over IP. STREAM stands for STREAMing Transport for the Real-Time\nExchange of Assets and Messages."),(0,i.kt)("p",null,"For an entity to be a WM receiver, it only needs to run a STREAM server, accept\nconnections, and handle the incoming payments sent over the connection."),(0,i.kt)("p",null,"The browser uses the connection parameters (ILP destination address and shared\nsecret) it acquired through ",(0,i.kt)("a",{parentName:"p",href:"#simple-payment-setup-protocol-spsp"},"SPSP")," to\nestablish a STREAM connection with the WM receiver. Then, a stream of payments\ncan be made to the WM receiver until the stream is closed."),(0,i.kt)("p",null,"Each set of connection parameters is unique, meaning the user's WM sender can't\ncorrelate the payments it makes with the website."),(0,i.kt)("p",null,"The WM receiver may issue payment receipts via the STREAM connection. The\nbrowser can submit receipts to the web page allowing the page to verify payment\nduring a user's session."))}m.isMDXComponent=!0}}]);