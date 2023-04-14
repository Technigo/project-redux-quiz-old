import React from 'react';
import { Link } from 'react-router-dom';
import TriviaStyle from './TriviaStyle';

const Firstpage = () => {
  const linkStyle = {
    margin: '0',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '36px',
    textShadow: '1px 1px 2px black',
    color: 'white'
  };

  return (
    <TriviaStyle
      text="Can you collect a full cake? Test your Trivia knowledge with this quiz that contains one question from every category!"
      placeholder={<Link to="/quiz" style={linkStyle}>Start</Link>} />
  )
};

export default Firstpage;