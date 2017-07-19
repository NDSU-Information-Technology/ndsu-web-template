---
layout: component
title: Button Component
---

The `button` component is part of the minimal version.

Example:

```html
{{#> _button url="https://www.ndsu.edu"}}Sample Button{{/_button}}
```

## Size

Available size variations:
* `btn-large`: large
* `btn-tiny`: small

Examples:
```html
{{#> _button url="https://www.ndsu.edu" size="large"}}Sample Button{{/_button}}

{{#> _button url="https://www.ndsu.edu" size="tiny"}}Sample Button{{/_button}}
```

## Color

Available colors:
* `btn-yellow`
* `btn-green`
* `btn-darkgray`
* `btn-darkgray-yellow`
* `btn-clear-yellow`
* `btn-clear-yellow-white`

Examples:
```html
{{#> _button url="https://www.ndsu.edu"}}Default{{/_button}}
{{#> _button url="https://www.ndsu.edu" color="yellow"}}Yellow{{/_button}}
{{#> _button url="https://www.ndsu.edu" color="green"}}Green{{/_button}}
{{#> _button url="https://www.ndsu.edu" color="darkgray"}}Darkgray{{/_button}}
{{#> _button url="https://www.ndsu.edu" color="darkgray-yellow"}}Darkgray Yellow{{/_button}}
{{#> _button url="https://www.ndsu.edu" color="clear-yellow"}}Clear Yellow{{/_button}}
{{#> _button url="https://www.ndsu.edu" color="clear-yellow-white"}}Clear Yellow White{{/_button}}
```

## Block Button

Example:
```html
{{#> _button url="https://www.ndsu.edu" block="true"}}Sample Button{{/_button}}
```
