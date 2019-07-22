var arr = [1,2,3,4,5,6], newArr = [];
var i;

for (i of arr) {
    newArr[arr.length - i] = i;
}

console.log(newArr)

