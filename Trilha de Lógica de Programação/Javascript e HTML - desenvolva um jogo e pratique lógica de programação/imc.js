function pulaLinha(){

	document.write("<br><br>");

}

function mostra(frase){

	document.write(frase);
	pulaLinha();

}

function calculaImc(altura, peso){

	var imc = peso / (altura * altura);
	return imc;
}

var nome = prompt("Informe o seu nome:");
var alturaInformada = prompt(nome + ", informe a sua altura:");
var pesoInformado = prompt(nome + ", informe o seu peso:");
var imc = calculaImc(alturaInformada, pesoInformado);
document.write(nome + ", a sua altura é " + alturaInformada + "m e o seu peso é " + pesoInformado + "Kg. Seu IMC é " + imc + "<br>");


if(imc < 18.5){
	mostra("Você está abaixo do recomendado");
} else if(imc > 35){
	mostra("Você está acima do recomendado");
} else{
	mostra("Você está dentro do recomendado");
}
