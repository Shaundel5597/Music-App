const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "music",
    password: "postgres",
    port: 5432
});

const getArtist = (request, response) => {
    pool.query(`SELECT * FROM artist`, (error, result) => {
        if (error){
            throw error;
        }
        response.status(200).json(result.rows)
    })
}

/*const addArtist = (request, response) => {
    const
}
*/

const getSongs = (request, response) => {
    pool.query(`SELECT * FROM songs`,(error, result) => {
        if(error){
            throw error;
        }
        response.status(200).json(result.rows)
    })
}

const deleteSongsById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(`DELETE FROM songs WHERE id=${id}`, (error, resuslts) => {
        if(error){
            throw error
        }
        response.status(200).json(resuslts.rows)
    })
}

// const updateSongsById = (request, response) => {
//     const
// }
/*const addSongs = (request, response) => {
    const {song_name, artist, duration, play_count, track_listing} = request.body;
    
}
*/

module.exports = {
    getSongs: getSongs,
    getArtist:getArtist,
    deleteSongsById:deleteSongsById
}
    