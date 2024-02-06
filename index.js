$(document).ready(function() {
    $('li').click(function(event) {
        id = $(this).attr('id');
        console.log(id);
        if (id === 'bemvindo') {
            $('.nomePag').html('Bem vindo!');
            $(this)find('img').attr('src', 'icons/house.svg'); 
            $(this).find('img').attr('src', 'icons/msg-bubble-user-fill.svg');
            $(this).next().find('img').attr('src', 'icons/layers.svg');
            $(this).next().next().find('img').attr('src', 'icons/at-sign.svg');
        } else if (id === 'sobre') {
            $('.nomePag').html('Sobre mim');
            $(this).prev().find('img').attr('src', 'icons/house.svg'); 
            $(this).find('img').attr('src', 'icons/msg-bubble-user-fill.svg');
            $(this).next().find('img').attr('src', 'icons/layers.svg');
            $(this).next().next().find('img').attr('src', 'icons/at-sign.svg');     
        } else if (id === 'portfolio') {
            $('.nomePag').html('Portfólio'); 
        } else if (id === 'contato') {
            $('.nomePag').html('Contato'); 
        }
    });
});