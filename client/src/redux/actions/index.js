import axios from 'axios';

export const GET_GAMES = 'GET_GAMES';
export const GET_GENRES = 'GET_GENRES';
export const GET_DEVELOPERS = 'GET_DEVELOPERS';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const SET_ERROR = 'SET_ERROR';


const url = 'http://localhost:3001';

export const getGames = (xUrl = `${url}/videogames`) => {

    return (async function (dispatch){

        try{
            const response = await axios.get(`${xUrl}`);

            return dispatch({ type: GET_GAMES, payload: { games: response.data} });
                  
        } catch (err){
            
  
           return dispatch({ type: SET_ERROR, payload:  {error: err.response.status, message: err.response.data['message']} });
        }


    })
}

export const getGenres = () =>{
    return (async function (dispatch){
        try{

            const response = await axios.get(url + '/genres');

            return dispatch({type: GET_GENRES, payload: {genres : response.data}});

        } catch(err){
            return dispatch({type: SET_ERROR, payload: {error: err.response.status, message: err.response.data['message']}})
        }
    });
}

export const getPlatforms = () =>{
    return (async function (dispatch){
        try{

            const response = await axios.get(url + '/platforms');

            return dispatch({type: GET_PLATFORMS, payload: {platforms : response.data}});

        } catch(err){
            return dispatch({type: SET_ERROR, payload: {error: err.response.status, message: err.response.data['message']}})
        }
    });
}

export const getDevelopers = () =>{
    return (async function (dispatch){
        try{

            const response = await axios.get(url + '/developers');

            return dispatch({type: GET_DEVELOPERS, payload: {developers : response.data}});

        } catch(err){
            return dispatch({type: SET_ERROR, payload: {error: err.response.status, message: err.response.data['message']}})
        }
    });
}