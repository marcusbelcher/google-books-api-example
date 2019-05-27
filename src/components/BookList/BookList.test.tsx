import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './BookList';
import { Provider } from 'react-redux';
import store from 'store';

describe('<BookList />', (): void => {
    it('renders without crashing', (): void => {
        const container = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
                <BookList />
            </Provider>,
            container,
        );
        ReactDOM.unmountComponentAtNode(container);
    });
});
