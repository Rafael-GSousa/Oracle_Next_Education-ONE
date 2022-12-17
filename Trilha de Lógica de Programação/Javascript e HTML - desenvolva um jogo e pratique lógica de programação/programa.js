function pulaLinha(){

	document.write("<br>");
	document.write("<br>");

}

function mostra(msg){

	document.write(msg);
	pulaLinha();

}

//	document.write("Flávio nasceu em " + (2016 - 39));
mostra("Flávio nasceu em " + (2016 - 39));

//	document.write("Joaquim nasceu em " + (2016 - 20));
mostra("Joaquim nasceu em " + (2016 - 20));

//	document.write("Barney nasceu em " + (2016 - 40));
mostra("Barney nasceu em " + (2016 - 40));

var ano = 2016;
//	document.write("Flávio tem " + (ano - 1977) + " anos");
mostra("Flávio tem " + (ano - 1977) + " anos");

//	document.write("Joaquim tem " + (ano - 1996) + " anos");
mostra("Joaquim tem " + (ano - 1996) + " anos");

ano = 2017;
//	document.write("Barney tem " + (ano - 1976) + " anos");
mostra("Barney tem " + (ano - 1976) + " anos");

var idadeFlavio = 39;
var idadeJoaquim = 20;
var idadeBarney = 41;
var media = (idadeFlavio + idadeJoaquim + idadeBarney) / 3;
//	document.write("A média das idades é " + Math.round(media));
mostra("A média das idades é " + Math.round(media));

var nome = "Flávio"
//	document.write("A idade de " + nome + " é " + idadeFlavio);
mostra("A idade de " + nome + " é " + idadeFlavio);