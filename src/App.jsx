import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Home from "./Home/Home.jsx"
import About from "./About/About.jsx"
import Error404 from "./Error404/Error404.jsx"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
