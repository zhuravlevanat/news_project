import { actionTypes } from '../../constants/actionTypes'

export function failure() {
    return {
        type: actionTypes.FAILURE,
    }
}

export function loadNews() {
    return {
        type: actionTypes.LOAD_NEWS
    }
}

export function loadNewsSuccess(data) {
    return {
        type: actionTypes.LOAD_NEWS_SUCCESS,
        payload: data,
    }
}

