const fib = require('../scripts/fib.js');

test('Negative length fibonacci list', () => {
  function negativeFib() {
    return fib(-5);
  }
  expect(negativeFib).toThrow('Num cannot be negative');
});

test('Empty fibonacci list', () => {
  expect(fib(0)).toEqual([]);
});
