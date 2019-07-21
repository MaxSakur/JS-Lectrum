function isEven(number) {
    if (typeof (number) == 'number') {
        if (number % 2 == 0 ) {
            console.log('current number is Even')
        } else {
            console.log('current number is Odd')
        }
    }
}

isEven(3)
isEven(2)
isEven(8)
isEven(11)