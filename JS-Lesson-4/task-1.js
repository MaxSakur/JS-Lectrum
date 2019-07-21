function forEach(arr, callback){
    if (Array.isArray(arr) && typeof (callback) == 'function'){
       for (let i = 0; i <= arr.length - 1; i++ ) {
           callback(arr[i]);
       }
    }
}

forEach([1,2], function (data) {
    console.log(data);
})