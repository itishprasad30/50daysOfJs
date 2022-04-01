var a = 33;
function sbs() {
  var d = 88;
  console.log(d);
}

console.log(window.a); //10 this is global object
//  console.log(d);// error
console.log(this.a); // 10
// every thing inside this is global obj but inside function is local
