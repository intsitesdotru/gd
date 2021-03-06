import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminZopfli from 'imagemin-zopfli';
import imageminMozjpeg from 'imagemin-mozjpeg';
// import imageminGiflossy from 'imagemin-giflossy';
import debug from 'gulp-debug';
import browsersync from 'browser-sync';
import yargs from 'yargs';

import pkg from '../package.json';

const dirs = pkg.configs.directories;

const { argv } = yargs;
const production = !!argv.production;

gulp.task('images', () => gulp
  .src(`${dirs.src}/${dirs.images}/**/*.{jpg,jpeg,png,gif,tiff,svg}`)
  .pipe(
    gulpif(
      production,
      imagemin([
        /*          imageminGiflossy({
            optimizationLevel: 3,
            optimize: 3,
            lossy: 2
          }), */
        imageminPngquant({
          speed: 5,
          quality: [0.6, 0.8],
        }),
        imageminZopfli({
          more: true,
        }),
        imageminMozjpeg({
          progressive: true,
          quality: 75,
        }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: false },
            { removeUnusedNS: false },
            { removeUselessStrokeAndFill: false },
            { cleanupIDs: false },
            { removeComments: true },
            { removeEmptyAttrs: true },
            { removeEmptyText: true },
            { collapseGroups: true },
          ],
        }),
      ]),
    ),
  )
  .pipe(gulp.dest(`${dirs.dist}/${dirs.images}`))
  .pipe(
    debug({
      title: 'Images',
    }),
  )
  .on('end', browsersync.reload));
