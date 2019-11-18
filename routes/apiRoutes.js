// Routes
// root route returns index.html
module.exports = function(app) {

    // routes to return db.json file constaining notes
    app.post("/api/notes", function(req, res) {
        console.log("in /api/notes post route");
    // req.body hosts is equal to the JSON post sent from the user

        const newNote = req.body;
        console.log(newNote);

    //display the JSON to the users
    // res.json(allNote);
    // storeReservations(newReservation);
    });

    // route to delete note (specific by id)
    app.delete("/api/notes/:id", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user

        console.log("in /api/notes:id delete route");
        const newNote = req.body;
        console.log(newNote);

    //display the JSON to the users
    // res.json(allNote);
    // storeReservations(newReservation);
    });

}