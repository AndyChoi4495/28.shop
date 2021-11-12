const fs = require('fs-extra');
const path = require('path');
const {
  findChildId
} = require('./modules/util');
const [jsonFile] = fs.readJsonSync(path.join(__dirname, './json/tree.json'));
console.log(jsonFile);
const cateIds = findChildId(jsonFile, []);

console.log(cateIds);