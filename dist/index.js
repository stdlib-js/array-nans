"use strict";var o=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var n=o(function(w,t){
var u=require('@stdlib/array-base-assert-contains/dist').factory,l=require('@stdlib/complex-float64-ctor/dist'),s=require('@stdlib/complex-float32-ctor/dist'),v=require('@stdlib/array-full/dist'),f=require('@stdlib/array-defaults/dist'),p=require('@stdlib/array-dtypes/dist'),m=require('@stdlib/array-base-join/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),N=new l(NaN,NaN),c=new s(NaN,NaN),i=p("floating_point_and_generic"),q=u(i),d=f.get("dtypes.real_floating_point");function x(a){var e,r;if(arguments.length>1){if(e=arguments[1],!q(e))throw new TypeError(g('1ZnDQ',m(i,'", "'),e))}else e=d;return e==="complex128"?r=N:e==="complex64"?r=c:r=NaN,v(a,r,e)}t.exports=x
});var y=n();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
