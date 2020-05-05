const getGETPathId = (str) => {
  const regExp = new RegExp('\\/(\\w*)$');
  const id = str.match(regExp)[1];
  return id ? id : undefined;
}

module.exports = getGETPathId;