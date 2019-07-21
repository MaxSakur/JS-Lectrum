const arr = [1, 2, 3];
let newArr;

function correspondence(sum,value) {
    return sum + value;
    // return > 1 --> true
}

function reduce(arr, func, accumulator) {
    Array.isArray(arr) && typeof(func) === 'function' && typeof(accumulator) == 'string' || 'number'

        ? newArr = arr.reduce(func, accumulator)
        : console.log('1ый элемент не массив или 2ой элемент не функция')
}

reduce(arr, correspondence, 10);
console.log(newArr)