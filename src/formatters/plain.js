import _ from 'lodash';

const getRightValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (data) => {
  const iter = (tree, path = '') => {
    const result = tree.flatMap(({
      key, type, value, children,
    }) => {
      const currentPath = ([...path, key]);
      const fullPath = currentPath.join('.');
      switch (type) {
        case 'nested':
          return iter(children, currentPath);
        case 'added':
          return `Property '${fullPath}' was added with value: ${getRightValue(value)}`;
        case 'removed':
          return `Property '${fullPath}' was removed`;
        case 'updated':
          return `Property '${fullPath}' was updated. From ${getRightValue(value.value1)} to ${getRightValue(value.value2)}`;
        default:
          return null;
      }
    });
    return result;
  };
  return iter(data).filter(((element) => element !== null)).join('\n');
};

export default plain;
