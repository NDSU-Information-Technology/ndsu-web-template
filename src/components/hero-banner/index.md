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

## Content

```html
{{#> _hero-banner size="large" vAlign="middle" 
imgSrc="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Buildings/OldMain2_HR.jpg" }}
    <h2>Welcome to the Provost's Office</h2>
    <p>
        The Provost's Office oversees the eight academic colleges, graduate school, library, institutional programs, institutional research and analysis, accreditation and assessment, and the Upper Great Plains Transportation Institute.
    </p>
    {{#> _button url="#" color="green" size="normal"}}Read More{{/_button}}
{{/_hero-banner}}
```

### Location

```html
{{#> _hero-banner size="large" vAlign="middle" contentPos="bottom"
imgSrc="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Buildings/OldMain2_HR.jpg" }}
    <h2>Welcome to the Provost's Office</h2>
    <p>
        The Provost's Office oversees the eight academic colleges, graduate school, library, institutional programs, institutional research and analysis, accreditation and assessment, and the Upper Great Plains Transportation Institute.
    </p>
    {{#> _button url="#" color="green" size="normal"}}Read More{{/_button}}
{{/_hero-banner}}
```

```html
{{#> _hero-banner size="large" vAlign="middle" contentPos="bottom right"
imgSrc="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Buildings/OldMain2_HR.jpg" }}
    <h2>Welcome to the Provost's Office</h2>
    <p>
        The Provost's Office oversees the eight academic colleges, graduate school, library, institutional programs, institutional research and analysis, accreditation and assessment, and the Upper Great Plains Transportation Institute.
    </p>
    {{#> _button url="#" color="green" size="normal"}}Read More{{/_button}}
{{/_hero-banner}}
```

### Size

```html
{{#> _hero-banner size="large" vAlign="middle" contentPos="bottom" contentSize="wide"
imgSrc="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Buildings/OldMain2_HR.jpg" }}
    <h2>Welcome to the Provost's Office</h2>
    <p>
        The Provost's Office oversees the eight academic colleges, graduate school, library, institutional programs, institutional research and analysis, accreditation and assessment, and the Upper Great Plains Transportation Institute.
    </p>
    {{#> _button url="#" color="green" size="normal"}}Read More{{/_button}}
{{/_hero-banner}}
```

## Youtube Video Background

```html
{{#> _hero-banner size="large" vAlign="middle" 
imgSrc="/ndsu-web-template/images/ndsu-poster.png" 
videoId="FbFT2UyqX5M"
}}
    <h2>Welcome to the Provost's Office</h2>
    <p>
        The Provost's Office oversees the eight academic colleges, graduate school, library, institutional programs, institutional research and analysis, accreditation and assessment, and the Upper Great Plains Transportation Institute.
    </p>
    {{#> _button url="#" color="green" size="normal"}}Read More{{/_button}}
{{/_hero-banner}}
```
