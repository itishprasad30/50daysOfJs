var a = 33;
function sbs() {
  var d = 88;
  console.log(d);
}

console.log(window.a); //10 this is global object
//  console.log(d);// error
console.log(this.a); // 10
// every thing inside this is global obj but inside function is local

// undefined and not defined
var a;
console.log(a); // undefined
console.log(x); // error not defined
a = 10; //
console.log(a); // 10
a = "hello ";
console.log(a); // hello

// javascript is also called loosely type language because it dynalmically allocates the type to any variable
//  also it called week language
