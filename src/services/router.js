import { createBrowserRouter } from "react-router-dom";
import Contact from 'src/pages/contact/Contact';
import History from 'src/pages/history/History';
import Home from 'src/pages/home/Home';
import Wine from 'src/pages/wine/Wine';
import NotFound from "src/pages/notfound/NotFound";


export const RoutesPath = {
  CONTACTO: '/contacto',
  WINE: '/wine'

}

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },
  {
    path: RoutesPath.CONTACTO,
    element: <Contact />
  },
  {
    path: '/history',

    element: <History />
  },
  {
    path: RoutesPath.WINE,
    element: <Wine />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router; 