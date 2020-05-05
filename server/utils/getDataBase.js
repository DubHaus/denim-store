const fs = require('fs');
const path = require('path');

const getDataBase = () => {
  const dataFile = fs.readFileSync(path.join(__dirname, '../database.json'));
  const dataBase = JSON.parse(dataFile);
  return dataBase;
}

module.exports = getDataBase;