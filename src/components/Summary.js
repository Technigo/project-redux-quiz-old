import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


import { quiz } from '../reducers/quiz';
import Confetti from 'react-confetti' 
import { FallingEmojis } from 'falling-emojis';

export const Summary = () => {
  const dispatch = useDispatch()

  // asking store to give us anwers from quiz object
  const answers = useSelector((state) => state.quiz.answers)


  // created this function to take restart function from the store
  const restartQuiz = () => {
    dispatch(quiz.actions.restart())
  }


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

<main className="SummaryContainer" >
<FallingEmojis emoji={'🎉'} />
<section className="SummaryTextContent">
 <div className="SummaryText"> 
<h2 className="SummaryTextConfetti">Summary</h2>
<p className="SummaryTextConfetti-p">Score: {score}/{answers.length}</p>
    <button className="SummaryTextConfetti-btn"
        type="submit"
        onClick={() => restartQuiz()}>Restart the quiz
      </button>
</div>     </section>
</main> 

)

} else {

  return (




<main className="SummaryContainer" >
<FallingEmojis emoji={'💧'} />
<section className="SummaryTextContent">
 <div className="SummaryText"> 
<h2 className="SummaryTextRain">Summary</h2>
<p className="SummaryTextRain-p">Score: {score}/{answers.length}</p>
    <button className="SummaryTextRain-btn"
        type="submit"
        onClick={() => restartQuiz()}>Restart the quiz
      </button>
</div>     </section>
</main> 
  )
}




};
