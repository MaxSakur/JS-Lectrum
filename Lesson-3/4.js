/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение
function f(number) {
    if (typeof (number) !== 'number') {
        throw new Error('One of arguments is not a number')
    } else {
        switch (number) {
            case 1:
                console.log('Monday')
                break
            case 2:
                console.log('Tuesday')
                break
            case 3:
                console.log('Wednesday')
                break
            case 4:
                console.log('Thursday')
                break
            case 5:
                console.log('Friday')
                break
            case 6:
                console.log('Saturday')
                break
            case 7:
                console.log('Sunday')
                break
            default:
                console.log('Not a correct value')
        }
    }

}

/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

// export { f };
/* не удалять */