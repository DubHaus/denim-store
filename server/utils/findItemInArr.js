const findItemInArr = (arr, id) => {
  const result = arr.find(item => item.id == id);
  return result ? result : null;
}

module.exports = findItemInArr;