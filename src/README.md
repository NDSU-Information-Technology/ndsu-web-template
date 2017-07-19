# Contributor Guide

## Project Structures

The source files (`src` directory) are divided into two groups: `essentials` and `components`. The script and style files from the source will be concatenated into one single file each for script and sytle. 

The `docs` directory contain a source code for the [NDSU Web Template Github Pages](https://ndsu-information-technology.github.io/ndsu-web-template/). All the files in the directory are auto-generated and copied from the `src` directory, **except the _index.md_ file located directly under `docs` directory**.. If you wish to edit the documentation, please edit the related files in the `src` directory. 

* Root
  * docs
    * _layouts
      * _layouts for Github Pages_
    * assets
      * css
      * js
    * components
      * component name
        * _index.md_
        * _no script files_
    * images
    * templates
      * _sample basic layouts/templates (e.g. blank.html, two-column.html)_
    * index.md (**Not auto-generated**)
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
        * _style, script, README.md, example.html_
    * essentials
      * scripts
        _essential script files (e.g. global.js)_
      * styles
        * mixins
        * _essential style files (e.g basic.scss, variables.scss)_
    * README.md for `src` directory
    * _sample basic layouts/templates (e.g. template.html, two-column.html)_
  * README.md
  * _Other necessary project files (e.g. gulpfile.js, package.json)_

### Essentials

Essentials directory contains:
* Global scripts for common utilities (e.g. NDSU js object)
* Header/Footer styles
* CSS utility classes
* SASS mixins and variables

_NOTE_: If you intend to add mixins for a component, please place them inside the `mixins` directory under `essentials/styles/mixins`. Although some mixins may be specific to a component, some can also be useful for other components and/or utilities (e.g. `button` mixins);

### Components

To make it easier for developers to add, remove, or modify component, all other components/modules should be put under `components` directory.

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
* [gallery](components/gallery/)
* [generic-content](components/generic-content/)
* [jumbotron](components/jumbotron/)
* [layout](components/layout/)
* [navbar](components/navbar/)
* [newsevents](components/newsevents/)
* [picture](components/picture/)
* [quicklinks](components/quicklinks/)
* [sflgru](components/sflgru/)
* [social-media](components/social-media/)
* [sticky-bar](components/sticky-bar/)
* [themes](components/themes/)

## Minimal and Full Versions

Currently there are two build versions of styles and scripts: minimal and full. Minimal is intended to have the bare essentials and components required to have a basic NDSU-styled page for most people.

The style definition for each version is located under `src` directory (`minimal.scss` and `full.css`). The sript definition is written into the config object in the `gulpfile.js` file. (_Perhaps a better way to manage a version? JSON file?_).

## Handlebars
The NDSU Web Template components and layouts are built using [`handlebars`](http://handlebarsjs.com/). Check out [partials tutorial](http://handlebarsjs.com/partials.html) and [helpers tutorial](http://handlebarsjs.com/builtin_helpers.html) as they are helpful in building templates.

## The index.md file
Each component should have a _index.md_ file that gives at least brief description on how to use the component. This also includes an example markup for each usage. All _index.md_ files will be built and copied to the `docs` directory for end-user documentation.

Please edit the _index.md_ file located in the `src` directory. Every component's _index.md_ file will be copied to the `docs` directory for end user's use by executing one of the following gulp tasks:

```bash
gulp handlebars
```

Additionally, a compiled version of _index.md_ will be saved as _README.md_ in the same directory.

Make sure to do this before you execute commit and/or push.

## Running gulp tasks for development

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

### Specific Tasks

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

## Jekyll
The end-user documentation located under `docs` directory is hosted on github pages [https://ndsu-information-technology.github.io/ndsu-web-template/](https://ndsu-information-technology.github.io/ndsu-web-template/). Github Pages compile the static files using `jekyll`. Optionally, you can also run jekyll on your local machine to preview the documentation.

Note: `Ruby` is required to generate static files using Jekyll. 