---
layout: component
title: Picture Component
---

This component provides a consistent way to display a full size image in a container with defined width and/or height.

## Basic Usage

Example:
```html
<div class="full-size-picture" style=" width: 350px; height: 300px;">
    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
</div>
<div class="full-size-picture" style=" width: 200px; height: 300px;">
    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
</div>
<div class="full-size-picture" style=" width: 500px; height: 300px;">
    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
</div>
```

## Caption

Wrap elements in `figure` and use `figcaption` to contain the captions. `caption-1` and `caption-2` provides different caption styles.

Example:
```html
<figure class="" style=" width: 350px;">
    <div class="full-size-picture" style=" width: 350px; height: 300px;">
        <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
    </div>
    <figcaption>
        <div class="caption-2">Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="caption-1">North Dakota State University</div>
    </figcaption>
</figure>

```

## Styling

### Frame

Add `picture-frame` class to the parent `figure` element to have picture frame.

Example:
```html
<figure class="picture-frame" style=" width: 350px;">
    <div class="full-size-picture" style=" width: 350px; height: 300px;">
        <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
    </div>
    <figcaption>
        <div class="caption-2">Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="caption-1">North Dakota State University</div>
    </figcaption>
</figure>

```

### Shadow

Add `picture-shadow` class to the parent `figure` element.

Example:
```html
<figure class="picture-shadow" style=" width: 500px;">
    <div class="full-size-picture" style=" width: 500px; height: 300px;">
        <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
    </div>
    <figcaption>
        <div class="caption-2">Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div class="caption-1">North Dakota State University</div>
    </figcaption>
</figure>

```
