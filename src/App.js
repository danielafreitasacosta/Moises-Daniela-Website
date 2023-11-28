import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NotFound from './pages/not-found/NotFound';
import Info from './pages/info/Info';
import History from './pages/history/History';
import { Suspense } from 'react';
import AppLayout from './layouts/AppLayout';
import AppLayoutNoFooter from './layouts/AppLayoutNoFooter';
import React from 'react';
import './App.css';
import Home from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense><AppLayout /></Suspense>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/info',
        element: <Info />
      },
    ]
  },
  {
    path: '/history',
    element: <Suspense><AppLayoutNoFooter /></Suspense>,
    children: [
      {
        index: true,
        element: <History />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return (
    <div className="App">
      <h1>React Image Grid</h1>
      <Home />
    </div>
  );
}

export default App;

/*function App() {
  return <RouterProvider router={router} />
}

export default App;*/
