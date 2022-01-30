function reverse(arr) {
    if(Array.isArray(arr)&&arr.length!==0){
        for (var i=0; i<arr.length/2;i++) {
            var a=arr[i];
            var b=arr[arr.length-i-1];
            arr[i]=b;
            arr[arr.length-i-1]=a;
        }
        return arr;
    }
    else{
        throw new Error(' the type parameters is not correct') ; 
  }
}


const arr = [3,2,1];
console.log(reverse(arr));
