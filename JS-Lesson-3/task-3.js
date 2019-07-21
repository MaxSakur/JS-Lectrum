var sum = 0

function mathOperation(a,b,c) {

    for ( let i = 0; i < arguments.length; i++) {

        if (typeof(arguments[i]) !== 'number') {
            throw new Error('all parameters type should be a Number')
        } else {
            console.log(`ARGUMENT № ${i} =`, arguments[i])
        }
    }

    sum = (a-b)/c

    console.log('OPERATION SUM === > > >', sum)
}


mathOperation(5,2,.5)
