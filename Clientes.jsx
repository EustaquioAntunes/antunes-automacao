import React from 'react'

const logos = [
  {src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Bunge_logo.svg', alt: 'Bunge'},
  {src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Unilever.svg', alt: 'Unilever'},
  {src: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Thyssenkrupp_AG_Logo_2015.svg', alt: 'ThyssenKrupp'},
  {src: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/KHD_Humboldt_Wedag_Logo.svg', alt: 'KHD'},
  {src: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Olam_logo.svg', alt: 'OFI'}
]

export default function Clientes(){
  return (
    <div className="container page">
      <h2>Principais Clientes</h2>
      <p>Há 20 anos impulsionando indústrias com segurança e inovação.</p>
      <div className="clients-grid">
        {logos.map((l,i)=>(
          <div key={i} className="client">
            <img src={l.src} alt={l.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
