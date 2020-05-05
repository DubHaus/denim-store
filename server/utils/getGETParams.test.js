const getGETParams = require('./getGETParams');

describe('backEnd: getGETParams', () => {

  test('should return obj', () => {
    expect(getGETParams()).toBeInstanceOf(Object);
  })

  test('should return obj with the same keys that were in the call', () => {
    const params = ['param1', 'param2'];
    expect(getGETParams('', ...params)).toEqual({ param1: '', param2: '' })
  })

  test('should return params value from string', () => {
    const params = ["sourceid", "ie", "name"];
    const string = "https://www.google.com/search?sourceid=chrome&ie=UTF-8&name=Levi's";
    const exprectResult = {
      [params[0]]: 'chrome',
      [params[1]]: 'UTF-8',
      [params[2]]: "Levi's"
    }

    expect(getGETParams(string, ...params)).toEqual(exprectResult);
  })
})