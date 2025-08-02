const words = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

const result = words.filter((word) => word.length > 4);
console.log(result);

const products = [
  { name: 'teclado', price: 100, promo: true },
  { name: 'mouse', price: 50, promo: false },
  { name: 'monitor', price: 300, promo: true },
  { name: 'impressora', price: 200, promo: false },
];

const productsPromo = products.filter((product) => product.promo == true);
console.log(productsPromo);
