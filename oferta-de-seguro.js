//DESAFIO: Percorrer um objeto, verificar se existe a chave `dependentes` e. caso exista, enviar uma mensagem de oferta de seguro.

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

//forma 1

// function oferecerSeguro(obj) {
//   const propsClientes = Object.keys(obj);

//   if (propsClientes.includes("dependentes")) {
//     console.log(`Oferta de seguro de vida para ${obj.nome}`);
//   }
// }

//Com a minha lógica
function oferecerSeguro() {
  if (cliente.dependentes !== null) {
    console.log(`Oferta de seguro de vida para ${cliente.nome}`);
  }
}

oferecerSeguro();

//outros exemplos:
// console.log(Object.values(cliente));
// console.log(Object.entries(cliente));
