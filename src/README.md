# Contributor Guide

Content:
* [Project Structures](#project-structures)
  * [The `src` directory](#the-src-directory)
* [Template Build Versions](#template-build-versions)
* [Developing the Template](#developing-the-template)
  * [HTML Partials](#html-partials)
  * [Scripts](#scripts)
  * [Styles](#styles)
  * [Gulp Tasks](#gulp-tasks)
* [Documentations](#documentations)
  * [index.md files](#indexmd-files)
  * [Jekyll](#jekyll)
  * [Sample Pages](#sample-pages)

## Project Structures

Under the root directory, there are two main directories:
* [`docs`](docs/): This directory contains the documentations that is hosted on [NDSU Web Template Github Pages](https://ndsu-information-technology.github.io/ndsu-web-template/). **NOTE: almost all the files under this directory are auto-generated**. Please go to [Documentations](#documentations) section for more information.
* [`src`](src/): This directory has all the source code for the project, as well as the source code for the documentations.

### The `src` directory

The source code files are divided into two groups: `essentials` and `components`. The script and style files from the source will be concatenated into one single file each for script and sytle.

* src
  * _includes
    * _head partial, footer partial, etc._
  * _layouts
    * _base.html: base layout for all pages
    * _layouts for Github Pages_
  * assets
    * css
    * js
    * scss
  * components
    * component name
      * _style, script, html partials, index.md_
  * essentials
    * scripts
      _essential script files (e.g. global.js)_
    * styles
      * mixins
      * _essential style files (e.g basic.scss, variables.scss)_
  * README.md for `src` directory
  * _sample basic layouts/templates (e.g. template.html, two-column.html)_

### Essentials

Essentials directory contains:
* Global scripts for common utilities (e.g. NDSU js object)
* Header/Footer styles
* CSS utility classes
* SASS mixins and variables

_NOTE_: If you intend to add mixins for a component, please place them inside the `mixins` directory under `essentials/styles/mixins`. Although some mixins may be specific to a component, some can also be useful for other components and/or utilities (e.g. `button` mixins);

### Components

To make it easier for contributors to add, remove, or modify component, all other components/modules should be put under `components` directory.

_**NOTE**: A component may be a part of the minimal build version, e.g. container and navbar._

Each component should have its own directory under `components` directory, and it should have the following under its directory:

* All the `.scss` and `.js` files the component requires.
* Partial _.html_ or _.hbs_ files
* `index.md` file that describes what the component is for and how to use it. A developer guide may also be included here.

List of currently available components:
* [bigquote](components/bigquote/)
* [button](components/button/)
* [carousel](components/carousel/)
* [container](components/container/)
* [form](components/form/)
* [footer](components/footer/)
* [gallery](components/gallery/)
* [generic-content](components/generic-content/)
* [hero-banner](components/hero-banner/)
* [layout](components/layout/)
* [navbar](components/navbar/)
* [news-events](components/news-events/)
* [picture](components/picture/)
* [quicklinks](components/quicklinks/)
* [sflgru](components/sflgru/)
* [social-media](components/social-media/)
* [sticky-bar](components/sticky-bar/)
* [themes](components/themes/)

## Template Build Versions

Currently there are two build versions of styles and scripts: minimal and full. Minimal is intended to have the bare essentials and components required to have a basic NDSU-styled page for most people.

The style definition for each version is located under `src` directory (`minimal.scss` and `full.css`). The sript definition is written into the config object in the `gulpfile.js` file. (_Perhaps a better way to manage a version? JSON file?_).

## Developing the Template


### HTML Partials

To ensure consistency, the template is broken down into partials, e.g. a blank template page has _head.html partial, _footer.html partial, etc. Essential partials required for each page is located in [_includes](#_includes) directory.

Each component will also have one or multiple HTML partials.

**NOTE**: _For all partials, start the name of the partials with an underscore (e.g. `_green-bar.html`, `_navbar.html`)_


#### Handlebars
The NDSU Web Template components and layouts are built using [`handlebars`](http://handlebarsjs.com/). Check out [partials tutorial](http://handlebarsjs.com/partials.html) and [helpers tutorial](http://handlebarsjs.com/builtin_helpers.html) as they are helpful in building templates.

Refer to [Gulp Tasks](#gulp-tasks) section for information on how to compile handlebars template.

Additionally, these three custom helpers are also available:
* **`getJsonContext`**: takes in JSON string and return it as a JSON object to pass into a component
```hbs
{{#getJsonContext '{
  "links": [
    {
      "foo": "bar 1"
    },
    {
      "foo": "bar 2"
    }
  ], 
  "variable1": "variable value dsfkj;",
  "var2": "nightman"
}'}}
<!--Pass json object above to _navbar partial as a parameter-->
{{> _navbar this}}
{{/getJsonContext}}
```

* **`ifnull`**: takes two input, v1 and v2. If v1 is null then return v2.
```hbs
<!--If variable placeHolder is null or empty then return the string "Keywords"-->
{{#ifnull placeHolder 'Keywords'}}{{/ifnull}}
```
* **`ifcond`**: Conditional operators helper. Takes three strings as inputs: v1, operator, and v2. Note that the operator must be  passed as string.

```hbs
<!--If either the variable primaryCaption or secondaryCaption is true-->
{{#ifcond primaryCaption '||' secondaryCaption}}
<!--Do something here-->
{{/ifcond}}
```

### Scripts

All the scripts needed for the template are written on ES6 Vanilla JS. There is currently no functionality that requires the use of library such as JQuery, although that may change in the future.

The file [global.js](essentials/scripts/global.js) contains functions that are used by multiple components.

Each component may or may not require the use of script for it to operate. 

### Styles

The source code for styles are written in [SCSS Syntax](http://sass-lang.com/guide). Styles may be written in plain CSS as well.

It is not necessary to manually write a browser-specific style (i.e. `-webkit-appearance` for `appearance`), as this will get taken care automatically during the compile process.

The essential directory contains few `.scss` files:
* mixins directory: put all the scss mixins that can be used globally here. mixins.scss has the list of mixins files
* basic.scss: global style, header, footer, green-bar, etc
* reset.scss: simple reset on heading sizes
* utilities.scss: CSS utility classes, such as `sr-only`, `hide-xs`, `hide-sm`, etc.
* variables.scss: global SCSS variables

The components directory contains all the components of the template. For most cases, a component will require a stylesheet. Add the reference to a component's stylesheet to the `full.scss` file directly underneath the components directory and if it is part of minimal version build, to the `minimal.scss` file.


### Gulp Tasks

`gulp` tasks are used to compile `scss` files and `handlebars` templates, to minify/uglyify `css` and `js` files, and to copy necessary files from `src` to `docs` for documentation.

Make sure to have `node` and `gulp` installed globally on your machine.

```bash
npm install gulp -g
```

In the directory, run the `install` command to install all dependencies.

```bash
npm install
```

And finally, run the task `watch` to automatically compile files when you save.

```bash
gulp watch
```

 **Handlebars Task**
 Compile handlebars partials in _.html_ and _index.md_ files and copy to `docs` directory.
 ```bash
 gulp handlebars
 ```

 **Script Task**
 Build and uglify script files:
 ```bash
 gulp scripts
 ```

 **Style Task**
 Compile `scss` files and minify resulting `css` files:
 ```bash
 gulp styles
 ```

 **Combined Task**
 Run `gulp handlebars`, `gulp scripts`, `gulp styles`, then copy files to docs folder.
  ```bash
 gulp copy
 ```

## Documentations

Beside the [`index.md`](docs/index.md) located directly underneath `docs` folder, all the files are auto generated. Do not edit all other files in the `docs` directly. Instead, go to the corresponding copy in the `src` folder to edit a file.

### index.md files
Each component should have a _index.md_ file that gives at least brief description on how to use the component. This also includes an example markup for each usage. All _index.md_ files will be built and copied to the `docs` directory for end-user documentation.

Please edit the _index.md_ file located in the `src` directory. Every component's _index.md_ file will be copied to the `docs` directory for end user's use by executing one of the following gulp tasks:

```bash
gulp handlebars
```

Additionally, a compiled version of _index.md_ will be saved as _README.md_ in the same directory.

Make sure to do this before you execute commit and/or push.


### Jekyll
The end-user documentation located under `docs` directory is hosted on github pages [https://ndsu-information-technology.github.io/ndsu-web-template/](https://ndsu-information-technology.github.io/ndsu-web-template/). Github Pages compile the static files using `jekyll`. Optionally, you can also run jekyll on your local machine to preview the documentation.

Note: `Ruby` is required to generate static files using Jekyll.

Run jekyll on your local machine:

```bash
bundle exec jekyll serve
``` 

Jekyll ouputs the resulting static files in `_site` directory. The site can be accessed on `localhost:4000/ndsu-web-template`. Jekyll **does not** refresh the pages automatically when changes are made. However, you can run `browsersync` on your local machine by running the `gulp` task:

```bash
gulp serve
```
`browsersync` will run on `localhost:3000`.

### Sample Pages

Sample pages are located in the `sample-pages` directory. The list of available sample pages can be viewed at [https://ndsu-information-technology.github.io/ndsu-web-template/sample-pages/](https://ndsu-information-technology.github.io/ndsu-web-template/sample-pages/).