---
layout: component
title: Hero Banner Component
---

## Basic Usage

```html
{{#> _hero-banner backgroundSrc="https://www.ndsu.edu/fileadmin/admission/Photos/graphics/about1.jpg"}}
{{/_hero-banner}}
```

## Filter

Available filters:
* `dim-black`
* `dim-green`
* `dim-yellow`


```html
{{#> _hero-banner dim="black" backgroundSrc="https://www.ndsu.edu/fileadmin/admission/Photos/graphics/about1.jpg"}}
{{/_hero-banner}}
{{#> _hero-banner dim="green" backgroundSrc="https://www.ndsu.edu/fileadmin/admission/Photos/graphics/about1.jpg"}}
{{/_hero-banner}}
{{#> _hero-banner dim="yellow" backgroundSrc="https://www.ndsu.edu/fileadmin/admission/Photos/graphics/about1.jpg"}}
{{/_hero-banner}}
```