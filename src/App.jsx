import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Guidelines from './pages/Guidelines'
import Preparation from './pages/Preparation'
import Registration from './pages/Registration'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/preparation" element={<Preparation />} />
            <Route path="/register/:projectId" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 
