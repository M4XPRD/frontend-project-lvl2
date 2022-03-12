import _ from 'lodash';
import stylish from './stylish.js';
import json from './json.js';
import plain from './plain.js';

const formatters = {
  stylish,
  plain,
  json,
};

const format = (file, formatName = 'stylish') => {
  if (!_.has(formatters, formatName)) {
    throw new Error('Unknown format!');
  }
  return formatters[formatName](file);
};

export default format;
