
import { ListItem } from '@mui/material';
import { green, grey, pink } from '@mui/material/colors';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import { NavLink } from 'react-router-dom';



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
            /*:action: {
                active: green[200],
                activeOpacity: 1,
                hover: green[100],
                hoverOpacity: 0.7,
                focus: green[600],
                focusOpacity: 1,
                selected: green[300],
                selectedOpacity: 1
              },
              */
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
                    paper: grey[600],
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