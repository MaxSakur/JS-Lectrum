const arr = [1, 2, 3];
let newArr;

function correspondence(value) {
    return value > 0 // true
    // return > 1 --> false
}

function every(arr, func) {
    Array.isArray(arr) && typeof(func) === 'function'
        ? newArr = arr.every(func)
        : console.log('1ый элемент не массив или 2ой элемент не функция')
}

every(arr, correspondence);
console.log(newArr)