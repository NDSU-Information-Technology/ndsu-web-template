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
<section class="gallery">
    <h5>Gallery</h5>
    <ul class="gallery-collection" role="group">
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper full-size-img" style=" height: 300px;">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <a href="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg" target="_blank" class="img-wrapper full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg" alt="Sample Image" />
                </a>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper full-size-img" style=" height: 300px;">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Hospitality_web.jpg" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
    </ul>
</section>
</div>
```

## Size

Available sizes:
* `gallery-1`: 1 columns
* `gallery-2`: 2 columns (default)
* `gallery-3`: 3 columns
* `gallery-4`: 4 columns
* `gallery-5`: 5 columns

Example of 3 columns:
```html
<section class="gallery gallery-3">
    <h5>Gallery</h5>
    <ul class="gallery-collection" role="group">
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-frame full-size-img" style=" height: 300px;">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <a href="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg" target="_blank" class="img-wrapper img-frame full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg" alt="Sample Image" />
                </a>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-frame full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-frame full-size-img" style=" height: 300px;">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-frame full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Hospitality_web.jpg" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-frame full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-frame full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-frame full-size-img" style=" height: 300px;">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-frame full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Hospitality_web.jpg" alt="Sample Image" />
                </div>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-frame full-size-img" style=" height: 300px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg" alt="Sample Image" />
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
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-shadow full-size-img" style=" height: 250px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-shadow full-size-img" style=" height: 250px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-shadow full-size-img" style=" height: 250px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Business_web.jpg" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-shadow full-size-img" style=" height: 250px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/SoilScience_web.jpg" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-shadow full-size-img" style=" height: 250px;">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-shadow full-size-img" style=" height: 250px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-shadow full-size-img" style=" height: 250px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/Hospitality_web.jpg" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-shadow full-size-img" style=" height: 250px;">
                    <img src="/ndsu-web-template/images/sample.png" alt="Sample Image" />
                </div>
                <figcaption>
                    <div class="caption-1">Title</div>
                    <div class="caption-2">FirstName LastName</div>
                </figcaption>
            </figure>
            
        </li>
        <li class="gallery-item" style="">
            <figure class=" img-block" style="">
                <div class="img-wrapper img-shadow full-size-img" style=" height: 250px;">
                    <img src="https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/images/photoGallery/Academics/CoupleFamilyTherapy_web.jpg" alt="Sample Image" />
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