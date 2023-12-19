import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Tasacion from './pages/Tasacion';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    /*   errorElement: <NotFound />, */
      children: [
        {
          path: "/",
          element: <Home />
        },
         {
            path: "/resultado",
            element: <Tasacion />
          },
          /*
          {
            path: "/capital-guessing-game",
            element: <CapitalGame />
          },
          {
            path: "learn-about-countries",
            element: <Wiki />
          } */
      ]
    },
    
  ]);

  
  
  export default router;