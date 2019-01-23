import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    palette: {
        primary: grey,
        secondary: grey,
        error: red,
        constrastThreshold: 3,
        tonalOffset: 0.2
    },
    flex: ( justifyContent = 'center', alignItems = 'center') => ({
        display: 'flex',
        justifyContent,
        alignItems,
    }),
})

ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>
    </Router>
, document.getElementById('root'));
