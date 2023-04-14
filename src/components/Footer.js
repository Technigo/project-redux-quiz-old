import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <a href="https://www.linkedin.com/in/annika-lindberg-a3398b263/"><img src="/images/annika.jpg" className="contact-logo" alt="link to Annika's linkedin" /></a>
        <a href="https://bridgetmailley.com/"><img src="/images/bridget.jpg" className="contact-logo" alt="link to Bridget's portfolio" /></a>
        <a href="https://fiona-klacar-portfolio.netlify.app/"> <img src="/images/fiona.jpg" className="contact-logo" alt="link to Fiona's portfolio" /></a>
        <a href="https://frida-nordenlow-portfolio.netlify.app//"><img src="/images/frida.jpg" className="contact-logo" alt="link to Frida's portfolio" /></a>
      </div>
      <div className="about-me">
        <p>Designed by Annika, Bridget, Fiona, & Frida. Technigo Web Development Bootcamp 2023.</p>
      </div>
    </footer>
  )
}