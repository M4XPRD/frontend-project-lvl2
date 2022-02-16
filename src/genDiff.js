/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

const genDiff = (data1, data2) => {
  const json1 = JSON.parse(data1);
  const json2 = JSON.parse(data2);
  const keys1 = _.keys(json1);
  const keys2 = _.keys(json2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const result = [];
  for (const key of keys) {
    if (!_.has(json1, key)) {
      result.push(`+ ${key}: ${json2[key]}`);
    } else if (!_.has(json2, key)) {
      result.push(`- ${key}: ${json1[key]}`);
    } else if (json1[key] !== json2[key]) {
      result.push(`- ${key}: ${json1[key]}`, `+ ${key}: ${json2[key]}`);
    } else if (json1[key] === json2[key]) {
      result.push(`  ${key}: ${json1[key]}`);
    }
  }
  return ['{', ...result, '}'].join('\n');
};

export default genDiff;

console.log(genDiff('{ "host": "hexlet.io", "timeout": 50, "proxy": "123.234.53.22", "follow": false }', '{ "timeout": 20, "verbose": true, "host": "hexlet.io" }'));
