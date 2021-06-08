import * as actionTypes from '../actions/actionTypes';

const initialState = {
    apitoken: "",
    users:[],
    payments:[],
    clientData:[],
    filters:[],
    price:[],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_APITOKEN:
            return {
                ...state,
                apitoken: action.apitoken
            };
        case actionTypes.GOT_ALL_USERS:
            return{
                ...state,
                users: action.users
            };
        case actionTypes.GOT_PAYMENTS:
            return{
                ...state,
                payments: action.payments
            };
        case actionTypes.GOT_CLIENT:
            return{
                ...state,
                clientData: action.clientData
            };
        case actionTypes.GOT_PRICE:
            return{
                ...state,
                price: action.price
            };
        case actionTypes.GOT_FILTERS:
            return{
                ...state,
                filters: action.filters
            };
        default:
            return state;
    }
};

export default reducer;
