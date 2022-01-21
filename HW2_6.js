
function isEven(a) {
    if (a == 0) {
        return true;
    } 
    else {
        if(typeof a==='number'){

        return (a % 2 == 0) ? true : false;
        }
        else {
            throw new Error(' all parameters type should be a Number') ; 
        }
    }
    return isEven(a);
}

console.log(isEven(-1));