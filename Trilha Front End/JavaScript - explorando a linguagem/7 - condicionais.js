console.log('Trabalhando com condicionais');

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);



let idade = 15;
let estaAcompanhada = false;
let temPassagemComprada = true;
console.log('Destinos possíveis:');
console.log(listaDeDestinos);



// if (idade >= 18) {
//     console.log(`Comprador maior de idade!`);
//     listaDeDestinos.splice(1, 1); /*remove um elemento em qualquer posição da lista (pode remover 
//         mais de um elemento utilizando o segundo parâmetro que é a quantidade de itens)*/
// } else if (estaAcompanhada) {
//     console.log(`Comprador menor de idade, mas está acompanhado!`);
//     listaDeDestinos.splice(1, 1); /*remove um elemento em qualquer posição da lista (pode remover 
//             mais de um elemento utilizando o segundo parâmetro que é a quantidade de itens)*/
// } else {
//     console.log(`Comprador menor de idade e desacompanhado!`);
// }


if (idade >= 18 || estaAcompanhada) {
    console.log(`Boa viagem!`);
    listaDeDestinos.splice(2, 1); /*remove um elemento em qualquer posição da lista (pode remover 
        mais de um elemento utilizando o segundo parâmetro que é a quantidade de itens)*/
} else {
    console.log(`Comprador menor de idade e desacompanhado. Não vender!`);
}

console.log("Embarque:");
if (idade >= 18 && temPassagemComprada) {
    console.log(`Boa viagem!`);
} else {
    console.log(`Você não pode embarcar!`);
}

console.log(listaDeDestinos);
