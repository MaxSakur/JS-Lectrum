var arr = ['abcd', 'abcde', 'ab', 'abc']
let newArr;

newArr = arr.map(function(name) {
    return name.length;
});

console.log(newArr)