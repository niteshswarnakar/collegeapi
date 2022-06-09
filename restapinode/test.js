const fib = (n) => {
  let a = 0;
  let b = 1;
  let c = 1;
  let i;
  for (i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};

console.log(fib(8));
