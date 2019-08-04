/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение

function checkNumber(elem) {
    return typeof (elem) === 'number' ? true : false
}

function every(trueArr, trueFunc) {
    if (Array.isArray(trueArr) && typeof trueFunc === 'function') {
        for (let i = 0; i < trueArr.length; i++) {
            if (!trueFunc(trueArr[i])) {
                throw new Error('SHIT')
            } else {
                return true
            }
        }
    }
}


every(array, checkNumber)
exports.every = every;