// inclua uma nova chave no objeto cliente

const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12457823",
  email: "andre@andre.com",
  fones: ["111112222", "11115111", "11118111"],
};

// adicionando um dependente ao cliente Andre

cliente.dependente = {
  nome: "Joaquim",
  parentesco: "filho",
  dataNasc: "20/03/2011",
};

console.log(cliente);

//alterando o nome do filho

cliente.dependente.nome = "João";

console.log(cliente);
