
import { ThemeProvider } from '@emotion/react';
import { green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'src/services/theme';
import './App.css';
import NotFound from './components/shared/NotFound';
import './index.css';
import Contact from './pages/contact/Contact';
import History from './pages/history/History';
import Home from './pages/home/Home';
import Visitas from './pages/visitas/Visitas';
import Wine from './pages/wine/Wine';
import './services/i18n';


const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/visitas',
    element: <Visitas />
  },
  {
    path: '/history',

    element: <History />
  },
  {
    path: '/wine',
    element: <Wine />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return (

    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;