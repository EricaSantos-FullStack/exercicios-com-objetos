// retorne os produtos da categoria "Eletronico"

const produtos = [
  { id: 1, descricao: "Smartphone", categoria: "Eletrônico" },
  { id: 2, descricao: "Notebook", categoria: "Eletrônico" },
  { id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico" },
  { id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico" },
  { id: 5, descricao: "Fogão", categoria: "Eletrodoméstico" },
];

const retornaEletronico = produtos.filter(
  (value) => value.categoria === "Eletrônico"
);

console.log(retornaEletronico);
