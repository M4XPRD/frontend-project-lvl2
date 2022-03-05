import parseFile from './parsers.js';
import objectDiff from './diff.js';
import format from './formatters/format.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1 = parseFile(filepath1);
  const file2 = parseFile(filepath2);

  const diffBetweenObjects = objectDiff(file1, file2);
  const formatter = format(diffBetweenObjects, formatName);

  return formatter;
};

export default genDiff;
