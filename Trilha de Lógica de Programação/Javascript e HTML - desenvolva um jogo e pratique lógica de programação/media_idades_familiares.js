function pulaLinha(){

    document.write("<br><br>");

}

function mostra(frase){

    document.write(frase);
    pulaLinha();

}

var totalFamiliares = parseInt(prompt("Quantidade de familiares:"));
var idade = 0;
var soma = 0;

for(var multiplicador = 1; multiplicador <= totalFamiliares; multiplicador++){
    idade = parseInt(prompt("Qual a idade do familiar?"));
    soma += idade;
}

var media = soma / totalFamiliares;
mostra(media);