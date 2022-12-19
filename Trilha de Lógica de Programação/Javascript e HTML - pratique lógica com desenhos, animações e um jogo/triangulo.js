var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//triângulo externo
pincel.fillStyle = 'black'; //definindo a cor
pincel.beginPath(); //inicializando o pincel
pincel.moveTo(50, 50); //definindo o ponto de partida da linha
pincel.lineTo(50, 400); //criando a linha vertical
pincel.lineTo(400, 400); //criando a linha horizontal ... A linha diagonal é criada automaticamente a partir das linhas vertical e horizontal
pincel.fill(); //preenchendo o triângulo com a cor

//triângulo interno
pincel.fillStyle = 'white'; //definindo a cor
pincel.beginPath(); //inicializando o pincel
pincel.moveTo(100, 175); //definindo o ponto de partida da linha
pincel.lineTo(100, 350); //criando a linha vertical
pincel.lineTo(275, 350); //criando a linha horizontal ... A linha diagonal é criada automaticamente a partir das linhas vertical e horizontal
pincel.fill(); //preenchendo o triângulo com a cor
