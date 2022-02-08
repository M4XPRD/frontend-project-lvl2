/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.union(keys1, keys2);

  const result = {};
  for (const key of keys) {
    if (!_.has(data1, key)) {
      result[key] = 'added';
    } else if (!_.has(data2, key)) {
      result[key] = 'deleted';
    } else if (data1[key] !== data2[key]) {
      result[key] = 'changed';
    }
    result[key] = 'unchanged';
  }

  return result;
};

export default genDiff;
