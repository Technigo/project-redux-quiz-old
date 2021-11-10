import React, { useState } from 'react'
import Hamburger from './Hamburger';

import './Header.css'

const Navigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
      <div className="navigation-container">
        <h2 className="contact-info">Contact Us</h2>
        <a className="contact-link" href="https://github.com/anndimi" target="_blank" rel="noopener noreferrer">Anna Dimitrakopoulos</a>
        <a className="contact-link" href="https://github.com/madeleinesvensson" target="_blank" rel="noopener noreferrer">Madeleine Svensson</a>
        <a className="contact-link" href="https://github.com/MarySnopok" target="_blank" rel="noopener noreferrer">Mariia Snopok</a>
        <a className="contact-link" href="https://github.com/ebbadelsol" target="_blank" rel="noopener noreferrer">Ebba Delsol</a>
        <a className="contact-link" href="https://github.com/loulunds" target="_blank" rel="noopener noreferrer">Lousanne Lundström</a>
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger />
      </div>

      <style jsx>{`
              .navigation-container {
                display: ${hamburgerOpen ? 'flex' : 'none'};
                flex-direction: column;
                right: 0;
                top: 90px;
                height: 90vh;
                width: 200px;
                position: absolute;
                background-color: #4e1d10e1;
                text-align: center;
                }
                .contact-link{
                  font-size: 18px;
                  text-decoration: none;
                }
            `}
      </style>
    </>
  )
}

export default Navigation