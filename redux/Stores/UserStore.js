import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from '../Reducers/RootReducer'
import createSagaMiddleware from 'redux-saga';
//import { createLogger } from 'redux-logger'
import logger from 'redux-logger'

// const logger = createLogger({
//     predicate: () => true,
//     diff: true,
//     duration: true,
// });

import RootSaga from '../Saga/RootSaga';

const saga = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(saga, logger));

saga.run(RootSaga);

export default store;