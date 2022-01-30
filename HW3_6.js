
function reduceRight(arr, callback) {

    if(Array.isArray(arr)&&typeof callback === 'function'){
        if(typeof acc==='number'||typeof acc==='string'){
            var k=0;
            var i=0;
            for (var i=arr.length-1; i>=0; i--) {
                if(callback(acc, arr[i], i, arr)) {
                    k=k+arr[i] + acc;
                }
            }
            return k;
         }
        }
        else{
                throw new Error(' the type parameters is not correct') ; 
     }
 }

    
const arr = [1,2,3];
const acc = 0;
var result=reduceRight(arr, function(acc, item, i, arr) {
    return item%3===0;
}, acc);
console.log(result);


