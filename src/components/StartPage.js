import React from 'react'
import { Link } from 'react-router-dom'
import { StartButton } from './Buttons'

export const StartPage = () => {

  return (
    <div>
      <h1>QUIZ</h1>
      <Link to="/quiz">
        <StartButton />
      </Link>
    </div>
  )
}