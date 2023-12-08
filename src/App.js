
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NotFound from './pages/not-found/NotFound';
import Contact from './pages/contact/Contact';
import History from './pages/history/History';
import { Suspense } from 'react';
import AppLayout from './layouts/AppLayout';
import AppLayoutNoFooter from './layouts/AppLayoutNoFooter';
import React from 'react';
import './index.css';
import Home from './pages/home/Home';

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

