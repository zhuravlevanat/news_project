import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#19857b',
        },
        secondary: {
            main: '#f2f3f4',
        },
        info: {
            main: '#232223',
        },
        error: {
            main: red.A400,
        },

        background: {
            default: '#fff',
        },
    },

    typography: {
        fontSize: 14,
        fontFamily: 'Roboto, Arial',
        h4: {
            fontWeight: 'bold',
            textAlign: 'center',
        },
        h6: {
            verticalAlign: 'center',
            textAlign: 'center',
        }
    }

});

export default theme;