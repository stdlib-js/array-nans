// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-full@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";var s=new e(NaN,NaN),l=new t(NaN,NaN),m=["float64","float32","complex128","complex64","generic"];function n(e){var t;if(arguments.length>1){if(t=arguments[1],-1===m.indexOf(t))throw new TypeError(r("1ZnGN,Mn",m.join('", "'),t))}else t="float64";return o(e,"complex128"===t?s:"complex64"===t?l:NaN,t)}export{n as default};
//# sourceMappingURL=index.mjs.map
