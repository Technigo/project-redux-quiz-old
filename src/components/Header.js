import React from 'react'
import './Header.css'
import logo from '../assets/logo-icon.png'

const Header = () => {
    return (
        <section className="header-container">
            <h1 className="quiz-name">Food Quiz</h1>
            <img className="logo-icon" src={logo} alt="logo" />
        </section>
    )
}

export default Header