var arr = [1, 2, -4, 3, -9, -1, 7]; 

function isPositive(a) {
    if(typeof a==='number'){
if(a>=0) {return true;
           }
    else {return false;
       }
   }
else{
    throw new Error(' all parameters type should be a Number') ; 
}
}


var new_arr=[];
var i=0;
    for (i; i < arr.length; i++){
        if(isPositive(arr[i])) {
            new_arr.push(arr[i]) ;
    }
}

console.log(new_arr);