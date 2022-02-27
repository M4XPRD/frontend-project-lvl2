import stylish from './stylish.js';
import json from './json.js';

const format = (file, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return stylish(file);
    default:
      return json(file);
  }
};

export default format;
