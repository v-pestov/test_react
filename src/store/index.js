
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { state } from './root-reducer';
import watchRequestVideo from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = process.env.NODE_ENV === 'development' ? 
  composeWithDevTools(applyMiddleware(sagaMiddleware)) : 
  applyMiddleware(sagaMiddleware);

const store = createStore(state, middleware);

sagaMiddleware.run(watchRequestVideo);

export default store;
