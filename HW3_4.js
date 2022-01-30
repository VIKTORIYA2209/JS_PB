
function some(arr, callback) {
    if(Array.isArray(arr)&&typeof callback === 'function'){
           for (var i=0; i<arr.length; i++) {
            if(callback(arr[i], i, arr)) {
               i++;                  
            }
        }
        return (i>0); 
    }
    else{
        throw new Error(' the type parameters is not correct') ; 
     }
}


const arr = [1,2,3];
var result = some(arr, function(item, i, arr) {
    return item%3==0;
});
console.log(result);