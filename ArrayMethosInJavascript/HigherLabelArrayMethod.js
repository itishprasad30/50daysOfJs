// Top 10 Higher Label Array Methods 
// 1 - forEach()
// helps to loops through an array of items
var arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function (item) {
    return console.log(item);
});
// 2 - includes()
// check if arra includes the item passed in this method 
var isHere = arr.includes(4);
console.log(isHere); // true
// 3 - filter()
// this method create a new array with only elements passed condition inside the provided function
var filteredValue = arr.filter(function (item) { return item >= 5; });
console.log(filteredValue); // 56
console.log(arr);
// 4 - map()
//  this method creates a new array by calling the provided function in every element
var mapArrValue = arr.map(function (val, id) {
    return val + id; // here id is index
});
console.log(mapArrValue);
// 5 - reduce()
// this method applies a function agianst a accumulator and each element in the array
//  (from left to right )  to reduce it to single value 
var sum = arr.reduce(function (total, value) { return total + value; }, 0);
console.log(sum);
// 6 - some()
// this checks if at least one of array's item passed the condition ,if 
// passed it return 'true' otherwise "false"
var checkData = arr.some(function (num) { return num >= 4; });
console.log(checkData); // true
var checkData1 = arr.some(function (num) { return num <= 0; });
console.log(checkData1); // false
// 7 - every()
// this checks every array's item passed the condition ,if 
// passed it return 'true' otherwise "false"
var checkData3 = arr.every(function (num) { return num >= 4; });
console.log(checkData3); // false
var checkData4 = arr.every(function (num) { return num >= 0; });
console.log(checkData4); // true
// 8 - sort()
//it will arranage the array in to sorting wise acceending or desceing
var alpha = ['d', 'g', 'j', 'q', 'a', 'z', 'c', 'b', 'n', 'm'];
var nums = [1, 2, 3, 4, 5];
var acceendingSort = alpha.sort(function (a, b) { return a > b ? 1 : -1; });
console.log(acceendingSort);
var decendingSort = nums.sort(function (a, b) { return a > b ? -1 : 1; });
console.log(decendingSort);
// 9 - Array.from()
// this create a array from an array like object
var arrLike = 'pintu';
var arraylike = Array.from(arrLike);
console.log(arraylike); // [ 'p', 'i', 'n', 't', 'u' ] 
// 10 - Array.of()
// this create a array from every single argument
// returns a array from a set of arguments
var args = Array.of(1, 4, 56, 8, 53);
console.log(args); //[ 1, 4, 56, 8, 53 ]
