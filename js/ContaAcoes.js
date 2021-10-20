var conta = require('./Conta.js');

module.exports = class ContaAcoes extends conta {
    constructor (saldo, agencia, numConta, rendAcoes, taxa) {
        super(saldo, agencia, numConta, rendAcoes); // herança da super classe - classe pai
        this.taxa = 3;
        this.rendAcoes =  this.taxa * this.saldo;
    }

    retornarSaldo() {
        return super.retornarSaldo() + this.rendAcoes;
    }

    rendAcoes() {
        return this.taxa * this.saldo;
    }
}

