const express = require('express');

const fs = require('fs')

const path = require('path');

const uuid = require('./helpers/uuid');

const app = express();

const PORT = 3001;

let savedNotes =  JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

let newNote = req.body;

savedNotes.push(newNote);

app.use(express.json());
app.use(express.static('public'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => 
 fs.readFile('./db/db.json', 'utf-8', (err, data) => res.send(data))
)

app.get('*', (req, res) => 
  res.sendFile(path.join(_dirname, 'public/index.html'))

)

app.post('/api/notes', (req, res) =>
 res.readFile('./db/db.json', 'utf-8',  ))
 fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
 console.log("A new note has been saved: ", newNote);
 res.json(savedNotes);

 app.post('/api/notes', (req, res) => {
  req.body 
  res.json(req.body);
 })


app.listen(PORT, () =>
    console.log(`work notes`)
);