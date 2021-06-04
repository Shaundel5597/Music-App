const express = require('express');
const app = express()
const db = require("./queries.js");
const port = 3030;
const cors = require('cors');

app.use(cors());
app.use(express.json())

// app.get('/album', db.getAlbum);
// app.post('/album', db.getAlbum);

app.get('/artist', db.getArtist);
app.post('/artist', db.getArtist);

app.get('/songs', db.getSongs);
app.post('/songs', db.getSongs);

app.delete('/songs/:id', db.deleteSongsById)

// app.put("/songs/:id", db.updateSongsById)

// app.get('/genre', db.getMusic);
// app.post('/genre', db.getMusic);

app.listen(port, () => {
    console.log(`SERVER RUNNING . . . on port ${port}`);
})