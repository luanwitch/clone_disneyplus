document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('.faq__questions__item__question');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection ? heroSection.clientHeight : 0; // Evita erro se não houver .hero

    // Evento de scroll para mostrar ou ocultar o header
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else { 
            exibeElementosDoHeader();
        }
    });

    // Adicionando evento de clique nos botões das abas
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const abaAlvo = event.currentTarget.dataset.tabButton;
            escondeTodasAbas();
            mostraAba(abaAlvo);
            ativaBotao(abaAlvo);
        });
    });

    // Adicionando evento de clique nas perguntas do FAQ
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const elementoPai = question.closest('.faq__questions__item');
            if (elementoPai) {
                elementoPai.classList.toggle('faq__questions__item--is-open');
            }
        });
    });
});

// Função para ocultar o header
function ocultaElementosDoHeader() {
    console.log("Ocultando o header");
    const header = document.querySelector('header');
    if (header) {
        header.classList.add('header--is-hidden');
    }
}

// Função para exibir o header
function exibeElementosDoHeader() {
    console.log("Exibindo o header");
    const header = document.querySelector('header');
    if (header) {
        header.classList.remove('header--is-hidden');
    }
}

// Função para esconder todas as abas antes de mostrar a nova
function escondeTodasAbas() {
    const abas = document.querySelectorAll('[data-tab-id]');
    abas.forEach(aba => {
        aba.classList.remove('shows__list--is-active');
    });
}

// Função para mostrar a aba correspondente
function mostraAba(abaAlvo) {
    const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
    if (aba) {
        aba.classList.add('shows__list--is-active');
    }
}

// Função para ativar o botão correspondente
function ativaBotao(abaAlvo) {
    const botoes = document.querySelectorAll('[data-tab-button]');
    
    botoes.forEach(botao => {
        botao.classList.remove('shows__tabs__button--is-active');
    });

    const botaoAtivo = document.querySelector(`[data-tab-button="${abaAlvo}"]`);
    if (botaoAtivo) {
        botaoAtivo.classList.add('shows__tabs__button--is-active');
    }
}
