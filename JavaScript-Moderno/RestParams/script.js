function values(a, ...rest) {
  console.log(a); //exibe o primeiro argumento

  console.log(...rest); //exibe os argumentos restantes já desestruturados

  //exibe o array rest
  console.log(rest);
}

values(2, 1, 6, 4);
