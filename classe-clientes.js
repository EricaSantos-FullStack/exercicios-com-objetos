//exemplo de classe

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

const andre = new Cliente("Andre", "andre@email.com", "123456789", 100);

andre.exibirSaldo();

andre.depositar(500);

andre.exibirSaldo();

// antes andré tinha 100 reais, mas agora ele tem 600;
