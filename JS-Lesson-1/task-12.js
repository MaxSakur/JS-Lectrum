var arr = [1,2,3,-5,-2,1,-4];
var sum;

for (i of arr) {
    console.log(i);
    if ( i > 0) {
        sum += i;
    }
}

console.log(sum)