var a;
var c;
function getDivisors(a) {
    if (a == 0) {
        return 'parameter cant be a 0';
    } 
    else{
        if(typeof a==='number'){

            var result = [];
    
            for (var i = 1; i <=a ; i++) {
                if(a % i == 0) {
                    result.push(i);
                }
            }
        
            return result;
    
        }
        else {
            throw new Error(' all parameters type should be a Number') ; 
        }
    }
    

    
}

c = getDivisors(0);
console.log(c);
