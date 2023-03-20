console.log('Atribuição de Variáveis');

const idade = 29;
let primeiroNome = 'Ricardo';
const sobrenome = 'Bugan';

console.log(primeiroNome + ' ' + sobrenome);
console.log(primeiroNome, sobrenome); //vírgula também funciona como espaço

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); /*usar crase (não é aspas simples) para declarar string e já colocando a 
variável dentro de chaves e um cifrão antes */

let contador = 0;
contador = contador + 1; //ou contador += 1 ou contador ++

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);
