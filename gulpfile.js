var gulp = require('gulp')
var codacy = require('gulp-codacy')
require('dotenv').config()

gulp.task('codacy', () => {
  return gulp
    .src(['coverage/lcov.info'], { read: false })
    .pipe(codacy({
      token: process.env.CODACY_SECRET_TOKEN
    }))
})

gulp.task('default', [ 'codacy' ])
