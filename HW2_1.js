

function f(i) {
var result;
    if(typeof i === 'number')
   { result = i*i*i; 
}
    else {
    throw new Error('parameter type is not a Number');
} 
return result;
     };


var result =f(i=2); // 8
console.log(result);
var result2 = f(i='Content'); // Error: parameter type is not a Number
console.log(result2);