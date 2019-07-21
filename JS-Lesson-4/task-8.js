var arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function checkArr(obj) {
    if (typeof (obj) == 'object') {
        Array.isArray(obj) ? obj : console.log('Обьект')
        return obj
    }
}


function checkArrForLvl(item) {
    let newArr = [];

    for (let i in checkArr(item)) {
        if (checkArr(item[i])) {
            newArr.push((''+ item[i]).split(','));
        } else if (typeof (item[i]) == 'number' || 'string') {

            newArr.push(item[i])
        }

        console.log('newArr', newArr)

    }
}

checkArrForLvl(arr);
// checkArrForLvl(arr)


// console.log(!!null)
// console.log(+n)
// console.log(''+n)


// function arrFilter(arr) {
//     if (checkTheArray(arr)) {
//         console.log('ПРОШЛО', arr)
//         for (let i=0; i < arr.length; i++ ){
//             if (Array.isArray(arr[i]) ) {
//                 let thisItem;
//                 console.log('Нашло array' + arr[i])
//                 thisItem = arr.flat();
//                 console.log('thisItem', thisItem)
//                 for( i=0; i < thisItem.length; i++) {
//                     Array.isArray(thisItem[i]) ? arrFilter(thisItem[i]): null
//                 }
//             } else {
//                 console.log('Что-то не так' + arr[i])
//             }
//         }
//     } else {
//         console.log('НЕ ПРОШЛО')
//     }
//     console.log(newArr)
// }


