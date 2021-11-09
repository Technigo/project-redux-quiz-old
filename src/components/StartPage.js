import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
    return (

      <wrapper>
        {/* <img src="./images/startimg.gif" alt="movie" /> */}
        <h1>MOVIE TIME</h1>
        <Link to="/quiz">
          <button className="start-button">START QUIZ HERE!</button>
        </Link>
      </wrapper>
    );
  };
  
  export default StartPage;