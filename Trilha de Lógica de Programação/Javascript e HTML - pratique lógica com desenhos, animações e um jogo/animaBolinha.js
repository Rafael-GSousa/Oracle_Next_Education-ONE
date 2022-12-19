var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var x = 20;
var y = 20;
var raio = 10;
var sentido = 1;

function desenhaCirculo(x, y, raio){
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function atualizaTela(){
    
    limpaTela();
    
   
    if(x > 600){
        sentido = -1
    }else if(x < 0){
        sentido = 1;
    }
    desenhaCirculo(x, y, raio);
    x += sentido;

}

function limpaTela(){
    pincel.clearRect(0, 0, 600, 400);
}

setInterval(atualizaTela, 10);
