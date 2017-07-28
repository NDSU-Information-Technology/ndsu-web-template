'use strict';

const p = require('./package.json');
let currentPackageVersion = p.version;

const gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const fs = require('fs');
const filter = require('gulp-filter');
const glob = require('glob');
const globArray = require('glob-array');
const gutil = require('gulp-util');
const handlebars = require('gulp-compile-handlebars');
const insert = require('gulp-insert');
const mkdirp = require('mkdirp');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

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
            './src/**/[^_]*.html'
        ],
        "dest": {
            "dev": "./src",
            "docs": "./docs",
        },
        "partials": [
            './src/**/_*.html'
        ],
        "watch": {
            "dev": [
                './src/**/index.md',
                './src/**/*.html'
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
                './src/essentials/**/*.scss',
                './src/assets/**/*.scss'
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
    let taskName = 'script:concat' + sc.name;
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

gulp.task('styles', styleTasks, () => {});

gulp.task('scripts', scriptTasks, () => {});


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
        compile: {
            noEscape: true
        }
    };
    
    return gulp.src(config.handlebars.compile)
        .pipe(handlebars({}, options).on('error', (err) => console.log(err.message)))
        .pipe(gulp.dest(config.handlebars.dest.docs))
        .pipe(filter(['**/index.md']))
        .pipe(rename({basename: 'README'}))
        .pipe(replace(/^---([\s\S]*?)---/i, ''))
        .pipe(insert.prepend('_**WARNING**: This README.md file is auto-generated by build process. To edit the content of this file, please edit the `index.md` file located in the same folder instead._\n'))
        .pipe(gulp.dest(config.handlebars.dest.dev));
});

gulp.task('copy:scripts', ['scripts'], () => {
    return gulp.src(config.scripts.dest.dev + '/**/*.js')
        .pipe(gulp.dest(config.scripts.dest.docs));
});


gulp.task('copy:styles', ['styles'], () => {
    return gulp.src(config.styles.dest.dev + '/**/*.css')
        .pipe(gulp.dest(config.styles.dest.docs))
        .pipe(browserSync.stream());
});

gulp.task('copy:scripts:versioned', ['scripts'], () => {
    let versionDir = config.scripts.dest.docs + '/' + currentPackageVersion;
    if (!fs.existsSync(versionDir)){
        mkdirp.sync(versionDir);
    }

    return gulp.src(config.scripts.dest.dev + '/**/*.js')
        .pipe(rename({suffix: '-' + currentPackageVersion}))
        .pipe(gulp.dest(versionDir));
});
gulp.task('copy:styles:versioned', ['styles'], () => {
    let versionDir = config.styles.dest.docs + '/' + currentPackageVersion;
    if (!fs.existsSync(versionDir)){
        mkdirp.sync(versionDir);
    }

    return gulp.src(config.styles.dest.dev + '/**/*.css')
        .pipe(rename({suffix: '-' + currentPackageVersion}))
        .pipe(gulp.dest(versionDir));
});

gulp.task('copy', ['copy:scripts', 'copy:styles', 'handlebars']);

// WATCH TASKS ---------------------------

gulp.task('watch:handlebars', () => {
    gulp.watch(config.handlebars.watch.dev, ['handlebars']);
});

gulp.task('watch:scripts', () => {
    gulp.watch(config.scripts.watch.dev, ['copy:scripts']);
});

gulp.task('watch:styles', () => {
    gulp.watch(config.styles.watch.dev, ['copy:styles']);
});

gulp.task('watch', ['watch:handlebars', 'watch:scripts', 'watch:styles']);

gulp.task('serve', ['copy', 'watch'], () => {
    browserSync.init({
        server: {
            baseDir: '_site',
            routes: {
                "/ndsu-web-template": "_site"
            }
        },
        startPath: '/ndsu-web-template',
        ui: false
    });

    gulp.watch(['_site/**/*.css'], browserSync.stream);
    gulp.watch(['_site/**/*.js', '_site/**/*.html'], browserSync.reload);
});