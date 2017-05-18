var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', function() {
	return gulp.src('./css/**/*.css')
		.pipe(sourcemaps.init())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css-min'));
});

gulp.task('build', runSequence('sass', 'minify-css', function() {
	console.log('Finished');
}));
