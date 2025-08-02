const data = ['Pedro Victor', 'pedrovictor@email.com'];

// Destruturando o array
const [nome, email] = data;
console.log(`Nome: ${nome}`);
console.log(`Email: ${email}`);

const frutas = ['Morango', 'Abacaxi', 'Manga'];

// Desestruturar somente o primeiro elemento

const [primeiraFruta] = frutas;
console.log(`Primeira fruta: ${primeiraFruta}`);

// Ignorando o primeiro elemento e pegando o segundo

const [, segundaFruta] = frutas; // Uso , para ignorar
console.log(`Segunda fruta: ${segundaFruta}`);

// Ignorando o primeiro e o segundo elemento e pegando o terceiro

const [, , terceiraFruta] = frutas;
console.log(`Terceira fruta: ${terceiraFruta}`);
