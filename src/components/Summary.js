import React from "react";
import { useSelector, useDispatch } from "react-redux";



import { quiz } from "../reducers/quiz";
import { FallingEmojis } from "falling-emojis";

export const Summary = () => {
  const dispatch = useDispatch();

  // asking store to give us anwers from quiz object
  const answers = useSelector((state) => state.quiz.answers);

  // created this function to take restart function from the store
  const restartQuiz = () => {
    dispatch(quiz.actions.restart());
  };

  /* for every correct answer, the score gets rised */
  answers.forEach((item) => {
    if (item.isCorrect) {
      dispatch(quiz.actions.riseScore());
      return "correct";
    } else {
      return "wrong";
    }
  })

  const score = useSelector((state) => state.quiz.score)

  /* Here We use a if-statment w the score-value to get confetti or raindrops, install npm install --save falling-emojis and https://www.npmjs.com/package/react-confetti */
  return  ( 
    <main className="SummaryContainer" >
      {score >= 4 ? <FallingEmojis emoji={'🎉'} /> : <FallingEmojis emoji={'💧'} />}
      <section className="SummaryTextContent">
        <div className="SummaryText"> 
          <h2 className="SummaryTextConfetti">Summary</h2>
          <p className="SummaryTextConfetti-p">Score: {score}/{answers.length}</p>
          <button className="SummaryTextConfetti-btn"
            type="submit"
            onClick={() => restartQuiz()}>Restart the quiz
          </button>
        </div>     
      </section>
    </main> 
  )
};
