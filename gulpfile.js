const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
gulp.task('build', function () {
    gulp.src('./src/**/*.css').pipe(cleanCSS({
        compatibility: '*',
        inline: false
    })).pipe(gulp.dest('./min/'));
});
gulp.task('clean', function () {
    del('./src/', {
        force: true
    });
});