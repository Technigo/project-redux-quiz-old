import React from 'react';
import hamburgerIcon from 'assets/hamburger-icon.png'
import './Header.css'

const Hamburger = () => {
  const Hamburger = {
    position: "fixed",
    top: "20px",
    right: "10px",
    zIndex: 10,
  }

  const HamburgerIcon = {
    width: "50px",
    height: "50px",
    cursor: "pointer",
  }

  return (
    <div>
      <div style={Hamburger}>
        <img style={HamburgerIcon} className= "hamburger-icon" src={hamburgerIcon} alt="navigation" />
      </div>
    </div>
  )
}

export default Hamburger