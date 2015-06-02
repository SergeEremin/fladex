var gulp = require('gulp'),
	less = require('gulp-less'),
	rename = require("gulp-rename"),
	please = require('gulp-pleeease'),
	notify = require("gulp-notify");


gulp.task('less', function() {
  // place code for your default task here
      gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

gulp.task('css', function () {
  gulp.src('./css/*.css')
  .pipe(please())
  .pipe(rename({
    suffix: '.min',
    extname: '.css'
  }))
  .pipe(gulp.dest('./public'))
  .pipe(notify("Done!"));
});

gulp.task("watch", function () {
    gulp.watch('./less/*.less', ['less','css']);
});

gulp.task('default', ['less', 'css', 'watch']);