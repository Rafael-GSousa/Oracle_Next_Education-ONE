import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
  
    static numeroDeContas = 0;

    constructor(saldoInicial, agencia, cliente){
        super(saldoInicial, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobrescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
