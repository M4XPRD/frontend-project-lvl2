import stylish from './stylish.js';
import json from './json.js';
import plain from './plain.js';

const format = (file, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return stylish(file);
    case 'plain':
      return plain(file);
    default:
      return json(file);
  }
};

export default format;
