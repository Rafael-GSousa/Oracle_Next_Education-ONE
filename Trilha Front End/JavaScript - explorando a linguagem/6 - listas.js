console.log('Trabalhando com listas');
/*const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(salvador, saoPaulo, rioDeJaneiro);*/


const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Curitiba`); //insere um elemento na lista
console.log('Destinos possíveis:');
console.log(listaDeDestinos);
listaDeDestinos.sort(); /*ordena a lista*/
console.log(listaDeDestinos);
listaDeDestinos.splice(1, 1); /*remove um elemento em qualquer posição da lista (pode remover 
mais de um elemento utilizando o segundo parâmetro)*/
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); // imprime no console o elemento na posição indicada