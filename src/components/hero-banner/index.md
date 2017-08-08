---
layout: component
title: Hero Banner Component
---

## Basic Usage

```html
{{#> _hero-banner imgSrc="https://www.ndsu.edu/fileadmin/admission/Photos/graphics/about1.jpg"}}
{{/_hero-banner}}
```

## Filter

Available filters:
* `dim-black`
* `dim-green`
* `dim-yellow`


```html
{{#> _hero-banner dim="black" imgSrc="https://www.ndsu.edu/fileadmin/admission/Photos/graphics/about1.jpg"}}
{{/_hero-banner}}
{{#> _hero-banner dim="green" imgSrc="https://www.ndsu.edu/fileadmin/admission/Photos/graphics/about1.jpg"}}
{{/_hero-banner}}
{{#> _hero-banner dim="yellow" imgSrc="https://www.ndsu.edu/fileadmin/admission/Photos/graphics/about1.jpg"}}
{{/_hero-banner}}
```

## Size

```html
{{#> _hero-banner size="large" imgSrc="https://www.ndsu.edu/fileadmin/admission/Photos/graphics/about1.jpg"}}
{{/_hero-banner}}
```