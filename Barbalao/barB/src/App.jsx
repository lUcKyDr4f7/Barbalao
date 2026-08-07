import './App.css';

import MenuProvider from './Contexts/MenuProvider/MenuProvider.jsx';
import CartProvider from './Contexts/CartProvider/CartProvider.jsx';
import { AuthProvider, useAuth } from './Routes/AuthContext.jsx';

import { useState, useEffect, create } from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router.jsx';
import axios from "axios";


function App() {

  return (
    <AuthProvider>
      <MenuProvider>
        <CartProvider>
          <RouterProvider router={Router()} />
        </CartProvider>
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;
