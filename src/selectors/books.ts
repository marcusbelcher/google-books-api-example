import * as Global from '../reducers';
import * as Books from '../reducers/books';
import { createSelector } from 'reselect';
import Book from 'types/Book';

const getBooksState = (state: Global.State): Books.State => state.books;

export const getBooks = createSelector(
    [getBooksState],
    (state: Books.State): Book[] => {
        return state.data;
    },
);

export const isFetching = createSelector(
    [getBooksState],
    (state: Books.State): boolean => {
        return state.isFetching;
    },
);

export const hasData = createSelector(
    [getBooksState],
    (state: Books.State): boolean => {
        return state.hasData;
    },
);

export const getQuery = createSelector(
    [getBooksState],
    (state: Books.State): string => {
        return state.query;
    },
);
