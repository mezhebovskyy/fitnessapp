var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglifyjs');
var gulpIf = require('gulp-if');
var gulpConcat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', function() {
    console.log("Some changes detected");
    gulp.watch('src/**/*.js', ['build-dev']);
});

gulp.task('build-dev', function(){
    return gulp.src('src/**/*.js')
        .pipe(gulpConcat("main.min.js"))
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});