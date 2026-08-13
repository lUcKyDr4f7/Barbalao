import './App.css';

import ModalOpenProvider from './Contexts/ModalOpenProvider/ModalOpenProvider.jsx';
import CartProvider from './Contexts/CartProvider/CartProvider.jsx';
import { AuthProvider, useAuth } from './Routes/AuthContext.jsx';

import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router.jsx';
import axios from "axios";


function App() {

  return (
    <AuthProvider>
      <ModalOpenProvider>
        <CartProvider>
            <RouterProvider router={Router()} />
        </CartProvider>
      </ModalOpenProvider>
    </AuthProvider>
  );
}

export default App;
