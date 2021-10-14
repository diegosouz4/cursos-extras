const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-clean-css");
const terser = require("gulp-terser");
const webp = require("gulp-webp");

// import gulp from "gulp";
// import imagemin from "gulp-imagemin";
/*gulp.task("minifyImg", () => {
  gulp.src("src/img/*.{jpg,png}").pipe(imagemin()).pipe(gulp.dest("dir/img"));
});*/

//Css Functions
function minifyCss() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(cssmin())
    .pipe(gulp.dest("dir/css"));
}

//Js functions
function minifyJs() {
  return gulp.src("src/js/*.js").pipe(terser()).pipe(gulp.dest("dir/js"));
}

//Watch task
function watchtask() {
  gulp.watch("src/sass/**/*.scss", minifyCss);
  gulp.watch("src/js/*.js", minifyJs);
}

//Webp conversor
function webpconvert() {
  return gulp
    .src("src/img/**/*.{jpg,png}")
    .pipe(webp())
    .pipe(gulp.dest("dir/img"));
}

//Tasks
exports.minifyCss = minifyCss;
exports.minifyJs = minifyJs;
exports.webpconvert = webpconvert;
exports.watchtask = watchtask;

exports.default = gulp.series(minifyCss, minifyJs, webpconvert, watchtask);
