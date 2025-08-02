<h1>Destructuring Assignment em JavaScript</h1>

<p><strong>Destructuring Assignment</strong> é um recurso introduzido no ECMAScript 2015 (ES6) que permite extrair dados de arrays ou objetos e atribuí-los a variáveis de forma concisa e legível.</p>

<hr />

<h2>Array Destructuring</h2>

<p>Permite extrair elementos de um array com base na posição:</p>

<pre><code>const numeros = [10, 20, 30];
const [a, b, c] = numeros;
// a = 10, b = 20, c = 30
</code></pre>

<p>Pular elementos:</p>

<pre><code>const [primeiro, , terceiro] = numeros;
// primeiro = 10, terceiro = 30
</code></pre>

<p>Usar valor padrão:</p>

<pre><code>const [x, y, z = 100] = [1, 2];
// x = 1, y = 2, z = 100
</code></pre>

<hr />

<h2>Object Destructuring</h2>

<p>Permite extrair propriedades de objetos com base no nome da chave:</p>

<pre><code>const pessoa = { nome: "Ana", idade: 25 };
const { nome, idade } = pessoa;
// nome = "Ana", idade = 25
</code></pre>

<p>Renomear variáveis:</p>

<pre><code>const { nome: nomeCompleto } = pessoa;
// nomeCompleto = "Ana"
</code></pre>

<p>Usar valor padrão:</p>

<pre><code>const { sobrenome = "Silva" } = pessoa;
// sobrenome = "Silva"
</code></pre>

<hr />

<h2>Destructuring em parâmetros de função</h2>

<pre><code>function exibir({ nome, idade }) {
  console.log(nome, idade);
}

const usuario = { nome: "João", idade: 30 };
exibir(usuario);
// Saída: João 30
</code></pre>

<hr />

<h2>Aplicações comuns</h2>

<ul>
  <li>Extração rápida de dados em funções e componentes (especialmente em React).</li>
  <li>Trabalho com APIs e dados JSON.</li>
  <li>Simplificação de código ao manipular arrays e objetos.</li>
</ul>

<hr />

<h2>Exemplos</h2>

<p>Consulte o arquivo <code>script.js</code> para exemplos práticos de destructuring em arrays e objetos.</p>
