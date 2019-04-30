const fib = require('../scripts/fib.js');

test('Negative length fibonacci list - error', () => {
  function negativeFib() {
    return fib(-5);
  }
  expect(negativeFib).toThrow('Num cannot be negative');
});

test('Empty fibonacci list', () => {
  expect(fib(0)).toEqual([]);
});

test('Simple short fibonacci list content correctness', () => {
  expect(fib(10)).toEqual(
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  );
})

test('Long fibbonacci list length correctness', () => {
  expect(fib(1000).length).toBe(1000);
});
