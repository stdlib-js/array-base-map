<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# map

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a callback function to elements in an input array and assign results to elements in a new output array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
map = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-map@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var map = require( 'path/to/vendor/umd/array-base-map/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-map@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.map;
})();
</script>
```

#### map( x, fcn\[, thisArg] )

Applies a callback function to elements in an input array and assigns results to elements in a new output array.

```javascript
var naryFunction = require( '@stdlib/utils-nary-function' );
var abs = require( '@stdlib/math-base-special-abs' );

var x = [ -1.0, -2.0, -3.0, -4.0 ];

var y = map( x, naryFunction( abs, 1 ) );
// returns [ 1.0, 2.0, 3.0, 4.0 ]
```

The function accepts the following arguments:

-   **x**: input array.
-   **fcn**: callback function.
-   **thisArg**: callback execution context (_optional_).

To set the callback function's execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function count( x ) {
    this.count += 1;
    return x;
}

var x = [ 1.0, 2.0, 3.0, 4.0 ];

var ctx = {
    'count': 0
};

var y = map( x, count, ctx );
// returns [ 1.0, 2.0, 3.0, 4.0 ]

var v = ctx.count;
// returns 4
```

The callback function is provided the following arguments:

-   **value**: current array element.
-   **index**: current element index.
-   **arr**: input array.

#### map.assign( x, y, stride, offset, fcn\[, thisArg] )

Applies a callback function to elements in an input array and assigns results to elements in an output array.

```javascript
var naryFunction = require( '@stdlib/utils-nary-function' );
var zeros = require( '@stdlib/array-base-zeros' );
var abs = require( '@stdlib/math-base-special-abs' );

var x = [ -1.0, -2.0, -3.0, -4.0 ];

var y = zeros( x.length );

var out = map.assign( x, y, 1, 0, naryFunction( abs, 1 ) );
// returns [ 1.0, 2.0, 3.0, 4.0 ]

var bool = ( out === y );
// returns true
```

The function accepts the following arguments:

-   **x**: input array.
-   **y**: output array.
-   **stride**: stride length for output array.
-   **offset**: starting index for output array.
-   **fcn**: callback function.
-   **thisArg**: callback execution context (_optional_).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `map` method, the function defers execution to that method and assumes that the method API has the following signature:

    ```text
    x.map( fcn, thisArg )
    ```

-   The function supports array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-map@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = discreteUniform( 10, -10, 10, {
    'dtype': 'float64'
});

var y = map( x, naryFunction( abs, 1 ) );
console.log( y );

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-map.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-map

[test-image]: https://github.com/stdlib-js/array-base-map/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-map/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-map/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-map?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-map.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-map/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-map/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-map/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-map/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-map/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-map/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-map/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-map/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-map/main/LICENSE

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/umd

</section>

<!-- /.links -->
