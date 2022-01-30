function arrayFill(a, b) {
    if(Array.isArray(a)||typeof a==='number' || typeof a==='string' || typeof a==='object' && b==='number'){
        new_arr=[];
        new_arr.length=b;
        for (var i=0; i<b;i++) {
            new_arr[i]=a;
        }
        return new_arr;
    }
    else{
        throw new Error(' the type parameters is not correct') ; 
  }
}


console.log(arrayFill('x',5));
