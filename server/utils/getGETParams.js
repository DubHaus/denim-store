const getGETParams = (str, ...keys) => {
  const data = {};
  str = decodeURI(str);

  keys.forEach(el => {
    const regExp = new RegExp(`\\?${el}=([^&\\?]*)|&${el}=([^&\\?]*)`);
    const dataEl = str.match(regExp);
    if (dataEl) {
      data[el] = dataEl[1] || dataEl[2] ? dataEl[1] ? dataEl[1] : dataEl[2] : '';
    }else data[el] = '';
  });

  return data;
}

module.exports = getGETParams;