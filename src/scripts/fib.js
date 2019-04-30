
export function fib(num) {
  let result = [];

  let first = 0, second = 1;
  for (int i = 0; i < num; i++) {
    result.push(first);

    second += first;
    first = second - first;
  }
}
