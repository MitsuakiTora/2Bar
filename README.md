# 2Bar (DoubleBar)
An experimental project that exploits an SVG filter rendering behavior in Chromium-based browsers to visually duplicate the bookmark toolbar using CSS.
Uses JavaScript for initialization and customization.

## Installation and usage
HTML
```html
<script src="https://unpkg.com/2bar"></script>
```

JavaScript
```js
window['2Bar'].spawn();
```
`spawn(options?: {id?: string, class1?: string, class2?: string}): void`

## [License](https://github.com/JustDeveloper1/2Bar/blob/main/LICENSE)
Copyright (c) 2026 [JustDeveloper](https://justdeveloper.is-a.dev/)

## Minified Build
For `.min.js`, I use [UglifyJS](https://github.com/mishoo/UglifyJS) by [Mihai Bazon](https://github.com/mishoo).
```bash
npm i -D uglify-js
```
```bash
uglifyjs index.js -c -m -o index.min.js
```
