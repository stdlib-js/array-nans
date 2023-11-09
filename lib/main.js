/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var Complex128 = require( '@stdlib/complex-float64' );
var Complex64 = require( '@stdlib/complex-float32' );
var full = require( '@stdlib/array-full' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// VARIABLES //

var Z128 = new Complex128( NaN, NaN );
var Z64 = new Complex64( NaN, NaN );
var DTYPES = [ 'float64', 'float32', 'complex128', 'complex64', 'generic' ];


// MAIN //

/**
* Creates an array filled with NaNs and having a specified length.
*
* @param {NonNegativeInteger} length - array length
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a supported data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = nans( 2 );
* // returns <Float64Array>[ NaN, NaN ]
*
* @example
* var arr = nans( 2, 'float32' );
* // returns <Float32Array>[ NaN, NaN ]
*/
function nans( length ) {
	var dtype;
	var value;

	if ( arguments.length > 1 ) {
		dtype = arguments[ 1 ];
		if ( DTYPES.indexOf( dtype ) === -1 ) {
			throw new TypeError( format( '1ZnGN,Mn', DTYPES.join( '", "' ), dtype ) );
		}
	} else {
		dtype = 'float64';
	}
	if ( dtype === 'complex128' ) {
		value = Z128;
	} else if ( dtype === 'complex64' ) {
		value = Z64;
	} else {
		value = NaN;
	}
	return full( length, value, dtype );
}


// EXPORTS //

module.exports = nans;