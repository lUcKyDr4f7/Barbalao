import { createBrowserRouter, CreateBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'about-us',
                element: <About />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
        children:[
            {   
                path: '/form',
                element: <Form />
            }
        ]
    }
])