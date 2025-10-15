import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Login from './pages/Login.jsx';

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
