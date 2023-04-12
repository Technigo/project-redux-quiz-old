import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <main>
      <h1>hej</h1>
      <Link to="/quiz">
        <button type="button">Start Quiz</button>
      </Link>
    </main>
  )
}