//DESAFIO: Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco.

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

let relatorio = "";

for (let info in cliente) {
  if (
    typeof cliente[info] === "object" ||
    typeof cliente[info] === "function"
  ) {
    continue;
  } else {
    relatorio += `
    ${info} ==> ${cliente[info]}`;
  }
}

console.log(relatorio);
