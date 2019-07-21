function sumOfAllParam(...args) {
    console.log('args--->', args)
    console.log('проверка на массив--->', Array.isArray(args))

    function isNumber(item) {
        return item ? typeof(item) === 'number' : null
    }

    console.log('Все ли значения == числа',args.every(isNumber))

    if (!args.every(isNumber)) {
        throw new Error('Одно из переданных значений в параметры функции - не число')
    } else {
        console.log('RESULT ==== ', args.reduce(function (acum, nextValue) {
            return acum + nextValue ;
        }));
    }




}


sumOfAllParam(1, 2, 3);
