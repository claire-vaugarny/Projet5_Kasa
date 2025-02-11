import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
import Error_404 from "./pages/error-404/Error-404.jsx"
import Logement from "./pages/logement/Logement.jsx"

function App() {
  return (
    <Router>
      <Header />
        <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/error404" element={<Error_404 />} />
        <Route path="*" element={<Navigate to="/error404" />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
