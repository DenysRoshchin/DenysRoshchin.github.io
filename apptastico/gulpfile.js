var gulp				= require('gulp'),
		sass				= require('gulp-sass'),
		browserSync	= require('browser-sync').create(),
		useref			= require('gulp-useref'),
		uglify			= require('gulp-uglify'),
		gulpIf 			= require('gulp-if'),
		cssnano			= require('gulp-cssnano'),
		imagemin		= require('gulp-imagemin'),
		cache				= require('gulp-cache');

//PREPROCESSING
gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('src/css/'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

// // WATCHING FILE
// gulp.task('watch', ['sass'], function() {
// 	gulp.watch('src/scss/*.scss', ['sass'])
// });

gulp.task('watch', ['browserSync', 'sass', 'useref', 'imagemin', 'fonts'], function() {
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

// CONCAT AND UGLIFY JS&CSS
gulp.task('useref', function() {
	return gulp.src('src/index.html')
	.pipe(useref())
	.pipe(gulpIf('*.js', uglify()))
	.pipe(gulpIf('*.css', cssnano()))
	.pipe(gulp.dest('prod/'))
});

// OPTIMAZING IMAGES
gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
	.pipe(cache(imagemin({
		interlaced: true
	})))
	.pipe(gulp.dest('prod/img/'))
});

// COPYING FONTS
gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*.+(woff|woff2|ttf)')
	.pipe(gulp.dest('prod/fonts/'))
});

gulp.task('default', ['watch', 'sass', 'useref', 'imagemin', 'fonts']);







