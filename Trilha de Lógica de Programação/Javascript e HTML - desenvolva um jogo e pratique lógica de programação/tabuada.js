function pulaLinha(){

    document.write("<br><br>");

}

function mostra(frase){

    document.write(frase);
    pulaLinha();

}

var numero = parseInt(prompt("De qual número você quer ver a tabuada?"));
for(var multiplicador = 1; multiplicador <= 10; multiplicador++){
    mostra(numero + " x " + multiplicador + " = " + (numero * multiplicador));
}

mostra("FIM");