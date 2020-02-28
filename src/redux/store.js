import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root/rootReducer';
import rootSaga from './root/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const initState = {
    categoryData: {
        categories: [],
        currentCategory: 'today',
        newCategory: '',
    },
    newsData: {
        news: [],
        loading: false,
        error: false,
    },
}

function configureStore(initialState = initState) {
    const isServer = typeof window === 'undefined';
    const middleware = isServer || ['production', 'test'].includes(process.env.NODE_ENV)
        ? applyMiddleware(sagaMiddleware)
        : (window.__REDUX_DEVTOOLS_EXTENSION__
            ? compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__())
            : compose(applyMiddleware(sagaMiddleware)));
    const store = createStore(
        rootReducer,
        initialState,
        middleware,
    );
    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };
    store.runSagaTask();
    return store;
}
export default configureStore
