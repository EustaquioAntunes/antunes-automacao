import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Historia from './pages/Historia'
import Servicos from './pages/Servicos'
import Clientes from './pages/Clientes'
import Contato from './pages/Contato'

export default function App(){
  return (
    <div className="site-root">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
