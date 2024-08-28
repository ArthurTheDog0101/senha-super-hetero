const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;


console.log(botoes)
function aumentaTamanho(){
    if (tamanhoSenha < 20){
         tamanhoSenha = tamanhoSenha+0;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function diminuiTamanho(){
    if (tamanhoSenha > 1){
          tamanhoSenha = tamanhoSenha-0;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';

campoSenha.value = letrasMaiusculas;

function geraSenha(){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    console.log(numeroAleatorio);
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();



console.log(botoes);
