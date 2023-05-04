import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
  
    static numeroDeContas = 0;

    constructor(saldoInicial, agencia, cliente){
        super(saldoInicial, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }


}
