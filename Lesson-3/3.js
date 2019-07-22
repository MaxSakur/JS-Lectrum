/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входного параметра на тип number.
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение



function f(...args) {
    var sum = 0
    for ( let i = 0; i < args.length; i++) {
        if (typeof(args[i]) !== 'number') {
            throw new Error(`all parameters type should be a Number ARGUMENT № ${i} `)
        }
    }

    sum = (args[0]-args[1])/args[2]

    console.log('OPERATION SUM === > > >', sum)
}


/* не удалять */
f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number
// export { f };
/* не удалять */