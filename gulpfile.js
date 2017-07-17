'use strict';

const gulp = require('gulp');
const through = require('through2');
const p = require('./package.json');
let currentPackageVersion = p.version;

const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const fs = require('fs');
const gutil = require('gulp-util');
const mkdirp = require('mkdirp');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

const handlebars = require('gulp-compile-handlebars');
const glob = require('glob');
const globArray = require('glob-array');

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
    "handlebars": {
        "compile": [
            './src/**/index.md',
            './src/**/[^_]*.html'],
        "dest": {
            "docs": "./docs",
        },
        "partials": [
            './src/**/_*.html'
        ],
        "watch": {
            "dev": [
                './src/**/index.md',
                './src/**/*.html',
                '!./node_modules/**/*'  
            ]
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
            "dev": [
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
            "dev": [
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
            .pipe(rename({suffix: '.min'}))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest(config.styles.dest.dev));
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

gulp.task('handlebars', () => {
    var partials = globArray.sync(config.handlebars.partials)
        .reduce((acc, filePath) => {
            var fileName = filePath.substring(filePath.lastIndexOf("/") + 1, filePath.lastIndexOf("."));
            var template = fs.readFileSync(filePath, 'utf8');
            acc[fileName] = template;
            return acc;
    }, {});
    
    var options = {
        partials: partials,
        helpers: {
            getJsonContext: (data, opt) => {
                return opt.fn(JSON.parse(data));
            }
        }
    };
    
    return gulp.src(config.handlebars.compile)
        .pipe(handlebars({}, options))
        .pipe(gulp.dest('docs'));
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

gulp.task('copy', ['copy:scripts', 'copy:styles']);

// WATCH TASKS ---------------------------

gulp.task('watch:handlebars', () => {
    gulp.watch(config.handlebars.watch.dev, ['handlebars']);
});

gulp.task('watch:scripts', () => {
    gulp.watch(config.scripts.watch.dev).on('change', () => {
        runSequence('scripts', 'copy:scripts');
    });
});

gulp.task('watch:styles', () => {
    gulp.watch(config.styles.watch.dev).on('change', () => {
        runSequence('styles', 'copy:styles');
    });;
});

gulp.task('watch', ['watch:handlebars', 'watch:scripts', 'watch:styles']);