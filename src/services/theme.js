
import { green, grey, pink } from '@mui/material/colors';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
  } from '@mui/material/styles';

  const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: green[600],
                },
            },
        },

        dark: {
            palette: {
                primary: {
                    main: pink[400],
                }, 
                secondary: {
                    main: '#000'
                },
                background: {
                    default: pink[900],
                    paper: pink[200],
                },
                text: {
                    primary: '#000', 
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