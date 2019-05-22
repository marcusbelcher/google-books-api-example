import React from 'react';
import Gears from '../Gears';
import Styles from './Home.module.scss';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';

const Home: React.FC = (): JSX.Element => {
    return (
        <div className={Styles.container}>
            <div>
                <Gears />
                <Typography variant="h6" gutterBottom>
                    Template project
                </Typography>
                <Typography variant="body1">
                    A simple scaffolded project utilising common frameworks.
                    <BuildIcon />
                </Typography>
            </div>
        </div>
    );
};

export default Home;
