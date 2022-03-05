// Array
// Last
// Make Arr: 2 generic ,return,overwrite interface , defult value
//addFullName : extends
// interfaces
// props
// useState
// jsx generics

// --genereics

type Arr = Array<number>

const arr :Arr = [1,2,3] 
// also

type newArr = number[]

const data: newArr = [22,11,344]


const last  = (data:Array<number>) => {
    return data[data.length -1]
}

const l = last([1,2,3,4])
// const s = last(['a','b']) //  error


const lastEl = <T> (arr:T[] ) :T => {
    return arr[arr.length - 1]
}

const lastElofArr = lastEl([1,2,3,4,5,67])
const lastStringEl = lastEl(['hell','world',12])
console.log(lastElofArr)



const makeArr = <T,Y = number> (x:T ,y:Y) :[T,Y] => {
    return [x,y]
}

const v = makeArr(222,1212)
const v2 = makeArr<string| null>('string',2)
console.log(v,v2)