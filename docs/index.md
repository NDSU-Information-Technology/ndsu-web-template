---
---

This page covers a quick start guide on how to implement NDSU Template for your pages.

## Download
Go to [Templates page](/ndsu-web-template/templates) to view and download currently available HTML template files.

## Minimum Requirements For A Page

Each NDSU page is required to have the following structure:

* Skip Navigation Links for screen reader
* header
  * NDSU green banner
  * Mobile navigation
  * Page title
  * Desktop navigation
* main
  * _Content of the page goes here_
* footer
  * Address and contact info
* Reference(s) to script


```html
<body>
     <!--Skip Navigation Links-->
    <section class="sr-navigation" role="navigation">
    <!--...-->
    </section>
    <!--Header-->
    <header>
        <div class="navbar-mobile-container sticky-bar sticky-sm">
            <!--NDSU Green Banner-->
            <div class="green-bar">
            <!--...-->
            </div>
            <!--Mobile Navigation-->
            <ul class="navbar navbar-mobile navbar-vertical navbar-dark">
            </ul>
            <!--Page Title-->
            <div class="page-title-bar">
            <!--...-->
            </div>
        </div>
        <!--Desktop Navigation-->
        <div class="main-nav sticky-bar sticky-xl" role="navigation" id="mainNav" tabindex="-1">
            <!--...-->
        </div>
    </header>
    <!--Main-->
    <main id="content" tabindex="-1">
    <!--PAGE CONTENT GOES HERE-->
    </main>
    <!--Footer-->
    <footer class="footer-green">
        <!--Organizational/Departmental Address/Contact Info-->
        <section class="footer-address">
            <!--...-->
        </section>
    </footer>
    <!--Referece(s) to script-->
    <script type="text/javascript" src="https://static.ndsu.nodak.edu/scripts/minimal.min.js"></script>
</body>
```

### Skip Navigation Links for screen reader

These links should be the first elements inside body. [More information about Skip Navigation Links](http://webaim.org/techniques/skipnav/){:target="_blank"}.

Wrap the list of links in an element with CSS class `sr-navigation`. Each link should refer to a specific place in document and has CSS classes of `sr-only` and `sr-only-focusable`. A page with repetitive header should have at least a reference to the `id` of the main content of the page.

```html
<section class="sr-navigation" role="navigation">
    <ul class="remove-list-style">
        <li>
            <a class="sr-only sr-only-focusable" href="#mainNav">Skip to main navigation</a>
        </li>
        <li>
            <!--LINK TO MAIN CONTENT-->
            <a class="sr-only sr-only-focusable" href="#content">Skip to page content</a>
        </li>
        <li>
            <!--Link to a section with id of news-->
            <a class="sr-only sr-only-focusable" href="#news">Skip to page news</a>
        </li>
    </ul>
</section>
```

Don't forget to assign the `id` of referenced section and set the `tabindex` attribute to -1.

```html
<!--This section has id of news and tabindex of -1-->
<section id="news" tabindex="-1">
</section>
```

### Header

The header of a page should have the following: _NDSU green banner, mobile navigation, page title, and desktop navigation_.

#### Mobile Navigation
For mobile accessibility,mobile navigation markup is required on every page. Three components are rqeuired for mobile navigation:

* `Sticky-bar` mobile navigation wrapper with class `navbar-mobile-container`, `sticky-bar`, and `sticky-sm`
* A button to open/close the navigation with class `navbar-toggle`
* A `navbar` component (auto-filled) with class `navbar-mobile` and `navbar-vertical`

Example of mobile navigation components:
```html
<!--Sticky-bar wrapper-->
<div class="navbar-mobile-container sticky-bar sticky-sm">
    <div class="green-bar">
        <div class="container flex-container flex-middle" role="navigation">
            <!--NDSU logo-->
            <h1><img src="images/logo.png" alt="North Dakota State University" title="" height="35" width="73" /></h1>
            <!--Mobile menu toggle button-->
            <button type="button" class="btn btn-yellow navbar-toggle"><span class="sr-only">Mobile menu</span></button>
        </div>
    </div>
    <!--Auto filled navbar component-->
    <ul class="navbar navbar-mobile navbar-vertical navbar-dark">
    </ul>
    <!--Page title-->
    <div class="page-title-bar">
    </div>
</div>
```

The mobile `navbar` starts empty, and will be filled based on other menus exisiting on the page. For more information on how to include menu items on a mobile navigation, please go to [_Mobile Navigation_ section of the `navbar` component](/ndsu-web-template/components/navbar#mobile-navigation) page.


#### Desktop Navigation
Visit the [`navbar` component](/ndsu-web-template//components/navbar) for more information on how to use the `navbar` component as desktop navigation.

#### Sticky Components
Visit the [`sticky-bar` component](/ndsu-web-template//components/sticky-bar) for more information on how to use the `sticky-bar` component for both desktop and mobile navigations.


### Main

This is where the page content goes.

```html
<main id="content" tabindex="-1">
<!--PAGE CONTENT GOES HERE-->
</main>
```

### Footer

A footer with departmental/organization address is required for every page. The text version of the address should be wrapped in `address` HTML element.

An example of footer with address:
```html
<!--footer wiith green background-->
<footer class="footer-green">
    <section class="footer-address">
        <!--NDSU logo-->
        <img src="https://static.ndsu.nodak.edu/images/NDSU.twolines.gif" alt="North Dakota State University" />
        <!--Wrap the address text in address element-->
        <address>
            <h6>University Relations</h6>
            North Dakota State University<br> Old Main 204<br> Dept 6000 PO Box 6050<br> Fargo, ND 58108-6050<br>
            <br>
            <a href="tel:17012311068"><span class="sr-only">Phone: </span>+1 (701) 231-1068</a><br>
            <a href="fax:17012311989">Fax: +1 (701) 231-1068</a>
        </address>
    </section>
</footer>
```

### Script
Script files should go at the end of the `body` HTML element after footer. Make sure to include either minimal or full version build of the script, depending on your needs.

Example:
```html
<!--Minimal version of script-->
<script type="text/javascript" src="https://static.ndsu.nodak.edu/scripts/minimal.min.js"></script>
```

## Minimal and Full Version Builds

 There are two set of style and script that you can use on the page: minimal version (`minimal.css` and `minimal.js`) and full version (`style.css` and `script.js`).

 Minimal version has the essential styles/scripts and basic components needed to create a simple page, e.g. navigation bars, buttons, etc. These following components are included in the minimal version:

 * _List of minimal components_

 Some components are not included in the minimal version, thus requiring the page to use the full version of styles/scripts. The following components require the use of full version:

 * _List of full version components_

 Reference the style of the version inside the `head` element

 ```html
<head>
    <!--...-->
    <link rel="stylesheet" type="text/css" href="https://static.ndsu.nodak.edu/styles/minimal.min.css" />
</head>
 ```