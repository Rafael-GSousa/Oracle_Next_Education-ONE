    //minha versão
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    //cabeça
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(0, 0, 350, 300);

    //olhos
    pincel.fillStyle = 'black';
    //olho esquerdo
    pincel.fillRect(50, 80, 90, 90);
    //olho direito
    pincel.fillRect(210, 80, 90, 90);

    //nariz
    pincel.fillRect(140, 170, 70, 100);

    //lado esquerdo da boca
    pincel.fillRect(100, 190, 40, 110);
    //lado direito da boca
    pincel.fillRect(210, 190, 40, 110);

    //restante do canvas que ficou em branco
    //pincel.fillStyle = 'blue';
    //pincel.fillRect(350, 0, 600, 400);
    //pincel.fillRect(0, 300, 350, 400);
