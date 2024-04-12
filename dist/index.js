"use strict";var o=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var n=o(function(_,t){
var u=require('@stdlib/array-base-assert-contains/dist').factory,l=require('@stdlib/complex-float64/dist'),s=require('@stdlib/complex-float32/dist'),v=require('@stdlib/array-full/dist'),f=require('@stdlib/array-defaults/dist'),p=require('@stdlib/array-dtypes/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist'),g=new l(NaN,NaN),N=new s(NaN,NaN),i=p("floating_point_and_generic"),c=u(i),d=f.get("dtypes.real_floating_point");function q(a){var e,r;if(arguments.length>1){if(e=arguments[1],!c(e))throw new TypeError(m('1ZnDQ',i.join('", "'),e))}else e=d;return e==="complex128"?r=g:e==="complex64"?r=N:r=NaN,v(a,r,e)}t.exports=q
});var x=n();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
