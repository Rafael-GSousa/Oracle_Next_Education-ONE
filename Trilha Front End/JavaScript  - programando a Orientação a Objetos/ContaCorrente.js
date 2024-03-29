import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;
        // proposta para atributos privados (ainda não é oficial)
    // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    // oficialmente deve ser colocado um underline antes do atributo para identificar que é privado(apesar de na prática não ficar privado)
    _saldo = 0;


//acessores - Getters e Setters
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }



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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        valor = 20;
    }
}