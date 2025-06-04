# a11y-debug

> A CSS-only accessibility debugger — identify common HTML a11y issues visually, with no JavaScript

[![npm][npm-image]][npm-url] [![license][license-image]][license-url]
[![changelog][changelog-image]][changelog-url]

---

## What does it do?

- ✅ Highlights missing `alt` text on `<img>`
- ✅ Flags empty headings like `<h1></h1>`
- ✅ Warns if we find `role="button"` or `role="link"`
- ✅ Checks for `<ul>` or `<ol>` with invalid children
- ✅ Finds `<table>` elements without a `<caption>`
- ✅ Alerts when `<label>` is not associated with a form control
- ✅ Detects buttons that only use an icon without text or `aria-label`

All of this is done **without any JavaScript** — just HTML and CSS using, among other things, the powerful `:has()` selector.

## Installation

### NPM

```bash
npm install a11y-debug.css
```

### CDN

```html
<head lang="en">
  <link rel="stylesheet" href="https://manuelsanchez2.github.io/a11y-debug-stylesheet/a11y-debug.css" />
</head>
```

### Bookmarklet

```js
javascript:(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://manuelsanchez2.github.io/a11y-debug-stylesheet/a11y-debug.css';document.head.appendChild(l);document.body.classList.add('a11y-debug');})();
```

#### Usage 

```html
<body class="a11y-debug">
  <!-- your content here -->
</body>
```

---

## Customize

You can override the default colors via CSS variables:

```css
:root {
  --color-debug-warning: orange;
  --color-debug-error: crimson;
  --color-debug-light-error: oklch(88.5% 0.062 18.334);
}
```

---

## Contributing

Got ideas for more accessibility checks that can be done in pure CSS?  
Open a pull request or discussion on [GitHub](https://github.com/manuelsanchez2/a11y-debug-stylesheet).

---

## License

MIT © [Manuel Sánchez](https://manuelsanchezdev.com)

[changelog-image]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[changelog-url]: CHANGELOG.md
[license-image]: https://img.shields.io/npm/l/a11y-debug.css.svg?style=flat-square
[license-url]: LICENSE.md
[npm-image]: https://img.shields.io/npm/v/a11y-debug.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/a11y-debug.css