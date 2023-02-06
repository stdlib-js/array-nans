// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nans=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(e,r,t.get),s&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(e){return"number"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return s&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(e,r){return null!=e&&p.call(e,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var b=h()?function(e){var r,t,n;if(null==e)return m.call(e);t=e[w],r=g(e,w);try{e[w]=void 0}catch(r){return m.call(e)}return n=m.call(e),r?e[w]=t:delete e[w],n}:function(e){return m.call(e)},v=Number,d=v.prototype.toString;var E=h();function _(e){return"object"==typeof e&&(e instanceof v||(E?function(e){try{return d.call(e),!0}catch(e){return!1}}(e):"[object Number]"===b(e)))}function T(e){return y(e)||_(e)}function A(e,r){if(!(this instanceof A))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!y(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!y(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(T,"isPrimitive",y),c(T,"isObject",_),c(A,"BYTES_PER_ELEMENT",8),c(A.prototype,"BYTES_PER_ELEMENT",8),c(A.prototype,"byteLength",16),c(A.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(A.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var j="function"==typeof Math.fround?Math.fround:null,x="function"==typeof Float32Array;var B=Number.POSITIVE_INFINITY,L="function"==typeof Float32Array?Float32Array:null;var V="function"==typeof Float32Array?Float32Array:void 0;var S=function(){var e,r,t;if("function"!=typeof L)return!1;try{r=new L([1,3.14,-3.14,5e40]),t=r,e=(x&&t instanceof Float32Array||"[object Float32Array]"===b(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===B}catch(r){e=!1}return e}()?V:function(){throw new Error("not implemented")},R=new S(1);var k="function"==typeof j?j:function(e){return R[0]=e,R[0]};function N(e,r){if(!(this instanceof N))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!y(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!y(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:k(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:k(r)}),this}c(N,"BYTES_PER_ELEMENT",4),c(N.prototype,"BYTES_PER_ELEMENT",4),c(N.prototype,"byteLength",8),c(N.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(N.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var I=v.NEGATIVE_INFINITY,O=Math.floor;function M(e){return O(e)===e}function C(e){return e<B&&e>I&&M(e)}function U(e){return y(e)&&C(e)}function F(e){return _(e)&&C(e.valueOf())}function P(e){return U(e)||F(e)}function Y(e){return U(e)&&e>=0}function W(e){return F(e)&&e.valueOf()>=0}function G(e){return Y(e)||W(e)}c(P,"isPrimitive",U),c(P,"isObject",F),c(G,"isPrimitive",Y),c(G,"isObject",W);var J="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null;var X="function"==typeof Float64Array?Float64Array:void 0;var q=function(){var e,r,t;if("function"!=typeof z)return!1;try{r=new z([1,3.14,-3.14,NaN]),t=r,e=(J&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?X:function(){throw new Error("not implemented")},D="function"==typeof Int16Array;var H="function"==typeof Int16Array?Int16Array:null;var K="function"==typeof Int16Array?Int16Array:void 0;var Q=function(){var e,r,t;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,32768]),t=r,e=(D&&t instanceof Int16Array||"[object Int16Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?K:function(){throw new Error("not implemented")},Z="function"==typeof Int32Array;var $="function"==typeof Int32Array?Int32Array:null;var ee="function"==typeof Int32Array?Int32Array:void 0;var re=function(){var e,r,t;if("function"!=typeof $)return!1;try{r=new $([1,3.14,-3.14,2147483648]),t=r,e=(Z&&t instanceof Int32Array||"[object Int32Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?ee:function(){throw new Error("not implemented")},te="function"==typeof Int8Array;var ne="function"==typeof Int8Array?Int8Array:null;var oe="function"==typeof Int8Array?Int8Array:void 0;var ie=function(){var e,r,t;if("function"!=typeof ne)return!1;try{r=new ne([1,3.14,-3.14,128]),t=r,e=(te&&t instanceof Int8Array||"[object Int8Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?oe:function(){throw new Error("not implemented")},ae="function"==typeof Uint16Array;var ue="function"==typeof Uint16Array?Uint16Array:null;var fe="function"==typeof Uint16Array?Uint16Array:void 0;var le=function(){var e,r,t;if("function"!=typeof ue)return!1;try{r=new ue(r=[1,3.14,-3.14,65536,65537]),t=r,e=(ae&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?fe:function(){throw new Error("not implemented")},ce="function"==typeof Uint32Array;var ye="function"==typeof Uint32Array?Uint32Array:null;var se="function"==typeof Uint32Array?Uint32Array:void 0;var he=function(){var e,r,t;if("function"!=typeof ye)return!1;try{r=new ye(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ce&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?se:function(){throw new Error("not implemented")},me="function"==typeof Uint8Array;var pe="function"==typeof Uint8Array?Uint8Array:null;var ge="function"==typeof Uint8Array?Uint8Array:void 0;var we=function(){var e,r,t;if("function"!=typeof pe)return!1;try{r=new pe(r=[1,3.14,-3.14,256,257]),t=r,e=(me&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")},be="function"==typeof Uint8ClampedArray;var ve="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var de="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Ee=function(){var e,r,t;if("function"!=typeof ve)return!1;try{r=new ve([-1,0,1,3.14,4.99,255,256]),t=r,e=(be&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===b(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?de:function(){throw new Error("not implemented")};function _e(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&M(e.length)&&e.length>=0&&e.length<=4294967295}function Te(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&M(e.length)&&e.length>=0&&e.length<=9007199254740991}var Ae="function"==typeof ArrayBuffer;function je(e){return Ae&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===b(e)}var xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===b(e)};function Be(e){return"object"==typeof e&&null!==e&&!xe(e)}var Le=/./;function Ve(e){return"boolean"==typeof e}var Se=Boolean.prototype.toString;var Re=h();function ke(e){return"object"==typeof e&&(e instanceof Boolean||(Re?function(e){try{return Se.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===b(e)))}function Ne(e){return Ve(e)||ke(e)}function Ie(){return new Function("return this;")()}c(Ne,"isPrimitive",Ve),c(Ne,"isObject",ke);var Oe="object"==typeof self?self:null,Me="object"==typeof window?window:null,Ce="object"==typeof global?global:null;var Ue=function(e){if(arguments.length){if(!Ve(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Ie()}if(Oe)return Oe;if(Me)return Me;if(Ce)return Ce;throw new Error("unexpected error. Unable to resolve global object.")}(),Fe=Ue.document&&Ue.document.childNodes,Pe=Int8Array;function Ye(){return/^\s*function\s*([^(]*)/i}var We=/^\s*function\s*([^(]*)/i;function Ge(e){return null!==e&&"object"==typeof e}function Je(e){var r,t,n,o;if(("Object"===(t=b(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=We.exec(n.toString()))return r[1]}return Ge(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}c(Ye,"REGEXP",We),c(Ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!xe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ge));var ze="function"==typeof Le||"object"==typeof Pe||"function"==typeof Fe?function(e){return Je(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Je(e).toLowerCase():r};function Xe(e){return"function"===ze(e)}function qe(e){return e instanceof A||e instanceof N||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function De(e){return M(e/2)}function He(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}var Ke=He()?Symbol.iterator:null;function Qe(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function Ze(e){return e.re}function $e(e){return e.im}function er(e,r){return new S(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function rr(e,r){return new q(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function tr(e,r){return e[r]}function nr(e,r){return e.get(r)}function or(e,r,t){e[r]=t}function ir(e,r,t){e.set(t,r)}function ar(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?nr:tr,setter:r?ir:or}}function ur(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(_e(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!qe(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Ze(n),$e(n))}return r}function fr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,_e(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!qe(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Ze(i),$e(i))}return n}function lr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!qe(n=r[o]))return null;e[i]=Ze(n),e[i+1]=$e(n),i+=2}return e}var cr=2*S.BYTES_PER_ELEMENT,yr=He();function sr(e){return e instanceof gr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function hr(e){return e===gr||"Complex128Array"===e.name}function mr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===cr}function pr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*cr}function gr(){var e,r,t,n;if(r=arguments.length,!(this instanceof gr))return 0===r?new gr:1===r?new gr(arguments[0]):2===r?new gr(arguments[0],arguments[1]):new gr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new S(0);else if(1===r)if(Y(arguments[0]))t=new S(2*arguments[0]);else if(Te(arguments[0]))if((n=(t=arguments[0]).length)&&xe(t)&&qe(t[0])){if(null===(t=lr(new S(2*n),t))){if(!De(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new S(arguments[0])}}else{if(mr(t))t=er(t,0);else if(pr(t))t=rr(t,0);else if(!De(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new S(t)}else if(je(arguments[0])){if(!M((t=arguments[0]).byteLength/cr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+cr+". Byte length: `"+t.byteLength+"`.");t=new S(t)}else{if(!Be(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===yr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Xe(t[Ke]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Xe((t=t[Ke]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ur(t))instanceof Error)throw t;t=new S(t)}else{if(!je(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Y(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!M(e/cr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+cr+". Value: `"+e+"`.");if(2===r){if(!M((n=t.byteLength-e)/cr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+cr+". View byte length: `"+n+"`.");t=new S(t,e)}else{if(!Y(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*cr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*cr+"`.");t=new S(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function wr(e){return e.re}function br(e){return e.im}function vr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(_e(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!qe(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(wr(n),br(n))}return r}function dr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,_e(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!qe(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(wr(i),br(i))}return n}function Er(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!qe(n=r[o]))return null;e[i]=wr(n),e[i+1]=br(n),i+=2}return e}c(gr,"BYTES_PER_ELEMENT",cr),c(gr,"name","Complex64Array"),c(gr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!Xe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Xe(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(sr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(qe(l=n.call(r,e.get(c),c)))i[y]=Ze(l),i[y+1]=$e(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Te(e)){if(n){for(u=e.length,a=ar(e),c=0;c<u;c++)if(!qe(a.getter(e,c))){f=!0;break}if(f){if(!De(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(qe(l=n.call(r,a.getter(e,c),c)))i[y]=Ze(l),i[y+1]=$e(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Be(e)&&yr&&Xe(e[Ke])){if(!Xe((i=e[Ke]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?fr(i,n,r):ur(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(gr,"of",(function(){var e,r;if(!Xe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Qe(gr.prototype,"buffer",(function(){return this._buffer.buffer})),Qe(gr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Qe(gr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(gr.prototype,"BYTES_PER_ELEMENT",gr.BYTES_PER_ELEMENT),c(gr.prototype,"copyWithin",(function(e,r){if(!sr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(gr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!sr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new N(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Ke&&c(t,Ke,(function(){return r.entries()})),t})),c(gr.prototype,"get",(function(e){var r;if(!sr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Y(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new N((r=this._buffer)[e*=2],r[e+1])})),Qe(gr.prototype,"length",(function(){return this._length})),c(gr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!sr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Y(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(qe(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Ze(e),void(n[t+1]=$e(e))}if(sr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*cr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new S(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Te(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!qe(e[f])){i=!0;break}if(i){if(!De(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*cr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new S(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Ze(u),n[t+1]=$e(u),t+=2}}));var _r=2*q.BYTES_PER_ELEMENT,Tr=He();function Ar(e){return e instanceof Lr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function jr(e){return e===Lr||"Complex64Array"===e.name}function xr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===_r/2}function Br(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===_r}function Lr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Lr))return 0===r?new Lr:1===r?new Lr(arguments[0]):2===r?new Lr(arguments[0],arguments[1]):new Lr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new q(0);else if(1===r)if(Y(arguments[0]))t=new q(2*arguments[0]);else if(Te(arguments[0]))if((n=(t=arguments[0]).length)&&xe(t)&&qe(t[0])){if(null===(t=Er(new q(2*n),t))){if(!De(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new q(arguments[0])}}else{if(xr(t))t=er(t,0);else if(Br(t))t=rr(t,0);else if(!De(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new q(t)}else if(je(arguments[0])){if(!M((t=arguments[0]).byteLength/_r))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+_r+". Byte length: `"+t.byteLength+"`.");t=new q(t)}else{if(!Be(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Tr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Xe(t[Ke]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Xe((t=t[Ke]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=vr(t))instanceof Error)throw t;t=new q(t)}else{if(!je(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Y(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!M(e/_r))throw new RangeError("invalid argument. Byte offset must be a multiple of "+_r+". Value: `"+e+"`.");if(2===r){if(!M((n=t.byteLength-e)/_r))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+_r+". View byte length: `"+n+"`.");t=new q(t,e)}else{if(!Y(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*_r>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*_r+"`.");t=new q(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Lr,"BYTES_PER_ELEMENT",_r),c(Lr,"name","Complex128Array"),c(Lr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!Xe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Xe(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Ar(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(qe(l=n.call(r,e.get(c),c)))i[y]=wr(l),i[y+1]=br(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Te(e)){if(n){for(u=e.length,a=ar(e),c=0;c<u;c++)if(!qe(a.getter(e,c))){f=!0;break}if(f){if(!De(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(qe(l=n.call(r,a.getter(e,c),c)))i[y]=wr(l),i[y+1]=br(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Be(e)&&Tr&&Xe(e[Ke])){if(!Xe((i=e[Ke]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?dr(i,n,r):vr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Lr,"of",(function(){var e,r;if(!Xe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Qe(Lr.prototype,"buffer",(function(){return this._buffer.buffer})),Qe(Lr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Qe(Lr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Lr.prototype,"BYTES_PER_ELEMENT",Lr.BYTES_PER_ELEMENT),c(Lr.prototype,"copyWithin",(function(e,r){if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Lr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new A(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Ke&&c(t,Ke,(function(){return r.entries()})),t})),c(Lr.prototype,"get",(function(e){var r;if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Y(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new A((r=this._buffer)[e*=2],r[e+1])})),Qe(Lr.prototype,"length",(function(){return this._length})),c(Lr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Y(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(qe(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=wr(e),void(n[t+1]=br(e))}if(Ar(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*_r,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new q(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Te(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!qe(e[f])){i=!0;break}if(i){if(!De(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*_r,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new q(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=wr(u),n[t+1]=br(u),t+=2}}));var Vr={float64:q,float32:S,generic:Array,int16:Q,int32:re,int8:ie,uint16:le,uint32:he,uint8:we,uint8c:Ee,complex64:gr,complex128:Lr};function Sr(e){return Vr[e]||null}function Rr(e,r){var t,n;for(t=[],n=0;n<r;n++)t.push(e);return t}function kr(e,r,t,n,o){var i,a,u,f;for(i=t.data,a=t.setter,u=o,f=0;f<e;f++)a(i,u,r),u+=n;return t}function Nr(e,r,t,n){var o,i,a,u;if(e<=0)return t;if((u=ar(t)).accessors)return kr(e,r,u,n,o=n<0?(1-e)*n:0),u.data;if(1===n){if((a=e%8)>0)for(i=0;i<a;i++)t[i]=r;if(e<8)return t;for(i=a;i<e;i+=8)t[i]=r,t[i+1]=r,t[i+2]=r,t[i+3]=r,t[i+4]=r,t[i+5]=r,t[i+6]=r,t[i+7]=r;return t}for(o=n<0?(1-e)*n:0,i=0;i<e;i++)t[o]=r,o+=n;return t}function Ir(e,r){var t,n,o;if(!Y(e))throw new TypeError("invalid argument. First argument must be a nonnegative integer. Value: `"+e+"`.");if("generic"===(t=arguments.length>2?arguments[2]:"float64"))return Rr(r,e);if(null===(n=Sr(t)))throw new TypeError("invalid argument. Third argument must be a recognized data type. Value: `"+t+"`.");return Nr(e,r,o=new n(e),1),o}function Or(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}c(Nr,"ndarray",(function(e,r,t,n,o){var i,a,u,f;if(e<=0)return t;if((u=ar(t)).accessors)return kr(e,r,u,n,o),u.data;if(i=o,1===n){if((a=e%8)>0)for(f=0;f<a;f++)t[i]=r,i+=n;if(e<8)return t;for(f=a;f<e;f+=8)t[i]=r,t[i+1]=r,t[i+2]=r,t[i+3]=r,t[i+4]=r,t[i+5]=r,t[i+6]=r,t[i+7]=r,i+=8;return t}for(f=0;f<e;f++)t[i]=r,i+=n;return t}));var Mr=new A(NaN,NaN),Cr=new N(NaN,NaN),Ur=["float64","float32","complex128","complex64","generic"];return function(e){var r;if(arguments.length>1){if(r=arguments[1],-1===Ur.indexOf(r))throw new TypeError(Or('invalid argument. Second argument must be one of the following: "%s". Value: `%s`.',Ur.join('", "'),r))}else r="float64";return Ir(e,"complex128"===r?Mr:"complex64"===r?Cr:NaN,r)}}));
//# sourceMappingURL=index.js.map
