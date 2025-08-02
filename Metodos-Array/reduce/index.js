/** O método reduce é utilizado para reduzir um array a um único valor.
 *
 * Parâmetros:
 * - Array Original (values)
 * - Acumulator (acc ou accumulator)
 * - Valor da iteração atual (currentValue)
 * - Valor Inicial (0)
 * - Index (index da iteração atual - opcional)
 *
 */

const values = [1, 2, 3, 4, 5];

const sum = values.reduce((accumulador, currentValue, index) => {
  console.log(accumulador);
  console.log(currentValue);
  console.log(index);
  console.log('SOMA:', accumulador + currentValue);
  console.log('---');
  return accumulador + currentValue;
}, 0);
