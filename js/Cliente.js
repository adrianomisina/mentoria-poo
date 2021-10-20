var historico = require('./historico.js')

module.exports = class Cliente {
    constructor(nome, cpf, conta) {
        this.nome = nome;
        this.cpf =  cpf;
        this.conta = conta;
        this.historico = [];
    }
    
    elementosArray(e) {
        console.log(e)
    }

    retornarHistorico() {
        this.historico.forEach(this.elementosArray);
    }

    atualizarHistorico(descricao, acao, valorAcao) {
        this.historico.push(new historico(descricao, acao, valorAcao))
    }
}