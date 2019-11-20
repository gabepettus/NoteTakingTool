const fs = require("fs");
const path = require("path");
const util = require('util');

// const filename = "./db/db.json";
const filename = "./db.json";
const encoding = "utf8";

// Convert fs.readFile into Promise version of same    
// const readFile = util.promisify(fs.readFile);

function readFileAsync(path, encoding) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, encoding, function(err, data) {
      if (err) {
        return reject("error",err);
      }
      resolve(data);
    });
  });
}

async function output2() { 
  const evan = await readFileAsync(filename, encoding)
  return evan;
  /*
  return await readFileAsync(filename, encoding)
  .then(function(data) {
    console.log("pulled file data in readFileAsync:",data);
  })
  .catch(function(err) {
    console.log(err);
  });
  */
};

/*
async function returnFile() {
  const output = await readFileAsync(filename, encoding);
  retun routput;
}

*/
const goat = async function test() {
  console.log("output",out);
  return await output2();
};

const myout = JSON.parse(fs.readFileSync(path.join(__dirname, filename),(err, data) => {
    if (err) throw err;
}));

module.exports = myout;
// module.exports = {goat,output2,readFileAsync};

let output3 = () => { return [{"title":"mitch","text":"the bitch"},{"title":"some Crap","text":"crappy text"}]; }
// module.exports = output2;