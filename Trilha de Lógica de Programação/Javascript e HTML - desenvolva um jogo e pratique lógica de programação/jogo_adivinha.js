function pulaLinha(){

    document.write("<br><br>");

}

function mostra(frase){

    document.write(frase);
    pulaLinha();

}


var numeroPensado = Math.round(Math.random() * 10);
var tentativa = 1;

while(tentativa <= 3){
    var chute = parseInt(prompt("Digite seu chute!"));	

    if(chute == numeroPensado) {
        mostra("Você acertou!");
        break;
    } else {
        mostra("Você errou!");
    }
    tentativa++;
}