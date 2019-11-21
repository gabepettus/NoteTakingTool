const uuidv1 = require('uuid/v1');
const readDb = require('../db/readDbFile');
const writeDb = require('../db/writeDbFile');


// Routes
// root route returns index.html
module.exports = function(app) {

    // routes to return db.json file constaining notes
    app.get("/api/notes", function(req, res) {
      console.log("in /api/notes get route");
      // req.body hosts is equal to the JSON post sent from the user
      
    //   const db = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"),(err, data) => {
        // if (err) throw err;
    //   }));
      
    // console.log("existing Notes outside: ",results);
      const db = readDb;
      console.log("existing Notes outside: ",db);

      res.json(db);
    });

    // routes to return db.json file constaining notes
    app.post("/api/notes", function(req, res) {
       console.log("in /api/notes post route");

       // generate unique id
       const uuid = uuidv1();
       // receive the new note from the webserver
       const newNote = req.body;
       newNote.id = uuid;

       console.log("newnote:",newNote);

       // set variable to gather all data and seed it with data in the file
       let db = readDb;

       // append the newNote data to the variable with the file data
       db.push(newNote); 
       console.log("merged",db);

       // overwrite file
       // calls function exported from file '../db/writeDbFile';
       writeDb(db);

       //display the JSON to the users
       res.json(db);
    });
       /*
       const allNotes = fs.writeFileSync(path.join(__dirname, "../db/db.json"),(err, JSON.stringify(db) ) => {
         if (err) throw err;
       });
       */
       // const allNotes = fs.writeFileSync(path.join(__dirname, "../db/db.json"),JSON.stringify(db) );

    // route to delete note (specific by id)
    app.delete("/api/notes/:id", function(req, res) {

        let db = readDb;

        console.log("in /api/notes:id delete route");
        const deleteId = req.body;
        console.log(" delete Note",deleteId);

        res.json(db);
    });

}