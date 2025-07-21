// 'use strict';

function showMessage() {
  //   'use strict';
  let personName = 'Pedro Victor';
  console.log(
    'Olá, ' +
      personName +
      ' Com o Use Strict a função não reconhece a variável personName.'
  );
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let student = new Student();
// student.point = 10;
// Tentando atribuir um valor a uma propriedade somente leitura
console.log(student.point);

delete window.document;
// Tentando deletar uma propriedade de um objeto global
// Isso não funcionará em modo estrito, pois propriedades de objetos globais não podem ser

function soma(a, a, b) {
  return a + a + b;
  // Parâmetros duplicados não são permitidos no modo estrito
}

console.log(soma(1, 5, 5)); // Saida 15 sem o use strict, pois a função soma considera o segundo parâmetro como o primeiro
