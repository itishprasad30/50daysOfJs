function x() {
  var a = 102;
  y();
  function y() {
    console.log(a);
  }
}

x(); // 102

// or
function abc() {
  var num = 30002;
  function a() {
    function b() {
      function c() {
        var num2 = 423;
        console.log(num2, num);
      }
      c();
    }
    b();
  }
  a();
}

const z = abc();
