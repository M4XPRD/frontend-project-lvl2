import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const checkPath = path.isAbsolute(filepath) ? filepath : path.join(__dirname, '..', '__fixtures__', filepath);
  const file = readFileSync(checkPath, 'utf-8');
  return path.extname(file) === '.json' ? JSON.parse(file) : yaml.load(file);
};

export default parseFile;
