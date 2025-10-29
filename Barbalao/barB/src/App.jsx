import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Login from './pages/Login.jsx';
import FormCriar from './Components/FormCriaP/FormCriar.jsx';

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<FormCriar />} />
    </Routes>
    </>
  )
}

export default App
