/**
 * Задача 5.
 *
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
 * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
 * Создайте для этого вспомогательную функцию `isPositive(-3)`,
 * которая параметром будет принимать число и возвращать true,
 * если число положительное, и false — если отрицательное.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 */

const array = [1, 2, -4, 3, -9, -1, 7];

// Решение
function isNumber(number) {
    return number ? typeof (number) == 'number' : console.log('введенное значение не число')
}

function isPositive(arr) {
    var newArr = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length ; i++ ) {
            if (isNumber(arr[i]) && arr[i] > 0) {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr)
    } else {
        console.log('НЕ МАССИВ')
    }


}
/* не удалять */
isPositive(-3); // false
isPositive(3); // true
isPositive('s'); // Error: parameter type is not a Number

// export { isPositive };
/* не удалять */
