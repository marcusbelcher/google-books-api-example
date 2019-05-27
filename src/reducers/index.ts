import { combineReducers } from 'redux';
import * as fromBooks from './books';

export interface State {
    books: fromBooks.State;
}

/*
 * initialState of the app
 */
export const initialState: State = {
    books: fromBooks.initialState,
};

/*
 * Root reducer of the app
 */
export const reducer = combineReducers<State>({
    books: fromBooks.reducer,
});
