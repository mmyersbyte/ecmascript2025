const numbers = [1, 2, 3];
console.log(numbers);

// Spread
console.log(...numbers); // Expande o array

// Spread com objetos
const data = [
  {
    nome: 'Pedro Victor',
    email: 'pedro@gmail.com',
    avatar: 'p.png',
  },
  {
    nome: 'Maria Silva',
    email: 'maria@gmail.com',
    avatar: 'm.png',
  },
];
console.log(data);
console.log(...data); // Expande o array de objetos
