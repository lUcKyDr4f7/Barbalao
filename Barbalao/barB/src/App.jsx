import './App.css';

import MenuProvider from './Contexts/MenuProvider/MenuProvider.jsx';
import CartProvider from './Contexts/CartProvider/CartProvider.jsx';
import CategRefProvider from './Contexts/CategRefProvider/CategRefProvider.jsx'
import { AuthProvider, useAuth } from './Routes/AuthContext.jsx';

import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router.jsx';
import axios from "axios";


function App() {

  return (
    <AuthProvider>
      <MenuProvider>
        <CartProvider>
          <CategRefProvider>
            <RouterProvider router={Router()} />
          </ CategRefProvider>
        </CartProvider>
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;
