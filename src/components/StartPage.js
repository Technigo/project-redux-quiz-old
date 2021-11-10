/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';


const StartPage = () => {
    return (

      <div>
        <h1 className="heading-startpage">MOVIE TIME</h1>
        <img className="background-startpage" src="./assets/movie-quiz-background.jpg" alt="movie" />
        <Link to="/quiz">
          <button className="start-button">START QUIZ HERE!</button>
        </Link>
      </div>
    );
  };
  
  export default StartPage;