import sum from '../sum.js';

test('one plus two is three', () => {
  expect(sum(4, 5)).toBe(9);
});