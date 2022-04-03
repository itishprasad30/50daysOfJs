const prevResult = [];

function square(n) {
  if (prevResult[n] != null) {
    return prevResult[n];
  }
  let results = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      results += 1;
    }
  }
  prevResult[n] = results;
  return results;
}
// console.log(square(66));

// console.log(square(66));

////////////////
function fib(n, prevValue = []) {
  if (prevValue[n] != null) {
    return prevValue[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, prevValue) + fib(n - 2, prevValue);
  }
  //   console.log(prevValue);
  prevValue[n] = result;
  return result;
}
console.log(fib(10));
