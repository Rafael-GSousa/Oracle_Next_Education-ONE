function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function pontos(vitorias, empates){
    return vitorias * 3 + empates;
}

// o retorno do prompt sempre será string por isso deve usar parseInt
var vitorias = parseInt(prompt("Entre com o número de vitórias:")); 
var empates = parseInt(prompt("Entre com o número de empates:"));
var pontos = pontos(vitorias, empates);
// var derrotas = prompt("Entre com o número de derrotas:");
mostra("Os pontos do seu time são " + pontos);

if (pontos > 28) {
    mostra("Seu time está melhor do que o ano passado");
} else if (pontos < 28) {
    mostra("Seu time está pior do que o ano passado");        
} else{
    mostra("Seu time está igual ao ano passado");
}