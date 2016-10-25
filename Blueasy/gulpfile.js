var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create(),
		useref = require('gulp-useref'),
		uglify = require('gulp-uglify'),
		gulpIf = require('gulp-if'),
		cssnano = require('gulp-cssnano'),
		image = require('gulp-imagemin');


gulp.task('sass', function() {
	return gulp.src('src/scss/styles.scss')
	.pipe(sass())
	.pipe(gulp.dest('src/css/'))
	// .pipe(gulp.dest('dist/css/'))
	.pipe(browserSync.reload({
		stream: true
	}))
})

gulp.task('watch', ['browserSync', 'sass', 'useref', 'image', 'fonts'], function() {
	gulp.watch('src/scss/styles.scss', ['sass'])
	gulp.watch('src/*.html').on('change', browserSync.reload)
	gulp.watch('src/js/script.js', browserSync.reload)
})

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'src/'
		}
	})
})

gulp.task('useref', function() {
	return gulp.src('src/*.html')
	.pipe(useref())
	.pipe(gulpIf('*.js', uglify()))
	.pipe(gulpIf('*.css', cssnano()))
	.pipe(gulp.dest('dist/'))
})

gulp.task('image', function() {
	return gulp.src('src/img/*.+(png|jpg|gif|svg)')
	.pipe(image())
	.pipe(gulp.dest('dist/img'))
})

gulp.task('fonts', function() {
	return gulp.src('src/fonts/')
	.pipe(gulp.dest('dist/'))
})



























