
function reduce(arr, callback) {
    if(Array.isArray(arr)&&typeof callback === 'function'){
if(typeof acc==='number'||typeof acc==='string'){
    var k=0;
    for (var i=0; i<arr.length; i++) {
        if(callback(acc, arr[i], i, arr)) {
            k=k+arr[i] + acc;
        }
    }  return k;
 }
}
else{
        throw new Error(' the type parameters is not correct') ; 
     }
}

   

const arr = [1,2,3];
const acc = 0;


var result=reduce(arr, function(acc, item, i, arr) {
    return  item%3==0;
}, acc);
console.log(result);


