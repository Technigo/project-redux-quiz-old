/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';


const StartPage = () => {
    return (

      <main className="background-startpage">
        <Link to="/quiz">
          <button className="start-button">START QUIZ HERE!</button>
        </Link>
      </main>
    );
  };
  
  export default StartPage;