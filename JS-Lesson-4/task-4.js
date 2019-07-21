const arr = [1, 2, 3];
let newArr;

function correspondence (value) {
    return value === 4 // false
    // return > 1 --> true
}

function some(arr, func) {
    Array.isArray(arr) && typeof(func) === 'function'
        ? newArr = arr.some(func)
        : console.log('1ый элемент не массив или 2ой элемент не функция')
}

some(arr, correspondence);
console.log(newArr)