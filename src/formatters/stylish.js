import _ from 'lodash';

const indent = (depth, spaceCount = 4) => ' '.repeat(spaceCount * depth - 2);

const stringify = (unitedFile, depth) => {
  if (!_.isObject(unitedFile)) {
    return `${unitedFile}`;
  }
  const lines = Object
    .entries(unitedFile)
    .map(([key, value]) => (`${indent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`));
  return ['{', ...lines, `${indent(depth)}  }`].join('\n');
};

const stylish = (innerTree) => {
  const iter = (tree, depth) => tree.map((node) => {
    const getValue = (value, sign) => `${indent(depth)}${sign} ${node.key}: ${stringify(value, depth)}\n`;
    switch (node.type) {
      case 'added':
        return getValue(node.val, '+');
      case 'removed':
        return getValue(node.val, '-');
      case 'equal':
        return getValue(node.val, ' ');
      case 'updated':
        return `${getValue(node.val1, '-')}${getValue(node.val2, '+')}`;
      case 'recursion':
        // eslint-disable-next-line max-len
        return `${indent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('')}${indent(depth)}  }\n`;
      default:
        throw new Error(`This type does not exist: ${node.type}`);
    }
  });
  return `{\n${iter(innerTree, 1).join('')}}`;
};

export default stylish;
