var arr = [1,2,3,4]; 
var sum = 0;
var i=0;
    for (i; i < arr.length; i++){
                  
        if (arr[i] % 2 == 0 && arr[i]>3){
                sum += arr[i];
            }
        }
console.log(sum);