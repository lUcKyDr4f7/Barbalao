import './App.css';

import MenuProvider from './Contexts/MenuProvider/MenuProvider.jsx';
import { AuthProvider, useAuth } from './Routes/AuthContext.jsx';

import { useState, useEffect, create } from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router.jsx';
import axios from "axios";


function App() {

  return (
    <AuthProvider>
      <MenuProvider>
        <RouterProvider router={Router()} />
      </MenuProvider>
    </AuthProvider>
  );
}

export default App;
