import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('<App />', (): void => {
    it('renders without crashing', (): void => {
        const container = document.createElement('div');
        ReactDOM.render(<App />, container);
        ReactDOM.unmountComponentAtNode(container);
    });
});
