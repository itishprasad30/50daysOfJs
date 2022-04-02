function a() {
  b();
  function b() {
    c();
    function c() {
      console.log(x);
    }
  }
}
var x = 100;
a(); // 100
