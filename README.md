<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# abs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the [absolute value][absolute-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [absolute value][absolute-value] is defined as

<!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

<div class="equation" align="center" data-raw-text="|x| = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ -x &amp; \textrm{if}\ x &lt; 0\end{cases}" data-equation="eq:absolute_value">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@61c5f878886bd5b3b98976501c974bf69f575238/lib/node_modules/@stdlib/math/special/abs/docs/img/equation_absolute_value.svg" alt="Absolute value">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-special-abs
```

</section>

<section class="usage">

## Usage

```javascript
var abs = require( '@stdlib/math-special-abs' );
```

#### abs( x\[, options] )

Computes the [absolute value][absolute-value]. 

```javascript
var y = abs( -1.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **x**: input [`ndarray`][@stdlib/ndarray/ctor], array-like object, or number. If provided an [`ndarray`][@stdlib/ndarray/ctor] or array-like object, the function performs element-wise computation.
-   **options**: function options.

If provided an [`ndarray`][@stdlib/ndarray/ctor], the function returns an [`ndarray`][@stdlib/ndarray/ctor] having the same shape and data type as `x`.

```javascript
var array = require( '@stdlib/ndarray-array' );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] ); // 2x2
var y = abs( x );
// returns <ndarray>

var v = y.get( 0, 1 );
// returns 2.0
```

If provided an array-like object, the function returns an array-like object having the same length and data type as `x`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -1.0, -2.0 ] );
var y = abs( x );
// returns <Float64Array>[ 1.0, 2.0 ]

x = [ -1.0, -2.0 ];
y = abs( x );
// returns [ 1.0, 2.0 ]
```

The function accepts the following `options`:

-   **dtype**: output array [data type][@stdlib/ndarray/dtypes]. Only applicable when `x` is either an [`ndarray`][@stdlib/ndarray/ctor] or array-like object. By default, the output array data type is inferred from the input array.
-   **order**: output array [order][@stdlib/ndarray/orders]. Only applicable when `x` is an [`ndarray`][@stdlib/ndarray/ctor]. By default, the output array order is inferred from the input array.

By default, when provided either an [`ndarray`][@stdlib/ndarray/ctor] or an array-like object, the function returns an object of the same "kind" (either an [`ndarray`][@stdlib/ndarray/ctor] or array-like object, respectively) having the same underlying [data type][@stdlib/ndarray/dtypes]. To specify a different output array [data type][@stdlib/ndarray/dtypes], set the `dtype` option.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -1.0, -2.0 ] );
var y = abs( x );
// returns <Float32Array>[ 1.0, 2.0 ]

x = new Float32Array( [ -1.0, -2.0 ] );
y = abs( x, {
    'dtype': 'float64'
});
// returns <Float64Array>[ 1.0, 2.0 ]
```

#### abs.assign( x, y )

Computes the [absolute value][absolute-value] and assigns results to a provided output array.

```javascript
var array = require( '@stdlib/ndarray-array' );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] ); // 2x2
var y = array( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ); // 2x2
var out = abs.assign( x, y );
// returns <ndarray>

var bool = ( out === y );
// returns true

var v = y.get( 0, 1 );
// returns 2.0
```

The output array must be the same data "kind" (i.e., [`ndarray`][@stdlib/ndarray/ctor] or array-like object) as the input array. For example, if `x` is an [`ndarray`][@stdlib/ndarray/ctor], `y` must also be an [`ndarray`][@stdlib/ndarray/ctor]. Similarly, if `x` is an array-like object, `y` must also be an array-like object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var array = require( '@stdlib/ndarray-array' );
var ind2sub = require( '@stdlib/ndarray-ind2sub' );
var abs = require( '@stdlib/math-special-abs' );

// Provide a number...
var v = abs( -1.0 );
console.log( 'x = %d => abs(x) = %d', -1.0, v );

// Provide an array-like object...
var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
var y = abs( x );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x_%d = %d => abs(x_%d) = %d', i, x[ i ], i, y[ i ] );
}

// Provide an ndarray...
x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
y = abs( x );

var sh = x.shape;
var sub;
for ( i = 0; i < x.length; i++ ) {
    sub = ind2sub( sh, i );
    console.log( 'x_%d%d = %d => abs(x_%d%d) = %d', sub[ 0 ], sub[ 1 ], x.iget( i ), sub[ 0 ], sub[ 1 ], y.iget( i ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-special-abs.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-special-abs

[test-image]: https://github.com/stdlib-js/math-special-abs/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-special-abs/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-special-abs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-special-abs?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-special-abs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-special-abs/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-special-abs/main/LICENSE

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

</section>

<!-- /.links -->