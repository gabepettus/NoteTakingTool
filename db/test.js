const fs = require("fs");

// const filename = "./db/db.json";
const filename = "./db.json";

const encoding = "utf8"
function readFileAsync(path, encoding) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, encoding, function(err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

async function returnFile() {
  const output = await readFileAsync(filename, encoding);
  return output;
}

async function init() {
 const a = await returnFile();
 console.log("a",a);
}

init();