import './index.css'
import React from 'react'
import {router} from './App.tsx'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import CartProvider from './contexts/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <Toaster 
        position="botton-center" 
        reverseOrder={false}
      />
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
