$(document).ready(function() {
    $('li').click(function(event) {
        id = $(this).attr('id');
        console.log(id);
        if (id === 'bemvindo') {
            $('.nomePag').html('Bem vindo!'); 
        } else if (id === 'sobre') {

        } else if (id === 'portfolio') {
            
        } else if (id === 'contato') {

        }
    });
});