let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function botaoConsole() {
    console.log('o botão foi clicado');
}
function botaoAlert() {
    alert('Eu amo JS');
}
function botaoPrompt() {
    let cidade = prompt('Fale o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de voce`);
}
function botaoSoma() {
    let numeroA = Number(prompt('Insira um numero'));
    let numeroB = Number(prompt('Insira mais um numero'));
    let numeroC =  numeroA + numeroB;
    alert(`a soma é ${numeroC}!`);
}