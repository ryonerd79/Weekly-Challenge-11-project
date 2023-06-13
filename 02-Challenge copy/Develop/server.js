const express = require('express');

const fs = require('fs')

const path = require('path');

const app = express();

const PORT = 3001;

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



app.listen(PORT, () =>
    console.log(`work notes`)
);