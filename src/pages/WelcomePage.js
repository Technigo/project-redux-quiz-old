import React from 'react';
import './welcomepage.css';
import { useNavigate } from 'react-router-dom';
import { Footer } from 'components/footer';

export const WelcomePage = () => {
  const navigate = useNavigate();
  const goToQuiz = () => {
    navigate('/quiz');
  };
  return (
    <div className="welcomePage">
      <div className="content">
        <div className="welcome-text-container">
          <h1>Hello there friend 👋 </h1>
          <p>Ready to Rumbre with React?</p>
        </div>
        <button type="button" onClick={goToQuiz}>
        Start the quiz
        </button>
      </div>
      <div className="welcome-background" />
      <Footer />
    </div>
  );
};
