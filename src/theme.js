import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    typography: {
        h1: {
            color: '#2a2a30'
        },
        h2: {
            color: '#2a2a30'
        },
        h3: {
            color: '#2a2a30'
        },
        h4: {
            color: '#2a2a30'
        },
        h5: {
            color: '#2a2a30'
        },
        h6: {
            color: '#2a2a30'
        },
        subtitle1: {
            color: '#696c7b'
        },
        subtitle2: {
            color: '#696c7b'
        },
        body1: {
            color: '#696c7b'
        },
        body2: {
            color: '#696c7b'
        }        
    },
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: 'ghostwhite',
        },
    },
});

export default theme;
