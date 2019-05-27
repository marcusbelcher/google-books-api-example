import React from 'react';
import Styles from './Navbar.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Component: React.FC = (): JSX.Element => {
    return (
        <header className={Styles.container}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={Styles.grow}>
                        Book Search{' '}
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    );
};
export default Component;
