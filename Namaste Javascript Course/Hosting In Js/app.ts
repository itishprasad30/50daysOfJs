getName(); // javascript basic
console.log(x); // undefined

console.log(getName); // prints the actual code
// getName2(); // error is not a funtion
getName3(); // error is not a funtion
var x:number = 13;

function getName  (): void {
  console.log("Javascript basic");
}

var getName2 = (): void => {
  console.log("arrow funtion ");
  return 
};

var getName3 = function (): void {
  console.log("funtion another way to defined");
};
