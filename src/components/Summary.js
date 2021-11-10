import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';
import Confetti from 'react-confetti' 
import { FallingEmojis } from 'falling-emojis';

export const Summary = () => {
  const dispatch = useDispatch()

  // asking store to give us anwers from quiz object
  const answers = useSelector((state) => state.quiz.answers)



  /* for every correct answer, the score gets rised */
  answers.forEach((item) => {
    if (item.isCorrect) {
      dispatch(quiz.actions.riseScore())
    }
  })


  const score = useSelector((state) => state.quiz.score)

/* Here We use a if-statment w the score-value to get confetti or raindrops, install npm install --save falling-emojis and https://www.npmjs.com/package/react-confetti */


if (score >=4){

return  ( 
<div width="100vw">
<Confetti  />
<h2>Summary</h2>
      <p>Score: {score}/{answers.length}</p>
</div> 
)

} else {

  return (
  <div width="100vw">
<FallingEmojis emoji={'💧'} />
     
      <h2>Summary</h2>
      <p>Score: {score}/{answers.length}</p>
    </div>)

}




};
