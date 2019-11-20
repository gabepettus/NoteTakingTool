const fs = require("fs");
const path = require("path");

// const filename = "./db/db.json";
const filename = "./db.json";

function dbfile(db) { 
  fs.writeFileSync(path.join(__dirname, filename),JSON.stringify(db),(err, data) => { if (err) throw err; } ); 
}

module.exports = dbfile;

/*fs.readFileSync(path.join(__dirname, filename),(err, data) => {
     if (err) throw err;
});

const dbfile = JSON.parse(fs.readFileSync(path.join(__dirname, filename),(err, data) => {
     if (err) throw err;
}));

module.exports = dbfile;
function goat(filename, data) => {
    fs.writeFile(filename, data, function(err) {
      console.log("in write:",data);
      if (err) console.log(err);
      console.log("File written successfully");
    });
  };
*/