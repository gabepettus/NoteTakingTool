var path = require("path");
// Routes
module.exports = function(app) {
    // return notes.html file
    app.get("/notes", function(req, res) {
        console.log("in /notes get route pub dir");
        res.sendFile(path.join(`${__dirname}/../public`, "notes.html"));
    });

    app.get("/", function(req, res) {
        console.log("in * get route");
        res.sendFile(path.join(`${__dirname}/../public`, "index.html"));
    });

}