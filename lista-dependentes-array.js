// inclua mais um dependente a lista com array

const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12457823",
  email: "andre@andre.com",
  fones: ["111112222", "11115111", "11118111"],
  dependentes: [{ nome: "João", parentesco: "filho", dataNasc: "20/03/2011" }],
};

cliente.dependentes.push({
  nome: "Enzo",
  parentesco: "filho",
  dataNasc: "18/01/2013",
});

console.log(cliente);
