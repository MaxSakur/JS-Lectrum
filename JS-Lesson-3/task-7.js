

function getDivisors(number) {
    let newArr = []
    if (number > 0 && typeof(number) == 'number') {
        for (let i = 0; i <= number ; i++) {

            let curRest = number % i

            if (curRest == 0) {
                newArr.push(i)
            }

        }
    } else if(number <= 0) {
        console.log('parameter cant be a 0')
    } else {
        console.log('parameter type is not a Number')
    }
    console.log(newArr);
}


getDivisors(5)
getDivisors(51)
getDivisors(25)
