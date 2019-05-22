import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

describe('<Footer />', (): void => {
    it('renders without crashing', (): void => {
        const container = document.createElement('div');
        ReactDOM.render(<Footer />, container);
        ReactDOM.unmountComponentAtNode(container);
    });
});
