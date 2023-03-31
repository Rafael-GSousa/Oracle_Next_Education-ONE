// criando uma classe de molde com suas propriedades
class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    // método sacar foi adicionado dentro da classe ContaCorrente
    // o "this" define que a conta corrente a ser tratada é a que estiver em uso  no momento 
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log('Você retirou R$ ' + valor);
        }else{
            console.log('Valor solicitado é maior que o disponível. Saque não processado!');
        }
    }
}

// instanciando a classe (criando objetos)
// atribuindo valores para cada atributo do objeto
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);


const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.saldo = 0;
contaCorrenteAlice.agencia = 1001;

// imprimindo os objetos com seus atributos no PowerShell utilizando NodeJS
console.log(cliente1);
console.log(cliente2);