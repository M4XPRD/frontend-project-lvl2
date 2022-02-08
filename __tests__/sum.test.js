import sum from '../src/sum.js';

test('sum', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(0, 5)).toEqual(5);
});
