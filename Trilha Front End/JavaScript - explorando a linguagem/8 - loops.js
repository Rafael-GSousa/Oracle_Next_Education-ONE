console.log('\nTrabalhando com condicionais');

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);



const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log('\nDestinos possíveis:');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let cont = 0;
let destinoExiste = false;
while (cont < listaDeDestinos.length) {
  if(listaDeDestinos[cont] == destino){
    destinoExiste = true;
    break;
  }
  cont++;  
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
  console.log("Boa viagem!");
}else{
  console.log("Desculpe! Tivemos um erro.");
}

for(let contador = 0; contador <= listaDeDestinos.length; contador++){
  if(listaDeDestinos[contador] == destino){
    destinoExiste = true;
    break;
  }
}