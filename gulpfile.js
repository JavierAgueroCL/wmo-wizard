var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('default', function(){
    //
});

gulp.task('sass', function () {
    return gulp.src('app/assets/css/main.scss')
        .pipe(sass({
            // outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe(gulp.dest('app/assets/css/'));
});

gulp.task('watch', function () {
    gulp.watch('app/assets/css/*.scss', ['sass'], ['browser-sync']).on('change', function (e) {
        console.log('El archivo SASS  ha cambiado. Modificando...');
        browserSync.reload;
    });
    gulp.watch('app/*.html').on('change', function (e) {
        console.log('El archivo HTML  ha cambiado. Modificando...');
        browserSync.reload;
    });
});

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    //watch files
    var files = [
    'app/assets/css/main.css',
    'app/*.html'
    ];
 
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});