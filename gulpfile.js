// grab our gulp packages
let gulp  = require('gulp'),
    gutil = require('gulp-util');
const minify = require('gulp-minify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');

// create a default task and just log a message

gulp.task('minify', function(cd) {
    cd();
    gulp.src('./src/js/*.js')
        .pipe(sourcemaps.init())
        // .pipe(minify({
        //         ext:{
        //             min:'.js'
        //         }
        //     }
        // ))
        .pipe(concat('index.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build'));
});

gulp.task('default', gulp.series(['minify']));