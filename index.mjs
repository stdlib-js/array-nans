// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{factory as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.0.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@v0.0.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-full@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-defaults@v0.3.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtypes@v0.3.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var d=new s(NaN,NaN),m=new e(NaN,NaN),l=n("floating_point_and_generic"),a=t(l),p=i.get("dtypes.real_floating_point");function j(t){var s;if(arguments.length>1){if(!a(s=arguments[1]))throw new TypeError(o("1ZnDQ",l.join('", "'),s))}else s=p;return r(t,"complex128"===s?d:"complex64"===s?m:NaN,s)}export{j as default};
//# sourceMappingURL=index.mjs.map
