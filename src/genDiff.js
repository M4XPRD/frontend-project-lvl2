/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));

  const result = {};
  for (const key of keys) {
    if (!_.has(data1, key)) {
      result[key] = 'added';
    } else if (!_.has(data2, key)) {
      result[key] = 'deleted';
    } else if (data1[key] !== data2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }

  return result;
};

export default genDiff;
