import { actionTypes } from '../../constants/actionTypes'

export function loadCategories(categories) {
    return {
        type: actionTypes.LOAD_CATEGORIES,
        payload: categories,
    }
}

export function addCurrentCategory(category) {
    return {
        type: actionTypes.ADD_CURRENT_CATEGORY,
        payload: category,
    }
}

export function addNewCategory(category) {
    return {
        type: actionTypes.ADD_NEW_CATEGORY,
        payload: category,
    }
}

export function addCategoryInList(category) {
    return {
        type: actionTypes.ADD_CATEGORY_IN_LIST,
        payload: category,
    }
}


