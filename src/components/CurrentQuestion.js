/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = (props) => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex]);
  // select the question from the store that has the index of currentQuestionIndex
  const wholeStore = useSelector((store) => store);
  console.log(wholeStore);
  const [guessedAnswerIndex, setGuessedAnswerIndex] = useState('');
  const [wrongGuessesCount, setWrongGuessesCount] = useState(0);
  console.log('wholeStore', wholeStore);
  console.log('question', question);
  const { setScore, score } = props;
  console.log(setScore)
  console.log(score)
  console.log(guessedAnswerIndex, setGuessedAnswerIndex, wrongGuessesCount, setWrongGuessesCount)
  const dispatch = useDispatch();

  const notUpdateByReducerQuestion = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex])
  console.log(notUpdateByReducerQuestion)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  const onButtonClick = () => { dispatch(quiz.actions.goToNextQuestion()) }

  return (
    <div>
      <button type="button" onClick={onButtonClick}>Next Question</button>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((singleOption, index) => (
        <div key={index}>
          <input
            type="radio"
            name="answer"
            value={index}
            onChange={(e) => setGuessedAnswerIndex(Number(e.target.value))} />
          <label>{singleOption}</label>
        </div>
      ))}
    </div>
  )
}
