import { createTheme } from '@mui/material/styles';
import { green, lightGreen } from '@mui/material/colors';



const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: lightGreen[500],
    },
  },
  spacing: 4, 
});



theme.spacing(2); // = 0.25 * 2rem = 0.5rem = 8px




