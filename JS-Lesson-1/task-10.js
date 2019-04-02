var arr = [6,5,4,3,2,1];
var i;

for (i in arr) {

    arr[arr.length] = Number(i * 1) + 1;
}

console.log('revert array =>', arr)

