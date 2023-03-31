// criando uma classe de molde com suas propriedades
class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    // proposta para atributos privados (ainda não é oficial)
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    // oficialmente deve ser colocado um underline antes do atributo para identificar que é privado(apesar de na prática não ficar privado)
    _saldo = 0;

    // método sacar foi adicionado dentro da classe ContaCorrente
    // o "this" define que a conta corrente a ser tratada é a que estiver em uso  no momento 
    sacar(valor) {
// método com retorno
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log('Você retirou R$ ' + valor);
            return valor;
        } else {
            console.log('Valor solicitado é maior que o disponível. Saque não processado!');
        }

    }

    depositar(valor) {
        // early return
        if (valor <= 0) {
            console.log('Não é possível depositar valor negativo ou igual a zero.');
            return;
        }
        this._saldo += valor;
        console.log('Você depositou R$' + valor);

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
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(-100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

// const contaCorrenteAlice = new ContaCorrente();
// contaCorrenteAlice.saldo = 0;
// contaCorrenteAlice.agencia = 1001;

// imprimindo os objetos com seus atributos no PowerShell utilizando NodeJS
// console.log(cliente1);
// console.log(cliente2);