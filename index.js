$(document).ready(function () {
    /* carrega página bem vindo por padrão */
    $('.bg').load('pages/bemvindo.html');

    /* funções para carregar página */
    function loadBemvindo(elemento) {
        console.log('Função carregada!');
        $('.nomePag').html('Bem vindo!');
        $(elemento).find('img').attr('src', 'icons/house-fill.svg');
        $(elemento).next().find('img').attr('src', 'icons/msg-bubble-user.svg');
        $(elemento).next().next().find('img').attr('src', 'icons/layers.svg');
        $(elemento).next().next().next().find('img').attr('src', 'icons/at-sign.svg');
        $('.bg').load('pages/bemvindo.html');
    }
    function loadSobre(elemento) {
        console.log('Função carregada!');
        $('.nomePag').html('Sobre mim');
        $(elemento).prev().find('img').attr('src', 'icons/house.svg');
        $(elemento).find('img').attr('src', 'icons/msg-bubble-user-fill.svg');
        $(elemento).next().find('img').attr('src', 'icons/layers.svg');
        $(elemento).next().next().find('img').attr('src', 'icons/at-sign.svg');
        $('.bg').load('pages/sobremim.html');
    }
    function loadPortfolio(elemento) {
        $('.nomePag').html('Portfólio');
        $(elemento).prev().prev().find('img').attr('src', 'icons/house.svg');
        $(elemento).prev().find('img').attr('src', 'icons/msg-bubble-user.svg');
        $(elemento).find('img').attr('src', 'icons/layers-fill.svg');
        $(elemento).next().find('img').attr('src', 'icons/at-sign.svg');
        $('.bg').load('pages/portfolio.html');
    }
    function loadContato(elemento) {
        console.log('Função carregada!');
        $('.nomePag').html('Contato');
        $(elemento).prev().prev().prev().find('img').attr('src', 'icons/house.svg');
        $(elemento).prev().prev().find('img').attr('src', 'icons/msg-bubble-user.svg');
        $(elemento).prev().find('img').attr('src', 'icons/layers.svg');
        $(elemento).find('img').attr('src', 'icons/at-sign-fill.svg');
        $('.bg').load('pages/contato.html');
    }
    /* troca guias ativas */
    function removeId(tabindex) {
        //remove id e adiciona a guia atual
        $('#ativa').removeAttr('id');
        $('[tabindex="' + tabindex + '"]').attr('id', 'ativa');
        console.log(tabindex);
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
            loadBemvindo($(this));

            //verifica se a guia já existe, caso contrário a cria
            if (bemvindo > 0) {
                console.log('Guia existente');
                loadBemvindo();

                removeId('bemvindo');
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

                removeId('bemvindo');
            }
        } else if (id === 'sobre') {
            //carrega função
            loadSobre($(this));

            //verifica se a guia já existe, caso contrário a cria
            if (sobre > 0) {
                console.log('Guia existente');
                loadSobre();
                removeId('sobre');
            } else {
                sobre++;
                console.log(sobre);
                var newTab = `
                <div class="tab" tabindex="sobre">
                    <img src="icons/msg-bubble-user-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Sobre mim</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
                
                removeId('sobre');
            }
        } else if (id === 'portfolio') {
            //carrega função
            loadPortfolio($(this));

            //verifica se a guia já existe, caso contrário a cria
            if (portfolio > 0) {
                console.log('Guia existente');
                loadPortfolio();
                removeId('portfolio');
            } else {
                portfolio++;
                var newTab = `
                <div class="tab" tabindex="portfolio">
                    <img src="icons/layers-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Portfólio</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);

                removeId('portfolio');
            }
        } else if (id === 'contato') {
            //carrega função
            loadContato($(this));

            //verifica se a guia já existe, caso contrário a cria
            if (contato > 0) {
                console.log('Guia existente');
                loadContato();
                removeId('contato');
            } else {
                contato++;
                var newTab = `
                <div class="tab" tabindex="contato">
                    <img src="icons/at-sign-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Contato</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);

                removeId('contato');
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