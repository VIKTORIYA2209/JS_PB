var arr = [1,2,3,4];
var sum = 0;
function count() {
for (i = 0; i < arr.length; i++) {
sum += arr[i];
}
return sum;
}
console.log(count());