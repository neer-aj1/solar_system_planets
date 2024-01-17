import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PlanetFullPage from './pages/PlanetFullPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />
},
{
  path: '/planet/:id',
  element: <PlanetFullPage />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
