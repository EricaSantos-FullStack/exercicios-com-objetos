const colecionador = {
  nome: "João do Gibi",
  idade: 41,
  tipocolecao: ["quadrinhos"],
  contato: "joao@email.com",
  adicionarTipo: function (propriedade, tipo) {
    this[propriedade].push(tipo);
  },
};

for (i = 0; i < 4; i++) {
  colecionador.adicionarTipo("tipocolecao", "HQ" + i);
}

console.log(colecionador);

//Usando uma estrutura for conseguimos manipular a propriedade tipocolecao do objeto colecionador, por meio da função adicionarTipo(). Usamos a notação de colchetes junto à palavra reservada this, que faz referência ao próprio objeto. Desse modo, fazemos uso do objeto como um array associativo.
