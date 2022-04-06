import React from 'react'
import { useSelector, useDispatch } from "react-redux"

import { quiz } from "reducers/quiz"

import { Background, FlexDiv, RightAnswerDisplay, ResultHeading } from "styles"

export const Results = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch();
  console.log(answers)

  return (
    <>
    <Background>
      <FlexDiv>
      <ResultHeading>Correct answers</ResultHeading>
      {answers.map(answer => (
        <div key={answer.question.id}>
          <RightAnswerDisplay>{answer.question.options[answer.question.correctAnswerIndex]}</RightAnswerDisplay>
          <p>Your Answer: {answer.answer}</p>
        </div>
      ))}
      <button onClick={() => dispatch(quiz.actions.restart())}>Restart</button>
      </FlexDiv>
    </Background>
    </>
  )
}
