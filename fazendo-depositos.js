// DESAFIO: Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancarias

const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12457823",
  email: "andre@andre.com",
  fones: ["111112222", "11115111", "11118111"],
  dependentes: [
    { nome: "João", parentesco: "filho", dataNasc: "20/03/2011" },
    { nome: "Enzo", parentesco: "filho", dataNasc: "18/01/2013" },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
