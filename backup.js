/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const result = [];
  for (const key of keys) {
    if (!_.has(data1, key)) {
      result.push(`+ ${key}: ${data2[key]}`);
    } else if (!_.has(data2, key)) {
      result.push(`- ${key}: ${data1[key]}`);
    } else if (data1[key] !== data2[key]) {
      result.push(`- ${key}: ${data1[key]}`, `+ ${key}: ${data2[key]}`);
    } else if (data1[key] === data2[key]) {
      result.push(`  ${key}: ${data1[key]}`);
    }
  }
  return ['{', ...result, '}'].join('\n');
};

export default genDiff;

const file1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const file2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

console.log(genDiff(file1, file2));
