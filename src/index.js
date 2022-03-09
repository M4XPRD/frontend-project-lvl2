/* eslint-disable max-len */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import parseFile from './parsers.js';
import objectDiff from './diff.js';
import format from './formatters/format.js';

const formFullPath = (filepath) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.isAbsolute(filepath) ? filepath : path.join(__dirname, '..', '__fixtures__', filepath);
};

// console.log(formFullPath('file1.json')); // c:\Users\advma\Desktop\Folder\frontend-project-lvl2\__fixtures__\file1.json

// const formFullPath = (filepath) => path.resolve(process.cwd(), filepath);

// console.log(formFullPath('file1.json')); // c:\Users\advma\Desktop\Folder\frontend-project-lvl2\file1.json

// !!!!!!!!!!!!!! Комментарий для наставника: !!!!!!!!!!!!!!!!!!!!!
// Добрый день, Александр!
// Насчёт функции выше. Я понимаю, что нужно написать следующее:
// const formFullPath = (filepath) => path.resolve(process.cwd(), filepath);

// В итоге он выдаёт правильный путь. Но у меня получается ошибка формата
// node:fs:585 handleErrorFromBinding(ctx);
// Error: ENOENT: no such file or directory, open '/mnt/c/Users/advma/Desktop/Folder/frontend-project-lvl2/file1.json'

// В итоге я не могу запустить команду gendiff из корневой папки. Не знаю, как это решить без помощи __dirname
// В строчках 15 и 19 видно, что не хватает директории

const getExtension = (file) => path.extname(file).slice(1).toLowerCase();

const readFileData = (file) => readFileSync(file, 'utf-8');

const loadData = (file) => {
  const fullPath = formFullPath(file);
  const extension = getExtension(file);
  const readFile = readFileData(fullPath);
  return parseFile(readFile, extension);
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const parsedFile1 = loadData(filepath1);
  const parsedFile2 = loadData(filepath2);

  const diffBetweenObjects = objectDiff(parsedFile1, parsedFile2);
  const formatter = format(diffBetweenObjects, formatName);

  return formatter;
};

export default genDiff;
