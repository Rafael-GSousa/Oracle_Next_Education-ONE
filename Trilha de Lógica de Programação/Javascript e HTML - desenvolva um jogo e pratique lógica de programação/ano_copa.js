function pulaLinha(){

    document.write("<br><br>");

}

function mostra(frase){

    document.write(frase);
    pulaLinha();

}

var anoCopa = 1930;



while (anoCopa <= 2022){

    mostra("Teve copa em " + anoCopa);

    anoCopa += 4;

}