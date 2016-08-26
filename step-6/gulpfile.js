/* globals require */

const gulp = require('gulp');

// Include plugins
const eslint = require('gulp-eslint');
const csslint = require('gulp-csslint');
const htmlhint = require('gulp-htmlhint');

// Check CSS with CSSLint using rules defined in .csslintrc
// Pipe the result into formatter
gulp.task('csslint', () => {
  return gulp.src('src/**/*.css')
  .pipe(csslint())
  // Output results and fail on error
  .pipe(csslint.formatter())
  .pipe(csslint.failFormatter());
});

// Check JavaScript with ESLint using rules defined in .eslintrc
gulp.task('eslint', () => {
  return gulp.src(['src/**/*.js', '!node_modules/**', '!lib/**'])
  .pipe(eslint())
  // Output results and fail on error
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

// Check HTML with HTMLHint
gulp.task('htmlhint', () => {
  return gulp.src('src/**/*.html')
  // Output results and fail on error
  .pipe(htmlhint())
  .pipe(htmlhint.failReporter());
});

gulp.task('default', ['csslint', 'eslint', 'htmlhint'],
  function() {
    // run only if all the lint tasks are successful
    console.log('\nCSS, JavaScript and HTML appears to be valid!\n');
  });
