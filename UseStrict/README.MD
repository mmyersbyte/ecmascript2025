<h1>"use strict" no JavaScript</h1>

<p><code>"use strict"</code> é uma diretiva literal (não uma função) introduzida no <strong>ECMAScript 5 (ES5)</strong> que ativa o <strong>modo estrito</strong> do JavaScript. Esse modo altera o comportamento padrão da linguagem, tornando o código mais seguro, previsível e menos propenso a erros silenciosos.</p>

<hr />

<h2>Benefícios</h2>

<ul>
  <li>Impede o uso de variáveis não declaradas.</li>
  <li>Evita nomes reservados como <code>implements</code>, <code>interface</code>, <code>let</code>, <code>package</code>, entre outros.</li>
  <li>Proíbe a exclusão de variáveis e funções declaradas com <code>var</code> e <code>function</code>.</li>
  <li>Transforma erros sutis em erros lançados de forma explícita.</li>
  <li>Ajuda na compatibilidade com versões futuras do ECMAScript.</li>
</ul>

<hr />

<h2>Como aplicar</h2>

<p>Você pode declarar o modo estrito de duas formas:</p>

<pre><code>// 1. No início de um arquivo
"use strict";

// 2. Dentro de uma função
function exemplo() {
  "use strict";
  // código aqui...
}
</code></pre>

<hr />

<h2>Observações</h2>

<ul>
  <li><code>"use strict"</code> não tem efeito retroativo. Ele afeta apenas o código abaixo da diretiva.</li>
  <li>Em arquivos ES6 Modules (com <code>type="module"</code>), o modo estrito já está ativado por padrão.</li>
</ul>

<hr />

<h2>Exemplos</h2>

<p>Confira exemplos de uso prático no arquivo <code>script.js</code> deste repositório.</p>
