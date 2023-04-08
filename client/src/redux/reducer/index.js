const {GET_GAMES, GET_GENRES, GET_PLATFORMS,
        GET_DEVELOPERS, GET_STORES, GET_GAME,
        SET_ERROR, RESET_GAMES, SEARCH_NAME,
        SORT_ORDER_NAME} = require('../actions/index');

const initialState = {
    games : [],
    auxGames : [],
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
            return {...state, games: payload.games, auxGames: payload.games};
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
        case RESET_GAMES:
            return {...state, games: state.auxGames}
        case SET_ERROR:
            return {...state, error: {error: payload.error, message: payload.message}};
        case SEARCH_NAME:
            return {...state, games: state.games.filter(game => game.name.toLowerCase().includes(payload.toLowerCase()))}
        case SORT_ORDER_NAME:
            if (payload === 'ASC'){
                
                return {...state, games: state.games.sort((a,b) =>{
                    return (a.name < b.name ) ? 1 : -1;
                }).filter(game => game.name.toLowerCase().includes(''))}
            } 
                
            return {...state, games: state.games.sort((a,b) =>{
                return (a.name > b.name ) ? 1 : -1;
            }).filter(game => game.name.toLowerCase().includes(''))}
            
            
            
            
        default: return {...state};
    }
};

export default rootReducer;
