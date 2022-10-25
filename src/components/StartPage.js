/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'

export const StartPage = () => {
  return (
    <div>
      <h1>WELCOME TO FOOD QUIZ</h1>

      <Link to="/question"><button type="button">START</button></Link>
    </div>
  )
}
