const values = [5, 12, 8, 130, 44];

const found = values.find((values) => values > 10); // Encontra o primeiro valor maior que 10

console.log(found); // Retorna 12, porque é o primeiro valor que atende à condição

//Extra com array de objetos

const frutas = [
  { name: 'apples', quantity: 23 },
  { name: 'oranges', quantity: 12 },
  { name: 'bananas', quantity: 0 },
  { name: 'pears', quantity: 5 },
];

const result = frutas.find((fruta) => fruta.quantity === 0);
// Encontra a primeira fruta com quantidade igual a 0

console.log(result); // retorna o objeto { name: 'bananas', quantity: 0 }
