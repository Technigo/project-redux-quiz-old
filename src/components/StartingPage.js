import React from 'react'
import { NavLink } from 'react-router-dom';

const StartingPage = () => {
  return (
    <div>
      <h1>Quiz Name</h1>
      <p>This is the quiz</p>
      <p>Good luck!</p>
      <NavLink to="/quiz">
        <button type="button">Lets go!</button>
      </NavLink>
    </div>
  )
}

export default StartingPage;