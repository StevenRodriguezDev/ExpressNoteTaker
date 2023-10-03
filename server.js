//dependencies
const express = require('express');
const path = require('path');
const uuid = require('./helpers/uuid');
const fsUtils = require('./helpers/fsUtils');
const dbDAta = require('./db/db.json')
const PORT = process.env.PORT || 3001;
const app = express();
//set up 

//middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


//html routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
  });

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});


//api routes
app.get('/api/notes', (req, res) => {
//api responible for reading existing note 
  fsUtils.readFromFile('./db/db.json').then((data) => {
    res.json(JSON.parse(data))
  })
});

// //
app.post('/api/notes', (req, res) => {
const { title, text } = req.body;
const userNote = {
    title: title,
    text: text,
    id: uuid(),
};

fsUtils.readAndAppend(userNote, "./db/db.json");
  console.log(userNote);
  res.json("YAY Note is added!");
});



// server
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

