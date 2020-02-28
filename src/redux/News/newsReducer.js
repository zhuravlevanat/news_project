import { actionTypes } from '../../constants/actionTypes';

function newsReducer(state = {}, { type, payload}) {
    switch (type) {
        case actionTypes.FAILURE:
            return { ...state, error: true, loading: false};
        case actionTypes.LOAD_NEWS:
            return { ...state, loading: true};
        case actionTypes.LOAD_NEWS_SUCCESS:
            return { ...state,  error: false, news: [...payload], loading: false};
        default:
            return state
    }
}

export default newsReducer;