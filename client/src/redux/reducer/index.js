const {GET_GAMES, GET_GENRES, GET_PLATFORMS,GET_DEVELOPERS, SET_ERROR} = require('../actions/index');

const initialState = {
    games : [],
    genres : [],
    platforms : [],
    developers : [],
    gamesPerPage : 15,
    error: {
        error: '',
        message: ''
    }

}

const rootReducer = (state = initialState, {type, payload}) => { 
   
    switch(type){     

        case GET_GAMES:
            return {...state, games: payload.games};
        case GET_GENRES:
            return {...state, genres: payload.genres};
        case GET_PLATFORMS:
            return {...state, platforms: payload.platforms};
        case GET_DEVELOPERS:
            return {...state, developers: payload.developers};
        case SET_ERROR:
            return {...state, error: {error: payload.error, message: payload.message}};
            
        default: return {...state};
    }
};

export default rootReducer;
