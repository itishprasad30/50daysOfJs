// call method()
// using call method you can borrow funtion from other object
// --- first parameter always reference to the this variable in function  and later are arg to the function
// ex

let name = {
  firstName: "Itish",
  lastName: "Prasad",
};

let name2 = {
  firstName: "Taylor",
  lastName: "Swift",
};

let printFullName = function (city, state) {
  console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
};
// call method
printFullName.call(name, "cuttack", "odisha"); // itish prasad cuttack,odisha
printFullName.call(name2, " Nashville", "LA"); // taylor swift  Nashville LA

//  apply method same as call method but only difference is that the 2nd args
//  are passed in []array list .

// ex.

printFullName.apply(name2, ["califonia", "Mountview"]);

// Bind () method
// bind method exacaly same as call method but difference is instead of directly calling this method  , it binds this mehods with object and returns the copy of object.
// later you can invoke this

// ex

let printMyName = printFullName.bind(name, "cuttack", "odisha");
printMyName();

// TLDR
// call - which is used to invoked a function directly by passing the refeence which point to this variable inside method
// apply - excaly same as call but only differece is it takes 2nd args as and[] array list which has to be passed in the method.

//  polifill of bind method()

let person = {
  firstName: "Itish",
  lastName: "Prasad",
};

let person2 = {
  firstName: "the weeknd",
  lastName: "tesfaye",
};

let getFullName = function (city, state) {
  console.log(this.firstName + " " + this.lastName + " " + city + " " + state);
};

let fullNamme = getFullName.bind(person2, "bangalore", "karnatak");
fullNamme();

// my bind
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let fullName2 = getFullName.myBind(person, "cuttack");
fullName2("odisha");
