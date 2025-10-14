import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
    </Routes>
    </>
  )
}

export default App
