//Exportção do gulp e do sass
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() { 
    return gulp.src('./src/styles/*.scss')  // 1. Seleciona os arquivos Sass
        .pipe(sass({ outputStyle: 'compressed' })) // 2. Compila o Sass e trata erros
        .pipe(gulp.dest('./dist/css/')); // 3. Salva os arquivos CSS na pasta de destino
}
// Exporta a função como tarefa padrão do Gulp
exports.default = styles;
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}