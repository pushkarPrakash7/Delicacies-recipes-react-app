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
        loader: ({params}) => fetch(`http://localhost:5000/api/items/${params.id}`)
      },
      {
        path: "/recipes",
        element: <Recipes/>
      },
      {
        path: "/resources",
        element: <Resources/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);