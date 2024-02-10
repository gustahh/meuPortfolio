function Projeto(nome, descricao, url, dia, mes, ano, img) {
    this.nome = nome;
    this.descricao = descricao;
    this.url = url;
    this.mes = mes;
    this.dia = dia;
    this.ano = ano;
    this.img = img;
}
var chatphp = new Projeto('Chat PHP com MySQL', 'Chat em PHP com MySQL', 
'https://github.com/gustahh/chatphp', 23, 'Outubro', 2023, '../img/chatphp.png');

var projetos = [chatphp];

export function meusProjetos() {
    return projetos;
}

