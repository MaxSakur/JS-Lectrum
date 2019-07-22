/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
function f (elem) {
    let sum = 0;
    if ( typeof elem == 'number') {
        sum = elem ** 3
        console.log('sum----->', sum)
        return sum 
    } else {
        throw new Error ('parameter is not a number type')
    }
    
}


/* не удалять */
f(2); // 8
f('Content'); 
//
// export { f };
/* не удалять */
