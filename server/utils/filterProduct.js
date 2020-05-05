const filterProducts = (items, ...filters) => {
  return filters.filter(item => item[1]).reduce((filteredItems, filter) => {
    const newFilteredItems = filteredItems.filter(item => {
      const value = item[filter[0]];
      if (Array.isArray(value)) {
        return value.find(valueItem => valueItem === filter[1]);
      }
      return value === filter[1];
    })

    return [...newFilteredItems]

  }, items)
}

module.exports = filterProducts;