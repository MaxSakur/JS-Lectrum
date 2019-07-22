/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение
const result = function forEach(newArray, callback) {
    if (Array.isArray(newArray)) {
        for (let i = 0; i < array.length; i++) {
          if (typeof callback === "function") {
            callback(array[i], i, array);
          }
        }
        return newArray;
      }
    
      return console.error("argument is not array");
};


result(array, (item, index, arrayRef) => console.log(item, index, arrayRef)); // undefined

exports.forEach = forEach;
