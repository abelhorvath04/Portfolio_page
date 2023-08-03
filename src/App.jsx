import React, { useEffect } from 'react'
import './App.css'
import NavigationLine from './components/NavigationLine'
import Footer from './components/Footer'
import Main from './pages/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Skills from './pages/Skills'
import Work1 from './pages/Work1'
import Work2 from './pages/Work2'
import Work3 from './pages/Work3'
import Work4 from './pages/Work4'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <NavigationLine />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Calculator" element={<Work1 />} />
        <Route path="/Gallery" element={<Work2 />} />
        <Route path="/ToDo" element={<Work3 />} />
        <Route path="/Forum" element={<Work4 />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
