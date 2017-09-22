---
layout: component
title: Picture Component
---

This component provides a consistent way to display a full size image in a container with defined width and/or height.
Add `full-size-img` to resize the image to the size `img-wrapper` container.

## Basic Usage

Example:
```html
{{> _picture src="/ndsu-web-template/images/sample.png" alt="Sample Image"}}
{{> _picture src="/ndsu-web-template/images/sample.png" alt="Sample Image" hAlign="right" width=350 height=250 fullSize=true}}
{{> _picture src="/ndsu-web-template/images/sample.png" alt="Sample Image" hAlign="center" width=200 height=300 fullSize=true}}
```

## Caption

Wrap elements in `figure` and use `figcaption` to contain the captions. `caption-1` and `caption-2` provides different caption styles.

Example:
```html
{{> _picture-with-frame src="/ndsu-web-template/images/sample.png" alt="Sample Image" width=350 height=300 primaryCaption="North Dakota State University" secondaryCaption="Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit."}}
```

## Block Picture

Add `img-block` to `figure` element to have full width picture.

Example:
```html
{{> _picture-with-frame src="/ndsu-web-template/images/sample.png" alt="Sample Image" vAlign="middle" height=300 blockPicture=true fullSize=true primaryCaption="North Dakota State University" secondaryCaption="Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit."}}
```

## Styling

### Frame

Add `img-frame` class to the parent `figure` element to have picture frame.

Example:
```html
{{> _picture-with-frame src="/ndsu-web-template/images/sample.png" alt="Sample Image" width="400" style="frame"}}
```

### Shadow

Add `img-shadow` class to the parent `figure` element.

Example:
```html
{{> _picture-with-frame src="/ndsu-web-template/images/sample.png" alt="Sample Image" style="shadow" primaryCaption="North Dakota State University" secondaryCaption="Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit."}}
```
