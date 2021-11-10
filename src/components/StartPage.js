/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';


const StartPage = () => {
    return (

      <div>
        <img src="./assets/movie-quiz-background.jpg" alt="movie" />
        <h1>MOVIE TIME</h1>
        <Link to="/quiz">
          <button className="start-button">START QUIZ HERE!</button>
        </Link>
      </div>
    );
  };
  
  export default StartPage;