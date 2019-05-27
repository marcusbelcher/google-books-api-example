import React from 'react';
import ReactDOM from 'react-dom';
import BookSearch from './BookSearch';
import { Provider } from 'react-redux';
import store from 'store';

describe('<BookSearch />', (): void => {
    it('renders without crashing', (): void => {
        const container = document.createElement('div');
        ReactDOM.render(
            <Provider store={store}>
                <BookSearch />
            </Provider>,
            container,
        );
        ReactDOM.unmountComponentAtNode(container);
    });
});
