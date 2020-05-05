const fs = require('fs');
const path = require('path');

const dataFile = fs.readFileSync(path.join(__dirname, '../database.json'));
const dataBase = JSON.parse(dataFile);

const refreshDataBase = (...items) => {
  const data = items.reduce((acc, el) => ({ ...acc, ...el }));

  fs.writeFileSync(
    path.join(__dirname, '../database.json'),
    JSON.stringify({ ...dataBase, ...data })
  );
}

module.exports = refreshDataBase;