import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import faker from 'faker';

const sentence: string = faker.lorem.sentence();

describe('<Layout />', (): void => {
    it('renders without crashing', (): void => {
        const container = document.createElement('div');
        ReactDOM.render(
            <Layout>
                <p>{sentence}</p>
            </Layout>,
            container,
        );
        ReactDOM.unmountComponentAtNode(container);
    });
});
