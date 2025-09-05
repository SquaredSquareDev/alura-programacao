// Declarar variaveis
let palavraSecreta;
let letrasChutadas = [];
let tentativasRestantes = 6;
let mostrarChutes = document.getElementById('letrasChutadas');

// Verifica se o array tem valores duplicados
function temDuplicado(arr) {
  return new Set(arr).size !== arr.length;
}

// Inicio do jogo (jogador 1 escolhe a palavra)
function escolherPalavraSecreta() {
    // Pega a palavra escolhida
    let palavra = document.querySelector('#palavra-secreta').value;
    console.log(palavra);

    if (palavra != '') {
        palavraSecreta = palavra;

        // Muda para a tela de adivinhação
        document.querySelector('.entrada-palavra-secreta').style.display = 'none';
        document.querySelector('.box-letras-digitadas').style.display = 'block';
        document.querySelector('.descoberta-palavra').style.display = 'block';

        // Mostra quantas letras tem
        for(let i = 0; i < palavraSecreta.length; i++){
            document.querySelector('.letras-descobertas').insertAdjacentHTML("beforeend", '<span class="letra">_</span>');
        }
    } else {
        alert('Digite uma palavra');
    }

}

// O jogo em si (jogador 2 descobre a palavra)
function chutarLetra() {
    let chute = document.querySelector('#letras').value;
    letrasChutadas.push(chute);

    if (temDuplicado(letrasChutadas) == false) {
         if (palavraSecreta.includes(chute)) {
            console.log('yay');
        } else {
            console.log(':(');
        }
    } else {
        alert('Escolha outra letra');
        letrasChutadas.pop();
    }

    mostrarChutes.innerText = letrasChutadas.join(", ");
}
