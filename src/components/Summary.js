import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { QuestionBackground } from 'components/CurrentQuestion'
import { quiz } from 'reducers/quiz'
import marieCurie from 'images/marieCurie.jpg'
import ameliaEarhart from 'images/ameliaEarhart.jpg'
import valentinaTereshkova from 'images/valentinaTereshkova.jpg'
import adaLovelace from 'images/adaLovelace.jpg'
import ursulaVonDerLeyen from 'images/ursulaVonDerLeyen.jpg'

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
    padding: 10px;
  }

  .restart-btn,
  .answers-btn {
    border: none;
    padding: 15px;
    margin: 10px;
    border-radius: 50px;
    color: #326886;
    background-color: #d2e9f5;
    cursor: pointer;
  }

  h1 {
    color: #435a67;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    color: #435a67;
    font-size: 20px;
    margin: 0;
    margin-bottom: 5px;
    background-color: #b58526;
    // width: 50%;
    align-items: center;
    border: solid #435a67 2px;
    border-radius: 10px;
    padding: 5px;
  }

  h3 {
    // color: #435a67;
    color: #d2e9f5;
    margin-top: 10px;
    margin: 0;
    font-size: 15px;
  }

  .answer {
    // color: #d2e9f5;
    color: #435a67;
    font-size: 15px;
    margin: 0;
    margin-bottom: 5px;
  }

  h5 {
    color: #f5ca73;
    font-size: 20px;
    margin: 0;
  }
`
const PicturesStyling = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  img {
    width: 75%;
    padding: 3%;
  }
`
const Copyright = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: #b58526;
  margin-bottom: 1rem;
`

export const Summary = () => {
  const dispatch = useDispatch()
  const answerSummary = useSelector((state) => state.quiz.answers)
  const picturesSummary = useSelector((state) => state.quiz.questions)
  console.log(picturesSummary, 'hitta')
  const [visible, setVisible] = useState(false)

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
          <h1>Summary</h1>
          <h2>You got {correctAnswer.length} out of 5!</h2>
          {answerSummary.map((answer) => {
            console.log(answer)
            return (
              <div key={answer.questionId} className="answerBox">
                <h3>
                  {answer.questionId}: {answer.question.questionText}
                </h3>
                <h3 className="answer">Your answer was: {answer.answer}</h3>
              </div>
            )
          })}

          <button
            type="button"
            className="answers-btn"
            onClick={() => setVisible(!visible)}
          >
            Wanna see the right answers?
          </button>
          {visible && (
            <PicturesStyling>
              <div>
                <img src={marieCurie} alt="marieCurie" />
                <img src={ameliaEarhart} alt="ameliaEarhart" />
                <img src={valentinaTereshkova} alt="valentina" />
                <img src={adaLovelace} alt="adaLovelace" />
                <img src={ursulaVonDerLeyen} alt="ursula" />
              </div>
            </PicturesStyling>
          )}

          <button
            type="button"
            onClick={() => onRestartButton()}
            className="restart-btn"
          >
            Restart
          </button>
        </div>
      </SummaryStyling>
      <Copyright>
        Quiz made by Joanna Lodell, Vanessa Hajek,
        <br />
        Therese Nyman and Ida Halling
      </Copyright>
    </QuestionBackground>
  )
}
