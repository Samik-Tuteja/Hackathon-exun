const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://samik:samik@cluster0.2prrc.mongodb.net/Exun-Hackathon-DB",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

//create a data schema
const notesSchema = {
  username: String,
  email: String,
  password: String,
  confirmPass: String,
};
const Note = mongoose.model("note", notesSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/public/html/about.html");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/public/html/login.html");
});

app.get("/signup", function (req, res) {
  res.sendFile(__dirname + "/public/html/signup.html");
});

app.get("/successful", function (req, res) {
  res.sendFile(__dirname + "/public/html/successful.html");
});
app.use(express.static("public"));

app.post("/signup", function (req, res) {
  let newNote = new Note({
    username: req.body.username,
    email: req.body.email,
    password: req.body.pass,
    confirmPass: req.body.confirmPass,
  });
  newNote.save();
  res.redirect("/successful");
});

app.get("/ok", function (req, res) {
  Note.find({}).exec(function (err, notesSchema) {
    if (err) {
      console.log(err);
    } else {
      res.json(notesSchema);
    }
  });
});

app.listen(3000, function () {
  console.log("server is running on 3000");
});
