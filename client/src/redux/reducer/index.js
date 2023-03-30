const {GET_GAMES} = require('../actions/index');

const initialState = {
    games : [],
    currentPage : 1,
    gamesPerPage : 15,
    urlPrev : null,
    urlNext : null
}

const rootReducer = (state = initialState, {type, payload}) => { 
   
    switch(type){     

        case GET_GAMES:
            return {...state, games: payload.games, urlPrev : payload.urlPrev, urlNext : payload.urlNext}
            
        default: return {...state};
    }
};

export default rootReducer;
