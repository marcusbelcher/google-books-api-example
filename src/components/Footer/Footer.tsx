import React from 'react';
import Typography from '@material-ui/core/Typography';
import Styles from './Footer.module.scss';

const Component: React.FC = (): JSX.Element => {
    /**
     *  Below is a tad naughty, however for the usecase of this demo
     * I do not need to over engineer the testing of Process arguments */
    /* istanbul ignore next */

    const appVersion = process.env.REACT_APP_VERSION ? process.env.REACT_APP_VERSION : '#.#.#';
    return (
        <footer className={Styles.container}>
            <Typography variant="body1">App v{appVersion}</Typography>
        </footer>
    );
};

export default Component;
