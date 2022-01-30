/*Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
const arr = [1,2,3];
every(arr, function(item, i, arr) {});*/


function every(arr, callback) {
    if(Array.isArray(arr)&&typeof callback === 'function'){
        for (var i=0; i<arr.length; i++) {
            if(callback(arr[i], i, arr)) {
               i++;                   
            }
        }
        return (i===arr.length);   
    }
  
    else{
        throw new Error(' the type parameters is not correct') ; 
     }
}


const arr = [1,2,3];
var everyOne = every(arr, function(item, i, arr) {
    return item%3==0 ;
});
console.log(everyOne);