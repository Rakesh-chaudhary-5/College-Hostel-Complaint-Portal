import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Feed from './components/Feed';
import Admin from './components/Admin';

const root = document.getElementById("root");
 const router = createBrowserRouter([
  {
        path: '/',
        element: <App />,
    
    children: [
        {
            path: '/',
            element: <Home />
        },
         {
            path:"register",
            element: <Register />,
        },
        {
            path:"login",
            element: <Login />
            
        },
        {
            path:"feed",
            element: <Feed />
        },
        {
            path:"admin",
            element: <Admin />
        }
      ]
    }
 ])


ReactDOM.createRoot(root).render(
   <RouterProvider router={router} />
)
