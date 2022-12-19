    //versão da alternativa correta do exercício
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    // cabeça
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(200,50,350,300);

    // olhos
    pincel.fillStyle = 'black';
    pincel.fillRect(250, 110, 90, 90);
    pincel.fillRect(410, 110, 90, 90);

    // nariz
    pincel.fillRect(340, 200, 70, 100);

    // boca ou barba
    pincel.fillRect(300, 240, 40, 110);
    pincel.fillRect(410, 240, 40, 110);   
    
    //restante do canvas que ficou em branco
    // cobriu a minha versão
    pincel.fillStyle = 'blue';
    pincel.fillRect(0, 0, 600, 50);
    pincel.fillRect(0, 350, 600, 400);
    pincel.fillRect(0, 50, 200, 350);
    pincel.fillRect(550, 0, 600, 400);