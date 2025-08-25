//Inicio e definir variaveis
alert('Boas vindas ao Jogo do Número Secreto');
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
console.log(`numero secreto = ${numeroSecreto}`); //Mostra o numero no console
let tentativasMaximas = 5;
let tentativas = tentativasMaximas;
let round = 1;
alert(`round ${round}`);

//Codigo do jogo
while(true) {
    let chute = Number(prompt(`Escolha um numero entre 1 e ${numeroMaximo}`));

    //Se ficar sem tentativas, mensagem de voce ganhou
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(tentativas < 1) {
        alert('ERROU OTARIOKKKKKKKKKKKKKK');
        break;
    } else {
        alert(`Você descobriu o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa} sobrando`);
        round++;
        alert(`round ${round}`);

        //Aumenta a dificuldade
        numeroMaximo = numeroMaximo + 10;
        tentativasMaximas++;
        tentativas = tentativasMaximas;
        numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
        console.log(`numero secreto = ${numeroSecreto}`);
        chute = null;
        while(numeroSecreto !== chute && tentativas > 0) {
            console.log(`chute = ${chute}`); //Mostra o chute no console
            if(numeroSecreto > chute) {
                alert('O numero é maior, tente novamente'); //chute menor que numerosecreto
            } else if(numeroSecreto < chute) {
                alert('O numero é menor, tente novamente'); //chute maior que numerosecreto
            }
            tentativas--; //Remove 1 de tentativas
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            chute = Number(prompt(`Escolha um numero entre 1 e ${numeroMaximo}, você tem ${tentativas} ${palavraTentativa}`));
        }
    }
}