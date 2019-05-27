/* eslint-disable @typescript-eslint/no-explicit-any */
import Book from 'types/Book';
import BookAPI from 'shared/services/api/google-books';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const api = new BookAPI(process.env.GOOGLE_BOOKS_API_KEY);

export enum ActionTypes {
    FETCHING = '[books] FETCHING',
    FETCHED = '[books] FETCHED',
}

interface Fetching {
    type: ActionTypes.FETCHING;
    payload: { query: string };
}

interface Fetched {
    type: ActionTypes.FETCHED;
    payload: { data: Book[] };
}

const fetched = (data: Book[]): Fetched => {
    return {
        type: ActionTypes.FETCHED,
        payload: {
            data,
        },
    };
};

const fetching = (query: string): Fetching => {
    return {
        type: ActionTypes.FETCHING,
        payload: {
            query,
        },
    };
};

// External method for fetching results
export const fetch = (query: string): ThunkAction<void, {}, {}, AnyAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
        dispatch(fetching(query));
        if (query.length > 0) {
            api.search(query)
                .then(
                    (data: Book[]): void => {
                        dispatch(fetched(data));
                    },
                )
                .catch(
                    (): void => {
                        dispatch(fetched([]));
                    },
                );
        } else {
            dispatch(fetched([]));
        }
    };
};

export type Action = Fetching | Fetched;
