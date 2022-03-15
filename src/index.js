import { readFileSync } from 'fs';
import path from 'path';
import parseFile from './parsers.js';
import objectDiff from './diff.js';
import format from './formatters/format.js';

const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const getExtension = (filepath) => path.extname(filepath).slice(1).toLowerCase();

const readFileData = (filepath) => readFileSync(filepath, 'utf-8');

const loadData = (file) => {
  const fullPath = buildFullPath(file);
  const extension = getExtension(file);
  const readFile = readFileData(fullPath);
  return parseFile(readFile, extension);
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const parsedFile1 = loadData(filepath1);
  const parsedFile2 = loadData(filepath2);

  const getDiff = objectDiff(parsedFile1, parsedFile2);
  const formattedFile = format(getDiff, formatName);

  return formattedFile;
};

export default genDiff;
