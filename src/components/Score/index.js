import React from 'react'
import { useSelector } from 'react-redux'

import './score.css'

export const Score = () => {
  const score = useSelector((store) => store.quiz.score);
  const questions = useSelector((store) => store.quiz.questions);
  const answers = useSelector((store) => store.quiz.answers)

  return (
    <section className="score_container">
      <h1 className="score_title">Score</h1>
      <h2 className="score_counter">{score}</h2>
      <section className="score_map">
        {questions.map((question, index) => {
          let answerClassName = '';
          if (answers[index] && answers[index].isCorrect === true) {
            answerClassName = 'correct'
          } else if (answers[index] && answers[index].isCorrect === false) {
            answerClassName = 'incorrect'
          }
          return <div className={`score_round ${answerClassName}`} key={question.id}><p className="score_question_number">{question.id}</p></div>
        })}
      </section>
    </section>
  )
}
