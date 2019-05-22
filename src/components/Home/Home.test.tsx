import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

describe('<Home />', (): void => {
    it('renders without crashing', (): void => {
        const container = document.createElement('div');
        ReactDOM.render(<Home />, container);
        ReactDOM.unmountComponentAtNode(container);
    });
});
