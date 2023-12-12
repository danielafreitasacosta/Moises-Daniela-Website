
import { green, grey, pink } from '@mui/material/colors';
import {
    experimental_extendTheme as extendTheme, makeStyles
} from '@mui/material/styles';
import { Link } from '@mui/material';




const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: green[600],
                },
                secondary: {
                    main: green[200],
                },
                background: {
                    defaultChannel: green[700],

                },
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
                    defaultChannel: pink[800],
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
    components: {
        // Aplica los estilos al enlace en todo el proyecto
        MuiLink: {
            styleOverrides: {
                root: {
                    ...Link,
                    fontSize: '1rem',
                    underline: 'none',
                    color: 'primary'
                },
            },
        },
    },
});



export default theme; 