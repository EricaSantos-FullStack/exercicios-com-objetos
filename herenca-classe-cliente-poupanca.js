//DESAFIO Cliente poupança
// use a classe Cliente e crie apartir dela um novo tipo de cliente para contas poupanças

class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }
  // metodos (ações que o cliente pode realizar)
  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(this.saldo);
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }

  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
}

const andre = new ClientePoupanca(
  "Andre",
  "andre@email.com",
  "12345678",
  100,
  200
);

console.log(andre);

andre.depositar(50);
andre.depositarPoupanca(50);

console.log(andre);
