# Developer Guide

## Project Structures

The source files (`src` directory) are divided into two groups: `essentials` and `components`. The script and style files from the source will be concatenated into one single file each for script and sytle. The sample _.html_ and _.md_ files will be copied into `dist` directory for end-users to refer to.

* Root
  * docs
    * components
      * component name
        * _README.md, example.html_
        * _no script files_
    * README.md for `docs` directory
    * _sample basic layouts/templates (e.g. template.html, two-column.html)_
  * src
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
* `README.md` file that describes what the component is for and how to use it. A developer guide may also be included here.
* At least one `example.html` that contains working example of the component.
* Any screenshot/image that may be useful.

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

## The README.md file
Each component should have a _README.md_ file that gives at least brief description on how to use the component. This also includes an example markup for each usage. 

Please edit the _README.md_ file located in the `src` directory. Every component's _README.md_ file will be copied to the `docs` directory for end user's use by executing one of the following gulp tasks:

```bash
gulp build
```
OR

```bash
gulp copy
```

Make sure to do this before you execute commit and/or push.

## Running gulp tasks for development

Styles are written using SCSS preprocessor. `NodeJS` is required to compile SCSS to CSS. It is advised to use provided `gulp` tasks to automate build as well as to enable `browsersync`.

Make sure to have `gulp` installed globally on your machine.

```bash
npm install gulp -g
```

In the directory, run the `install` command to install all dependencies.

```bash
npm install
```

And finally, run the task `serve` to begin `browsersync`.


```bash
gulp serve
```

Your default browser should launch `localhost:3000` and open the default page for the development (*template.html*). All changes to *.html* and *.scss* will be refreshed automatically by `browsersync`.
 