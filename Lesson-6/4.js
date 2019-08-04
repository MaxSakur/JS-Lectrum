/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение

function checkNumber(elem) {
    return typeof (elem) === 'number' ? true : false
}

function some(trueArr, trueFunc) {
    if (Array.isArray(trueArr) && typeof trueFunc === 'function' && arguments.length == 2) {
        for (let i = 0; i < trueArr.length; i++) {
            if (trueFunc(trueArr[i])) {
                return true
            } else {
                return false
            }
        }
    } else {
        throw new Error ('Условия не были выполнены')
    }
}


some(array, checkNumber)

exports.some = some;
