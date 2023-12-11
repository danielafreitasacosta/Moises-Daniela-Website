import { createBrowserRouter } from "react-router-dom";
import Contact from 'src/pages/contact/Contact';
import History from 'src/components/history/History';
import Home from 'src/pages/home/Home';
import Wine from 'src/components/wine/Wine';
import NotFound from "src/components/shared/NotFound";

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
    path: '/shared',
    element: <NotFound />
  }
]); 

export default router; 