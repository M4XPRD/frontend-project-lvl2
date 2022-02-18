import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff';
import expectedResult from '../__fixtures__/expectedResult';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('difference between two JSONs', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  expect(genDiff(filepath1, filepath2)).toBe(expectedResult);
});

test('difference between two YAMLs', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');

  expect(genDiff(filepath1, filepath2)).toBe(expectedResult);
});

test('difference between JSON and YAML', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.yml');

  expect(genDiff(filepath1, filepath2)).toBe(expectedResult);

  const filepath3 = getFixturePath('file1.yml');
  const filepath4 = getFixturePath('file2.json');

  expect(genDiff(filepath3, filepath4)).toBe(expectedResult);
});
