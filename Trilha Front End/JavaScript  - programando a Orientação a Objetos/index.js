import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
// instanciando a classe (criando objetos)
// atribuindo valores para cada atributo do objeto
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

// const cliente2 = new Cliente();
// cliente2.nome = 'Alice';
// cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(-100);
// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(valorSacado);
// console.log(contaCorrenteRicardo);

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = 'Alice';
conta2.cliente.cpf = 88822233309;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log('valor: ', valor);
console.log(conta2);

// const contaCorrenteAlice = new ContaCorrente();
// contaCorrenteAlice.saldo = 0;
// contaCorrenteAlice.agencia = 1001;

// imprimindo os objetos com seus atributos no PowerShell utilizando NodeJS
// console.log(cliente1);
// console.log(cliente2);