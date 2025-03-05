// Importação de plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const del = require('del');

// Função para processar scripts
function scripts() {
    return gulp.src('./src/scripts/*.js')  // Certifique-se de que o caminho está correto para seus arquivos .js
        .pipe(uglify())  // Minifica os arquivos JavaScript
        .pipe(gulp.dest('./public/js'));  // Salva os arquivos minificados no diretório public/js
}

function clean() {
    return del(['./public/**', '!./public']);
}

// Função para limpar a pasta public
async function clean() {
    const { deleteAsync } = await import('del');
    return deleteAsync(['./public/**', '!./public']);
}

// Função para otimizar as imagens
function images() { 
    return gulp.src('./src/images/**/*')  // Certifique-se de que este é o caminho correto das imagens
        .pipe(imagemin()) // Minifica as imagens
        .pipe(gulp.dest('./public/images/'));  // Salva as imagens otimizadas na pasta public/images
}

// Função para compilar o Sass
function styles() {
    return gulp.src('./src/styles/*.scss')  
        .pipe(sass({ outputStyle: 'compressed' })) // Compila e comprime o Sass
        .pipe(gulp.dest('./public/css/')); // Salva o CSS gerado na pasta public/css
}

// Exportando as funções para que o Gulp execute as tarefas
exports.default = gulp.parallel(styles, images, scripts);  // Executa as tarefas em paralelo

// Função para observar mudanças nos arquivos
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));  // Observa mudanças no Sass
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));  // Observa mudanças nos arquivos JavaScript
    gulp.watch('./src/images/**/*', gulp.parallel(images));  // Observa mudanças nas imagens
};
