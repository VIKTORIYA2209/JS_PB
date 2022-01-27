var arr = [1,2,3]
var i=0;

function f(){
      console.log(arr[i]);

if(i < arr.length-1) {
    i++;
    f();
}

}
    
f();