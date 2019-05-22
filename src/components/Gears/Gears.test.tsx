import React from 'react';
import ReactDOM from 'react-dom';
import Gears from './Gears';

describe('<Gears />', (): void => {
    it('renders without crashing', (): void => {
        const container = document.createElement('div');
        ReactDOM.render(<Gears />, container);
        ReactDOM.unmountComponentAtNode(container);
    });
});
