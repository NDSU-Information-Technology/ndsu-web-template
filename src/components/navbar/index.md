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
{{#getJsonContext '{"links": [{"url": "link1", "text": "Link 1"},{"url": "link2", "text": "Link 2"},{"url": "link3", "text": "Link 3"}]}'}}
{{> _navbar this }}
{{/getJsonContext}}
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
{{#getJsonContext '{"additionalClasses": ["navbar-justify"], "links": [{"url": "link1", "text": "Link 1"},{"url": "link2", "text": "Link 2"},{"url": "link3", "text": "Link 3"}]}'}}
{{> _navbar this }}
{{/getJsonContext}}
```

Left-align links example:
```html
{{#getJsonContext '{"additionalClasses": ["navbar-left"], "links": [{"url": "link1", "text": "Link 1"},{"url": "link2", "text": "Link 2"},{"url": "link3", "text": "Link 3"}]}'}}
{{> _navbar this }}
{{/getJsonContext}}
```


### Color

Available color classes: 
* `navbar-dark`: Use dark background with light font color

Example:
```html
{{#getJsonContext '{"additionalClasses": ["navbar-dark"], "links": [{"url": "link1", "text": "Link 1"},{"url": "link2", "text": "Link 2"},{"url": "link3", "text": "Link 3"}]}'}}
{{> _navbar this }}
{{/getJsonContext}}
```


### Direction

Available direction classes:
* `navbar-horizontal` (default): Horizontal navigation, with center-aligned text
* `navbar-vertical`: Vertical navigation, with left-aligned text

`navbar-vertical` example:
```html
{{#getJsonContext '{
  "additionalClasses": [
    "navbar-vertical"
  ],
  "links": [
    {
      "url": "link1",
      "text": "Link 1"
    },
    {
      "url": "link2",
      "text": "Link 2"
    },
    {
      "url": "link3",
      "text": "Link 3"
    }
  ]
}'}}
{{> _navbar this }}
{{/getJsonContext}}
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
{{#getJsonContext '{
  "additionalClasses": [
    "navbar-dark"
  ],
  "links": [
    {
      "url": "link1",
      "text": "Link 1",
      "childNavbar": {
        "additionalClasses": [
          "navbar-vertical"
        ],
        "links": [
          {
            "url": "submenu1",
            "text": "Sub-Menu 1"
          },
          {
            "url": "submenu2",
            "text": "Sub-Menu 2"
          },
          {
            "url": "submenu3",
            "text": "Sub-Menu 3"
          }
        ]
      }
    },
    {
      "url": "link2",
      "text": "Link 2"
    },
    {
      "url": "link3",
      "text": "Link 3"
    }
  ]
}'}}
{{> _navbar this }}
{{/getJsonContext}}
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
{{#getJsonContext '{
  "additionalClasses": [
    "navbar-dark"
  ],
  "links": [
    {
      "url": "link1",
      "text": "Link 1",
      "childNavbar": {
        "additionalClasses": [
          "extended-child-navbar"
        ],
        "links": [
          {
            "text": "Section 1",
            "extendedChildSection": true,
            "childNavbar": {
              "additionalClasses": [
                "navbar-vertical"
              ],
              "links": [
                {
                  "url": "submenu1",
                  "text": "Sub-Menu 1"
                },
                {
                  "url": "submenu2",
                  "text": "Sub-Menu 2"
                },
                {
                  "url": "submenu3",
                  "text": "Sub-Menu 3"
                }
              ]
            }
          },
          {
            "text": "Section 2",
            "extendedChildSection": true,
            "childNavbar": {
              "additionalClasses": [
                "navbar-vertical"
              ],
              "links": [
                {
                  "url": "submenu4",
                  "text": "Sub-Menu 4"
                },
                {
                  "url": "submenu5",
                  "text": "Sub-Menu 5"
                },
                {
                  "url": "submenu6",
                  "text": "Sub-Menu 6"
                }
              ]
            }
          },
          {
            "text": "Section 3",
            "extendedChildSection": true,
            "childNavbar": {
              "additionalClasses": [
                "navbar-vertical"
              ],
              "links": [
                {
                  "url": "submenu7",
                  "text": "Sub-Menu 7"
                },
                {
                  "url": "submenu8",
                  "text": "Sub-Menu 8"
                },
                {
                  "url": "submenu9",
                  "text": "Sub-Menu 9"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "url": "link2",
      "text": "Link 2"
    },
    {
      "url": "link3",
      "text": "Link 3"
    },
    {
      "url": "link4",
      "text": "Link 4"
    }
  ]
}'}}
{{> _navbar this }}
{{/getJsonContext}}
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
{{#getJsonContext '{"additionalClasses": ["navbar-mobilize"], "links": [{"url": "link1", "text": "Link 1"},{"url": "link2", "text": "Link 2", "hideMobile": true},{"url": "link3", "text": "Link 3"}]}'}}
{{> _navbar this }}
{{/getJsonContext}}
```

Resize browser window to a mobile page's width, and notice that the links specified have been added to the mobile navigation.

A child `navbar` component will also be included in mobile navigation if its parent is included.

### Mobile Links Ordering
By default, elements will be added according to their DOM position on a document. To override the position, add the attribute `data-mobile-order` with an integer value. The default value is 0; elements are sorted in ascending order, negative values are accepted.


## Indicating current page and branch

Use the css class `active-branch` to indicate that the item is in the current active branch. Use the class `active` to indicate that the link is the current page the user is on. It is **recommended** to use `div` instead of `a` element for current page to disable the link.

Example below shows a navigation for a page with breadcrumb Home > Link 1 > Sub-Menu 2

```html
{{#getJsonContext '{
  "additionalClasses": [
    "navbar-dark"
  ],
  "links": [
    {
      "url": "home",
      "home": true,
      "activeBranch": true
    },
    {
      "url": "link1",
      "text": "Link 1",
      "activeBranch": true,
      "childNavbar": {
        "additionalClasses": [
          "navbar-vertical"
        ],
        "links": [
          {
            "url": "submenu1",
            "text": "Sub-Menu 1"
          },
          {
            "url": "submenu2",
            "text": "Sub-Menu 2",
            "active": true
          },
          {
            "url": "submenu3",
            "text": "Sub-Menu 3"
          }
        ]
      }
    },
    {
      "url": "link2",
      "text": "Link 2"
    },
    {
      "url": "link3",
      "text": "Link 3"
    }
  ]
}'}}
{{> _navbar this }}
{{/getJsonContext}}
```