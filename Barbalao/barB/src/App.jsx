import './App.css';
import { AuthProvider, useAuth } from './Routes/AuthContext.jsx';
import { useState, useEffect, create } from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router.jsx';
import axios from "axios";


function App() {

  return (
    <AuthProvider>
      
      <RouterProvider router={Router()} />

    </AuthProvider>
  );
}

export default App;
