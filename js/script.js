// Funções

function desenhaTelaJogo(){
    var telaJogo = document.querySelector("canvas");
    var pincel = telaJogo.getContext("2d");
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 1200, 800); 
}

function criarPalavraSecreta(){
    novaPalavra = inNovaPalavra.value;
    palavrasSecretas.push(novaPalavra.toUpperCase());
    console.log(palavrasSecretas);
}

function lettersOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
        ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)) {
        alert("Somente letras por favor.");
        return false;
    }
    return true;
}

function adcionarNovaPalavra(){

}

// Elementos HTML

var btCriarPalavra = document.querySelector(".btCriarPalavra");
var inNovaPalavra = document.querySelector(".novaPalavra__jogo");
// Corpo do Programa

var palavrasSecretas = [
    "ALURA",
    "JOGO",
    "CODING",
];
desenhaTelaJogo();
var novaPalavra = "exemplo";
console.log(palavrasSecretas);
btCriarPalavra.addEventListener('click', criarPalavraSecreta);
