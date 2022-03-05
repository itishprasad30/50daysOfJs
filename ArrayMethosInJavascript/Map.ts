const value: number = 23;

console.log(value);

let welcome: string = "Hello";
console.log(welcome);

interface Person {
    name: string;
    age: number;
}

const people:Person = {
    name: "John",
    age:12
}
console.log(people);


interface Data {
    artist:boolean;
    age:number;
    persons:string[];
    price:number[]
}

let data:Data = {
    artist:true,
    age:20,
    persons:['hailee Stanfield','The Weeknd','Taylor Swift','Ed shreen']   ,
    price:[1,2,3,4,5,6,7,8,9,10]

}

const reduceData = data.price.reduce((a,b ) => Math.floor((a+b )/2) ,0 )
console.log(reduceData)

let filterData:string[] = data.persons.filter(name => name.toLowerCase() === 'ed shreen')

console.log(filterData)