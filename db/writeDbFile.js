const fs = require("fs")

const filename = "./db/db.json";

module.exports = (filename, data) => {
    fs.writeFile(filename, data, function(err) {
      console.log("in write:",data);
      if (err) console.log(err);
      console.log("File written successfully");
    });
  };