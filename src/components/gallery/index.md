---
layout: component
title: Button Component
---

NOTE: This component depends on the [`picture` component](/ndsu-web-template/components/picture). Sample DOM structure:

## Basic Usage

* `section.gallery`
  * `h5` title
  * `ul.gallery-collection`
    * `li.gallery-item`
    * [...]

Example:
```html
{{#getJsonContext '{
    "title": "Gallery",
    "items": [
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        }
    ]
}'}}
{{> _gallery this }}
{{/getJsonContext}}
```

## Size

Available sizes:
* `gallery-1`: 1 columns (default)
* `gallery-2`: 2 columns
* `gallery-3`: 3 columns
* `gallery-4`: 4 columns
* `gallery-5`: 5 columns

Example of 5 columns:
```html
{{#getJsonContext '{
    "title": "Gallery",
    "size": 5,
    "items": [
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        }
    ]
}'}}
{{> _gallery this }}
{{/getJsonContext}}
```

## Styling

Refer to [`picture` component](/ndsu-web-template/components/picture) on how to style the picture on gallery.

Example of gallery with picture styling:

```html
{{#getJsonContext '{
    "title": "Gallery",
    "size": 4,
    "style": "shadow",
    "items": [
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        }
    ]
}'}}
{{> _gallery this }}
{{/getJsonContext}}
```