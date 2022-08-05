(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var r="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var t=ba(this);function u(a,b){if(b)a:{var c=t;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&r(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+f++,g)}function c(g,e){this.g=g;r(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=t[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&r(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ca(aa(this))}})}return a});function ca(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function da(a){return a.raw=a}function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ea="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=fa;
function w(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.U=b.prototype}function la(){this.l=!1;this.g=null;this.m=void 0;this.h=1;this.v=0;this.i=null}function ma(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}la.prototype.s=function(a){this.m=a};function na(a,b){a.i={da:b,ea:!0};a.h=a.v}
la.prototype.return=function(a){this.i={return:a};this.h=this.v};function oa(a){this.g=new la;this.h=a}function pa(a,b){ma(a.g);var c=a.g.g;if(c)return qa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return y(a)}
function qa(a,b,c,d){try{var f=b.call(a.g.g,c);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return a.g.l=!1,f;var g=f.value}catch(e){return a.g.g=null,na(a.g,e),y(a)}a.g.g=null;d.call(a.g,g);return y(a)}function y(a){for(;a.g.h;)try{var b=a.h(a.g);if(b)return a.g.l=!1,{value:b.value,done:!1}}catch(c){a.g.m=void 0,na(a.g,c)}a.g.l=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.ea)throw b.da;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ra(a){this.next=function(b){ma(a.g);a.g.g?b=qa(a,a.g.g.next,b,a.g.s):(a.g.s(b),b=y(a));return b};this.throw=function(b){ma(a.g);a.g.g?b=qa(a,a.g.g["throw"],b,a.g.s):(na(a.g,b),b=y(a));return b};this.return=function(b){return pa(a,b)};this[Symbol.iterator]=function(){return this}}function ta(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,f){function g(e){e.done?d(e.value):Promise.resolve(e.value).then(b,c).then(g,f)}g(a.next())})}
function ua(a){return ta(new ra(new oa(a)))}function va(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Promise",function(a){function b(e){this.g=0;this.i=void 0;this.h=[];this.v=!1;var h=this.l();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var h=this;this.i(function(){h.m()})}this.g.push(e)};var f=t.setTimeout;c.prototype.i=function(e){f(e,0)};c.prototype.m=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var h=0;h<e.length;++h){var k=
e[h];e[h]=null;try{k()}catch(l){this.l(l)}}}this.g=null};c.prototype.l=function(e){this.i(function(){throw e;})};b.prototype.l=function(){function e(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:e(this.H),reject:e(this.m)}};b.prototype.H=function(e){if(e===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.J(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.D(e):this.s(e)}};
b.prototype.D=function(e){var h=void 0;try{h=e.then}catch(k){this.m(k);return}"function"==typeof h?this.K(h,e):this.s(e)};b.prototype.m=function(e){this.C(2,e)};b.prototype.s=function(e){this.C(1,e)};b.prototype.C=function(e,h){if(0!=this.g)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.g);this.g=e;this.i=h;2===this.g&&this.I();this.F()};b.prototype.I=function(){var e=this;f(function(){if(e.G()){var h=t.console;"undefined"!==typeof h&&h.error(e.i)}},1)};b.prototype.G=
function(){if(this.v)return!1;var e=t.CustomEvent,h=t.Event,k=t.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof h?e=new h("unhandledrejection",{cancelable:!0}):(e=t.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return k(e)};b.prototype.F=function(){if(null!=this.h){for(var e=0;e<this.h.length;++e)g.h(this.h[e]);this.h=null}};var g=new c;b.prototype.J=
function(e){var h=this.l();e.M(h.resolve,h.reject)};b.prototype.K=function(e,h){var k=this.l();try{e.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,h){function k(p,x){return"function"==typeof p?function(M){try{l(p(M))}catch(sa){m(sa)}}:x}var l,m,q=new b(function(p,x){l=p;m=x});this.M(k(e,l),k(h,m));return q};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.M=function(e,h){function k(){switch(l.g){case 1:e(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+
l.g);}}var l=this;null==this.h?g.h(k):this.h.push(k);this.v=!0};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var l=v(e),m=l.next();!m.done;m=l.next())d(m.value).M(h,k)})};b.all=function(e){var h=v(e),k=h.next();return k.done?d([]):new b(function(l,m){function q(M){return function(sa){p[M]=sa;x--;0==x&&l(p)}}var p=[],x=0;do p.push(void 0),x++,d(k.value).M(q(p.length-1),m),k=h.next();while(!k.done)})};return b});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var f=d.length,g=0;g<f;g++){var e=d[g];if(b.call(c,e,g,d)){b=e;break a}}b=void 0}return b}});function z(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
u("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}function c(){}function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}function f(k){if(!z(k,e)){var l=new c;r(k,e,{value:l})}}function g(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&f(m);return l(m)})}if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),
m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;var e="$jscomp_hidden_"+Math.random();g("freeze");g("preventExtensions");g("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");f(k);if(!z(k,e))throw Error("WeakMap key fail: "+k);k[e][this.g]=l;return this};b.prototype.get=function(k){return d(k)&&z(k,e)?k[e][this.g]:void 0};b.prototype.has=function(k){return d(k)&&z(k,
e)&&z(k[e],this.g)};b.prototype.delete=function(k){return d(k)&&z(k,e)&&z(k[e],this.g)?delete k[e][this.g]:!1};return b});
u("Map",function(a){function b(){var h={};return h.A=h.next=h.head=h}function c(h,k){var l=h.g;return ca(function(){if(l){for(;l.head!=h.g;)l=l.A;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?g.has(k)?l=g.get(k):(l=""+ ++e,g.set(k,l)):l="p_"+k;var m=h.h[l];if(m&&z(h.h,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,o:q}}return{id:l,list:m,
index:-1,o:void 0}}function f(h){this.h={};this.g=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;var g=new WeakMap;f.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.h[l.id]=[]);l.o?l.o.value=k:(l.o={next:this.g,A:this.g.A,head:this.g,key:h,value:k},l.list.push(l.o),this.g.A.next=l.o,this.g.A=l.o,this.size++);return this};f.prototype.delete=function(h){h=d(this,h);return h.o&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.h[h.id],h.o.A.next=h.o.next,h.o.next.A=h.o.A,h.o.head=null,this.size--,
!0):!1};f.prototype.clear=function(){this.h={};this.g=this.g.A=b();this.size=0};f.prototype.has=function(h){return!!d(this,h).o};f.prototype.get=function(h){return(h=d(this,h).o)&&h.value};f.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};f.prototype.keys=function(){return c(this,function(h){return h.key})};f.prototype.values=function(){return c(this,function(h){return h.value})};f.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,
h.call(k,m[1],m[0],this)};f.prototype[Symbol.iterator]=f.prototype.entries;var e=0;return f});function wa(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f}u("Array.prototype.entries",function(a){return a?a:function(){return wa(this,function(b,c){return[b,c]})}});u("Array.prototype.keys",function(a){return a?a:function(){return wa(this,function(b){return b})}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};var f=[],g="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof g){b=g.call(b);for(var e=0;!(g=b.next()).done;)f.push(c.call(d,g.value,e++))}else for(g=b.length,e=0;e<g;e++)f.push(c.call(d,b[e],e));return f}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var f=d.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(b,c||0)}});
u("String.prototype.replaceAll",function(a){return a?a:function(b,c){if(b instanceof RegExp&&!b.global)throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");return b instanceof RegExp?this.replace(b,c):this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c)}});u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)z(b,d)&&c.push([d,b[d]]);return c}});var xa=xa||{},A=this||self;
function ya(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function za(a,b,c){return a.call.apply(a.bind,arguments)}function Aa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,d);return a.apply(b,f)}}return function(){return a.apply(b,arguments)}}
function B(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?B=za:B=Aa;return B.apply(null,arguments)}function Ba(a,b){function c(){}c.prototype=b.prototype;a.U=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ga=function(d,f,g){for(var e=Array(arguments.length-2),h=2;h<arguments.length;h++)e[h-2]=arguments[h];return b.prototype[f].apply(d,e)}}function Ca(a){return a};var Da;var Ea=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Fa(a,b){return a<b?-1:a>b?1:0};function C(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return-1!=C().indexOf(a)};var Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ha=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)if(f in d&&!b.call(void 0,d[f],f,a))return!1;return!0};
function Ia(a,b){b=Ga(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};function Ja(a){var b=Ka;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)};var La=D("Opera"),Ma=D("Trident")||D("MSIE"),Na=D("Edge"),Oa=D("Gecko")&&!(-1!=C().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),Pa=-1!=C().toLowerCase().indexOf("webkit")&&!D("Edge"),Qa=Pa&&D("Mobile"),Ra;
a:{var Sa="",Ta=function(){var a=C();if(Oa)return/rv:([^\);]+)(\)|;)/.exec(a);if(Na)return/Edge\/([\d\.]+)/.exec(a);if(Ma)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Pa)return/WebKit\/(\S+)/.exec(a);if(La)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ta&&(Sa=Ta?Ta[1]:"");if(Ma){var E,Ua=A.document;E=Ua?Ua.documentMode:void 0;if(null!=E&&E>parseFloat(Sa)){Ra=String(E);break a}}Ra=Sa}var Va=Ra,Ka={};
function Wa(){return Ja(function(){for(var a=0,b=Ea(String(Va)).split("."),c=Ea("9").split("."),d=Math.max(b.length,c.length),f=0;0==a&&f<d;f++){var g=b[f]||"",e=c[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""];if(0==g[0].length&&0==e[0].length)break;a=Fa(0==g[1].length?0:parseInt(g[1],10),0==e[1].length?0:parseInt(e[1],10))||Fa(0==g[2].length,0==e[2].length)||Fa(g[2],e[2]);g=g[3];e=e[3]}while(0==a)}return 0<=a})};var Xa={},F=null;
function Ya(a){var b;void 0===b&&(b=0);if(!F){F={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=c.concat(d[f].split(""));Xa[f]=g;for(var e=0;e<g.length;e++){var h=g[e];void 0===F[h]&&(F[h]=e)}}}b=Xa[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(f=g=0;g<a.length-2;g+=3){var k=a[g],l=a[g+1];h=a[g+2];e=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[f++]=""+e+k+l+h}e=0;h=d;switch(a.length-g){case 2:e=
a[g+1],h=b[(e&15)<<2]||d;case 1:a=a[g],c[f]=""+b[a>>2]+b[(a&3)<<4|e>>4]+h+d}return c.join("")};var Za="undefined"!==typeof Uint8Array,$a={};var ab;function bb(a){if($a!==$a)throw Error("illegal external caller");this.aa=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");};var G="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function H(a,b){Object.isFrozen(a)||(G?a[G]|=b:void 0!==a.u?a.u|=b:Object.defineProperties(a,{u:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}function cb(a,b){Object.isExtensible(a)&&(G?a[G]&&(a[G]&=~b):void 0!==a.u&&(a.u&=~b))}function I(a){var b;G?b=a[G]:b=a.u;return null==b?0:b}function J(a){H(a,1);return a}function K(a){return a?!!(I(a)&2):!1}function db(a){H(a,16);return a}
function eb(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");cb(a,16)};function L(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var fb=Object.freeze(J([]));function N(a){if(K(a.j))throw Error("Cannot mutate an immutable Message");}var gb="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function hb(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};function ib(a){return a.displayName||a.name||"unknown type name"}function jb(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ib(b)+" but got "+(a&&ib(a.constructor)));return a};function kb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(Za&&null!=a&&a instanceof Uint8Array)return Ya(a);if(a instanceof bb){var b=a.aa;b=null==b||"string"===typeof b?b:Za&&b instanceof Uint8Array?Ya(b):null;return null==b?"":a.aa=b}}}return a};function lb(a,b,c){if(null!=a){if(Array.isArray(a))a=mb(a,b,c);else if(L(a)){var d={},f;for(f in a)d[f]=lb(a[f],b,c);a=d}else a=b(a);return a}}function mb(a,b,c){var d=Array.prototype.slice.call(a);c(a,d);for(a=0;a<d.length;a++)d[a]=lb(d[a],b,c);return d}function nb(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=kb(a);return Array.isArray(a)?mb(a,nb,ob):a}function ob(){};function pb(a){return a.h||(a.h=a.j[a.i+a.B]={})}function qb(a,b,c){return-1===b?null:b>=a.i?a.h?a.h[b]:void 0:(void 0===c?0:c)&&a.h&&(c=a.h[b],null!=c)?c:a.j[b+a.B]}function O(a,b,c,d){d=void 0===d?!1:d;N(a);if(b>=a.i||d)return pb(a)[b]=c,a;if(void 0!==a.h&&a.i>=a.j.length){d=a.j.length-1;var f=b+a.B;f>=d?(a.j[d]=void 0,a.j[f]=c,a.j.push(a.h)):a.j[f]=c}else a.j[b+a.B]=c;void 0!==a.h&&b in a.h&&delete a.h[b];return a}function P(a,b){a=qb(a,b);a=null==a?a:!!a;return null==a?!1:a}
function Q(a,b){N(a);O(a,b,void 0,!1);return a}function rb(a,b,c,d){N(a);a.g||(a.g={});null==d?b=d=void 0:b=jb(d,b).j;a.g[c]=d;return O(a,c,b)};function sb(a,b,c){a||(a=tb);tb=null;var d=this.constructor.g||0,f=0<d,g=this.constructor.h;a?I(a)&16&&H(a,32):(a=g?[g]:[],H(a,48));f&&0<a.length&&L(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.B=(g?0:-1)-d;this.g=void 0;this.j=a;a:{g=this.j.length;d=g-1;if(g&&(g=this.j[d],L(g))){this.h=g;b=Object.keys(g);0<b.length&&Ha(b,isNaN)?this.i=Number.MAX_VALUE:this.i=d-this.B;break a}void 0!==b&&-1<b?(this.i=Math.max(b,d+1-this.B),this.h=void 0):this.i=Number.MAX_VALUE}if(!f&&this.h&&"g"in this.h)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(c)for(f=0;f<c.length;f++)b=c[f],b<this.i?(b+=this.B,(d=this.j[b])?Array.isArray(d)&&J(d):this.j[b]=fb):(d=pb(this),(g=d[b])?Array.isArray(g)&&J(g):d[b]=fb)}sb.prototype.toJSON=function(){return mb(this.j,nb,ob)};sb.prototype.toString=function(){return this.j.toString()};var tb;function R(){sb.apply(this,arguments)}w(R,sb);R.prototype.Z=function(){return this};if(gb){var ub={};Object.defineProperties(R,(ub[Symbol.hasInstance]=hb(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),ub))};function vb(a,b,c,d,f,g){if(a=a.g&&a.g[c])if(Array.isArray(a)){d=g.S?J(a.slice()):a;a=0<d.length?d[0].constructor:void 0;N(b);if(null!=d){f=J([]);g=!1;for(var e=0;e<d.length;e++)f[e]=jb(d[e],a).j,g=g||K(f[e]);b.g||(b.g={});b.g[c]=d;d=f;g?cb(d,8):H(d,8)}else b.g&&(b.g[c]=void 0),f=fb;O(b,c,f)}else rb(b,a.constructor,c,a);else Za&&d instanceof Uint8Array?f=d.length?new bb(new Uint8Array(d)):ab||(ab=new bb(null)):(Array.isArray(d)&&(f?H(d,2):d&&I(d)&1&&g.S?(f=Array.prototype.slice.call(d),g=(I(d)|0)&
-51,G?f[G]=g:void 0!==f.u?f.u=g:Object.defineProperties(f,{u:{value:g,configurable:!0,writable:!0,enumerable:!1}}),d=f):eb(d)),f=d),O(b,c,f)};function S(){R.apply(this,arguments)}w(S,R);S.prototype.Z=function(){if(K(this.j)){var a={S:!0};var b=K(this.j);if(b&&!a.S)throw Error("copyRepeatedFields must be true for frozen messages");b||eb(this.j);var c=new this.constructor;this.W&&(c.W=this.W.slice());for(var d=this.j,f=0;f<d.length;f++){var g=d[f];if(f===d.length-1&&L(g))for(var e in g){var h=+e;Number.isNaN(h)?pb(c)[e]=g[e]:vb(this,c,h,g[e],b,a)}else vb(this,c,f-this.B,g,b,a)}a=c}else a=this;return a};
if(gb){var wb={};Object.defineProperties(S,(wb[Symbol.hasInstance]=hb(Object[Symbol.hasInstance]),wb))};/*

 SPDX-License-Identifier: Apache-2.0
*/
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var g=0;g<xb.length;g++)c=xb[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var zb;function Ab(a,b){this.g=b===Bb?a:""}Ab.prototype.toString=function(){return this.g+""};function Cb(a){return a instanceof Ab&&a.constructor===Ab?a.g:"type_error:TrustedResourceUrl"}var Bb={};function Db(a){if(void 0===zb){var b=null;var c=A.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("uf-api#html",{createHTML:Ca,createScript:Ca,createScriptURL:Ca})}catch(d){A.console&&A.console.error(d.message)}zb=b}else zb=b}a=(b=zb)?b.createScriptURL(a):a;return new Ab(a,Bb)};function Eb(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)};function Fb(a){var b=va.apply(1,arguments);if(0===b.length)return Db(a[0]);for(var c=[a[0]],d=0;d<b.length;d++)c.push(encodeURIComponent(b[d])),c.push(a[d+1]);return Db(c.join(""))};try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){};var Gb=/^[\w+/_-]+[=]{0,2}$/;function Hb(a){a=(a||A).document;return a.querySelector?(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Gb.test(a)?a:"":""};function Ib(a){this.g=a||A.document||document};function T(){this.m=this.m;this.v=this.v}T.prototype.m=!1;T.prototype.isDisposed=function(){return this.m};T.prototype.L=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function Jb(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=!1};var Kb="closure_listenable_"+(1E6*Math.random()|0);var Lb=0;function Mb(a,b,c,d,f){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.T=f;this.key=++Lb;this.N=this.R=!1}function Nb(a){a.N=!0;a.listener=null;a.proxy=null;a.src=null;a.T=null};function Ob(a){this.src=a;this.g={};this.h=0}Ob.prototype.add=function(a,b,c,d,f){var g=a.toString();a=this.g[g];a||(a=this.g[g]=[],this.h++);var e=Pb(a,b,d,f);-1<e?(b=a[e],c||(b.R=!1)):(b=new Mb(b,this.src,g,!!d,f),b.R=c,a.push(b));return b};function Qb(a,b){var c=b.type;c in a.g&&Ia(a.g[c],b)&&(Nb(b),0==a.g[c].length&&(delete a.g[c],a.h--))}function Pb(a,b,c,d){for(var f=0;f<a.length;++f){var g=a[f];if(!g.N&&g.listener==b&&g.capture==!!c&&g.T==d)return f}return-1};var Rb="closure_lm_"+(1E6*Math.random()|0),Sb={},Tb=0;
function Ub(a,b,c,d,f){if(Array.isArray(b))for(var g=0;g<b.length;g++)Ub(a,b[g],c,d,f);else(d=ya(d)?!!d.capture:!!d,c=Vb(c),a&&a[Kb])?(a=a.i,b=String(b).toString(),b in a.g&&(g=a.g[b],c=Pb(g,c,d,f),-1<c&&(Nb(g[c]),Array.prototype.splice.call(g,c,1),0==g.length&&(delete a.g[b],a.h--)))):a&&(a=Wb(a))&&(b=a.g[b.toString()],a=-1,b&&(a=Pb(b,c,d,f)),(c=-1<a?b[a]:null)&&"number"!==typeof c&&c&&!c.N&&((f=c.src)&&f[Kb]?Qb(f.i,c):(d=c.type,b=c.proxy,f.removeEventListener?f.removeEventListener(d,b,c.capture):
f.detachEvent?f.detachEvent(d in Sb?Sb[d]:Sb[d]="on"+d,b):f.addListener&&f.removeListener&&f.removeListener(b),Tb--,(d=Wb(f))?(Qb(d,c),0==d.h&&(d.src=null,f[Rb]=null)):Nb(c))))}function Wb(a){a=a[Rb];return a instanceof Ob?a:null}var Xb="__closure_events_fn_"+(1E9*Math.random()>>>0);function Vb(a){if("function"===typeof a)return a;a[Xb]||(a[Xb]=function(b){return a.handleEvent(b)});return a[Xb]};function U(){T.call(this);this.i=new Ob(this);this.ba=this;this.K=null}Ba(U,T);U.prototype[Kb]=!0;U.prototype.removeEventListener=function(a,b,c,d){Ub(this,a,b,c,d)};
function V(a,b){var c=a.K;if(c){var d=[];for(var f=1;c;c=c.K)d.push(c),++f}a=a.ba;c=b.type||b;"string"===typeof b?b=new Jb(b,a):b instanceof Jb?b.target=b.target||a:(f=b,b=new Jb(c,a),yb(b,f));f=!0;if(d)for(var g=d.length-1;0<=g;g--){var e=b.g=d[g];f=Yb(e,c,!0,b)&&f}e=b.g=a;f=Yb(e,c,!0,b)&&f;f=Yb(e,c,!1,b)&&f;if(d)for(g=0;g<d.length;g++)e=b.g=d[g],f=Yb(e,c,!1,b)&&f}
U.prototype.L=function(){U.U.L.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.g){for(var d=a.g[c],f=0;f<d.length;f++)++b,Nb(d[f]);delete a.g[c];a.h--}}this.K=null};function Yb(a,b,c,d){b=a.i.g[String(b)];if(!b)return!0;b=b.concat();for(var f=!0,g=0;g<b.length;++g){var e=b[g];if(e&&!e.N&&e.capture==c){var h=e.listener,k=e.T||e.src;e.R&&Qb(a.i,e);f=!1!==h.call(k,d)&&f}}return f&&!d.defaultPrevented};function Zb(a){try{return A.JSON.parse(a)}catch(b){}a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function $b(){}$b.prototype.g=null;function ac(a){var b;(b=a.g)||(b={},bc(a)&&(b[0]=!0,b[1]=!0),b=a.g=b);return b};var cc;function dc(){}Ba(dc,$b);function ec(a){return(a=bc(a))?new ActiveXObject(a):new XMLHttpRequest}function bc(a){if(!a.h&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.h=d}catch(f){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.h}cc=new dc;function fc(a,b,c){if("function"===typeof a)c&&(a=B(a,c));else if(a&&"function"==typeof a.handleEvent)a=B(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:A.setTimeout(a,b||0)};var gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hc(a){U.call(this);this.headers=new Map;this.D=a||null;this.h=!1;this.G=this.g=null;this.J="";this.l=this.I=this.s=this.H=!1;this.F=0;this.C=null;this.V="";this.O=this.P=!1}Ba(hc,U);var ic=/^https?$/i,jc=["POST","PUT"],kc=[];function lc(a,b){var c=new hc;kc.push(c);b&&c.i.add("complete",b,!1,void 0,void 0);c.i.add("ready",c.ca,!0,void 0,void 0);c.F=2E3;c.P=!0;mc(c,a)}n=hc.prototype;n.ca=function(){this.m||(this.m=!0,this.L());Ia(kc,this)};
function mc(a,b){var c={};if(a.g)throw Error("[goog.net.XhrIo] Object is active with another request="+a.J+"; newUri="+b);a.J=b;a.H=!1;a.h=!0;a.g=a.D?ec(a.D):ec(cc);a.G=a.D?ac(a.D):ac(cc);a.g.onreadystatechange=B(a.X,a);try{a.I=!0,a.g.open("GET",String(b),!0),a.I=!1}catch(g){nc(a);return}b=new Map(a.headers);if(c)if(Object.getPrototypeOf(c)===Object.prototype)for(var d in c)b.set(d,c[d]);else if("function"===typeof c.keys&&"function"===typeof c.get){d=v(c.keys());for(var f=d.next();!f.done;f=d.next())f=
f.value,b.set(f,c.get(f))}else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(b.keys()).find(function(g){return"content-type"==g.toLowerCase()});d=A.FormData&&!1;!(0<=Ga(jc,"GET"))||c||d||b.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(b);for(c=b.next();!c.done;c=b.next())d=v(c.value),c=d.next().value,d=d.next().value,a.g.setRequestHeader(c,d);a.V&&(a.g.responseType=a.V);"withCredentials"in a.g&&a.g.withCredentials!==a.P&&(a.g.withCredentials=
a.P);try{oc(a),0<a.F&&(a.O=pc(a.g),a.O?(a.g.timeout=a.F,a.g.ontimeout=B(a.Y,a)):a.C=fc(a.Y,a.F,a)),a.s=!0,a.g.send(""),a.s=!1}catch(g){nc(a)}}function pc(a){return Ma&&Wa()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}n.Y=function(){"undefined"!=typeof xa&&this.g&&(V(this,"timeout"),this.abort(8))};function nc(a){a.h=!1;a.g&&(a.l=!0,a.g.abort(),a.l=!1);qc(a);rc(a)}function qc(a){a.H||(a.H=!0,V(a,"complete"),V(a,"error"))}
n.abort=function(){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,V(this,"complete"),V(this,"abort"),rc(this))};n.L=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rc(this,!0));hc.U.L.call(this)};n.X=function(){this.isDisposed()||(this.I||this.s||this.l?sc(this):this.fa())};n.fa=function(){sc(this)};
function sc(a){if(a.h&&"undefined"!=typeof xa&&(!a.G[1]||4!=(a.g?a.g.readyState:0)||2!=tc(a)))if(a.s&&4==(a.g?a.g.readyState:0))fc(a.X,0,a);else if(V(a,"readystatechange"),4==(a.g?a.g.readyState:0)){a.h=!1;try{var b=tc(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var f;if(f=0===b){var g=String(a.J).match(gc)[1]||null;!g&&A.self&&A.self.location&&(g=A.self.location.protocol.slice(0,-1));f=!ic.test(g?g.toLowerCase():"")}d=
f}d?(V(a,"complete"),V(a,"success")):qc(a)}finally{rc(a)}}}function rc(a,b){if(a.g){oc(a);var c=a.g,d=a.G[0]?function(){}:null;a.g=null;a.G=null;b||V(a,"ready");try{c.onreadystatechange=d}catch(f){}}}function oc(a){a.g&&a.O&&(a.g.ontimeout=null);a.C&&(A.clearTimeout(a.C),a.C=null)}n.isActive=function(){return!!this.g};function tc(a){try{return 2<(a.g?a.g.readyState:0)?a.g.status:-1}catch(b){return-1}};function W(a){S.call(this,a)}w(W,S);n=W.prototype;n.getEnableSsEngine=function(){return P(this,2)};n.getEnableAwr=function(){return P(this,3)};n.getEnableHelpSuggestions=function(){return P(this,4)};n.getAlohaAutoGaRollout=function(){return P(this,5)};n.getEnableConfigurator=function(){return P(this,6)};n.getEnableMweb=function(){return P(this,7)};n.getEnableCtlConsentCheckbox=function(){return P(this,8)};n.getEnableIframe=function(){return P(this,9)};function uc(a){S.call(this,a)}w(uc,S);var vc=["https://sandbox.google.com/tools/feedback"];var wc="af am ar-EG ar-JO ar-MA ar-SA ar-XB ar az be bg bn bs ca cs cy da de-AT de-CH de el en en-GB en-AU en-CA en-IE en-IN en-NZ en-SG en-XA en-XC en-ZA es es-419 es-AR es-BO es-CL es-CO es-CR es-DO es-EC es-GT es-HN es-MX es-NI es-PA es-PE es-PR es-PY es-SV es-US es-UY es-VE et eu fa fi fil fr-CA fr-CH fr gl gsw gu he hi hr hu hy id in is it iw ja ka kk km kn ko ky ln lo lt lv mk ml mn mo mr ms my nb ne nl no pa pl pt pt-BR pt-PT ro ru si sk sl sq sr-Latn sr sv sw ta te th tl tr uk ur uz vi zh zh-CN zh-HK zh-TW zu".split(" ");
function xc(a){var b;return null==(b=a.formContent)?void 0:b.locale};var yc=da(["https://www.gstatic.com/uservoice/feedback/client/web/","/main_binary__",".js"]);function zc(a){var b=xc(a);b=(b&&wc.includes(b)?xc(a):"en").replaceAll("-","_").toLowerCase();var c;a=(null==(c=a.initializationData)?0:c.useNightlyRelease)?"nightly":"live";return Fb(yc,a,b)};var Ac;function Bc(a,b,c){if(Ac)return Ac;var d=zc(a);return Ac=b.feedbackV2GlobalObject?Promise.resolve(b.feedbackV2GlobalObject):new Promise(function(f,g){var e=c.createElement("script");e.src=Cb(d);Eb(e);e.onload=function(){b.feedbackV2GlobalObject?f(b.feedbackV2GlobalObject):g("feedbackV2GlobalObject not found on window.")};e.onerror=function(){g("Feedback binary script tag failed to load: "+d.toString())};c.body.appendChild(e)})}
function Cc(a,b,c,d,f){f=void 0===f?!0:f;var g,e,h,k,l;return ua(function(m){switch(m.h){case 1:g=Date.now();var q=Bc(a,c,d);m.h=2;return{value:q};case 2:e=m.m;if(!(f||(null==(k=a.initializationData)?0:k.useNightlyRelease)||(null==(l=a.initializationData)?0:l.isLocalServer))){h=e.initializeFeedbackClient(a,g,b);m.h=3;break}q=e.initializeFeedbackClientAsync(a,g,b);m.h=4;return{value:q};case 4:h=m.m;case 3:return h.initiateAloha(),m.return(h)}})}
function Dc(a,b,c){var d=!0;d=void 0===d?!0:d;var f,g,e,h;ua(function(k){g=f=c||A;if(g.isFormOpened)throw e=Error("Form is either loading or already opened"),e.name="DuplicateFormError",e;g.isFormOpened=!0;a.callbacks=a.callbacks||{};h=a.callbacks.onClose||function(){};a.callbacks.onClose=function(l){g.isFormOpened=!1;h(l)};try{return k.return(Cc(a,b,g,f.document,d))}catch(l){throw g.isFormOpened=!1,l;}})};function Ec(a,b){return ua(function(c){return c.return(new Promise(function(d){var f=Fc(null!=b?b:"")+"/aloha_form_properties?productId="+a;lc(f,function(g){var e=g.target;g=null;try{var h=JSON,k=h.stringify;if(e.g){var l=e.g.responseText;0==l.indexOf(")]}'\n")&&(l=l.substring(5));b:{if(A.JSON)try{var m=A.JSON.parse(l);break b}catch(M){}m=Zb(l)}}else m=void 0;var q=k.call(h,m);if(null==q||""==q)g=new uc;else{var p=JSON.parse(q);if(!Array.isArray(p))throw k=typeof p,Error("Expected to deserialize an Array but got "+
("object"!=k?k:p?Array.isArray(p)?"array":k:"null")+": "+p);tb=p;db(p);var x=new uc(p);tb=null;g=x}}catch(M){p=new uc,k=new W,k=Q(k,5),k=Q(k,2),k=Q(k,4),k=Q(k,8),k=Q(k,9),k=Q(k,7),g=rb(p,W,1,k)}d(g)})}))})}function Fc(a){return vc.includes(a)?a:"https://www.google.com/tools/feedback"};function Gc(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||A,f=d.document,g=a.nonce||Hb(d);g&&!a.nonce&&(a.nonce=g);if("help"==a.flow){a:{var e=["document","location","href"];for(var h=d||A,k=0;k<e.length;k++)if(h=h[e[k]],null==h){e=null;break a}e=h}!a.helpCenterContext&&e&&(a.helpCenterContext=e.substring(0,1200));e=!0;b&&JSON&&JSON.stringify&&(h=JSON.stringify(b),(e=1200>=h.length)&&(a.psdJson=h));e||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";
if(e=d.GOOGLE_FEEDBACK_START)e.apply(d,b);else{d=c+"/load.js?";for(var l in a)b=a[l],null==b||ya(b)||(d+=encodeURIComponent(l)+"="+encodeURIComponent(b)+"&");a=(f?new Ib(9==f.nodeType?f:f.ownerDocument||f.document):Da||(Da=new Ib)).g;l="SCRIPT";"application/xhtml+xml"===a.contentType&&(l=l.toLowerCase());a=a.createElement(l);g&&a.setAttribute("nonce",g);g=Db(d);a.src=Cb(g);Eb(a);f.body.appendChild(a)}}
function Hc(a,b,c){try{"submit"===a.flow||"help"===a.flow||a.tinyNoPointer?Gc(a,b,c):Ec(a.productId,a.serverUri).then(function(d){var f=void 0===f?!1:f;d.g||(d.g={});var g=d.g[1];if(g)var e=g;else{g=qb(d,1,f);e=void 0===e?!1:e;var h=void 0===h?!1:h;e=Array.isArray(g)?new W(h?db(g):g):e?new W:void 0;e&&(d.g[1]=e,H(e.j,I(d.j)&-33))}null!=e&&K(e.j)&&!K(d.j)&&(e=e.Z(),O(d,1,e.j,f),d.g[1]=e);d=e;null==d||!d.getAlohaAutoGaRollout()||Qa&&!d.getEnableMweb()?Gc(a,b,c):(f=c||A,e="DEV"===a.serverEnvironment,
h=c||A,h=a.nonce||Hb(h),e={integrationKeys:{productId:a.productId,feedbackBucket:a.bucket},callbacks:{onClose:a.callback,onLoad:a.onLoadCallback},formContent:{locale:a.locale,disableScreenshot:a.disableScreenshotting,productDisplayName:void 0,announcement:void 0,issueCategories:void 0,includeSeveritySelection:void 0,customImageSrc:void 0,thankYouMessage:void 0,ha:void 0,defaultFormInputValues:void 0,defaultFormInputValuesString:void 0,abuseLink:a.abuseLink},initializationData:{isLocalServer:e,nonce:h,
useNightlyRelease:e,feedbackJsUrl:void 0,feedbackCssUrl:void 0,feedbackJsUrlSerialized:void 0,feedbackCssUrlSerialized:void 0,submissionServerUri:a.serverUri,colorScheme:a.colorScheme},extraData:{productVersion:a.productVersion,authUser:a.authuser,configuratorId:a.configuratorId,customZIndex:a.customZIndex,tinyNoPointer:a.tinyNoPointer,allowNonLoggedInFeedback:a.allowNonLoggedInFeedback,enableAnonymousFeedback:a.enableAnonymousFeedback}},b&&(h=new Map(Object.entries(b)),e.extraData.productSpecificData=
h),Dc(e,d,f))},function(d){d&&"DuplicateFormError"!==d.name&&Gc(a,b,c)})}catch(d){Gc(a,b,c)}}var X=["userfeedback","api","startFeedback"],Y=A;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Hc?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Hc;}).call(this);
