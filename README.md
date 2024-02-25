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

> Compute the [absolute value][absolute-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [absolute value][absolute-value] is defined as

<!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

```math
|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="|x| = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ -x &amp; \textrm{if}\ x &lt; 0\end{cases}" data-equation="eq:absolute_value">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@61c5f878886bd5b3b98976501c974bf69f575238/lib/node_modules/@stdlib/math/special/abs/docs/img/equation_absolute_value.svg" alt="Absolute value">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
abs = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-special-abs@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-special-abs/tags). For example,

```javascript
abs = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-special-abs@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var abs = require( 'path/to/vendor/umd/math-special-abs/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-special-abs@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.abs;
})();
</script>
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

TODO: broadcasting discussion and example(s).

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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ind2sub@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-special-abs@umd/browser.js"></script>
<script type="text/javascript">
(function () {

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

})();
</script>
</body>
</html>
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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-special-abs.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-special-abs

[test-image]: https://github.com/stdlib-js/math-special-abs/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-special-abs/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-special-abs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-special-abs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-special-abs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-special-abs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

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

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders/tree/umd

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/umd

</section>

<!-- /.links -->
