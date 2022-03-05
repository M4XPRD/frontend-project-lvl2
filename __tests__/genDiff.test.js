import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, '..', '__fixtures__', filename);
};

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const filepath3 = getFixturePath('file1.yml');
const filepath4 = getFixturePath('file2.yaml');
const expected = readFile('expected-stylish.txt');

test('difference between two JSONs', () => {
  expect(genDiff(filepath1, filepath2)).toBe(expected);
});

test('difference between two YAMLs', () => {
  expect(genDiff(filepath3, filepath4)).toBe(expected);
});
