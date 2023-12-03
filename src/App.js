import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/shared/NotFound';
import Contact from './pages/contact/Contact';
import Pricing from './pages/visitas/Visitas';
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
    path: '/pricing',
    element: <Pricing />
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


/*function App() {
  return (
    <div className="App">
      <h1>React Image Grid</h1>
      <Home />
    </div>
  );
}*/


export default App;
