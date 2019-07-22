/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение
let arrayOf = [];

function getDivisors (number) {

    if(typeof number == 'number') {

        for (let i = 0; i <= number; i++){
            if (number % i == 0) {
                arrayOf.push(i);
            }
        }
    } else if (number == 0) {
        throw new Error('parameter type is not a Number')
    } else {
        throw new Error('parameter can\'t be a 0')
    }

    console.log(arrayOf)
}

/* не удалять */

getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

export { getDivisors };
/* не удалять */

