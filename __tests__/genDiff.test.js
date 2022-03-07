/* eslint-disable jest/no-commented-out-tests */
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
// const wrongFileExtension = getFixturePath('file1.txt');
const expectedStylish = readFile('expected-stylish.txt');
const expectedPlain = readFile('expected-plain.txt');
const expectedJSON = readFile('expected-json.txt');

test('difference between two JSONs in stylish', () => {
  expect(genDiff(filepath1, filepath2)).toBe(expectedStylish);
});

test('difference between two JSONs in plain', () => {
  expect(genDiff(filepath1, filepath2, 'plain')).toBe(expectedPlain);
});

test('difference between two JSONs in json', () => {
  expect(genDiff(filepath1, filepath2, 'json')).toBe(expectedJSON);
});

test('difference between two YAMLs in stylish', () => {
  expect(genDiff(filepath3, filepath4)).toBe(expectedStylish);
});

test('difference between two YAMLs in plain', () => {
  expect(genDiff(filepath3, filepath4, 'plain')).toBe(expectedPlain);
});

test('difference between two YAMLs in json', () => {
  expect(genDiff(filepath3, filepath4, 'json')).toBe(expectedJSON);
});

// test('wrong file extention', () => {
//   expect(genDiff(wrongFileExtension, filepath4, 'json')).toThrowError('Unknown extension!');
// });
