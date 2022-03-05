import _ from 'lodash';

const stringify = (value, replacer, depth) => {
  const iter = (currentValue, currentDepth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const currentIndent = replacer.repeat(currentDepth);
    const bracketIndent = replacer.repeat(currentDepth - 1);
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${key}: ${iter(val, currentDepth + 1)}`);

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };
  return iter(value, depth);
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const replacer = '    ';
    const currentIndent = replacer.repeat(depth);
    const bracketIndent = replacer.repeat(depth - 1);
    const result = node.flatMap(({
      key, type, value, children,
    }) => {
      switch (type) {
        case 'nested':
          return `${currentIndent.slice(2)}  ${key}: ${iter(children, depth + 1)}`;
        case 'added':
          return `${currentIndent.slice(2)}+ ${key}: ${stringify(value, replacer, depth + 1)}`;
        case 'removed':
          return `${currentIndent.slice(2)}- ${key}: ${stringify(value, replacer, depth + 1)}`;
        case 'updated':
          return `${currentIndent.slice(2)}- ${key}: ${stringify(value.value1, replacer, depth + 1)}\n${currentIndent.slice(2)}+ ${key}: ${stringify(value.value2, replacer, depth + 1)}`;
        default:
          return `${currentIndent.slice(2)}  ${key}: ${stringify(value, replacer, depth + 1)}`;
      }
    });
    return ['{', ...result, `${bracketIndent}}`].join('\n');
  };
  return iter(tree, 1);
};

export default stylish;
