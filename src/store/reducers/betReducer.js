import * as actionTypes from '../actions/actionTypes';

const initialState = {
    bookmarks: [],
    sports: [],
    allarbs:{},
    allbets:[]
};

const reducer = (state = initialState, action) => {
    console.log(action.allbets)
    switch (action.type) {
        case actionTypes.GOT_ALL_BOOKMARKS:
            return {
                ...state,
                bookmarks: action.bookmarks
            };
        case actionTypes.GOT_ALL_SPORTS: {
            return {
                ...state,
                sports: action.sports
            }
        }
        case actionTypes.GOT_ALL_ARBS:{
            return{
                ...state,
                allarbs:action.allarbs
            }
        }
        case actionTypes.GOT_ALL_BETS:{
            return{
                ...state,
                allbets:action.allbets
            }
        }
        default:
            return state;
    }
};

export default reducer;
