const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

gulp.task('cs1',function(){
	gulp.src('./src/sass/index.scss')
	.pipe(sass())
	//.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'))
})

gulp.task('default',()=>{
	gulp.watch(['./src/sass/*.scss'],['cs1','cs2']);
})

gulp.task('cs2',function(){
	gulp.src('./src/sass/list.scss')
	.pipe(sass())
	//.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist'))
})
