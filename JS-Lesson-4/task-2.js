const arr = [1, 2, 3];
let newArr;

function correspondence(value) {
    return value > 1
}

function filter(arr, func) {
    Array.isArray(arr) && typeof(func) === 'function'
        ? newArr = arr.filter(func)
        : console.log('1ый элемент не массив или 2ой элемент не функция')
}

filter(arr, correspondence);
console.log(newArr)