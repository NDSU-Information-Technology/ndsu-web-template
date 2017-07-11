'use strict';

const gulp = require('gulp');
const p = require('./package.json');
let currentPackageVersion = p.version;

const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSyncDev = require('browser-sync').create('dev-server');
const browserSyncDocs = require('browser-sync').create('docs-server');
const concat = require('gulp-concat');
const fs = require('fs');
const gutil = require('gulp-util');
const mkdirp = require('mkdirp');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// TODO: change this to get from package.json, referring to actual github url
const repositoryUrl = '';

const config = {
    "components": {
        "get": (componentName) => {
            let componentDir = './src/components/' + componentName;
            if (!fs.existsSync(componentDir)) {
                return undefined;
            }
            return {
                "scripts": componentDir + '/**/*.js',
                "styles": componentDir + '/**/*.scss'
            };
        },
        "scripts": "./src/components/**/*.js",
        "styles": "./src/components/**/*.scss"
    },
    "essentials": { 
        "scripts": [
            "./src/essentials/scripts/global.js",
            "./src/essentials/**/*.js"
        ],
        "styles": "./src/essentials/**/*.scss",
    },
    "html": {
        "compile": [
            './src/**/*.html',
            '!./node_modules/**/*',
            '!./src/index.html',
        ],
        "dest": {
            "docs": "./docs",
        },
        "watch": {
            "devs": [
                './src/**/*.html'
            ],
            "docs": [
                './docs/**/*.html'
            ]
        }
    },
    "markdown": {
        "compile": [
            './src/**/README.md',
            '!./src/README.md',
            '!./node_modules/**/*'  
        ],
        "dest": {
            "docs": "./docs",
        }
    },
    "scripts": {
        "compile": [
            {
                "name": "minimal",
                "destFileName": "minimal",
                "sourceFiles": [
                    './src/essentials/scripts/global.js',
                ],
                "components": ['container', 'navbar', 'sticky-bar']
            },
            {
                "name": "full",
                "destFileName": "script",
                "sourceFiles": [
                    './src/essentials/scripts/global.js',
                    './src/components/code-example/code-example.js',
                    './src/essentials/scripts/**/*.js',
                    './src/components/**/*.js'
                ],
                "components": []
            },
        ],
        "dest": {
            "dev": './src/assets/js',
            "docs": "./docs/assets/js"
        },
        "watch": {
            "devs": [
                './src/components/**/*.js',
                './src/essentials/scripts/**/*.js'
            ],
            "docs": [
                './docs/assets/js/**/*.js'
            ]
        }
    },
    "styles": {
        "compile": [
            {
                "name": "minimal",
                "destFileName": "minimal",
                "sourceFiles": ['./src/assets/scss/minimal.scss']
            },
            {
                "name": "full",
                "destFileName": "styles",
                "sourceFiles": ['./src/assets/scss/full.scss']
            }
        ],
        "dest": {
            "dev": './src/assets/css',
            "docs": "./docs/assets/css"
        },
        "watch": {
            "devs": [
                './src/components/**/*.scss',
                './src/essentials/**/*.scss'
            ],
            "docs": [
                './docs/assets/css/**/*.css'
            ]
        }
    }
};

const flatten = arr => arr.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);
const generateStyleTask = (sc) => {
    let taskName = 'style:' + sc.name;
    gulp.task(taskName, () => {
        return gulp.src(sc.sourceFiles)
            .pipe(sass({includePaths: ['./src']}).on('error', sass.logError))
            .pipe(rename(sc.destFileName + '.css'))
            .pipe(autoprefixer())
            .pipe(gulp.dest(config.styles.dest.dev))
            .pipe(browserSyncDev.stream())
            .pipe(rename({suffix: '.min'}))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest(config.styles.dest.dev))
            .pipe(browserSyncDev.stream());
    });
    return taskName;
};
const generateScriptTask = (sc) => {
    let taskName = 'script:' + sc.name;
    gulp.task(taskName, () => {
        let sourceFiles = sc.sourceFiles;
        sourceFiles.push(sc.components.map(componentName => {
            let component = config.components.get(componentName);
            if (!component) {
                console.log("WARNING: Component " + componentName + " is not found.")
                return [];
            };
            return component.scripts;
        }));
        return gulp.src(flatten(sourceFiles))
            .pipe(concat(sc.destFileName + '.js'))
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest(config.scripts.dest.dev))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
            .pipe(gulp.dest(config.scripts.dest.dev));
    });
    return taskName;
};

let styleTasks = config.styles.compile.map(generateStyleTask);
let scriptTasks = config.scripts.compile.map(generateScriptTask);

gulp.task('styles', () => {
    runSequence(styleTasks, (error) => {
        if (error) {
            console.log(error);
        }
    });
});

gulp.task('scripts', () => {
    runSequence(scriptTasks, (error) => {
        if (error) {
            console.log(error);
        }
    });
});


// COPY TASKS -------------------------------------------

gulp.task('copy:html', [], () => {
    return gulp.src(config.html.compile)
        .pipe(replace(/(href|src)(=")(http:\/\/localhost:3000\/)(.*)(")/gi, "$1$2https://static.ndsu.nodak.edu/$4$5"))
        .pipe(gulp.dest(config.html.dest.docs));
});

gulp.task('copy:markdown', [], () => {
    return gulp.src(config.markdown.compile)
        .pipe(rename({
            basename: "index",
            extname: ".md"
        }))
        .pipe(gulp.dest(config.markdown.dest.docs));
});

gulp.task('copy:scripts', [], () => {
    return gulp.src(config.scripts.dest.dev + '/**/*.js')
        .pipe(gulp.dest(config.scripts.dest.docs));
});


gulp.task('copy:styles', [], () => {
    return gulp.src(config.styles.dest.dev + '/**/*.css')
        .pipe(gulp.dest(config.styles.dest.docs));
});

gulp.task('copy:scripts:versioned', [], () => {
    let versionDir = config.scripts.dest.docs + '/' + currentPackageVersion;
    if (!fs.existsSync(versionDir)){
        mkdirp.sync(versionDir);
    }

    return gulp.src(config.scripts.dest.dev + '/**/*.js')
        .pipe(rename({suffix: '-' + currentPackageVersion}))
        .pipe(gulp.dest(versionDir));
});
gulp.task('copy:styles:versioned', [], () => {
    let versionDir = config.styles.dest.docs + '/' + currentPackageVersion;
    if (!fs.existsSync(versionDir)){
        mkdirp.sync(versionDir);
    }

    return gulp.src(config.styles.dest.dev + '/**/*.css')
        .pipe(rename({suffix: '-' + currentPackageVersion}))
        .pipe(gulp.dest(versionDir));
});

gulp.task('copy', ['copy:html', 'copy:markdown', 'copy:scripts', 'copy:styles']);

// WATCH TASKS ---------------------------

gulp.task('watch:dev:html', () => {
    gulp.watch(config.html.watch.devs).on('change', browserSyncDev.reload);
});
gulp.task('watch:docs:html', () => {
    gulp.watch(config.html.watch.docs).on('change', browserSyncDocs.reload);
});

gulp.task('watch:dev:scripts', () => {
    gulp.watch(config.scripts.watch.dev).on('change', () => {
        gulp.start('scripts', browserSyncDev.reload);
    });
});

gulp.task('watch:dev:styles', () => {
    gulp.watch(config.styles.watch.dev, ['styles']);
});

gulp.task('watch:dev', ['watch:dev:html','watch:dev:scripts', 'watch:dev:styles']);
gulp.task('watch:docs', ['watch:docs:html']);
gulp.task('watch', ['watch:dev', 'watch:docs']);

// SERVE TASKS --------------------------------------

gulp.task('serve:dev', ['scripts', 'styles'], () => {
    browserSyncDev.init({
        server: {
            baseDir: './src',
            index: "index.html"
        },
        port: 3000,
        ui: {
            port: 3001
        }
    });
    gulp.start('watch:dev');
});

gulp.task('serve:docs', ['copy'], () => {
    browserSyncDocs.init({
        server: {
            baseDir: './docs',
            index: "index.html"
        },
        port: 13000,
        ui: {
            port: 13001
        }
    });
    gulp.start('watch:docs');
});

gulp.task('serve', ['serve:dev', 'serve:docs']);