const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

test('sums two values', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('sums two values', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('sums two values', () => {
  expect(() => { sum(4, "5") }).toThrow();
});

test('sums two values', () => {
  expect(() => { sum(4, "5") }).toThrowError(new Error ("parameters must be numbers"));
});