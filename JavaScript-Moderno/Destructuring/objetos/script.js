const product = {
  nome: 'Laptop',
  valor: 7500,
};

const { nome, valor } = product;
console.log(nome);
console.log(valor);

// Diferente dos arrays, os objetos precisam que as chaves sejam iguais
function newProduct({ valor, nome }) {
  console.log('####Novo Produto####');
  console.log(`Nome: ${nome}`);
  console.log(`Valor: ${valor}`);
  console.log('####################');
}

newProduct({ nome: 'Smartphone', valor: 5500 });
