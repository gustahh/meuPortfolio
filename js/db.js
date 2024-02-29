//função para criar projetos
function Projeto(nome, descricao, url, dia, mes, ano, img) {
    this.nome = nome;
    this.descricao = descricao;
    this.url = url;
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
    this.img = img;
}
//cria projetos
var parasito = new Projeto
('Projeto Parasito', 
'Projeto feito em colaboração com o <br> curso de medicina veterinária da <br> UNISUAM.',
'https://gustahh.github.io/parasito-beta-1.0.0/',  
27, 'Outubro', 2023, 'img/parasito.png');

var chatphp = new Projeto('Chat PHP com MySQL', 'Chat em PHP com MySQL.', 
'https://github.com/gustahh/chatphp', 23, 'Outubro', 2023, 'img/chatphp.png');

var bodyMovin = new Projeto('Toggle', 
'BodyMovin, uma extensão do <br> After Effects que permite rodar <br> animações no HTML.', 
'https://gustahh.github.io/toggle/', 20, 'Março', 2020, 'img/toggle.gif');

var CRUD = new Projeto('CRUD React', 'CRUD com React, Tailwind e MySQL.', 
'https://github.com/gustahh/CRUD', 29, 'Fevereiro', 2024, 'img/CRUD.jpeg')

var projetos = [CRUD, parasito, chatphp, bodyMovin];

export function meusProjetos() {
    return projetos;  
}

//função para criar fixados

function Fixar(fixar, recado) {
    this.fixar = fixar;
    this.recado = recado;
}

//cria fixado
var novoFixado = new Fixar(CRUD, 'Estou aprendendo React. 💙⚛️');
var fixado = [novoFixado];

export function meuFixado() {
    return fixado;
}

//Função para criar favoritos

function Favoritar(proj) {
    this.proj = proj;
}

var favChat = new Favoritar(chatphp);
var favParasito = new Favoritar(parasito);
var favs = [favParasito, favChat];

export function meusFavs() {
    return favs;
}

