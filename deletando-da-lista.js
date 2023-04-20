// DESAFIO: Delete uma chave e seu valor

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
};

delete objPersonagem.aliado;

console.log(objPersonagem);

// O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto.
// O operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, retornará false se tentarmos fazer isso.
