const numeroSenha = document.querySelector('.parametro-senha__texto');//seleciona o
let tamanhoSenha = 12;//variavel que pode ser alterada

numeroSenha.textContent = tamanhoSenha;//atribui o tamanho Senha ao numeroSenha
const botoes = document.querySelectorAll('.parametro-senha__botao');//selecionando todas as classes "parametro-senha__botao"

botoes[0].onclick = diminuiTamanho;
function diminuiTamanho(){ 
    tamanhoSenha = tamanhoSenha - 1; //diminui de 1 o valor do tamanhoSenha
    numeroSenha.textContent = tamanhoSenha   
}


botoes[1].onclick = aumentaTamanho;
function aumentaTamanho(){ 
    tamanhoSenha = tamanhoSenha + 1; //aumenta de 1 o valor do tamanhoSenha
    numeroSenha.textContent = tamanhoSenha;//atribui o tamanho Senha ao numeroSenha
}


console.log(botoes);