---
layout: component
title: Three Boxes Component
---

## Basic Usage

```html
{{#getJsonContext '{
    "title": "Welcome to Provost\'s Office",
    "boxes": [
        {
            "title": "Academic Leaders Orientation and Retreat",
            "subtitle": "August 9, 2017",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex.",
            "linkUrl": "#",
            "linkText": "More Info"
        },
        {
            "bgColor": "gray",
            "title": "New Faculty Orientation",
            "subtitle": "August 15, 16, 21, 29, and 30",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex.",
            "linkUrl": "#",
            "linkText": "More Info"
        },
        {
            "bgColor": "green",
            "title": "Annual Facultty Conference",
            "subtitle": "August 16, 2017",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante ac, tempus iaculis ex. Nam nec ex sapien. Aliquam eget metus vel augue finibus ultricies et ac lacus. Maecenas sit amet metus erat.",
            "linkUrl": "#",
            "linkText": "More Info"
        }
    ]
}'}}
{{> _three-boxes this}}
{{/getJsonContext}}
```