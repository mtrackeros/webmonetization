"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[172],{2518:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(7294);function i(e){var t=e.children;return r.createElement("h2",{className:"sectionHeader"},t)}},1101:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var r=n(7294),i=n(3832),a=n(7452),l=n(8143),c=n(1262),o={Generate:1,Generated:2},u=(0,r.createContext)();function s(e){var t=e.children,n=(0,r.useState)(o.Generate),i=n[0],a=n[1];return r.createElement(u.Provider,{value:[i,a]},t)}function p(){return(0,r.useContext)(u)}var d=(0,r.createContext)(),m={pointer:"",verifier:"",plaintext:"",exclusiveContent:""};function f(e){var t=e.children,n=(0,r.useState)(m),i=n[0],a=n[1];return r.createElement(d.Provider,{value:[i,a]},t)}function v(){return(0,r.useContext)(d)}var h=n(2518);function E(){return r.createElement(r.Fragment,null,r.createElement("p",null,"In order to generate exclusive content, we need the following information:"))}var y=n(1017),g=n(4035),x="https://webmonetization.org/api/exclusive-content",Z="https://webmonetization.org/api/receipts";function w(){return(w=(0,g.Z)((0,y.Z)().mark((function e(t,n,r){var i,a,l,c,o,u,s,p;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n||Z,e.next=3,C(t);case 3:return a=e.sent,l=a.key,c=a.nonce,e.next=8,S(r,i,l);case 8:return o=e.sent,u=o.cypherText,s=o.cypherVerifier,p=o.initVector,e.abrupt("return",{verifier:i,nonce:c,cypherText:u,cypherVerifier:s,initVector:p});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return b.apply(this,arguments)}function b(){return(b=(0,g.Z)((0,y.Z)().mark((function e(t){var n;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"/deriveNewKey",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({paymentPointer:t})});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n){return k.apply(this,arguments)}function k(){return(k=(0,g.Z)((0,y.Z)().mark((function e(t,n,r){var i,a,l,c;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(A(r));case 2:return i=e.sent,o=void 0,u=void 0,o=new Uint8Array(16),u=crypto.getRandomValues(o),a=M(u),e.next=6,V(F(t),i,F(a));case 6:return l=e.sent,e.next=9,V(F(n),i,F(a));case 9:return c=e.sent,e.abrupt("return",{cypherText:M(l),cypherVerifier:M(c),initVector:a});case 11:case"end":return e.stop()}var o,u}),e)})))).apply(this,arguments)}function T(e){return N.apply(this,arguments)}function N(){return(N=(0,g.Z)((0,y.Z)().mark((function e(t){return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.crypto.subtle.importKey("raw",t,"AES-GCM",!1,["encrypt","decrypt"]));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t,n){return G.apply(this,arguments)}function G(){return(G=(0,g.Z)((0,y.Z)().mark((function e(t,n,r){return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.crypto.subtle.encrypt({name:"AES-GCM",iv:r},n,t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return(new TextEncoder).encode(e)}function M(e){return window.btoa(String.fromCharCode.apply(null,new Uint8Array(e)))}function A(e){for(var t=window.atob(e),n=new ArrayBuffer(t.length),r=new Uint8Array(n),i=0,a=t.length;i<a;i++)r[i]=t.charCodeAt(i);return n}var O=n(4436),j=n(5161),H=n(8799),J=n(585),W=n(282);function I(){var e=p(),t=(e[0],e[1]),n=v(),i=(n[0],n[1]),a=(0,r.useState)(""),l=a[0],c=a[1],u=(0,r.useState)(""),s=u[0],d=u[1],m=(0,r.useState)(""),f=m[0],h=m[1];return r.createElement(r.Fragment,null,r.createElement(O.Z,{margin:"normal",fullWidth:!0},r.createElement(j.Z,{shrink:"false",htmlFor:"pointer"},"Payment Pointer"),r.createElement(H.Z,{id:"pointer",type:"text",value:l,onChange:function(e){c(e.target.value)}}),r.createElement(J.Z,{id:"pointer-helper-text"},"Example: ",r.createElement("code",null,"$spsp.example.com/alice")," or"," ",r.createElement("code",null,"https://spsp.example.com/alice"))),r.createElement(O.Z,{margin:"normal",fullWidth:!0},r.createElement(j.Z,{shrink:"false",htmlFor:"plaintext"},"Content"),r.createElement(H.Z,{id:"plaintext",multiline:!0,rows:10,value:f,onChange:function(e){h(e.target.value)},style:{borderStyle:"solid solid none solid",borderWidth:"1px",borderColor:"#949494",padding:"8px"}}),r.createElement(J.Z,{id:"pointer-helper-text"},"This can really just be plain text, e.g. ",r.createElement("code",null,"Hello World"),", or an HTML tag, e.g."," ",r.createElement("code",null,"<div><p>Hello World</p></div>"))),r.createElement(O.Z,{margin:"normal",fullWidth:!0},r.createElement(j.Z,{shrink:"false",htmlFor:"verifier"},"Verifier URL (optional)"),r.createElement(H.Z,{id:"verifier",type:"text",value:s,onChange:function(e){d(e.target.value)}}),r.createElement(J.Z,{id:"pointer-helper-text"},"If this is not specified, we will use a hosted verifier. If you decide to use your own verifier, specify something like:"," ",r.createElement("code",null,"https://verifier.example.com"))),r.createElement(W.Z,{variant:"outlined",size:"medium",disabled:!l|!f,onClick:function(){(function(e,t,n){return w.apply(this,arguments)})(l,s,f).then((function(e){i({pointer:l,verifier:e.verifier,plaintext:f,nonce:e.nonce,cypherText:e.cypherText,cypherVerifier:e.cypherVerifier,initVector:e.initVector}),t(o.Generated)}))}},"Generate"))}var L=n(9176),P=n(3454),z=n(3173),U=n(7083),B=n(3579),R=n(9525),D=n(7212),K=n(1395),Y=n(8334),$=n(5261);function q(e){var t=r.useState(!1),n=t[0],i=t[1],a=function(e){var t=document.getElementById(e).innerText;navigator.clipboard.writeText(t).then((function(){i(!0),console.log("copied to clipboard")}),(function(){console.log("copy to clipboard failed")}))};return r.createElement("div",null,r.createElement(U.ZP,{title:e.message},r.createElement(W.Z,{tooltip:!0,onClick:function(){return a(e.id)}},r.createElement(z.Z,null))),r.createElement(B.Z,{open:n,onClose:function(){i(!1)}},r.createElement(R.Z,null,r.createElement($.Z,{display:"flex",justifyContent:"center",alignItems:"center"},r.createElement(K.Z,{style:{color:Y.Z[500],fontSize:50}})),r.createElement(D.Z,null,"Copied to clipboard!"))))}function Q(){var e=v()[0],t=e.verifier.endsWith("/")?e.verifier:e.verifier+"/",n='<div \n  class="exclusive" \n  id='+JSON.stringify(Math.random().toString(36).substr(2).replace(/^[0-9]/g,"aa"))+"\n  paymentpointer="+JSON.stringify(e.pointer)+"\n  proxypaymentpointer="+JSON.stringify(t+encodeURIComponent(e.pointer))+"\n  cyphertext="+JSON.stringify(e.cypherText)+"\n  cypherverifier="+JSON.stringify(e.cypherVerifier)+"\n  initvector="+JSON.stringify(e.initVector)+"\n  nonce="+JSON.stringify(e.nonce)+'\n>\n  <div class="exclusiveMessage" style="text-align: center"></div>\n  <div class="exclusiveContent"></div>\n</div>';return r.createElement(r.Fragment,null,r.createElement("p",null,"Here is what you need to do to embed it on your web page:"),r.createElement("p",null,"1. Add the following ",r.createElement("code",null,"div")," tag to your HTML, in the spot you want the exclusive content to appear."),r.createElement(q,{id:"ec-div",message:"Copy div tag"}),r.createElement(L.Z,{id:"ec-div",language:"htmlbars",style:P.Z},n),r.createElement("p",null,"2. Add"," ",r.createElement("strong",null,"one of the following ",r.createElement("code",null,"script")," tags"," ")," ","to your HTML",r.createElement("code",null,"body"),". You have the choice between embedding a script that depends on an external script and one that doesn't have any dependencies. If you include multiple exclusive content ",r.createElement("code",null,"div")," ","tags, you only need to add the script once."))}var X=n(102),_=n(5258),ee=n(7821),te=n(1423);function ne(){return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement(q,{id:"dependentScript",message:"Copy script with dependencies"}),r.createElement(L.Z,{id:"dependentScript",language:"htmlbars",style:P.Z},'<script src="https://webmonetization.org/js/exclusive-content.js"><\/script>')))}function re(){var e=(0,r.useState)(""),t=e[0],n=e[1];return(0,r.useEffect)((function(){fetch("../../../../static/js/exclusive-content.js").then((function(e){return e.text()})).then((function(e){n("<script>\n"+e+"\n<\/script>")}),(function(e){n(e)}))})),r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement(q,{id:"independentScript",message:"Copy script without dependencies"}),r.createElement(L.Z,{id:"independentScript",language:"htmlbars",style:P.Z},t)))}var ie=["children","value","index"];function ae(){var e=r.useState(0),t=e[0],n=e[1];return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement(_.Z,{position:"static",color:"none",style:{boxShadow:"none"}},r.createElement(ee.Z,{value:t,onChange:function(e,t){n(t)},indicatorColor:"primary",textColor:"primary"},r.createElement(te.Z,{label:"Dependencies"}),r.createElement(te.Z,{label:"No Dependencies"}))),r.createElement(le,{value:t,index:0},r.createElement(ne,null)),r.createElement(le,{value:t,index:1},r.createElement(re,null))))}function le(e){var t=e.children,n=e.value,i=e.index,a=(0,X.Z)(e,ie);return r.createElement("div",a,n===i&&r.createElement($.Z,{p:3,style:{padding:"24px 0 24px 0"}},t))}function ce(){var e=p(),t=(e[0],e[1]);return r.createElement(r.Fragment,null,r.createElement(W.Z,{variant:"outlined",size:"medium",onClick:function(){t(o.Generate)}},"Back"))}function oe(){var e=p()[0];return e===o.Generate?r.createElement(r.Fragment,null,r.createElement(h.M,null,"Generate Exclusive Content"),r.createElement(E,null),r.createElement(I,null)):e===o.Generated?r.createElement(r.Fragment,null,r.createElement(h.M,null,"Exclusive Content Generated!"),r.createElement(Q,null),r.createElement(ae,null),r.createElement(ce,null)):void 0}function ue(e){var t=e.config;return r.createElement(c.Z,null,r.createElement(a.Z,{permalink:"/exclusive-content",title:t.title,description:t.tagLine},r.createElement(f,null,r.createElement(s,null,r.createElement("div",{className:"docMainWrapper wrapper"},r.createElement(i.Z,{className:"mainContainer documentContainer metaTagContainer"},r.createElement("header",{className:"postHeader"},r.createElement("h1",null,"Exclusive Content Generator")),r.createElement("p",null,"This tool allows you to create exclusive content which is only unlocked if payment can be verified."," ",r.createElement(l.Link,{to:"/docs/exclusive-content#exclusive-content-with-payment-verification"},"Learn more!")),r.createElement(oe,null)))))))}}}]);