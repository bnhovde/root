/* jshint node:true */
'use strict';
// generated on 2015-01-04 using generator-gulp-webapp 0.2.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
    return gulp.src('app/styles/scss/style.scss')
        .pipe($.plumber())
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer({
            browsers: ['last 1 version']
        }))
        .pipe(gulp.dest('.tmp/styles/temp'));
});
gulp.
task('pixrem', ['styles'], function() {
    return gulp.src('.tmp/styles/temp/main.css')
        .pipe($.pixrem('17px'))
        .pipe(gulp.dest(''));
});

gulp.task('jshint', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('optimised/images'));
});

gulp.task('watch', ['pixrem'], function() {
    $.livereload.listen();

    // watch for changes
    gulp.watch([
        'app/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', $.livereload.changed);

    gulp.watch('app/styles/**/*.scss', ['pixrem']);
});

gulp.task('build', ['jshint', 'pixrem', 'images']);

gulp.task('default', function() {
    gulp.start('watch');
});