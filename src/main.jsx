import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { TableProvider } from './contexts/TableContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TableProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </TableProvider>
    </BrowserRouter>
  </React.StrictMode>,
) 