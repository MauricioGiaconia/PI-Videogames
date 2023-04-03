require('dotenv').config();
const { Genres, Platforms, Stores, Developers } = require('../db');

const axios = require('axios');

const { API_KEY } = process.env;

const pushAllStores = async() =>{
    try {
       
        const response = await axios.get(`https://api.rawg.io/api/stores?key=${API_KEY}`)
 
        const names = response.data['results'].map((store) => {
            return {'name' : store.name};
        });

        Stores.bulkCreate(names, { ignoreDuplicates: true, fields: ['name'] })
                .then(() => {
                    console.log('Stores creadas correctamente');
                })
                .catch((error) => {
                    console.error('Error al crear stores:', error);
                });

    } catch (err) {

        return (`¡Error al traer las stores!`);
    };
}

const pushAllPlatforms = async() =>{

    try {
       
        const response = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
 
        const names = response.data['results'].map((platform) => {
            return {'name' : platform.name};
        });

        Platforms.bulkCreate(names, { ignoreDuplicates: true, fields: ['name'] })
                .then(() => {
                    console.log('Plataformas creadas correctamente');
                })
                .catch((error) => {
                    console.error('Error al crear plataformas:', error);
                });

    } catch (err) {

        return (`¡Error al traer las plataformas!`);
    };
}

const pushAllGenres = async () => {
 
    try {
       
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)

        const names = response.data['results'].map((genre) => {
            return {'name' : genre.name};
        });

        Genres.bulkCreate(names, { ignoreDuplicates: true, fields: ['name'] })
                .then(() => {
                    console.log('Generos creados correctamente');
                })
                .catch((error) => {
                    console.error('Error al crear generos:', error);
                });

    } catch (err) {

        return (`¡Error al traer los generos!`);
    };

}

const pushAllDevelopers = async () => {
    try {
       
        const response = await axios.get(`https://api.rawg.io/api/developers?key=${API_KEY}`)

        const names = response.data['results'].map((genre) => {
            return {'name' : genre.name};
        });

        //Nuevo desarrollador agregado para agregar juegos independites o 
        // juegos que no son AAA
        names.push({name : 'Indie'});

        Developers.bulkCreate(names, { ignoreDuplicates: true, fields: ['name'] })
                .then(() => {
                    console.log('Desarrolladores creados correctamente');
                })
                .catch((error) => {
                    console.error('Error al crear desarrolladores:', error);
                });

    } catch (err) {
       
        return (`¡Error al traer a los desarrolladores!`);
    };
}

module.exports = { pushAllGenres, pushAllPlatforms, pushAllStores, pushAllDevelopers }