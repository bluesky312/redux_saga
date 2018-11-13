import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, createStore} from 'redux'
import reducers from './reducers'
import handleNewMessage from './sagas'

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    // applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run(handleNewMessage);

export default store;