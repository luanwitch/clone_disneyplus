// Importação de plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Função para processar scripts (corrigido para usar 'gulp' em vez de 'GulpClient')
function scripts() {
    return gulp.src('./src/scripts/*.js')  // Certifique-se de que o caminho está correto para seus arquivos .js
        .pipe(uglify())  // Minifica os arquivos JavaScript
        .pipe(gulp.dest('./dist/js'));  // Salva os arquivos minificados no diretório dist/js
}

// Função para otimizar as imagens
function images() { 
    return gulp.src('./src/images/**/*')  // Certifique-se de que este é o caminho correto das imagens
        .pipe(imagemin()) // Minifica as imagens
        .pipe(gulp.dest('./dist/images/'));  // Certifique-se de que as imagens estão sendo copiadas para o diretório correto
}

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
exports.default = gulp.parallel(styles, images, scripts);  // Executa as tarefas em paralelo

// Função para observar mudanças nos arquivos
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));  // Observa mudanças no Sass
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));  // Observa mudanças nos arquivos JavaScript
    gulp.watch('./src/images/**/*', gulp.parallel(images));  // Observa mudanças nas imagens
};
