var conta = require('./Conta.js');

module.exports = class ContaCorrente extends conta {
    constructor (saldo, agencia, numConta, taxaAdm) {
        super(saldo, agencia, numConta); // herança da super classe - classe pai
        this.taxaAdm = taxaAdm;
    }

    retornarSaldo() {
        return super.retornarSaldo() - this.taxaAdm;
    }
}

