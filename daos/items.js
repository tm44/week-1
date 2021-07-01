const uuid = require('uuid');

module.exports = {};

module.exports.items = [];

module.exports.getAll = () => {
  return module.exports.items;
}

module.exports.getById = (itemId) => {
  return module.exports.items.find(i => i.id === itemId);
}

module.exports.deleteById = async (itemId) => {
  const indexToRemove = module.exports.items.findIndex(i => i.id === itemId);
  
  if (indexToRemove < 0)
    return;
  
  module.exports.items.splice(indexToRemove, 1);
}

module.exports.updateById = async (itemId, newObj) => {
    const indexToReplace = module.exports.items.findIndex(i => i.id === itemId);

    if (indexToReplace < 0)
      return;

    module.exports.items[indexToReplace].field = newObj.field;
    return module.exports.items;
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}