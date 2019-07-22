/**
* Задача 1.
*
* Напишите функцию upperCaseFirst(string).
* Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
*
* Условия:
* - Функция принимает один параметр;
* - Функция содержит валидацию входного параметра на тип string.
*/

// Решение

function upperCaseFirst (customString) {
    typeof customString == 'string' ? console.log(customString.charAt(0).toUpperCase() + customString.substring(1, customString.length)) : console.log('Its not a string') 
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;