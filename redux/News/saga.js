import { select, put, takeEvery } from 'redux-saga/effects';
import { getCurrentCategory } from '../Categories/selector';
import {changeLoadingState, failure, loadNewsSuccess} from './actions';
import { actionTypes } from '../../constants/actionTypes';

function* loadNewsSaga() {
    const currentCategory = yield select(state => getCurrentCategory(state));
    try {
        const res = yield fetch(`http://newsapi.org/v2/everything?q=${currentCategory}&apiKey=a34900e46a5f4b999e43deb5f1931cc6`);
        const data = yield res.json();
        if (data.status === 'ok') {
            yield put(loadNewsSuccess(data.articles));
            yield put(changeLoadingState(false));
        } else {
            console.log('err', data.message);
            throw new Error(data.message);
        }
    } catch (err) {
        yield put(changeLoadingState(false));
        yield put(failure(err));


    }
}

function* newsWatcher() {
    yield takeEvery(actionTypes.LOAD_NEWS, loadNewsSaga);
}

export default newsWatcher;