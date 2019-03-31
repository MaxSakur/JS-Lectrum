var arr = [2, 5, 9, 15, 0, 4];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10 ) {
        sum += arr[i]
    }
}

console.log(sum);