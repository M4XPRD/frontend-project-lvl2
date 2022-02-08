/* eslint-disable no-undef */
/*eslint linebreak-style: ["error", "windows"]*/

import { multi } from '../src/multi.js';

test('multi', () => {
  expect(multi(1, 2)).toEqual(2);
  expect(multi(0, 5)).toEqual(0);
});
