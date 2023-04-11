import React, { useState } from 'react';
import Results from 'components/Results';
import { useSelector } from 'react-redux';
import { CurrentQuestion } from './CurrentQuestion'

const Main = () => {
  const [score, setScore] = useState(0);
  const showResults = useSelector((reduxStore) => reduxStore.quiz.quizOver)

  return (
    <>
      {!showResults && (<CurrentQuestion score={score} setScore={setScore} />)}
      {showResults && (<Results score={score} />)}

    </>

  )
}

export default Main;