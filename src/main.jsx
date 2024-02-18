import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/cartContext/index.jsx'
import { ConvidadoProvider } from './context/convidado/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
        <ConvidadoProvider>
      <App />
    </ConvidadoProvider>
    </CartProvider>
  </React.StrictMode>,
)
