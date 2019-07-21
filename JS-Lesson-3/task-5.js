myArr = [1, 2, -4, 3, -9, -1, 7]
newArr = [];

function isPositive(number) {
    return number ? typeof (number) == 'number' : console.log('введенное значение не число')
}

function checkTheArray(arr) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length ; i++ ) {
            if (isPositive(arr[i]) && arr[i] > 0) {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr)
    } else {
        console.log('НЕ МАССИВ')
    }


}

checkTheArray(myArr)