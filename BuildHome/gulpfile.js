var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});
 
gulp.task('watch', function() {
	livereload.listen();
  gulp.watch('./src/styles/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);