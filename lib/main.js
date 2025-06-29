/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var f32 = require( '@stdlib/number-float64-base-to-float32' );
var evalrational = require( './rational_pq.js' );


// MAIN //

/**
* Calculates the Lanczos sum for the approximation of the gamma function (scaled by `exp(-g)`, where `g = 1.42845618724823`) as a single precision floating-point number.
*
* @param {number} x - input value
* @returns {number} Lanczos sum approximation
*
* @example
* var v = gammaLanczosSumExpGScaledf( 4.0 );
* // returns ~0.748
*
* @example
* var v = gammaLanczosSumExpGScaledf( -1.5 );
* // returns ~0.193
*
* @example
* var v = gammaLanczosSumExpGScaledf( -0.5 );
* // returns ~-0.558
*
* @example
* var v = gammaLanczosSumExpGScaledf( 0.5 );
* // returns ~1.772
*
* @example
* var v = gammaLanczosSumExpGScaledf( 0.0 );
* // returns Infinity
*
* @example
* var v = gammaLanczosSumExpGScaledf( NaN );
* // returns NaN
*/
function gammaLanczosSumExpGScaledf( x ) {
	return evalrational( f32( x ) );
}


// EXPORTS //

module.exports = gammaLanczosSumExpGScaledf;
