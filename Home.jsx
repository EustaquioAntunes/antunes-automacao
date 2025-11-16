import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="hero container">
      <div className="hero-left">
        <img src="/hero-left.jpg" alt="instalacoes" />
        <div className="card">
          <div className="logo-circle">A</div>
          <h2>AUTOMAÇÃO DE SISTEMAS INDUSTRIAIS</h2>
          <p>20 anos de energia, inovação e confiança para a indústria. Soluções completas em engenharia elétrica e sistemas.</p>
          <p className="author">Eustaquio Antunes Ferreira</p>
        </div>
      </div>
      <div className="hero-right orange">
        <h3>AUTOMAÇÃO<br/>DE SISTEMAS<br/>INDUSTRIAIS</h3>
        <p>Oferecemos projetos elétricos, instrumentação, automação e serviços de comissionamento com foco em segurança e eficiência.</p>
        <ul>
          <li>Projetos elétricos, instrumentação e automação</li>
          <li>Redução do consumo de energia e otimização de custos</li>
          <li>Equipe com ampla experiência</li>
        </ul>
        <Link to="/servicos" className="btn">Saiba mais</Link>
      </div>
    </section>
  )
}
