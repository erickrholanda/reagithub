import {
    ACTION_SET_USERS,
    ACTION_SET_USERNAME,
    ACTION_SET_USER_LOADING,
    ACTION_ADD_FAVORITE,
    ACTION_REMOVE_FAVORITE
} from './constants';

import { combineReducers } from 'redux';
let favorites = localStorage.getItem('users.favorites');
if (favorites) {
    favorites = JSON.parse(favorites);
}
else {
    favorites =  [];
}
const initialState = {
    data: [],
    favorites,
    username: '',
    loading: false,
}
export const userReducer = ( state = initialState, action) => {
    let favorites;
    switch (action.type) {
        case ACTION_SET_USERS:
            return {
                ...state,
                data: action.data
            }

        case ACTION_SET_USERNAME:
            return {
                ...state,
                username: action.username
            }

        case ACTION_SET_USER_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case ACTION_ADD_FAVORITE:
            favorites = [...state.favorites, action.user];
            localStorage.setItem('users.favorites', JSON.stringify(favorites));
            return {
                ...state,
                favorites
            }

        case ACTION_REMOVE_FAVORITE:
            favorites = state.favorites.filter(favorite => action.user.id !== favorite.id);
            localStorage.setItem('users.favorites', JSON.stringify(favorites));
            return {
                ...state,
                favorites
            }

        default:
            return state;

    }
};

const reducers = combineReducers({
    users: userReducer
})

export default reducers;