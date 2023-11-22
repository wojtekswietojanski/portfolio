const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("SASS/**/*.scss").pipe(sass()).pipe(dest("css"));
}

// Synchronizacja z zapisem
function watchTask() {
  watch(["SASS/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
