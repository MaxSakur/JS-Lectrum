const arr = [1, 2, 3];
let newArr;

function correspondence(value, sum) {
    return sum + value;
    // return > 1 --> true
}

function reduceRight(arr, func, accumulator) {
    Array.isArray(arr) && typeof(func) === 'function' && typeof(accumulator) == 'string' || 'number'

        ? newArr = arr.reduceRight(func, accumulator)
        : console.log('1ый элемент не массив или 2ой элемент не функция')
}

reduceRight(arr, correspondence, '1');
console.log(newArr)