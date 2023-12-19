import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Tasacion from './pages/Tasacion';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
         {
            path: "/resultado",
            element: <Tasacion />
          },
      ]
    },
    
  ]);

  
  
  export default router;