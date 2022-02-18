import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const checkPath = path.isAbsolute(filepath) ? filepath : path.resolve(filepath);
  const file = fs.readFileSync(checkPath, 'utf-8');
  return path.extname(file) === '.json' ? JSON.parse(file) : yaml.load(file);
};

export default parseFile;
