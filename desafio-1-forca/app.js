// Declarar variaveis
let palavraSecreta;
let letrasChutadas = [];
let mostrarChutes = document.getElementById('letrasChutadas');
let imagemErros = 0;
let imagem = `imagens/${imagemErros} erros.jpg`;

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
        document.querySelector('img').setAttribute('src', imagem);

        // Mostra quantas letras tem
        for(let i = 0; i < palavraSecreta.length; i++){
            document.querySelector('.letras-descobertas').insertAdjacentHTML("beforeend", '<span class="letra">_</span>');
        }
    } else {
        alert('Digite uma palavra');
    }

}

// Função para trocar de imagem
function proximaImagem() {
    imagemErros++;
    imagem = `imagens/${imagemErros} erros.jpg`;
    document.querySelector('img').setAttribute('src', imagem);
}

// O jogo em si (jogador 2 descobre a palavra)
function chutarLetra() {
    let chute = document.querySelector('#letras').value;
    letrasChutadas.push(chute);

    if (temDuplicado(letrasChutadas) == false) {
         if (palavraSecreta.includes(chute)) {
            console.log('yay');
        } else {
            if (imagemErros < 5) {    
                proximaImagem();
                console.log(':(');
            } else {
                proximaImagem();
                document.querySelector('h1').innerHTML = "Você perdeu!";
                document.getElementById('reiniciar').removeAttribute('disabled');
            }
        }
    } else {
        alert('Escolha outra letra');
        letrasChutadas.pop();
    }

    mostrarChutes.innerText = letrasChutadas.join(", ");
}

// Reinicia o jogo
function reiniciar() {
    imagemErros = 0;
    letrasChutadas = [];
    imagem = `imagens/${imagemErros} erros.jpg`;
    palavraSecreta = null;
    document.querySelector('.entrada-palavra-secreta').style.display = 'block';
    document.querySelector('.box-letras-digitadas').style.display = 'none';
    document.querySelector('.descoberta-palavra').style.display = 'none';
}
