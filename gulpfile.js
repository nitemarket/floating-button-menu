var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
var babel = require('gulp-babel')
var rename = require('gulp-rename');

var DEST = 'dist';
var FILENAME = 'mdl-expandablefab';

gulp.task('minify-js', function() {
  return gulp.src('examples/public/scripts/' + FILENAME + '.js')
    .pipe(babel({presets: ['babili']}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(DEST))
});

gulp.task('minify-css', function() {
  gulp.src('examples/public/styles/' + FILENAME + '.css')
    .pipe(gulp.dest(DEST))
    .pipe(minifyCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(DEST))
});

gulp.task('default', ['minify-js', 'minify-css']);
