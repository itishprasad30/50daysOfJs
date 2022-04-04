const arr = [5,2,8,1,4,6]

//  map method basically do iterate over each array and gives a new array

const output = arr.map( x => x * 2)
console.log(output)

// filter is filter from array

const filterdata = arr.filter(x => {
	return x %2 == 0 // even data
}) 
console.log(filterdata)

//reduce 
// normal way
const sumFun = function (arr) {
	let sum = 0;
	for(let i = 0; i< arr.length; i++){
		sum = sum + arr[i]
	}
	return sum
	
}
const sum =sumFun(arr)
console.log(sum)
// for max and sum
const sumReduce = arr.reduce((acc,curr) =>{
	acc = acc + curr
	return acc
},0)

console.log(sumReduce)

// or 
const maxReduce  = arr.reduce((acc,curr)=> {
    if(curr > acc){
        acc = curr
    }
    return acc
},0)
console.log(maxReduce) // 8


//// Real world proble to use
const users = [
	{firstName:'itish',lastName:'prasad',age:22},
	{firstName:'elon',lastName:'musk',age:38},
	{firstName:'abel',lastName:'tesfaye',age:32},
	{firstName:'taylor',lastName:'swift',age:32},
	{firstName:'zayn',lastName:'malik',age:25},
]

// list full name 
// map
const resultMap = users.map(x => `${x.firstName} ${x.lastName}`)
console.log(resultMap)

// {22:1,38:1,32:2,25:1}
// use reduce
const resultReduce = users.reduce((acc,curr) =>{
	if(acc[curr.age]){
		acc[curr.age] = ++ acc[curr.age]
		
	}else{
		acc[curr.age] = 1
	}
	return acc
},{})

console.log(resultReduce)


// problem find age < 30 and print fullname
const result3 = users.filter(x => x.age < 30).map(x => x.firstName + ' ' + x.lastName )	
console.log(result3)