---
layout: component
title: Typography
---

## Basic Usage

 It is recommended to use the HTML element `section`. Under each component, it is **highly recommended** that you have a title. You can add title by using either the HTML element `h3`, `h4`, or `h5`.

Basic DOM Structure:
* `section.generic-content`
  * `h3` (or `h4`/`h5`)
  * _one or multiple content elements_ (e.g. `p`, `div`)

Example:
```html
{{#getJsonContext '{"title": "Big Headline - h3"}'}}
{{#> _generic-content this }}
<p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante
    ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum metus ut aliquet
    aliquet. Fusce facilisis lorem non rutrum facilisis.</p>
<p> Nam nec ex sapien. Aliquam eget metus vel augue finibus
        ultricies et ac lacus. Maecenas sit amet metus erat.</p>
{{/ _generic-content}}
{{/getJsonContext}}
```

Using `h4` or `h5` element as title will result in a smaller title.

```html
{{#getJsonContext '{"title": "Third headline - h5", "h5": true}'}}
{{#> _generic-content this }}
<p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante
    ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum metus ut aliquet
    aliquet. Fusce facilisis lorem non rutrum facilisis.</p>
<p> Nam nec ex sapien. Aliquam eget metus vel augue finibus
        ultricies et ac lacus. Maecenas sit amet metus erat.</p>
{{/ _generic-content}}
{{/getJsonContext}}
```

Optionally, you can add a subtitle after the title by inserting an HTML element with class `subtitle`.

```html
{{#getJsonContext '{"title": "Second headline - h4", "h4": true, "subtitle": "Subhead - Donec scelerisque massa et quam cursus, vitae pellentesque nisi sodales."}'}}
{{#> _generic-content this }}
<p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante
    ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum metus ut aliquet
    aliquet. Fusce facilisis lorem non rutrum facilisis.</p>
<p> Nam nec ex sapien. Aliquam eget metus vel augue finibus
        ultricies et ac lacus. Maecenas sit amet metus erat.</p>
{{/ _generic-content}}
{{/getJsonContext}}
```

## Change Background Color

By default, the background color of `generic-content` is white. You can change the background color to gray by adding CSS class `gray` to the component.

Example:
```html
{{#getJsonContext '{"title": "Second headline - h4", "h4": true, "bgColor": "gray"}'}}
{{#> _generic-content this }}
<p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante
    ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum metus ut aliquet
    aliquet. Fusce facilisis lorem non rutrum facilisis. Nam nec ex sapien. Aliquam eget metus vel augue finibus
    ultricies et ac lacus. Maecenas sit amet metus erat.</p>
{{/ _generic-content}}
{{/getJsonContext}}
```

## Multi Columns

Add CSS class `text-column-_count_` to the content element to divide **single content** into multiple columns, where _count_ is the number of columns. Currently, the number of columns supported is 2-4 (i.e. `text-column-2`, `text-column-3`, `text-column-4`).

Example of three columns:
```html
{{#getJsonContext '{"title": "Big headline - h3", "multiColumns": 3}'}}
{{#> _generic-content this }}
<p>Donec ut lobortis nisi, posuere egestas mauris. Nulla non quam sed dui faucibus interdum. Vivamus finibus
    felis sed ex mollis interdum. Vivamus rutrum quam eu risus convallis, ut cursus sem semper. Praesent
    arcu nisi, varius ut vestibulum viverra, hendrerit et velit. Aenean consectetur, sapien sed laoreet condimentum,
    augue arcu tristique mi, vel ultrices tellus diam at lorem. Donec scelerisque massa et quam cursus, vitae
    pellentesque nisi sodales. Proin eleifend at lorem vel efficitur.</p>
<p>Maecenas consectetur augue at massa mollis, a blandit tortor ultrices. Morbi interdum leo in tristique varius.
    Mauris quis ornare lorem. Nam vitae nisl nunc. Morbi commodo lacus a dui interdum, sit amet dignissim
    arcu commodo. Nam mollis varius commodo. Vestibulum sagittis consectetur egestas. Nullam tristique pellentesque
    sapien, vitae dictum nisl pellentesque sit amet. Morbi condimentum sagittis feugiat. Nam sed nibh vitae
    lectus finibus hendrerit.</p>
{{/ _generic-content}}
{{/getJsonContext}}
```

## Multi Sections

Multi sections divide **multiple** types of content into multiple different columns. Each column should represent a different content. To implement multi sections, add CSS class `multi-sections` to the parent element of contents, and add class `sub-section` to each child content element. It is recommended that you use the HTML element `section` for each `sub-section`; Optionally, you can add a sub-section title by using the `h6` element.

Sample DOM Structure
* `section.generic-content`
  * `h3`, `h4`, or `h5` headline
  * `subtitle` (optional)
  * **`div.multi-sections`**
    * `section.sub-section`
      * `h6`
      * _sub-section content_
    * `section.sub-section`
      * `h6`
      * _sub-section content_
    * `section.sub-section`
      * `h6`
      * _sub-section content_
    * `...`

Example `multi-sections` with five `sub-section`:

```html
{{#getJsonContext '{
    "title": "Second headline - h4",
    "h4": true,
    "subtitle": "Donec scelerisque massa et quam cursus, vitae pellentesque nisi sodales. Morbi interdum leo in tristique varius. Mauris quis ornare lorem. Nam vitae nisl nunc.",
    "multiSections": [
        {
            "title": "Heading - h6",
            "content": "<p>Maecenas consectetur augue at massa mollis, a blandit tortor ultrices. Morbi interdum leo in tristique varius. Mauris quis ornare lorem. Nam vitae nisl nunc. Morbi commodo lacus a dui interdum, sit amet dignissim arcu commodo. Nam mollis varius commodo. Vestibulum sagittis consectetur egestas. Nullam tristique pellentesque sapien, vitae dictum nisl pellentesque sit amet.</p>"
        },
        {
            "title": "Heading - h6",
            "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum ut magna et imperdiet. Nunc lacinia risus ut magna tempus, id vehicula sapien interdum. Aenean scelerisque, dolor in tempus rutrum, sem turpis suscipit tellus, sed pharetra magna elit non dolor. Quisque sed urna vel orci ultricies aliquet. Phasellus eu sodales nulla. In sit amet nibh volutpat, bibendum ante vitae, aliquet mi. Integer suscipit sapien in sem molestie ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eleifend mi molestie dignissim posuere. </p>"
        },
        {
            "title": "Heading - h6",
            "content": "<p>Maecenas consectetur augue at massa mollis, a blandit tortor ultrices. Morbi interdum leo in tristique varius. Mauris quis ornare lorem. Nam vitae nisl nunc. Morbi commodo lacus a dui interdum, sit amet dignissim arcu commodo. Nam mollis varius commodo. Vestibulum sagittis consectetur egestas. Nullam tristique pellentesque sapien, vitae dictum nisl pellentesque sit amet.</p>"
        },
        {
            "title": "Heading - h6",
            "content": "<p>Maecenas consectetur augue at massa mollis, a blandit tortor ultrices. Morbi interdum leo in tristique varius. Nullam tristique  pellentesque sapien, vitae dictum nisl pellentesque sit amet. Mauris quis ornare lorem. Nam vitae nisl nunc. Morbi commodo lacus a dui interdum, sit amet dignissim arcu commodo. Nam mollis varius commodo. Vestibulum sagittis consectetur egestas. Nullam tristique pellentesque sapien, vitae dictum nisl pellentesque sit amet.</p>"
        },
        {
            "title": "Heading - h6",
            "content": "<p>In congue ornare est nec porttitor. Aliquam egestas pulvinar mauris at vestibulum. Pellentesque sed pretium leo. Pellentesque et enim magna. Aliquam eu orci in nisl tincidunt fermentum vitae sed risus. Aenean id sapien eu urna pulvinar euismod. Quisque consequat sapien est, sit amet convallis elit euismod id. Nunc egestas lorem ut vehicula malesuada. Duis sit amet eleifend mauris, at pulvinar ligula. Nam egestas porta luctus. Ut sed  porta ligula. Donec congue dolor augue, at molestie diam bibendum vel.</p>"
        }
    ]
}'}}
{{#> _generic-content this }}
{{/ _generic-content}}
{{/getJsonContext}}
```

_NOTE: Multi sections is different from multi columns (`text-column-`). Multi sections' columns each contains different type of content and each column does not "balance" the amount of content. Multi columns contain single content and it will distribute the content equally across all columns._


## Quick Picture

This component also supports inserting one picture to go along with the content. Component with picture has a different structure than all other components. An example DOM structure for a quick-picture sub-component:

* `section.generic-content`
  * **`quick-picture-container`**
    * `div.description`
      * `h3`, `h4`, or `h5` headline
      * _Long description text/content_
    * `figure.picture`
      * `div.full-size-frame`
        * `div.full-size-picture` 
          * `img`
      * `figcaption` (optional)
        * `h5` Photo headline/name
        * _picture caption_

The `full-size-frame` and `full-size-picture` structure is required in order to have a consistent, full-sized picture for the content.

Example from DOM structure above:

```html
{{#getJsonContext '{
    "title": "Second headline - h4",
    "h4": true,
    "quickPicture": {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "reverse": true,
        "headline": "Photo Headline",
        "caption": "Photo caption - vitae bibendum lacinia. Phasellus interdum vitae bibendum lacinia."
    }
}'}}
{{#> _generic-content this }}
<p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt
    eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum
    metus ut aliquet aliquet. Fusce facilisis lorem non rutrum facilisis. Nam nec ex sapien. Aliquam
    eget metus vel augue finibus ultricies et ac lacus. Maecenas sit amet metus erat.</p>
<p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt
    eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum
    metus ut aliquet aliquet. Fusce facilisis lorem non rutrum facilisis. Nam nec ex sapien. Aliquam
    eget metus vel augue finibus ultricies et ac lacus. Maecenas sit amet metus erat.</p>
{{/_generic-content}}
{{/getJsonContext}}
```

To have the picture on the right side, swap the order of `description` and `figure` elements.

```html
{{#getJsonContext '{
    "title": "Second headline - h4",
    "h4": true,
    "quickPicture": {
        "src": "/ndsu-web-template/images/sample.png",
        "alt": "Sample Image",
        "headline": "Photo Headline",
        "caption": "Photo caption - vitae bibendum lacinia. Phasellus interdum vitae bibendum lacinia."
    }
}'}}
{{#> _generic-content this }}
<p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt
    eget ante ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum
    metus ut aliquet aliquet. Fusce facilisis lorem non rutrum facilisis.</p>
<a href="#">Read More</a>
{{/_generic-content}}
{{/getJsonContext}}
```