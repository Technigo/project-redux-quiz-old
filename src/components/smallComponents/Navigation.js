import React, { useState } from 'react'
import Hamburger from './Hamburger';
import './Header.css'

const Navigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const NavStyle = {
  display: `${hamburgerOpen ? 'flex' : 'none'}`,
  flexDirection: "column",
  right: 0,
  top: "90px",
  height: "85vh",
  width: "200px",
  position: "absolute",
  backgroundColor: "#4e1d10",
  textAlign: "center",
    zIndex: 1,
  borderRadius: "3px",
  };

  const ContactLink = {
    fontSize: "18px",
    textDecoration: "none",
    color: "#dfa02b",
  }

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
      <div style={NavStyle}>
        <h2 className="contact-info">Contact Us</h2>
        <a style={ContactLink} href="https://github.com/anndimi" target="_blank" rel="noopener noreferrer">Anna Dimitrakopoulos</a>
        <a style={ContactLink} href="https://github.com/loulunds" target="_blank" rel="noopener noreferrer">Lousanne Lundström</a>
        <a style={ContactLink} href="https://github.com/madeleinesvensson" target="_blank" rel="noopener noreferrer">Madeleine Svensson</a>
        <a style={ContactLink} href="https://github.com/MarySnopok" target="_blank" rel="noopener noreferrer">Mariia Snopok</a>
        <a style={ContactLink} href="https://github.com/ebbadelsol" target="_blank" rel="noopener noreferrer">Ebba Delsol</a> 
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger />
      </div>
    </>
  )
}

export default Navigation