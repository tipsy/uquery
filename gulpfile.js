var gulp = require("gulp")
    , gutil = require('gulp-util')
    , concat = require("gulp-concat")
    , uglify = require("gulp-uglify")
    , gzip = require("gulp-gzip")
    , size = require('gulp-size')
    ;

gulp.task("default", ["build-core", "build-plugins", "gzip", "separator"]);

gulp.task("build-core", function () {
    gutil.log(gutil.colors.magenta("building core ..."));
    return gulp.src("src/uq.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist"));

});

gulp.task("build-plugins", function () {
    gutil.log(gutil.colors.magenta("building plugins ..."));
    return gulp.src("src/plugins/**/*.js") //specify files individually?
        .pipe(concat("uq-plugins.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

gulp.task("gzip", ["build-core", "build-plugins"], function () {
    gutil.log(gutil.colors.magenta("gzipping ..."));
    return gulp.src("dist/**/*.js")
        .pipe(gzip())
        .pipe(gulp.dest("dist/gzipped"))
        .pipe(size({
            showFiles: true,
            showTotal: false
        }));
});

gulp.task("separator", ["gzip"], function () {
    gutil.log(gutil.colors.white("--------------- Done ---------------"));
});

gulp.task("watch", function () {
    gulp.watch("src/**/*.js", ["build-core", "build-plugins", "gzip", "separator"]);
});

