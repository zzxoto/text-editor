!function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}({10:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scribbles=t.pubsub=void 0;var s,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},u=r(9),o=(s=u)&&s.__esModule?s:{default:s};t.pubsub=function(){var e=new o.default,t={x:1};(t=n({},t,e)).subscribe(function(e){console.log(e)}),t.subscribe(function(e){console.log(e)}),t.publish("hello world"),console.log("pubSub test completed")},t.scribbles=function(){}},11:function(e,t,r){"use strict";var s=r(10);(0,s.pubsub)(),(0,s.scribbles)()},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){this.subscribers=[],this.publish=function(e,t){for(var r=0;r<this.subscribers.length;r++)this.subscribers[r].type===e&&this.subscribers[r].callback(t)},this.subscribe=function(e,t){this.subscribers.push({type:e,callback:t})}}}});