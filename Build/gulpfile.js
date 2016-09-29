var gulp = require('gulp'),
		sass = require('gulp-sass'),
		watch = require('gulp-watch'),
		browserSync = require('browser-sync').create(),
		concat = require('gulp-concat'),
		pump = require('pump'),
		uglify = require('gulp-uglify');


gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('src/css/'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/js/*.js', ['concatJs', 'uglifyJs']);
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	})
});

gulp.task('concatJs', function() {
	return gulp.src('src/js/*.js')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist/js/'))
});

gulp.task('uglifyJs', ['concatJs'], function(cb) {
	pump([
		gulp.src('dist/js/all.js'),
		uglify(),
		gulp.dest('dist/js/')
		],
		cb
		);
});
