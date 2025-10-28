import './App.css'


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
