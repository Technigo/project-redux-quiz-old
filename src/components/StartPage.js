import React from 'react'
import { Link } from 'react-router-dom';

export const StartPage = (() => {
  return (
    <div>
      <Link to="/quiz">
        <button type="button">
          <h1>
What heter djuret?
          </h1>

          <h2>
¿Como se llama el animal?
          </h2>
          <p>Börja spela empieza a jugar</p>
        </button>
      </Link>
    </div>
  )
})