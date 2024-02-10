function Projeto(nome, descricao, url, dia, mes, ano, img) {
    this.nome = nome;
    this.descricao = descricao;
    this.url = url;
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
    this.img = img;
}
var parasito = new Projeto
('Projeto Parasito', 
'Projeto feito em colaboração com o curso de medicina veterinária da UNISUAM.',
'https://gustahh.github.io/parasito-beta-1.0.0/',  
27, 'Outubro', 2023, 'img/parasito.png');

var chatphp = new Projeto('Chat PHP com MySQL', 'Chat em PHP com MySQL.', 
'https://github.com/gustahh/chatphp', 23, 'Outubro', 2023, 'img/chatphp.png');

var projetos = [chatphp, parasito];

export function meusProjetos() {
    return projetos;
}

