import { select, put, takeEvery } from "redux-saga/effects";
import { getCurrentCategory } from "../Categories/selector";
import { failure, loadNewsSuccess } from "./actions";
import { actionTypes } from "../../constants/actionTypes";
import { getApiRequest } from "../services/apiRequest";

function* loadNewsSaga() {
    const currentCategory = yield select(state => getCurrentCategory(state));
    try {
        const { articles } = yield getApiRequest(currentCategory);
        yield put(loadNewsSuccess(articles));
    } catch (err) {
        yield put(failure(err));
    }
}

function* newsWatcher() {
    yield takeEvery(actionTypes.LOAD_NEWS, loadNewsSaga);
}

export default newsWatcher;