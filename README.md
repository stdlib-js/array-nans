<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# nans

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an array filled with NaNs and having a specified length.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import nans from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-nans@v0.0.1-deno/mod.js';
```

#### nans( length\[, dtype] )

Creates an array filled with NaNs and having a specified length.

```javascript
var arr = nans( 2 );
// returns <Float64Array>[ NaN, NaN ]
```

The function recognizes the following data types:

-   `float64`: double-precision floating-point numbers (IEEE 754)
-   `float32`: single-precision floating-point numbers (IEEE 754)
-   `complex128`: double-precision complex floating-point numbers
-   `complex64`: single-precision complex floating-point numbers
-   `generic`: generic JavaScript values

By default, the output array data type is `float64` (i.e., a [typed array][mdn-typed-array]). To specify an alternative data type, provide a `dtype` argument.

```javascript
var arr = nans( 2, 'float32' );
// returns <Float32Array>[ NaN, NaN ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For complex number arrays, each element of the returned array has a real component equal to `NaN` and an imaginary component equal to `NaN`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-float-dtypes@deno/mod.js';
import nans from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-nans@v0.0.1-deno/mod.js';

// Get a list of array data types:
var dt = dtypes();

// Generate filled arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = nans( 4, dt[ i ] );
    console.log( arr );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-nans.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-nans

[test-image]: https://github.com/stdlib-js/array-nans/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/array-nans/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-nans/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-nans?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-nans.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-nans/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-nans/tree/deno
[umd-url]: https://github.com/stdlib-js/array-nans/tree/umd
[esm-url]: https://github.com/stdlib-js/array-nans/tree/esm
[branches-url]: https://github.com/stdlib-js/array-nans/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-nans/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
