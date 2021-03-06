---
layout: component
title: Navbar Component
---

The `navbar` component is part of the minimal version.

## Basic Usage

A basic `navbar` is composed of:
* `ul` element with CSS class of `navbar`
* A collection of `li` elements with a class of `nav-item` under parent `ul` element
* A clickable `a` element with class of `nav-link` under each `li` element

Typical DOM structure:
* `ul.navbar`
  * `li.nav-item`
    * `a.nav-link`
  * `li.nav-item`
    * `a.nav-link`
  * `li.nav-item`
    * `a.nav-link`

For accessibility reason, make sure that the `navbar` component is wrapped around an element with `role` attribute of `navigation`. If a `navbar` component is a child of another `navbar` component (e.g. dropdown menu), only the parent `navbar` requires to be wrapped around an element with `role` of `navigation`. See _Dropdown_ section below for example.

Basic usage example:
```html
<div role="navigation">
    <ul class="navbar" >
        <li class="nav-item">
            <a class="nav-link " href="link1">
                Link 1
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link2">
                Link 2
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link3">
                Link 3
            </a>
        </li>
    </ul>
</div>
```

## Styling

The navbar component inherits background color and link styling from its parent's styles. You can override the following styles with pre-defined classes.

### Alignment

Available alignment classes:
* `navbar-center` (default): Center the links
* `navbar-justify`: Expand and justify the links
* `navbar-left`: Left align the links
* `navbar-right`: Right align the links

Justified links example:
```html
<div role="navigation">
    <ul class="navbar navbar-justify" >
        <li class="nav-item">
            <a class="nav-link " href="link1">
                Link 1
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link2">
                Link 2
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link3">
                Link 3
            </a>
        </li>
    </ul>
</div>
```

Left-align links example:
```html
<div role="navigation">
    <ul class="navbar navbar-left" >
        <li class="nav-item">
            <a class="nav-link " href="link1">
                Link 1
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link2">
                Link 2
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link3">
                Link 3
            </a>
        </li>
    </ul>
</div>
```


### Color

Available color classes: 
* `navbar-dark`: Use dark background with light font color

Example:
```html
<div role="navigation">
    <ul class="navbar navbar-dark" >
        <li class="nav-item">
            <a class="nav-link " href="link1">
                Link 1
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link2">
                Link 2
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link3">
                Link 3
            </a>
        </li>
    </ul>
</div>
```


### Direction

Available direction classes:
* `navbar-horizontal` (default): Horizontal navigation, with center-aligned text
* `navbar-vertical`: Vertical navigation, with left-aligned text

`navbar-vertical` example:
```html
<div role="navigation">
    <ul class="navbar navbar-vertical" >
        <li class="nav-item">
            <a class="nav-link " href="link1">
                Link 1
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link2">
                Link 2
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link3">
                Link 3
            </a>
        </li>
    </ul>
</div>
```


## Dropdown/Nested Menu

To create a dropdown menu, add another `navbar` element with additional class `child-navbar` under a `nav-item` parent element next to `nav-link` element. Since a typical child `navbar` is usually a vertically-oriented navigation, you may want to add the class `navbar-vertical` to the child `navbar` element.

Example DOM structure for dropdown:
* `ul.navbar`
  * `li.nav-item`
    * `a.nav-link`
    * `ul.navbar.navbar-vertical.child-navbar`
      * `li.nav-item`
        * `a.nav-link`
      * `li.nav-item`
        * `a.nav-link`
  * `li.nav-item`
    * `a.nav-link`
  * `li.nav-item`
    * `a.nav-link`


Example HTML markup for dropdown:
```html
<div role="navigation">
    <ul class="navbar navbar-dark" >
        <li class="nav-item">
            <a class="nav-link " href="link1">
                Link 1
            </a>
            <ul class="navbar navbar-vertical child-navbar" >
                <li class="nav-item">
                    <a class="nav-link " href="submenu1">
                        Sub-Menu 1
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="submenu2">
                        Sub-Menu 2
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="submenu3">
                        Sub-Menu 3
                    </a>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link2">
                Link 2
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link3">
                Link 3
            </a>
        </li>
    </ul>
</div>
```

<!--### Extended dropdown menu

An extended dropdown menu has multiple columns under one link. This can be done by using nested `navbar` components with depth of 3, and adding class `extended-child-navbar` to the first `child-navbar` and `extended-child-section` to `nav-item` elements of this `navbar`.

Example DOM structure:
* `ul.navbar`
  * `li.nav-item`
    * `a.nav-link`
    * `ul.navbar.child-navbar.extended-child-navbar`
      * `li.nav-item.extended-child-section`
        * `h5.child-section-title`
        * `ul.navbar.child-navbar.navbar-vertical`
          * `li.nav-item`
          * `li.nav-item`
          * `li.nav-item`
        * `h5.child-section-title`
        * `ul.navbar.child-navbar.navbar-vertical`
          * `li.nav-item`
          * `li.nav-item`
          * `li.nav-item`
        * `h5.child-section-title`
        * `ul.navbar.child-navbar.navbar-vertical`
          * `li.nav-item`
          * `li.nav-item`
          * `li.nav-item`
  * `li.nav-item`
    * `a.nav-link`
  * `li.nav-item`
    * `a.nav-link`
  * `li.nav-item`
    * `a.nav-link`

Example HTML markup for the DOM structure given above:

```html
<div role="navigation">
    <ul class="navbar navbar-dark" >
        <li class="nav-item">
            <a class="nav-link " href="link1">
                Link 1
            </a>
            <ul class="navbar extended-child-navbar child-navbar" >
                <li class="nav-item extended-child-section">
                    <h5 class="child-section-title">Section 1</h5>
                    <ul class="navbar navbar-vertical child-navbar" >
                        <li class="nav-item">
                            <a class="nav-link " href="submenu1">
                                Sub-Menu 1
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="submenu2">
                                Sub-Menu 2
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="submenu3">
                                Sub-Menu 3
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item extended-child-section">
                    <h5 class="child-section-title">Section 2</h5>
                    <ul class="navbar navbar-vertical child-navbar" >
                        <li class="nav-item">
                            <a class="nav-link " href="submenu4">
                                Sub-Menu 4
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="submenu5">
                                Sub-Menu 5
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="submenu6">
                                Sub-Menu 6
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item extended-child-section">
                    <h5 class="child-section-title">Section 3</h5>
                    <ul class="navbar navbar-vertical child-navbar" >
                        <li class="nav-item">
                            <a class="nav-link " href="submenu7">
                                Sub-Menu 7
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="submenu8">
                                Sub-Menu 8
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="submenu9">
                                Sub-Menu 9
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link2">
                Link 2
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link3">
                Link 3
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link4">
                Link 4
            </a>
        </li>
    </ul>
</div>
```-->

## Mobile Navigation

By default, links in `navbar` will not be included in a mobile navigation. To add a `navbar` component into mobile navigation, add the CSS class `navbar-mobilize`. To exclude a `nav-item` from being exported into mobile navigation, add the class `nav-item-mobile-hide`.

Example:

```html
<div role="navigation">
    <!--This navbar will be included in mobile navigation-->
    <ul class="navbar navbar-mobilize">
        <li class="nav-item"><a class="nav-link" href="link1/">Link 1</a></li>
        <!--This nav-item will be excluded from mobile navigation-->
        <li class="nav-item nav-item-mobile-hide">
            <a class="nav-link" href="link2/">Link 2</a>
        </li>
        <li class="nav-item"><a class="nav-link" href="link3/">Link 3</a></li>
    </ul>
</div>
```

```html
<div role="navigation">
    <ul class="navbar navbar-mobilize" >
        <li class="nav-item">
            <a class="nav-link " href="link1">
                Link 1
            </a>
        </li>
        <li class="nav-item nav-item-mobile-hide">
            <a class="nav-link " href="link2">
                Link 2
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link3">
                Link 3
            </a>
        </li>
    </ul>
</div>
```

Resize browser window to a mobile page's width, and notice that the links specified have been added to the mobile navigation.

A child `navbar` component will also be included in mobile navigation if its parent is included.

### Mobile Links Ordering
By default, elements will be added according to their DOM position on a document. To override the position, add the attribute `data-mobile-order` with an integer value. The default value is 0; elements are sorted in ascending order, negative values are accepted.


## Indicating current page and branch

Use the css class `active-branch` to indicate that the item is in the current active branch. Use the class `active` to indicate that the link is the current page the user is on. It is **recommended** to use `div` instead of `a` element for current page to disable the link.

Example below shows a navigation for a page with breadcrumb Home > Link 1 > Sub-Menu 2

```html
<div role="navigation">
    <ul class="navbar navbar-dark" >
        <li class="nav-item nav-item-home">
            <a class="nav-link active-branch "href="home"><span class="sr-only">Home </span>&#8962;</a>
        </li>
        <li class="nav-item">
            <a class="nav-link  active-branch" href="link1">
                Link 1
            </a>
            <ul class="navbar navbar-vertical child-navbar" >
                <li class="nav-item">
                    <a class="nav-link " href="submenu1">
                        Sub-Menu 1
                    </a>
                </li>
                <li class="nav-item">
                    
                    <div class="nav-link active">
                        Sub-Menu 2
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="submenu3">
                        Sub-Menu 3
                    </a>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link2">
                Link 2
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="link3">
                Link 3
            </a>
        </li>
    </ul>
</div>
```