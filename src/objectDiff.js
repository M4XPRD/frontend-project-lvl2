import _ from 'lodash';

const objectDiff = (file1, file2) => {
  const keys1 = _.keys(file1);
  const keys2 = _.keys(file2);
  const keys = _.sortBy((_.union(keys1, keys2)));

  return keys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (!_.has(file1, key)) {
      return { type: 'added', key, value: value2 };
    } if (!_.has(file2, key)) {
      return { type: 'removed', key, value: value1 };
    } if (!_.isEqual(value1, value2)) {
      return { type: 'updated', key, value: { value1, value2 } };
    } if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { type: 'nested', key, children: objectDiff(value1, value2) };
    }
    return { type: 'equal', key, value: value1 };
  });
};

export default objectDiff;

// console.log(JSON.
// stringify(objectDiff('./__fixtures__/file1.json', './__fixtures__/file2.json'), null, 2));
