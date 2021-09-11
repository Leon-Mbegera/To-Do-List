import sum from './sum';

test('one plus two is three', () => {
  expect(sum(4, 5)).toBe(9);
});