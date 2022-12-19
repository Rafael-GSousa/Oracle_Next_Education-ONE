var paletaCores = document.querySelector('input');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);
var cores = ['blue', 'red', 'green'];
var indiceCorAtual = 0;
var raio = 10;
function desenhaCirculo(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if(desenha){

        if(evento.shiftKey && evento.altKey){
            alert('Apenas uma tecla por vez!');
        }

        else if(evento.shiftKey && raio + 10 <= 40){
            raio += 10;
        }

        else if(evento.altKey && raio - 5 >= 10){
            raio -= 5;
        }
        pincel.fillStyle = paletaCores;//cores[indiceCorAtual];
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
        console.log(x + ',' + y);
    }
}
var desenha = false;



tela.onmousemove = desenhaCirculo;
tela.onmousedown = function() {
    desenha = true;
}
tela.onmouseup =     function() {
    desenha = false;
}

while(desenha == true){
    desenhaCirculo();
}

function mudaCor(evento) {
    indiceCorAtual++;
    if(indiceCorAtual >= cores.length){
        indiceCorAtual = 0;
    }
    
    return false;
}

//tela.oncontextmenu = mudaCor;