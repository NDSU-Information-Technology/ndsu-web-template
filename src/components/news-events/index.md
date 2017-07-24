---
layout: component
title: News and Events Component
---

## Basic Usage

```html
{{#getJsonContext '{
    "newsItems": [
        {
            "newsHeadline": "Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia.",
            "newsUrl": "#",
            "imgSrc": "/ndsu-web-template/images/sample.png",
            "imgAlt": "Sample Image"
        },
        {
            "newsHeadline": "Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia.",
            "newsUrl": "#",
            "imgSrc": "/ndsu-web-template/images/sample.png",
            "imgAlt": "Sample Image"
        },
        {
            "newsHeadline": "Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia.",
            "newsUrl": "#",
            "imgSrc": "/ndsu-web-template/images/sample2.jpg",
            "imgAlt": "Sample Image"
        },
        {
            "newsHeadline": "Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia.",
            "newsUrl": "#",
            "imgSrc": "/ndsu-web-template/images/sample.png",
            "imgAlt": "Sample Image"
        }
    ],
    "eventItems": [
        {
            "name": "Non nos preius voloreum repeliq",
            "date": "July 1, 2017",
            "location": "Memorial Union",
            "url": "#"
        },
        {
            "name": "Non nos preius voloreum repeliq",
            "date": "July 1, 2017",
            "location": "Memorial Union",
            "url": "#"
        },
        {
            "name": "Non nos preius voloreum repeliq",
            "date": "July 1, 2017",
            "location": "Memorial Union",
            "url": "#"
        },
        {
            "name": "Non nos preius voloreum repeliq",
            "date": "July 1, 2017",
            "location": "Memorial Union",
            "url": "#"
        },
        {
            "name": "Non nos preius voloreum repeliq",
            "date": "July 1, 2017",
            "location": "Memorial Union",
            "url": "#"
        },
        {
            "name": "Non nos preius voloreum repeliq",
            "date": "July 1, 2017",
            "location": "Memorial Union",
            "url": "#"
        }
    ]
}'}}
{{> _news-events this}}
{{/getJsonContext}}
```