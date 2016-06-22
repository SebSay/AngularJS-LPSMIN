var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require("browser-sync").create();
var useref = require('gulp-useref');
 //creation d'une nouvelle tache : 'sass'
gulp.task('sass', function () {
  //definition de la tache
  gulp.src('./src/assets/scss/**/*.scss') //definition du repertoire
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css')); //ecriture dans destination
});

//creation d'une nouvelle tache :'sass:watch'
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
});

//creation d'une nouvelle tache : 'serve'
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/assets/scss/**/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
        baseDir: "./src"}
  });
});

gulp.task('copy-angular-template', function() {
  gulp.src(['src/assets/template/**/*'])
    .pipe(gulp.dest('www/assets/template/'));
});

gulp.task('make',['copy-angular-template'], function() {
 gulp.src('src/*.html')
          .pipe(useref())
          .pipe(gulp.dest('www'));
});
