// Top 10 Higher Label Array Methods 

// 1 - forEach()
// helps to loops through an array of items

const arr = [1,2,3,4,5,6]

arr.forEach(item => {
    return console.log(item )
})

// 2 - includes()
// check if arra includes the item passed in this method 

let isHere = arr.includes(4)
console.log(isHere) // true


// 3 - filter()
// this method create a new array with only elements passed condition inside the provided function

const filteredValue:number[] = arr.filter(item => item >= 5)
console.log(filteredValue) // 56
console.log(arr)

// 4 - map()
//  this method creates a new array by calling the provided function in every element

const mapArrValue :number[]=  arr.map((val,id) =>{
    return val +id // here id is index
})
console.log(mapArrValue)

// 5 - reduce()
// this method applies a function agianst a accumulator and each element in the array
//  (from left to right )  to reduce it to single value 


const sum = arr.reduce((total,value) => total+value,0)
console.log(sum)

// 6 - some()
// this checks if at least one of array's item passed the condition ,if 
// passed it return 'true' otherwise "false"

const checkData = arr.some(num => num >= 4)
console.log(checkData)// true
const checkData1 = arr.some(num => num <= 0)
console.log(checkData1) // false


// 7 - every()
// this checks every array's item passed the condition ,if 
// passed it return 'true' otherwise "false"

const checkData3 = arr.every(num => num >= 4)
console.log(checkData3)// false
const checkData4 = arr.every(num => num >= 0)
console.log(checkData4) // true

// 8 - sort()

//it will arranage the array in to sorting wise acceending or desceing

let alpha = ['d','g','j','q','a','z','c','b','n','m']

let nums = [1,2,3,4,5]

let acceendingSort = alpha.sort( (a,b) => a > b ? 1:-1)
console.log(acceendingSort)

let decendingSort = nums.sort((a,b) => a > b ? -1:1)
console.log(decendingSort)


// 9 - Array.from()
// this create a array from an array like object

let arrLike = 'pintu'
let arraylike = Array.from(arrLike)
console.log(arraylike) // [ 'p', 'i', 'n', 't', 'u' ] 

// 10 - Array.of()
// this create a array from every single argument
// returns a array from a set of arguments

const args = Array.of(1,4,56,8,53)
console.log(args)//[ 1, 4, 56, 8, 53 ]