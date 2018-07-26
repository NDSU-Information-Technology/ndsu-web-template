'use strict';

const spawn = require('child_process').spawn;
const spawnSync = require('child_process').spawnSync;

const p = require('./package.json');
let currentPackageVersion = p.version;

const gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const del = require('del');
const fs = require('fs');
const filter = require('gulp-filter');
const glob = require('glob');
const globArray = require('glob-array');
const gutil = require('gulp-util');
const handlebars = require('gulp-compile-handlebars');
const insert = require('gulp-insert');
const mkdirp = require('mkdirp');
const path = require('path');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

var srcDir = path.resolve(__dirname, 'src');
var docsDir = path.resolve(__dirname, 'docs');
var buildConfigDir = path.resolve(__dirname, 'src/build-config');
var componentsDir = path.resolve(__dirname, 'src/components');

const getSubdirectoriesSync = (dir) => fs.readdirSync(dir)
    .filter(f => fs.statSync(path.join(dir, f)));

let components = getSubdirectoriesSync(componentsDir)
.map(c => {
    let cdir = path.join(componentsDir, c);
    return {
        name: c,
        dir: cdir,
        builds: [],
        js: cdir + '/**/*.js',
        sass: cdir + '/**/*.scss',
        css: cdir + '/**/*.css'
    };
})
.reduce((ac, c) => {
    ac[c.name] = c;
    return ac;
}, {});

let buildConfigs = getSubdirectoriesSync(buildConfigDir)
    .map(f => {
        let bcDir = path.join(buildConfigDir, f);
        let bc = JSON.parse(fs.readFileSync(path.join(bcDir, 'config.json')));
        bc.dir = bcDir;
        bc.components.forEach(c => {
            if (components[c]) {
                components[c].builds.push(bc.name);
            }
        });
        return bc;
    });

function continueOnError(err) {
    gutil.log(err.toString());
    this.end();
};

const flatten = arr => arr.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

/* SASS AND CSS TASKS */

const getSassCompileTaskName = (componentName) => 'sass:component:' + componentName;
const getStyleConcatTaskName = (buildName) => 'style:concat:' + buildName;
const getStyleCopyTaskName = (buildName) => 'style:copy:' + buildName;
const getStyleBuildTaskName = (buildName) => 'style:build:' + buildName;
const getSassWatchTaskName = (componentName) => 'sass:component:watch:' + componentName;
const getCssWatchTaskName = (componentName) => 'css:component:watch:' + componentName;

const getSassCompileTask = (component) => {
    let taskName = getSassCompileTaskName(component.name);
    gulp.task(taskName, () => {
        let utilitiesStylesDir = path.join(srcDir, 'utilities/styles');
        return gulp.src(component.sass, {base: './'})
            .pipe(sass({includePaths: [utilitiesStylesDir]})).on('error', sass.logError)
            .pipe(autoprefixer())
            .pipe(rename({extname: '.css'}))
            .pipe(gulp.dest('.'));styles
    });
    return taskName;
};

const getStyleConcatTask = (bc) => {
    let taskName = getStyleConcatTaskName(bc.name);
    let cssAssetDir = path.join(srcDir, 'assets/css');
    let cssFiles = bc.components.map(c => {
        let component = components[c];
        return component.css;
    });


    gulp.task(taskName, () => {
        return gulp.src(cssFiles)
            .pipe(concat(bc.outputName.style + '.css'))
            .pipe(gulp.dest(cssAssetDir))
            .pipe(rename({suffix: '.min'}))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest(cssAssetDir))
    });
    return taskName;
};

const getStyleCopyTask = (bc) => {
    let taskName = getStyleCopyTaskName(bc.name);
    let concatTaskName = getStyleConcatTaskName(bc.name);
    let cssFiles =  [path.join(srcDir, 'assets/css', bc.outputName.style) + '.css',
                path.join(srcDir, 'assets/css', bc.outputName.style) + '.min.css'];

    let cssDocsAssetDir = path.join(docsDir, 'assets/css');

    gulp.task(taskName, gulp.series(concatTaskName, function() {
        return gulp.src(cssFiles)
            .pipe(gulp.dest(cssDocsAssetDir));
    }));
    return taskName;
};

const getStyleBuildTask = (bc) => {
    let componentSassTasks = bc.components.map(getSassCompileTaskName);
    let taskName = getStyleBuildTaskName(bc.name);
    let copyTaskName = getStyleCopyTaskName(bc.name);
    
    gulp.task(taskName, gulp.series(
        componentSassTasks, copyTaskName
    ));
    return taskName;
};

const getSassWatchTask = (component) => {
    let taskName = getSassWatchTaskName(component.name);
    let compileTaskName = getSassCompileTaskName(component.name);
    gulp.task(taskName, () => {
        return gulp.watch(component.sass, [compileTaskName]);
    });

    return taskName;
};

const getCssWatchTask = (component) => {
    let taskName = getCssWatchTaskName(component.name);
    let copyTaskNames = component.builds.map(getStyleCopyTaskName);
    gulp.task(taskName, () => {
        return gulp.watch(component.css, copyTaskNames);
    });

    return taskName;options
};

let sassCompileTasks = Object.values(components).map(getSassCompileTask);
let styleConcatTasks = buildConfigs.map(getStyleConcatTask);
let styleCopyTasks = buildConfigs.map(getStyleCopyTask);
let styleBuildTasks = buildConfigs.map(getStyleBuildTask);
let sassWatchTasks = Object.values(components).map(getSassWatchTask);
let cssWatchTasks = Object.values(components).map(getCssWatchTask);

gulp.task('style:build', gulp.series(styleBuildTasks));
gulp.task('style:watch', gulp.series(flatten([sassWatchTasks,cssWatchTasks])));


/* JS TASKS */


const getScriptConcatTaskName = (buildName) => 'script:concat:' + buildName;
const getScriptBuildTaskName = (buildName) => 'script:build:' + buildName;
const getScriptWatchTaskName = (buildName) => 'script:component:watch:' + buildName;

const getScriptConcatTask = (bc) => {
    let taskName = getScriptConcatTaskName(bc.name);
    let utilitiesScriptsDir = path.join(srcDir, 'utilities/scripts');
    let jsFiles = [];

    if (bc.usePolyfill) jsFiles.push(path.join(utilitiesScriptsDir, 'polyfill.js'));
    Array.prototype.push.apply(jsFiles, bc.components.map(c => {
        let component = components[c];
        return component.js;
    }));
    
    gulp.task(taskName, () => {
        return gulp.src(jsFiles)
            .pipe(concat(bc.outputName.script + '.js'))
            .pipe(gulp.dest(bc.dir));
    });

    return taskName;
};

const getScriptBuildTask = (bc) => {
    let taskName = getScriptBuildTaskName(bc.name);
    let concatTaskName = getScriptConcatTaskName(bc.name);
    let concattenatedJsFile = path.join(bc.dir, bc.outputName.script + '.js');
    let jsAssetDir = path.join(srcDir, 'assets/js');
    let jsDocsAssetDir = path.join(docsDir, 'assets/js');

    gulp.task(taskName, gulp.series(concatTaskName, function() {
        return gulp.src(concattenatedJsFile)
            .pipe(babel({
                presets: [
                    ['env', {
                        'targets': p.browserslist
                    }]
                ]
            }))
            .pipe(gulp.dest(jsAssetDir))
            .pipe(gulp.dest(jsDocsAssetDir))
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(jsAssetDir))
            .pipe(gulp.dest(jsDocsAssetDir))
            .on('end', () => {
                del(concattenatedJsFile);
            })
            .on('error', (err) => { 
                gutil.log(gutil.colors.red('[Error]'), err.toString()); 
            });
    }));

    return taskName;
};

const getScriptWatchTask = (component) => {
    let taskName = getScriptWatchTaskName(component.name);
    let scriptBuildTaskNames = component.builds.map(getScriptBuildTaskName);

    gulp.task(taskName, () => {
        return gulp.watch(component.js, scriptBuildTaskNames);
    });

    return taskName;
};

let scriptConcatTasks = buildConfigs.map(getScriptConcatTask);
let scriptBuildTasks = buildConfigs.map(getScriptBuildTask);
let scriptWatchTasks = Object.values(components).map(getScriptWatchTask);


gulp.task('script:build', gulp.series(scriptBuildTasks));
gulp.task('script:watch', gulp.series(scriptWatchTasks));

/* HANDLEBARS TASKS */

const handlebarsConfig = {
    helpers: {
        getJsonContext: (data, opt) => {
            try {
                return opt.fn(JSON.parse(data));
            }
            catch (err) {
                console.log(err);
                return undefined;
            }
        },
        ifnull: (v1, v2) => {
            return v1 || v2;
        },
        ifcond: (v1, operator, v2, options) => {
            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                case '===':
                    return (v1 === v2) ? options.fn(this) : options.inverse(this);
                case '!=':
                    return (v1 != v2) ? options.fn(this) : options.inverse(this);
                case '!==':
                    return (v1 !== v2) ? options.fn(this) : options.inverse(this);
                case '<':
                    return (v1 < v2) ? options.fn(this) : options.inverse(this);
                case '<=':
                    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                case '>':
                    return (v1 > v2) ? options.fn(this) : options.inverse(this);
                case '>=':
                    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                case '&&':
                    return (v1 && v2) ? options.fn(this) : options.inverse(this);
                case '||':
                    return (v1 || v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
            }
        }
    },
    htmlFiles: path.join(srcDir, '**/[^_]*.html'),
    htmlPartials: path.join(srcDir, '**/_*.html'),
    mdFiles: path.join(srcDir, '**/index.md'),
    output: {
        "dev": srcDir,
        "docs": docsDir,
    }
};

gulp.task('handlebars:build', () => {
    var partials = globArray.sync([handlebarsConfig.htmlPartials])
        .reduce((acc, filePath) => {
            var fileName = filePath.substring(filePath.lastIndexOf("/") + 1, filePath.lastIndexOf("."));
            var template = fs.readFileSync(filePath, 'utf8');
            acc[fileName] = template;
            return acc;
    }, {});
    
    var options = {
        partials: partials,
        helpers: handlebarsConfig.helpers,
        compile: {
            noEscape: true
        }
    };
    
    return gulp.src([handlebarsConfig.mdFiles, handlebarsConfig.htmlFiles])
        .pipe(handlebars({}, options).on('error', continueOnError))
        .pipe(gulp.dest(handlebarsConfig.output.docs))
        .pipe(filter(['**/index.md']))
        .pipe(rename({basename: 'README'}))
        .pipe(replace(/^---([\s\S]*?)---/i, ''))
        .pipe(insert.prepend('_**WARNING**: This README.md file is auto-generated by build process. To edit the content of this file, please edit the `index.md` file located in the same folder instead._\n'))
        .pipe(gulp.dest(handlebarsConfig.output.dev))
        ;
});

gulp.task('handlebars:watch', () => {
    return gulp.watch([
        handlebarsConfig.mdFiles, 
        handlebarsConfig.htmlFiles, 
        handlebarsConfig.htmlPartials
    ], ['handlebars:build']);
});



/* JEKYLL TASKS */

const runJekyllProcess = (callback, useWatch) => {
    let exitHandler = () => {
        if (jekyll && jekyll.constructor.name === 'ChildProcess') {
            console.log('Killing jekyll process');
            jekyll.kill();
        };
        process.exit();
    };
    
    let bundleArgs = ['exec', 'jekyll', 'build', '--incremental'];
    if (useWatch) bundleArgs.push('--watch');

    let jekyll = spawn('bundle', bundleArgs, {stdio: 'inherit'})
        .on('error', (err) => {
            console.log(err);
            if (typeof callback === 'function') callback();
        })
        .on('close', (code, signal) => {
            if (typeof callback === 'function') callback();
        });
        
    process.on('exit', exitHandler);
    process.on('SIGINT', exitHandler);
    process.on('SIGTERM', exitHandler);

    return jekyll;
};

gulp.task('jekyll:build', gulp.series([], function(callback) {
    runJekyllProcess(callback, false);
}));

gulp.task('build', gulp.series(
	gulp.parallel(
		'script:build',
		'style:build',
		'handlebars:build'
	),
    'jekyll:build'
));

/* COMBINED TASKS */


gulp.task('watch', gulp.series(['script:watch', 'style:watch', 'handlebars:watch']));


gulp.task('serve', gulp.series(['build', 'watch'], function(callback) {
    browserSync.init({
        server: {
            baseDir: '_site',
            routes: {
                "/ndsu-web-template": "_site"
            }
        },
        startPath: '/ndsu-web-template',
        ui: false,
        files: [
            '_site/assets/css/style.docs*.css',
            '_site/assets/js/script.docs*.js',
            '_site/**/*.html'
        ],
        // Prevent multiple reloads
        // Adjust this depending on how fast your machine is
        reloadDebounce: 1800
    });

    runJekyllProcess(callback, true);
}));
