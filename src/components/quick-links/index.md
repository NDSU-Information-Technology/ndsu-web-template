---
layout: component
title: Quick Links Component
---

## Basic Usage

```html
{{#getJsonContext '{
    "links": [
        {
            "url": "link1",
            "text": "Link 1"
        },
        {
            "url": "link1",
            "text": "Link 2"
        },
        {
            "url": "link1",
            "text": "Link 3"
        },
        {
            "url": "link1",
            "text": "Link 4"
        },
        {
            "url": "link1",
            "text": "Link 1",
            "newWindow": true
        },
        {
            "url": "link1",
            "text": "Link 2"
        },
        {
            "url": "link1",
            "text": "Link 3",
            "newWindow": true
        },
        {
            "url": "link1",
            "text": "Link 4"
        },
        {
            "url": "link1",
            "text": "Link 1",
            "newWindow": true
        },
        {
            "url": "link1",
            "text": "Link 2"
        },
        {
            "url": "link1",
            "text": "Link 3"
        },
        {
            "url": "link1",
            "text": "Link 4",
            "newWindow": true
        }
    ]
}'}}
{{> _quick-links this}}
{{/getJsonContext}}
```

## Column Counts

```html
{{#getJsonContext '{
    "columns": 4,
    "links": [
        {
            "url": "link1",
            "text": "Link 1"
        },
        {
            "url": "link1",
            "text": "Link 2"
        },
        {
            "url": "link1",
            "text": "Link 3"
        },
        {
            "url": "link1",
            "text": "Link 4"
        },
        {
            "url": "link1",
            "text": "Link 1",
            "newWindow": true
        },
        {
            "url": "link1",
            "text": "Link 2"
        },
        {
            "url": "link1",
            "text": "Link 3",
            "newWindow": true
        },
        {
            "url": "link1",
            "text": "Link 4"
        },
        {
            "url": "link1",
            "text": "Link 1",
            "newWindow": true
        },
        {
            "url": "link1",
            "text": "Link 2"
        },
        {
            "url": "link1",
            "text": "Link 3"
        },
        {
            "url": "link1",
            "text": "Link 4",
            "newWindow": true
        }
    ]
}'}}
{{> _quick-links this}}
{{/getJsonContext}}
```
## Color

```html
{{#getJsonContext '{
    "color": "yellow",
    "columns": 4,
    "links": [
        {
            "url": "link1",
            "text": "Link 1"
        },
        {
            "url": "link1",
            "text": "Link 2"
        },
        {
            "url": "link1",
            "text": "Link 3"
        },
        {
            "url": "link1",
            "text": "Link 4"
        },
        {
            "url": "link1",
            "text": "Link 1",
            "newWindow": true
        },
        {
            "url": "link1",
            "text": "Link 2"
        },
        {
            "url": "link1",
            "text": "Link 3",
            "newWindow": true
        },
        {
            "url": "link1",
            "text": "Link 4"
        },
        {
            "url": "link1",
            "text": "Link 1",
            "newWindow": true
        },
        {
            "url": "link1",
            "text": "Link 2"
        },
        {
            "url": "link1",
            "text": "Link 3"
        },
        {
            "url": "link1",
            "text": "Link 4",
            "newWindow": true
        }
    ]
}'}}
{{> _quick-links this}}
{{/getJsonContext}}
```