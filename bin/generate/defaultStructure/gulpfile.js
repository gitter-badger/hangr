'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:55555",
        files: ["spa/**/*.*"]
    });
});

gulp.task('nodemon', function (next) {
    var started = false;
    return nodemon({script: 'server.js'}).on('start', function () {
        if (!started) {
            next();
            started = true;
        }
    });
});

gulp.task('default', ['browser-sync']);