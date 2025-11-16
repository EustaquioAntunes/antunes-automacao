import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <div className="logo">A</div>
          <div>
            <h1>Antunes</h1>
            <small>Automação de Sistemas Industriais</small>
          </div>
        </div>
        <nav className="navlinks">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/historia">Nossa História</NavLink>
          <NavLink to="/servicos">O que Fazemos</NavLink>
          <NavLink to="/clientes">Clientes</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>
      </div>
    </header>
  )
}
