import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <div>Hello, World</div>,
  },
  {
    path : "/login",
    element : <Login />,
  },
  {
    path : "/dashboard",
    element : <Dashboard />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
