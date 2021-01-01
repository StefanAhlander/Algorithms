function fib(n, memo = {}) {
  if (memo[n]) {
    return memo[n];
  }

  let result;

  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;
  return result;
}

console.log(fib(4));
console.log(fib(5));
console.log(fib(50));
console.log(fib(150));
