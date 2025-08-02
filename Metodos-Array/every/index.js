const idades = [15, 32, 33, 16, 40];

const resultTrue = idades.every((idade) => idade > 8); // Verifica se todas as idades são maiores que 8c

console.log(resultTrue);
// true, pois todas as idades são maiores que 8

const resultFalse = idades.every((idade) => idade > 18); // Verifica se todas as idades são maiores que 18

console.log(resultFalse);
// false, pois nem todas as idades são maiores que 18
