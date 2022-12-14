var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//retângulo
pincel.fillStyle = 'green';
pincel.fillRect(0, 0, 600, 400);

//losango. Foi usado apenas 1 beginPath() e 1 fill()
pincel.fillStyle = 'yellow';
pincel.beginPath();
//metade de cima do losango (de cabeça para cima)
pincel.moveTo(300, 50);
pincel.lineTo(50, 200);
pincel.lineTo(550, 200);
//metade de baixo do losango (de cabeça para baixo)
pincel.moveTo(300, 350);
pincel.lineTo(50, 200);
pincel.lineTo(550, 200);
pincel.fill();

//círculo do centro da bandeira
pincel.fillStyle = 'darkblue';
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2 * 3.14);
pincel.fill();
