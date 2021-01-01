const fact = (num, sum = 1) => {
  if (num <= 1) {
    return sum;
  }

  return fact(num - 1, num * sum);
};

console.log(fact(6));
