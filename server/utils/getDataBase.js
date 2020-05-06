const fs = require('fs');

const getDataBase = () => {
  const dataFile = fs.readFileSync('server/database.json');
  const dataBase = JSON.parse(dataFile);
  return dataBase;
}

module.exports = getDataBase;