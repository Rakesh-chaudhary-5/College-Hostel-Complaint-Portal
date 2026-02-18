import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Feed from './components/Feed';

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
        }
      ]
    }
 ])


ReactDOM.createRoot(root).render(
   <RouterProvider router={router} />
)
