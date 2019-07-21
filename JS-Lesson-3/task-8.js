function arrCheck(arr) {
    Array.isArray(arr) && arr.length>0 ? arr.map( (item, index) => console.log(`Position ${index} == ${item}`)) : console.log('Current object is not Array')
}


arrCheck([1,2,4,4,5])