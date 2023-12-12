
import { green, grey, pink } from '@mui/material/colors';
import {
    experimental_extendTheme as extendTheme
} from '@mui/material/styles';



const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: green[600],
                },
                secondary: {
                    main: green[200],
                }
            },
        },

        dark: {
            palette: {
                primary: {
                    main: pink[400],
                },
                secondary: {
                    main: '#fff'
                },
                background: {
                    default: pink[900],
                    paper: grey[800],
                },
                text: {
                    primary: grey[50],
                    secondary: grey[700],
                },
            },
        },
    },
    typography: {
        fontFamily: 'Montserrat',
        h3: {
            fontWeight: '700',
        },
        h4: {
            fontWeight: '700',
            textTransform: 'uppercase'
        },
    },
});

export default theme; 