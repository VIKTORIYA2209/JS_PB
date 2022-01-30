function forEach(arr, callback) {
    if(Array.isArray(arr)&&typeof callback === 'function'){
        for (item=0; item<arr.length; item++) {
            i=arr[item];
            callback(item, i, arr);        
        }
    }
    else{
        throw new Error(' the tape parameters is not correct') ; 
     } 
}


const arr = [1,2,3];
forEach (arr, function (item, i, arr) {
    console.log('Индекс ' + item + ': Значение ' + i + ' из массива [' + arr + ']');
});