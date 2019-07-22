/**
* Задача 7.
*
* Дан массив с числами `[1, 2, 3]`.
* Создайте функцию `f`, которая принимает массив в качестве параметра,
* а затем последовательно выводит на экран его элементы.
*
* Условия:
* - Входной параметр должен быть не пустым массивом;
* - Обязательно использовать рекурсию;
* - Использовать цикл запрещено.
*
* Заметки:
* - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

// Решение

const reverse = (current, next = []) => {
    if(next.length === current.length){
        return next;
    } 
    
    const nextArray = [...next, current[current.length - 1 - next.length]]
    
    console.log( reverse(current, nextArray))
}

function f (arr) {
    if (Array.isArray(arr)) {
        arr.length == 0 ?  console.log('Error: parameter can\'t be an empty') : reverse(arr)
    } else {
        console.log('Error: parameter type should be an array')
    }
}

/* не удалять */
f([1, 2, 3]);
f(1, 2, 3); // Error: parameter type should be an array
f('Content'); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty
//
// export { f };
/* не удалять */

