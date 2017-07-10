'use strict';

const gulp = require('gulp');
const p = require('./package.json');
let currentPackageVersion = p.version;

const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
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
            '!./node_modules/**/*'  
        ],
        "dest": {
            "final": "./docs",
        },
        "watch": [
            './src/**/*.html',
            '!./node_modules/**/*.html'  
        ]
    },
    "markdown": {
        "compile": [
            './src/**/*.md',
            '!./src/README.md',
            '!./node_modules/**/*'  
        ],
        "dest": {
            "final": "./docs",
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
            "dev": './src/scripts',
            "final": "./docs/scripts"
        },
        "watch": [
            './src/components/**/*.js',
            './src/essentials/scripts/**/*.js'
        ],
    },
    "styles": {
        "compile": [
            {
                "name": "minimal",
                "destFileName": "minimal",
                "sourceFiles": ['./src/styles/minimal.scss']
            },
            {
                "name": "full",
                "destFileName": "styles",
                "sourceFiles": ['./src/styles/full.scss']
            }
        ],
        "dest": {
            "dev": './src/styles',
            "final": "./docs/styles"
        },
        "watch": [
            './src/components/**/*.scss',
            './src/essentials/**/*.scss'
        ]
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
            .pipe(browserSync.stream())
            .pipe(rename({suffix: '.min'}))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest(config.styles.dest.dev))
            .pipe(browserSync.stream());
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

gulp.task('watch:html', () => {
    gulp.watch(config.html.watch).on('change', browserSync.reload);
});
gulp.task('watch:scripts', () => {
    gulp.watch(config.scripts.watch).on('change', () => {
        gulp.start('scripts', browserSync.reload);
    });
});
gulp.task('watch:styles', () => {
    gulp.watch(config.styles.watch, ['styles']);
});

gulp.task('watch', ['watch:html','watch:scripts', 'watch:styles']);

gulp.task('copy:html', [], () => {
    return gulp.src(config.html.compile)
        .pipe(replace(/(href|src)(=")(http:\/\/localhost:3000\/)(.*)(")/gi, "$1$2https://static.ndsu.nodak.edu/$4$5"))
        .pipe(gulp.dest(config.html.dest.final));
});

gulp.task('copy:markdown', [], () => {
    return gulp.src(config.markdown.compile)
        .pipe(gulp.dest(config.markdown.dest.final));
});

gulp.task('copy:scripts', ['scripts'], () => {
    let versionDir = config.scripts.dest.final + '/' + currentPackageVersion;
    if (!fs.existsSync(versionDir)){
        mkdirp.sync(versionDir);
    }

    return gulp.src(config.scripts.dest.dev + '/**/*.js')
        .pipe(gulp.dest(config.scripts.dest.final))
        .pipe(rename({suffix: '-' + currentPackageVersion}))
        .pipe(gulp.dest(versionDir));
});

gulp.task('copy:styles', ['styles'], () => {
    let versionDir = config.styles.dest.final + '/' + currentPackageVersion;
    if (!fs.existsSync(versionDir)){
        mkdirp.sync(versionDir);
    }

    return gulp.src(config.styles.dest.dev + '/**/*.css')
        .pipe(gulp.dest(config.styles.dest.final))
        .pipe(rename({suffix: '-' + currentPackageVersion}))
        .pipe(gulp.dest(versionDir));
});

gulp.task('copy', ['copy:html', 'copy:markdown']);
gulp.task('build', ['copy']);

gulp.task('serve', ['scripts', 'styles'], () => {
    browserSync.init({
        server: {
            baseDir: './src',
            index: "template.html"
        }
    });
    gulp.start('watch');
});