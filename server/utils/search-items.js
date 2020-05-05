const searchItems = (string, items) => {
  return items.filter(el => el.name.toLowerCase().indexOf(string.toLowerCase()) !== -1);
}

module.exports = searchItems;