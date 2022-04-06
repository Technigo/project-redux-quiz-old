import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Summary } from 'components/Summary'
import styled from 'styled-components'

export const QuestionBackground = styled.body`
  margin: 0;
  background-color: #326886;
  height: 100vh;
  padding: 30px;

  .circle {
    position: absolute;
    border-radius: 50%;
    background: white;
    z-index: -1;
  }

  .large {
    width: 400px;
    height: 400px;
    left: -20px;
    top: 30%;
    background-color: #b58526;
  }
`
const QuestionContainer = styled.div`
  background-color: #7da7be;
  margin-top: 10%;
  margin-left: 10%;
  padding: 30px;
  width: 500px;
  height: 400px;
  border-radius: 10px;
  border: #b58526 solid 2px;
  text-align: center;

  h1 {
    color: #d2e9f5;
    font-size: 25px;
  }

  .option-btn {
    border: none;
    background-color: #d2e9f5;
    padding: 15px;
    margin: 10px;
    border-radius: 60px;
    color: #326886;
    cursor: pointer;
  }

  .incorrect-answer {
    background-color: #326886;
    color: gray;
    border: solid gray;
  }

  .correct-answer {
    background-color: #f5ca73;
    color: #326886;
  }

  .next-btn {
    border: none;
    padding: 15px;
    margin: 10px;
    border-radius: 50px;
    color: #326886;
    cursor: pointer;
  }
`

export const CurrentQuestion = () => {
  // @ida getting data from the store / "postnord"
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  // const answer = useSelector(
  //   (state) => state.quiz.answers.find((a) => (a.questionId === question.id))
  // )

  // @ida simply to add a console.log
  // const store = useSelector((state) => state);
  // console.log(store, 'store');

  // @joanna - added to be able to push user through to Summary after last question.
  const quizOver = useSelector((store) => store.quiz.quizOver)

  const userAnswer = useSelector((store) =>
    store.quiz.answers.find((answer) => question.id === answer.questionId)
  )

  // @ida forwarding data from the store / updating the store / "DHL"
  const dispatch = useDispatch()

  const onNextButton = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
    // if (question.correctAnswerIndex === index) {
    //   // dispatch(quiz.actions.goToNextQuestion());
    // } else {
    //   alert('Wrong answer, pls try again!')
    // }
  }

  // This pushes the user to the Summary after last question.
  if (quizOver === true) {
    return <Summary />
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <QuestionBackground>
      <QuestionContainer>
        <div>
          <div className="circle large"></div>
          <h1>Question: {question.questionText}</h1>
          {question.options.map((item, index) => {
            return (
              <button
                className={
                  userAnswer && index === question.correctAnswerIndex
                    ? 'correct-answer option-btn'
                    : userAnswer && index === userAnswer.answerIndex
                    ? 'incorrect-answer option-btn'
                    : 'option-btn'
                }
                type="button"
                key={item}
                onClick={() => onAnswerSubmit(question.id, index)}
                disabled={userAnswer}
                // disabled={answers.length === question.id}
              >
                {item}
              </button>
            )
          })}
          <div>
            <button
              type="button"
              onClick={() => onNextButton()}
              disabled={!userAnswer}
              className="next-btn"
            >
              next
            </button>
          </div>
        </div>
      </QuestionContainer>
    </QuestionBackground>
  )
}
