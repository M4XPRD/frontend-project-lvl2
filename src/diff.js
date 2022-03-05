import _ from 'lodash';

const objectDiff = (file1, file2) => {
  const keys1 = _.keys(file1);
  const keys2 = _.keys(file2);
  const keys = _.sortBy(_.union(keys1, keys2));

  return keys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, type: 'nested', children: objectDiff(value1, value2) };
    } if (!_.has(file1, key)) {
      return { key, type: 'added', value: value2 };
    } if (!_.has(file2, key)) {
      return { key, type: 'removed', value: value1 };
    } if (!_.isEqual(value1, value2)) {
      return { key, type: 'updated', value: { value1, value2 } };
    }
    return { key, type: 'equal', value: value1 };
  });
};

export default objectDiff;
