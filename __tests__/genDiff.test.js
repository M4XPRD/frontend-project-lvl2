import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff';
import expectedJson from '../__fixtures__/expectedJson';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('difference between two JSONs', () => {
  const filepath1 = getFixturePath('../__fixtures__/file1.json');
  const filepath2 = getFixturePath('../__fixtures__/file2.json');

  expect(genDiff(filepath1, filepath2)).toBe(expectedJson);
});
