import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import router from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/*  <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
