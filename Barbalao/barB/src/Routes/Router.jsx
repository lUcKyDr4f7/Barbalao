import { useState } from "react";
import {createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import AdmMenu from '../pages/AdmMenu.jsx';
import AdmPainelProdutos from '../pages/AdmPainelProdutos.jsx';
import AdmPainelCategorias from '../pages/AdmPainelCategorias.jsx';
import AdmPainelBanners from '../pages/AdmPainelBanners.jsx';
import ErrorPage from "../pages/ErrorPage.jsx";
import { ProtectedRoute } from "./ProtecaoManeira.jsx";
import FormCriar from "../Components/FormCriarP/FormCriar.jsx";


const Router = createBrowserRouter (
    [
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage />
        },
        {
            path: "/about-us",
            element: <About/>,
            errorElement: <ErrorPage />
        },
        {
            path: "/login",
            element: <Login/>,
            errorElement: <ErrorPage />

        },
        {
            path: "/adm",
            element: 
                <ProtectedRoute>
                    <AdmMenu />
                </ProtectedRoute>,
            errorElement: <ErrorPage />
        },
        {
            path: "/adm/produtos",
            element: 
                <ProtectedRoute>
                    <AdmPainelProdutos/>
                </ProtectedRoute>,
            errorElement: <ErrorPage />
        },
        {
            path: "/adm/categorias",
            element: 
                <ProtectedRoute>
                    <AdmPainelCategorias/>
                </ProtectedRoute>,            
          
            errorElement: <ErrorPage />
        },
        {
            path: "/adm/banners",
            element:
                <ProtectedRoute>
                    <AdmPainelBanners/>
                </ProtectedRoute>,                
            errorElement: <ErrorPage /> 
        },
        {
          path: "/form",
            element:
                <ProtectedRoute>
                    <FormCriar/>
                </ProtectedRoute>,                
            errorElement: <ErrorPage />
        },
        {
            path: "*", 
            element: <ErrorPage />
        },

    ]
)

export default Router;
