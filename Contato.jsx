import React from 'react'

export default function Contato(){
  return (
    <div className="container page">
      <h2>Contato</h2>
      <p>
        Eng. Responsável: Eustaquio Antunes Ferreira<br/>
        ANTUNES AUTOMAÇÃO DE SISTEMAS INDUSTRIAIS LTDA<br/>
        Rua Ônix 30, Bairro Lagoa Mansões - Lagoa Santa, MG<br/>
        CEP: 33236-752 - Tel: (31) 9 8260-7665<br/>
        <a href="mailto:eustaquioasi@gmail.com">eustaquioasi@gmail.com</a>
      </p>

      <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('Mensagem enviada (simulação)')}}>
        <input placeholder="Nome" required />
        <input placeholder="E-mail" type="email" required />
        <input placeholder="Assunto" />
        <textarea placeholder="Mensagem" rows="6"></textarea>
        <button className="btn">Enviar mensagem</button>
      </form>
    </div>
  )
}
