
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
<<<<<<< Updated upstream
import './App.css';
import NotFound from './pages/not-found/NotFound';
=======
import Home from './pages/home/Home';
>>>>>>> Stashed changes
import Contact from './pages/contact/Contact';
import Pricing from './pages/pricing/Pricing';
import History from './pages/history/History';
<<<<<<< Updated upstream
import { Suspense } from 'react';
import AppLayout from './layouts/AppLayout';
import AppLayoutNoFooter from './layouts/AppLayoutNoFooter';
import React from 'react';
import './App.css';
import Home from './pages/home/Home';
=======
import Visitas from './pages/visitas/Visitas';
import Wine from './pages/wine/Wine';
import NotFound from './components/shared/NotFound';
import './services/i18n';
>>>>>>> Stashed changes



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

