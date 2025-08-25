//Variaveis base
let
    ListaNumSorteados = []; // Previni repetição de numero
    numMaximo = 10;
    numSecreto = numRandom();
    tentativas = 1;

//Exibir mensagens do jogo
function exibirTexto(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do Numero Secreto');
    let alcanceNumSecreto = `Escolha um numero entre 1 e ${numMaximo}`
    exibirTexto('p', alcanceNumSecreto);
} 
mensagemInicial();

// Botão de chute
function numRandom() { // Gera o numero secreto
    let numEscolhido = Math.floor(Math.random() * numMaximo) + 1;
    let tamanhoLista = ListaNumSorteados.length;

    if (tamanhoLista == 5) {
        ListaNumSorteados = [];
    }
    if (ListaNumSorteados.includes(numEscolhido)) {
        return numRandom();
    } else {
        ListaNumSorteados.push(numEscolhido);
        console.log(ListaNumSorteados);
        console.log(numEscolhido);
        return numEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numSecreto) { // Acerto
        exibirTexto('h1', 'Numero certo!');
        let pluralTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemVitoria = `Voce encontrou o numero ${numSecreto} em ${tentativas} ${pluralTentativa}`;
        exibirTexto('p', mensagemVitoria);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { // Erro
        tentativas++;
        if (chute > numSecreto) { 
            exibirTexto('p', 'O numero é menor');
        } else {
            exibirTexto('p', 'O numero é maior');
        }
    }

}

// Botão de reiniciar
function reiniciarJogo() {
    numSecreto = numRandom();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// Limpar campo
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


// Codigo do curso Alura

/*
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroRandom();
let tentativas = 1;

// Titulo e mensagem do jogo
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escola um numero entre 1 e 10');
}

mensagemInicial();

// Função botão
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentivas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero em ${tentativas} ${palavraTentativa}!`;  
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        tentativas++;
        limparCampo();
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero é menor');
        } else {
            exibirTextoNaTela('p', 'O numero é maior');
        }
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroRandom();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// Gera o numero
function gerarNumeroRandom() {
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite) + 1;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroRandom();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        console.log(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
*/