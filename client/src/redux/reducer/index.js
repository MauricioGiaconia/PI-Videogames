const {GET_GAMES, GET_GENRES, GET_PLATFORMS,GET_DEVELOPERS, GET_STORES, GET_GAME, SET_ERROR} = require('../actions/index');

const initialState = {
    games : [],
    genres : [],
    platforms : [],
    developers : [],
    stores : [],
    gameById : [],
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
        case GET_STORES:
                return {...state, stores: payload.stores};
        case GET_GAME:
            return {...state, gameById: payload.game};
        case SET_ERROR:
            return {...state, error: {error: payload.error, message: payload.message}};
            
        default: return {...state};
    }
};

export default rootReducer;
