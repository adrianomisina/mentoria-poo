var conta = require('./Conta.js');

module.exports = class ContaPoupanca extends conta {
    constructor (saldo, agencia, numConta, taxaRend) {
        super(saldo, agencia, numConta); // herança da super classe - classe pai
        this.taxaRend =  taxaRend;
    }

    retornarSaldo() {
        return super.retornarSaldo() + this.taxaRend;
    }
}

