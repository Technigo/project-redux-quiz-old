import React from 'react';
import hamburgerIcon from 'assets/hamburger-icon.png'
import './Header.css'

const Hamburger = () => {
  return (
    <div>
      <div className="hamburger">
        <img className="hamburger-icon" src={hamburgerIcon} alt="navigation" />
      </div>

      <style jsx>{`
        .hamburger{
            position: fixed;
            top: 20px;
            right: 10px;
            z-index: 10;
        }

        .hamburger-icon{
            width: 50px;
            height: 50px;
            cursor: pointer;
        }
        `}
      </style>
    </div>
  )
}

export default Hamburger