import { actionTypes } from '../../constants/actionTypes';

function categoryDataReducer(state = {}, { type, payload }) {
    switch (type) {
       case actionTypes.ADD_CURRENT_CATEGORY:
            return { ...state, currentCategory: payload };
        case actionTypes.ADD_NEW_CATEGORY:
            return { ...state, newCategory: payload };
        case actionTypes.LOAD_CATEGORIES:
            return { ...state, categories: payload };
        case actionTypes.ADD_CATEGORY_IN_LIST:
            return { ...state, categories: [...state.categories, payload]};
        default:
            return state
    }
}

export default categoryDataReducer