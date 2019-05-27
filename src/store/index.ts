import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { State, reducer, initialState } from '../reducers';
import thunk from 'redux-thunk';

// TODO Remove any for correct type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = createStore<State, any, any, any>(reducer, initialState, applyMiddleware(thunk, logger));

export default store;
