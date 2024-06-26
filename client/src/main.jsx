import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from './routes/main';

const router = createHashRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
