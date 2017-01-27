/**
 * Created by eugene on 22.09.2016.
 */

/**
 * Created by eugene on 9.12.15.
 *
 * watcher -> sudo npm install --save-dev gulp-watch
 * sass -> sudo npm install --save-dev gulp-sass
 * cssmin -> sudo npm install --save-dev gulp-cssmin
 * rename -> sudo npm install --save-dev gulp-rename
 * imagemin -> sudo npm install --save-dev gulp-imagemin
 * uglify js -> sudo npm install --save-dev gulp-uglify
 * concat js -> sudo npm install --save-dev gulp-concat
 * livereload -> sudo npm install --save-dev gulp-livereload
 * gutil -> sudo npm install --save-dev gulp-util
 * concat -> sudo npm install --save-dev gulp-concat
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    gutil = require('gulp-util'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    browserSync = require('browser-sync').create();

var browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    sourceFile = 'assets/js/*.js',
    destFolder = 'assets/js/',
    destFile = 'build.js';

var bundler = watchify(browserify(sourceFile,{
    cache: {},
    packageCache: {},
    debug: true,
    poll: true,
    plugin: [watchify]
}));


function watchStyles() {
    gulp.watch("assets/scss/**/*.scss", ['sass', 'cssmin']);
    gulp.watch([
        '*.html',
        'assets/js/**/*.js',
        'assets/css/**/*.css'
    ]).on('change', browserSync.reload);
}

gulp.task('watch', ['sass'], function() {
    browserSync.init({
        server: "./"
    });

    watchStyles();

    bundler.on('update', function(ids){
        console.log('bundling  '+ids);
        rebundle()
    });

    function rebundle() {
        return bundler
            .bundle()
            .pipe(source(destFile))
            // .pipe(streamify(uglify()))
            .pipe(gulp.dest(destFolder));
    }

    return rebundle();
});

gulp.task('default', [ 'sass', 'cssmin', 'watch']);

gulp.task('sass', function(){
   return gulp.src('assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', function(e) {
            gutil.log(e);
            this.emit('end');
        })) // Using gulp-sass
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css/compressed'))
});

gulp.task('cssmin', ['sass'], function () {
    gulp.src('assets/css/style.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/css/compressed'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('concatcss', function() {
    return gulp.src([
        'assets/css/vendor/bootstrap/**/*.css',
        'assets/css/vendor/slick-1.5.7/**/*.css',
        'assets/css/vendor/jquery-ui.min.css'
    ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('assets/css/compressed'));
});

gulp.task('concatjs', function() {
    return gulp.src([
        'assets/js/vendor/**/*.js',
        'assets/js/main.js',
        'assets/js/dev.js'
    ])
        .pipe(concat('custom.js'))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('uglifyjs', function() {
    gulp.src('assets/js/compressed/tween.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/compressed/min'));
});
















