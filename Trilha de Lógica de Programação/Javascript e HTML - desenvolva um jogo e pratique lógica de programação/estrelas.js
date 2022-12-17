function pulaLinha(){

    document.write("<br><br>");

}

function mostra(frase){

    document.write(frase);

}

for(var i = 1; i <= 3; i++){
    for(var j = 1; j <= 10; j++){
        mostra("*");
    }
    pulaLinha();
}