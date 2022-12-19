function desenhaQuadrado(x, y, cor){

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(x, y, 50, 50);
}



function desenhaTexto(texto, x , y) {
   var tela = document.querySelector('canvas');
   var pincel = tela.getContext('2d');

    pincel.font='20px Georgia';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);    
}

desenhaTexto("Qual é a fração?", 50, 30);

for(let x = 50; x < 250; x+=50){
    if(x <= 150){
      var cor = 'green';      
    } else{
        var cor = 'white';
    }
    for(let y = 40; y < 90; y += 90){
        desenhaQuadrado(x, y, cor);
    }

}
