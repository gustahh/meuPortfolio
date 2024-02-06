$(document).ready(function () {
    /* carrega página bem vindo por padrão */
    $('.bg').load('pages/bemvindo.html');

    /* funções para carregar página */
    function loadBemvindo() {
        console.log('Função carregada!');
        $('.nomePag').html('Bem vindo!');
        $(this).find('img').attr('src', 'icons/house-fill.svg');
        $(this).next().find('img').attr('src', 'icons/msg-bubble-user.svg');
        $(this).next().next().find('img').attr('src', 'icons/layers.svg');
        $(this).next().next().next().find('img').attr('src', 'icons/at-sign.svg');
        $('.bg').load('pages/bemvindo.html');
    }
    function loadSobre() {
        console.log('Função carregada!');
        $('.nomePag').html('Sobre mim');
        $(this).prev().find('img').attr('src', 'icons/house.svg');
        $(this).find('img').attr('src', 'icons/msg-bubble-user-fill.svg');
        $(this).next().find('img').attr('src', 'icons/layers.svg');
        $(this).next().next().find('img').attr('src', 'icons/at-sign.svg');
        $('.bg').load('pages/sobremim.html');
    }
    function loadPortfolio() {
        $('.nomePag').html('Portfólio');
        $(this).prev().prev().find('img').attr('src', 'icons/house.svg');
        $(this).prev().find('img').attr('src', 'icons/msg-bubble-user.svg');
        $(this).find('img').attr('src', 'icons/layers-fill.svg');
        $(this).next().find('img').attr('src', 'icons/at-sign.svg');
        $('.bg').load('pages/portfolio.html');
    }
    function loadContato() {
        console.log('Função carregada!');
        $('.nomePag').html('Contato');
        $(this).prev().prev().prev().find('img').attr('src', 'icons/house.svg');
        $(this).prev().prev().find('img').attr('src', 'icons/msg-bubble-user.svg');
        $(this).prev().find('img').attr('src', 'icons/layers.svg');
        $(this).find('img').attr('src', 'icons/at-sign-fill.svg');
        $('.bg').load('pages/contato.html');
    }
    //declara se existe ou não as abas (1 para existe e 0 para não existe)
    var bemvindo = 1;
    var sobre = 0;
    var portfolio = 0;
    var contato = 0;
    $('li').click(function (event) {
        id = $(this).attr('id');
        console.log(id);
        if (id === 'bemvindo') {
            //carrega função
            loadBemvindo();

            //verifica se a guia já existe, caso contrário a cria
            if (bemvindo > 0) {
                console.log('Guia existente');
                loadBemvindo();
            } else {
                bemvindo++;
                console.log(bemvindo);
                var newTab = `
                <div class="tab" tabindex="bemvindo" id="ativa">
                    <img src="icons/house-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Bem Vindo!</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
            }
        } else if (id === 'sobre') {
            //carrega função
            loadSobre();

            //verifica se a guia já existe, caso contrário a cria
            if (sobre > 0) {
                console.log('Guia existente');
                loadSobre();
            } else {
                sobre++;
                console.log(sobre);
                var newTab = `
                <div class="tab" tabindex="sobre" id="ativa">
                    <img src="icons/msg-bubble-user-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Sobre mim</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
            }
        } else if (id === 'portfolio') {
            //carrega função
            loadPortfolio();

            //verifica se a guia já existe, caso contrário a cria
            if (portfolio > 0) {
                console.log('Guia existente');
                loadPortfolio();
            } else {
                portfolio++;
                var newTab = `
                <div class="tab" tabindex="portfolio" id="ativa">
                    <img src="icons/layers-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Portfólio</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
            }
        } else if (id === 'contato') {
            //carrega função
            loadContato();

            //verifica se a guia já existe, caso contrário a cria
            if (contato > 0) {
                console.log('Guia existente');
                loadContato();
            } else {
                contato++;
                var newTab = `
                <div class="tab" tabindex="contato" id="ativa">
                    <img src="icons/at-sign-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Contato</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
            }
        }
        /* 
            explicando código!
            .next() seleciona o elemento próximo a div clicada (this, event),
            cada .next() a mais é um elemento a mais. A lógica se inverte para
            o .prev(), buscando o elemento anterior.
        */
    });
});