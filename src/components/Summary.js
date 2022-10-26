import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { quiz } from 'reducers/quiz'
/* import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'; */

export const Summary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleRestart = () => {
    dispatch(quiz.actions.restart())
    navigate('/')
  }
  return (
    <>
      <h1>Summary goes here</h1>
      <div>
        <iframe src="https://open.spotify.com/embed/track/5uES1C2NgkdrNHiCwf9jRr?si=d85bdfd5319b4f2d" width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="hej" />
      </div>
      <button onClick={handleRestart} type="button">RESTART</button>
    </>
  )
}