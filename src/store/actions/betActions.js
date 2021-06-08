import * as actionTypes from './actionTypes';

import axios from 'axios';

const options = () => {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        baseURL:'http://localhost:5000'
        //baseURL:'http://betbetter.fun'
    };
};

export const getAllBookmarks = () => {
    return dispatch => { 
        axios.post(`/api/bets/bookmarks`, '', {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;
            
            localStorage.setItem('AllBookmarks', JSON.stringify(res.bookmarks));
            dispatch({ type: actionTypes.GOT_ALL_BOOKMARKS, bookmarks: res.bookmarks })
        });
    }
};

export const getAllSports = () => {
    return dispatch => {
        axios.post(`/api/bets/sports`, '', {
            headers: {
                'Content-Type': 'application/json'
            },
            baseURL:'http://localhost:5000'
            //baseURL:'http://betbetter.fun'
        })
        .then(res => {
            res = res.data;

            localStorage.setItem('AllSports', JSON.stringify(res.sports));
            dispatch({ type: actionTypes.GOT_ALL_SPORTS, sports: res.sports })
        });
    };
};

export const setAllArbs = (data) => {
    console.log(data)
    return dispatch => {
        dispatch({ type: actionTypes.GOT_ALL_ARBS, allarbs: data.arbs })
    };
};

export const setAllBets = (data) => {
    console.log(data)
    return dispatch => {
        dispatch({ type: actionTypes.GOT_ALL_BETS, allbets: data.bets })
    };
};