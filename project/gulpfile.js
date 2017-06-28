var   gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create(),
		useref = require('gulp-useref'),
		uglify = require('gulp-uglify'),
		gulpIf = require('gulp-if'),
		cssnano = require('gulp-cssnano'),
		image = require('gulp-imagemin');


gulp.task('sass', function() {
	return gulp.src('src/scss/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('src/css/'))
	.pipe(browserSync.reload({
		stream: true
	}))
})

gulp.task('watch', ['browserSync', 'sass', 'useref', 'image', 'fonts'], function() {
	gulp.watch('src/scss/*.scss', ['sass'])
	gulp.watch('src/scss/*.css', ['sass'])
	gulp.watch('src/*.html').on('change', browserSync.reload)
	gulp.watch('src/js/*.js', browserSync.reload)
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
	.pipe(gulp.dest('prod/'))
})

gulp.task('image', function() {
	return gulp.src('src/img/*.+(png|jpg|gif|svg)')
	.pipe(image())
	.pipe(gulp.dest('prod/img'))
})

gulp.task('fonts', function() {
	return gulp.src('src/fonts/*.+(woff|woff2)')
	.pipe(gulp.dest('prod/fonts'))
})
