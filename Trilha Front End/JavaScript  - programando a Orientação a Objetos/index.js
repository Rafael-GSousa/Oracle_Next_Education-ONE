import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
// instanciando a classe (criando objetos)
// atribuindo valores para cada atributo do objeto
const cliente1 = new Cliente('Ricardo', 11122233309);
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(-100);
// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(valorSacado);
// console.log(contaCorrenteRicardo);

const cliente2 = new Cliente('Alice', 88822233309);
const conta2 = new ContaCorrente(cliente2, 102);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);

// const contaCorrenteAlice = new ContaCorrente();
// contaCorrenteAlice.saldo = 0;
// contaCorrenteAlice.agencia = 1001;

// imprimindo os objetos com seus atributos no PowerShell utilizando NodeJS
// console.log(cliente1);
// console.log(cliente2);