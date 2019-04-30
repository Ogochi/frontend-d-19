
function fib(num) {
  let result = [];

  if (num < 0) {
    throw 'Num cannot be negative';
  }

  let first = 0, second = 1;
  for (let i = 0; i < num; i++) {
    result.push(first);

    second += first;
    first = second - first;
  }

  return result;
}

module.exports = fib;
