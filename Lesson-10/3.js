/**
 * Задача 3.
 *
 * Улучшите имплементацию функции calculate() и назовите её calculateAdvanced().
 * Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.
 *
 * После отлова ошибки перейдите к выполнению следующего коллбека.
 *
 * Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами: `value` и `errors`:
 * - свойство `value` содержит результат вычисления всех функций из цепочки;
 * - свойство `errors` содержит массив с объектами, где каждый объект должен обладать следующими свойствами:
 *     - index — индекс коллбека, на котором ошибка была возбуждена;
 *     - name — имя ошибки;
 *     - message — сообщение ошибки.
 *
 * Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.
 *
 * Поэтому, для продолжения цепочки выполнения
 * необходимо брать результат последней успешно выполненной функции-коллбека.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией.
 */

// Решение

const calculateAdvanced =(...functions) => {

  let errors = [];

  const value = functions.reduce((acc, func, index) => {

    try {
      const result = func(acc);
      if(!result){
        throw new Error(`callback at index ${index} did not return any value.`)
      }
      return result;
    } catch(error){
      errors = [...errors, {index, name: error.name, message: error.message}]
      return acc;
    }
  }, 0)

  return {
    value,
    errors
  }
}


const result = calculateAdvanced(
    () => {},
    () => {
      return 7;
    },
    () => {},
    prevResult => {
      return prevResult + 4;
    },
    () => {
      throw new RangeError('Range is too big.');
    },
    prevResult => {
      return prevResult + 1;
    },
    () => {
      throw new ReferenceError('ID is not defined.');
    },
    prevResult => {
      return prevResult * 5;
    },
);




console.log(result);


exports.calculateAdvanced = calculateAdvanced;
