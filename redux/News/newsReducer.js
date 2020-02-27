import { actionTypes } from '../../constants/actionTypes';

function newsReducer(state = {}, { type, payload}) {
    switch (type) {
        case actionTypes.FAILURE:
            return { ...state, error: true};

        case actionTypes.LOAD_NEWS_SUCCESS:
            return { ...state,  error: false, news: [...payload]};

        case actionTypes.CHANGE_LOADING_STATE:
            return { ...state, loading: payload};

        default:
            return state
    }
}

export default newsReducer;