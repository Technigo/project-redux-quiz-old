import React from 'react';
import { Link } from 'react-router-dom';

export const StartPage = () => {
  return (
    <>
      <h1>Movie Quiz!!!</h1>
      <Link to="/quiz"><button type="button">Start quiz</button></Link>
    </>
  )
};