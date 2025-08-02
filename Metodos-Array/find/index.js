const values = [5, 12, 8, 130, 44];

const found = values.find((values) => values > 10);

console.log(found);

// objs

const frutas = [
  { name: 'apples', quantity: 23 },
  { name: 'oranges', quantity: 12 },
  { name: 'bananas', quantity: 0 },
  { name: 'pears', quantity: 5 },
];

const result = frutas.find((fruta) => fruta.quantity === 0);
console.log(result);
