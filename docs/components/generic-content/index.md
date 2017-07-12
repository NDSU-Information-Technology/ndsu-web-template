---
layout: component
title: Generic Content Component
---

The `generic-content` component is part of the minimal version.

This component provides a boilerplate template for a basic/generic content.

## Basic Usage

Each component must have the CSS class `generic-content`. It is recommended to use the HTML element `section`. Under each component, it is **highly recommended** that you have a title. You can add title by using either the HTML element `h3`, `h4`, or `h5`.

Basic DOM Structure:
* `section.generic-content`
  * `h3` (or `h4`/`h5`)
  * _one or multiple content elements_ (e.g. `p`, `div`)

Example:
```html
<section class="generic-content">
    <h3>Big headline - h3</h3>
    <p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante
        ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum metus ut aliquet
        aliquet. Fusce facilisis lorem non rutrum facilisis.</p>
    <p> Nam nec ex sapien. Aliquam eget metus vel augue finibus
        ultricies et ac lacus. Maecenas sit amet metus erat.</p>
</section>
```

Using `h4` or `h5` element as title will result in a smaller title.

```html
<section class="generic-content">
    <h5>Third headline - h5</h5>
    <p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante
        ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum metus ut aliquet
        aliquet. Fusce facilisis lorem non rutrum facilisis. Nam nec ex sapien. Aliquam eget metus vel augue finibus
        ultricies et ac lacus. Maecenas sit amet metus erat.</p>
</section>
```

Optionally, you can add a subtitle after the title by inserting an HTML element with class `subtitle`.

```html
<section class="generic-content">
    <h4>Second headline - h4</h4>
    <p class="subtitle">Subhead - Donec scelerisque massa et quam cursus, vitae pellentesque nisi sodales.</p>
    <p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante
        ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum metus ut aliquet
        aliquet. Fusce facilisis lorem non rutrum facilisis. Nam nec ex sapien. Aliquam eget metus vel augue finibus
        ultricies et ac lacus. Maecenas sit amet metus erat.</p>
</section>
```

## Change Background Color

By default, the background color of `generic-content` is white. You can change the background color to gray by adding CSS class `gray` to the component.

Example:
```html
<!--GRAY CLASS ADDED-->
<section class="generic-content gray">
    <h4>Second headline - h4</h4>
    <p>Intro text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu arcu, tincidunt eget ante
        ac, tempus iaculis ex. Pellentesque convallis justo vitae bibendum lacinia. Phasellus interdum metus ut aliquet
        aliquet. Fusce facilisis lorem non rutrum facilisis. Nam nec ex sapien. Aliquam eget metus vel augue finibus
        ultricies et ac lacus. Maecenas sit amet metus erat.</p>
</section>
```

## Multi Columns

Add CSS class `text-column-_count_` to the content element to divide **single content** into multiple columns, where _count_ is the number of columns. Currently, the number of columns supported is 2-4 (i.e. `text-column-2`, `text-column-3`, `text-column-4`).

Example of four columns:
```html
<section class="generic-content">
    <h3>Big headline - h3</h3>
    <!--EVERYTHING INSIDE DIV IS DISTRIBUTED INTO 3 COLUMNS-->
    <div class="text-column-4">
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
    </div>
</section>
```