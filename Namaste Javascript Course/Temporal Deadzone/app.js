// console.log(a); // undefined
// // console.log(b); // can't access the b befor intialzation
// let b = 100;
// var a = 10;

// -------------
// block scope
var a = 1000; // global object
let b = 2000;
{
  //  compound statements
  var a = 10; // showing happens in that
  let b = 20; // it is inside the block scope
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a); //10
console.log(b); //2000    // script block
console.log(c); //err
