var arr = [1,2,3,4,5,6], newArr = [];
var arrLength = arr.length;

for (let i=0; i< arrLength; i++){

    let first = arr[i];
    let last = newArr[newArr.length -1];

    last = first;

    console.log('first', first);
    console.log('last', last);

    newArr[last --];

}


console.log(newArr)