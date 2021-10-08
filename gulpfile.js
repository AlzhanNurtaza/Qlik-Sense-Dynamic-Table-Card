var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass')(require('sass'));
var zip         = require('gulp-zip');

gulp.task('sass', ()  => {
    return gulp.src("./sass/root.scss")
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
});

gulp.task('icons', function() {
    return gulp.src('./bower_components/font-awesome/webfonts/*')
        .pipe(gulp.dest('./dist/webfonts/'));
});

gulp.task('fonts', function() {
    return gulp.src('./fonts/*')
        .pipe(gulp.dest('./dist/fonts/'));
});


gulp.task('bootjs', function() {
    return gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./dist/js/bootstrap/'));
});

gulp.task('bootbundlejs', function() {
    return gulp.src('./bower_components/bootstrap/dist/js/bootstrap.bundle.min.*')
        .pipe(gulp.dest('./dist/js/bootstrap/'));
});

gulp.task('datatablesjs', function() {
    return gulp.src('./bower_components/datatables.net/js/jquery.dataTables.min.js')
        .pipe(gulp.dest('./dist/js/datatables/'));
});

gulp.task('datatablescss', function() {
    return gulp.src('./bower_components/datatables.net-dt/css/jquery.dataTables.min.css')
        .pipe(gulp.dest('./dist/js/datatables/'));
});

gulp.task('js_images', function() {
    return gulp.src('./bower_components/datatables.net-dt/images/*')
        .pipe(gulp.dest('./dist/js/images/'));
});



gulp.task('qfiles', function() {
    return gulp.src(['./*.{html,js,qext,wbl}', '!./gulpfile.js'] )
        .pipe(gulp.dest('./dist/'));
});


gulp.task('zip', function () {
    return gulp.src('./dist/**')
        .pipe(zip('dynamictablecard.zip'))
        .pipe(gulp.dest('./output'));
});


gulp.task('default', gulp.series('sass', 'icons','qfiles','fonts',
'bootjs','bootbundlejs','datatablesjs','datatablescss','js_images','zip'));