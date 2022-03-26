var value = 23;
console.log(value);
var welcome = "Hello";
console.log(welcome);
var people = {
    name: "John",
    age: 12
};
console.log(people);
var data = {
    artist: true,
    age: 20,
    persons: ['hailee Stanfield', 'The Weeknd', 'Taylor Swift', 'Ed shreen', 'one direction', 'bts', 'hailee bieber'],
    price: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};
var reduceData = data.price.reduce(function (a, b) { return Math.floor((a + b) / 2); }, 0);
console.log(reduceData);
var filterData = data.persons.filter(function (name) { return name.toLowerCase() === 'ed shreen'; });
console.log(filterData);
// includes is greate for searching createAsExpression
var searchData = data.persons.filter(function (name) { return name.toLowerCase().includes('hailee'); });
console.log(searchData); // it returns the search data present
