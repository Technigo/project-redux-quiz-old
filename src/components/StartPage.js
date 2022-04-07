import React from 'react';
import { Link } from 'react-router-dom';
import { StartButton } from './Button';
import 'startpage.css';


export const StartPage = () => {
  return (
    <main className="startpage">
      <Link to="/quiz">
        <StartButton/>
      </Link>
    </main>
    );
  };