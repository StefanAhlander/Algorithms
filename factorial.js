const factorial = (n) => (n < 1 ? 0 : n === 1 ? 1 : n * factorial(n - 1));

console.log(factorial(-1));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
