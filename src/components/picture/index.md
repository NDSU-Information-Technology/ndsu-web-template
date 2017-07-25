---
layout: component
title: Picture Component
---

This component provides a consistent way to display a full size image in a container with defined width and/or height.

## Basic Usage

Example:
```html
{{> _picture src="/ndsu-web-template/images/sample.png" alt="Sample Image" hAlign="right" width=350 height=300}}
{{> _picture src="/ndsu-web-template/images/sample.png" alt="Sample Image" hAlign="center" width=200 height=300}}
{{> _picture src="/ndsu-web-template/images/sample.png" alt="Sample Image" width=500 height=300}}
```

## Caption

Wrap elements in `figure` and use `figcaption` to contain the captions. `caption-1` and `caption-2` provides different caption styles.

Example:
```html
{{> _picture-with-frame src="/ndsu-web-template/images/sample.png" alt="Sample Image" width=350 height=300 primaryCaption="North Dakota State University" secondaryCaption="Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit."}}
```

## Block Picture

Add `picture-block` to `figure` element to have full width picture.

Example:
```html
{{> _picture-with-frame src="/ndsu-web-template/images/sample.png" alt="Sample Image" vAlign="middle" height=300 blockPicture=true primaryCaption="North Dakota State University" secondaryCaption="Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit."}}
```

## Styling

### Frame

Add `picture-frame` class to the parent `figure` element to have picture frame.

Example:
```html
{{> _picture-with-frame src="/ndsu-web-template/images/sample.png" alt="Sample Image" width=350 height=300 style="frame"}}
```

### Shadow

Add `picture-shadow` class to the parent `figure` element.

Example:
```html
{{> _picture-with-frame src="/ndsu-web-template/images/sample.png" alt="Sample Image" width=500 height=300 style="shadow" primaryCaption="North Dakota State University" secondaryCaption="Photo Caption - Lorem ipsum dolor sit amet, consectetur adipiscing elit."}}
```
