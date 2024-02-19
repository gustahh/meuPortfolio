//importa projetos do arquivo db.js

import { meusProjetos, meuFixado, meusFavs } from "./db.js";

var projetos = meusProjetos();
var fixado = meuFixado();
var favs = meusFavs();
console.log(favs);

$(document).ready(function () {
    //funcoes

    //declara se existe ou não as abas (1 para existe e 0 para não existe)
    var bemvindo = 1;
    var sobre = 0;
    var portfolio = 0;
    var contato = 0;
    var PagProjetos = 0;
    var pagFavs = 0;
    var guiasTotal = 1;


    /* função para carregar página */

    function loadPag(pag, nomePag, elemento) {
        console.log('Função carregada!');
        $('.nomePag').html(pag);
        if (nomePag === 'bemvindo') {
            $(elemento).find('img').attr('src', 'icons/house-fill.svg');
            $(elemento).next().find('img').attr('src', 'icons/msg-bubble-user.svg');
            $(elemento).next().next().find('img').attr('src', 'icons/layers.svg');
            $(elemento).next().next().next().find('img').attr('src', 'icons/at-sign.svg');
        } else if (nomePag === 'sobremim') {
            $(elemento).prev().find('img').attr('src', 'icons/house.svg');
            $(elemento).find('img').attr('src', 'icons/msg-bubble-user-fill.svg');
            $(elemento).next().find('img').attr('src', 'icons/layers.svg');
            $(elemento).next().next().find('img').attr('src', 'icons/at-sign.svg');
        } else if (nomePag === 'contato') {
            $(elemento).prev().prev().prev().find('img').attr('src', 'icons/house.svg');
            $(elemento).prev().prev().find('img').attr('src', 'icons/msg-bubble-user.svg');
            $(elemento).prev().find('img').attr('src', 'icons/layers.svg');
            $(elemento).find('img').attr('src', 'icons/at-sign-fill.svg');
        } else {
            $('#bemvindo').find('img').attr('src', 'icons/house.svg');
            $('#sobremim').find('img').attr('src', 'icons/msg-bubble-user.svg');
            $('#portfolio').find('img').attr('src', 'icons/layers.svg');
            $('#contato').find('img').attr('src', 'icons/at-sign.svg');
        }
        /* 
           explicando código!
           .next() seleciona o elemento próximo a div clicada (elemento),
           cada .next() a mais é um elemento a mais. A lógica se inverte para
           o .prev(), buscando o elemento anterior.
       */
        if (nomePag === 'contato') {
            $('.bg').load('pages/' + nomePag + '.html', function mailto() {

                var btnEnviar = document.querySelector('.btnEnviar');

                btnEnviar.addEventListener('click', () => {
                    event.preventDefault();
                    var assunto = document.querySelector('#assunto').value;
                    var mensagem = document.querySelector('#mensagem').value;
                    console.log(assunto, mensagem);
                    window.location.href = 'mailto:gustavocarlos202@gmail.com?subject=' + assunto + '&body=' + mensagem;
                });
            });
        } else {
            $('.bg').load('pages/' + nomePag + '.html');
        }

    }

    function loadProjetos() {
        $('.bg').load('pages/projetos.html', function carregarTodosOsProjetos() {
            //carrega projetos
            projetos.forEach(function (projeto) {
                var projsHTML = `
                <a href="${projeto.url}" target="_blank">
                <div class="projAll">
                    <div class="divImgProj">
                        <img class="imgProj" src="${projeto.img}">
                    </div>
                    <span class="projNome" title="${projeto.nome}">${projeto.nome}</span>
                    <br>
                    <span class="projDesc" title="${projeto.descricao}">${projeto.descricao}</span>
                    <br>
                    <span class="projData" title="${projeto.ano}">${projeto.ano}</span>
                </div>
                </a>
    `;
                var bgProjeto = document.querySelector('.bgProjeto');
                bgProjeto.innerHTML += projsHTML;

                if ($(window).width() <= 600) {
                    $('.voltar').css('display', 'block');
                }
            })
        });
    }
    function loadFavs() {
        $('.bg').load('pages/favoritos.html', function carregarFavoritos() {
            //carrega projetos
            favs.forEach(function (fav) {
                var projsHTML = `
                <a href="${fav.proj.url}" target="_blank">
                    <div class="proj">
                        <div class="divImgProj">
                            <img class="imgProj" src="${fav.proj.img}">
                        </div>
                        <span class="projNome" title="${fav.proj.nome}">${fav.proj.nome}</span>
                        <br>
                        <span class="projDesc" title="${fav.proj.descricao}">${fav.proj.descricao}</span>
                        <br>
                        <span class="projData" title="${fav.proj.ano}">${fav.proj.ano}</span>
                    </div>
                </a>
                `;
                var bgProjeto = document.querySelector('.bgProjeto');
                bgProjeto.innerHTML += projsHTML;

                if ($(window).width() <= 600) {
                    $('.voltar').css('display', 'block');
                }
            })
        });
    }
    function loadPortfolio() {
        $('.bg').load('pages/portfolio.html', function carregarProjetos() {

            //projeto fixado

            fixado.forEach(function (projFixado) {
                var fixadoHTML = `
                <a href="${projFixado.fixar.url}" target="_blank">
                    <div class="projFixado">
                        <div class="divImgProj">
                            <img class="imgProj" src="${projFixado.fixar.img}">
                        </div>
                        <span class="projNome" title="${projFixado.fixar.nome}">${projFixado.fixar.nome}</span>
                        <br>
                        <span class="projDesc" title="${projFixado.fixar.descricao}">${projFixado.fixar.descricao}</span>
                        <br>
                        <span class="projData" title="${projFixado.fixar.ano}">${projFixado.fixar.ano}</span>
                    </div>
                </a>
                
                `;
                $('.textoRecado').html(projFixado.recado);
                $('.projFixado').append(fixadoHTML);
            });

            //carrega projetos
            projetos.forEach(function (projeto) {
                var projsHTML = `
                <a href="${projeto.url}" target="_blank">
                    <li class="liProj">
                        <div class="divImgProj">
                            <img class="imgProj" src="${projeto.img}">
                        </div>
                        <span class="projNome" title="${projeto.nome}">${projeto.nome}</span>
                        <br>
                        <span class="projDesc" title="${projeto.descricao}">${projeto.descricao}</span>
                        <br><br><br>
                        <span class="projData" title="${projeto.ano}">${projeto.ano}</span>
                    </li>
                </a>    
            `;
                var ulProjetos = document.querySelector('.ulProj');
                ulProjetos.innerHTML += projsHTML;
            })
            if (projetos.length > 2) {
                //botao para navegar
                var navegacao = `
                    <button class="btnVoltar">
                        <img src="icons/chevron-left.svg" alt="">
                    </button>
                    <button class="btnAdiantar">
                        <img src="icons/chevron-right.svg" alt="">
                    </button>
                `;
                $('#navTodos').append(navegacao);

                //botao mostrar tudo
                var mostrar = `
                    <p class="mostrar">Mostrar tudo</p>
                `;
                $('#todos').append(mostrar);

                $('.mostrar').click(function () {
                    //verifica se a guia já existe, caso contrário a cria
                    if (PagProjetos > 0) {
                        console.log('Guia existente');
                        loadProjetos();
                        showClose('[tabindex="projetos"]');
                        removeId('projetos');
                    } else {
                        PagProjetos++;
                        guiasTotal++;
                        console.log(PagProjetos);
                        loadProjetos();
                        var newTab = `
                            <div class="tab" tabindex="projetos" name="Projetos" id="ativa">
                                <img src="icons/layers-fill.svg" alt="" srcset="" class="iconsTab">
                                <span class="tabName">Projetos</span>
                                <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                            </div>
                        `;
                        $('.bar').append(newTab);
                        showClose('[tabindex="projetos"]');
                        removeId('projetos');
                    }

                });
            }
            //btnAdiantar

            $(document).on('click', '.btnAdiantar', function () {
                var pai = $(this).parent();
                var avo = pai.parent()
                var bisa = avo.parent();
                const ulId = bisa.find('ul').attr('class');
                const ul = document.querySelector('.' + ulId);
                console.log(ul);
                ul.scrollBy({
                    left: 200,
                    behavior: 'smooth'
                });
            });

            //btnAdiantar

            $(document).on('click', '.btnVoltar', function () {
                var pai = $(this).parent();
                var avo = pai.parent()
                var bisa = avo.parent();
                const ulId = bisa.find('ul').attr('class');
                const ul = document.querySelector('.' + ulId);
                console.log(ul);
                ul.scrollBy({
                    left: -200,
                    behavior: 'smooth'
                });
            });

            //carrega projetos favoritos
            favs.forEach(function (fav) {
                var favsHTML = `
                <a href="${fav.proj.url}" target="_blank">
                    <li class="liFavs">
                        <div class="divImgProj">
                            <img class="imgProj" src="${fav.proj.img}">
                        </div>
                        <span class="projNome">${fav.proj.nome}</span>
                        <br>
                        <span class="projDesc">${fav.proj.descricao}</span>
                        <br>
                        <span class="projData">${fav.proj.ano}</span>
                    </li>
                </a>
            `;
                var ulFavs = document.querySelector('.ulFavs');
                ulFavs.innerHTML += favsHTML;
            })
            if (favs.length > 2) {
                //botao para navegar
                var navegacao = `
                    <button class="btnVoltar">
                        <img src="icons/chevron-left.svg" alt="">
                    </button>
                    <button class="btnAdiantar">
                        <img src="icons/chevron-right.svg" alt="">
                    </button>
                `;
                $('#navFavs').append(navegacao);

                //botao mostrar tudo
                var mostrar = `
                    <p class="mostrar" id="fav">Mostrar tudo</p>
                `;
                $('#favs').append(mostrar);

                $('#fav').click(function () {
                    //verifica se a guia já existe, caso contrário a cria
                    if (pagFavs > 0) {
                        console.log('Guia existente');
                        loadFavs();
                        showClose('[tabindex="favoritos"]');
                        removeId('projetos');
                    } else {
                        PagProjetos++;
                        guiasTotal++;
                        console.log(PagProjetos);
                        loadFavs();
                        var newTab = `
                            <div class="tab" tabindex="favoritos" name="Favoritos" id="ativa">
                                <img src="icons/heart.svg" alt="" srcset="" class="iconsTab">
                                <span class="tabName">Favoritos</span>
                                <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                            </div>
                        `;
                        $('.bar').append(newTab);
                        showClose('[tabindex="favoritos"]');
                        removeId('favoritos');
                    }

                });
            } else {
                $('.ulFavs').css('padding-bottom', '50px');
            }
        });
        //para mudar svg
        $('.nomePag').html('Portfólio');
        $('#bemvindo').find('img').attr('src', 'icons/house.svg');
        $('#sobremim').find('img').attr('src', 'icons/msg-bubble-user.svg');
        $('#portfolio').find('img').attr('src', 'icons/layers-fill.svg');
        $('#contato').find('img').attr('src', 'icons/at-sign.svg');
        //mobile
        $('li#bemvindo.liFooter').find('img').attr('src', 'icons/house.svg');
        $('li#sobremim.liFooter').find('img').attr('src', 'icons/msg-bubble-user.svg');
        $('li#portfolio.liFooter').find('img').attr('src', 'icons/layers-fill.svg');
        $('li#contato.liFooter').find('img').attr('src', 'icons/at-sign.svg');

    }
    //volta para página portfólio
    function voltar() {
        loadPortfolio();
        $('.voltar').css('display', 'none');
    }
    $('.voltar').click(function () {
        voltar();
    });
    //troca guias ativas
    function removeId(tabindex) {
        //remove id e adiciona a guia atual
        $('#ativa').removeAttr('id');
        $('[tabindex="' + tabindex + '"]').attr('id', 'ativa');
        console.log(tabindex);
    }

    //exibe o botão de fechar da guia
    function showClose(guia) {
        //oculta todos os botões de fechar e exibe apenas na guia atual
        var allCloses = document.querySelectorAll('.closeTab');
        allCloses.forEach(close => {
            var className = close.className;
            $('.' + className).css('display', 'none');
        });
        var thisClose = $(guia).find('.closeTab');
        thisClose.css('display', 'block');
    }

    function navegacao() {
        $(document).on('click', '.liNavegar', function (event) {
            var index = $(this).attr('tabindex');
            console.log(index);
            if (index === 'sobremim') {
                //carrega função
                loadPag('Sobre mim', 'sobremim', '#sobremim');



                //verifica se a guia já existe, caso contrário a cria
                if (sobre > 0) {
                    console.log('Guia existente');
                    loadPag('Sobre mim', 'sobremim', '#sobremim');
                    showClose('[tabindex="sobremim"]');
                    removeId('sobremim');
                } else {
                    sobre++;
                    guiasTotal++;
                    console.log(sobre);
                    var newTab = `
                <div class="tab" tabindex="sobremim" name="Sobre mim">
                    <img src="icons/msg-bubble-user-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Sobre mim</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                    $('.bar').append(newTab);
                    showClose('[tabindex="sobremim"]');
                    removeId('sobremim');
                }
            } else if (index === 'portfolio') {
                //carrega função
                loadPortfolio();

                //verifica se a guia já existe, caso contrário a cria
                if (portfolio > 0) {
                    console.log('Guia existente');
                    loadPortfolio();
                    showClose('[tabindex="portfolio"]');
                    removeId('portfolio');
                } else {
                    portfolio++;
                    guiasTotal++;
                    var newTab = `
                <div class="tab" tabindex="portfolio" name="Portfólio">
                    <img src="icons/layers-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Portfólio</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                    $('.bar').append(newTab);
                    showClose('[tabindex="portfolio"]');
                    removeId('portfolio');
                }
            } else if (index === 'contato') {
                //carrega função
                loadPag('Contato', 'contato', '#contato');

                //verifica se a guia já existe, caso contrário a cria
                if (contato > 0) {
                    console.log('Guia existente');
                    loadPag('Contato', 'contato', '#contato');
                    showClose('[tabindex="contato"]');
                    removeId('contato');
                } else {
                    contato++;
                    guiasTotal++;
                    var newTab = `
                <div class="tab" tabindex="contato" name="Contato">
                    <img src="icons/at-sign-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Contato</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                    $('.bar').append(newTab);
                    showClose('[tabindex="contato"]');
                    removeId('contato');
                }
            }
        });
    }
    //codigo

    /* carrega página bem vindo por padrão */
    $('.bg').load('pages/bemvindo.html', function () {
        navegacao();
    });
    $('[tabindex="bemvindo"]').find('.closeTab').css('display', 'block');

    //clica na li

    $('li').click(function (event) {
        var id = $(this).attr('id');
        console.log(id);
        if (id === 'bemvindo') {
            //carrega função
            loadPag('Bem vindo!', 'bemvindo', $(this)), function () {
                navegacao();
            };

            //verifica se a guia já existe, caso contrário a cria
            if (bemvindo > 0) {
                console.log('Guia existente');
                loadPag('Bem vindo!', 'bemvindo', $(this));
                showClose('[tabindex="bemvindo"]');
                removeId('bemvindo');
            } else {
                bemvindo++;
                guiasTotal++;
                console.log(bemvindo);
                var newTab = `
                <div class="tab" tabindex="bemvindo" name="Bem vindo!" id="ativa">
                    <img src="icons/house-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Bem Vindo!</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
                showClose('[tabindex="bemvindo"]');
                removeId('bemvindo');
            }
        } else if (id === 'sobremim') {
            //carrega função
            loadPag('Sobre mim', 'sobremim', $(this));

            //verifica se a guia já existe, caso contrário a cria
            if (sobre > 0) {
                console.log('Guia existente');
                loadPag('Sobre mim', 'sobremim', $(this));
                showClose('[tabindex="sobremim"]');
                removeId('sobremim');
            } else {
                sobre++;
                guiasTotal++;
                console.log(sobre);
                var newTab = `
                <div class="tab" tabindex="sobremim" name="Sobre mim">
                    <img src="icons/msg-bubble-user-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Sobre mim</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
                showClose('[tabindex="sobremim"]');
                removeId('sobremim');
            }
        } else if (id === 'portfolio') {
            //carrega função
            loadPortfolio();

            //verifica se a guia já existe, caso contrário a cria
            if (portfolio > 0) {
                console.log('Guia existente');
                loadPortfolio();
                showClose('[tabindex="portfolio"]');
                removeId('portfolio');
            } else {
                portfolio++;
                guiasTotal++;
                var newTab = `
                <div class="tab" tabindex="portfolio" name="Portfólio">
                    <img src="icons/layers-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Portfólio</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
                showClose('[tabindex="portfolio"]');
                removeId('portfolio');
            }
        } else if (id === 'contato') {
            //carrega função
            loadPag('Contato', 'contato', $(this));

            //verifica se a guia já existe, caso contrário a cria
            if (contato > 0) {
                console.log('Guia existente');
                loadPag('Contato', 'contato', $(this));
                showClose('[tabindex="contato"]');
                removeId('contato');
            } else {
                contato++;
                guiasTotal++;
                var newTab = `
                <div class="tab" tabindex="contato" name="Contato">
                    <img src="icons/at-sign-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Contato</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
                showClose('[tabindex="contato"]');
                removeId('contato');
            }
        }
    });
    //altera a guia clicando na mesma
    $('.bar').on('click', '.tab', function () {
        var index = $(this).attr('tabindex');
        var nomePag = $(this).attr('name');
        showClose($(this));
        removeId(index);
        if (index === 'portfolio') {
            loadPortfolio();
        } else if (index === 'projetos') {
            loadProjetos();
            removeId('projetos');
        } else if (index === 'favoritos') {
            loadFavs();
            removeId('favoritos');
        } else {
            loadPag(nomePag, index, $('#' + index));
        }
    });

    //fecha a guia
    $(document).on('click', '.closeTab', function () {
        // Evita a propagação do evento para o elemento pai
        event.stopPropagation();
        console.log('fechar!');
        //seleciona a guia clicada
        var pai = $(this).parent();
        var index = pai.attr('tabindex');
        if (index === 'bemvindo') {
            bemvindo--;
            guiasTotal--;
        } else if (index === 'sobremim') {
            sobre--;
            guiasTotal--;
        } else if (index === 'portfolio') {
            portfolio--;
            guiasTotal--;
        } else if (index === 'contato') {
            contato--;
            guiasTotal--;
        } else if (index === 'projetos') {
            PagProjetos--;
            guiasTotal--;
        } else if (index === 'favoritos') {
            pagFavs--;
            guiasTotal--;
        }

        /*carrega a guia a direita se existir, caso contrário carrega a 
       da esquerda */
        if (pai.next().length > 0) {
            console.log('existe');
            var nextIndex = pai.next().attr('tabindex');
            console.log(nextIndex);
            var nextName = pai.next().attr('name');
            console.log(nextName);
            if (nextIndex === 'portfolio') {
                loadPortfolio();
                removeId('portfolio');
            } else if (nextIndex === 'projetos') {
                loadProjetos();
                removeId('projetos');
            } else if (nextIndex === 'favoritos') {
                loadFavs();
                removeId('favoritos');
            } else {
                loadPag(nextName, nextIndex, $('#' + nextIndex));
                removeId(nextIndex);
            }
            showClose(pai.next());
        } else {
            console.log('não existe');
            var prevIndex = pai.prev().attr('tabindex');
            console.log(prevIndex);
            var prevName = pai.prev().attr('name');
            console.log(prevName);
            if (prevIndex === 'portfolio') {
                loadPortfolio();
                removeId('portfolio');
            } else if (prevIndex === 'projetos') {
                loadProjetos();
                removeId('projetos');
            } else if (prevIndex === 'favoritos') {
                loadFavs();
                removeId('favoritos');
            } else {
                console.log('else', prevName, prevIndex, $('#' + prevIndex));
                loadPag(prevName, prevIndex, $('#' + prevIndex));
                removeId(prevIndex);
            }
            showClose(pai.prev());
        }

        //remove guia
        pai.remove();
        console.log('O numero de guias é: ', guiasTotal);

        //checa numeros de guias, se for 0 então não exibe nenhuma
        if (guiasTotal < 1) {
            loadPag('', 'background');
        }
    });
});



