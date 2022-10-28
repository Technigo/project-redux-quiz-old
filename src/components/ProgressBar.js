import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
/* import { quiz } from 'reducers/quiz'; */

export const ProgressBar = () => {
  const currentQuestion = useSelector((store) => store.quiz.currentQuestionIndex + 1)
  const finalQuestion = useSelector((store) => store.quiz.questions.length)

  return (
    <div>
      <p>Question {currentQuestion} / {finalQuestion}</p>
      <ProgressWrapper>
        <progress
          className="progress"
          id="progress"
          value={currentQuestion}
          max={finalQuestion} />
      </ProgressWrapper>
    </div>
  )
}

const ProgressWrapper = styled.div`



`

