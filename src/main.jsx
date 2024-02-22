import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { CartProvider } from './context/cartContext/index.jsx'
import { ConvidadoProvider } from './context/convidado/index.jsx'
import Content from './components/content/index.jsx'
import Presents from './components/presents/index.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Content />
    },
    {
      path: "/presentes",
      element: <Presents />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
        <ConvidadoProvider>
          <RouterProvider router={router}/>
    </ConvidadoProvider>
    </CartProvider>
  </React.StrictMode>,
)
