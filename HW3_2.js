function filter(arr,callback) {
let new_arr=[];
    if(Array.isArray(arr)&&typeof callback === 'function'){

for(let i=0;i < arr.length; i++){
    if(callback(arr[i],i,arr)) {
        new_arr.push(arr[i]);
    }
  }
}
else{
    throw new Error(' the type parameters is not correct') ; 
 }
 return new_arr;
};


const arr = [1,2,3];
filter(arr, function(item, i, arr) {
    return item%3==0;
});

console.log(result);