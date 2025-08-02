<h1>Rest Parameters em JavaScript</h1>

<p><strong>Rest Parameters</strong> (ou "parâmetros rest") foram introduzidos no ECMAScript 2015 (ES6) e permitem representar um número indefinido de argumentos como um array.</p>

<p>É útil quando não se sabe quantos argumentos serão passados para uma função ou ao extrair partes de arrays e objetos usando destructuring.</p>

<hr />

<h2>Sintaxe</h2>

<p>Usa-se o operador <code>...</code> seguido de um nome de variável para coletar os valores restantes:</p>

<pre><code>function soma(...numeros) {
  return numeros.reduce((acc, val) => acc + val, 0);
}

soma(1, 2, 3); // 6
soma(5, 10);   // 15
</code></pre>

<hr />

<h2>Regras</h2>

<ul>
  <li>Somente um parâmetro rest por função.</li>
  <li>Deve ser o <strong>último</strong> parâmetro na definição da função.</li>
  <li>O valor de um parâmetro rest é sempre um <strong>array</strong>.</li>
</ul>

<hr />

<h2>Rest em Destructuring</h2>

<h3>Array:</h3>

<pre><code>const [primeiro, ...resto] = [1, 2, 3, 4];
// primeiro = 1, resto = [2, 3, 4]
</code></pre>

<h3>Objeto:</h3>

<pre><code>const usuario = { id: 1, nome: "Pedro", idade: 23 };
const { id, ...dados } = usuario;
// id = 1, dados = { nome: "Pedro", idade: 23 }
</code></pre>

<hr />

<h2>Diferença entre Rest e Arguments</h2>

<ul>
  <li><code>arguments</code> é um objeto array-like disponível em funções <strong>não arrow</strong>.</li>
  <li><code>...rest</code> é um <strong>array real</strong>, funciona também com arrow functions.</li>
</ul>

<pre><code>// com arguments
function exemplo1() {
  console.log(arguments);
}

// com rest
const exemplo2 = (...args) => {
  console.log(args);
};
</code></pre>

<hr />

<h2>Exemplos</h2>

<p>Consulte o arquivo <code>script.js</code> para exemplos práticos do uso de Rest Parameters em funções, arrays e objetos.</p>
