import React from 'react'
import './Header.css'
import logo from '../assets/logo-icon.png'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <h1 className="quiz-name">Food Quiz</h1>
        <img className="logo-icon" src={logo} alt="logo" />
      </div>
      <Navigation />
    </div>
  )
}

export default Header