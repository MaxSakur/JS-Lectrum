/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

function change (elem, reducer){
    let total = 0+reducer;
    for (let n in elem) {
        total += elem[n];
    }
    console.log(total)
    return  total;
}

function reduce(trueArr, trueFunc, accum) {
    let finalResult = 0;
    if (Array.isArray(trueArr) && typeof trueFunc === 'function' && arguments.length == 3) {
        return finalResult = trueFunc(trueArr)
    }
}


reduce(array, change(array, INITIAL_ACCUMULATOR), INITIAL_ACCUMULATOR)

exports.reduce = reduce;