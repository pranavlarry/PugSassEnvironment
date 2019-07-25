const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const babel = require("gulp-babel");

function buildHTML(){
    return gulp.src('./pug/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
}
// compile sass
function style(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
}

function compileJS(){
    return gulp.src('./js/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./pug/**/*.pug', buildHTML)
    .on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', compileJS)
    .on('change', browserSync.reload);
}

exports.style = style;
exports.buildHTML = buildHTML;
exports.watch = watch;
exports.compileJS = compileJS;