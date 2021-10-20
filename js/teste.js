var Conta = require('./Conta.js');
var ContaAcoes = require('./ContaAcoes.js');

var ContaCorrente = require('./ContaCorrente.js');
var ContaPoupanca = require('./ContaPoupanca.js');

var Cliente = require('./Cliente.js')


const cc1 = new ContaCorrente(100, 56, 339, 10);
const cc2 = new ContaPoupanca(30, 89, 76, 40);

// cc1.deposito(49);
// console.log(cc1.retornarSaldo());
// console.log(cc2.retornarSaldo());

// cc1.transferencia(60, cc2);
// console.log(cc1.retornarSaldo());
// console.log(cc2.retornarSaldo());

var cc3 = {};

// cc3.conta1 = new ContaCorrente(100, 56, 339, 10);
// cc3.conta2 = new ContaPoupanca(30, 89, 76, 40);

// Instanciando Objetos
// cc3.conta1 = new Conta (100, 56, 339);
// cc3.conta2 = new ContaPoupanca(30, 89, 76, 40);
// cc3.conta3 = new ContaAcoes(30, 45, 89, 7);

// console.log(cc3);
// console.log(typeof cc3.conta2);
// console.log(cc3.conta3);

cliente1 = new Cliente ('Adelino', 12345678910, cc1);
console.log(cliente1)

cliente1.conta.deposito(50);
console.log(cliente1);

cliente1.atualizarHistorico('fez um deposito', 'dep', 5);
cliente1.atualizarHistorico('fez um saque', 'saque', 25);
cliente1.retornarHistorico();

