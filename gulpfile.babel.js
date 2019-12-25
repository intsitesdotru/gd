import gulp from 'gulp';

const requireDir = require('require-dir');

requireDir('./gulp-tasks/');

export const prod = gulp.series(
  'clean',
  gulp.parallel([
    'views',
    'styles',
    'copy:jquery',
    gulp.series('lint:scripts', 'scripts'),
    'images',
    'assets',
    'fonts',
    'video',
  ]),
);

export const development = gulp.series(
  'clean',
  gulp.parallel([
    'views',
    'styles',
    'copy:jquery',
    gulp.series('lint:scripts', 'scripts'),
    'images',
    'assets',
    'fonts',
    'video',
  ]),
  gulp.parallel('serve'),
);

export default development;
