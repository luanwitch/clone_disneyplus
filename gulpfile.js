// Importação de plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Função para compilar o Sass
function styles() { 
    return gulp.src('./src/styles/*.scss')  
        .pipe(sass({ outputStyle: 'compressed' })) // Compila e comprime o Sass
        .pipe(gulp.dest('./dist/css/')); // Salva o CSS gerado
}

// Função para otimizar as imagens
function images() { 
    return gulp.src('./src/images/**/*')  // Ajustando para capturar imagens
        .pipe(imagemin()) // Minifica as imagens
        .pipe(gulp.dest('./dist/images/'));  // Salva as imagens otimizadas na pasta dist/images
}

// Exportando as funções para que o Gulp execute as tarefas
exports.default = gulp.parallel(styles, images);  // Executa as tarefas em sequência (styles depois images)

// Função para observar mudanças no Sass
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));  // Observa mudanças e executa a tarefa styles
};
