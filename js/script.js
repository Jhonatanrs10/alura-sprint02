// Funções

function desenhaTelaJogo(){
    var telaJogo = document.querySelector("canvas");
    var pincel = telaJogo.getContext("2d");
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 1200, 800); 
}

function criarPalavraSecreta(novaPalavra, array){
    var novaPalavra = "exemplo";
    array.push(novaPalavra);
}

var palavrasSecretas = [
    "ALURA",
    "JOGO",
    "CODING",
];


// Elementos HTML

var btCriarPalavra = document.querySelector(".btCriarPalavra");



// Corpo do Programa

desenhaTelaJogo();

var i = 0;
btCriarPalavra.addEventListener('click', function() {
   
});
