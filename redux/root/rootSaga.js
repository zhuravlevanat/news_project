import {
    all,
    call,
} from 'redux-saga/effects';
import newsSaga from '../News/saga'

const sagasList = [
    newsSaga,
];

export default function* watchRootSaga() {
    yield all(sagasList.map(saga => call(saga)));
}