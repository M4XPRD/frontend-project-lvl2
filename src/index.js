/* eslint-disable max-len */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import parseFile from './parsers.js';
import objectDiff from './diff.js';
import format from './formatters/format.js';

const buildFullPath = (filepath) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.isAbsolute(filepath) ? filepath : path.join(__dirname, '..', '__fixtures__', filepath);
};

// const buildFullPath = (filepath) => path.resolve('__fixtures__', filepath);

// !!!!!!!!!!!!!!!!!!! Комментарий №2 !!!!!!!!!!!!!!!!!!!!!!
// Проблему с process.cwd() так и не получилось решить. Может дело вообще в операционке?
// Я работаю из Windows в VSCode, может ли здесь быть проблема?
// Сейчас оставлю первый вариант согласно статье: https://ru.hexlet.io/blog/posts/chto-takoe-__dirname-v-javascript

// const buildFullPath = (filepath) => {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);
//   return path.isAbsolute(filepath) ? filepath : path.join(__dirname, '..', '__fixtures__', filepath);
// };

// console.log(buildFullPath('file1.json')); // c:\Users\advma\Desktop\Folder\frontend-project-lvl2\__fixtures__\file1.json

// const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);

// console.log(buildFullPath('file1.json')); // c:\Users\advma\Desktop\Folder\frontend-project-lvl2\file1.json

// !!!!!!!!!!!!!! Комментарий №1 для наставника: !!!!!!!!!!!!!!!!!!!!!
// Добрый день, Александр!
// Насчёт функции выше. Я понимаю, что нужно написать следующее:
// const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);

// В итоге он выдаёт правильный путь. Но у меня получается ошибка формата
// node:fs:585 handleErrorFromBinding(ctx);
// Error: ENOENT: no such file or directory, open '/mnt/c/Users/advma/Desktop/Folder/frontend-project-lvl2/file1.json'

// В итоге я не могу запустить команду gendiff из корневой папки. Не знаю, как это решить без помощи __dirname
// В строчках 17 и 21 видно, что не хватает директории, если использовать process.cwd(), т.к. я работаю из корня

// Работает только такой вариант функции (он используется в начале файла):
// const buildFullPath = (filepath) => path.resolve('__fixtures__', filepath);

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
