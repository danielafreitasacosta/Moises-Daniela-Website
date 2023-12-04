import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/shared/NotFound';
import Contact from './pages/contact/Contact';
import History from './pages/history/History';
import Visitas from './pages/visitas/Visitas';
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
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
