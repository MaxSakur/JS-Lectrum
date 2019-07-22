/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
function f(...args) {
    function isNumber(item) {
        return item ? typeof(item) === 'number' : null
    }
    
    if (!args.every(isNumber)) {
        throw new Error('all parameters should be a Number type')
    } else {
        console.log('RESULT ==== ', args.reduce(function (acum, nextValue) {
            return acum + nextValue;
        }));
    }
}


/* не удалять */
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

export { f };
/* не удалять */
