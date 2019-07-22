var arr = [1,2,3,4];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    arr[i]%2==0 ? sum += arr[i]: null
}

console.log(sum);