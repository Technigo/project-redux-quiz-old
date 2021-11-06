import React from 'react'
import { useSelector } from 'react-redux'

import './score.css'

export const Score = () => {
  const questions = useSelector((store) => store.quiz.questions);

  return (
    <section className="score_container">
      <h1 className="score_title">Score</h1>
      <h2 className="score_counter">0</h2>
      <section className="score_map">
        {questions.map((question) => {
          return <div className="score_round" key={question}><p className="score_question_number">{question.id}</p></div>
        })}
      </section>
    </section>
  )
}
