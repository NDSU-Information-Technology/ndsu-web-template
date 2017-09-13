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
<section class="gallery">
    <h5>Gallery</h5>
    <ul class="gallery-collection" role="group">
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
    </ul>
</section>
```

## Size

Available sizes:
* `gallery-3`: 3 columns (default)
* `gallery-5`: 5 columns

Example of 5 columns:
```html
<section class="gallery gallery-5">
    <h5>Gallery</h5>
    <ul class="gallery-collection" role="group">
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class=" picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
    </ul>
</section>
```

## Styling

Refer to [`picture` component](/ndsu-web-template/components/picture) on how to style the picture on gallery.

Example of gallery with picture styling:

```html
<section class="gallery gallery-5">
    <h5>Gallery</h5>
    <ul class="gallery-collection" role="group">
        <li class="gallery-item">
            <figure class="picture-shadow picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class="picture-shadow picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class="picture-shadow picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class="picture-shadow picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class="picture-shadow picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class="picture-shadow picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class="picture-shadow picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class="picture-shadow picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item">
            <figure class="picture-shadow picture-block">
                <div class="full-size-picture" style="">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
    </ul>
</section>
```