var gulp = require("gulp");

var pug = require("gulp-pug");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");

// -For Concat CSS Files
gulp.task("css", function () {
	return gulp
		.src("project/css/*.css")
		.pipe(autoprefixer("last 5 version"))
		.pipe(concat("all.min.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
});

// -For HTML
gulp.task("html", function () {
	return gulp
		.src("project/pug/*.pug")
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest("dist"));
});

// For JS
gulp.task("js", function () {
	return gulp
		.src([
			"project/js/jquery-3.5.1.js",
			"project/js/bootstrap.bundle.js",
			"project/js/jquery.animateNumber.js",
			"project/js/jquery.easing.1.3.js",
			"project/js/jquery.magnific-popup.js",
			"project/js/scrollax.js",
			"project/js/main.js",
		])
		.pipe(uglify())
		.pipe(concat("all.min.js"))
		.pipe(gulp.dest("dist/js"));
});

// For Watch
gulp.task("watch", function () {
	gulp.watch("project/pug/**/*.pug", ["html"]);
	gulp.watch("project/css/*.css", ["css"]);
	gulp.watch("project/js/*.js", ["js"]);
});

// Default Tasks
gulp.task("default", ["watch"]);
