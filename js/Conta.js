module.exports =  class Conta {
    constructor (saldo, agencia, numConta) {
        this.saldo = saldo;
        this.agencia = agencia;
        this.numConta = numConta;
    }

    saque(valorSaque) {
        if(this.saldo >= valorSaque) {
            this.saldo -= valorSaque; // Atulização do Saldo
        } else {
            console.log('SALDO INSUFICIENTE')
        }
    }

    deposito(valorDep) {
        this.saldo += valorDep; // Atualização do Saldo
    }

    transferencia(valorTrans, contaDep) {
        this.saque(valorTrans);
        contaDep.deposito(valorTrans);
    }

    retornarSaldo() {
        return this.saldo;
    }
}

