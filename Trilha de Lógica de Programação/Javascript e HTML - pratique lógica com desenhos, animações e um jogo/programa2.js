function desenhaQuadrado(x, y, cor){

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(x, y, 50, 50);
}

var cont = 1;
for(let y = 0; y < 400; y+=50){
    var cor = prompt('Qual a cor da ' + cont + 'ª linha?');
    for(let x = 0; x < 600; x+=50){
        desenhaQuadrado(x, y, cor);    
    }
    cont++;
   // desenhaQuadrado(i, 0, 'green');    
}
//desenhaQuadrado(0, 0, 'green');
//desenhaQuadrado(50, 0, 'green');
//desenhaQuadrado(100, 0, 'green');