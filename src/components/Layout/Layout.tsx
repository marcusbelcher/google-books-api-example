import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export interface Props {
    children: ReactNode;
}

const Component: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <React.Fragment>
            <Navbar />
            <section>{props.children}</section>
            <Footer />
        </React.Fragment>
    );
};

export default Component;
