import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import SelectedCategory from './pages/SelectedCategory.jsx';
import Search from './pages/Search.jsx';
import SingleItem from './components/SingleItem.jsx';
import Recipes from './pages/Recipes.jsx';
import Resources from './pages/Resources.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { base_url } from './Links/links.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/categories/:category",
        element: <SelectedCategory/>
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/items/:id",
        element: <SingleItem />,
        loader: ({params}) => fetch(`${base_url}/api/items/${params.id}`)
      },
      {
        path: "/recipes",
        element: <Recipes/>
      },
      {
        path: "/resources",
        element: <Resources />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);