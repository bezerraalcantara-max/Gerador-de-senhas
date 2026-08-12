const numeroSenha = document.querySelector('.parametro-senha__texto');//seleciona o
let tamanhoSenha = 12;//variavel que pode ser alterada

numeroSenha.textContent = tamanhoSenha;//atribui o tamanho Senha ao numeroSenha

const botoes = document.querySelectorAll('.parametro-senha__botao');//selecionando todas as classes "parametro-senha__botao"

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;


function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha - 1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}



function aumentaTamanho() {
    if (tamanhoSenha < 20) {
            // tamanhoSenha = tamanhoSenha + 1;
            tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}


console.log(botoes);




