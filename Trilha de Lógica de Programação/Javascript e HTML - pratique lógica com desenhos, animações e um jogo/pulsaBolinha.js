var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var x = 300;
var y = 200;
var raio = 19;
var variacao = 0;


function desenhaCirculo(x, y, raio){
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function atualizaTela(){
    
    limpaTela();
    
   
    if(raio > 30){
        variacao = -1;
    }else if(raio < 20){
        variacao = 1;
    }
    raio += variacao;
    desenhaCirculo(x, y, raio);
    

}

function limpaTela(){
    pincel.clearRect(0, 0, 600, 400);
}

setInterval(atualizaTela, 20);

