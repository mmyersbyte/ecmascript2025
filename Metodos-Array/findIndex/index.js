const valores = [5, 12, 8, 130, 44];

// Encontrar o índice do primeiro elemento maior que 10
const index = valores.findIndex((valor) => valor > 10);

console.log(index); // Retorna 1, pois o primeiro valor maior que 10 está no índice 1 (12)

// Extra com array de objetos
const frutas = [
  { name: 'maçãs', quantity: 23 },
  { name: 'laranjas', quantity: 12 },
  { name: 'bananas', quantity: 0 },
  { name: 'peras', quantity: 5 },
];

// Encontrar o índice da primeira fruta com quantidade igual a 0
const indexFruta = frutas.findIndex((fruta) => fruta.quantity === 0);

console.log(indexFruta); // Retorna 2, pois a primeira fruta com quantidade 0 está no índice 2 (bananas)

// RETORNO -1 EXEMPLO
const numeros = [1, 2, 3, 4, 5];
const indexInexistente = numeros.findIndex((num) => num > 10);
console.log(indexInexistente); // Retorna -1, pois não há nenhum número maior que 10 no array
