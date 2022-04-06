import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = () => {

return (

    <div>
        <h1>Welcome to FRIENDS Trivia quiz!</h1>
        <Link to="/quiz">
        <button>Let's start the game!</button>
        </Link>
    </div>

)

}


export default StartPage