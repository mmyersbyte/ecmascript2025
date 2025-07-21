<h1>Spread Operator em JavaScript</h1>

<p>O <strong>Spread Operator</strong> (<code>...</code>) foi introduzido no ECMAScript 2015 (ES6) e permite "espalhar" elementos de arrays ou propriedades de objetos em outro array ou objeto.</p>

<p>É uma ferramenta útil para cópias rasas, concatenação, passagem de argumentos e manipulação de estruturas de dados imutáveis.</p>

<hr />

<h2>Array Spread</h2>

<h3>Copiando arrays:</h3>

<pre><code>const original = [1, 2, 3];
const copia = [...original];
// copia = [1, 2, 3]
</code></pre>

<h3>Concatenando arrays:</h3>

<pre><code>const a = [1, 2];
const b = [3, 4];
const resultado = [...a, ...b];
// resultado = [1, 2, 3, 4]
</code></pre>

<h3>Passando argumentos para funções:</h3>

<pre><code>function soma(x, y, z) {
  return x + y + z;
}

const numeros = [1, 2, 3];
soma(...numeros); // 6
</code></pre>

<hr />

<h2>Object Spread</h2>

<h3>Copiando objetos:</h3>

<pre><code>const original = { nome: "Maria", idade: 30 };
const copia = { ...original };
// copia = { nome: "Maria", idade: 30 }
</code></pre>

<h3>Mesclando objetos:</h3>

<pre><code>const endereco = { cidade: "Fortaleza", estado: "CE" };
const dados = { nome: "Pedro", ...endereco };
// dados = { nome: "Pedro", cidade: "Fortaleza", estado: "CE" }
</code></pre>

<h3>Sobrescrevendo propriedades:</h3>

<pre><code>const usuario = { nome: "João", ativo: true };
const atualizado = { ...usuario, ativo: false };
// atualizado = { nome: "João", ativo: false }
</code></pre>

<hr />

<h2>Diferença entre Spread e Rest</h2>

<ul>
  <li><strong>Spread:</strong> <em>espalha</em> valores de arrays ou objetos.</li>
  <li><strong>Rest:</strong> <em>coleta</em> múltiplos elementos em um array ou objeto.</li>
</ul>

<pre><code>// spread
const soma = (a, b, c) => a + b + c;
const valores = [1, 2, 3];
soma(...valores);

// rest
const agrupar = (...valores) => valores;
agrupar(1, 2, 3); // [1, 2, 3]
</code></pre>

<hr />

<h2>Exemplos</h2>

<p>Consulte o arquivo <code>script.js</code> para exemplos práticos do uso do operador spread com arrays, objetos e funções.</p>
