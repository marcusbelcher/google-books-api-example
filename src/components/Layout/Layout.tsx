import React, { ReactNode } from 'react';
import Navbar from '../Navbar';

export interface Props {
    children: ReactNode;
}

const Component: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <React.Fragment>
            <Navbar />
            <section>{props.children}</section>
        </React.Fragment>
    );
};

export default Component;
