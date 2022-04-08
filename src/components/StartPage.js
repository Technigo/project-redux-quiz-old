import React from 'react';
import { Link } from 'react-router-dom';
import { StartButton } from './Button';
import icon from 'assets/icon.png'
import 'startpage.css';

export const StartPage = () => {

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