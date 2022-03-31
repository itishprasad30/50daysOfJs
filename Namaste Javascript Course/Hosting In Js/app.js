getName(); // javascript basic
console.log(x); // undefined

console.log(getName); // prints the actual code
// getName2(); // error is not a funtion
getName3(); // error is not a funtion
var x = 13;

function getName() {
  console.log("Javascript basic");
}

var getName2 = () => {
  console.log("arrow funtion ");
};

var getName3 = function () {
  console.log("funtion another way to defined");
};
