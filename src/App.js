import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import 'src/services/theme';
import './App.css';
import './index.css';
import './services/i18n';
import 'src/services/theme';
import router from './services/router';
import theme from 'src/services/theme';


function App() {
  return (

    <CssVarsProvider theme={theme}>
      <div>
      <RouterProvider router={router} />
      </div>
    </CssVarsProvider>
  )
}

export default App;