---
layout: component
title: Footer Component
---

## Basic Usage
```html
{{#> _footer}}
<div class="address">
    <h6>University Relations</h6>
    North Dakota State University<br> Old Main 204<br> Dept 6000 PO Box 6050<br> Fargo, ND 58108-6050<br>
    <br>
    <a href="tel:17012311068"><span class="sr-only">Phone: </span>+1 (701) 231-1068</a><br>
    <a href="fax:17012311989">Fax: +1 (701) 231-1068</a>
</div>
{{/_footer}}
```

## Color

```html
{{#> _footer color="dark"}}
<div class="address">
    <h6>University Relations</h6>
    North Dakota State University<br> Old Main 204<br> Dept 6000 PO Box 6050<br> Fargo, ND 58108-6050<br>
    <br>
    <a href="tel:17012311068"><span class="sr-only">Phone: </span>+1 (701) 231-1068</a><br>
    <a href="fax:17012311989">Fax: +1 (701) 231-1068</a>
</div>
{{/_footer}}
```

## Alignment

```html
{{#> _footer color="green" align="left"}}
<div class="address">
    <h6>University Relations</h6>
    North Dakota State University<br> Old Main 204<br> Dept 6000 PO Box 6050<br> Fargo, ND 58108-6050<br>
    <br>
    <a href="tel:17012311068"><span class="sr-only">Phone: </span>+1 (701) 231-1068</a><br>
    <a href="fax:17012311989">Fax: +1 (701) 231-1068</a>
</div>
{{/_footer}}
```

## Side Navigation

```html
{{#> _footer color="green" sideNavbar="true" align="left"}}
<div class="address">
    <h6>University Relations</h6>
    North Dakota State University<br> Old Main 204<br> Dept 6000 PO Box 6050<br> Fargo, ND 58108-6050<br>
    <br>
    <a href="tel:17012311068"><span class="sr-only">Phone: </span>+1 (701) 231-1068</a><br>
    <a href="fax:17012311989">Fax: +1 (701) 231-1068</a>
</div>
{{/_footer}}
```

```html
{{#> _footer color="dark" sideNavbar="true" align="left"}}
<div class="address">
    <h6>University Relations</h6>
    North Dakota State University<br> Old Main 204<br> Dept 6000 PO Box 6050<br> Fargo, ND 58108-6050<br>
    <br>
    <a href="tel:17012311068"><span class="sr-only">Phone: </span>+1 (701) 231-1068</a><br>
    <a href="fax:17012311989">Fax: +1 (701) 231-1068</a>
</div>
{{/_footer}}
```
