import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Login from "../pages/Login.jsx";
import AdmMenu from "../pages/AdmMenu.jsx";
import AdmPainel from "../pages/AdmPainel.jsx";
import AdmProd from "../pages/AdmProd.jsx";
import AdmCateg from "../pages/AdmCateg.jsx";
import AdmBanner from "../pages/AdmBanner.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import { ProtectedRoute } from "./ProtecaoManeira.jsx";

const Router = (produtos, categorias, subCateg, banners) =>
  createBrowserRouter([
    {
      path: "/",
      element: <Home produtos={produtos} categorias={categorias} subCateg={subCateg} banners={banners}/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about-us",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/adm",
      element: (
        <ProtectedRoute>
          <AdmMenu />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/adm/painel",
      element: (
        <ProtectedRoute>
          <AdmPainel />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "produtos",
          element: <AdmProd produtos={produtos}/>,
        },
        {
          path: "categorias",
          element: <AdmCateg categorias={categorias} subCateg={subCateg}/>,
        },
        {
          path: "banners",
          element: <AdmBanner />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

export default Router;