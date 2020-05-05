const sortItemsByPrice = (items, method = 'recomendation') => {
  switch (method) {
    case "recommendation":
      return items;

    case "low-to-high":
      return [...items].sort((el, el2) => el.price - el2.price);

    case "high-to-low":
      return [...items].sort((el, el2) => el2.price - el.price);

    default:
      return items;
  }
}

module.exports = sortItemsByPrice;