const filterProducts = require('./filterProduct');


describe('filterProducts', () => {

  const products = [
    {
      colors: ['white', 'blue', 'green'],
      sex: 'female',
      collection: 'casual'
    },
    {
      colors: ['white', 'blue'],
      sex: 'female',
      collection: 'classic'
    },
    {
      colors: ['blue', 'green'],
      sex: 'male',
      collection: 'classic'
    },
    {
      colors: ['white', 'green', 'blue'],
      sex: 'male',
      collection: 'casual'
    },
  ]

  test('should return array', () => {
    expect(filterProducts(products)).toBeInstanceOf(Array);
  })

  test('should return filtered array', () => {
    expect(filterProducts(products, ['sex', 'female']))
      .toEqual([products[0], products[1]]);
    expect(filterProducts(products, ['colors', 'white']))
      .toEqual([products[0], products[1], products[3]]);
  })

  test('should return filtered array with multiple filters', () => {
    expect(filterProducts(products, ['sex', 'female'], ['colors', 'green']))
      .toEqual([products[0]]);
    expect(filterProducts(products, ['sex', 'male'], ['colors', 'blue'], ['collection', 'classic']))
      .toEqual([products[2]]);
  })
})