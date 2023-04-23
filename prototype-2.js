// DESAFIO: Cliente poupança
// Aproveitar o Cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança.

function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}

const julia = new ClientePoupanca(
  "Julia",
  "123456789",
  "julia@email.com",
  100,
  200
);

console.log(julia);

ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};

julia.depositarPoup(30);

console.log(julia.saldoPoup);
