import {
    ACTION_SET_USERS,
    ACTION_SET_USERNAME,
    ACTION_SET_USER_LOADING,
    ACTION_ADD_FAVORITE,
    ACTION_REMOVE_FAVORITE
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

export function addFavorite(user) {
    return {
        type: ACTION_ADD_FAVORITE,
        user
    }
}

export function removeFavorite(user) {
    return {
        type: ACTION_REMOVE_FAVORITE,
        user
    }
}