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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# abs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [absolute value][@stdlib/math/base/special/abs] for each element in an [ndarray][@stdlib/ndarray/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-special-abs
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var abs = require( '@stdlib/math-special-abs' );
```

#### abs( x\[, options] )

Computes the [absolute value][@stdlib/math/base/special/abs] for each element in an [ndarray][@stdlib/ndarray/ctor].

```javascript
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var array = require( '@stdlib/ndarray-array' );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
var y = abs( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dtype**: output ndarray [data type][@stdlib/ndarray/dtypes]. Must be a real-valued or generic [data type][@stdlib/ndarray/dtypes].
-   **order**: output ndarray [order][@stdlib/ndarray/orders] (i.e., memory layout).

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a [data type][@stdlib/ndarray/dtypes] determined by the function's output data type [policy][@stdlib/ndarray/output-dtype-policies]. To override the default behavior, set the `dtype` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var array = require( '@stdlib/ndarray-array' );
var getDType = require( '@stdlib/ndarray-dtype' );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
var y = abs( x, {
    'dtype': 'generic'
});
// returns <ndarray>

var dt = getDType( y );
// returns 'generic'

var arr = ndarray2array( y );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having the same [order][@stdlib/ndarray/orders] as the input [ndarray][@stdlib/ndarray/ctor]. To return an [ndarray][@stdlib/ndarray/ctor] having a specific memory layout irrespective of the memory layout of the input [ndarray][@stdlib/ndarray/ctor], set the `order` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var array = require( '@stdlib/ndarray-array' );
var getOrder = require( '@stdlib/ndarray-order' );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
var y = abs( x, {
    'order': 'column-major'
});
// returns <ndarray>

var ord = getOrder( y );
// returns 'column-major'

var arr = ndarray2array( y );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

#### abs.assign( x, y )

Computes the [absolute value][@stdlib/math/base/special/abs] for each element in an [ndarray][@stdlib/ndarray/ctor] and assigns results to a provided output [ndarray][@stdlib/ndarray/ctor].

```javascript
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var array = require( '@stdlib/ndarray-array' );

var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
var y = array( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] );

var out = abs.assign( x, y );
// returns <ndarray>

var bool = ( out === y );
// returns true

var arr = ndarray2array( out );
// returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have a shape which is [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the shape of the output [ndarray][@stdlib/ndarray/ctor].
-   **y**: output [ndarray][@stdlib/ndarray/ctor].

The function supports broadcasting an input [ndarray][@stdlib/ndarray/ctor] to the shape of the output [ndarray][@stdlib/ndarray/ctor] without performing a physical copy of the input [ndarray][@stdlib/ndarray/ctor]'s underlying data.

```javascript
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var zeros = require( '@stdlib/ndarray-zeros' );
var array = require( '@stdlib/ndarray-array' );

// Create a 2x2 input ndarray:
var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );

// Create a 2x2x2 output ndarray:
var y = zeros( [ 2, 2, 2 ] );

var out = abs.assign( x, y );
// returns <ndarray>

var arr = ndarray2array( out );
// returns [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The output data type [policy][@stdlib/ndarray/output-dtype-policies] only applies to the main function and specifies that, by default, the function must return an [ndarray][@stdlib/ndarray/ctor] having a real-valued or "generic" [data type][@stdlib/ndarray/dtypes]. For the `assign` method, the output [ndarray][@stdlib/ndarray/ctor] is allowed to have any supported output [data type][@stdlib/ndarray/dtypes].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-uniform' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var abs = require( '@stdlib/math-special-abs' );

var x = uniform( [ 5, 5 ], -10.0, 10.0 );
console.log( ndarray2array( x ) );

var y = abs( x );
console.log( ndarray2array( y ) );
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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-special-abs.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-special-abs

[test-image]: https://github.com/stdlib-js/math-special-abs/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/math-special-abs/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-special-abs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-special-abs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-special-abs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-special-abs/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-special-abs/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-special-abs/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-special-abs/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-special-abs/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-special-abs/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-special-abs/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-special-abs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-special-abs/main/LICENSE

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math-base-special-abs

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray-output-dtype-policies

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
