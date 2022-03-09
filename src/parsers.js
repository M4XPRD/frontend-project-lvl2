import yaml from 'js-yaml';
import _ from 'lodash';

const formats = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const parseFile = (file, extension) => {
  if (!_.has(formats, extension)) {
    throw new Error('Unknown extension!');
  }
  return formats[extension](file);
};

export default parseFile;
