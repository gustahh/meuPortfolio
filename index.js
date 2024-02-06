$(document).ready(function () {
    $('li').click(function (event) {
        id = $(this).attr('id');
        console.log(id);
        if (id === 'bemvindo') {
            $('.nomePag').html('Bem vindo!');
            $(this).find('img').attr('src', 'icons/house-fill.svg');
            $(this).next().find('img').attr('src', 'icons/msg-bubble-user.svg');
            $(this).next().next().find('img').attr('src', 'icons/layers.svg');
            $(this).next().next().next().find('img').attr('src', 'icons/at-sign.svg');
            $('.bg').load('pages/bemvindo.html');
        } else if (id === 'sobre') {
            $('.nomePag').html('Sobre mim');
            $(this).prev().find('img').attr('src', 'icons/house.svg');
            $(this).find('img').attr('src', 'icons/msg-bubble-user-fill.svg');
            $(this).next().find('img').attr('src', 'icons/layers.svg');
            $(this).next().next().find('img').attr('src', 'icons/at-sign.svg');
            $('.bg').load('pages/sobremim.html');
        } else if (id === 'portfolio') {
            $('.nomePag').html('Portfólio');
            $(this).prev().prev().find('img').attr('src', 'icons/house.svg');
            $(this).prev().find('img').attr('src', 'icons/msg-bubble-user.svg');
            $(this).find('img').attr('src', 'icons/layers-fill.svg');
            $(this).next().find('img').attr('src', 'icons/at-sign.svg');
            $('.bg').load('pages/portfolio.html');
        } else if (id === 'contato') {
            $('.nomePag').html('Contato');
            $(this).prev().prev().prev().find('img').attr('src', 'icons/house.svg');
            $(this).prev().prev().find('img').attr('src', 'icons/msg-bubble-user.svg');
            $(this).prev().find('img').attr('src', 'icons/layers.svg');
            $(this).find('img').attr('src', 'icons/at-sign-fill.svg');
            $('.bg').load('pages/contato.html'); a
        }
        /* 
            explicando código!
            .next() seleciona o elemento próximo a div clicada (this, event),
            cada .next() a mais é um elemento a mais. A lógica se inverte para
            o .prev(), buscando o elemento anterior.
        */


    });
});