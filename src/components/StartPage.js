import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = () => {
    return (
    <div>
        <h1>Sex and the City Quiz</h1>
        <p>"I couldn't help but wonder… Could I get every question right on this quiz?"</p>
        <Link to="/quiz">
        <button>Start quiz</button>
        </Link>
    </div>
    )
}

export default StartPage    
