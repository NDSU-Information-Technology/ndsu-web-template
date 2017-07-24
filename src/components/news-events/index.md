---
layout: component
title: News and Events Component
---

## Basic Usage

```html
{{#getJsonContext '{
    "newsPageLink": "#",
    "newsItems": [
        {
            "headline": "Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia.",
            "url": "#",
            "date": "July 1, 2017",
            "imgSrc": "/ndsu-web-template/images/sample.png",
            "imgAlt": "Sample Image"
        },
        {
            "headline": "Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia.",
            "url": "#",
            "imgSrc": "/ndsu-web-template/images/sample.png",
            "imgAlt": "Sample Image"
        },
        {
            "headline": "Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia.",
            "snippet": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum metus ut aliquet aliquet.",
            "date": "July 1, 2017",
            "url": "#",
            "imgSrc": "/ndsu-web-template/images/sample2.jpg",
            "imgAlt": "Sample Image"
        },
        {
            "headline": "Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia.",
            "url": "#",
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