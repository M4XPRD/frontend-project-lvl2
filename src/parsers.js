import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const checkPath = path.isAbsolute(filepath) ? filepath : path.join(__dirname, '..', '__fixtures__', filepath);
  const file = readFileSync(checkPath, 'utf-8');
  const extension = path.extname(checkPath);

  switch (extension) {
    case '.json':
      return JSON.parse(file);
    case '.yml':
    case '.yaml':
      return yaml.load(file);
    default:
      throw new Error('Unknown extension!');
  }
};

export default parseFile;
