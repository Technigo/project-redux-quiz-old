import React from 'react'
import { CurrentQuestion } from 'components/CurrentQuestion';
import Summary from 'components/Summary';
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Button } from './Buttons';

const Main = () => {
  const dispatch = useDispatch()
  const quizOver = useSelector((store) => store.quiz.quizOver);
  console.log(quizOver)

  const onRestart = () => {
    dispatch(quiz.actions.restart());
  }

    const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
  }


  if (!quizOver) {
    return (
      <main>
        <CurrentQuestion />
        <Button
          handleClick={() => onNextQuestion()}
          buttonText="Next question" />
      </main>
    )
  } else {
    return (
      <main>
        <Summary />
        <Button
          handleClick={() => onRestart()}
          buttonText="Start over" />
      </main>
    )
  }
}

export default Main;