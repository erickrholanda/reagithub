import {
    ACTION_SET_USERS,
    ACTION_SET_USERNAME,
    ACTION_SET_USER_LOADING
} from './constants';

export function setUsers(data) {
    return {
        type: ACTION_SET_USERS,
        data
    }
}

export function setUserLoading(loading) {
    return {
        type: ACTION_SET_USER_LOADING,
        loading
    }
}

export function setUsername(username) {
    return {
        type: ACTION_SET_USERNAME,
        username
    }
}