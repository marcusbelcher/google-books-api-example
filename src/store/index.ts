import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { State, reducer, initialState } from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore<State, any, any, any>(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
