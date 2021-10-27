var cliente = require('./Cliente.js')

module.exports = class Banco {
    constructor (clientes) {
        this.clientes = clientes[cliente]
    }

    cadastrarCliente(nome, cpf,conta, historico) {
        return this.Clientes(nome, cpf, conta, historico)
    }

    buscaCliente() {
        this.clientes.forEach(this.cliente);
    }
}