// Declarar variaveis
let palavraSecreta = [];
let letrasDescobertas = [];
let letrasChutadas = [];
let mostrarChutes = document.getElementById('letrasChutadas');
let imagemErros = 0;
let imagem = `imagens/${imagemErros} erros.jpg`;

// Verifica se o array tem valores duplicados
function temDuplicado(arr) {

  return new Set(arr).size !== arr.length;

}

// Inicio do jogo (jogador 1 escolhe a palavra)
function escolherPalavraSecreta(e) {

    e.preventDefault();

    // Pega a palavra escolhida
    let palavra = document.querySelector('#palavra-secreta').value;
    console.log(palavra);

    if (palavra != '') {

        palavraSecreta = palavra.split('');
        letrasDescobertas = palavraSecreta.map(function(letra) {
            return '_';
        })

        console.log(palavraSecreta);
        console.log(letrasDescobertas);

        // Muda para a tela de adivinhação
        document.querySelector('.entrada-palavra-secreta').style.display = 'none';
        document.querySelector('.box-letras-digitadas').style.display = 'block';
        document.querySelector('.descoberta-palavra').style.display = 'block';
        document.querySelector('img').setAttribute('src', imagem);

        // Mostra quantas letras tem
        for(let i = 0; i < palavraSecreta.length; i++){

            document.querySelector('.letras-descobertas').insertAdjacentHTML("beforeend", '<span class="letraAdivinhacao">_</span>');

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
function chutarLetra(e) {

    e.preventDefault();

    let chute = document.querySelector('#letras').value;
    letrasChutadas.push(chute);

    if (temDuplicado(letrasChutadas) == false) {

         if (palavraSecreta.includes(chute)) {

            console.log('yay');
            atualizarLetrasDescobertas()
            verificaSeGanhou()

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

    limparCampo('#letras');
    mostrarChutes.innerText = letrasChutadas.join(", ");

}

// Atualiza as letras descobertas
function atualizarLetrasDescobertas() {

    for (let i = 0; i < palavraSecreta.length; i++) {

        if (palavraSecreta[i] == letrasChutadas[letrasChutadas.length - 1]) {
            letrasDescobertas[i] = letrasChutadas[letrasChutadas.length - 1];
            document.querySelectorAll('.letraAdivinhacao')[i].innerHTML = letrasDescobertas[i];

        }

    }

}

// Verifica se o jogador descobriu todas as letras
function verificaSeGanhou() {

    if (letrasDescobertas.indexOf('_') == -1) {

        document.querySelector('h1').innerHTML = 'Parabéns, vocé ganhou!';
        document.getElementById('reiniciar').removeAttribute('disabled');

    }

}

//Limpa o campo
function limparCampo(input) {

    chute = document.querySelector(input);
    chute.value = '';

}

// Reinicia o jogo
function reiniciar() {

    limparCampo('#palavra-secreta');
    
    // Reiniciar variavei
    imagemErros = 0;
    letrasChutadas = [];
    palavraSecreta = [];
    letrasDescobertas = [];
    imagem = `imagens/${imagemErros} erros.jpg`;
    palavraSecreta = null;

    // Deleta os _
    document.querySelector('.letras-descobertas').innerHTML = '';

    // Trocar para tela de input da palavra
    document.querySelector('.entrada-palavra-secreta').style.display = 'block';
    document.querySelector('.box-letras-digitadas').style.display = 'none';
    document.querySelector('.descoberta-palavra').style.display = 'none';
    document.querySelector('h1').innerHTML = 'Jogo da Forca';

}

function inputEnter(input, button) {

    let myInput = document.querySelector(input);
    let myButton = document.querySelector(button);

    myInput.addEventListener('keydown', function(event) {

        if (event.key === "enter") {

            myButton.click();

        }

    });

}

// TODO: Fazer o reiniciar jogo funcionar
// TODO: Tratar espaços antes e depois da palavra no input
// TODO: Fazer o <enter> funcionar em todos formulários
// TODO: Limpar o input de chutes de letras após o jogador enviar a letra - feito