function desenhaTelaJogo(){
    var telaJogo = document.querySelector("canvas");
    var pincel = telaJogo.getContext("2d");
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 1200, 800); 
}

desenhaTelaJogo();
