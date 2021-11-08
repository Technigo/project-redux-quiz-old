import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      HomePage
      <Link to='/quiz'>Start quiz</Link>
    </div>
  )
}

export default HomePage
