# a11y-debug

> A CSS-only accessibility debugger — identify common HTML a11y issues visually, with no JavaScript

---

## What does it do?

- ✅ Highlights missing `alt` text on `<img>`
- ✅ Flags empty headings like `<h1></h1>`
- ✅ Warns if `role="button"` or `role="link"` lacks keyboard support
- ✅ Checks for `<ul>` or `<ol>` with invalid children
- ✅ Finds `<table>` elements without a `<caption>`
- ✅ Alerts when `<label>` is not associated with a form control
- ✅ Detects buttons that only use an icon without text or `aria-label`

All of this is done **without any JavaScript** — just HTML and CSS using the powerful `:has()` selector.

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
