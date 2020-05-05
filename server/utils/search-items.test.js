const searchItems = require('./search-items');

describe('searchItems', () => {

  test('should return arr', () => {
    expect(searchItems('', [])).toBeInstanceOf(Array);
  })

  test('should return all matched value', () => {
    const arr = [
      {
        name: 'First name'
      },
      {
        name: 'Second name'
      }
    ];

    expect(searchItems('First', arr)).toEqual([arr[0]]);
    expect(searchItems('name', arr)).toEqual(arr);
    expect(searchItems('', arr)).toEqual(arr);
  })

  test('must be case insensitive', () => {
    const arr = [
      {
        name: 'First name'
      },
      {
        name: 'Second name'
      }
    ];

    expect(searchItems('FIRST', arr)).toEqual([arr[0]]);
    expect(searchItems('first', arr)).toEqual([arr[0]]);
    expect(searchItems('fIrSt', arr)).toEqual([arr[0]]);
  })
})