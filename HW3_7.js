

var arr = ['abcd', 'abcde', 'ab', 'abc'];

arrLength=arr.map(function(item) {
    return item.length;
});

console.log(arrLength); // 4,5,2,3