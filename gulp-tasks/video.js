import gulp from 'gulp';
import browsersync from 'browser-sync';

import pkg from '../package.json';

const dirs = pkg.configs.directories;

gulp.task('video', () => gulp
  .src(`${dirs.src}/video/**/*`)
  .pipe(gulp.dest(`${dirs.dist}/video`))
  .on('end', browsersync.reload));
