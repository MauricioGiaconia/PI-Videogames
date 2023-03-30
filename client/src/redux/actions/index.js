import axios from 'axios';

export const GET_GAMES = 'GET_GAMES';
export const SET_ERROR = 'SET_ERROR';

const url = 'http://localhost:3001';

export const getGames = (xUrl = `${url}/videogames`) => {

    return (async function (dispatch) {

        try{
            const response = await axios.get(`${xUrl}`);

            console.log('hola ', response.data);


            return dispatch({ type: GET_GAMES, payload: { games: response.data} });
            

           
        } catch (err){
            
  
           return dispatch({ type: SET_ERROR, payload:  {error: err.response.status, message: err.response.data['message']} });
        }


    })
}