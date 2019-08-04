/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function checkString(elem) {
   typeof(elem) === 'string' ? console.log('elem-->',elem) : false
}

function filter (trueArr, trueFunc) {
    if(Array.isArray(trueArr) && typeof trueFunc === 'function') {
        for( let i = 0; i <= trueArr.length; i++) {
            trueFunc(trueArr[i])
        }
    }
}


filter(array,  checkString)

exports.filter = filter;
