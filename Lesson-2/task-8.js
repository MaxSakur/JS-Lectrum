var arr = [1,2,3,4];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    arr[i] > 3 ? sum += arr[i]: null
}

// Полагаю тут должно быть больше или равно - так как совпадение только одно

console.log(sum);