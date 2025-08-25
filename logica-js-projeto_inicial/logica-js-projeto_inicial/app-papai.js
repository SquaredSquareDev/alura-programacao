// Inicializa as variáveis
let
    numeroMaximo = 0,
    numeroSecreto,
    tentativasMaximas = 4,
    round = 0,
    chute,
    tentativa,
    resposta = "";

// Inicializa o Round
while(resposta !== null) {

    // Atualiza as variáveis do Round
    numeroMaximo += 10;
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    tentativasMaximas++;
    round++;
    chute = null;

    alert(`Round ${round}!`)

    // Inicia as jogadas
    for(let tentativa = 0; tentativa <= tentativasMaximas; tentativa++) {

        // Verifica a quantidade de tentativas
        if(tentativa >= tentativasMaximas) {
            alert('ERROU OTARIOKKKKKKKKKKKKKK');
            resposta = null;
            break;
        }
        
        // Realiza a jogada
        resposta = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`)

        if(resposta === null)
            break;

        chute = Number(resposta);

        // Valida a resposta do jogador
        if(numeroSecreto > chute) {
            alert('O numero é maior, tente novamente'); //chute menor que numerosecreto
        } else if(numeroSecreto < chute) {
            alert('O numero é menor, tente novamente'); //chute maior que numerosecreto
        } else {
            alert(`Você descobriu o numero ${numeroSecreto} na tentativa ${tentativa} de ${tentativasMaximas}`);
            break;
        }

    }

}