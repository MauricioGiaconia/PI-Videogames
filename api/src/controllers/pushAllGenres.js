require('dotenv').config();
const { Genres } = require('../db');

const axios = require('axios');

const { API_KEY } = process.env;

const pushAllGenres = async () => {
 
    try {
       
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
 
        for (let i = 0; i < response.data['results'].length; i++) {

            try{

                
                let obj = await Genres.findOne({ where: { name: response.data['results'][i].name } });
                
                if (!obj){
                    
                    await Genres.create({ name: response.data['results'][i].name, createAt : null, updatedAt : null });
                }
            } catch (err){
                console.log(err);
            }
         
           
           

           
        }

    } catch (err) {

        return (`¡Error al traer los generos!`);
    };

}

module.exports = { pushAllGenres }