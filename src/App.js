import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/shared/NotFound';
import Contact from './pages/contact/Contact';
import History from './components/history/History';
import Wine from './components/wine/Wine';
import React from 'react';
import './index.css';
import Home from './pages/home/Home';
import './services/i18n';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

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
