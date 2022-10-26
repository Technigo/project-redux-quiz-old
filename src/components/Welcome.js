import React from 'react'
import { Link } from 'react-router-dom'

export const Welcome = () => {
  return (
    <Link to="/quizflix"><button type="button">start game</button></Link>
  )
}