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

