const arr = [1, 2, 3, 4, 5];

const novo = arr.map((item) => {
  return item;
});

console.log(novo);

const products = ['teclado', 'mouse', 'monitor', 'impressora'];

products.map((item, index) => {
  console.log(index, item);
});
