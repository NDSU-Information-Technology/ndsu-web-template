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
<div style="max-width: 800px; margin: 0 auto;">
{{#getJsonContext '{
    "title": "Gallery",
    "rowHeight": 300,
    "items": [
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg",
        "alt": "Sample Image",
        "link": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg",
        "newWindow": true
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image"
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Hospitality_web.jpg",
        "alt": "Sample Image"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg",
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
* `gallery-1`: 1 columns
* `gallery-2`: 2 columns
* `gallery-3`: 3 columns
* `gallery-4`: 4 columns
* `gallery-5`: 5 columns

Example of 3 columns:
```html
{{#getJsonContext '{
    "title": "Gallery",
    "rowHeight": 200,
    "style": "frame",
    "size": 3,
    "items": [
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "width": 200
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg",
        "alt": "Sample Image",
        "link": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg",
        "newWindow": true,
        "width": 200
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "width": 200
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "width": 200
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Hospitality_web.jpg",
        "alt": "Sample Image",
        "width": 200
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg",
        "alt": "Sample Image",
        "width": 200
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "width": 200
        },
        {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "width": 200
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Hospitality_web.jpg",
        "alt": "Sample Image",
        "width": 200
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg",
        "alt": "Sample Image",
        "width": 200
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
    "rowHeight": 250,
    "style": "shadow",
    "size": 5,
    "items": [
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg",
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
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Hospitality_web.jpg",
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
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        }
    ]
}'}}
{{> _gallery this }}
{{/getJsonContext}}
```

## Alignment

Available alignments:
* `gallery-left` (default)
* `gallery-center`
* `gallery-right`

```html
{{#getJsonContext '{
    "title": "Gallery",
    "rowHeight": 250,
    "style": "shadow",
    "size": 5,
    "align": "center",
    "items": [
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg",
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
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Hospitality_web.jpg",
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
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        }
    ]
}'}}
{{> _gallery this }}
{{/getJsonContext}}
```

```html
{{#getJsonContext '{
    "title": "Gallery",
    "rowHeight": 250,
    "style": "shadow",
    "size": 5,
    "align": "right",
    "items": [
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg",
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
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        },
        {
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Hospitality_web.jpg",
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
        "src": "https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg",
        "alt": "Sample Image",
        "primaryCaption": "Title",
        "secondaryCaption": "FirstName LastName"
        }
    ]
}'}}
{{> _gallery this }}
{{/getJsonContext}}
```