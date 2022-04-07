import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { QuestionBackground } from 'components/CurrentQuestion'
import { quiz } from 'reducers/quiz'
// import adaLovelace from './images/adaLovelace'

const SummaryStyling = styled.div`
  margin-top: 10%;
  background-color: #7da7be;
  padding: 30px;
  margin: auto;
  width: 50vw;
  border-radius: 10px;
  border: #b58526 solid 2px;
  text-align: center;
  display: flex;

  .answerBox {
    display: flex;
    text-align: center;
    flex-direction: column;
  }

  .restart-btn {
    border: none;
    padding: 15px;
    margin: 10px;
    border-radius: 50px;
    color: #326886;
    background-color: #d2e9f5;
    cursor: pointer;
  }

  h1 {
    color: #d2e9f5;
    font-size: 25px;
    margin: 0;
  }

  h2 {
    color: #435a67;
    font-size: 20px;
    margin: 0;
  }

  h3 {
    color: #d2e9f5;
    margin: 0;
  }

  h4 {
    color: #435a67;
    font-size: 20px;
    margin: 0;
  }

  h5 {
    color: #f5ca73;
    font-size: 20px;
    margin: 0;
  }
`

export const Summary = () => {
  const dispatch = useDispatch()
  const answerSummary = useSelector((state) => state.quiz.answers)
  const picturesSummary = useSelector((state) => state.quiz.questions)
  console.log(picturesSummary, 'hitta')
  // const question = useSelector(
  //   (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  // )

  const onRestartButton = () => {
    dispatch(quiz.actions.restart())
  }
  const correctAnswer = answerSummary.filter((answers) => {
    return answers.isCorrect === true
  })

  return (
    <QuestionBackground>
      <SummaryStyling>
        <div>
          <h2>You got {correctAnswer.length} out of 5!</h2>
          <h1>These are your answers:</h1>
          {answerSummary.map((answer) => {
            console.log(answer)
            return (
              <div key={answer.questionId} className="answerBox">
                {' '}
                <h4>Question:</h4>
                <h4>
                  {answer.questionId}: {answer.question.questionText}
                </h4>
                <h3>Your answer is:</h3>
                <h5>{answer.answer}</h5>
              </div>
            )
          })}
          {/* <div>
            <img src={picturesSummary.answerUrl} alt="Ada Lovelace" />
          </div> */}
          {/* {picturesSummary.map((answerURL) => {
            console.log(picturesSummary, 'bilder')
            return (
              <img key={answerURL.id} src={answerURL.answerURL} alt="images" />
            )
          })} */}
          <button type="button" className="answers-btn">
            Wanna see the right answers? Click here!
          </button>
          <button
            type="button"
            onClick={() => onRestartButton()}
            className="restart-btn"
          >
            Restart
          </button>
        </div>
      </SummaryStyling>
    </QuestionBackground>
  )
}
