import React from 'react';
import './welcomepage.css';
import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {
  const navigate = useNavigate();
  const goToQuiz = () => {
    navigate('/quiz');
  };
  return (
    <div className="welcome-background">
      <div className="welcome-text-container">
        <h1>Welcome to the React knowledge tester</h1>
        <p>This is a simple quiz to test the knowledge of React</p>
      </div>
      <button type="button" onClick={goToQuiz}>
        Start the quiz
      </button>
      <footer className="linkedin-links">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/joshua-harris-7310b2109/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joshua-harris-7310b2109/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joshua-harris-7310b2109/">
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
