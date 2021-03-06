---
layout: component
title: Picture Component
---

This component provides a consistent way to display a full size image in a container with defined width and/or height.
Add `full-size-img` to resize the image to the size `img-wrapper` container.

## Basic Usage

Example:
```html
<div class="img-wrapper" style="">
    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image"  />
</div>
<div class="img-wrapper full-size-img right-align" style=" width: 350px; height: 250px;">
    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image"  />
</div>
<div class="img-wrapper full-size-img center-align" style=" width: 200px; height: 300px;">
    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image"  />
</div>
```

## Caption

Wrap elements in `figure` and use `figcaption` to contain the captions. `caption-1` and `caption-2` provides different caption styles.

Example:
```html
<figure class="" style=" width: 350px;">
    <div class="img-wrapper" style=" width: 350px; height: 300px;">
        <img src="/ndsu-web-template/images/sample.png" alt="Sample Image"  />
    </div>
    <figcaption>
        <div class="caption-1">North Dakota State University</div>
        <div class="caption-2">Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </figcaption>
</figure>

```

## Block Picture

Add `img-block` to `figure` element to have full width picture.

Example:
```html
<figure class=" img-block" style="">
    <div class="img-wrapper full-size-img middle-align" style=" height: 300px;">
        <img src="/ndsu-web-template/images/sample.png" alt="Sample Image"  />
    </div>
    <figcaption>
        <div class="caption-1">North Dakota State University</div>
        <div class="caption-2">Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </figcaption>
</figure>

```

## Styling

### Frame

Add `img-frame` class to the parent `figure` element to have picture frame.

Example:
```html
<figure class="" style=" width: 400px;">
    <div class="img-wrapper img-frame" style=" width: 400px;">
        <img src="/ndsu-web-template/images/sample.png" alt="Sample Image"  />
    </div>
</figure>

```

### Shadow

Add `img-shadow` class to the parent `figure` element.

Example:
```html
<figure class="" style="">
    <div class="img-wrapper img-shadow" style="">
        <img src="/ndsu-web-template/images/sample.png" alt="Sample Image"  />
    </div>
    <figcaption>
        <div class="caption-1">North Dakota State University</div>
        <div class="caption-2">Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </figcaption>
</figure>

```
