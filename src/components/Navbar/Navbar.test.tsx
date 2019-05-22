import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

describe('<Navbar />', (): void => {
    it('renders without crashing', (): void => {
        const container = document.createElement('div');
        ReactDOM.render(<Navbar />, container);
        ReactDOM.unmountComponentAtNode(container);
    });
});
