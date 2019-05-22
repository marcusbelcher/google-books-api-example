import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Layout from '../Layout';
import theme from './theme';

const App: React.FC = (): JSX.Element => {
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </MuiThemeProvider>
    );
};

export default App;
