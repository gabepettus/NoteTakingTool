const fs = require("fs");
const path = require('path');
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
    // req.body hosts is equal to the JSON post sent from the user

        const newNote = req.body;
        console.log("nn",newNote);
        // req.json(newNote);
        // readFile here
        // fake data, currentNotes should be the results of the read function
        // let db = [{"title":"canned read Title","text":"this is a canned note for the read value in the write endpoint"},{"title":"some Crap","text":"crappy text"}]  
        let db = readDb;

        db.push(newNote); 
        console.log("merged",db);

        /*
        const allNotes = fs.writeFileSync(path.join(__dirname, "../db/db.json"),(err, JSON.stringify(db) ) => {
          if (err) throw err;
        });
        */
        // const allNotes = fs.writeFileSync(path.join(__dirname, "../db/db.json"),JSON.stringify(db) );
        writeDb(db);

       //display the JSON to the users
       res.json(db);
    });

    // route to delete note (specific by id)
    app.delete("/api/notes/:id", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user

        console.log("in /api/notes:id delete route");
        const newNote = req.body;
        console.log(" delete Note",newNote);

    //display the JSON to the users
    // res.json(allNote);
    // storeReservations(newReservation);
    });

}