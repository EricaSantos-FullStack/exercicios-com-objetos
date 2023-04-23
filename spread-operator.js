//DESAFIO: Lista de dependentes
// Extrair de uma listagem de clientes apenas as informações de dependentes e monstar uma lista única, para análise de outros departamentos.

const clientes = [
  {
    nome: "Andre",
    cpf: "12457823",
    dependentes: [
      {
        nome: "João",
        parentesco: "filho",
        dataNasc: "20/03/2011",
      },
      {
        nome: "Enzo",
        parentesco: "filho",
        dataNasc: "18/01/2013",
      },
    ],
  },
  {
    nome: "Juliana",
    cpf: "12457553",
    dependentes: [
      {
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "20/03/2011",
      },
    ],
  },
];

const listaDeDependentes = [
  ...clientes[0].dependentes,
  ...clientes[1].dependentes,
];

console.table(listaDeDependentes);
