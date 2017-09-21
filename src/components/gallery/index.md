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
<div style="max-width: 600px; margin: 0 auto;">
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
        }
    ]
}'}}
{{> _gallery this }}
{{/getJsonContext}}
</div>
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
    "size": 2,
    "items": [
        {
        "src": "http://heisenberg.ndsu.nodak.edu:443/fileadmin/_processed_/2/0/csm_Gate2_web_dc2e601435.jpg",
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
        "src": "http://heisenberg.ndsu.nodak.edu:443/fileadmin/_processed_/2/0/csm_Gate2_web_dc2e601435.jpg",
        "alt": "Sample Image"
        },
        {
        "src": "http://heisenberg.ndsu.nodak.edu:443/fileadmin/_processed_/c/9/csm_Equine_web_8a1202e7e7.jpg",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "http://heisenberg.ndsu.nodak.edu:443/fileadmin/_processed_/2/0/csm_Gate2_web_dc2e601435.jpg",
        "alt": "Sample Image"
        },
        {
        "src": "http://heisenberg.ndsu.nodak.edu:443/fileadmin/_processed_/c/9/csm_Equine_web_8a1202e7e7.jpg",
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