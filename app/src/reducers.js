import {
    ACTION_SET_USERS,
    ACTION_SET_USERNAME,
    ACTION_SET_USER_LOADING
} from './constants';

import { combineReducers } from 'redux';

const initialState = {
    data: [],
    username: '',
    loading: false,
}
export const userReducer = ( state = initialState, action) => {
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

        default:
            return state;

    }
};

const reducers = combineReducers({
    users: userReducer
})

export default reducers;