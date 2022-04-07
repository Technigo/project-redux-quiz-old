import React from 'react';
import { Link } from 'react-router-dom';
import { StartButton } from './Button';
import { Audio } from './Audio';
import icon from 'assets/icon.png'
import 'startpage.css';



export const StartPage = () => {
  /*const elephantSound = new Audio ("assets/elephantSound.mp3")
  elephantSound.currentTime = 0
  elephantSound.play()*/

  return (
    <main className="startpage">
      <div className='background'>
        <h1 className='intro-title'>Test your elephant knowledge here!</h1>
        <Link to="/quiz">
          <StartButton/>
        </Link>
        <img className="icon" src={icon} alt="icon" />
      </div>
    </main>
  );
};