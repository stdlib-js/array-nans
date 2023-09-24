"use strict";var l=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var t=l(function(x,o){
var i=require('@stdlib/complex-float64/dist'),u=require('@stdlib/complex-float32/dist'),s=require('@stdlib/array-full/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),m=new i(NaN,NaN),v=new u(NaN,NaN),n=["float64","float32","complex128","complex64","generic"];function p(a){var e,r;if(arguments.length>1){if(e=arguments[1],n.indexOf(e)===-1)throw new TypeError(f('1ZnDQ',n.join('", "'),e))}else e="float64";return e==="complex128"?r=m:e==="complex64"?r=v:r=NaN,s(a,r,e)}o.exports=p
});var N=t();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
