require('dotenv').config();

const {Videogames, VideogameGenres, Genres } = require('../db');
const axios = require('axios');
const {API_KEY} = process.env;

const getGame = async(req, res) => {


    try{
     
        const id = req.query.id;

        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
                    
        res.status(200);
        return res.json(response.data);
        
    } catch(err){
        res.status(404);
        return res.json({
                error : err,
                message :`¡Error al traer el juego!`
        });
    };

   
}

module.exports = {getGame}