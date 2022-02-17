import _ from 'lodash';
import parseFile from './parsing.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = parseFile(filepath1);
  const file2 = parseFile(filepath2);
  const keys1 = _.keys(file1);
  const keys2 = _.keys(file2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const result = keys.reduce((array, key) => {
    if (!_.has(file1, key)) {
      array.push(`+ ${key}: ${file2[key]}`);
    } else if (!_.has(file2, key)) {
      array.push(`- ${key}: ${file1[key]}`);
    } else if (file1[key] !== file2[key]) {
      array.push(`- ${key}: ${file1[key]}`, `+ ${key}: ${file2[key]}`);
    } else if (file1[key] === file2[key]) {
      array.push(`  ${key}: ${file1[key]}`);
    }
    return array;
  }, []);

  return ['{', ...result, '}'].join('\n');
};

export default genDiff;
