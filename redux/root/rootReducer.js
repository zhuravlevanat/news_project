import { combineReducers } from 'redux';
import categoryDataReducer from '../Categories/categoryDataReducer';
import newsDataReducer from '../News/newsReducer';

const rootReducer = combineReducers({
    categoryData: categoryDataReducer,
    newsData: newsDataReducer,
});

export default rootReducer;